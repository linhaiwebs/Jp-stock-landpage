export default function FixedHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[50px] bg-gradient-to-r from-dark-red via-primary-red to-dark-red z-50 shadow-red-glow-lg">
      <div className="h-full flex items-center justify-center">
        <svg
          viewBox="0 0 300 40"
          className="h-8"
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
          </defs>

          <text
            x="150"
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
        </svg>
      </div>
    </header>
  );
}
