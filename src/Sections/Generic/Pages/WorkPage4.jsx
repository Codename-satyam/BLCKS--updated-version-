export default function WorkPageMinimal({ content = {}, editor }) {
    const {
        badge = "SECTION 01",
        title = "The Essentials",
        description =
            "A refined collection of core features, focusing on purpose and clarity without unnecessary ornamentation.",
        item1 = "Strategy & Discovery",
        item2 = "Visual Architecture",
        item3 = "Technical Integration",
        item4 = "Performance Audit",
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
        <section className="w-full bg-white text-zinc-900 overflow-hidden">
            <div className="mx-auto w-full max-w-5xl px-8 py-32 md:py-48 min-w-0">
                
                {/* Badge: Subdued and small */}
                <div className="mb-12">
                    {isEditing ? (
                        <input 
                            type="text" 
                            value={badge} 
                            onChange={(event) => onFieldChange("badge", event.target.value)} 
                            className="text-[10px] tracking-[0.2em] font-medium text-zinc-400 bg-transparent border-b border-zinc-100 focus:border-zinc-900 transition-colors focus:outline-none" 
                        />
                    ) : (
                        <span className="text-[10px] tracking-[0.2em] font-medium text-zinc-400 uppercase">
                            {badge}
                        </span>
                    )}
                </div>

                {/* Title: Thin, spacious, and impactful */}
                <div className="mb-12">
                    {isEditing ? (
                        <textarea 
                            value={title} 
                            onChange={(event) => onFieldChange("title", event.target.value)} 
                            className="text-5xl md:text-7xl font-extralight tracking-tight bg-transparent border-none w-full focus:ring-0 p-0 overflow-hidden resize-none" 
                        />
                    ) : (
                        <h2 className="text-5xl md:text-7xl font-extralight tracking-tight leading-tight">
                            {title}
                        </h2>
                    )}
                </div>

                {/* Description: Light gray to reduce visual weight */}
                <div className="mb-24">
                    {isEditing ? (
                        <textarea 
                            value={description} 
                            onChange={(event) => onFieldChange("description", event.target.value)} 
                            className="text-zinc-500 text-lg max-w-xl leading-relaxed bg-zinc-50 border-none p-2 w-full focus:ring-1 focus:ring-zinc-200" 
                        />
                    ) : (
                        <p className="text-zinc-500 text-lg max-w-xl font-light leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                {/* List: Clean lines, no boxes */}
                <ul className="space-y-0 border-t border-zinc-100">
                    {workItems.map((item, index) => (
                        <li 
                            key={item.key} 
                            className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-zinc-100 group hover:bg-zinc-50/50 transition-colors px-4 -mx-4"
                        >
                            <span className="text-[10px] font-mono text-zinc-300 mb-2 md:mb-0">
                                0{index + 1}
                            </span>
                            
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    value={item.value} 
                                    onChange={(event) => onFieldChange(item.key, event.target.value)} 
                                    className="text-xl md:text-2xl font-light bg-transparent border-none focus:ring-0 w-full md:w-2/3 text-zinc-900 md:text-right" 
                                />
                            ) : (
                                <span className="text-xl md:text-2xl font-light text-zinc-800 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                    {item.value}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}