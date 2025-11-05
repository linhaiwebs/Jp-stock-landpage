import { Sparkles, Zap } from 'lucide-react';

interface PulsingButtonProps {
  onClick: () => void;
  stockName?: string;
  disabled?: boolean;
}

export default function PulsingButton({ onClick, stockName = '', disabled = false }: PulsingButtonProps) {
  const buttonText = stockName ? `【${stockName}】を今すぐ診断` : '今すぐAI診断を開始';

  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex justify-center px-4 my-8">
      <div className="max-w-lg w-full">
        <button
          onClick={handleClick}
          disabled={disabled}
          className="relative group disabled:opacity-50 disabled:cursor-not-allowed w-full transform transition-all duration-300 group-hover:scale-105 group-active:scale-95"
        >
          <div
            className="relative px-8 py-5"
            style={{
              backgroundImage: 'url(/assets/图层 1.png)',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 animate-spin text-red-500" style={{ animationDuration: '3s' }} />
              <span className="font-black text-lg text-red-600 drop-shadow-lg">{buttonText}</span>
              <Zap className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
