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
      <div className="w-full px-4 py-8 md:py-10">
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange rounded-full blur-3xl animate-pulse-gold"></div>
          </div>

          <div className="relative z-10 animate-fade-in">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

            <h1 className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-2 animate-slide-up">
              <span className="relative">
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange opacity-60"></span>
                <span className="relative drop-shadow-2xl" style={{ textShadow: '0 0 40px rgba(255, 140, 66, 0.8), 0 0 80px rgba(255, 167, 38, 0.6)' }}>
                  AI Stock
                </span>
              </span>
            </h1>

            <div className="relative inline-block mt-3">
              <div className="absolute -left-8 -right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-50"></div>
              <p className="relative text-white text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] uppercase px-6 animate-slide-up" style={{
                animationDelay: '0.2s',
                textShadow: '0 0 20px rgba(255, 167, 38, 0.5), 0 2px 10px rgba(0, 0, 0, 0.8)',
                background: 'linear-gradient(to right, #ffffff, #ffa726, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Intelligence
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-accent-orange"></div>
              <div className="px-4 py-1 rounded-full border border-accent-gold/30 bg-accent-gold/10 backdrop-blur-sm">
                <span className="text-accent-gold text-xs md:text-sm font-semibold tracking-wider uppercase">Powered by AI</span>
              </div>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-accent-orange"></div>
            </div>
          </div>
        </div>
        <img
          src="/assets/head.png"
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
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl text-white text-lg placeholder-white/50 focus:outline-none focus:border-white/50 transition-all pr-12"
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
                  backgroundImage: 'url(/assets/button.png)',
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
