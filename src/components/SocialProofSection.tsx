import { Star, BadgeCheck, Users, TrendingUp, Shield } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [
    {
      name: '田中 健一',
      role: '個人投資家',
      rating: 5,
      comment: 'AIの分析精度が高く、投資判断が明確になりました。毎日のレポートで市場の動きを素早く把握できています。',
    },
    {
      name: '佐藤 美咲',
      role: '会社員',
      rating: 5,
      comment: '初心者でも理解しやすい診断結果で、安心して投資を始められました。LINEで届くので確認も簡単です。',
    },
    {
      name: '山田 雄太',
      role: 'デイトレーダー',
      rating: 5,
      comment: 'リアルタイムの分析が非常に役立っています。買い時・売り時のタイミングを逃さなくなりました。',
    },
  ];

  return (
    <div className="relative mx-4 my-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-trust-green/20 to-trust-green/10 backdrop-blur-sm px-4 py-2 rounded-full border border-trust-green/30 mb-4">
            <BadgeCheck className="w-4 h-4 text-trust-green" />
            <span className="text-trust-green text-sm font-bold">公式認証サービス</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            10万人以上の投資家が利用
          </h2>
          <p className="text-gray-400 text-lg">
            信頼と実績の AI 株式診断サービス
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-dark-card to-dark-tech rounded-xl p-6 border border-accent-orange/30 text-center hover:shadow-orange-glow transition-all">
            <Users className="w-10 h-10 text-accent-gold mx-auto mb-3" />
            <div className="text-3xl font-black text-white mb-1">100,000+</div>
            <div className="text-gray-400 text-sm font-medium">利用者数</div>
          </div>

          <div className="bg-gradient-to-br from-dark-card to-dark-tech rounded-xl p-6 border border-accent-orange/30 text-center hover:shadow-orange-glow transition-all">
            <TrendingUp className="w-10 h-10 text-trust-green mx-auto mb-3" />
            <div className="text-3xl font-black text-white mb-1">98%</div>
            <div className="text-gray-400 text-sm font-medium">分析精度</div>
          </div>

          <div className="bg-gradient-to-br from-dark-card to-dark-tech rounded-xl p-6 border border-accent-orange/30 text-center hover:shadow-orange-glow transition-all">
            <Star className="w-10 h-10 text-accent-gold mx-auto mb-3" />
            <div className="text-3xl font-black text-white mb-1">4.8/5</div>
            <div className="text-gray-400 text-sm font-medium">ユーザー評価</div>
          </div>

          <div className="bg-gradient-to-br from-dark-card to-dark-tech rounded-xl p-6 border border-accent-orange/30 text-center hover:shadow-orange-glow transition-all">
            <Shield className="w-10 h-10 text-tech-cyan mx-auto mb-3" />
            <div className="text-3xl font-black text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm font-medium">稼働時間</div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-dark-card via-dark-tech to-dark-card rounded-2xl p-8 border border-accent-orange/30 shadow-orange-glow overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl"></div>

          <div className="relative">
            <h3 className="text-2xl font-black text-white mb-6 text-center">
              ユーザーの声
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-dark-deep/50 rounded-xl p-6 border border-accent-orange/20 hover:border-accent-orange/50 transition-all"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    「{testimonial.comment}」
                  </p>

                  <div className="pt-4 border-t border-accent-orange/20">
                    <div className="text-white font-bold text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-trust-green/10 via-tech-cyan/10 to-accent-gold/10 rounded-2xl p-6 border border-accent-orange/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center shadow-lg">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-1">公式認証アカウント</div>
                <div className="text-gray-400 text-sm">金融情報サービスとして認定済み</div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-dark-card/50 px-4 py-2 rounded-lg border border-trust-green/30">
              <Shield className="w-5 h-5 text-trust-green" />
              <span className="text-trust-green text-sm font-semibold">セキュリティ認証取得</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-br from-dark-card to-dark-tech rounded-xl p-6 border border-accent-orange/20">
          <div className="text-center text-gray-400 text-sm leading-relaxed">
            <p className="mb-2">
              <span className="text-accent-gold font-semibold">データ提供元:</span> 東京証券取引所、日本経済新聞社、Bloomberg
            </p>
            <p className="text-xs text-gray-500">
              本サービスは金融商品取引法に基づく情報提供サービスです。投資助言業ではありません。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
