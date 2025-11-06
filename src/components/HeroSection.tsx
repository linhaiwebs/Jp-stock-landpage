interface HeroSectionProps {
  stockCode?: string;
  stockName?: string;
  onDiagnosis?: () => void;
  disabled?: boolean;
}

export default function HeroSection({ stockCode = '----', stockName = '', onDiagnosis, disabled = false }: HeroSectionProps) {
  const hasStockData = stockCode !== '----' && stockName;

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-8 flex flex-col items-center">
        <img
          src="/assets/logo.png"
          alt="AI Logo"
          className="w-32 h-32 mb-6"
        />

        <h1 className="text-center mb-6" style={{ fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif" }}>
          <span className="text-yellow-400 font-bold text-4xl md:text-5xl">情報</span>
          <span className="text-blue-500 font-medium text-2xl md:text-3xl">銘柄基本</span>
        </h1>

        <div className="relative w-full max-w-3xl">
          <img
            src="/assets/logo2.png"
            alt="Frame"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-red-600 font-bold text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif" }}>銘柄無料診断</span>
          </div>
        </div>
      </div>

      {onDiagnosis && (
        <div className="px-4 py-6">
          <div className="max-w-lg mx-auto">
            <button
              onClick={onDiagnosis}
              disabled={disabled}
              className="relative group w-full py-4 px-6 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 animate-glow-ring"
                style={{
                  backgroundImage: 'url(/assets/button.png)',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  willChange: 'box-shadow'
                }}
              />

              <div
                className="absolute inset-0 opacity-20 animate-gradient-shift"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,140,66,0.3) 0%, rgba(255,167,38,0.5) 50%, rgba(255,140,66,0.3) 100%)',
                  backgroundSize: '200% 100%'
                }}
              />

              <span className="relative text-red-600 font-bold text-lg drop-shadow-lg">
                {hasStockData ? `【${stockName}】` : '銘柄'}無料診断
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
