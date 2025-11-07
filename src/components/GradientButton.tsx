interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({ children, className = "" }: GradientButtonProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #16a34a 100%)',
        backgroundSize: '200% 100%',
        borderRadius: '14px',
        border: '2px solid rgba(74, 222, 128, 0.5)',
        boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4), 0 4px 12px rgba(22, 163, 74, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.25)',
        willChange: 'box-shadow, transform'
      }}
    >
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-60"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
          borderRadius: '12px'
        }}
      />
      {children}
    </div>
  );
}
