import { Info, Database, Shield } from 'lucide-react';

export default function DataSourceDisclaimer() {
  return (
    <div className="relative z-20 mt-12 mb-0">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-blue-950/60 to-slate-900/60 backdrop-blur-md border-2 border-blue-500/40 rounded-xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0 bg-blue-900/50 p-3 rounded-lg">
              <Info className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" />
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                データソースとサービスに関する重要な情報
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-blue-900/30 rounded-lg p-4 border-l-4 border-blue-400">
                  <Database className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      <span className="font-bold text-blue-200">データ出典：</span>
                      本サービスで提供される全ての株価情報、市場データ、財務指標等は
                      <strong className="text-cyan-300">公開市場情報</strong>に基づいています。
                      データは準リアルタイムで更新されますが、情報の正確性、完全性、適時性を保証するものではありません。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-900/30 rounded-lg p-4 border-l-4 border-amber-400">
                  <Shield className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      <span className="font-bold text-amber-200">投資助言ではありません：</span>
                      本サービスは<strong className="text-amber-300">AI技術を活用した株式分析の無料提供サービス</strong>です。
                      提供される情報、分析結果、レポート等は全て参考情報であり、
                      <strong className="text-amber-300">特定の金融商品の購入、売却、保有を推奨・勧誘するものではありません。</strong>
                      投資判断は必ずご自身の責任において行ってください。
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600/50">
                  <p className="text-xs sm:text-sm text-slate-300 text-center leading-relaxed">
                    本サービスの利用により生じたいかなる損害についても、当社は一切の責任を負いません。
                    投資にはリスクが伴います。最終的な投資判断は、証券会社等の専門家にご相談の上、ご自身の責任で行ってください。
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
