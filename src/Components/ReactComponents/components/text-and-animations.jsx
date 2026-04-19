// Type Glow Text Component
export function TypeGlowText({ text = 'Deploying Neon Interface', className = '' }) {
  return (
    <p
      className={`overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 ${className}`}
      style={{
        width: 0,
        animation: 'typing 3s steps(22, end) infinite, blink 0.8s step-end infinite',
      }}
    >
      {text}
    </p>
  );
}

// Scanline Sweep Component
export function ScanlineSweep({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Scan bar */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,229,255,0.18) 50%, transparent 100%)',
          animation: 'scanY 2.6s linear infinite',
        }}
      />
      {/* Scanlines overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-40"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.07) 4px)',
        }}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}

// Hologram Title Component
export function HologramTitle({ children, as: Tag = 'h1', className = '' }) {
  return (
    <Tag
      className={`font-black uppercase tracking-[0.18em] text-cyan-300 ${className}`}
      style={{
        textShadow:
          '0 0 12px rgba(0,229,255,0.7), 0 0 40px rgba(0,229,255,0.3), 2px 2px 0 rgba(0,180,220,0.4)',
      }}
    >
      {children}
    </Tag>
  );
}

// Flicker Caption Component
export function FlickerCaption({ children, className = '' }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.15em] text-cyan-500 ${className}`}
      style={{ animation: 'flicker 2.4s linear infinite' }}
    >
      {children}
    </p>
  );
}
