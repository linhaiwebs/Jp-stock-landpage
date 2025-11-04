interface HeroSectionProps {
  stockCode?: string;
  onStockCodeChange?: (code: string) => void;
  onDiagnosis?: () => void;
  disabled?: boolean;
  stockName?: string;
}

export default function HeroSection({ stockCode = '', onStockCodeChange, onDiagnosis, disabled = false, stockName = '' }: HeroSectionProps) {
  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
            AI Stock
          </h1>
          <p className="text-white text-xl md:text-3xl lg:text-4xl font-light tracking-widest mt-2">
            Intelligence
          </p>
        </div>
        <img
          src="/assets/head.png"
          alt="Header"
          className="w-full h-auto block"
        />
      </div>

      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            value={stockCode}
            onChange={(e) => onStockCodeChange?.(e.target.value)}
            placeholder="株式コードを入力"
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl text-white text-lg placeholder-white/50 focus:outline-none focus:border-white/50 transition-all"
          />

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
                  {stockName ? `【${stockName}】を今すぐ診断` : '今すぐAI診断を開始'}
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
