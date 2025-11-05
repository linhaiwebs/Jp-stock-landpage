interface HeroSectionProps {
  stockCode?: string;
  onStockCodeChange?: (code: string) => void;
  onDiagnosis?: () => void;
  disabled?: boolean;
  stockName?: string;
  isLoadingStock?: boolean;
}

export default function HeroSection({ stockCode = '', onStockCodeChange, onDiagnosis, disabled = false, stockName = '', isLoadingStock = false }: HeroSectionProps) {
  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-6 md:py-8">
        <div className="max-w-6xl mx-auto mb-6">
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange leading-tight">
                AI Stock
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange leading-tight">
                Intelligence
              </h2>
            </div>

            <div className="text-right">
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed whitespace-nowrap">
                Advanced Market<br />
                Intelligence &<br />
                Predictive Analytics
              </p>
            </div>
          </div>
        </div>

        <img
          src="/assets/2.png"
          alt="Header"
          className="w-full h-auto block"
        />
      </div>

      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="relative">
            <input
              type="text"
              value={stockCode}
              onChange={(e) => onStockCodeChange?.(e.target.value)}
              placeholder="Enter stock code (US: 3+ chars, JP: 4 digits)"
              className="w-full px-6 py-4 bg-gray-900/60 backdrop-blur-sm border-2 border-gray-600/40 rounded-2xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-accent-gold/60 transition-all pr-12"
            />
            {isLoadingStock && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {onDiagnosis && (
            <button
              onClick={onDiagnosis}
              disabled={disabled}
              className="relative group disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              <div
                className="relative text-white font-bold text-lg py-5 pl-8 pr-24 rounded-full transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 text-left"
                style={{
                  backgroundImage: 'url(/assets/button\ copy.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <span className="drop-shadow-lg">
                  {stockName ? `Analyze ${stockName} Now` : 'Start AI Analysis'}
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
