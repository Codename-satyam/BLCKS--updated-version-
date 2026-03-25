export default function WorkPageGradient({ content = {}, editor }) {
    const {
        badge = "✧ PROJECT OVERVIEW",
        title = "Seamless Experience",
        description =
            "A deep dive into the architectural layers and visual systems crafted for this digital ecosystem.",
        item1 = "Immersive Interface",
        item2 = "Dynamic Interactions",
        item3 = "Cloud Sync Core",
        item4 = "Global Edge Delivery",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const workItems = [
        { key: "item1", value: item1 },
        { key: "item2", value: item2 },
        { key: "item3", value: item3 },
        { key: "item4", value: item4 },
    ];

    // Texture style for that "grainy" premium look
    const textureStyle = {
        backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
        opacity: 0.15,
    };

    return (
        <section className="relative w-full bg-zinc-950 text-slate-200 overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]" />
            
            {/* Grain/Noise Overlay */}
            <div className="absolute inset-0 pointer-events-none" style={textureStyle} />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 min-w-0 font-sans">
                
                {/* Badge: Soft glow and tracking */}
                <div className="mb-6">
                    {isEditing ? (
                        <input 
                            type="text" 
                            value={badge} 
                            onChange={(event) => onFieldChange("badge", event.target.value)} 
                            className="bg-white/5 border border-white/10 text-white/60 text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full focus:outline-none"
                        />
                    ) : (
                        <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase px-3 py-1 border border-white/10 rounded-full backdrop-blur-sm">
                            {badge}
                        </span>
                    )}
                </div>

                {/* Title: Linear Gradient Text */}
                <div className="mb-8">
                    {isEditing ? (
                        <textarea 
                            value={title} 
                            onChange={(event) => onFieldChange("title", event.target.value)} 
                            className="text-4xl md:text-7xl font-light tracking-tight bg-transparent border-b border-white/20 w-full focus:outline-none py-2"
                        />
                    ) : (
                        <h2 className="text-4xl md:text-7xl font-light tracking-tight bg-gradient-to-br from-white via-slate-300 to-slate-500 bg-clip-text text-transparent italic">
                            {title}
                        </h2>
                    )}
                </div>

                {/* Description: Elegant and spaced */}
                <div className="mb-16 border-l border-white/10 pl-8">
                    {isEditing ? (
                        <textarea 
                            value={description} 
                            onChange={(event) => onFieldChange("description", event.target.value)} 
                            className="text-slate-400 text-lg max-w-2xl leading-relaxed bg-white/5 border border-white/10 p-4 w-full rounded-lg focus:outline-none" 
                        />
                    ) : (
                        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
                            {description}
                        </p>
                    )}
                </div>

                {/* Grid: Glassmorphism Cards */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workItems.map((item, index) => (
                        <li 
                            key={item.key} 
                            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1"
                        >
                            <div className="flex flex-col gap-6">
                                <span className="text-sm font-mono text-blue-400/50 group-hover:text-blue-400 transition-colors">
                                    // 0{index + 1}
                                </span>
                                
                                {isEditing ? (
                                    <input 
                                        type="text" 
                                        value={item.value} 
                                        onChange={(event) => onFieldChange(item.key, event.target.value)} 
                                        className="text-xl font-medium bg-transparent border-b border-white/10 w-full focus:outline-none text-white" 
                                    />
                                ) : (
                                    <span className="text-xl font-medium text-slate-100 tracking-wide">
                                        {item.value}
                                    </span>
                                )}
                            </div>
                            
                            {/* Subtle internal glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}