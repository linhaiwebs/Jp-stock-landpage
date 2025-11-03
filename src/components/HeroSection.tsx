interface HeroSectionProps {
  stockCode?: string;
  stockName?: string;
  onDiagnosis?: () => void;
  disabled?: boolean;
}

export default function HeroSection({ stockCode = '----', stockName = '', onDiagnosis, disabled = false }: HeroSectionProps) {
  const hasStockData = stockCode !== '----' && stockName;

  return (
    <div className="relative w-full py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="text-6xl font-black tracking-wider" style={{
            color: '#FFD4C4',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'sans-serif',
            letterSpacing: '0.1em'
          }}>
            情報
          </div>

          <div className="relative">
            <img
              src="/assets/header.png"
              alt="AI"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {onDiagnosis && (
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
        )}
      </div>
    </div>
  );
}
