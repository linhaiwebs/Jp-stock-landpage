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
          <div className="text-center pt-4 pb-2">
            <h2 className="text-2xl font-bold text-neon-green drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">{stockName} ({prices[0]?.code || '----'})</h2>
          </div>
          <div className="relative z-10 px-6 py-2 h-full overflow-hidden">
            <div className="animate-scroll-step">
              {doubledPrices.map((price, index) => {
                return (
                  <div
                    key={`${price.date}-${index}`}
                    className="h-[110px] flex flex-col justify-center"
                  >
                    <div className="text-center mb-1">
                      <div className="flex items-center justify-center gap-3 text-sm mb-1">
                        <span className="text-neon-green font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.date}</span>
                        <span className="text-gray-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">•</span>
                        <span className="text-accent-red text-xs font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.volume || 'N/A'}株</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-neon-green font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">始値</span>
                          <span className="text-accent-red text-xs font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.open}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-neon-green font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">終値</span>
                          <span className="text-accent-red text-xs font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.close}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-neon-green font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">前日比</span>
                          <span className="text-accent-red text-xs font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.change || '0.0'}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="text-neon-green font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">PER</span>
                          <span className="text-accent-red font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.per || 'N/A'}<span className="text-[10px]">倍</span></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-neon-green font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">PBR</span>
                          <span className="text-accent-red font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.pbr || 'N/A'}<span className="text-[10px]">倍</span></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-neon-green font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">利回り</span>
                          <span className="text-accent-red font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{price.dividend || 'N/A'}<span className="text-[10px]">%</span></span>
                        </div>
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
