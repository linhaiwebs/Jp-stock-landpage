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
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: 'url(/assets/top1.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 px-4 py-6">
            <div>
              <div className="text-center pt-18 pb-2">
                <div className="text-white text-xl font-bold mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {info.name} ({info.code})
                </div>
                <div className="text-gray-200 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  {info.timestamp}
                </div>
              </div>

              <div className="grid gap-6" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-3xl text-white font-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                      ¥{info.price}
                    </div>
                    <TrendIcon className={`w-6 h-6 ${changeColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${changeColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold`}>{info.change}</span>
                    <span className={`text-sm ${changeColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold`}>{info.changePercent}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">始值</span>
                    <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-semibold">{latestPrice?.open || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">高值</span>
                    <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-semibold">{latestPrice?.high || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">终值</span>
                    <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-semibold">{latestPrice?.close || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">安值</span>
                    <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-semibold">{latestPrice?.low || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-gray-600/30">
                    <span className="text-neon-green font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">前日比</span>
                    <span className={`${changeColor} drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-semibold`}>{info.changePercent}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-gray-600/30">
                    <span className="text-neon-green font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">売買高</span>
                    <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-semibold">{latestPrice?.volume || 'N/A'}</span>
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
