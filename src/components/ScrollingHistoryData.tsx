import { StockPrice } from '../types/stock';
import BlueHeaderCard from './BlueHeaderCard';

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
    <div className="px-4 py-3">
      <div className="max-w-lg mx-auto">
        <BlueHeaderCard
          headerText="三井金″株式″会社診断開始 ≫≫≫"
          style={{ height: '300px' }}
        >
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
                        <span className="text-cyan-200 font-semibold">{price.date}</span>
                        <span className="text-blue-300">•</span>
                        <span className="text-orange-300 text-xs font-semibold">{price.volume || 'N/A'}株</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-200 font-bold">始値</span>
                          <span className="text-orange-300 text-xs font-semibold">{price.open}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-200 font-bold">終値</span>
                          <span className="text-orange-300 text-xs font-semibold">{price.close}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-200 font-bold">前日比</span>
                          <span className="text-orange-300 text-xs font-semibold">{price.change || '0.0'}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-200 font-bold">PER</span>
                          <span className="text-orange-300 font-semibold">{price.per || 'N/A'}<span className="text-[10px]">倍</span></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-200 font-bold">PBR</span>
                          <span className="text-orange-300 font-semibold">{price.pbr || 'N/A'}<span className="text-[10px]">倍</span></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-200 font-bold">利回り</span>
                          <span className="text-orange-300 font-semibold">{price.dividend || 'N/A'}<span className="text-[10px]">%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </BlueHeaderCard>
        <div className="mt-3 text-center">
          <p className="text-xs text-blue-300">
            データ出典: 公開市場情報 | 更新: 準リアルタイム
          </p>
          <p className="text-xs text-blue-400 mt-1">
            ※過去のデータは将来の結果を保証するものではありません
          </p>
        </div>
      </div>
    </div>
  );
}
