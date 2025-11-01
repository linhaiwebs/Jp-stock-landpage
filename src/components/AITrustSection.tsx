import { Database, Cpu, LineChart, CheckCircle, Zap, Shield } from 'lucide-react';

export default function AITrustSection() {
  return (
    <div className="relative mx-4 my-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-orange/20 to-accent-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-orange/30 mb-4">
            <Shield className="w-4 h-4 text-accent-gold" />
            <span className="text-accent-gold text-sm font-bold">信頼のAI分析システム</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            最先端テクノロジーによる高精度診断
          </h2>
          <p className="text-gray-400 text-lg">
            機械学習アルゴリズムが市場データをリアルタイムで解析
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-dark-card via-dark-tech to-dark-card rounded-2xl p-8 border border-accent-orange/30 shadow-orange-glow overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl"></div>

          <div className="relative grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-gold opacity-0 group-hover:opacity-10 rounded-xl transition-all"></div>
              <div className="relative bg-dark-deep/50 rounded-xl p-6 border border-accent-orange/20 group-hover:border-accent-orange/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-accent-gold rounded-xl flex items-center justify-center mb-4 shadow-gold-glow">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">リアルタイム市場データ</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  取引所から直接取得した最新データを即座に分析。遅延なく市場の動きを捉えます。
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent-gold" />
                  <span className="text-accent-gold text-xs font-semibold">即時データ更新</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-gold opacity-0 group-hover:opacity-10 rounded-xl transition-all"></div>
              <div className="relative bg-dark-deep/50 rounded-xl p-6 border border-accent-orange/20 group-hover:border-accent-orange/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-accent-gold rounded-xl flex items-center justify-center mb-4 shadow-gold-glow">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">AI深層分析エンジン</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  10万件以上の学習データから導き出された独自アルゴリズムで多角的に評価。
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-trust-green" />
                  <span className="text-trust-green text-xs font-semibold">98%の精度</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-gold opacity-0 group-hover:opacity-10 rounded-xl transition-all"></div>
              <div className="relative bg-dark-deep/50 rounded-xl p-6 border border-accent-orange/20 group-hover:border-accent-orange/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-accent-gold rounded-xl flex items-center justify-center mb-4 shadow-gold-glow">
                  <LineChart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">診断結果生成</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  買い・売りシグナルから投資リスクまで、わかりやすいレポート形式で提供。
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent-gold" />
                  <span className="text-accent-gold text-xs font-semibold">3秒で完了</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-accent-orange/50 to-transparent"></div>
              <div className="text-accent-gold text-sm font-bold px-4 py-2 bg-dark-deep/50 rounded-full border border-accent-gold/30">
                分析フロー
              </div>
              <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-accent-orange/50 to-transparent"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-gold rounded-full flex items-center justify-center mx-auto mb-3 shadow-gold-glow animate-pulse">
                  <span className="text-white text-xl font-black">1</span>
                </div>
                <div className="text-white font-bold text-sm mb-1">データ取得</div>
                <div className="text-gray-400 text-xs">市場情報を収集</div>
              </div>

              <div className="hidden md:block">
                <svg className="w-12 h-8" viewBox="0 0 48 32" fill="none">
                  <path d="M0 16 L40 16 M40 16 L32 8 M40 16 L32 24" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ff8c42"/>
                      <stop offset="100%" stopColor="#ffa726"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="md:hidden w-px h-8 bg-gradient-to-b from-accent-orange to-accent-gold"></div>

              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-gold rounded-full flex items-center justify-center mx-auto mb-3 shadow-gold-glow animate-pulse" style={{ animationDelay: '0.3s' }}>
                  <span className="text-white text-xl font-black">2</span>
                </div>
                <div className="text-white font-bold text-sm mb-1">AI分析</div>
                <div className="text-gray-400 text-xs">深層学習で解析</div>
              </div>

              <div className="hidden md:block">
                <svg className="w-12 h-8" viewBox="0 0 48 32" fill="none">
                  <path d="M0 16 L40 16 M40 16 L32 8 M40 16 L32 24" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ff8c42"/>
                      <stop offset="100%" stopColor="#ffa726"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="md:hidden w-px h-8 bg-gradient-to-b from-accent-orange to-accent-gold"></div>

              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-gold rounded-full flex items-center justify-center mx-auto mb-3 shadow-gold-glow animate-pulse" style={{ animationDelay: '0.6s' }}>
                  <span className="text-white text-xl font-black">3</span>
                </div>
                <div className="text-white font-bold text-sm mb-1">結果生成</div>
                <div className="text-gray-400 text-xs">診断レポート作成</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-trust-green/10 to-trust-green/5 border border-trust-green/30 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-trust-green" />
              <div>
                <div className="text-white font-bold text-sm">リスク分析</div>
                <div className="text-gray-400 text-xs">多角的リスク評価</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-tech-cyan/10 to-tech-cyan/5 border border-tech-cyan/30 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-tech-cyan" />
              <div>
                <div className="text-white font-bold text-sm">市場反応予測</div>
                <div className="text-gray-400 text-xs">リアルタイム予測</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 border border-accent-gold/30 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-accent-gold" />
              <div>
                <div className="text-white font-bold text-sm">投資家心理分析</div>
                <div className="text-gray-400 text-xs">深層学習で解析</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
