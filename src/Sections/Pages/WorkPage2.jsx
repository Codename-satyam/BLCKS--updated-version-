export default function WorkPageBrutalist({ content = {}, editor }) {
    const {
        badge = "// SYSTEM_REPORT",
        title = "RAW INFRASTRUCTURE",
        description =
            "WE REJECT THE POLISHED. THIS GRID REPRESENTS THE UNDILUTED PHASES OF YOUR PROJECT BUILD. NO GRADIENTS. NO SOFT EDGES.",
        item1 = "CORE KERNEL ARCHITECTURE",
        item2 = "UNFILTERED API ACCESS",
        item3 = "HARDWARE-LEVEL SECURITY",
        item4 = "BRUTALIST FRONTEND SPEC",
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
        <section className="w-full bg-zinc-900 text-white border-y-[6px] border-yellow-400">
            <div className="mx-auto w-full max-w-6xl px-6 py-24 min-w-0" style={{ fontFamily: 'monospace' }}>
                
                {/* Badge: Now styled as a high-contrast label */}
                <div className="mb-8 inline-block bg-yellow-400 text-black px-4 py-1 font-black text-lg uppercase tracking-tighter">
                    {isEditing ? (
                        <input 
                            type="text" 
                            value={badge} 
                            onChange={(event) => onFieldChange("badge", event.target.value)} 
                            className="bg-transparent border-none focus:ring-0 w-full" 
                        />
                    ) : (
                        <span>{badge}</span>
                    )}
                </div>

                {/* Title: Oversized, bold, and unapologetic */}
                <div className="mb-10 border-l-8 border-yellow-400 pl-6">
                    {isEditing ? (
                        <textarea 
                            value={title} 
                            onChange={(event) => onFieldChange("title", event.target.value)} 
                            className="text-5xl md:text-8xl font-black uppercase leading-[0.9] bg-zinc-800 border-4 border-white p-4 w-full resize-none h-auto" 
                        />
                    ) : (
                        <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] break-words">
                            {title}
                        </h2>
                    )}
                </div>

                {/* Description: High contrast and wide spacing */}
                <div className="mb-16">
                    {isEditing ? (
                        <textarea 
                            value={description} 
                            onChange={(event) => onFieldChange("description", event.target.value)} 
                            className="text-lg md:text-xl font-bold max-w-3xl leading-tight bg-zinc-800 border-2 border-white p-4 w-full min-h-32" 
                        />
                    ) : (
                        <p className="text-lg md:text-xl font-bold max-w-3xl leading-tight uppercase">
                            {description}
                        </p>
                    )}
                </div>

                {/* Grid: Thick borders and "blocky" layout */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-4 border-l-4 border-white">
                    {workItems.map((item, index) => (
                        <li 
                            key={item.key} 
                            className="border-r-4 border-b-4 border-white p-8 flex flex-col gap-4 hover:bg-yellow-400 hover:text-black transition-colors group"
                        >
                            <span className="text-4xl font-black opacity-30 group-hover:opacity-100 italic">
                                [{String(index + 1).padStart(2, "0")}]
                            </span>
                            
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    value={item.value} 
                                    onChange={(event) => onFieldChange(item.key, event.target.value)} 
                                    className="text-xl font-black uppercase bg-zinc-700 border-2 border-white px-3 py-2 w-full text-white" 
                                />
                            ) : (
                                <span className="text-xl font-black uppercase break-words leading-none">
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