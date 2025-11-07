interface ModernBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function ModernBackground({ children, className = "" }: ModernBackgroundProps) {
  return (
    <div
      className={`min-h-screen relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(180deg, #0d1b2a 0%, #1b263b 25%, #2a3f5f 50%, #1b263b 75%, #0d1b2a 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <div
        className="absolute inset-0 opacity-20 animate-gradient-shift-slow"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(14, 165, 233, 0.1) 0%, transparent 60%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.08) 45%, rgba(59, 130, 246, 0.08) 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(59, 130, 246, 0.08) 45%, rgba(59, 130, 246, 0.08) 55%, transparent 55%)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <svg className="absolute top-8 left-8 w-24 h-24 opacity-8 animate-float" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="4" fill="url(#grad1)" />
        <circle cx="12" cy="12" r="8" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
        <circle cx="12" cy="12" r="12" fill="none" stroke="url(#grad1)" strokeWidth="0.3" />
        <path d="M 30 12 L 50 12 M 40 2 L 40 22 M 30 30 L 50 50 M 50 30 L 30 50" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      <svg className="absolute top-8 right-8 w-24 h-24 opacity-8 animate-float" style={{ animationDelay: '1s' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="20" height="20" fill="none" stroke="url(#grad2)" strokeWidth="1" />
        <rect x="15" y="15" width="10" height="10" fill="url(#grad2)" opacity="0.4" />
        <path d="M 40 15 L 55 15 L 55 30 M 40 45 L 55 45 L 55 30" stroke="url(#grad2)" strokeWidth="1.5" fill="none" />
      </svg>

      <svg className="absolute bottom-24 left-8 w-32 h-32 opacity-6 animate-float" style={{ animationDelay: '2s' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.15 }} />
          </linearGradient>
        </defs>
        <path d="M 10 40 L 30 40 M 50 40 L 70 40 M 40 10 L 40 30 M 40 50 L 40 70" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="40" r="15" fill="none" stroke="url(#grad3)" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>

      <svg className="absolute bottom-24 right-8 w-32 h-32 opacity-6 animate-float" style={{ animationDelay: '0.5s' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.15 }} />
          </linearGradient>
        </defs>
        <polygon points="40,10 50,30 70,30 55,45 60,65 40,50 20,65 25,45 10,30 30,30" fill="none" stroke="url(#grad4)" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="5" fill="url(#grad4)" opacity="0.6" />
      </svg>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div
        className="absolute top-0 left-0 w-full h-1 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)',
          animation: 'shimmer-horizontal 3s ease-in-out infinite'
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-full h-1 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #0ea5e9 50%, transparent 100%)',
          animation: 'shimmer-horizontal 3s ease-in-out infinite',
          animationDelay: '1.5s'
        }}
      />

      {children}
    </div>
  );
}
