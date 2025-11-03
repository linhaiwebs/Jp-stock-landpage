import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  stockCode?: string;
  stockName?: string;
  onDiagnosis?: () => void;
  disabled?: boolean;
}

export default function HeroSection({ stockCode = '----', stockName = '', onDiagnosis, disabled = false }: HeroSectionProps) {
  const hasStockData = stockCode !== '----' && stockName;

  return (
    <div className="relative w-full bg-pure-black py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-ai-pink flex items-center justify-center shadow-neon-pink">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -inset-2 rounded-full bg-ai-pink opacity-20 blur-xl animate-pulse"></div>
          </div>

          <div className="text-center space-y-4 w-full">
            <h1 className="text-white text-xl font-bold leading-tight">
              {hasStockData ? `【${stockName}】` : '株式銘柄'}
              <br />
              銘柄基本情報
            </h1>

            {onDiagnosis && (
              <button
                onClick={onDiagnosis}
                disabled={disabled}
                className="w-full bg-gradient-to-r from-accent-orange to-accent-gold text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-neon-gold hover:shadow-gold-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 animate-pulse-gold"
              >
                {hasStockData ? `【${stockName}】` : '銘柄'}無料診断
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
