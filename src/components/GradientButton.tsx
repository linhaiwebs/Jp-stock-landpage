interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({ children, className = "" }: GradientButtonProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, #15803d 0%, #16a34a 25%, #22c55e 50%, #16a34a 75%, #15803d 100%)',
        backgroundSize: '200% 100%',
        borderRadius: '14px',
        border: '2px solid rgba(21, 128, 61, 0.6)',
        boxShadow: '0 8px 24px rgba(22, 163, 74, 0.5), 0 4px 12px rgba(21, 128, 61, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)',
        willChange: 'box-shadow, transform'
      }}
    >
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-50"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 40%, rgba(0,0,0,0.15) 100%)',
          borderRadius: '12px'
        }}
      />
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)',
          borderRadius: '12px'
        }}
      />
      {children}
    </div>
  );
}
