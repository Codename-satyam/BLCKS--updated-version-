export default function FooterSubtle({ content = {}, editor }) {
    const {
        brand = "MINIMA",
        subtitle = "Refined design for modern interfaces.",
        link1 = "About",
        link2 = "Services",
        link3 = "Journal",
        link4 = "Support",
        copyrightLine = "All rights reserved.",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    return (
        <footer className="w-full bg-white text-slate-900 border-t border-slate-100">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    
                    {/* Brand Section */}
                    <div className="max-w-sm">
                        {isEditing ? (
                            <input 
                                type="text" 
                                value={brand} 
                                onChange={(e) => onFieldChange("brand", e.target.value)} 
                                className="text-lg font-semibold tracking-tight mb-2 bg-slate-50 border border-slate-200 px-2 py-1 w-full outline-none focus:border-slate-400" 
                            />
                        ) : (
                            <h3 className="text-lg font-semibold tracking-tight mb-2">{brand}</h3>
                        )}

                        {isEditing ? (
                            <input 
                                type="text" 
                                value={subtitle} 
                                onChange={(e) => onFieldChange("subtitle", e.target.value)} 
                                className="text-slate-500 text-sm leading-relaxed bg-slate-50 border border-slate-200 px-2 py-1 w-full outline-none focus:border-slate-400" 
                            />
                        ) : (
                            <p className="text-slate-500 text-sm leading-relaxed">{subtitle}</p>
                        )}
                    </div>

                    {/* Navigation Section */}
                    <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
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
                                    className="bg-slate-50 border border-slate-200 px-2 py-1 w-20 text-xs outline-none" 
                                />
                            ) : (
                                <a key={item.key} href="#" className="hover:text-black transition-colors duration-200">
                                    {item.val}
                                </a>
                            )
                        ))}
                    </nav>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[11px] uppercase tracking-widest text-slate-400">
                        {isEditing ? (
                            <input 
                                type="text" 
                                value={copyrightLine} 
                                onChange={(e) => onFieldChange("copyrightLine", e.target.value)} 
                                className="bg-slate-50 border border-slate-200 px-2 py-1 w-64 outline-none" 
                            />
                        ) : (
                            <>{new Date().getFullYear()} © {copyrightLine}</>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}