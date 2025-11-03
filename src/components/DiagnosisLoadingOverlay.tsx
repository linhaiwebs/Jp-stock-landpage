import { useEffect, useState } from 'react';
import RobotScholarIcon from './RobotScholarIcon';

interface DiagnosisLoadingOverlayProps {
  isVisible: boolean;
  progress: number;
  onComplete?: () => void;
}

export default function DiagnosisLoadingOverlay({
  isVisible,
  progress,
  onComplete
}: DiagnosisLoadingOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (progress >= 100 && isVisible) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isVisible) {
      setIsExiting(false);
    }
  }, [progress, isVisible, onComplete]);

  useEffect(() => {
    if (isVisible) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.removeAttribute('data-modal-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [isVisible]);

  if (!isVisible && !isExiting) return null;

  return (
    <div
      className={`fixed inset-0 z-[9997] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ touchAction: 'none' }}
    >
      <div className={`w-full max-w-lg transition-transform duration-500 ${
        isExiting ? 'scale-95' : 'scale-100'
      }`}>
        <div className="bg-gradient-to-br from-dark-deep via-dark-tech to-dark-deep border-2 border-accent-gold/50 rounded-2xl shadow-neon-gold p-8">
          <RobotScholarIcon />

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2 text-center">AI診断を実行中</h3>
            <p className="text-sm text-accent-gold text-center">市場データを分析しています...</p>
          </div>

          <div className="relative w-full h-3 bg-dark-deep/50 rounded-full overflow-hidden mb-3 border border-accent-gold/30">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-orange to-accent-gold transition-all duration-300 ease-out shadow-neon-gold"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="mb-6 text-center">
            <span className="text-sm font-semibold text-accent-gold">
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>

          <div className="bg-black/40 border-2 border-accent-gold/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="space-y-3 text-sm">
              <p className="text-white font-semibold text-center text-base">
                データはAIによって深度分析中です
              </p>
              <p className="text-accent-gold text-center">
                しばらくお待ちください
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
