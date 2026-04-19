import { useState } from "react";

export default function Newsletter1({ badge, title, description, placeholder }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-emerald-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-black border-4 border-white shadow-[16px_16px_0px_0px_#10b981] p-12 md:p-16">
          {/* Header Bar */}
          <div className="border-b-4 border-white pb-6 mb-8">
            <span className="text-xs font-black text-white uppercase tracking-widest">{badge || "> STAY UPDATED"}</span>
          </div>

          {/* Content */}
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-[4px_4px_0px_#10b981]">
            {title || "Get the Latest"}
          </h2>

          <p className="text-base md:text-lg text-zinc-400 font-bold uppercase tracking-wider mb-12 max-w-2xl">
            {description || "Subscribe to our newsletter for weekly tips, updates, and exclusive content."}
          </p>

          {/* Input */}
          {!subscribed ? (
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder={placeholder || "Enter your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 px-6 py-4 bg-black border-2 border-white text-white font-bold uppercase placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-4 border-3 border-emerald-400 bg-emerald-400 text-black font-black uppercase text-sm tracking-widest hover:bg-black hover:text-emerald-400 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          ) : (
            <div className="px-8 py-6 border-3 border-emerald-400 bg-emerald-400/10 text-emerald-400 font-black uppercase text-center">
              ✓ Thank you for subscribing!
            </div>
          )}

          {/* Footer */}
          <p className="text-xs text-zinc-600 uppercase tracking-widest mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
