export default function FunkyNavbar({ content = {}, editor }) {
    const {
        brand = "NEON_DRIVE",
        link1 = "Orbit",
        link2 = "Signals",
        link3 = "Vault",
        link4 = "Frequency",
        cta = "JOIN THE GRID",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    return (
        <section className="w-full bg-[#050505] overflow-hidden border-b-4 border-magenta-500 shadow-[0_0_20px_rgba(255,0,255,0.3)]">
            <div className="mx-auto w-full max-w-7xl px-4 py-6">
                <nav className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0a0a0a] p-4 border-2 border-yellow-400 -rotate-1 md:-rotate-0 hover:rotate-0 transition-transform duration-500">
                    
                    {/* Brand / Logo Section */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-magenta-500 animate-pulse hidden md:block" />
                        {isEditing ? (
                            <input
                                type="text"
                                value={brand}
                                onChange={(e) => onFieldChange("brand", e.target.value)}
                                className="bg-transparent text-yellow-400 text-3xl font-black italic border-b-2 border-magenta-500 outline-none uppercase tracking-tighter"
                            />
                        ) : (
                            <h1 className="text-yellow-400 text-3xl font-black italic tracking-tighter uppercase drop-shadow-[2px_2px_0px_#ff00ff]">
                                {brand}
                            </h1>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold italic uppercase text-sm">
                        {[ 
                            { key: "link1", val: link1 }, 
                            { key: "link2", val: link2 }, 
                            { key: "link3", val: link3 }, 
                            { key: "link4", val: link4 } 
                        ].map((link) => (
                            <div key={link.key} className="group relative">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={link.val}
                                        onChange={(e) => onFieldChange(link.key, e.target.value)}
                                        className="bg-zinc-900 text-cyan-400 border border-cyan-400/50 px-2 py-1 w-20 text-xs"
                                    />
                                ) : (
                                    <a href="#" className="text-white hover:text-magenta-400 transition-all duration-300 relative z-10">
                                        {link.val}
                                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400 group-hover:w-full transition-all" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-cyan-400 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                        {isEditing ? (
                            <input
                                type="text"
                                value={cta}
                                onChange={(e) => onFieldChange("cta", e.target.value)}
                                className="relative z-10 bg-black text-magenta-400 border-2 border-black px-6 py-2 font-black uppercase text-sm"
                            />
                        ) : (
                            <button className="relative z-10 bg-black text-white hover:text-cyan-400 border-2 border-black px-6 py-2 font-black uppercase text-sm transition-colors">
                                {cta}
                            </button>
                        )}
                    </div>
                </nav>
            </div>
            
            {/* Funky Background Element */}
            <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-magenta-500/10 blur-[100px] pointer-events-none" />
        </section>
    );
}