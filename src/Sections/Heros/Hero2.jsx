export default function Hero2({ content = {}, editor }) {
    const {
        badge = "> INIT_QUIZ_SYSTEM",
        title = "Curiosity has a new home.",
        description = "Step into a world of interactive learning where every question is an adventure. Challenge yourself, earn points, and master new skills.",
        buttonLabel = "Start Your Journey",
        imageUrl = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    return (
        <section className="w-full min-h-[85vh] bg-slate-950 text-white flex items-center border-b border-indigo-900/30 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
            
            <div className="mx-auto w-full max-w-7xl px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
                
                {/* Left Content */}
                <div className="flex-1 text-left min-w-0">
                    {isEditing ? (
                        <input
                            type="text"
                            value={badge}
                            onChange={(e) => onFieldChange("badge", e.target.value)}
                            className="text-indigo-400 font-mono text-sm tracking-[0.2em] mb-6 bg-transparent border border-indigo-900/50 px-3 py-1 w-full max-w-sm"
                        />
                    ) : (
                        <p className="text-indigo-400 font-mono text-sm tracking-[0.2em] mb-6">{badge}</p>
                    )}

                    {isEditing ? (
                        <textarea
                            value={title}
                            onChange={(e) => onFieldChange("title", e.target.value)}
                            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 bg-transparent border border-indigo-900/50 p-3 w-full resize-none h-40"
                            style={{ fontFamily: '"Bungee", cursive' }}
                        />
                    ) : (
                        <h1 
                            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
                            style={{ fontFamily: '"Bungee", cursive' }}
                        >
                            {title}
                        </h1>
                    )}

                    {isEditing ? (
                        <textarea
                            value={description}
                            onChange={(e) => onFieldChange("description", e.target.value)}
                            className="text-slate-400 text-lg md:text-xl max-w-xl font-sans mb-10 bg-transparent border border-indigo-900/50 p-3 w-full h-32"
                        />
                    ) : (
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl font-sans mb-10 leading-relaxed">
                            {description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-4">
                        {isEditing ? (
                            <input
                                type="text"
                                value={buttonLabel}
                                onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
                                className="bg-indigo-600 px-8 py-4 text-white font-bold rounded-sm border border-indigo-500 text-center"
                            />
                        ) : (
                            <button className="group relative px-8 py-4 bg-indigo-600 text-white font-bold rounded-sm hover:bg-indigo-500 transition-all shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                                {buttonLabel}
                            </button>
                        )}
                    </div>
                </div>

                {/* Right Visual Element */}
                <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
                    <div className="relative group max-w-lg w-full">
                        {/* Retro border effect */}
                        <div className="absolute -inset-2 border border-indigo-500/20 rounded-lg animate-pulse" />
                        <div className="relative overflow-hidden rounded-lg border border-indigo-500/30 bg-slate-900 aspect-video lg:aspect-square flex items-center justify-center">
                            {isEditing ? (
                                <div className="flex flex-col items-center p-8 gap-4 w-full">
                                    <p className="text-xs text-indigo-300 font-mono">IMAGE_URL_OVERRIDE</p>
                                    <input
                                        type="text"
                                        value={imageUrl}
                                        onChange={(e) => onFieldChange("imageUrl", e.target.value)}
                                        className="w-full bg-black/40 border border-indigo-900 p-2 text-xs font-mono"
                                        placeholder="Paste image URL..."
                                    />
                                </div>
                            ) : (
                                <img 
                                    src={imageUrl} 
                                    alt="Hero Illustration" 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                />
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}