import { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { StockPrice } from '../types/stock';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const calculateTrend = (index: number): 'up' | 'down' | 'neutral' => {
    if (index === 0 || !prices[index + 1]) return 'neutral';

    const current = parseFloat(prices[index].close.replace(/,/g, ''));
    const previous = parseFloat(prices[index + 1].close.replace(/,/g, ''));

    if (isNaN(current) || isNaN(previous)) return 'neutral';

    if (current > previous) return 'up';
    if (current < previous) return 'down';
    return 'neutral';
  };

  const calculateChangePercent = (current: string, previous: string): string => {
    const curr = parseFloat(current.replace(/,/g, ''));
    const prev = parseFloat(previous.replace(/,/g, ''));

    if (isNaN(curr) || isNaN(prev) || prev === 0) return '0.00';

    const change = ((curr - prev) / prev) * 100;
    return change.toFixed(2);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prices.length === 0) return;

    const itemHeight = 60;
    const totalHeight = prices.length * itemHeight;

    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const speed = 20;
      const newPosition = (elapsed / speed) % totalHeight;

      setScrollPosition(newPosition);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [prices]);

  if (prices.length === 0) {
    return (
      <div className="mx-4 my-6 bg-gray-800/50 rounded-2xl p-8 text-center">
        <p className="text-gray-400">履歴データがありません</p>
      </div>
    );
  }

  const duplicatedPrices = [...prices, ...prices];

  return (
    <div className="mx-4 my-8 animate-slide-up">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-dark-card via-dark-tech to-dark-card backdrop-blur-sm rounded-2xl overflow-hidden border border-accent-orange/30 shadow-orange-glow">
        <div className="bg-gradient-to-r from-accent-orange to-accent-gold px-6 py-4 border-b border-accent-gold/30">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            {stockName} - 取引履歴データ
          </h3>
        </div>

        <div
          ref={containerRef}
          className="relative h-[280px] overflow-hidden bg-gradient-to-b from-dark-deep/50 to-dark-tech/50"
        >
          <div
            className="absolute w-full"
            style={{
              transform: `translateY(-${scrollPosition}px)`,
            }}
          >
            {duplicatedPrices.map((price, index) => {
              const trend = calculateTrend(index % prices.length);
              const nextIndex = (index % prices.length) + 1;
              const changePercent = nextIndex < prices.length
                ? calculateChangePercent(price.close, prices[nextIndex].close)
                : '0.00';

              const isPositive = parseFloat(changePercent) > 0;
              const isNegative = parseFloat(changePercent) < 0;

              return (
                <div
                  key={`${index}-${price.date}`}
                  className="flex items-center justify-between px-6 py-4 border-b border-accent-orange/10 hover:bg-accent-orange/5 transition-all h-[70px]"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-accent-gold text-sm font-semibold w-24">
                      {price.date}
                    </div>
                    <div className="text-white text-lg font-bold">
                      ¥{price.close}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`text-sm font-bold px-3 py-1 rounded-lg ${isPositive ? 'text-trust-green bg-trust-green/10' : isNegative ? 'text-accent-red bg-accent-red/10' : 'text-gray-400 bg-gray-500/10'}`}>
                      {isPositive ? '+' : ''}{changePercent}%
                    </div>

                    <div className="flex items-center gap-1">
                      {trend === 'up' && <TrendingUp className="w-6 h-6 text-trust-green" />}
                      {trend === 'down' && <TrendingDown className="w-6 h-6 text-accent-red" />}
                      {trend === 'neutral' && <Minus className="w-6 h-6 text-gray-400" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-dark-deep to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-dark-tech to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
