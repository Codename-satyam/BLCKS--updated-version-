export default function NavbarEditorial({ content = {}, editor }) {
    const {
        brand = "MAISON",
        link1 = "Collections",
        link2 = "Editorial",
        link3 = "Boutiques",
        link4 = "Heritage",
        cta = "Book Appointment",
        bgColor = "#fcfcfc",
        brandColor = "#1a1a1a",
        linkColor = "#737373",
        borderColor = "#ebebeb",
        ctaColor = "#ffffff",
        ctaBgColor = "#1a1a1a",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    return (
        <section 
            className="w-full flex flex-col items-center py-12 px-6 selection:bg-gray-200"
            style={{ backgroundColor: bgColor }}
        >
            {/* Top Brand Centered */}
            <div className="w-full text-center mb-8">
                {isEditing ? (
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => onFieldChange("brand", e.target.value)}
                        className="bg-transparent text-4xl md:text-5xl font-serif tracking-widest text-center border-b border-dashed focus:outline-none"
                        style={{ color: brandColor, borderColor: linkColor }}
                    />
                ) : (
                    <h1 
                        className="text-4xl md:text-5xl font-serif tracking-widest uppercase"
                        style={{ color: brandColor }}
                    >
                        {brand}
                    </h1>
                )}
            </div>

            {/* Divider */}
            <div 
                className="w-full max-w-4xl mx-auto mb-8"
                style={{ height: '1px', backgroundColor: borderColor }}
            />

            {/* Links and CTA Inline */}
            <nav className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-sm tracking-widest uppercase">
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
                                className="bg-transparent text-center w-24 focus:outline-none border-b border-dashed"
                                style={{ color: linkColor, borderColor: linkColor }}
                            />
                        ) : (
                            <a 
                                href="#" 
                                className="transition-opacity hover:opacity-60"
                                style={{ color: linkColor }}
                            >
                                {link.val}
                            </a>
                        )}
                    </div>
                ))}
                
                {/* CTA Appended to Nav Items */}
                <div className="mt-4 md:mt-0">
                    {isEditing ? (
                        <input
                            type="text"
                            value={cta}
                            onChange={(e) => onFieldChange("cta", e.target.value)}
                            className="px-6 py-3 text-xs tracking-widest uppercase text-center focus:outline-none focus:ring-1"
                            style={{ 
                                backgroundColor: ctaBgColor,
                                color: ctaColor 
                            }}
                        />
                    ) : (
                        <button 
                            className="px-6 py-3 text-xs tracking-widest uppercase transition-colors hover:bg-opacity-80"
                            style={{ 
                                backgroundColor: ctaBgColor,
                                color: ctaColor 
                            }}
                        >
                            {cta}
                        </button>
                    )}
                </div>
            </nav>
        </section>
    );
}