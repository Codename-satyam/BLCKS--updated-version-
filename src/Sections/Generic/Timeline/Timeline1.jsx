export default function Timeline1({ badge, title, events }) {
  const defaultEvents = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to revolutionize the industry." },
    { year: "2021", title: "Series A Funding", description: "Raised $2M to accelerate growth and development." },
    { year: "2022", title: "1000+ Customers", description: "Reached major milestone with thousands of satisfied users." },
    { year: "2024", title: "Global Expansion", description: "Opened offices in 15 countries worldwide." }
  ];

  const timelineEvents = events || defaultEvents;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-slate-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 block">{badge || "> OUR JOURNEY"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Timeline"}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-white" />

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative pl-32 md:pl-40">
                {/* Circle */}
                <div className="absolute left-2 md:left-6 top-2 w-12 h-12 md:w-16 md:h-16 bg-black border-4 border-white flex items-center justify-center">
                  <span className="font-black text-sm">{event.year}</span>
                </div>

                {/* Content */}
                <div className="bg-black border-4 border-white p-6 md:p-8 hover:border-slate-400 transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2">
                    {event.title}
                  </h3>
                  <p className="text-base text-zinc-400 font-bold">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
