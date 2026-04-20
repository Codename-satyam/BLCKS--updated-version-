export default function PortfolioSkills4({ content = {}, editor }) {
    const {
        title = "SYS.CORE_COMPETENCIES",
        description = "Identified operational areas of high yield and structural value.",
        competency1 = "WEB DEVELOPMENT",
        competency1Desc = "Full-stack development utilizing modern frameworks and strict architectural best practices.",
        competency2 = "UI/UX ENGINEERING",
        competency2Desc = "Deploying high-fidelity, accessible, and mathematically precise user interfaces.",
        competency3 = "SYSTEM OPTIMIZATION",
        competency3Desc = "Analytical approaches to resolving complex technical bottlenecks and latency issues.",
        competency4 = "TEAM SYNCHRONIZATION",
        competency4Desc = "Effective cross-node communication executing agile methodologies.",
        backgroundColor = "#000000",
        accentColor = "#f97316", // Default to an industrial Orange
        cardBgColor = "#050505",
        textColor = "#ffffff",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const competencies = [
        {
            id: "01",
            titleKey: "competency1",
            descKey: "competency1Desc",
            title: competency1,
            desc: competency1Desc,
        },
        {
            id: "02",
            titleKey: "competency2",
            descKey: "competency2Desc",
            title: competency2,
            desc: competency2Desc,
        },
        {
            id: "03",
            titleKey: "competency3",
            descKey: "competency3Desc",
            title: competency3,
            desc: competency3Desc,
        },
        {
            id: "04",
            titleKey: "competency4",
            descKey: "competency4Desc",
            title: competency4,
            desc: competency4Desc,
        },
    ];

    const baseBorder = { borderColor: textColor };

    return (
        <section 
            className="w-full border-b-4 px-6 py-24 md:py-32 font-mono selection:bg-white selection:text-black overflow-hidden" 
            style={{ backgroundColor, ...baseBorder }}
        >
            <div className="mx-auto w-full max-w-480 md:px-12">
                
                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 pb-8" style={baseBorder}>
                    <div className="flex-1">
                        {isEditing ? (
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => onFieldChange("title", e.target.value)}
                                className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 border-4 p-4 w-full outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                                style={{ color: textColor, borderColor: accentColor }}
                            />
                        ) : (
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6" style={{ color: textColor }}>
                                {title}
                            </h2>
                        )}

                        {isEditing ? (
                            <textarea
                                value={description}
                                onChange={(e) => onFieldChange("description", e.target.value)}
                                className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 p-4 w-full max-w-3xl resize-y min-h-20 outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                                style={{ color: accentColor, borderColor: accentColor }}
                            />
                        ) : (
                            <p className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 pl-6 max-w-3xl" style={{ color: accentColor, borderColor: accentColor }}>
                                {description}
                            </p>
                        )}
                    </div>
                    
                    {/* Decorative Header Block */}
                    <div className="hidden md:flex flex-col items-end">
                        <div className="text-xs font-black uppercase tracking-widest px-2 py-1 border-2 mb-2" style={{ color: accentColor, borderColor: accentColor }}>
                            MODULE_ACTIVE
                        </div>
                        <div className="w-24 h-4" style={{ backgroundColor: textColor }} />
                    </div>
                </div>

                {/* ── CARDS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {competencies.map((comp) => (
                        <div
                            key={comp.id}
                            className="group relative border-4 p-8 md:p-12 flex flex-col transition-all duration-150"
                            style={{
                                backgroundColor: cardBgColor,
                                ...baseBorder,
                            }}
                            onMouseEnter={(e) => {
                                if (!isEditing) {
                                    e.currentTarget.style.transform = "translate(-8px, -8px)";
                                    e.currentTarget.style.boxShadow = `8px 8px 0px 0px ${accentColor}`;
                                    e.currentTarget.style.borderColor = accentColor;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isEditing) {
                                    e.currentTarget.style.transform = "translate(0px, 0px)";
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.borderColor = textColor;
                                }
                            }}
                        >
                            {/* Identification Block */}
                            <div className="absolute top-0 left-0 border-b-4 border-r-4 px-4 py-2 font-black text-xl flex items-center justify-center" style={{ ...baseBorder, color: accentColor, backgroundColor }}>
                                {comp.id}
                            </div>

                            {/* Title */}
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={comp.title}
                                    onChange={(e) => onFieldChange(comp.titleKey, e.target.value)}
                                    className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-12 mb-6 border-b-4 pb-2 w-full outline-none focus:translate-x-2 transition-transform bg-transparent"
                                    style={{ color: textColor, borderColor: accentColor }}
                                />
                            ) : (
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-12 mb-6 border-b-4 pb-2 transition-colors" style={{ color: textColor, ...baseBorder }}>
                                    {comp.title}
                                </h3>
                            )}

                            {/* Description */}
                            {isEditing ? (
                                <textarea
                                    value={comp.desc}
                                    onChange={(e) => onFieldChange(comp.descKey, e.target.value)}
                                    className="text-sm font-bold uppercase tracking-widest flex-1 border-2 p-4 w-full resize-y min-h-25 outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                                    style={{ color: textColor, ...baseBorder, opacity: 0.7 }}
                                />
                            ) : (
                                <p className="text-sm font-bold uppercase tracking-widest flex-1 leading-relaxed" style={{ color: textColor, opacity: 0.7 }}>
                                    {comp.desc}
                                </p>
                            )}

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-t-4 border-l-4 group-hover:w-12 group-hover:h-12 transition-all duration-150" style={{ ...baseBorder, borderColor: accentColor }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}