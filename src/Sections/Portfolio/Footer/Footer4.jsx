export default function PortfolioFooter4({ content = {}, editor }) {
    const {
        copyright = "© 2025 YOUR NAME. ALL RIGHTS RESERVED.",
        social1Link = "#",
        social1Label = "LINKEDIN",
        social2Link = "#",
        social2Label = "GITHUB",
        social3Link = "#",
        social3Label = "TWITTER",
        social4Link = "#",
        social4Label = "EMAIL",
        backgroundColor = "#000000",
        textColor = "#ffffff",
        accentColor = "#a3e635", // Default to acid green
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const socialLinks = [
        { key: "social1Label", link: social1Link, label: social1Label },
        { key: "social2Label", link: social2Link, label: social2Label },
        { key: "social3Label", link: social3Link, label: social3Label },
        { key: "social4Label", link: social4Link, label: social4Label },
    ];

    return (
        <footer
            className="w-full border-t-4 relative font-mono selection:bg-white selection:text-black"
            style={{
                backgroundColor,
                borderColor: textColor, // In brutalism, main borders map to the text color
            }}
        >
            {/* ── Decorative End Marker ── */}
            <div className="absolute top-0 left-6 md:left-12 -translate-y-1/2 px-4" style={{ backgroundColor }}>
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: accentColor }}>
                    // EOF
                </span>
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    
                    {/* ── Left: Social Links ── */}
                    <div className="flex flex-col gap-6 w-full md:w-auto">
                        <span 
                            className="text-sm font-black uppercase tracking-widest border-b-4 pb-2 inline-block self-start" 
                            style={{ borderColor: accentColor, color: textColor }}
                        >
                            SYS.CONNECT
                        </span>
                        
                        <div className="flex gap-4 flex-wrap">
                            {socialLinks.map((social, idx) => (
                                <div key={idx}>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={social.label}
                                            onChange={(e) => onFieldChange(social.key, e.target.value)}
                                            className="text-xs font-black uppercase tracking-widest px-4 py-3 border-2 outline-none w-32 focus:-translate-y-1 focus:-translate-x-1 transition-all"
                                            style={{
                                                backgroundColor: "transparent",
                                                color: accentColor,
                                                borderColor: textColor,
                                                // Simulating a brutalist focus state via inline styles
                                                boxShadow: `inset 0 0 0 1px ${textColor}`
                                            }}
                                        />
                                    ) : (
                                        <a
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-black uppercase tracking-widest px-4 py-3 border-2 transition-all inline-block hover:-translate-y-1 hover:-translate-x-1"
                                            style={{ 
                                                color: accentColor, 
                                                borderColor: textColor,
                                                backgroundColor: "transparent"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${accentColor}`;
                                                e.currentTarget.style.borderColor = accentColor;
                                                e.currentTarget.style.backgroundColor = textColor === "#ffffff" ? "#111" : "#fff";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.boxShadow = `0px 0px 0px 0px transparent`;
                                                e.currentTarget.style.borderColor = textColor;
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }}
                                        >
                                            {social.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Copyright ── */}
                    <div className="w-full md:w-auto flex flex-col items-start md:items-end">
                        {isEditing ? (
                            <textarea
                                value={copyright}
                                onChange={(e) => onFieldChange("copyright", e.target.value)}
                                className="text-xs font-bold uppercase tracking-widest w-full md:w-80 border-4 p-4 resize-y min-h-25 outline-none focus:-translate-y-1 focus:-translate-x-1 transition-all"
                                style={{
                                    backgroundColor: "transparent",
                                    color: textColor,
                                    borderColor: textColor,
                                }}
                            />
                        ) : (
                            <div 
                                className="border-4 p-6 max-w-md w-full md:w-auto relative" 
                                style={{ borderColor: textColor, backgroundColor: "transparent" }}
                            >
                                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed" style={{ color: textColor }}>
                                    {copyright}
                                </p>
                                {/* Mini decorative block */}
                                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-2" style={{ backgroundColor, borderColor: textColor }} />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </footer>
    );
}