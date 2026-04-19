export default function WorkPageHorizontalTrack({ content = {}, editor }) {
    const {
        badge = "Capabilities",
        title = "THE ARCHIVE",
        description = "Swipe through our core competencies. We build systems designed for scale, resilience, and aesthetic perfection.",
        item1 = "System Design",
        item2 = "Web Platform",
        item3 = "Brand Identity",
        item4 = "Creative Code",
        badgeColor = "#10b981", // Emerald accent
        titleColor = "#ffffff",
        descColor = "#a1a1aa",
        itemBgColor = "#18181b", // Zinc 900
        itemBorderColor = "#27272a", // Zinc 800
        bgColor = "#09090b", // Zinc 950 (Very dark)
        borderColor = "#10b981",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const workItems = [
        { key: "item1", value: item1 },
        { key: "item2", value: item2 },
        { key: "item3", value: item3 },
        { key: "item4", value: item4 },
    ];

    return (
        <section 
            className="w-full relative selection:bg-white selection:text-black"
            style={{ backgroundColor: bgColor }}
        >
            {/* Header Section */}
            <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-12">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: badgeColor }} />
                        {isEditing ? (
                            <input 
                                type="text" 
                                value={badge} 
                                onChange={(e) => onFieldChange("badge", e.target.value)} 
                                className="bg-transparent border-b border-dashed focus:outline-none text-sm font-bold uppercase tracking-widest"
                                style={{ color: badgeColor, borderColor: badgeColor }}
                            />
                        ) : (
                            <span 
                                className="text-sm font-bold uppercase tracking-widest"
                                style={{ color: badgeColor }}
                            >
                                {badge}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                        {isEditing ? (
                            <textarea 
                                value={title} 
                                onChange={(e) => onFieldChange("title", e.target.value)} 
                                className="text-5xl md:text-7xl font-black uppercase tracking-tighter w-full bg-transparent resize-none focus:outline-none focus:ring-1 p-2 rounded-md"
                                style={{ color: titleColor }}
                                rows={1}
                            />
                        ) : (
                            <h2 
                                className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
                                style={{ color: titleColor }}
                            >
                                {title}
                            </h2>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        {isEditing ? (
                            <textarea 
                                value={description} 
                                onChange={(e) => onFieldChange("description", e.target.value)} 
                                className="text-base md:text-lg w-full bg-transparent resize-y min-h-[80px] focus:outline-none focus:ring-1 p-2 rounded-md"
                                style={{ color: descColor }}
                            />
                        ) : (
                            <p 
                                className="text-base md:text-lg max-w-xl"
                                style={{ color: descColor }}
                            >
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Horizontal Track Section */}
            {/* Note: Webkit scrollbar hiding classes are applied alongside standard CSS for cross-browser support */}
            <div 
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-32 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {/* Spacer for initial left alignment inside the track */}
                <div className="w-1 md:w-auto shrink-0" />

                {workItems.map((item, index) => (
                    <div 
                        key={item.key} 
                        className="shrink-0 w-[280px] md:w-[400px] h-[320px] md:h-[450px] snap-center flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group"
                        style={{ 
                            backgroundColor: itemBgColor,
                            borderColor: itemBorderColor,
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = borderColor}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = itemBorderColor}
                    >
                        {/* Top: Number Indicator */}
                        <div className="flex justify-between items-start">
                            <span 
                                className="text-5xl font-light opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ color: titleColor }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div 
                                className="w-8 h-8 rounded-full border flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                                style={{ borderColor: borderColor, color: borderColor }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>

                        {/* Bottom: Title Input/Display */}
                        <div className="mt-auto">
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    value={item.value} 
                                    onChange={(e) => onFieldChange(item.key, e.target.value)} 
                                    className="w-full text-2xl md:text-3xl font-bold bg-transparent outline-none focus:border-b-2 pb-2"
                                    style={{ color: titleColor, borderColor: badgeColor }}
                                />
                            ) : (
                                <h3 
                                    className="text-2xl md:text-3xl font-bold tracking-tight"
                                    style={{ color: titleColor }}
                                >
                                    {item.value}
                                </h3>
                            )}
                        </div>
                    </div>
                ))}
                
                {/* Spacer for final right alignment padding */}
                <div className="w-6 shrink-0" />
            </div>
        </section>
    );
}