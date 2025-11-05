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
            <span className="drop-shadow-lg">{buttonText}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
