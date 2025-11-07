import { TrendingUp, TrendingDown } from 'lucide-react';
import { StockInfo, StockPrice } from '../types/stock';
import TurquoiseCard from './TurquoiseCard';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  const isPositive = info.change.includes('+') || parseFloat(info.change) > 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="px-4 py-3">
      <div className="max-w-lg mx-auto">
        <TurquoiseCard>
          <div className="relative z-10 px-4 py-6">
            <div>
              <div className="text-center pt-4 pb-4">
                <div className="text-cyan-200 text-xl font-bold mb-1">
                  {info.name} ({info.code})
                </div>
                <div className="text-blue-200 text-sm">
                  {info.timestamp}
                </div>
              </div>

              <div className="grid gap-1" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-accent-red font-black">
                      ¥{info.price}
                    </div>
                    <TrendIcon className="w-6 h-6 text-accent-red" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-blue-200">{info.change}</span>
                    <span className="text-sm text-blue-200">{info.changePercent}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200 font-bold">始值</span>
                    <span className="text-orange-300">{latestPrice?.open || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200 font-bold">高值</span>
                    <span className="text-orange-300">{latestPrice?.high || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200 font-bold">终值</span>
                    <span className="text-orange-300">{latestPrice?.close || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-200 font-bold">安值</span>
                    <span className="text-orange-300">{latestPrice?.low || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-blue-400/20">
                    <span className="text-cyan-200 font-bold">前日比</span>
                    <span className="text-blue-200">{info.changePercent}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-blue-400/20">
                    <span className="text-cyan-200 font-bold">売買高</span>
                    <span className="text-orange-300">{latestPrice?.volume || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TurquoiseCard>

        <div className="mt-2 text-center">
          <p className="text-xs text-blue-300">
            データ出典: 公開市場情報（準リアルタイム）
          </p>
          <p className="text-xs text-blue-400 mt-1">
            ※本情報は参考資料であり、投資助言ではありません
          </p>
        </div>
      </div>
    </div>
  );
}
