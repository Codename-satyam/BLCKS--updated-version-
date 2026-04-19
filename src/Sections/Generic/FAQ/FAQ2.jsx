import { useState } from "react";

export default function FAQ2({ badge, title, items }) {
  const defaultItems = [
    { question: "What's your refund policy?", answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your purchase." },
    { question: "Do you offer customer support?", answer: "Yes! We provide 24/7 email support, live chat, and a comprehensive knowledge base." },
    { question: "Is there a free trial?", answer: "Absolutely! Try our service free for 14 days. No credit card required." },
    { question: "How often do you release updates?", answer: "We release new features and improvements weekly. Security patches are deployed as needed." }
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);
  const faqItems = items || defaultItems;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-sky-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "50px 50px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
            {title || "Frequently Asked"}
          </h2>
          <p className="text-xs font-black text-sky-400 uppercase tracking-widest">{badge || "> FIND ANSWERS"}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className={`border-4 cursor-pointer transition-all duration-300 ${
                expandedIndex === i
                  ? "border-sky-400 shadow-[8px_8px_0px_0px_#0ea5e9] bg-sky-400/10"
                  : "border-white hover:border-sky-400"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-base md:text-lg font-black text-white uppercase leading-tight">
                    {item.question}
                  </h3>
                  <span className="text-2xl flex-shrink-0 transition-transform duration-300" style={{ transform: expandedIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </div>

                {expandedIndex === i && (
                  <div className="border-t-2 border-zinc-700 pt-4 mt-4">
                    <p className="text-sm text-zinc-400 font-bold leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
