import requests
from bs4 import BeautifulSoup

def get_stock_data(stock_code):
    url = f"https://stockanalysis.com/stocks/{stock_code}/history/"
    response = requests.get(url)
    
    if response.status_code != 200:
        print(f"Failed to retrieve data for stock code {stock_code}")
        return None
    
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # 获取股票信息的容器
    stock_info = soup.find('div', class_='mb-5 flex flex-row items-end space-x-2 xs:space-x-3 bp:space-x-5')
    if not stock_info:
        print(f"No stock info found for stock code {stock_code}")
        return None
    
    # 提取股票名称
    stock_name_full = soup.find('div', class_='mb-0 text-2xl font-bold text-default sm:text-[26px]')
    stock_name_full = stock_name_full.get_text(strip=True) if stock_name_full else None
    
    # 拆分股票名称和股票代码
    stock_name = None
    stock_sub_name = None
    if stock_name_full and '(' in stock_name_full and ')' in stock_name_full:
        stock_name, stock_sub_name = stock_name_full.split('(')
        stock_name = stock_name.strip()  # 去除多余空格
        stock_sub_name = stock_sub_name.replace(')', '').strip()  # 去除括号和多余空格
    
    # 提取股票价格
    stock_price = stock_info.find('div', class_='text-4xl font-bold transition-colors duration-300 inline-block')
    stock_price = stock_price.get_text(strip=True) if stock_price else None
    
    # 提取股票变动
    stock_change_full = stock_info.find('div', class_='font-semibold inline-block text-2xl text-green-vivid')
    stock_change_full = stock_change_full.get_text(strip=True) if stock_change_full else None
    
    # 拆分 Adj. Close 和 Change
    adj_close = None
    change = None
    if stock_change_full and '(' in stock_change_full and ')' in stock_change_full:
        adj_close, change = stock_change_full.split('(')
        adj_close = adj_close.strip()  # 去除多余空格
        change = change.replace(')', '').strip()  # 去除括号和多余空格
    
    # 提取股票日期
    stock_date = stock_info.find('div', class_='mt-1 flex items-center text-sm text-faded')
    stock_date = stock_date.get_text(strip=True) if stock_date else None
    
    # 获取历史数据表格
    table = soup.find('table', class_='svelte-7muvl3')
    if not table:
        print(f"No data table found for stock code {stock_code}")
        return None
    
    first_row = table.find('tbody').find('tr')
    if not first_row:
        print(f"No data found in the table for stock code {stock_code}")
        return None
    
    cells = first_row.find_all('td')
    if len(cells) < 8:
        print(f"Not enough data in the first row for stock code {stock_code}")
        return None
    
    return {
        "StockName": stock_name,
        "StockSubName": stock_sub_name,
        "StockPrice": stock_price,
        "Adj. Close": adj_close,
        "Change": change,
        "StockDate": stock_date,
        "Date": cells[0].get_text(strip=True),
        "Open": cells[1].get_text(strip=True),
        "High": cells[2].get_text(strip=True),
        "Low": cells[3].get_text(strip=True),
        "Close": cells[4].get_text(strip=True),
        "Volume": cells[7].get_text(strip=True)
    }

if __name__ == "__main__":
    stock_code = input("Please enter the stock code: ")
    stock_data = get_stock_data(stock_code)
    if stock_data:
        print(stock_data)