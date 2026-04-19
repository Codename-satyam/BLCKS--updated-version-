export default function Comparison3({ badge, title, products }) {
  const defaultProducts = [
    {
      name: "Product A",
      specs: [
        { label: "Performance", value: "9/10" },
        { label: "Price", value: "$99" },
        { label: "Support", value: "24/7" },
        { label: "Features", value: "50+" },
        { label: "Integrations", value: "100+" }
      ]
    },
    {
      name: "Product B",
      specs: [
        { label: "Performance", value: "7/10" },
        { label: "Price", value: "$149" },
        { label: "Support", value: "Business" },
        { label: "Features", value: "30" },
        { label: "Integrations", value: "25" }
      ]
    },
    {
      name: "Product C",
      specs: [
        { label: "Performance", value: "6/10" },
        { label: "Price", value: "$199" },
        { label: "Support", value: "Email" },
        { label: "Features", value: "20" },
        { label: "Integrations", value: "10" }
      ]
    }
  ];

  const items = products || defaultProducts;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-teal-400 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "48px 48px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-black text-teal-400 uppercase tracking-widest mb-3 block">{badge || "> COMPARISON"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Product Comparison"}
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((product, i) => (
            <div key={i} className="bg-black border-4 border-white p-8 hover:border-teal-400 hover:shadow-[8px_8px_0px_0px_#14b8a6] transition-all duration-300">
              {/* Title */}
              <h3 className="text-3xl font-black text-white uppercase mb-8 pb-6 border-b-4 border-white">
                {product.name}
              </h3>

              {/* Specs */}
              <div className="space-y-6">
                {product.specs.map((spec, j) => (
                  <div key={j} className="flex items-end justify-between gap-4 pb-4 border-b-2 border-zinc-800">
                    <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                      {spec.label}
                    </span>
                    <span className="text-2xl md:text-3xl font-black text-teal-400">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full mt-8 py-4 border-3 border-teal-400 text-teal-400 font-black uppercase text-sm tracking-widest hover:bg-teal-400 hover:text-black transition-all duration-300">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
