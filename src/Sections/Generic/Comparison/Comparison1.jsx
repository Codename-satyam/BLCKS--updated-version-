export default function Comparison1({ badge, title, features }) {
  const defaultFeatures = [
    { name: "Basic Features", ours: true, theirs: true },
    { name: "Advanced Tools", ours: true, theirs: false },
    { name: "Priority Support", ours: true, theirs: false },
    { name: "Custom Integration", ours: true, theirs: false },
    { name: "API Access", ours: true, theirs: false },
    { name: "Team Collaboration", ours: true, theirs: false }
  ];

  const featureList = features || defaultFeatures;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-lime-300 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-black text-lime-400 uppercase tracking-widest mb-3 block">{badge || "> SIDE BY SIDE"}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {title || "Compare"}
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-4 border-white">
            <thead>
              <tr className="bg-zinc-900 border-b-4 border-white">
                <th className="px-6 py-6 text-left border-r-4 border-white">
                  <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Feature</span>
                </th>
                <th className="px-6 py-6 text-center border-r-4 border-white">
                  <p className="text-xs font-black text-lime-400 uppercase tracking-widest">Our Solution</p>
                </th>
                <th className="px-6 py-6 text-center">
                  <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Competition</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {featureList.map((feature, i) => (
                <tr key={i} className="border-b-4 border-white hover:bg-zinc-900/50 transition-colors">
                  <td className="px-6 py-4 font-black text-white border-r-4 border-white">
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 text-center font-black text-lime-400 border-r-4 border-white">
                    {feature.ours ? "✓" : "—"}
                  </td>
                  <td className="px-6 py-4 text-center font-black text-zinc-500">
                    {feature.theirs ? "✓" : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
