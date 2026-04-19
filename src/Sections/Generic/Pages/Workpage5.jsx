export default function WorkPageEditorial({ content = {}, editor }) {
    // Providing lighter, softer default colors to fit the elegant theme,
    // while keeping your exact property structure intact.
    const {
        badge = "Our Capabilities",
        title = "Expertise",
        description = "We craft digital experiences that merge form and function, delivering elevated solutions for forward-thinking brands.",
        item1 = "Digital Strategy",
        item2 = "Brand Identity",
        item3 = "Interactive Design",
        item4 = "Motion Graphics",
        badgeColor = "#b45309", // Warm amber
        titleColor = "#171717", // Near black
        descColor = "#52525b", // Soft gray
        itemBgColor = "#f4f4f5", // Light hover background
        itemBorderColor = "#e4e4e7", // Soft borders
        bgColor = "#fafafa", // Off-white
        borderColor = "#e4e4e7",
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
            className="w-full min-h-[80vh] relative selection:bg-black selection:text-white"
            style={{ backgroundColor: bgColor }}
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
                
                {/* Left Column: Sticky Context */}
                <div className="lg:w-1/3 flex flex-col relative">
                    <div className="lg:sticky lg:top-32">
                        {/* Badge */}
                        <div className="mb-6">
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    value={badge} 
                                    onChange={(e) => onFieldChange("badge", e.target.value)} 
                                    className="bg-transparent border-b border-dashed focus:outline-none w-full text-xs font-semibold uppercase tracking-[0.2em]"
                                    style={{ color: badgeColor, borderColor: badgeColor }}
                                />
                            ) : (
                                <span 
                                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                                    style={{ color: badgeColor }}
                                >
                                    {badge}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <div className="mb-8">
                            {isEditing ? (
                                <textarea 
                                    value={title} 
                                    onChange={(e) => onFieldChange("title", e.target.value)} 
                                    className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight w-full bg-transparent resize-none focus:outline-none focus:ring-1 p-2 rounded-md"
                                    style={{ color: titleColor }}
                                    rows={2}
                                />
                            ) : (
                                <h2 
                                    className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none"
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
                                    className="text-lg md:text-xl leading-relaxed w-full bg-transparent resize-y min-h-[120px] focus:outline-none focus:ring-1 p-2 rounded-md"
                                    style={{ color: descColor }}
                                />
                            ) : (
                                <p 
                                    className="text-lg md:text-xl leading-relaxed max-w-md"
                                    style={{ color: descColor }}
                                >
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Flowing List */}
                <div className="lg:w-2/3 flex flex-col mt-12 lg:mt-0 pt-8" style={{ borderTop: `1px solid ${borderColor}` }}>
                    {workItems.map((item, index) => (
                        <div 
                            key={item.key} 
                            className="group flex flex-col md:flex-row md:items-center py-10 md:py-16 transition-colors duration-500 ease-in-out px-4 -mx-4 rounded-2xl hover:shadow-sm"
                            style={{ 
                                borderBottom: `1px solid ${itemBorderColor}` 
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = itemBgColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {/* Number Indicator */}
                            <span 
                                className="text-2xl md:text-3xl font-light mb-4 md:mb-0 md:w-24 opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                                style={{ color: titleColor }}
                            >
                                /0{index + 1}
                            </span>
                            
                            {/* Item Text */}
                            <div className="flex-1">
                                {isEditing ? (
                                    <input 
                                        type="text" 
                                        value={item.value} 
                                        onChange={(e) => onFieldChange(item.key, e.target.value)} 
                                        className="w-full text-3xl md:text-5xl font-medium bg-transparent outline-none focus:border-b-2"
                                        style={{ color: titleColor, borderColor: badgeColor }}
                                    />
                                ) : (
                                    <h3 
                                        className="text-3xl md:text-5xl font-medium tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-6"
                                        style={{ color: titleColor }}
                                    >
                                        {item.value}
                                    </h3>
                                )}
                            </div>
                            
                            {/* Arrow / Decoration (Hidden on mobile, slides in on hover) */}
                            {!isEditing && (
                                <div 
                                    className="hidden md:block opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                                    style={{ color: badgeColor }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}