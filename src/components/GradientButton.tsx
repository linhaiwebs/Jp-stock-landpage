interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({ children, className = "" }: GradientButtonProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, #15803d 0%, #22c55e 25%, #4ade80 50%, #22c55e 75%, #15803d 100%)',
        backgroundSize: '200% 100%',
        borderRadius: '12px',
        border: '3px solid #22c55e',
        boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.5), 0 0 20px rgba(74, 222, 128, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
        willChange: 'box-shadow'
      }}
    >
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          border: '2px solid rgba(134, 239, 172, 0.3)',
          borderRadius: '10px',
          margin: '2px'
        }}
      />
      {children}
    </div>
  );
}
