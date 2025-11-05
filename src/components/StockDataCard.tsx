import { StockData } from '../types/stock';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockDataCardProps {
  stockData: StockData;
}

export default function StockDataCard({ stockData }: StockDataCardProps) {
  const latestPrice = stockData.prices[0];

  const changeValue = parseFloat(stockData.info.changePercent.replace('%', '').replace('+', ''));
  const isPositive = changeValue >= 0;

  const formatValue = (value: string | undefined) => {
    if (!value || value === '---' || value === 'N/A') return 'N/A';
    return value;
  };

  const formatNumber = (value: string | undefined) => {
    if (!value || value === '0' || value === '---') return 'N/A';
    const num = parseFloat(value.replace(/,/g, ''));
    if (isNaN(num)) return 'N/A';
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-4 bg-blue-400/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30">
      <div className="text-center mb-6">
        <h3 className="text-white text-lg font-bold">
          AI Diagnosis Stock - {stockData.info.timestamp}
        </h3>
      </div>

      <div className="flex gap-6">
        <div className="flex-[0.4] space-y-3">
          <div>
            <div className="text-white/70 text-sm mb-1">Stock Name</div>
            <div className="text-white font-semibold">{stockData.info.name}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1">Stock Code</div>
            <div className="text-white font-semibold">{stockData.info.code}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1">Current Price</div>
            <div className="text-white font-semibold">{formatValue(stockData.info.price)}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1">Change</div>
            <div className="flex items-center gap-2">
              <span className={`font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {stockData.info.changePercent}
              </span>
              {isPositive ? (
                <TrendingUp className="w-5 h-5 text-green-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-400" />
              )}
            </div>
          </div>
        </div>

        <div className="flex-[0.6] grid grid-cols-2 gap-4">
          <div>
            <div className="text-white/70 text-sm mb-1 text-center">Open</div>
            <div className="text-white font-semibold text-center">{formatNumber(latestPrice?.open)}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1 text-center">High</div>
            <div className="text-white font-semibold text-center">{formatNumber(latestPrice?.high)}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1 text-center">Low</div>
            <div className="text-white font-semibold text-center">{formatNumber(latestPrice?.low)}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1 text-center">Close</div>
            <div className="text-white font-semibold text-center">{formatNumber(latestPrice?.close)}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1 text-center">Adj Close</div>
            <div className="text-white font-semibold text-center">{formatNumber(latestPrice?.adjClose)}</div>
          </div>

          <div>
            <div className="text-white/70 text-sm mb-1 text-center">Volume</div>
            <div className="text-white font-semibold text-center">{formatNumber(latestPrice?.volume)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
