export default function CTA1({ badge, title, description, buttonText }) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-orange-500 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-black border-4 border-white shadow-[20px_20px_0px_0px_#f97316]">
          {/* Header Bar */}
          <div className="border-b-4 border-white bg-zinc-900 p-6">
            <span className="text-xs font-black text-white uppercase tracking-widest">{badge || "> READY TO START?"}</span>
          </div>

          {/* Content */}
          <div className="p-12 md:p-16 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 drop-shadow-[4px_4px_0px_#f97316]">
              {title || "Take Action"}
            </h2>

            <p className="text-base md:text-lg text-zinc-400 font-bold uppercase tracking-wider mb-12 max-w-2xl mx-auto leading-relaxed">
              {description || "Don't wait any longer. Join thousands of satisfied users and transform your experience today."}
            </p>

            <button className="group relative px-8 md:px-12 py-4 md:py-6 border-3 border-orange-500 bg-black text-orange-500 font-black uppercase text-sm md:text-base tracking-widest hover:bg-orange-500 hover:text-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_white]">
              {buttonText || "Start Now"} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
