interface TurquoiseCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TurquoiseCard({ children, className = "" }: TurquoiseCardProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
        border: '4px solid #14b8a6',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(20, 184, 166, 0.3), 0 2px 4px -1px rgba(20, 184, 166, 0.2), inset 0 0 20px rgba(20, 184, 166, 0.1)'
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '2px solid rgba(20, 184, 166, 0.4)',
          borderRadius: '6px',
          margin: '6px'
        }}
      />
      {children}
    </div>
  );
}
