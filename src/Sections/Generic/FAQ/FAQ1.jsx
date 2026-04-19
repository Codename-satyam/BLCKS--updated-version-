import { useState } from "react";

export default function FAQ1({ badge, title, items }) {
  const defaultItems = [
    { question: "What is included in the package?", answer: "Our package includes everything you need to get started. Full documentation, 24/7 support, and regular updates." },
    { question: "How do I get started?", answer: "Simply sign up for an account, choose your plan, and follow the onboarding guide. You'll be up and running in minutes." },
    { question: "Can I upgrade or downgrade anytime?", answer: "Yes, you can change your plan at any time. Changes take effect on your next billing cycle." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers." }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqItems = items || defaultItems;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-amber-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-black text-amber-400 uppercase tracking-widest mb-3 block">{badge || "> QUESTIONS?"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "FAQ"}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-4 border-white bg-black hover:border-amber-400 transition-all duration-300">
              {/* Question Button */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-zinc-900 transition-colors"
              >
                <span className="text-lg md:text-xl font-black text-white uppercase tracking-tight text-left">
                  {item.question}
                </span>
                <span className="text-2xl ml-4 flex-shrink-0 transition-transform duration-300" style={{ transform: expandedIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>

              {/* Answer */}
              {expandedIndex === i && (
                <div className="border-t-4 border-white p-6 md:p-8 bg-zinc-900">
                  <p className="text-base md:text-lg text-zinc-300 font-bold leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
