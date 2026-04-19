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
    // Portfolio signage
    "portfolio-navbar1":   { word: "PROF", color: "cyan" },
    "portfolio-navbar2":   { word: "SLEEK", color: "cyan" },
    "portfolio-navbar3":   { word: "FLOW", color: "cyan" },
    "portfolio-hero1":     { word: "INTRO", color: "purple" },
    "portfolio-hero2":     { word: "IMPACT", color: "purple" },
    "portfolio-hero3":     { word: "SHINE", color: "purple" },
    "portfolio-projects1": { word: "CASE", color: "teal" },
    "portfolio-projects2": { word: "SHOW", color: "teal" },
    "portfolio-projects3": { word: "WORK", color: "teal" },
    "portfolio-skills1":   { word: "TECH", color: "orange" },
    "portfolio-skills2":   { word: "SKILL", color: "orange" },
    "portfolio-skills3":   { word: "EXPT", color: "orange" },
    "portfolio-footer1":   { word: "TOUCH", color: "pink" },
    "portfolio-footer2":   { word: "LINK", color: "pink" },
    "portfolio-footer3":   { word: "END", color: "pink" },
    "portfolio-template1": { word: "START", color: "gray" },
    "portfolio-template2": { word: "BUILD", color: "gray" },
    "portfolio-template3": { word: "MADE", color: "gray" },
    "portfolio-template4": { word: "READY", color: "gray" },
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
    const { sectionRegistry, selectedSections, addSection, removeSection, moveSection, designSettings } = useBuilder();
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
                    placeholder="Search component..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search components"
                    className="w-full bg-black/60 border border-cyan-900/40 text-cyan-300 placeholder-cyan-900 text-[10px] font-mono px-2.5 py-1.5 outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/50 transition-colors"
                />
                {/* Stats */}
                <div className="flex items-center justify-between mt-2 px-1">
                    <span className="text-[9px] text-cyan-800 font-mono">{selectedIds.length === 0 ? "NO_SELECT" : "SELECTED"}</span>
                    <span className="text-[9px] font-mono" style={{ color: accent }}>
                        {selectedIds.length === 0 ? "0" : selectedIds.length}
                    </span>
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
                                            aria-label={isAdded ? `${section.title} selected` : `Select ${section.title}`}
                                            className={`
                                                w-full text-[8px] font-mono py-1.5 border uppercase tracking-widest font-semibold transition-all duration-200
                                                ${isAdded
                                                    ? "border-green-800/50 text-green-600 bg-green-950/20 cursor-not-allowed"
                                                    : col.btn
                                                }
                                            `}
                                        >
                                            {isAdded ? "✓ SELECTED" : "+ SELECT"}
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

            {/* Selected Components Panel */}
            {selectedSections.length > 0 && (
                <div className="border-t border-cyan-900/40 bg-black/50 p-3 shrink-0">
                    <div className="text-[8px] font-mono tracking-[0.25em] text-cyan-500 mb-2 flex items-center gap-2">
                        <span className="block w-2 h-px bg-cyan-500" />
                        SELECTED ({selectedSections.length})
                    </div>
                    <div className="space-y-1.5 max-h-[200px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#0891b230_#000]">
                        {selectedSections.map((section, index) => (
                            <div 
                                key={`${section.id}-${index}`}
                                className="flex items-center justify-between gap-1 p-2 bg-cyan-950/30 border border-cyan-900/50 rounded text-[9px] hover:border-cyan-700/60 transition-colors group"
                            >
                                <div className="flex-1 min-w-0">
                                    <p className="text-cyan-300 truncate font-mono">{section.title}</p>
                                </div>
                                <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {index > 0 && (
                                        <button
                                            onClick={() => moveSection(section.id, "up")}
                                            className="w-5 h-5 flex items-center justify-center bg-purple-950/50 border border-purple-700/50 text-purple-400 hover:bg-purple-700 hover:text-white text-[8px] font-bold"
                                            title="Move up"
                                        >
                                            ↑
                                        </button>
                                    )}
                                    {index < selectedSections.length - 1 && (
                                        <button
                                            onClick={() => moveSection(section.id, "down")}
                                            className="w-5 h-5 flex items-center justify-center bg-purple-950/50 border border-purple-700/50 text-purple-400 hover:bg-purple-700 hover:text-white text-[8px] font-bold"
                                            title="Move down"
                                        >
                                            ↓
                                        </button>
                                    )}
                                    <button
                                        onClick={() => removeSection(section.id)}
                                        className="w-5 h-5 flex items-center justify-center bg-red-950/50 border border-red-700/50 text-red-400 hover:bg-red-700 hover:text-white text-[8px] font-bold"
                                        title="Remove"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
}
