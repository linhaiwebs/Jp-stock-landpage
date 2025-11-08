export default function FixedHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[50px] bg-gradient-to-r from-dark-red via-primary-red to-dark-red z-50 shadow-red-glow-lg">
      <div className="h-full flex items-center justify-center">
        <svg
          viewBox="0 0 400 40"
          className="h-8 w-full max-w-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="hollowEffect">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feFlood floodColor="#ffffff" floodOpacity="0.5" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="decorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
            </linearGradient>
          </defs>

          <g className="left-decoration">
            <path
              d="M 40 20 L 60 10 L 60 30 Z"
              fill="url(#decorGradient)"
              opacity="0.8"
            />
            <path
              d="M 65 20 L 85 10 L 85 30 Z"
              fill="url(#decorGradient)"
              opacity="0.8"
            />
            <line x1="30" y1="20" x2="90" y2="20" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <circle cx="25" cy="20" r="3" fill="white" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="95" cy="20" r="2" fill="white" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </g>

          <text
            x="200"
            y="28"
            fontSize="24"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="'Noto Sans JP', sans-serif"
            filter="url(#hollowEffect)"
            stroke="white"
            strokeWidth="0.5"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.5)',
              letterSpacing: '2px'
            }}
          >
            AI株価情報
          </text>

          <g className="right-decoration">
            <path
              d="M 360 20 L 340 10 L 340 30 Z"
              fill="url(#decorGradient)"
              opacity="0.8"
            />
            <path
              d="M 335 20 L 315 10 L 315 30 Z"
              fill="url(#decorGradient)"
              opacity="0.8"
            />
            <line x1="310" y1="20" x2="370" y2="20" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <circle cx="375" cy="20" r="3" fill="white" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="305" cy="20" r="2" fill="white" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
    </header>
  );
}
