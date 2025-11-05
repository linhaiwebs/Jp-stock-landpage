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
      <div className="w-full">
        <div className="relative w-full">
          <img
            src="/assets/head copy copy.png"
            alt="Header"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
              AI Stock
            </h1>
            <p className="text-white text-xl md:text-3xl lg:text-4xl font-light tracking-widest mt-2">
              Intelligence
            </p>
          </div>
        </div>
      </div>

      {onDiagnosis && (
        <div className="px-4 py-6">
          <div className="max-w-lg mx-auto">
            <button
              onClick={onDiagnosis}
              disabled={disabled}
              className="w-full text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-neon-gold hover:shadow-gold-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 animate-pulse-gold"
              style={{
                backgroundImage: 'url(/assets/组 34.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {hasStockData ? `【${stockName}】` : '銘柄'}無料診断
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
