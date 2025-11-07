interface TurquoiseFrameProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TurquoiseFrame({ children, className = "" }: TurquoiseFrameProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 700 200"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="turquoiseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>

        <rect
          x="5"
          y="5"
          width="690"
          height="190"
          rx="8"
          fill="none"
          stroke="url(#turquoiseGradient)"
          strokeWidth="10"
        />

        <rect
          x="15"
          y="15"
          width="670"
          height="170"
          rx="6"
          fill="white"
          stroke="#14b8a6"
          strokeWidth="3"
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
