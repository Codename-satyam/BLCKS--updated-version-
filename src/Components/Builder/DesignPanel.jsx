import { useBuilder, GRADIENT_PRESETS, ACCENT_PRESETS, FONT_MAP } from "../../Context/BuilderContext";

const FONT_LABELS = {
    mono:    "Monospace  — Courier New",
    sans:    "Sans-serif — Segoe UI",
    serif:   "Serif      — Georgia",
    display: "Display    — Impact",
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
        <aside className="hidden lg:flex lg:flex-col w-[220px] shrink-0 border-l border-cyan-900/40 bg-black/50 backdrop-blur-lg overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-cyan-900/30 bg-black/30 shrink-0">
                <h2 className="text-[9px] font-mono tracking-[0.25em] text-cyan-500 flex items-center gap-2">
                    <span className="block w-3 h-px bg-cyan-500" />
                    DESIGN_CONTROLS
                </h2>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5 [scrollbar-width:thin] [scrollbar-color:#0891b230_#000]">

                {/* ── BACKGROUND ─────────────────────────────────────── */}
                <section className="flex flex-col gap-3 border-b border-white/[0.04] pb-5">
                    <h3 className="text-[8px] font-mono tracking-[0.25em] text-cyan-600 uppercase">Background</h3>

                    {/* Mode toggle */}
                    <div className="flex gap-1.5">
                        {["solid", "gradient"].map((mode) => (
                            <button
                                key={mode}
                                onClick={() => update({ bgMode: mode })}
                                className={`flex-1 text-[9px] font-mono py-1.5 border transition-all capitalize tracking-widest
                                    ${bgMode === mode
                                        ? "border-cyan-500 bg-cyan-950/60 text-cyan-300"
                                        : "border-cyan-900/30 bg-black text-slate-600 hover:border-cyan-800 hover:text-slate-400"
                                    }`}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>

                    {/* Solid color picker */}
                    {bgMode === "solid" && (
                        <div className="flex flex-col gap-2">
                            <label className="text-[8px] font-mono text-slate-600">Color</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={bgColor}
                                    onChange={(e) => update({ bgColor: e.target.value })}
                                    className="w-10 h-8 bg-transparent border border-cyan-900/40 cursor-pointer p-0.5"
                                />
                                <span className="text-[10px] font-mono text-slate-500">{bgColor}</span>
                            </div>
                        </div>
                    )}

                    {/* Gradient presets */}
                    {bgMode === "gradient" && (
                        <div className="flex flex-col gap-2">
                            <label className="text-[8px] font-mono text-slate-600">Gradient Presets</label>
                            <div className="flex flex-col gap-1.5">
                                {GRADIENT_PRESETS.map((preset) => (
                                    <button
                                        key={preset.name}
                                        onClick={() => update({ bgGradient: preset.value })}
                                        className={`w-full h-8 border transition-all text-left flex items-center px-2
                                            ${bgGradient === preset.value
                                                ? "border-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.3)]"
                                                : "border-cyan-900/30 hover:border-cyan-700"
                                            }`}
                                        style={{ backgroundImage: preset.value }}
                                    >
                                        <span className="text-[8px] font-mono bg-black/70 px-1.5 py-0.5 text-slate-300 backdrop-blur-sm">
                                            {preset.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* ── TYPOGRAPHY ─────────────────────────────────────── */}
                <section className="flex flex-col gap-3 border-b border-white/[0.04] pb-5">
                    <h3 className="text-[8px] font-mono tracking-[0.25em] text-cyan-600 uppercase">Typography</h3>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[8px] font-mono text-slate-600">Heading Font</label>
                        {Object.keys(FONT_LABELS).map((key) => (
                            <button
                                key={key}
                                onClick={() => update({ fontFamily: key })}
                                className={`w-full text-left text-[9px] px-2.5 py-2 border transition-all
                                    ${fontFamily === key
                                        ? "border-cyan-500 bg-cyan-950/40 text-cyan-300"
                                        : "border-slate-800 bg-black/50 text-slate-600 hover:border-slate-600 hover:text-slate-400"
                                    }`}
                                style={{ fontFamily: FONT_MAP[key] }}
                            >
                                {FONT_LABELS[key]}
                            </button>
                        ))}
                    </div>

                    {/* Text color */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[8px] font-mono text-slate-600">Text Color</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={textColor}
                                onChange={(e) => update({ textColor: e.target.value })}
                                className="w-10 h-8 bg-transparent border border-cyan-900/40 cursor-pointer p-0.5"
                            />
                            <span className="text-[10px] font-mono text-slate-500">{textColor}</span>
                        </div>
                    </div>

                    {/* Opacity */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-[8px] font-mono text-slate-600">Text Opacity</label>
                            <span className="text-[9px] font-mono text-cyan-500">{textOpacity}%</span>
                        </div>
                        <input
                            type="range"
                            min="20"
                            max="100"
                            value={textOpacity}
                            onChange={(e) => update({ textOpacity: parseInt(e.target.value) })}
                            className="w-full accent-cyan-500 h-1"
                        />
                    </div>
                </section>

                {/* ── ACCENT COLOR ───────────────────────────────────── */}
                <section className="flex flex-col gap-3 border-b border-white/[0.04] pb-5">
                    <h3 className="text-[8px] font-mono tracking-[0.25em] text-cyan-600 uppercase">Accent Color</h3>

                    {/* Preset swatches */}
                    <div className="grid grid-cols-3 gap-1.5">
                        {ACCENT_PRESETS.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => update({ accentColor: preset.value })}
                                title={preset.name}
                                className={`h-7 border text-[8px] font-mono transition-all
                                    ${accentColor === preset.value
                                        ? "border-white/80 scale-105 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                        : "border-transparent hover:border-white/30"
                                    }`}
                                style={{ background: preset.value, color: preset.value === "#ffffff" ? "#000" : "#000" }}
                            />
                        ))}
                    </div>

                    {/* Custom color */}
                    <div className="flex items-center gap-2">
                        <input
                            type="color"
                            value={accentColor}
                            onChange={(e) => update({ accentColor: e.target.value })}
                            className="w-10 h-8 bg-transparent border border-cyan-900/40 cursor-pointer p-0.5"
                        />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-slate-600">Custom</span>
                            <span className="text-[10px] font-mono text-slate-400">{accentColor}</span>
                        </div>
                    </div>

                    {/* Live accent preview */}
                    <div className="border border-white/[0.06] p-3 flex flex-col gap-2" style={{ borderLeftColor: accentColor, borderLeftWidth: 2 }}>
                        <div className="text-[8px] font-mono text-slate-600">Preview</div>
                        <div style={{ color: accentColor }} className="text-[11px] font-mono tracking-widest">ACCENT.ACTIVE</div>
                        <button
                            style={{ borderColor: accentColor, color: accentColor, background: "transparent" }}
                            className="w-full text-[9px] font-mono py-1.5 border tracking-widest transition-none"
                        >
                            CTA Button
                        </button>
                    </div>
                </section>

                {/* ── BUILD CHECKLIST ────────────────────────────────── */}
                <section className="flex flex-col gap-3 border-b border-white/[0.04] pb-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[8px] font-mono tracking-[0.25em] text-cyan-600 uppercase">Build Checklist</h3>
                        <span className="text-[9px] font-mono text-cyan-500">{checklistProgress}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1 bg-cyan-950 overflow-hidden">
                        <div
                            className="h-full bg-cyan-400 transition-all duration-700"
                            style={{ width: `${completionPct}%` }}
                        />
                    </div>

                    {/* Items */}
                    <div className="flex flex-col gap-1.5">
                        {checklistItems.map((item) => (
                            <div
                                key={item.id}
                                className={`flex items-center gap-2.5 px-2.5 py-1.5 border text-[10px] font-sans transition-all
                                    ${item.completed
                                        ? "border-green-800/40 bg-green-950/20"
                                        : "border-slate-800/40 bg-transparent"
                                    }`}
                            >
                                <div className={`w-3 h-3 border flex items-center justify-center flex-shrink-0 transition-all
                                    ${item.completed
                                        ? "border-green-500 bg-green-500"
                                        : "border-slate-700"
                                    }`}>
                                    {item.completed && <span className="text-black text-[7px] font-bold">✓</span>}
                                </div>
                                <span className={item.completed ? "text-green-400 line-through" : "text-slate-500"}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── STATS ──────────────────────────────────────────── */}
                <section className="flex flex-col gap-2 border-b border-white/[0.04] pb-5">
                    <h3 className="text-[8px] font-mono tracking-[0.25em] text-cyan-600 uppercase">Project Stats</h3>
                    <div className="bg-cyan-950/20 border border-cyan-900/30 p-3 flex flex-col gap-2">
                        {[
                            { label: "Sections Added",   value: selectedSections.length },
                            { label: "Build Completion", value: `${completionPct}%` },
                            { label: "Checklist Done",   value: `${checklistProgress}` },
                        ].map(({ label, value }) => (
                            <div key={label} className="flex justify-between items-center">
                                <span className="text-[9px] font-sans text-slate-600">{label}</span>
                                <span className="text-[10px] font-mono text-cyan-400 font-bold">{value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── TIP ────────────────────────────────────────────── */}
                <section className="bg-purple-950/20 border border-purple-900/30 p-3">
                    <p className="text-[8px] font-mono text-purple-500 tracking-widest mb-2">DESIGN TIP</p>
                    <p className="text-[10px] font-sans text-slate-500 leading-relaxed">
                        {selectedSections.length === 0
                            ? "Start by injecting sections from the library on the left."
                            : checklistItems.some((i) => !i.completed)
                            ? `Add a ${checklistItems.find((i) => !i.completed)?.label} to strengthen the page.`
                            : "All key sections are present. Consider reviewing your accent color before exporting."}
                    </p>
                </section>
            </div>
        </aside>
    );
}
