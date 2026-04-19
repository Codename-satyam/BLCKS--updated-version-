import { useBuilder, GRADIENT_PRESETS, ACCENT_PRESETS, FONT_MAP } from "../../Context/BuilderContext";

const FONT_LABELS = {
    mono:    "MONOSPACE",
    sans:    "SANS-SERIF",
    serif:   "SERIF",
    display: "DISPLAY",
};

export default function DesignPanel() {
    const {
        designSettings,
        updateDesignSettings,
        selectedSections,
        checklistItems,
        checklistProgress,
    } = useBuilder();

    const {
        bgMode,
        bgColor,
        bgGradient,
        textColor,
        textOpacity,
        fontFamily,
        accentColor,
    } = designSettings;

    const update = updateDesignSettings;

    const completedCount = checklistItems.filter((i) => i.completed).length;
    const completionPct  = Math.round((completedCount / checklistItems.length) * 100);

    return (
        <aside className="hidden lg:flex lg:flex-col w-[320px] shrink-0 border-l-4 border-white bg-black font-mono text-white selection:bg-fuchsia-500 selection:text-black overflow-hidden z-20">
            
            {/* ── HEADER ───────────────────────────────────────────── */}
            <div className="px-6 py-4 border-b-4 border-white bg-black shrink-0 flex flex-col gap-1">
                <h2 className="text-xl font-black uppercase tracking-widest text-white flex items-center gap-3">
                    <span className="block w-4 h-4 bg-lime-400 shadow-[2px_2px_0px_0px_white]" />
                    THEME_EDTR
                </h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 border-t-2 border-white/20 pt-2">
                    Override Global Styles
                </p>
            </div>

            {/* ── SCROLLABLE BODY ──────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-10 [scrollbar-width:none]">

                {/* ── BACKGROUND ─────────────────────────────────────── */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-sm font-black tracking-widest bg-white text-black px-3 py-1 inline-block self-start uppercase">
                        Background
                    </h3>

                    {/* Mode toggle */}
                    <div className="flex gap-3">
                        {["solid", "gradient"].map((mode) => (
                            <button
                                key={mode}
                                onClick={() => update({ bgMode: mode })}
                                className={`flex-1 text-xs font-black py-2 border-2 transition-all uppercase tracking-widest
                                    ${bgMode === mode
                                        ? "border-lime-400 bg-lime-400 text-black shadow-[4px_4px_0px_0px_white] translate-x-[2px] translate-y-[2px]"
                                        : "border-white bg-black text-white hover:border-lime-400 hover:text-lime-400 hover:shadow-[4px_4px_0px_0px_#a3e635] hover:-translate-y-1 hover:-translate-x-1"
                                    }`}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>

                    {/* Solid color picker */}
                    {bgMode === "solid" && (
                        <div className="flex items-center gap-4 bg-zinc-900 border-2 border-white p-3">
                            <input
                                type="color"
                                value={bgColor}
                                onChange={(e) => update({ bgColor: e.target.value })}
                                className="w-12 h-12 bg-black border-2 border-white cursor-pointer p-0.5 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none"
                            />
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-400 uppercase">Hex</span>
                                <span className="text-lg font-black tracking-wider">{bgColor}</span>
                            </div>
                        </div>
                    )}

                    {/* Gradient presets */}
                    {bgMode === "gradient" && (
                        <div className="flex flex-col gap-3">
                            {GRADIENT_PRESETS.map((preset) => (
                                <button
                                    key={preset.name}
                                    onClick={() => update({ bgGradient: preset.value })}
                                    className={`w-full h-12 border-2 transition-all flex items-center justify-center
                                        ${bgGradient === preset.value
                                            ? "border-white shadow-[4px_4px_0px_0px_white] translate-x-[2px] translate-y-[2px]"
                                            : "border-zinc-700 hover:border-white hover:shadow-[4px_4px_0px_0px_white] hover:-translate-y-1 hover:-translate-x-1"
                                        }`}
                                    style={{ backgroundImage: preset.value }}
                                >
                                    <span className="text-xs font-black bg-black border-2 border-white px-3 py-1 uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {preset.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </section>

                {/* ── TYPOGRAPHY ─────────────────────────────────────── */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-sm font-black tracking-widest bg-white text-black px-3 py-1 inline-block self-start uppercase">
                        Typography
                    </h3>

                    {/* Font Selector */}
                    <div className="flex flex-col gap-3">
                        {Object.keys(FONT_LABELS).map((key) => (
                            <button
                                key={key}
                                onClick={() => update({ fontFamily: key })}
                                className={`w-full text-left px-4 py-3 border-2 transition-all flex justify-between items-center
                                    ${fontFamily === key
                                        ? "border-fuchsia-500 bg-fuchsia-500 text-black shadow-[4px_4px_0px_0px_white] translate-x-[2px] translate-y-[2px]"
                                        : "border-zinc-700 bg-black text-white hover:border-white hover:shadow-[4px_4px_0px_0px_white] hover:-translate-y-1 hover:-translate-x-1"
                                    }`}
                                style={{ fontFamily: FONT_MAP[key] }}
                            >
                                <span className="font-bold text-sm tracking-widest">{FONT_LABELS[key]}</span>
                                {fontFamily === key && <span className="text-lg font-black">✓</span>}
                            </button>
                        ))}
                    </div>

                    {/* Text Color */}
                    <div className="flex items-center gap-4 bg-zinc-900 border-2 border-white p-3 mt-2">
                        <input
                            type="color"
                            value={textColor}
                            onChange={(e) => update({ textColor: e.target.value })}
                            className="w-10 h-10 bg-black border-2 border-white cursor-pointer p-0.5 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none"
                        />
                        <div className="flex flex-col flex-1">
                            <span className="text-xs font-bold text-slate-400 uppercase">Text Color</span>
                            <span className="text-sm font-black tracking-wider">{textColor}</span>
                        </div>
                    </div>

                    {/* Opacity Slider */}
                    <div className="flex flex-col gap-2 bg-black border-2 border-zinc-700 p-3 mt-2">
                        <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-2 mb-2">
                            <span className="text-xs font-bold text-slate-400 uppercase">Opacity</span>
                            <span className="text-sm font-black text-white">{textOpacity}%</span>
                        </div>
                        <input
                            type="range"
                            min="20"
                            max="100"
                            value={textOpacity}
                            onChange={(e) => update({ textOpacity: parseInt(e.target.value) })}
                            className="w-full h-2 bg-zinc-800 appearance-none cursor-pointer accent-fuchsia-500"
                        />
                    </div>
                </section>

                {/* ── ACCENT COLOR ───────────────────────────────────── */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-sm font-black tracking-widest bg-white text-black px-3 py-1 inline-block self-start uppercase">
                        Accent Color
                    </h3>

                    {/* Preset Swatches */}
                    <div className="grid grid-cols-4 gap-3">
                        {ACCENT_PRESETS.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => update({ accentColor: preset.value })}
                                title={preset.name}
                                className={`h-12 border-2 transition-all
                                    ${accentColor === preset.value
                                        ? "border-white shadow-[4px_4px_0px_0px_white] scale-110 z-10"
                                        : "border-zinc-800 hover:border-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_white]"
                                    }`}
                                style={{ background: preset.value }}
                            />
                        ))}
                    </div>

                    {/* Custom Accent */}
                    <div className="flex items-center gap-4 bg-zinc-900 border-2 border-white p-3 mt-2">
                        <input
                            type="color"
                            value={accentColor}
                            onChange={(e) => update({ accentColor: e.target.value })}
                            className="w-10 h-10 bg-black border-2 border-white cursor-pointer p-0.5 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none"
                        />
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-400 uppercase">Custom</span>
                            <span className="text-sm font-black tracking-wider">{accentColor}</span>
                        </div>
                    </div>

                    {/* Live Preview Button */}
                    <button
                        style={{ backgroundColor: accentColor, color: "#000", borderColor: "#fff" }}
                        className="w-full py-4 mt-2 border-4 font-black text-lg tracking-widest uppercase hover:-translate-y-1 hover:-translate-x-1 shadow-[6px_6px_0px_0px_white] transition-all"
                    >
                        CTA Button
                    </button>
                </section>

                {/* ── BUILD CHECKLIST ────────────────────────────────── */}
                <section className="flex flex-col gap-4">
                    <div className="flex items-end justify-between border-b-4 border-zinc-800 pb-2">
                        <h3 className="text-sm font-black tracking-widest bg-white text-black px-3 py-1 uppercase">
                            Checklist
                        </h3>
                        <span className="text-lg font-black">{checklistProgress}</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        {checklistItems.map((item) => (
                            <div
                                key={item.id}
                                className={`flex items-center gap-4 p-3 border-2 transition-all
                                    ${item.completed
                                        ? "border-lime-400 bg-lime-400/10 opacity-70"
                                        : "border-zinc-700 bg-black"
                                    }`}
                            >
                                <div className={`w-6 h-6 border-2 flex items-center justify-center shrink-0
                                    ${item.completed ? "border-lime-400 bg-lime-400 text-black" : "border-white"}`}>
                                    {item.completed && <span className="font-black text-sm">✓</span>}
                                </div>
                                <span className={`text-xs font-bold tracking-widest uppercase ${item.completed ? "line-through text-lime-400" : "text-white"}`}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── STATS & TIP ────────────────────────────────────── */}
                <section className="flex flex-col gap-4 mb-8">
                    {/* Stats Box */}
                    <div className="border-4 border-white bg-black p-4 shadow-[6px_6px_0px_0px_#3b82f6]">
                        <h3 className="text-xs font-black tracking-widest text-blue-500 uppercase mb-3 border-b-2 border-blue-500 pb-2">System_Stats</h3>
                        <div className="flex flex-col gap-2">
                            {[
                                { label: "SECTIONS", value: selectedSections.length },
                                { label: "PROGRESS", value: `${completionPct}%` },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-400">{label}</span>
                                    <span className="text-sm font-black text-white">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tip Box */}
                    <div className="border-4 border-fuchsia-500 bg-black p-4 shadow-[6px_6px_0px_0px_#d946ef]">
                        <p className="text-xs font-black text-fuchsia-500 tracking-widest mb-2 border-b-2 border-fuchsia-500 pb-2">SYS.TIP</p>
                        <p className="text-xs font-bold text-white leading-relaxed uppercase">
                            {selectedSections.length === 0
                                ? "Inject sections from the library immediately."
                                : checklistItems.some((i) => !i.completed)
                                ? `Required: Add a [${checklistItems.find((i) => !i.completed)?.label}] module.`
                                : "Systems nominal. Ready for export procedure."}
                        </p>
                    </div>
                </section>

            </div>
        </aside>
    );
}