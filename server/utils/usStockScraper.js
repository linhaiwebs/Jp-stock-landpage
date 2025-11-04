export async function getUSStockData(stockCode) {
  const url = `https://stockanalysis.com/stocks/${stockCode.toLowerCase()}/history/`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      console.error(`Failed to retrieve data for stock code ${stockCode}: HTTP ${response.status}`);
      return null;
    }

    const html = await response.text();

    const stockInfo = parseStockInfo(html);
    if (!stockInfo) {
      console.error(`No stock info found for stock code ${stockCode}`);
      return null;
    }

    const historicalData = parseHistoricalData(html);

    return {
      ...stockInfo,
      historicalData
    };
  } catch (error) {
    console.error(`Error fetching stock data for ${stockCode}:`, error.message);
    return null;
  }
}

function parseStockInfo(html) {
  try {
    const stockNameMatch = html.match(/<div[^>]*class="[^"]*mb-0[^"]*text-2xl[^"]*font-bold[^"]*text-default[^"]*sm:text-\[26px\][^"]*"[^>]*>([^<]+)<\/div>/);
    let stockName = null;
    let stockSubName = null;

    if (stockNameMatch && stockNameMatch[1]) {
      const fullName = stockNameMatch[1].trim();
      if (fullName.includes('(') && fullName.includes(')')) {
        const parts = fullName.split('(');
        stockName = parts[0].trim();
        stockSubName = parts[1].replace(')', '').trim();
      } else {
        stockName = fullName;
      }
    }

    const priceMatch = html.match(/<div[^>]*class="[^"]*text-4xl[^"]*font-bold[^"]*transition-colors[^"]*duration-300[^"]*inline-block[^"]*"[^>]*>\$?([0-9,.]+)<\/div>/);
    const stockPrice = priceMatch ? priceMatch[1] : null;

    const changeMatch = html.match(/<div[^>]*class="[^"]*font-semibold[^"]*inline-block[^"]*text-2xl[^"]*text-(?:green-vivid|red-vivid)[^"]*"[^>]*>([^<]+)<\/div>/);
    let adjClose = null;
    let change = null;

    if (changeMatch && changeMatch[1]) {
      const changeFull = changeMatch[1].trim();
      if (changeFull.includes('(') && changeFull.includes(')')) {
        const parts = changeFull.split('(');
        adjClose = parts[0].trim();
        change = parts[1].replace(')', '').trim();
      }
    }

    const dateMatch = html.match(/<div[^>]*class="[^"]*mt-1[^"]*flex[^"]*items-center[^"]*text-sm[^"]*text-faded[^"]*"[^>]*>([^<]+)<\/div>/);
    const stockDate = dateMatch ? dateMatch[1].trim() : null;

    if (!stockName || !stockPrice) {
      return null;
    }

    return {
      stockName,
      stockSubName,
      stockPrice,
      adjClose,
      change,
      stockDate
    };
  } catch (error) {
    console.error('Error parsing stock info:', error);
    return null;
  }
}

function parseHistoricalData(html) {
  try {
    const tableMatch = html.match(/<table[^>]*class="[^"]*svelte-[^"]*"[^>]*>([\s\S]*?)<\/table>/);
    if (!tableMatch) {
      console.log('No table found in HTML');
      return [];
    }

    const tbodyMatch = tableMatch[0].match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);
    if (!tbodyMatch) {
      console.log('No tbody found in table');
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

        cells.push(text);
      }

      if (cells.length >= 8) {
        rows.push({
          date: cells[0],
          open: cells[1],
          high: cells[2],
          low: cells[3],
          close: cells[4],
          volume: cells[7]
        });
      }
    }

    console.log(`Parsed ${rows.length} rows of historical data`);
    return rows;
  } catch (error) {
    console.error('Error parsing historical data:', error);
    return [];
  }
}
