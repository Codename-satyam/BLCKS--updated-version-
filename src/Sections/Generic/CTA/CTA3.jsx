export default function CTA3({ badge, title, description, buttons }) {
  const defaultButtons = [
    { label: "Start Free Trial", color: "lime" },
    { label: "Schedule Demo", color: "cyan" },
    { label: "Contact Sales", color: "fuchsia" }
  ];

  const btnList = buttons || defaultButtons;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-lime-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "45px 45px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-lime-400" />
          <span className="text-xs font-black text-lime-400 uppercase tracking-widest">{badge || "> MULTIPLE OPTIONS"}</span>
          <div className="w-2 h-2 bg-lime-400" />
        </div>

        {/* Title */}
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 drop-shadow-[6px_6px_0px_#84cc16]">
          {title || "Choose Your Path"}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-400 font-bold uppercase tracking-wider mb-16 max-w-2xl mx-auto">
          {description || "Pick the option that works best for your needs. No hidden fees."}
        </p>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {btnList.map((btn, i) => {
            const colorMap = {
              lime: "border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black",
              cyan: "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
              fuchsia: "border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-black",
              pink: "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black",
              orange: "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
            };

            return (
              <button
                key={i}
                className={`py-6 border-3 bg-black font-black uppercase text-sm tracking-widest transition-all duration-300 ${
                  colorMap[btn.color] || colorMap.lime
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mt-12">
          ALL PLANS INCLUDE 14-DAY FREE TRIAL
        </p>
      </div>
    </section>
  );
}
