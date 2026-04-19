export default function CTA2({ badge, title, description, buttonText, secondaryText }) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-pink-500 selection:text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-black text-pink-500 uppercase tracking-widest mb-3 block">{badge || "> LIMITED TIME"}</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
                {title || "Exclusive Offer"}
              </h2>
              <p className="text-base md:text-lg text-zinc-400 font-bold leading-relaxed mb-8">
                {description || "Get access to premium features at an incredible price. This offer won't last long."}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button className="px-8 py-4 border-3 border-pink-500 bg-pink-500 text-black font-black uppercase text-sm tracking-widest hover:bg-black hover:text-pink-500 transition-all duration-300">
                {buttonText || "Get Started"} →
              </button>
              <a href="#" className="text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-pink-500 transition-colors">
                {secondaryText || "Learn More →"}
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-black border-4 border-pink-500 p-8 shadow-[12px_12px_0px_0px_#ec4899]">
            <div className="space-y-6">
              <div className="border-b-2 border-zinc-800 pb-4">
                <p className="text-3xl font-black text-pink-500 mb-1">50%</p>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">OFF TODAY</p>
              </div>
              <div className="border-b-2 border-zinc-800 pb-4">
                <p className="text-sm font-bold text-white mb-2">✓ All Premium Features</p>
                <p className="text-sm font-bold text-white mb-2">✓ Priority Support</p>
                <p className="text-sm font-bold text-white">✓ Money-Back Guarantee</p>
              </div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">
                EXPIRES IN 24 HOURS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
