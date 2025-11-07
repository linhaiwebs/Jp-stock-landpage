interface BlueHeaderCardProps {
  children: React.ReactNode;
  headerText?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BlueHeaderCard({ children, headerText = "三井金″株式″会社診断開始 ≫≫≫", className = "", style }: BlueHeaderCardProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(34, 197, 94, 0.5)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px 0 rgba(34, 197, 94, 0.15), inset 0 0 30px rgba(134, 239, 172, 0.1)',
        ...style
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '1px solid rgba(74, 222, 128, 0.2)',
          borderRadius: '11px',
          margin: '4px'
        }}
      />

      <div
        className="relative z-10"
        style={{
          background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
          padding: '12px 20px',
          borderBottom: '3px solid #15803d'
        }}
      >
        <h2 className="text-white font-bold text-lg md:text-xl text-center tracking-wide">
          {headerText}
        </h2>
      </div>

      {children}
    </div>
  );
}
