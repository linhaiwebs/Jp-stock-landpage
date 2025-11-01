import { useEffect, useRef } from 'react';
import { TrendingUp, CheckCircle, Clock, Shield } from 'lucide-react';

interface HeroSectionProps {
  stockCode?: string;
  stockName?: string;
}

export default function HeroSection({ stockCode = '----', stockName = '' }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 167, 38, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 140, 66, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const displayTitle = stockName && stockCode !== '----'
    ? `【AI診断完了】${stockName}（${stockCode}）の最新スコアを確認`
    : 'AI株式診断で投資判断をサポート';

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-dark-deep via-dark-tech to-dark-navy">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="absolute inset-0 bg-orange-glow opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-orange to-accent-gold px-4 py-2 rounded-full shadow-orange-glow animate-pulse-orange">
            <CheckCircle className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-bold">AI高精度診断</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight px-4 animate-slide-up">
            {displayTitle}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 bg-dark-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent-orange/30">
              <Clock className="w-5 h-5 text-accent-gold" />
              <span>わずか<span className="text-accent-gold font-bold text-xl mx-1">3秒</span>で診断完了</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent-orange/30">
              <TrendingUp className="w-5 h-5 text-trust-green" />
              <span className="text-white font-semibold">買い／売りシグナル分析</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            最新のAI技術が市場データをリアルタイムで分析し、<br className="hidden sm:block" />
            あなたの投資判断をサポートします
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-dark-card/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-flex mx-auto border border-trust-green/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Shield className="w-4 h-4 text-trust-green" />
            <span>公式LINEを通じて安全に結果をお届けします</span>
          </div>
        </div>

        {stockCode !== '----' && (
          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-dark-card/50 backdrop-blur-sm border border-accent-orange/30 rounded-xl p-4 text-center hover:border-accent-orange/60 transition-all hover:shadow-orange-glow">
              <div className="text-accent-gold text-2xl sm:text-3xl font-bold mb-1">98%</div>
              <div className="text-gray-400 text-xs sm:text-sm">分析精度</div>
            </div>
            <div className="bg-dark-card/50 backdrop-blur-sm border border-accent-orange/30 rounded-xl p-4 text-center hover:border-accent-orange/60 transition-all hover:shadow-orange-glow">
              <div className="text-accent-gold text-2xl sm:text-3xl font-bold mb-1">10万+</div>
              <div className="text-gray-400 text-xs sm:text-sm">診断実績</div>
            </div>
            <div className="bg-dark-card/50 backdrop-blur-sm border border-accent-orange/30 rounded-xl p-4 text-center hover:border-accent-orange/60 transition-all hover:shadow-orange-glow">
              <div className="text-accent-gold text-2xl sm:text-3xl font-bold mb-1">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm">リアルタイム</div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-navy to-transparent pointer-events-none"></div>
    </div>
  );
}
