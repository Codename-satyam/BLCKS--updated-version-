export default function ModernMinimalistNavbar({ content = {}, editor }) {
    const {
        brand = "SERIF",
        link1 = "Work",
        link2 = "About",
        link3 = "Journal",
        link4 = "Contact",
        cta = "Start a Project",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    return (
        <section className="w-full bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
            <div className="mx-auto max-w-7xl px-6 py-8">
                <nav className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-zinc-100 pb-6">
                    
                    {/* Brand / Logo - High contrast, serif or clean sans */}
                    <div className="flex-shrink-0">
                        {isEditing ? (
                            <input
                                type="text"
                                value={brand}
                                onChange={(e) => onFieldChange("brand", e.target.value)}
                                className="bg-zinc-50 text-xl font-medium tracking-tight border-none focus:ring-1 focus:ring-zinc-400 px-2 py-1 outline-none"
                            />
                        ) : (
                            <span className="text-xl font-medium tracking-tighter uppercase cursor-default">
                                {brand}
                            </span>
                        )}
                    </div>

                    {/* Navigation - Low-opacity text that brightens on hover */}
                    <div className="flex items-center gap-10 text-[13px] font-normal tracking-wide uppercase text-zinc-400">
                        {[ 
                            { key: "link1", val: link1 }, 
                            { key: "link2", val: link2 }, 
                            { key: "link3", val: link3 }, 
                            { key: "link4", val: link4 } 
                        ].map((link) => (
                            <div key={link.key}>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={link.val}
                                        onChange={(e) => onFieldChange(link.key, e.target.value)}
                                        className="bg-zinc-50 border-none w-20 text-center focus:ring-1 focus:ring-zinc-400"
                                    />
                                ) : (
                                    <a href="#" className="hover:text-zinc-900 transition-colors duration-500 ease-in-out">
                                        {link.val}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA - Minimalist pill button */}
                    <div className="flex-shrink-0">
                        {isEditing ? (
                            <input
                                type="text"
                                value={cta}
                                onChange={(e) => onFieldChange("cta", e.target.value)}
                                className="bg-zinc-900 text-white px-6 py-2 rounded-full text-xs font-medium uppercase"
                            />
                        ) : (
                            <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-[12px] font-medium uppercase tracking-widest hover:bg-zinc-700 transition-all active:scale-95">
                                {cta}
                            </button>
                        )}
                    </div>
                </nav>
                
                {/* Secondary Bottom Bar / Status Line */}
                {!isEditing && (
                    <div className="flex justify-between items-center mt-4 text-[10px] text-zinc-300 uppercase tracking-[0.2em]">
                        <span>Available for hire — 2026</span>
                        <span>London / Remote</span>
                    </div>
                )}
            </div>
        </section>
    );
}