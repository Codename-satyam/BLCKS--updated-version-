import { useState } from "react";

export default function Testimonials1({ badge, title, testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultTestimonials = [
    {
      name: "Client Name",
      role: "Product Manager",
      quote: "Outstanding service and exceptional attention to detail. Transformed our project completely.",
      company: "Tech Corp"
    },
    {
      name: "Client Name",
      role: "CEO",
      quote: "Professional, creative, and results-driven. Exactly what we needed.",
      company: "Design Studio"
    },
    {
      name: "Client Name",
      role: "Lead Designer",
      quote: "Incredible work ethic and problem-solving skills. Highly recommended.",
      company: "Creative Agency"
    }
  ];

  const items = testimonials || defaultTestimonials;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-cyan-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-cyan-400" />
            <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">{badge || "> CLIENT PRAISE"}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-[4px_4px_0px_#06b6d4]">
            {title || "What They Say"}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-black border-4 border-white shadow-[16px_16px_0px_0px_#06b6d4] mb-8">
          {/* Header Bar */}
          <div className="flex justify-between items-center border-b-4 border-white bg-zinc-900 p-4">
            <span className="text-xs font-black text-white uppercase tracking-widest">
              TESTIMONIAL // 0{activeIndex + 1}/{items.length}
            </span>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-3 w-3 border-2 border-white transition-colors ${
                    i === activeIndex ? "bg-cyan-400" : "bg-black"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <blockquote className="text-2xl md:text-4xl font-black uppercase leading-tight mb-8 text-cyan-400">
              "{items[activeIndex].quote}"
            </blockquote>

            <div className="flex items-center gap-4 border-t-4 border-dashed border-white pt-6">
              <div className="w-12 h-12 bg-white border-2 border-white" />
              <div>
                <p className="font-black text-sm uppercase tracking-widest">{items[activeIndex].name}</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">{items[activeIndex].role} @ {items[activeIndex].company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveIndex(prev => (prev - 1 + items.length) % items.length)}
            className="px-6 py-3 border-2 border-white text-white font-black uppercase text-xs hover:bg-white hover:text-black transition-colors"
          >
            ← PREV
          </button>
          <button
            onClick={() => setActiveIndex(prev => (prev + 1) % items.length)}
            className="px-6 py-3 border-2 border-white text-white font-black uppercase text-xs hover:bg-white hover:text-black transition-colors"
          >
            NEXT →
          </button>
        </div>
      </div>
    </section>
  );
}
