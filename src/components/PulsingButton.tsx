import { Sparkles, Zap } from 'lucide-react';

interface PulsingButtonProps {
  onClick: () => void;
  stockName?: string;
  disabled?: boolean;
}

export default function PulsingButton({ onClick, stockName = '', disabled = false }: PulsingButtonProps) {
  const buttonText = stockName ? `${stockName} AI診断を開始` : 'AI診断を開始';

  return (
    <div className="flex justify-center px-4 my-8">
      <button
        onClick={onClick}
        disabled={disabled}
        className="relative group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange rounded-full blur-xl opacity-60 group-hover:opacity-90 animate-pulse-gold"></div>

        <div className="relative bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange text-white font-black text-base sm:text-xl px-10 py-5 rounded-full shadow-gold-glow-lg transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 animate-pulse-gold border-2 border-accent-gold-light/50">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="drop-shadow-lg">{buttonText}</span>
            <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-full pointer-events-none"></div>

        <div className="absolute -inset-1 bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
      </button>
    </div>
  );
}
