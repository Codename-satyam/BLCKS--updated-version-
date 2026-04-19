export default function NavbarBrutalist({ content = {}, editor }) {
    const {
        brand = "ARCHIVE",
        link1 = "Index",
        link2 = "Studio",
        link3 = "Projects",
        link4 = "Info",
        cta = "Initiate",
        bgColor = "#ffffff",
        brandColor = "#000000",
        linkColor = "#000000",
        borderColor = "#000000",
        ctaColor = "#ffffff",
        ctaBgColor = "#000000",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const links = [
        { key: "link1", val: link1 },
        { key: "link2", val: link2 },
        { key: "link3", val: link3 },
        { key: "link4", val: link4 }
    ];

    return (
        <section 
            className="w-full selection:bg-black selection:text-white"
            style={{ backgroundColor: bgColor }}
        >
            {/* Top Border */}
            <div style={{ height: '2px', backgroundColor: borderColor, width: '100%' }}></div>
            
            <nav 
                className="flex flex-col md:flex-row w-full items-stretch"
                style={{ borderBottom: `2px solid ${borderColor}` }}
            >
                {/* Brand Block */}
                <div 
                    className="flex-shrink-0 flex items-center justify-center px-8 py-4 md:py-6 md:w-1/4"
                    style={{ borderRight: `2px solid ${borderColor}` }}
                >
                    {isEditing ? (
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => onFieldChange("brand", e.target.value)}
                            className="bg-transparent text-3xl font-black uppercase tracking-tight text-center w-full focus:outline-none"
                            style={{ color: brandColor }}
                        />
                    ) : (
                        <span 
                            className="text-3xl font-black uppercase tracking-tight cursor-default"
                            style={{ color: brandColor }}
                        >
                            {brand}
                        </span>
                    )}
                </div>

                {/* Links Block */}
                <div className="flex flex-1 flex-wrap sm:flex-nowrap">
                    {links.map((link, index) => (
                        <div 
                            key={link.key}
                            className="flex-1 flex items-center justify-center p-4"
                            style={{ 
                                borderRight: index !== links.length - 1 || window.innerWidth > 768 ? `2px solid ${borderColor}` : 'none',
                                borderBottom: window.innerWidth <= 768 ? `2px solid ${borderColor}` : 'none'
                            }}
                        >
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={link.val}
                                    onChange={(e) => onFieldChange(link.key, e.target.value)}
                                    className="bg-transparent w-full text-center text-sm font-bold uppercase focus:outline-none focus:bg-black/5"
                                    style={{ color: linkColor }}
                                />
                            ) : (
                                <a 
                                    href="#" 
                                    className="text-sm font-bold uppercase hover:underline decoration-2 underline-offset-4"
                                    style={{ color: linkColor }}
                                >
                                    {link.val}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Block */}
                <div className="flex items-center justify-center px-8 py-4 md:py-0 md:w-1/5 group transition-colors duration-300 hover:bg-opacity-90" style={{ backgroundColor: ctaBgColor }}>
                    {isEditing ? (
                        <input
                            type="text"
                            value={cta}
                            onChange={(e) => onFieldChange("cta", e.target.value)}
                            className="bg-transparent text-center text-sm font-black uppercase w-full focus:outline-none focus:ring-2 focus:ring-white p-2"
                            style={{ color: ctaColor }}
                        />
                    ) : (
                        <button 
                            className="text-sm font-black uppercase w-full h-full flex items-center justify-center transition-transform group-hover:scale-105"
                            style={{ color: ctaColor }}
                        >
                            {cta}
                        </button>
                    )}
                </div>
            </nav>
        </section>
    );
}