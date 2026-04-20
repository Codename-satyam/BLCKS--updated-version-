export default function PortfolioNavbar4({ content = {}, editor }) {
    const {
        logo = "SYS.PORTFOLIO",
        link1 = "HOME",
        link2 = "MODULES",
        link3 = "LOGS",
        link4 = "COMMS",
        resumeLabel = "EXECUTE",
        backgroundColor = "#000000",
        accentColor = "#a3e635", // Acid green default
        textColor = "#ffffff",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const baseBorder = { borderColor: textColor };
    const highlightBg = { backgroundColor: accentColor, color: "#000" };

    return (
        <header
            className="w-full sticky top-0 z-50 border-b-4 font-mono selection:bg-white selection:text-black"
            style={{
                backgroundColor,
                ...baseBorder,
            }}
        >
            <nav className="mx-auto w-full max-w-480 px-6 md:px-12 h-20 flex items-center justify-between">
                
                {/* ── Logo ── */}
                <div className="flex items-center">
                    {isEditing ? (
                        <input
                            type="text"
                            value={logo}
                            onChange={(e) => onFieldChange("logo", e.target.value)}
                            className="text-xl md:text-2xl font-black uppercase tracking-widest border-4 p-2 outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                            style={{ color: accentColor, borderColor: accentColor }}
                        />
                    ) : (
                        <a 
                            href="#" 
                            className="text-xl md:text-2xl font-black uppercase tracking-widest border-4 p-2 transition-all hover:-translate-y-1 hover:-translate-x-1" 
                            style={{ color: accentColor, borderColor: accentColor }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${textColor}`}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0px 0px 0px 0px transparent`}
                        >
                            {logo}
                        </a>
                    )}
                </div>

                {/* ── Links ── */}
                <div className="hidden lg:flex items-center gap-8">
                    {[
                        { key: "link1", value: link1 },
                        { key: "link2", value: link2 },
                        { key: "link3", value: link3 },
                        { key: "link4", value: link4 },
                    ].map((link) => (
                        <div key={link.key}>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={link.value}
                                    onChange={(e) => onFieldChange(link.key, e.target.value)}
                                    className="text-xs font-black uppercase tracking-widest border-b-4 px-2 py-1 outline-none focus:-translate-y-1 transition-transform bg-transparent w-24"
                                    style={{ color: textColor, borderColor: accentColor }}
                                />
                            ) : (
                                <a 
                                    href={`#${link.value.toLowerCase()}`} 
                                    className="text-xs font-black uppercase tracking-widest transition-colors relative group py-2" 
                                    style={{ color: textColor }}
                                >
                                    <span className="opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity" style={{ color: accentColor }}>[</span>
                                    {link.value}
                                    <span className="opacity-0 group-hover:opacity-100 absolute -right-4 transition-opacity" style={{ color: accentColor }}>]</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── Resume / CTA Button ── */}
                <div className="flex items-center">
                    {isEditing ? (
                        <input
                            type="text"
                            value={resumeLabel}
                            onChange={(e) => onFieldChange("resumeLabel", e.target.value)}
                            className="px-6 py-3 text-xs font-black uppercase tracking-widest border-4 outline-none w-32 text-center focus:-translate-y-1 focus:-translate-x-1 transition-transform"
                            style={{ ...highlightBg, borderColor: textColor }}
                        />
                    ) : (
                        <a
                            href="#"
                            className="px-6 py-3 text-xs font-black uppercase tracking-widest border-4 transition-all hover:-translate-y-1 hover:-translate-x-1"
                            style={{
                                ...highlightBg,
                                borderColor: textColor,
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `6px 6px 0px 0px ${textColor}`}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0px 0px 0px 0px transparent`}
                        >
                            {resumeLabel}
                        </a>
                    )}
                </div>
            </nav>
        </header>
    );
}