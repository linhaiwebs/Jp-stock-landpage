import { AlertTriangle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function RiskDisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasAcknowledged, setHasAcknowledged] = useState(false);

  useEffect(() => {
    const acknowledged = sessionStorage.getItem('risk-disclaimer-acknowledged');
    if (acknowledged === 'true') {
      setIsVisible(false);
      setHasAcknowledged(true);
    }
  }, []);

  const handleAcknowledge = () => {
    sessionStorage.setItem('risk-disclaimer-acknowledged', 'true');
    setIsVisible(false);
    setHasAcknowledged(true);
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-red-700 border-b-4 border-red-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-white flex-shrink-0 mt-0.5 animate-pulse" />
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm md:text-base leading-tight mb-2">
              【重要】投資リスクに関する警告
            </p>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              本サービスは<strong className="underline">情報提供のみ</strong>を目的としており、<strong className="underline">投資助言・投資勧誘ではありません</strong>。
              株式投資には<strong className="underline">元本割れのリスク</strong>があります。
              投資判断は必ず<strong className="underline">ご自身の責任</strong>で行ってください。
              当サービスは金融商品取引業者ではなく、投資による損失の責任は一切負いません。
            </p>
            <button
              onClick={handleAcknowledge}
              className="mt-2 px-4 py-1.5 bg-white text-red-700 font-bold text-xs md:text-sm rounded hover:bg-red-50 transition-colors"
            >
              理解しました
            </button>
          </div>
          <button
            onClick={handleAcknowledge}
            className="p-1 hover:bg-red-600 rounded transition-colors flex-shrink-0"
            aria-label="閉じる"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
