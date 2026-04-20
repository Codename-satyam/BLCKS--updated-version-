export default function PortfolioHero4({ content = {}, editor }) {
    const {
        pretitle = "SYS.STATUS: ONLINE",
        name = "ALEX JOHNSON",
        tagline = "CREATIVE TECHNOLOGIST // FULL-STACK DEV",
        subtitle = "Crafting high-fidelity digital systems. Specializing in architecture, UI/UX execution, and interactive mechanics.",
        cta1Label = "INITIATE SEQUENCE",
        cta2Label = "ESTABLISH LINK",
        scrollIndicator = "↓ SCROLL_DOWN",
        backgroundColor = "#000000",
        accentColor = "#a3e635", // Acid green default
        textColor = "#ffffff",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    // Brutalist component styling logic
    const baseBorder = { borderColor: textColor };
    const highlightColor = { color: accentColor };
    const highlightBg = { backgroundColor: accentColor, color: "#000" };

    return (
        <section
            className="w-full min-h-screen flex items-center justify-center border-b-4 relative overflow-hidden font-mono selection:bg-white selection:text-black z-0"
            style={{
                backgroundColor,
                ...baseBorder,
            }}
        >
            {/* ── Background Typography Graphic ── */}
            <div 
                className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-10 overflow-hidden whitespace-nowrap -z-10"
                style={{ color: textColor }}
            >
                <div className="text-[15vw] font-black leading-none uppercase tracking-tighter" style={{ WebkitTextStroke: `2px ${textColor}`, color: 'transparent' }}>
                    {name} {name} {name}
                </div>
            </div>

            {/* ── Main Frame ── */}
            <div className="w-full max-w-6xl px-6 py-12 relative z-10">
                <div 
                    className="border-4 bg-black/80 p-8 md:p-16 relative"
                    style={{ ...baseBorder }}
                >
                    {/* Decorative Frame Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 -mt-2 -ml-2" style={{ borderColor: accentColor }} />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 -mb-2 -mr-2" style={{ borderColor: accentColor }} />

                    {/* Pre-title */}
                    {isEditing ? (
                        <input
                            type="text"
                            value={pretitle}
                            onChange={(e) => onFieldChange("pretitle", e.target.value)}
                            className="text-xs font-black uppercase tracking-[0.3em] mb-8 border-b-4 w-full outline-none focus:translate-x-2 transition-transform bg-transparent"
                            style={{ color: accentColor, borderColor: accentColor }}
                        />
                    ) : (
                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-8 inline-block border-2 px-3 py-1" style={{ color: accentColor, borderColor: accentColor }}>
                            {pretitle}
                        </p>
                    )}

                    {/* Main Name */}
                    {isEditing ? (
                        <textarea
                            value={name}
                            onChange={(e) => onFieldChange("name", e.target.value)}
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-4 border-4 p-4 w-full resize-y min-h-30 outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                            style={{ color: textColor, ...baseBorder }}
                        />
                    ) : (
                        <h1 
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-4 leading-none" 
                            style={{ color: textColor }}
                        >
                            {name}
                        </h1>
                    )}

                    {/* Tagline */}
                    {isEditing ? (
                        <input
                            type="text"
                            value={tagline}
                            onChange={(e) => onFieldChange("tagline", e.target.value)}
                            className="text-lg md:text-3xl font-black uppercase tracking-widest mb-8 border-2 px-4 py-2 w-full outline-none focus:-translate-y-1 focus:-translate-x-1 transition-transform bg-transparent"
                            style={{ color: accentColor, borderColor: accentColor }}
                        />
                    ) : (
                        <h2 className="text-lg md:text-3xl font-black uppercase tracking-widest mb-8" style={highlightColor}>
                            {tagline}
                        </h2>
                    )}

                    {/* Subtitle */}
                    {isEditing ? (
                        <textarea
                            value={subtitle}
                            onChange={(e) => onFieldChange("subtitle", e.target.value)}
                            className="text-sm md:text-lg font-bold uppercase mb-12 max-w-3xl border-l-4 p-4 w-full resize-y min-h-25 outline-none focus:translate-x-2 transition-transform bg-transparent"
                            style={{ color: textColor, borderColor: accentColor }}
                        />
                    ) : (
                        <p className="text-sm md:text-lg font-bold uppercase mb-12 max-w-3xl border-l-4 pl-6" style={{ color: textColor, borderColor: accentColor }}>
                            {subtitle}
                        </p>
                    )}

                    {/* ── CTAs ── */}
                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        {isEditing ? (
                            <input
                                type="text"
                                value={cta1Label}
                                onChange={(e) => onFieldChange("cta1Label", e.target.value)}
                                className="px-8 py-4 font-black uppercase tracking-widest border-4 outline-none w-full sm:w-auto text-center"
                                style={{ ...highlightBg, borderColor: textColor }}
                            />
                        ) : (
                            <button
                                className="px-8 py-4 font-black uppercase tracking-widest border-4 transition-all hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0"
                                style={{
                                    ...highlightBg,
                                    borderColor: textColor,
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `6px 6px 0px 0px ${textColor}`}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0px 0px 0px 0px transparent`}
                            >
                                {cta1Label}
                            </button>
                        )}

                        {isEditing ? (
                            <input
                                type="text"
                                value={cta2Label}
                                onChange={(e) => onFieldChange("cta2Label", e.target.value)}
                                className="px-8 py-4 font-black uppercase tracking-widest border-4 outline-none w-full sm:w-auto text-center bg-transparent"
                                style={{ color: textColor, ...baseBorder }}
                            />
                        ) : (
                            <button
                                className="px-8 py-4 font-black uppercase tracking-widest border-4 transition-all hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 bg-transparent"
                                style={{
                                    color: textColor,
                                    ...baseBorder,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = `6px 6px 0px 0px ${accentColor}`;
                                    e.currentTarget.style.borderColor = accentColor;
                                    e.currentTarget.style.color = accentColor;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = `0px 0px 0px 0px transparent`;
                                    e.currentTarget.style.borderColor = textColor;
                                    e.currentTarget.style.color = textColor;
                                }}
                            >
                                {cta2Label}
                            </button>
                        )}
                    </div>
                </div>

                {/* ── Scroll Indicator ── */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                    {isEditing ? (
                        <input
                            type="text"
                            value={scrollIndicator}
                            onChange={(e) => onFieldChange("scrollIndicator", e.target.value)}
                            className="text-xs font-black uppercase tracking-widest border-2 px-2 py-1 outline-none bg-transparent"
                            style={{ color: textColor, ...baseBorder }}
                        />
                    ) : (
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-black uppercase tracking-widest" style={{ color: textColor }}>
                                {scrollIndicator}
                            </span>
                            <div className="w-4 h-4 border-2 flex items-center justify-center" style={{ ...baseBorder, color: textColor }}>
                                ↓
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}