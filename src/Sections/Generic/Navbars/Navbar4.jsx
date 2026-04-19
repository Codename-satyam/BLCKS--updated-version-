export default function NavbarFloatingGlass({ content = {}, editor }) {
    const {
        brand = "AGENCY",
        link1 = "Services",
        link2 = "Portfolio",
        link3 = "Studio",
        link4 = "Careers",
        cta = "Let's Talk",
        bgColor = "#f9fafb", // Defaulting to an off-white to contrast the floating nav
        brandColor = "#111827",
        linkColor = "#4b5563",
        borderColor = "rgba(0, 0, 0, 0.05)",
        ctaColor = "#ffffff",
        ctaBgColor = "#4f46e5", // Indigo accent
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const leftLinks = [
        { key: "link1", val: link1 },
        { key: "link2", val: link2 }
    ];

    const rightLinks = [
        { key: "link3", val: link3 },
        { key: "link4", val: link4 }
    ];

    const renderLink = (link) => (
        <div key={link.key}>
            {isEditing ? (
                <input
                    type="text"
                    value={link.val}
                    onChange={(e) => onFieldChange(link.key, e.target.value)}
                    className="bg-transparent w-20 text-center text-sm font-medium focus:ring-1 outline-none border-b border-dashed pb-1"
                    style={{
                        color: linkColor,
                        borderColor: linkColor,
                    }}
                />
            ) : (
                <a
                    href="#"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-black/5 hover:scale-105 inline-block"
                    style={{ color: linkColor }}
                    onMouseEnter={(e) => e.target.style.color = brandColor}
                    onMouseLeave={(e) => e.target.style.color = linkColor}
                >
                    {link.val}
                </a>
            )}
        </div>
    );

    return (
        <section
            className="w-full min-h-[120px] p-4 sm:p-6 selection:text-white selection:bg-black/20"
            style={{ backgroundColor: bgColor }}
        >
            <div 
                className="mx-auto max-w-6xl px-6 py-3 rounded-full flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm backdrop-blur-md"
                style={{ 
                    border: `1px solid ${borderColor}`,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)' // Glass effect
                }}
            >
                {/* Left Links */}
                <div className="hidden lg:flex items-center gap-2 flex-1 justify-end pr-8">
                    {leftLinks.map(renderLink)}
                </div>

                {/* Center Brand */}
                <div className="flex-shrink-0 flex items-center justify-center">
                    {isEditing ? (
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => onFieldChange("brand", e.target.value)}
                            className="bg-transparent text-2xl font-black tracking-tighter text-center border-none focus:ring-1 px-4 py-2 outline-none rounded-md"
                            style={{ color: brandColor }}
                        />
                    ) : (
                        <a 
                            href="#" 
                            className="text-2xl font-black tracking-tighter cursor-pointer transition-transform hover:scale-105"
                            style={{ color: brandColor }}
                        >
                            {brand}
                        </a>
                    )}
                </div>

                {/* Right Links & CTA */}
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 flex-1 justify-start pl-0 lg:pl-8">
                    <div className="flex items-center gap-2">
                        {rightLinks.map(renderLink)}
                    </div>

                    <div className="lg:ml-4 flex-shrink-0">
                        {isEditing ? (
                            <input
                                type="text"
                                value={cta}
                                onChange={(e) => onFieldChange("cta", e.target.value)}
                                className="px-5 py-2.5 rounded-full text-sm font-bold border outline-none focus:ring-2 shadow-sm text-center w-32"
                                style={{
                                    backgroundColor: ctaBgColor,
                                    color: ctaColor,
                                    borderColor: ctaBgColor,
                                }}
                            />
                        ) : (
                            <button
                                className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-sm"
                                style={{
                                    backgroundColor: ctaBgColor,
                                    color: ctaColor,
                                }}
                            >
                                {cta}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}