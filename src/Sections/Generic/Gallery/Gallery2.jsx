export default function Gallery2({ badge, title, items }) {
  const defaultItems = [
    { title: "Design System", tag: "DESIGN" },
    { title: "Mobile App", tag: "DEVELOPMENT" },
    { title: "Brand Identity", tag: "BRANDING" },
    { title: "Web Platform", tag: "FULL STACK" },
    { title: "Campaign Visuals", tag: "MARKETING" },
    { title: "E-commerce Site", tag: "WEB DESIGN" },
    { title: "SaaS Dashboard", tag: "DEVELOPMENT" },
    { title: "Brand Guidelines", tag: "BRANDING" }
  ];

  const galleryItems = items || defaultItems;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-blue-500 selection:text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
            {title || "Gallery"}
          </h2>
          <p className="text-xs font-black text-blue-400 uppercase tracking-widest">{badge || "> FEATURED PROJECTS"}</p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`bg-black border-3 border-white p-6 hover:border-blue-500 transition-all duration-300 cursor-pointer group ${
                i % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Placeholder */}
              <div className="bg-zinc-800 w-full h-32 md:h-48 mb-6 group-hover:bg-blue-500/20 transition-colors" />
              
              <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">{item.tag}</p>
              <h3 className="text-lg md:text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
