import express from 'express';
import dotenv from 'dotenv';
import { getCachedDiagnosis, saveDiagnosisToCache } from '../utils/cache.js';
import { getRateLimitStatus } from '../utils/rateLimiter.js';
import { recordUsageStats } from '../utils/stats.js';

dotenv.config();

const router = express.Router();

router.post('/diagnosis', async (req, res) => {
  const startTime = Date.now();

  try {
    const { code, stockData, isInvalidStock } = req.body;

    console.log('Diagnosis request received for stock:', code, 'Invalid stock:', isInvalidStock);

    if (!code || !stockData) {
      console.error('Missing required parameters:', { code, hasStockData: !!stockData });
      await recordUsageStats({ cacheHit: false, apiCall: false, error: true, responseTime: Date.now() - startTime });
      return res.status(400).json({ error: 'Stock code and data are required' });
    }

    const cachedResult = await getCachedDiagnosis(code);
    if (cachedResult) {
      console.log(`Returning cached result for ${code}`);
      const responseTime = Date.now() - startTime;
      await recordUsageStats({ cacheHit: true, apiCall: false, error: false, responseTime });
      return res.json({
        analysis: cachedResult.diagnosis_result,
        cached: true,
        cachedAt: cachedResult.created_at,
        expiresAt: cachedResult.expires_at
      });
    }

    const apiKeysString = process.env.SILICONFLOW_API_KEY || process.env.SILICONFLOW_API_KEYS;
    const siliconflowApiUrl = process.env.SILICONFLOW_API_URL || 'https://api.siliconflow.cn/v1/chat/completions';
    const siliconflowModel = process.env.SILICONFLOW_MODEL || 'Qwen/Qwen2.5-7B-Instruct';

    if (!apiKeysString) {
      console.warn('SILICONFLOW_API_KEY not configured, using mock response');

      const mockAnalysis = `Stock Analysis for ${stockData.name} (${code})\n\nThank you for analyzing ${stockData.name} using our AI-powered stock analysis platform.\n\nCurrent Price: ${stockData.price}\nPrice Change: ${stockData.change} (${stockData.changePercent})\n\nTo receive comprehensive analysis reports and real-time market insights, please add our LINE account "AI Stock Assistant".\n\nOnce added, send the stock code "${code}" or "${stockData.name}" to instantly receive:\n- Detailed technical analysis\n- Market momentum indicators\n- AI-powered investment insights\n- Real-time price alerts\n\nAdd us on LINE now to unlock your complete AI analysis report!\n\nDisclaimer: This information is for educational purposes only and does not constitute financial advice. Always conduct your own research before making investment decisions.`;

      await saveDiagnosisToCache(code, stockData, mockAnalysis, 'mock');
      const responseTime = Date.now() - startTime;
      await recordUsageStats({ cacheHit: false, apiCall: false, error: false, responseTime });
      return res.json({ analysis: mockAnalysis, cached: false, mock: true });
    }

    const apiKeys = apiKeysString.split(',').map(k => k.trim()).filter(k => k);
    const selectedApiKey = apiKeys[0];

    console.log('SiliconFlow API Key selected, making streaming API request...');
    console.log('Using model:', siliconflowModel);

    let prompt;

    if (isInvalidStock) {
      prompt = `Generate a professional error message in the following format:

Thank you for using our AI-powered stock analysis platform.

We encountered an issue processing your request:

股票代码有误，请与人工联系。
(Invalid stock code. Please contact support for assistance.)

To get help with:
- Verifying the correct stock code
- Understanding stock code formats (US: 3+ characters, JP: 4 digits)
- Receiving personalized assistance

Please add our LINE account "AI Stock Assistant" and send your inquiry. Our team will respond promptly to help you.

IMPORTANT: Follow this format strictly.`;
    } else {
      prompt = `You are a professional stock market analyst. Based on the following stock data, create an analysis report in the specified format below.

Stock Information:
Company Name: ${stockData.name}
Stock Code: ${code}
Current Price: ${stockData.price}
Price Change: ${stockData.change} (${stockData.changePercent})
P/E Ratio: ${stockData.per}
P/B Ratio: ${stockData.pbr}
Dividend Yield: ${stockData.dividend}%
Industry: ${stockData.industry}
Market Cap: ${stockData.marketCap}

You must output EXACTLY in the following format:

Thank you for analyzing ${stockData.name} using our AI-powered platform. We have performed comprehensive analysis using momentum indicators, real-time market data, and advanced AI algorithms.

Current Price: ${stockData.price}
Price Change: ${stockData.change} (${stockData.changePercent})

To receive your complete detailed analysis report, please add our LINE account "AI Stock Assistant".

Once you have added our account, send the stock code "${code}" or the company name "${stockData.name}" to receive:

- Comprehensive technical analysis
- Market momentum insights
- Real-time price alerts
- AI-powered investment recommendations

Your personalized AI analysis report will be delivered instantly upon sending your message.

IMPORTANT: Follow this format strictly and do not include any other analysis content.`;
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000);

    let siliconflowResponse;
    try {
      siliconflowResponse = await fetch(
        siliconflowApiUrl,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${selectedApiKey}`,
          },
          body: JSON.stringify({
            model: siliconflowModel,
            messages: [
              {
                role: 'user',
                content: prompt,
              },
            ],
            temperature: 0.7,
            max_tokens: 1500,
            top_p: 0.7,
            top_k: 50,
            frequency_penalty: 0.5,
            stream: true,
          }),
          signal: controller.signal,
        }
      );
      clearTimeout(timeoutId);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        console.error('Request timeout after 45 seconds');
        const responseTime = Date.now() - startTime;
        await recordUsageStats({ cacheHit: false, apiCall: true, error: true, responseTime });
        res.write(`data: ${JSON.stringify({ error: 'Request timed out. Please try again.' })}\n\n`);
        res.end();
        return;
      }
      throw fetchError;
    }

    console.log('SiliconFlow API response status:', siliconflowResponse.status);

    if (!siliconflowResponse.ok) {
      const errorBody = await siliconflowResponse.text();
      console.error('SiliconFlow API error response:', errorBody);
      const responseTime = Date.now() - startTime;
      await recordUsageStats({ cacheHit: false, apiCall: true, error: true, responseTime });
      res.write(`data: ${JSON.stringify({ error: `SiliconFlow API error: ${siliconflowResponse.status}` })}\n\n`);
      res.end();
      return;
    }

    let fullAnalysis = '';
    const reader = siliconflowResponse.body;
    const decoder = new TextDecoder();
    let buffer = '';

    for await (const chunk of reader) {
      buffer += decoder.decode(chunk, { stream: true });
      const lines = buffer.split('\n');

      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;

        if (trimmedLine.startsWith('data: ')) {
          const data = trimmedLine.slice(6).trim();

          if (data === '[DONE]') {
            continue;
          }

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;

            if (content) {
              fullAnalysis += content;
              res.write(`data: ${JSON.stringify({ content })}\n\n`);
            }
          } catch (e) {
            if (data.length > 0) {
              console.error('Error parsing streaming chunk. Data length:', data.length, 'First 200 chars:', data.substring(0, 200));
            }
          }
        }
      }
    }

    decoder.decode();

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();

    console.log('Successfully generated streaming analysis, length:', fullAnalysis.length);

    if (fullAnalysis.trim().length > 0) {
      await saveDiagnosisToCache(code, stockData, fullAnalysis, 'qwen2.5-7b-instruct');
    } else {
      console.warn('Empty analysis result, not caching');
    }

    const responseTime = Date.now() - startTime;
    await recordUsageStats({ cacheHit: false, apiCall: true, error: false, responseTime });

  } catch (error) {
    console.error('Error in diagnosis function:', error);
    console.error('Error stack:', error.stack);

    const responseTime = Date.now() - startTime;
    await recordUsageStats({ cacheHit: false, apiCall: false, error: true, responseTime });

    if (!res.headersSent) {
      res.status(500).json({
        error: 'An error occurred during analysis',
        details: error.message,
        type: error.name,
      });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'An error occurred during analysis', details: error.message })}\n\n`);
      res.end();
    }
  }
});

router.get('/stats', async (req, res) => {
  try {
    const rateLimitStatus = getRateLimitStatus();
    const { getTodayStats } = await import('../utils/stats.js');
    const todayStats = await getTodayStats();

    res.json({
      rateLimit: rateLimitStatus,
      today: todayStats,
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ error: 'Failed to get statistics' });
  }
});

export default router;
