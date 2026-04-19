export default function Testimonials3({ badge, title, testimonials }) {
  const defaultTestimonials = [
    {
      name: "Alex Rivera",
      role: "CTO",
      quote: "Outstanding execution and innovative approach.",
      company: "Digital Solutions"
    },
    {
      name: "Maria Chen",
      role: "COO",
      quote: "Transformed our workflow completely. Highly professional.",
      company: "Global Tech"
    },
    {
      name: "David Wilson",
      role: "Founder",
      quote: "Exactly what we needed. Amazing results.",
      company: "Innovation Hub"
    }
  ];

  const items = testimonials || defaultTestimonials;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-teal-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "45px 45px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="mb-16 border-l-4 border-teal-400 pl-6">
          <span className="text-xs font-black text-teal-400 uppercase tracking-widest mb-2 block">{badge || "> TESTIMONIALS"}</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {title || "Trusted By"}
          </h2>
        </div>

        {/* Vertical Testimonials */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border-l-4 border-teal-400 pl-6 py-4 hover:pl-8 transition-all duration-300 hover:border-teal-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-teal-400/20 border-2 border-teal-400 flex items-center justify-center">
                  <span className="font-black text-teal-400 text-sm">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <blockquote className="text-base md:text-lg font-bold mb-3 text-white">
                    "{item.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                    <span className="font-black">{item.name}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{item.role}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-teal-400">{item.company}</span>
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
