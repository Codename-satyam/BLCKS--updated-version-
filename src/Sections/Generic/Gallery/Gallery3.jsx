import { useState } from "react";

export default function Gallery3({ badge, title, items }) {
  const defaultItems = [
    { title: "Web Design", count: 24 },
    { title: "Development", count: 18 },
    { title: "Branding", count: 12 },
    { title: "UX Research", count: 8 }
  ];

  const galleryItems = items || defaultItems;
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-violet-500 selection:text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "45px 45px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="mb-16 border-b-4 border-white pb-8">
          <span className="text-xs font-black text-violet-400 uppercase tracking-widest mb-3 block">{badge || "> COLLECTIONS"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Gallery"}
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(i)}
              className={`px-6 py-3 border-2 font-black uppercase text-xs tracking-widest transition-all duration-300 ${
                i === activeFilter
                  ? "border-violet-500 bg-violet-500 text-black shadow-[4px_4px_0px_0px_white]"
                  : "border-white text-white hover:border-violet-500"
              }`}
            >
              {item.title} ({item.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-4 border-white p-6 hover:border-violet-500 hover:shadow-[8px_8px_0px_0px_#a78bfa] transition-all duration-300 group cursor-pointer">
              <div className="bg-zinc-800 w-full h-48 mb-6 group-hover:bg-violet-500/20 transition-colors flex items-center justify-center">
                <span className="text-sm font-bold text-zinc-600">Image {i + 1}</span>
              </div>
              <h3 className="font-black text-white uppercase text-sm">Project Title</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Category Tag</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
