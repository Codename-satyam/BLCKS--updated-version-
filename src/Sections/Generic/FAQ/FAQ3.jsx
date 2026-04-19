import { useState } from "react";

export default function FAQ3({ badge, title, items }) {
  const defaultItems = [
    { category: "Billing", question: "What are your pricing options?", answer: "We offer flexible pricing plans starting from $29/month. Custom enterprise solutions available upon request." },
    { category: "Technical", question: "What technologies do you use?", answer: "We use cutting-edge technologies including React, Node.js, and cloud infrastructure for optimal performance." },
    { category: "Security", question: "Is my data secure?", answer: "Yes, we use industry-standard encryption, regular security audits, and comply with GDPR and other standards." },
    { category: "Onboarding", question: "How long does setup take?", answer: "Most users are set up and running within 15 minutes. Our team can also help with complex implementations." }
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);
  const faqItems = items || defaultItems;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-rose-500 selection:text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "48px 48px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="border-l-4 border-rose-500 pl-6 mb-16">
          <span className="text-xs font-black text-rose-400 uppercase tracking-widest mb-3 block">{badge || "> GET ANSWERS"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "FAQ"}
          </h2>
        </div>

        {/* Accordion with Categories */}
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="border-l-4 border-rose-500 hover:border-rose-300 transition-colors cursor-pointer"
            >
              <div className="bg-black border-4 border-white hover:border-rose-500 transition-all duration-300 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-black text-rose-400 uppercase tracking-widest mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-white uppercase leading-tight">
                      {item.question}
                    </h3>
                  </div>
                  <span className="text-3xl flex-shrink-0 transition-transform duration-300" style={{ transform: expandedIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </div>

                {expandedIndex === i && (
                  <div className="border-t-4 border-dashed border-zinc-800 mt-6 pt-6">
                    <p className="text-base text-zinc-400 font-bold leading-relaxed">
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
