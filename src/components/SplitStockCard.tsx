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
            <div className="space-y-6">
              <div className="text-center pt-8 pb-4">
                <div className="text-white text-xl font-bold mb-1">
                  {info.name} ({info.code})
                </div>
                <div className="text-gray-300 text-sm">
                  {info.timestamp}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl text-white font-black">
                      ¥{info.price}
                    </div>
                    <TrendIcon className={`w-8 h-8 ${changeColor}`} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green text-lg font-bold">涨幅额</span>
                    <span className={`text-white text-base ${changeColor}`}>{info.change}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green text-lg font-bold">前日比</span>
                    <span className={`text-white text-base ${changeColor}`}>{info.changePercent}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green text-lg font-bold">始值</span>
                    <span className="text-white text-base">{latestPrice?.open || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green text-lg font-bold">高值</span>
                    <span className="text-white text-base">{latestPrice?.high || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green text-lg font-bold">终值</span>
                    <span className="text-white text-base">{latestPrice?.close || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green text-lg font-bold">安值</span>
                    <span className="text-white text-base">{latestPrice?.low || info.price}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-600/30">
                    <span className="text-neon-green text-lg font-bold">前日比</span>
                    <span className={`text-white text-base ${changeColor}`}>{info.changePercent}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-green text-lg font-bold">売買高(株)</span>
                    <span className="text-white text-base">{latestPrice?.volume || 'N/A'}</span>
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
