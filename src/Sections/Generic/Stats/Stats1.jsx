export default function Stats1({ badge, title, stats }) {
  const defaultStats = [
    { label: "Happy Clients", value: "5K+", icon: "👥" },
    { label: "Projects Delivered", value: "2.3K", icon: "✓" },
    { label: "Years Experience", value: "12+", icon: "⭐" },
    { label: "Uptime Guarantee", value: "99.9%", icon: "🔒" }
  ];

  const items = stats || defaultStats;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-yellow-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-3 block">{badge || "> BY THE NUMBERS"}</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {title || "Our Impact"}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((stat, i) => (
            <div key={i} className="bg-black border-4 border-white p-8 text-center hover:shadow-[8px_8px_0px_0px_#facc15] transition-all duration-300">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <p className="text-5xl md:text-6xl font-black text-yellow-400 mb-3">
                {stat.value}
              </p>
              <p className="text-xs font-black text-white uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
