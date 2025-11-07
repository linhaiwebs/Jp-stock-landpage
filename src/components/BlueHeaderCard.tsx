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
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        border: '5px solid #3b82f6',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -1px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(59, 130, 246, 0.1)',
        ...style
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '2px solid rgba(59, 130, 246, 0.4)',
          borderRadius: '6px',
          margin: '8px'
        }}
      />

      <div
        className="relative z-10"
        style={{
          background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
          padding: '12px 20px',
          borderBottom: '3px solid #1e40af'
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
