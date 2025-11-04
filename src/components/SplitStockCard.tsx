import { TrendingUp, TrendingDown } from 'lucide-react';
import { StockInfo, StockPrice } from '../types/stock';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  const isPositive = info.change.includes('+') || parseFloat(info.change) > 0;
  const changeColor = isPositive ? 'text-neon-green' : info.change === '0.0' ? 'text-gray-400' : 'text-accent-red';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative z-10 px-4 py-6">
            <div>
              <div className="text-center pt-18 pb-2">
                <div className="text-white text-xl font-bold mb-1">
                  {info.name} ({info.code})
                </div>
                <div className="text-gray-300 text-sm">
                  {info.timestamp}
                </div>
              </div>

              <div className="grid gap-6" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-3xl text-white font-black">
                      ¥{info.price}
                    </div>
                    <TrendIcon className={`w-6 h-6 ${changeColor}`} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${changeColor}`}>{info.change}</span>
                    <span className={`text-sm ${changeColor}`}>{info.changePercent}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold">始值</span>
                    <span className="text-white">{latestPrice?.open || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold">高值</span>
                    <span className="text-white">{latestPrice?.high || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold">终值</span>
                    <span className="text-white">{latestPrice?.close || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold">安值</span>
                    <span className="text-white">{latestPrice?.low || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-gray-600/30">
                    <span className="text-neon-green font-bold">前日比</span>
                    <span className={`${changeColor}`}>{info.changePercent}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-gray-600/30">
                    <span className="text-neon-green font-bold">売買高</span>
                    <span className="text-white">{latestPrice?.volume || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
