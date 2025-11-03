import { StockPrice } from '../types/stock';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  if (prices.length === 0) {
    return null;
  }

  return (
    <div className="px-4 py-6">
      <div className="max-w-lg mx-auto space-y-4">
        {prices.slice(0, 10).map((price, index) => {
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
              className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-accent-gold/30 shadow-orange-glow"
            >
              <div className="px-4 py-3 bg-gradient-to-r from-dark-deep to-dark-tech border-b border-accent-gold/20">
                <div className="text-accent-gold font-semibold text-sm">
                  株|{stockName} {price.date}
                </div>
              </div>

              <div className="px-4 py-4">
                <div className="mb-3">
                  <div className="text-white text-3xl font-black mb-2">
                    ¥{price.close}
                  </div>
                  <div className={`flex items-center gap-2 ${changeColor} text-base font-bold`}>
                    <span>前日比 {price.change || '0.0'}</span>
                    <span>({price.changePercent || '0.00%'})</span>
                  </div>
                </div>

                <div className="relative h-2 bg-dark-deep/50 rounded-full overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r ${progressColor} rounded-full transition-all duration-500`}
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
