import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
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
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-accent-gold/50 shadow-neon-gold">
          <div className="bg-gradient-to-r from-dark-deep to-dark-tech px-6 py-4 border-b border-accent-gold/30 flex items-center justify-between">
            <h2 className="text-white text-lg font-bold">【{info.name}】</h2>
            <ChevronRight className="w-6 h-6 text-accent-gold" />
          </div>

          <div className="h-1 bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange"></div>

          <div className="p-6 space-y-6">
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
              <div className="bg-dark-deep/50 rounded-lg p-3 border border-accent-orange/20">
                <div className="text-gray-400 text-xs mb-1">時刻</div>
                <div className="text-white font-semibold">{info.timestamp}</div>
              </div>
              <div className="bg-dark-deep/50 rounded-lg p-3 border border-accent-orange/20">
                <div className="text-gray-400 text-xs mb-1">出来高</div>
                <div className="text-accent-gold font-semibold">{latestPrice?.volume || 'N/A'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
