import { useState } from "react";

export default function Testimonials2({ badge, title, testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultTestimonials = [
    {
      name: "Jane Doe",
      role: "Founder",
      quote: "Game-changing solution that exceeded all expectations.",
      company: "StartUp Labs"
    },
    {
      name: "John Smith",
      role: "Director",
      quote: "Best decision we made. Incredible results in minimal time.",
      company: "Enterprise Inc"
    },
    {
      name: "Sarah Johnson",
      role: "Manager",
      quote: "Professional, reliable, and delivers exactly what you need.",
      company: "Tech Ventures"
    }
  ];

  const items = testimonials || defaultTestimonials;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-purple-500 selection:text-white">
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
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white">
            {title || "Real Stories"}
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-bold uppercase tracking-widest">
            {badge || "> FROM OUR SATISFIED CLIENTS"}
          </p>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`p-6 border-4 cursor-pointer transition-all duration-300 ${
                i === activeIndex
                  ? "border-purple-500 shadow-[8px_8px_0px_0px_#a855f7] bg-purple-500/10"
                  : "border-white hover:border-purple-500"
              }`}
            >
              <p className="text-xs font-black text-purple-400 uppercase tracking-widest mb-3">// CLIENT {i + 1}</p>
              <blockquote className="text-sm md:text-base font-bold leading-relaxed mb-4 text-white">
                "{item.quote}"
              </blockquote>
              <div className="border-t-2 border-zinc-700 pt-4">
                <p className="font-black text-xs uppercase tracking-widest">{item.name}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{item.role} • {item.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 border-2 transition-colors ${
                i === activeIndex ? "bg-purple-500 border-purple-500" : "border-white bg-black"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
