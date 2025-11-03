import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import RobotScholarIcon from './RobotScholarIcon';

interface NewDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: string;
  stockCode: string;
  stockName: string;
  stockPrice: string;
  priceChange: string;
  isStreaming?: boolean;
  isConnecting?: boolean;
  onLineConversion?: () => void;
}

const formatAnalysisText = (text: string) => {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    const formattedLine = line.replace(/(\d+\.?\d*%?|\d+円|[+-]\d+\.?\d*)/g, (match) => {
      return `<span class="text-orange-600 font-semibold text-lg">${match}</span>`;
    });

    const isBold = line.includes('###') || line.includes('**') || line.match(/^[\d]+\./);
    const cleanLine = formattedLine.replace(/###|\*\*/g, '');

    if (isBold) {
      return `<div key="${index}" class="font-bold text-gray-900 mt-4 mb-2">${cleanLine}</div>`;
    }

    return `<div key="${index}" class="text-gray-700">${cleanLine}</div>`;
  }).join('');
};

export default function NewDiagnosisModal({
  isOpen,
  onClose,
  analysis,
  stockCode,
  stockName,
  stockPrice,
  priceChange,
  isStreaming = false,
  isConnecting = false,
  onLineConversion,
}: NewDiagnosisModalProps) {
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[95vh] z-[9999]" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-75 sm:scale-100 pointer-events-none">
          <RobotScholarIcon />
        </div>

        <div className="relative bg-gradient-to-br from-dark-deep via-dark-tech to-dark-deep rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border-2 border-accent-orange/50 mt-16 sm:mt-20 shadow-orange-glow-lg">
          <div className="relative sticky top-0 bg-gradient-to-r from-accent-orange to-accent-gold px-3 py-2 sm:px-5 sm:py-3 flex items-center justify-between border-b border-accent-gold/30 backdrop-blur-sm z-10 shadow-gold-glow">
          <div className="flex-1 text-center pr-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-lg">
              {stockName}（{stockCode}）AI銘柄診断レポート
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 sm:p-2 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm hover:shadow-lg"
            aria-label="閉じる"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>

        <div className="relative overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(95vh-200px)] px-3 py-3 sm:px-5 sm:py-4 space-y-3 sm:space-y-4">

          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-4">AI診断結果</h3>

          <div className="relative bg-dark-card/40 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-5 border border-accent-orange/30 overflow-hidden shadow-orange-glow">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-accent-gold/10 to-accent-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-tr from-accent-orange/10 to-accent-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative space-y-2 sm:space-y-3">
              <div className="bg-white/95 rounded-lg p-3 sm:p-4 border border-accent-gold/30 backdrop-blur-sm shadow-lg">
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
                  {isConnecting ? (
                    <div className="text-center py-4">
                      <p className="text-accent-orange font-semibold">AI分析エンジン接続中...</p>
                    </div>
                  ) : (
                    <>
                      <div dangerouslySetInnerHTML={{ __html: formatAnalysisText(analysis) }} />
                      {isStreaming && (
                        <span className="inline-block w-2 h-4 bg-accent-gold animate-pulse ml-1"></span>
                      )}
                    </>
                  )}
                </div>
              </div>

              {onLineConversion && (
                <>
                  <button
                    onClick={onLineConversion}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg mt-6"
                  >
                    <ExternalLink className="w-6 h-6" />
                    無料AI診断結果をLINEで毎日受け取る
                  </button>

                  <div className="mt-3 p-3 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-600/30">
                    <p className="text-xs text-green-200 leading-relaxed">
                      LINEで登録すると、毎日最新の株式分析レポートをお届けします
                    </p>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
