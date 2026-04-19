// Neon Grid Background Component
export function NeonGridBackground({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-[#030712] ${className}`}>
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,229,255,0.28),transparent_60%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Rolling Window Background Component
export function RollingWindowBackground({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-[#050b1a] ${className}`}>
      {/* Sweeping bar */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.28) 35%, transparent 70%)',
          animation: 'rollX 5s linear infinite',
        }}
      />
      {/* Depth radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.25),transparent_40%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
