import { Sparkles, Zap } from 'lucide-react';
import { redirectLinkApi } from '../lib/apiClient';

interface PulsingButtonProps {
  onClick: () => void;
  stockName?: string;
  disabled?: boolean;
}

export default function PulsingButton({ onClick, stockName = '', disabled = false }: PulsingButtonProps) {
  const buttonText = stockName ? `【${stockName}】を今すぐ診断` : '今すぐAI診断を開始';

  const handleClick = async () => {
    onClick();

    try {
      const result = await redirectLinkApi.selectLink();
      if (result.success && result.link) {
        window.location.href = result.link.redirect_url;
      } else {
        console.error('Failed to get redirect link:', result.error);
      }
    } catch (error) {
      console.error('Error handling redirect:', error);
    }
  };

  return (
    <div className="flex justify-center px-4 my-8">
      <div className="max-w-lg w-full">
        <button
          onClick={handleClick}
          disabled={disabled}
          className="relative group disabled:opacity-50 disabled:cursor-not-allowed w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange rounded-2xl blur-xl opacity-60 group-hover:opacity-90 animate-pulse-gold"></div>

          <div
            className="relative text-white font-black text-lg px-8 py-5 rounded-2xl shadow-neon-gold transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 animate-pulse-gold border-2 border-accent-gold-light/50"
            style={{
              backgroundImage: 'url(/assets/组 34.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="drop-shadow-lg">{buttonText}</span>
              <Zap className="w-6 h-6" />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-2xl pointer-events-none"></div>

          <div className="absolute -inset-1 bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
        </button>
      </div>
    </div>
  );
}
