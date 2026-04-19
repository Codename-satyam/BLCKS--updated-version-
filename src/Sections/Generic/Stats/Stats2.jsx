export default function Stats2({ badge, title, stats }) {
  const defaultStats = [
    { label: "Global Reach", value: "150+", description: "Countries Served" },
    { label: "Team Size", value: "500+", description: "Professionals" },
    { label: "Avg Rating", value: "4.9★", description: "Out of 5" },
    { label: "ROI Impact", value: "320%", description: "Average Increase" }
  ];

  const items = stats || defaultStats;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-indigo-500 selection:text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-4 block">{badge || "> PROVEN RESULTS"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
            {title || "Why Trust Us"}
          </h2>
        </div>

        {/* Stats Vertical */}
        <div className="space-y-4">
          {items.map((stat, i) => (
            <div key={i} className="border-l-4 border-indigo-500 pl-8 py-6 hover:pl-12 transition-all duration-300">
              <div className="flex items-baseline gap-4 mb-2">
                <p className="text-6xl md:text-7xl font-black text-indigo-400">{stat.value}</p>
                <div>
                  <p className="text-lg md:text-xl font-black text-white uppercase">{stat.label}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
