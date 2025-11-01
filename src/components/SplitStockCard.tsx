import { TrendingUp, TrendingDown, BarChart3, DollarSign } from 'lucide-react';
import { StockInfo, StockPrice } from '../types/stock';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  const isPositive = info.change.includes('+') || parseFloat(info.change) > 0;
  const changeColor = isPositive ? 'text-trust-green' : info.change === '0.0' ? 'text-gray-400' : 'text-accent-red';
  const changeBgColor = isPositive ? 'bg-trust-green/10' : info.change === '0.0' ? 'bg-gray-500/10' : 'bg-accent-red/10';
  const changeBorderColor = isPositive ? 'border-trust-green/30' : info.change === '0.0' ? 'border-gray-500/30' : 'border-accent-red/30';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="relative mx-4 my-8 animate-slide-up">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="relative bg-gradient-to-br from-dark-card via-dark-tech to-dark-card backdrop-blur-sm rounded-2xl overflow-hidden border border-accent-orange/30 shadow-orange-glow hover:shadow-orange-glow-lg transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>

          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-accent-gold rounded-xl flex items-center justify-center shadow-gold-glow">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">証券コード</div>
                  <div className="text-accent-gold text-xl font-black">{info.code}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">{info.timestamp}</div>
              </div>
            </div>

            <h2 className="text-white text-2xl font-bold mb-6 leading-tight">{info.name}</h2>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <DollarSign className="w-8 h-8 text-accent-gold mt-1" />
                <div>
                  <div className="text-xs text-gray-400 mb-1">現在値</div>
                  <div className="text-white text-4xl font-black tracking-tight">¥{info.price}</div>
                </div>
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${changeBgColor} border ${changeBorderColor}`}>
                <TrendIcon className={`w-5 h-5 ${changeColor}`} />
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-bold ${changeColor}`}>{info.change}</span>
                  <span className={`text-base font-semibold ${changeColor}`}>({info.changePercent})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-dark-card via-dark-tech to-dark-card backdrop-blur-sm rounded-2xl overflow-hidden border border-accent-orange/30 shadow-orange-glow hover:shadow-orange-glow-lg transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl"></div>

          <div className="relative p-6">
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></span>
              当日取引データ
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-deep/50 rounded-lg p-4 border border-accent-orange/20 hover:border-accent-orange/40 transition-all">
                <div className="text-gray-400 text-xs mb-1 font-medium">始値</div>
                <div className="text-white text-xl font-bold">¥{latestPrice?.open || info.price}</div>
              </div>
              <div className="bg-dark-deep/50 rounded-lg p-4 border border-accent-orange/20 hover:border-accent-orange/40 transition-all">
                <div className="text-gray-400 text-xs mb-1 font-medium">高値</div>
                <div className="text-trust-green text-xl font-bold">¥{latestPrice?.high || info.price}</div>
              </div>
              <div className="bg-dark-deep/50 rounded-lg p-4 border border-accent-orange/20 hover:border-accent-orange/40 transition-all">
                <div className="text-gray-400 text-xs mb-1 font-medium">安値</div>
                <div className="text-accent-red text-xl font-bold">¥{latestPrice?.low || info.price}</div>
              </div>
              <div className="bg-dark-deep/50 rounded-lg p-4 border border-accent-orange/20 hover:border-accent-orange/40 transition-all">
                <div className="text-gray-400 text-xs mb-1 font-medium">終値</div>
                <div className="text-white text-xl font-bold">¥{latestPrice?.close || info.price}</div>
              </div>
            </div>

            <div className="mt-4 bg-dark-deep/50 rounded-lg p-4 border border-accent-gold/20">
              <div className="text-gray-400 text-xs mb-1 font-medium">出来高</div>
              <div className="text-accent-gold text-lg font-bold">{latestPrice?.volume || 'N/A'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
