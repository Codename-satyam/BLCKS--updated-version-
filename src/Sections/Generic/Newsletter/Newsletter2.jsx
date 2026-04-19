import { useState } from "react";

export default function Newsletter2({ badge, title, items }) {
  const defaultItems = [
    { icon: "📰", label: "Weekly Updates" },
    { icon: "💡", label: "Expert Tips" },
    { icon: "🚀", label: "New Features" },
    { icon: "🎯", label: "Exclusive Deals" }
  ];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const features = items || defaultItems;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-violet-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Features */}
        <div>
          <span className="text-xs font-black text-violet-400 uppercase tracking-widest mb-3 block">{badge || "> WHY SUBSCRIBE?"}</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            {title || "Stay In Loop"}
          </h2>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <p className="font-black text-white uppercase text-sm md:text-base">{feature.label}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Delivered directly to you</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Subscribe Form */}
        <div className="bg-black border-4 border-white p-8 shadow-[12px_12px_0px_0px_#a78bfa]">
          <p className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-6">NEWSLETTER</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs font-black text-white uppercase tracking-widest mb-3 block">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-black border-2 border-white text-white font-bold placeholder:text-zinc-600 focus:outline-none focus:border-violet-400 transition-colors text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full px-4 py-4 border-3 border-violet-500 bg-black text-violet-500 font-black uppercase text-sm tracking-widest hover:bg-violet-500 hover:text-black disabled:opacity-50 transition-all duration-300"
            >
              {submitted ? "✓ Subscribed!" : "Subscribe Now"}
            </button>
          </form>

          <p className="text-xs text-zinc-600 uppercase tracking-widest mt-6 text-center">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
