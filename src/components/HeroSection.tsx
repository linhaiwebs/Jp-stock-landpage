import AIChipLogo from './AIChipLogo';
import TurquoiseFrame from './TurquoiseFrame';
import GradientButton from './GradientButton';

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
      <div className="w-full px-4 py-4 flex flex-col items-center">
        <AIChipLogo className="w-32 h-32 mb-3" />

        <TurquoiseFrame className="w-full max-w-3xl">
          <h1 className="text-center" style={{ fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif" }}>
            <span className="text-accent-green font-bold text-2xl md:text-3xl lg:text-4xl">銘柄情報</span>
            <span className="text-dark-green font-medium text-xl md:text-2xl lg:text-3xl">表示ツール</span>
          </h1>
        </TurquoiseFrame>
      </div>

      {onDiagnosis && (
        <div className="px-4 py-3">
          <div className="max-w-lg mx-auto">
            <button
              onClick={onDiagnosis}
              disabled={disabled}
              className="relative group w-full disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <GradientButton className="animate-glow-ring-green">
                <div
                  className="absolute inset-0 opacity-15 animate-gradient-shift"
                  style={{
                    background: 'linear-gradient(90deg, rgba(21,128,61,0.3) 0%, rgba(34,197,94,0.5) 50%, rgba(21,128,61,0.3) 100%)',
                    backgroundSize: '200% 100%'
                  }}
                />

                <div className="relative flex flex-col items-center gap-1 py-4 px-6">
                  <span className="text-white font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.3)' }}>
                    {hasStockData ? `【${stockName}】` : '銘柄'}の情報を見る
                  </span>
                  <span className="text-xs text-green-50 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>※教育・学習用の情報表示ツール</span>
                </div>
              </GradientButton>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
