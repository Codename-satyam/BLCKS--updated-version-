import { useMemo, useRef, useState } from "react";
import { useBuilder } from "../../Context/BuilderContext";

// ── Static signage per section ────────────────────────────────────────────────
const SIGNAGE = {
    navbar1:   { word: "FRAME", color: "cyan" },
    navbar2:   { word: "BOLD",  color: "cyan" },
    navbar3:   { word: "GLIDE", color: "cyan" },
    hero1:     { word: "HERO",  color: "purple" },
    hero2:     { word: "PULSE", color: "purple" },
    hero3:     { word: "SPARK", color: "purple" },
    features1: { word: "GRID",  color: "teal" },
    features2: { word: "LIST",  color: "teal" },
    features3: { word: "CARDS", color: "teal" },
    pricing1:  { word: "PLAN",  color: "orange" },
    pricing2:  { word: "DEAL",  color: "orange" },
    pricing3:  { word: "TIER",  color: "orange" },
    workpage1: { word: "CASE",  color: "pink" },
    workpage2: { word: "PORT",  color: "pink" },
    workpage3: { word: "TIME",  color: "pink" },
    workpage4: { word: "GRID",  color: "pink" },
    footer1:   { word: "WRAP",  color: "gray" },
    footer2:   { word: "COLS",  color: "gray" },
    footer3:   { word: "CTA",   color: "gray" },
};

const COLOR_MAP = {
    cyan:   { bg: "bg-cyan-950/50",   border: "border-cyan-700/60",   text: "text-cyan-400",   btn: "border-cyan-700/50 text-cyan-400 hover:bg-cyan-400 hover:text-black" },
    purple: { bg: "bg-purple-950/50", border: "border-purple-700/60", text: "text-purple-400", btn: "border-purple-700/50 text-purple-400 hover:bg-purple-400 hover:text-black" },
    teal:   { bg: "bg-teal-950/50",   border: "border-teal-700/60",   text: "text-teal-400",   btn: "border-teal-700/50 text-teal-400 hover:bg-teal-400 hover:text-black" },
    orange: { bg: "bg-orange-950/50", border: "border-orange-700/60", text: "text-orange-400", btn: "border-orange-700/50 text-orange-400 hover:bg-orange-400 hover:text-black" },
    pink:   { bg: "bg-pink-950/50",   border: "border-pink-700/60",   text: "text-pink-400",   btn: "border-pink-700/50 text-pink-400 hover:bg-pink-400 hover:text-black" },
    gray:   { bg: "bg-slate-900/50",  border: "border-slate-700/60",  text: "text-slate-400",  btn: "border-slate-600/50 text-slate-400 hover:bg-slate-400 hover:text-black" },
};

export default function SideBar() {
    const { sectionRegistry, selectedSections, addSection, designSettings } = useBuilder();
    const railRefs = useRef({});
    const [searchQuery, setSearchQuery] = useState("");

    const selectedIds = selectedSections.map((s) => s.id);

    const groupedRegistry = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        return sectionRegistry.reduce((groups, section) => {
            if (query && !section.title.toLowerCase().includes(query) && !section.group.toLowerCase().includes(query)) {
                return groups;
            }
            if (!groups[section.group]) groups[section.group] = [];
            groups[section.group].push(section);
            return groups;
        }, {});
    }, [sectionRegistry, searchQuery]);

    const scrollRail = (groupName, direction) => {
        const el = railRefs.current[groupName];
        if (!el) return;
        el.scrollBy({ left: direction * 160, behavior: "smooth" });
    };

    const writeDragData = (event, sectionId) => {
        event.dataTransfer.setData("application/x-builder-section", JSON.stringify({ source: "registry", sectionId }));
        event.dataTransfer.setData("text/plain", JSON.stringify({ source: "registry", sectionId }));
        event.dataTransfer.effectAllowed = "copy";
    };

    const accent = designSettings.accentColor || "#00e5ff";
    const totalSections = sectionRegistry.length;
    const addedCount = selectedIds.length;

    return (
        <aside className="w-[200px] md:w-[215px] shrink-0 flex flex-col border-r border-cyan-900/40 bg-black/50 backdrop-blur-lg z-20">
            {/* Header */}
            <div className="px-4 py-3 border-b border-cyan-900/30 bg-black/30 shrink-0">
                <h2 className="text-[9px] font-mono tracking-[0.25em] text-cyan-500 flex items-center gap-2 mb-3">
                    <span className="block w-3 h-px bg-cyan-500" />
                    COMPONENT_LIB
                </h2>
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/60 border border-cyan-900/40 text-cyan-300 placeholder-cyan-900 text-[10px] font-mono px-2.5 py-1.5 outline-none focus:border-cyan-600 transition-colors"
                />
                {/* Stats */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-[9px] text-cyan-900 font-mono">{totalSections} AVAILABLE</span>
                    <span className="text-[9px] font-mono" style={{ color: accent }}>{addedCount} ADDED</span>
                </div>
            </div>

            {/* Groups */}
            <div className="flex-1 overflow-y-auto py-3 flex flex-col gap-5 [scrollbar-width:thin] [scrollbar-color:#0891b230_#000]">
                {Object.entries(groupedRegistry).map(([groupName, sections]) => (
                    <div key={groupName} className="px-3 flex flex-col gap-2">
                        {/* Group header */}
                        <div className="flex items-center justify-between">
                            <span className="text-[8px] font-mono tracking-[0.2em] text-cyan-800 uppercase">
                                [{groupName}]
                            </span>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => scrollRail(groupName, -1)}
                                    className="w-5 h-5 text-[10px] border border-cyan-900/40 bg-cyan-950/20 text-cyan-600 hover:text-cyan-300 hover:border-cyan-600 transition-colors flex items-center justify-center font-mono"
                                >←</button>
                                <button
                                    onClick={() => scrollRail(groupName, 1)}
                                    className="w-5 h-5 text-[10px] border border-cyan-900/40 bg-cyan-950/20 text-cyan-600 hover:text-cyan-300 hover:border-cyan-600 transition-colors flex items-center justify-center font-mono"
                                >→</button>
                            </div>
                        </div>

                        {/* Horizontal scroll rail */}
                        <div
                            ref={(el) => { railRefs.current[groupName] = el; }}
                            className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory [scrollbar-width:none]"
                        >
                            {sections.map((section) => {
                                const isAdded = selectedIds.includes(section.id);
                                const sig = SIGNAGE[section.id] || { word: "MOD", color: "cyan" };
                                const col = COLOR_MAP[sig.color];

                                return (
                                    <article
                                        key={section.id}
                                        draggable={!isAdded}
                                        onDragStart={(e) => {
                                            if (isAdded) { e.preventDefault(); return; }
                                            writeDragData(e, section.id);
                                        }}
                                        className={`
                                            relative shrink-0 w-[130px] snap-start border flex flex-col gap-2 p-2.5 transition-all duration-200
                                            ${isAdded
                                                ? "border-slate-800 bg-slate-950/30 opacity-40 cursor-not-allowed grayscale"
                                                : `${col.border} bg-black/60 hover:bg-cyan-950/20 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,229,255,0.1)] cursor-grab active:cursor-grabbing`
                                            }
                                        `}
                                    >
                                        {/* Word badge */}
                                        <div className={`px-1.5 py-0.5 border text-center ${col.bg} ${col.border}`}>
                                            <span className={`text-[10px] font-mono tracking-widest font-bold ${col.text}`}>
                                                {sig.word}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <p className="text-[10px] text-white/80 leading-tight font-sans flex-1">
                                            {section.title}
                                        </p>

                                        {/* Add button */}
                                        <button
                                            onClick={() => addSection(section.id)}
                                            disabled={isAdded}
                                            className={`
                                                w-full text-[8px] font-mono py-1 border uppercase tracking-widest transition-all duration-200
                                                ${isAdded
                                                    ? "border-slate-800 text-slate-600 cursor-not-allowed"
                                                    : col.btn
                                                }
                                            `}
                                        >
                                            {isAdded ? "✓ Added" : "+ Inject"}
                                        </button>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {Object.keys(groupedRegistry).length === 0 && (
                    <div className="px-4 py-8 text-center">
                        <p className="text-[10px] text-cyan-900 font-mono">NO MATCHES</p>
                        <p className="text-[9px] text-slate-700 mt-1 font-sans">Try a different search</p>
                    </div>
                )}
            </div>
        </aside>
    );
}
