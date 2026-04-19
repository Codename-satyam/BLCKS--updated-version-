export default function Timeline2({ badge, title, events }) {
  const defaultEvents = [
    { phase: "Phase 1", title: "Research & Planning", status: "complete", months: "3" },
    { phase: "Phase 2", title: "MVP Development", status: "complete", months: "4" },
    { phase: "Phase 3", title: "Beta Launch", status: "complete", months: "2" },
    { phase: "Phase 4", title: "Full Release", status: "in-progress", months: "1" }
  ];

  const phases = events || defaultEvents;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-stone-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="mb-16 border-l-4 border-stone-400 pl-6">
          <span className="text-xs font-black text-stone-400 uppercase tracking-widest mb-3 block">{badge || "> PROJECT ROADMAP"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Progress"}
          </h2>
        </div>

        {/* Phases Grid */}
        <div className="space-y-4">
          {phases.map((phase, i) => (
            <div key={i} className="flex items-center gap-6">
              {/* Number */}
              <div className="w-14 h-14 bg-black border-3 border-white flex-shrink-0 flex items-center justify-center">
                <span className="font-black text-lg">{i + 1}</span>
              </div>

              {/* Content */}
              <div className="flex-1 bg-black border-4 border-white p-6 hover:border-stone-400 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-stone-400 uppercase tracking-widest mb-1">{phase.phase}</p>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase">{phase.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className={`px-4 py-2 border-2 font-black uppercase text-xs tracking-widest ${
                      phase.status === "complete" 
                        ? "border-green-500 text-green-500 bg-green-500/10" 
                        : "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                    }`}>
                      {phase.status === "complete" ? "✓ Done" : "⏳ In Progress"}
                    </span>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">{phase.months} months</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
