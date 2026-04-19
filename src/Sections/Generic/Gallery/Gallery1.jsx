export default function Gallery1({ badge, title, items }) {
  const defaultItems = [
    { title: "Project One", category: "Web Design", url: "#" },
    { title: "Project Two", category: "Branding", url: "#" },
    { title: "Project Three", category: "Development", url: "#" },
    { title: "Project Four", category: "Web Design", url: "#" },
    { title: "Project Five", category: "UX Design", url: "#" },
    { title: "Project Six", category: "Development", url: "#" }
  ];

  const galleryItems = items || defaultItems;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-green-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-black text-green-400 uppercase tracking-widest mb-3 block">{badge || "> PORTFOLIO"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Our Work"}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-zinc-900 to-black border-4 border-white p-8 h-64 flex flex-col justify-end hover:border-green-400 hover:shadow-[8px_8px_0px_0px_#22c55e] transition-all duration-300 relative overflow-hidden">
                {/* Placeholder Image Area */}
                <div className="absolute inset-0 bg-zinc-800 opacity-40 group-hover:opacity-60 transition-opacity" />
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-xs font-black text-green-400 uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
