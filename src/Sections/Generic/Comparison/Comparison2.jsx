export default function Comparison2({ badge, title, items }) {
  const defaultItems = [
    {
      name: "Our Plan",
      price: "$49",
      color: "lime",
      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "Team Collaboration",
        "24/7 Support",
        "Custom Integrations",
        "Priority Updates"
      ]
    },
    {
      name: "Standard Plan",
      price: "$99",
      color: "white",
      features: [
        "5 Projects",
        "Basic Analytics",
        "Single User",
        "Email Support",
        "Limited API",
        "Monthly Updates"
      ]
    }
  ];

  const plans = items || defaultItems;

  const colorMap = {
    lime: "border-lime-400 text-lime-400",
    white: "border-white text-white",
    cyan: "border-cyan-400 text-cyan-400",
    pink: "border-pink-500 text-pink-500"
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-fuchsia-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-black text-fuchsia-400 uppercase tracking-widest mb-3 block">{badge || "> PLANS"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Pricing Comparison"}
          </h2>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => {
            const colorClass = colorMap[plan.color] || colorMap.white;
            return (
              <div key={i} className={`border-4 ${colorClass} p-8 md:p-12`}>
                {/* Header */}
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-2">{plan.name}</h3>
                <p className="text-4xl md:text-5xl font-black mb-8 text-white">{plan.price}<span className="text-lg">/mo</span></p>

                {/* Features */}
                <div className="space-y-4 border-t-4 pt-8" style={{ borderColor: plan.color === "white" ? "white" : `var(--tw-${plan.color}-color)` }}>
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <span className="font-black text-xl">✓</span>
                      <span className="font-bold uppercase text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full mt-8 py-4 border-3 font-black uppercase text-sm tracking-widest transition-all duration-300 ${
                  plan.color === "lime" 
                    ? "border-lime-400 bg-lime-400 text-black hover:bg-black hover:text-lime-400" 
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}>
                  Choose Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
