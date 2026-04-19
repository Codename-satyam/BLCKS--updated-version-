// Terminal Header Component
export function TerminalHeader({ brand = 'SYS.NAV', links = [], cta = 'Launch' }) {
  return (
    <header className="w-full border-b border-cyan-900/60 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="font-mono text-sm font-bold tracking-[0.25em] text-cyan-300">
            {brand}
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-600 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="border border-cyan-600 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 transition hover:bg-cyan-400 hover:text-black">
          {cta}
        </button>
      </div>
    </header>
  );
}

// Glass Neon Header Component
export function GlassNeonHeader({ brand = 'BRAND', links = [], cta = 'Sign Up' }) {
  return (
    <header className="relative z-10 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-cyan-500/30 bg-black/50 px-5 py-3 shadow-[0_0_30px_rgba(0,229,255,0.06)] backdrop-blur-xl">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
          {brand}
        </span>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-cyan-400/80 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan-300 transition hover:bg-cyan-400 hover:text-black">
          {cta}
        </button>
      </div>
    </header>
  );
}
