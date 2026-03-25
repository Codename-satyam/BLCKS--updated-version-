export default function FeaturesCalm({ content = {}, editor }) {
    const {
        badge = "The Gentle Way",
        title = "A slower rhythm for modern building",
        feature1Title = "Soft Iteration",
        feature1Desc = "Change doesn't have to be loud. Adjust your layout with effortless, quiet movements.",
        feature2Title = "Organic Growth",
        feature2Desc = "Your site expands naturally, like a garden tending to itself over seasons of use.",
        feature3Title = "Quiet Spaces",
        feature3Desc = "Abundant white space allows your ideas to breathe and your visitors to linger.",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const featureItems = [
        { titleKey: "feature1Title", descKey: "feature1Desc", title: feature1Title, description: feature1Desc },
        { titleKey: "feature2Title", descKey: "feature2Desc", title: feature2Title, description: feature2Desc },
        { titleKey: "feature3Title", descKey: "feature3Desc", title: feature3Title, description: feature3Desc },
    ];

    return (
        <section className="w-full bg-[#fdfcf8] text-[#4a4a4a] border-y border-stone-200">
            <div className="mx-auto w-full max-w-5xl px-8 py-24 min-w-0" style={{ fontFamily: '"Libre Baskerville", serif' }}>
                
                {/* Subtle Badge */}
                <div className="mb-4">
                    {isEditing ? (
                        <input
                            type="text"
                            value={badge}
                            onChange={(event) => onFieldChange("badge", event.target.value)}
                            className="text-[#8c9484] text-sm italic tracking-wide bg-transparent border-b border-stone-200 outline-none w-full max-w-xs"
                        />
                    ) : (
                        <p className="text-[#8c9484] text-sm italic tracking-wide">{badge}</p>
                    )}
                </div>

                {/* Elegant, Calm Title */}
                <div className="mb-16 max-w-2xl">
                    {isEditing ? (
                        <textarea
                            value={title}
                            onChange={(event) => onFieldChange("title", event.target.value)}
                            className="text-4xl md:text-5xl font-light leading-snug bg-white/50 border border-stone-200 p-3 w-full resize-none min-h-32 rounded-sm"
                        />
                    ) : (
                        <h2 className="text-4xl md:text-5xl font-light leading-snug text-stone-800">{title}</h2>
                    )}
                </div>

                {/* Minimalist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {featureItems.map((item, index) => (
                        <article key={`${item.titleKey}-${index}`} className="group">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={item.title}
                                    onChange={(event) => onFieldChange(item.titleKey, event.target.value)}
                                    className="text-xl font-medium mb-3 text-stone-800 bg-transparent border-b border-stone-100 w-full outline-none"
                                />
                            ) : (
                                <h3 className="text-xl font-medium mb-3 text-stone-700">{item.title}</h3>
                            )}
                            
                            <div className="w-8 h-[1px] bg-stone-300 mb-4 transition-all group-hover:w-16"></div>

                            {isEditing ? (
                                <textarea
                                    value={item.description}
                                    onChange={(event) => onFieldChange(item.descKey, event.target.value)}
                                    className="text-stone-500 font-sans text-base leading-relaxed bg-transparent border border-stone-100 p-2 w-full resize-y min-h-24 outline-none"
                                />
                            ) : (
                                <p className="text-stone-500 font-sans text-base leading-relaxed">
                                    {item.description}
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}