import { StockPrice } from '../types/stock';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  if (prices.length === 0) {
    return null;
  }

  const doubledPrices = [...prices.slice(0, 10), ...prices.slice(0, 10)];

  return (
    <div className="px-4 py-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">历史数据趋势</h2>
          <p className="text-sm text-gray-400">Historical Data Trend</p>
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: 'url(/assets/top2.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px'
          }}
        >
          <div className="relative z-10 px-6 py-4 h-full overflow-hidden">
            <div className="animate-scroll-step">
              {doubledPrices.map((price, index) => {
                const isPositive = price.change && (price.change.includes('+') || parseFloat(price.change) > 0);
                const isNegative = price.change && parseFloat(price.change) < 0;
                const changeColor = isPositive ? 'text-neon-green' : isNegative ? 'text-accent-red' : 'text-gray-400';

                return (
                  <div
                    key={`${price.date}-${index}`}
                    className="h-[100px] flex flex-col justify-center"
                  >
                    <div className="text-center mb-2">
                      <div className="flex items-center justify-center gap-3 text-sm mb-2">
                        <span className="text-gray-300 font-semibold">{price.date}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-xs">{price.volume || 'N/A'} 株</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="text-neon-green font-bold">始值</span>
                        <span className="text-white text-xs">{price.open}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-400 font-bold">终值</span>
                        <span className="text-white text-xs">{price.close}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-yellow-400 font-bold">前日比</span>
                        <span className={`text-xs font-semibold ${changeColor}`}>{price.change || '0.0'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
