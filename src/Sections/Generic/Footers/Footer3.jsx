export default function FooterAesthetic({ content = {}, editor }) {
    const {
        brand = "Studio Noir",
        subtitle = "Curation & Design",
        link1 = "The Collection",
        link2 = "Archive",
        link3 = "About",
        link4 = "Inquiry",
        copyrightLine = "Est. 2024",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    // Styling Note: Ensure 'Playfair Display' or a similar Serif font 
    // and a cursive font like 'Dancing Script' or 'Mrs Saint Delafield' 
    // are imported in your project for the full effect.

    return (
        <footer className="w-full bg-white text-black border-t border-black/5">
            <div className="mx-auto w-full max-w-5xl px-8 py-20 min-w-0">
                <div className="flex flex-col items-center text-center gap-12">
                    
                    {/* Brand & Subtitle Section */}
                    <div className="flex flex-col items-center">
                        {isEditing ? (
                            <input 
                                type="text" 
                                value={brand} 
                                onChange={(e) => onFieldChange("brand", e.target.value)} 
                                className="text-5xl font-light italic border-b border-black/10 text-center outline-none py-2 w-full max-w-md bg-transparent" 
                                style={{ fontFamily: 'serif' }}
                            />
                        ) : (
                            <h3 
                                className="text-6xl md:text-7xl font-thin tracking-tighter"
                                style={{ fontFamily: '"Mrs Saint Delafield", cursive' }}
                            >
                                {brand}
                            </h3>
                        )}

                        {isEditing ? (
                            <input 
                                type="text" 
                                value={subtitle} 
                                onChange={(e) => onFieldChange("subtitle", e.target.value)} 
                                className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gray-400 border border-gray-100 px-2 py-1 text-center outline-none bg-transparent" 
                            />
                        ) : (
                            <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-sans">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Navigation Section */}
                    <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs uppercase tracking-widest font-light">
                        {[
                            { key: "link1", val: link1 },
                            { key: "link2", val: link2 },
                            { key: "link3", val: link3 },
                            { key: "link4", val: link4 },
                        ].map((item) => (
                            isEditing ? (
                                <input 
                                    key={item.key}
                                    type="text" 
                                    value={item.val} 
                                    onChange={(e) => onFieldChange(item.key, e.target.value)} 
                                    className="bg-gray-50 border-b border-black/5 px-1 py-1 w-24 text-center outline-none text-[10px]" 
                                />
                            ) : (
                                <a key={item.key} href="#" className="hover:italic hover:opacity-60 transition-all duration-300">
                                    {item.val}
                                </a>
                            )
                        ))}
                    </nav>
                </div>

                {/* Fine Line & Copyright */}
                <div className="mt-20 pt-8 border-t border-black/5 flex flex-col items-center">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-gray-300 italic">
                        {isEditing ? (
                            <input 
                                type="text" 
                                value={copyrightLine} 
                                onChange={(e) => onFieldChange("copyrightLine", e.target.value)} 
                                className="bg-transparent border-b border-gray-100 text-center outline-none w-32" 
                            />
                        ) : (
                            <>{copyrightLine} — © {new Date().getFullYear()}</>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}