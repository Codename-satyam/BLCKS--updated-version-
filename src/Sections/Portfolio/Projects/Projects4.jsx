export default function PortfolioProjects4({ content = {}, editor }) {
    const {
        sectionTitle = "SYS.FEATURED_PROJECTS",
        sectionSubtitle = "A selection of deployed systems and successful architectural executions.",
        project1Title = "E-COMMERCE PROTOCOL",
        project1Description = "Modern shopping experience with real-time inventory management.",
        project1Tag = "REACT // NODE.JS // MONGODB",
        project2Title = "ANALYTICS HUD",
        project2Description = "Real-time data visualization and high-fidelity reporting.",
        project2Tag = "VUE.JS // D3.JS // PYTHON",
        project3Title = "COMMS PLATFORM",
        project3Description = "Community-driven platform with encrypted messaging.",
        project3Tag = "REACT // FIREBASE // GRAPHQL",
        backgroundColor = "#000000",
        cardBgColor = "#050505", // Slightly off-black for card depth
        titleColor = "#ffffff",
        textColor = "#a1a1aa", // Zinc-400
        accentColor = "#2dd4bf", // Default to Teal
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const projects = [
        {
            id: "01",
            titleKey: "project1Title",
            descKey: "project1Description",
            tagKey: "project1Tag",
            title: project1Title,
            desc: project1Description,
            tag: project1Tag,
        },
        {
            id: "02",
            titleKey: "project2Title",
            descKey: "project2Description",
            tagKey: "project2Tag",
            title: project2Title,
            desc: project2Description,
            tag: project2Tag,
        },
        {
            id: "03",
            titleKey: "project3Title",
            descKey: "project3Description",
            tagKey: "project3Tag",
            title: project3Title,
            desc: project3Description,
            tag: project3Tag,
        },
    ];

    const baseBorder = { borderColor: titleColor };

    return (
        <section
            className="w-full border-b-4 px-6 py-24 md:py-32 font-mono selection:bg-white selection:text-black"
            style={{
                backgroundColor,
                ...baseBorder,
            }}
        >
            <div className="mx-auto w-full max-w-480 md:px-12">
                
                {/* ── Header Section ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 pb-8" style={baseBorder}>
                    <div className="flex-1">
                        {isEditing ? (
                            <input
                                type="text"
                                value={sectionTitle}
                                onChange={(e) => onFieldChange("sectionTitle", e.target.value)}
                                className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 border-4 p-4 w-full outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                                style={{ color: titleColor, borderColor: accentColor }}
                            />
                        ) : (
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6" style={{ color: titleColor }}>
                                {sectionTitle}
                            </h2>
                        )}

                        {isEditing ? (
                            <textarea
                                value={sectionSubtitle}
                                onChange={(e) => onFieldChange("sectionSubtitle", e.target.value)}
                                className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 p-4 w-full max-w-3xl resize-y min-h-20 outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                                style={{ color: textColor, borderColor: accentColor }}
                            />
                        ) : (
                            <p className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 pl-6 max-w-3xl" style={{ color: textColor, borderColor: accentColor }}>
                                {sectionSubtitle}
                            </p>
                        )}
                    </div>
                    
                    {/* Decorative Header Block */}
                    <div className="hidden md:flex flex-col items-end">
                        <div className="w-16 h-4 mb-2" style={{ backgroundColor: accentColor }} />
                        <div className="w-32 h-4" style={{ backgroundColor: titleColor }} />
                    </div>
                </div>

                {/* ── Projects Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative border-4 p-8 flex flex-col transition-all duration-150"
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
                                    e.currentTarget.style.borderColor = titleColor;
                                }
                            }}
                        >
                            {/* Project Index Number */}
                            <div className="absolute top-0 right-0 border-b-4 border-l-4 p-2 font-black text-xl" style={{ ...baseBorder, color: accentColor, backgroundColor }}>
                                {project.id}
                            </div>

                            {/* Title */}
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={project.title}
                                    onChange={(e) => onFieldChange(project.titleKey, e.target.value)}
                                    className="text-2xl font-black uppercase tracking-tighter mt-8 mb-4 border-b-4 pb-2 w-full outline-none focus:translate-x-2 transition-transform bg-transparent"
                                    style={{ color: titleColor, borderColor: accentColor }}
                                />
                            ) : (
                                <h3 className="text-2xl font-black uppercase tracking-tighter mt-8 mb-4 border-b-4 pb-2 group-hover:border-transparent transition-colors" style={{ color: titleColor, ...baseBorder }}>
                                    {project.title}
                                </h3>
                            )}

                            {/* Description */}
                            {isEditing ? (
                                <textarea
                                    value={project.desc}
                                    onChange={(e) => onFieldChange(project.descKey, e.target.value)}
                                    className="text-sm font-bold uppercase tracking-widest mb-12 flex-1 border-2 p-2 w-full resize-y min-h-25 outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                                    style={{ color: textColor, ...baseBorder }}
                                />
                            ) : (
                                <p className="text-sm font-bold uppercase tracking-widest mb-12 flex-1" style={{ color: textColor }}>
                                    {project.desc}
                                </p>
                            )}

                            {/* Tech Stack Tags */}
                            <div className="mt-auto">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={project.tag}
                                        onChange={(e) => onFieldChange(project.tagKey, e.target.value)}
                                        className="text-xs font-black uppercase tracking-widest border-2 px-3 py-2 w-full outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                                        style={{
                                            color: accentColor,
                                            borderColor: accentColor,
                                        }}
                                    />
                                ) : (
                                    <div 
                                        className="text-xs font-black uppercase tracking-widest inline-block border-2 px-3 py-2" 
                                        style={{ color: accentColor, borderColor: accentColor }}
                                    >
                                        {project.tag}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}