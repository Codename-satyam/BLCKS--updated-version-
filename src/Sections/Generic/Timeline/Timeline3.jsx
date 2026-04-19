export default function Timeline3({ badge, title, events }) {
  const defaultEvents = [
    { year: "2019", title: "Started", icon: "🚀" },
    { year: "2020", title: "First 100 Users", icon: "📈" },
    { year: "2021", title: "Product Launch", icon: "🎯" },
    { year: "2022", title: "Series B", icon: "💰" },
    { year: "2023", title: "1M Users", icon: "🌟" },
    { year: "2024", title: "Global Leader", icon: "👑" }
  ];

  const timeline = events || defaultEvents;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-gray-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "45px 45px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 block">{badge || "> MILESTONES"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Our Story"}
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-white" />

          {/* Events */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {timeline.map((event, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Circle Node */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black border-4 border-white flex items-center justify-center mb-8 rounded-full hover:border-gray-400 hover:bg-gray-400/10 transition-all duration-300">
                  <span className="text-3xl md:text-4xl">{event.icon}</span>
                </div>

                {/* Text */}
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-white mb-2">{event.year}</p>
                  <p className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
