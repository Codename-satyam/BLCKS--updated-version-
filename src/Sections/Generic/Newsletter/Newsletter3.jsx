import { useState } from "react";

export default function Newsletter3({ badge, title, description }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setName("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-yellow-300 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "55px 55px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-black border-4 border-white text-center p-12 md:p-16">
          {/* Icon */}
          <div className="text-6xl mb-8">📧</div>

          {/* Content */}
          <span className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-4 block">{badge || "> KEEP IN TOUCH"}</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            {title || "Subscribe"}
          </h2>
          <p className="text-base text-zinc-400 font-bold uppercase tracking-wider mb-12">
            {description || "Join our community and receive curated content, tips, and special offers directly in your inbox."}
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-black border-2 border-white text-white font-bold placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors text-sm uppercase"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-black border-2 border-white text-white font-bold placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors text-sm uppercase"
              />
              <button
                type="submit"
                className="w-full py-4 border-3 border-yellow-400 bg-yellow-400 text-black font-black uppercase text-sm tracking-widest hover:bg-black hover:text-yellow-400 transition-all duration-300"
              >
                Join Newsletter →
              </button>
            </form>
          ) : (
            <div className="py-12">
              <p className="text-5xl mb-4">✓</p>
              <p className="text-2xl font-black text-yellow-400 uppercase mb-2">Thanks for joining!</p>
              <p className="text-sm text-zinc-400 uppercase tracking-widest">Check your email for confirmation.</p>
            </div>
          )}

          {/* Footer */}
          <p className="text-xs text-zinc-600 uppercase tracking-widest mt-8">
            We won't spam you. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
