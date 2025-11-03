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
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative z-10 p-6 pt-20">
            <div className="space-y-6">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <div className="text-4xl text-white font-black mb-2">
                    ¥{info.price}
                  </div>
                  <div className={`flex items-center gap-2 ${changeColor}`}>
                    <TrendIcon className="w-5 h-5" />
                    <span className="text-lg font-bold">{info.change}</span>
                    <span className="text-base font-semibold">({info.changePercent})</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3">
                  <div className="text-gray-400 text-xs mb-1">時刻</div>
                  <div className="text-white font-semibold">{info.timestamp}</div>
                </div>
                <div className="p-3">
                  <div className="text-gray-400 text-xs mb-1">出来高</div>
                  <div className="text-accent-gold font-semibold">{latestPrice?.volume || 'N/A'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
