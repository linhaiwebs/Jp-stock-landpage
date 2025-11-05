export async function getUSStockData(stockCode) {
  const url = `https://stocknear.com/stocks/${stockCode.toLowerCase()}/history`;

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

    const namePattern = /<h1[^>]*class="[^"]*text-xl[^"]*sm:text-2xl[^"]*font-bold[^"]*"[^>]*>([^<]+)<span[^>]*>\(([A-Z]+)\)<\/span><\/h1>/;
    const nameMatch = html.match(namePattern);

    if (nameMatch) {
      stockName = nameMatch[1].trim();
      stockSubName = nameMatch[2].trim();
      console.log(`[US Stock Scraper] Found stock name: ${stockName} (${stockSubName})`);
    } else {
      const simpleNamePattern = /<h1[^>]*class="[^"]*text-xl[^"]*sm:text-2xl[^"]*font-bold[^"]*"[^>]*>([^<]+)<\/h1>/;
      const simpleMatch = html.match(simpleNamePattern);
      if (simpleMatch) {
        stockName = simpleMatch[1].trim();
        console.log(`[US Stock Scraper] Found stock name: ${stockName}`);
      }
    }

    if (!stockName) {
      console.error(`[US Stock Scraper] Stock name not found for ${stockCode}`);
      return null;
    }

    if (stockName.toLowerCase().includes('stock price history') || stockName.toLowerCase().includes(stockCode.toLowerCase() + ' stock')) {
      console.error(`[US Stock Scraper] Invalid stock page detected for ${stockCode}: ${stockName}`);
      return null;
    }

    const historicalData = parseHistoricalData(html, stockCode);
    let stockPrice = '0';
    let adjClose = '0';
    let change = '0%';
    let stockDate = new Date().toLocaleDateString('en-US');

    if (historicalData.length > 0) {
      const latestData = historicalData[0];
      stockPrice = latestData.close;
      adjClose = latestData.close;
      change = latestData.changePercent || '0%';
      stockDate = latestData.date;
      console.log(`[US Stock Scraper] Using latest data: price=${stockPrice}, date=${stockDate}`);
    } else {
      console.error(`[US Stock Scraper] No historical data found for ${stockCode}`);
      return null;
    }

    console.log(`[US Stock Scraper] Successfully parsed stock info for ${stockCode}`);
    return {
      stockName: stockName || stockCode.toUpperCase(),
      stockSubName: stockSubName || stockCode.toUpperCase(),
      stockPrice: stockPrice,
      adjClose: adjClose,
      change: change,
      stockDate: stockDate
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
    const tbodyMatch = html.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);
    if (!tbodyMatch) {
      console.log(`[US Stock Scraper] No tbody found for ${stockCode}`);
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

        text = text.replace(/<[^>]*>/g, '');
        text = text.replace(/\s+/g, ' ').trim();
        text = text.replace(/&nbsp;/g, ' ');
        text = text.replace(/&amp;/g, '&');
        text = text.replace(/&lt;/g, '<');
        text = text.replace(/&gt;/g, '>');

        cells.push(text);
      }

      if (cells.length >= 8) {
        const changePercent = cells[6].replace('+', '').trim();

        const row = {
          date: cells[0] || '',
          open: cells[1].replace(/,/g, '') || '0',
          high: cells[2].replace(/,/g, '') || '0',
          low: cells[3].replace(/,/g, '') || '0',
          close: cells[4].replace(/,/g, '') || '0',
          adjClose: cells[5].replace(/,/g, '') || '0',
          changePercent: changePercent || '0%',
          volume: cells[7].replace(/,/g, '') || '0'
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
