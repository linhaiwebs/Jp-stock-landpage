export async function getUSStockData(stockCode) {
  const url = `https://stockanalysis.com/stocks/${stockCode.toLowerCase()}/history/`;

  console.log(`[US Stock Scraper] Fetching data for ${stockCode} from ${url}`);

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });

    if (!response.ok) {
      console.error(`[US Stock Scraper] Failed to retrieve data for ${stockCode}: HTTP ${response.status}`);
      return null;
    }

    const html = await response.text();
    console.log(`[US Stock Scraper] Successfully fetched HTML for ${stockCode}, length: ${html.length}`);

    const stockInfo = parseStockInfo(html, stockCode);
    if (!stockInfo) {
      console.error(`[US Stock Scraper] Failed to parse stock info for ${stockCode}`);
      return null;
    }

    const historicalData = parseHistoricalData(html, stockCode);
    console.log(`[US Stock Scraper] Successfully parsed ${historicalData.length} historical records for ${stockCode}`);

    return {
      ...stockInfo,
      historicalData
    };
  } catch (error) {
    console.error(`[US Stock Scraper] Error fetching stock data for ${stockCode}:`, error.message);
    console.error(error.stack);
    return null;
  }
}

function parseStockInfo(html, stockCode) {
  console.log(`[US Stock Scraper] Parsing stock info for ${stockCode}`);

  try {
    let stockName = null;
    let stockSubName = null;

    const namePatterns = [
      /<div[^>]*class="[^"]*mb-0[^"]*text-2xl[^"]*font-bold[^"]*text-default[^"]*sm:text-\[26px\][^"]*"[^>]*>([^<]+)<\/div>/,
      /<div[^>]*class="[^"]*mb-0.*?text-2xl.*?font-bold[^"]*"[^>]*>([^<]+)<\/div>/,
      /<h1[^>]*class="[^"]*text-2xl[^"]*"[^>]*>([^<]+)<\/h1>/,
    ];

    for (const pattern of namePatterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        const fullName = match[1].trim();
        console.log(`[US Stock Scraper] Found stock name: ${fullName}`);
        if (fullName.includes('(') && fullName.includes(')')) {
          const parts = fullName.split('(');
          stockName = parts[0].trim();
          stockSubName = parts[1].replace(')', '').trim();
        } else {
          stockName = fullName;
        }
        break;
      }
    }

    const pricePatterns = [
      /<div[^>]*class="[^"]*text-4xl[^"]*font-bold[^"]*transition-colors[^"]*duration-300[^"]*inline-block[^"]*"[^>]*>\$?([0-9,.]+)<\/div>/,
      /<div[^>]*class="[^"]*text-4xl[^"]*font-bold[^"]*"[^>]*>\$?([0-9,.]+)<\/div>/,
      /class="[^"]*text-4xl[^"]*"[^>]*>([0-9,.]+)<\/div>/,
    ];

    let stockPrice = null;
    for (const pattern of pricePatterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        stockPrice = match[1];
        console.log(`[US Stock Scraper] Found stock price: ${stockPrice}`);
        break;
      }
    }

    const changePatterns = [
      /<div[^>]*class="[^"]*font-semibold[^"]*inline-block[^"]*text-2xl[^"]*text-(?:green-vivid|red-vivid)[^"]*"[^>]*>([^<]+)<\/div>/,
      /<div[^>]*class="[^"]*font-semibold[^"]*text-2xl[^"]*text-(?:green|red)[^"]*"[^>]*>([^<]+)<\/div>/,
    ];

    let adjClose = null;
    let change = null;

    for (const pattern of changePatterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        const changeFull = match[1].trim();
        console.log(`[US Stock Scraper] Found change info: ${changeFull}`);
        if (changeFull.includes('(') && changeFull.includes(')')) {
          const parts = changeFull.split('(');
          adjClose = parts[0].trim();
          change = parts[1].replace(')', '').trim();
        } else {
          adjClose = changeFull;
          change = '0%';
        }
        break;
      }
    }

    const datePatterns = [
      /<div[^>]*class="[^"]*mt-1[^"]*flex[^"]*items-center[^"]*text-sm[^"]*text-faded[^"]*"[^>]*>([^<]+)<\/div>/,
      /<time[^>]*>([^<]+)<\/time>/,
      /(\w{3}\s+\d{1,2},\s+\d{4})/,
    ];

    let stockDate = null;
    for (const pattern of datePatterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        stockDate = match[1].trim();
        console.log(`[US Stock Scraper] Found date: ${stockDate}`);
        break;
      }
    }

    if (!stockName) {
      console.error(`[US Stock Scraper] Stock name not found for ${stockCode}`);
      return null;
    }

    if (!stockPrice) {
      console.error(`[US Stock Scraper] Stock price not found for ${stockCode}`);
      return null;
    }

    console.log(`[US Stock Scraper] Successfully parsed stock info for ${stockCode}`);
    return {
      stockName: stockName || stockCode.toUpperCase(),
      stockSubName: stockSubName || '',
      stockPrice: stockPrice || '0',
      adjClose: adjClose || '0',
      change: change || '0%',
      stockDate: stockDate || new Date().toLocaleDateString('en-US')
    };
  } catch (error) {
    console.error(`[US Stock Scraper] Error parsing stock info for ${stockCode}:`, error);
    console.error(error.stack);
    return null;
  }
}

function parseHistoricalData(html, stockCode) {
  console.log(`[US Stock Scraper] Parsing historical data for ${stockCode}`);

  try {
    const tablePatterns = [
      /<table[^>]*class="[^"]*svelte-[^"]*"[^>]*>([\s\S]*?)<\/table>/,
      /<table[^>]*>([\s\S]*?)<\/table>/,
    ];

    let tableMatch = null;
    for (const pattern of tablePatterns) {
      tableMatch = html.match(pattern);
      if (tableMatch) {
        console.log(`[US Stock Scraper] Found table with pattern`);
        break;
      }
    }

    if (!tableMatch) {
      console.log(`[US Stock Scraper] No table found in HTML for ${stockCode}`);
      return [];
    }

    const tbodyMatch = tableMatch[0].match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);
    if (!tbodyMatch) {
      console.log(`[US Stock Scraper] No tbody found in table for ${stockCode}`);
      return [];
    }

    const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    const rows = [];
    let rowMatch;

    while ((rowMatch = rowRegex.exec(tbodyMatch[1])) !== null) {
      const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
      const cells = [];
      let cellMatch;

      while ((cellMatch = cellRegex.exec(rowMatch[1])) !== null) {
        let text = cellMatch[1];

        text = text.replace(/<!--[\s\S]*?-->/g, '');
        text = text.replace(/<span[^>]*class="[^"]*r[rg][^"]*"[^>]*>/g, '');
        text = text.replace(/<[^>]*>/g, '');
        text = text.replace(/\s+/g, ' ').trim();
        text = text.replace(/\$/g, '');

        cells.push(text);
      }

      if (cells.length >= 6) {
        const row = {
          date: cells[0] || '',
          open: cells[1] || '0',
          high: cells[2] || '0',
          low: cells[3] || '0',
          close: cells[4] || '0',
          volume: cells[7] || cells[5] || '0'
        };
        rows.push(row);
      }
    }

    console.log(`[US Stock Scraper] Parsed ${rows.length} rows of historical data for ${stockCode}`);
    return rows;
  } catch (error) {
    console.error(`[US Stock Scraper] Error parsing historical data for ${stockCode}:`, error);
    console.error(error.stack);
    return [];
  }
}
