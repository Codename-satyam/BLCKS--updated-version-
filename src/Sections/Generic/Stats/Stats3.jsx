export default function Stats3({ badge, title, stats }) {
  const defaultStats = [
    { number: "01", label: "Years Active", value: "10+" },
    { number: "02", label: "Team Members", value: "250+" },
    { number: "03", label: "Projects Completed", value: "1500+" },
    { number: "04", label: "Client Satisfaction", value: "98%" }
  ];

  const items = stats || defaultStats;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-red-500 selection:text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "55px 55px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-black text-red-500 uppercase tracking-widest mb-4 block">{badge || "> ACHIEVEMENTS"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Success Metrics"}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((stat, i) => (
            <div key={i} className="group bg-black border-4 border-white p-8 hover:border-red-500 hover:shadow-[8px_8px_0px_0px_#ef4444] transition-all duration-300">
              {/* Number Circle */}
              <div className="w-16 h-16 mb-6 border-3 border-red-500 flex items-center justify-center group-hover:bg-red-500 transition-all duration-300">
                <span className="text-2xl font-black text-red-500 group-hover:text-black">{stat.number}</span>
              </div>

              {/* Content */}
              <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-red-500 transition-colors">
                {stat.label}
              </p>
              <p className="text-4xl font-black text-white mb-4">{stat.value}</p>
              <div className="h-1 bg-gradient-to-r from-red-500 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
