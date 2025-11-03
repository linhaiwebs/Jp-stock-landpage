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
    <div className="px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: 'url(/assets/top2.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '400px'
          }}
        >
          <div className="relative z-10 px-6 py-6 pt-8 h-full overflow-hidden">
            <div className="animate-scroll-up space-y-4">
              {doubledPrices.map((price, index) => {
                const isPositive = price.change && (price.change.includes('+') || parseFloat(price.change) > 0);
                const isNegative = price.change && parseFloat(price.change) < 0;
                const changeColor = isPositive ? 'text-neon-green' : isNegative ? 'text-accent-red' : 'text-gray-400';
                const progressColor = isPositive ? 'from-neon-green to-trust-green' : isNegative ? 'from-accent-red to-accent-red-dark' : 'from-gray-500 to-gray-600';
                const progressWidth = price.changePercent
                  ? Math.min(Math.abs(parseFloat(price.changePercent)), 10) * 10
                  : 0;

                return (
                  <div
                    key={`${price.date}-${index}`}
                    className="mb-4"
                  >
                    <div className="mb-3 text-center">
                      <div className="text-white text-3xl font-black mb-2">
                        ¥{price.close}
                      </div>
                      <div className={`flex items-center justify-center gap-2 ${changeColor} text-base font-bold`}>
                        <span>前日比 {price.change || '0.0'}</span>
                        <span>({price.changePercent || '0.00%'})</span>
                      </div>
                    </div>

                    <div className="relative h-2 rounded-full overflow-hidden mb-3">
                      <div
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r ${progressColor} rounded-full transition-all duration-500`}
                        style={{ width: `${progressWidth}%` }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2 text-center">
                        <div className="text-gray-400 mb-1">日付</div>
                        <div className="text-white font-semibold">{price.date}</div>
                      </div>
                      <div className="p-2 text-center">
                        <div className="text-gray-400 mb-1">出来高</div>
                        <div className="text-accent-gold font-semibold">{price.volume || 'N/A'}</div>
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
