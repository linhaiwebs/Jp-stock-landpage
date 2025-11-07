interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({ children, className = "" }: GradientButtonProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 25%, #fbbf24 50%, #f59e0b 75%, #f97316 100%)',
        backgroundSize: '200% 100%',
        borderRadius: '12px',
        border: '3px solid #f97316',
        boxShadow: '0 4px 14px 0 rgba(249, 115, 22, 0.5), 0 0 20px rgba(245, 158, 11, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
        willChange: 'box-shadow'
      }}
    >
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '10px',
          margin: '2px'
        }}
      />
      {children}
    </div>
  );
}
