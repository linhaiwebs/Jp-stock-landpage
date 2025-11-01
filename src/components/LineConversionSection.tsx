import { ExternalLink, Bell, TrendingUp, Clock, Shield, CheckCircle } from 'lucide-react';

interface LineConversionSectionProps {
  onLineConversion: () => void;
  stockName?: string;
}

export default function LineConversionSection({ onLineConversion, stockName }: LineConversionSectionProps) {
  return (
    <div className="relative mx-4 my-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#06C755]/10 via-dark-card to-dark-tech rounded-3xl overflow-hidden border-2 border-[#06C755]/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06C755]/5 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#06C755]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10 p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#06C755]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#06C755]/40 mb-4">
                <CheckCircle className="w-4 h-4 text-[#06C755]" />
                <span className="text-[#06C755] text-sm font-bold">公式LINE限定サービス</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                AIがあなた専用の<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-orange">次の投資戦略</span>を毎日更新
              </h2>

              <p className="text-gray-400 text-lg sm:text-xl mb-8">
                {stockName ? `${stockName}を含む、` : ''}注目銘柄の最新分析レポートを毎朝お届け
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-dark-deep/50 rounded-xl p-4 border border-accent-orange/20 hover:border-accent-gold/50 transition-all">
                <Bell className="w-8 h-8 text-accent-gold mb-2" />
                <div className="text-white font-bold text-sm mb-1">リアルタイム通知</div>
                <div className="text-gray-400 text-xs">重要な市場変動を即座にお知らせ</div>
              </div>

              <div className="bg-dark-deep/50 rounded-xl p-4 border border-accent-orange/20 hover:border-accent-gold/50 transition-all">
                <TrendingUp className="w-8 h-8 text-trust-green mb-2" />
                <div className="text-white font-bold text-sm mb-1">売買シグナル</div>
                <div className="text-gray-400 text-xs">AIが最適なタイミングを提案</div>
              </div>

              <div className="bg-dark-deep/50 rounded-xl p-4 border border-accent-orange/20 hover:border-accent-gold/50 transition-all">
                <Clock className="w-8 h-8 text-tech-cyan mb-2" />
                <div className="text-white font-bold text-sm mb-1">毎日更新</div>
                <div className="text-gray-400 text-xs">朝8時に最新レポート配信</div>
              </div>

              <div className="bg-dark-deep/50 rounded-xl p-4 border border-accent-orange/20 hover:border-accent-gold/50 transition-all">
                <Shield className="w-8 h-8 text-[#06C755] mb-2" />
                <div className="text-white font-bold text-sm mb-1">完全無料</div>
                <div className="text-gray-400 text-xs">登録料・月額料金なし</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#06C755] via-accent-gold to-[#06C755] rounded-2xl blur-xl opacity-50 animate-pulse"></div>

              <button
                onClick={onLineConversion}
                className="relative w-full bg-gradient-to-r from-[#06C755] to-[#05b04b] text-white font-black text-lg sm:text-2xl py-6 px-8 rounded-2xl hover:from-[#05b04b] hover:to-[#049c42] transition-all duration-300 shadow-2xl hover:shadow-[0_0_60px_rgba(6,199,85,0.6)] flex items-center justify-center gap-4 transform hover:scale-105 active:scale-95 border-2 border-[#06C755]/50"
              >
                <ExternalLink className="w-7 h-7 animate-pulse" />
                LINEで無料登録 → 即時アラートを受け取る
              </button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="bg-gradient-to-r from-[#06C755]/20 to-trust-green/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#06C755]/30">
                <span className="text-gray-300">
                  <span className="text-[#06C755] font-bold">10万人以上</span>が利用中
                </span>
              </div>

              <div className="bg-gradient-to-r from-accent-gold/20 to-accent-orange/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent-gold/30">
                <span className="text-gray-300">
                  <span className="text-accent-gold font-bold">登録完了率 92%</span>
                </span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-dark-deep/30 rounded-xl border border-accent-orange/20">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-trust-green mt-0.5 flex-shrink-0" />
                <div className="text-xs text-gray-400 leading-relaxed">
                  <p className="mb-2">
                    <span className="text-white font-semibold">安全性について：</span>
                    公式LINEアカウントを通じて配信されます。個人情報は厳重に管理され、第三者への提供は一切行いません。
                  </p>
                  <p className="text-[10px] text-gray-500">
                    金融商品取引法第29条の登録を受けた事業者ではないため、個別の投資助言を行うことはできません。提供される情報は参考情報であり、最終的な投資判断はご自身の責任で行ってください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
