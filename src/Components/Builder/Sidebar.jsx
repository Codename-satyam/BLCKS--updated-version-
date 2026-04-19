import React, { useMemo, useState, useRef } from "react";
import { useBuilder } from "../../Context/BuilderContext";

// ── Static signage per section ────────────────────────────────────────────────
const SIGNAGE = {
    navbar1:   { word: "FRAME", color: "cyan" },
    navbar2:   { word: "BOLD",  color: "cyan" },
    navbar3:   { word: "GLIDE", color: "cyan" },
    navbar4:   { word: "SLEEK", color: "cyan" },
    navbar5:   { word: "SWIFT", color: "cyan" },
    navbar6:   { word: "SLICK", color: "cyan" },
    hero1:     { word: "HERO",  color: "purple" },
    hero2:     { word: "PULSE", color: "purple" },
    hero3:     { word: "SPARK", color: "purple" },
    hero4:     { word: "EPIC",  color: "purple" },
    hero5:     { word: "GRAND", color: "purple" },
    features1: { word: "GRID",  color: "teal" },
    features2: { word: "LIST",  color: "teal" },
    features3: { word: "CARDS", color: "teal" },
    pricing1:  { word: "PLAN",  color: "orange" },
    pricing2:  { word: "DEAL",  color: "orange" },
    pricing3:  { word: "TIER",  color: "orange" },
    pricing4:  { word: "VALUE", color: "orange" },
    workpage1: { word: "CASE",  color: "pink" },
    workpage2: { word: "PORT",  color: "pink" },
    workpage3: { word: "TIME",  color: "pink" },
    workpage4: { word: "GRID",  color: "pink" },
    workpage5: { word: "FLOW",  color: "pink" },
    workpage6: { word: "TRACK", color: "pink" },
    footer1:   { word: "WRAP",  color: "gray" },
    footer2:   { word: "COLS",  color: "gray" },
    footer3:   { word: "CTA",   color: "gray" },
    testimonials1: { word: "VOICE", color: "cyan" },
    testimonials2: { word: "QUOTE", color: "cyan" },
    testimonials3: { word: "PROOF", color: "cyan" },
    cta1:      { word: "CALL",  color: "orange" },
    cta2:      { word: "OFFER", color: "orange" },
    cta3:      { word: "PUSH",  color: "orange" },
    stats1:    { word: "METRIC", color: "yellow" },
    stats2:    { word: "DATA",  color: "yellow" },
    stats3:    { word: "DIGIT", color: "yellow" },
    gallery1:  { word: "VISUAL", color: "green" },
    gallery2:  { word: "GRID",  color: "green" },
    gallery3:  { word: "FILTER", color: "green" },
    faq1:      { word: "QUERY",  color: "amber" },
    faq2:      { word: "ANSWER", color: "amber" },
    faq3:      { word: "EXPAND", color: "amber" },
    newsletter1: { word: "MAIL", color: "emerald" },
    newsletter2: { word: "SUBS", color: "emerald" },
    newsletter3: { word: "JOIN", color: "emerald" },
    timeline1: { word: "EVENT", color: "slate" },
    timeline2: { word: "PHASE", color: "slate" },
    timeline3: { word: "MILE",  color: "slate" },
    comparison1: { word: "VS",    color: "lime" },
    comparison2: { word: "MATCH", color: "lime" },
    comparison3: { word: "SPEC",  color: "lime" },
    // Portfolio
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

// Simplified Brutalist Color Map
const THEME_COLORS = {
    cyan:   { hex: "#22d3ee", bg: "bg-cyan-400", border: "border-cyan-400", text: "text-cyan-400" },
    purple: { hex: "#d946ef", bg: "bg-fuchsia-500", border: "border-fuchsia-500", text: "text-fuchsia-500" },
    teal:   { hex: "#2dd4bf", bg: "bg-teal-400", border: "border-teal-400", text: "text-teal-400" },
    orange: { hex: "#f97316", bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-500" },
    pink:   { hex: "#ec4899", bg: "bg-pink-500", border: "border-pink-500", text: "text-pink-500" },
    gray:   { hex: "#ffffff", bg: "bg-white", border: "border-white", text: "text-white" },
    yellow: { hex: "#eab308", bg: "bg-yellow-400", border: "border-yellow-400", text: "text-yellow-400" },
    green:  { hex: "#22c55e", bg: "bg-green-500", border: "border-green-500", text: "text-green-500" },
    amber:  { hex: "#f59e0b", bg: "bg-amber-500", border: "border-amber-500", text: "text-amber-500" },
    emerald: { hex: "#10b981", bg: "bg-emerald-500", border: "border-emerald-500", text: "text-emerald-500" },
    slate:  { hex: "#64748b", bg: "bg-slate-600", border: "border-slate-600", text: "text-slate-400" },
    lime:   { hex: "#84cc16", bg: "bg-lime-400", border: "border-lime-400", text: "text-lime-400" },
};

export default function SideBar() {
    const { sectionRegistry = [], selectedSections = [], addSection, removeSection, moveSection } = useBuilder();
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredSection, setHoveredSection] = useState(null);
    const previewRef = useRef(null);
    const sidebarRef = useRef(null);

    const selectedIds = (selectedSections || []).map((s) => s?.id).filter(Boolean);

    const groupedRegistry = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        const registry = sectionRegistry || [];
        
        return registry.reduce((groups, section) => {
            if (!section) return groups;
            if (query && !section.title?.toLowerCase().includes(query) && !section.group?.toLowerCase().includes(query)) {
                return groups;
            }
            const groupKey = section.group || "other";
            if (!groups[groupKey]) groups[groupKey] = [];
            groups[groupKey].push(section);
            return groups;
        }, {});
    }, [sectionRegistry, searchQuery]);

    const writeDragData = (event, sectionId) => {
        event.dataTransfer.setData("application/x-builder-section", JSON.stringify({ source: "registry", sectionId }));
        event.dataTransfer.setData("text/plain", JSON.stringify({ source: "registry", sectionId }));
        event.dataTransfer.effectAllowed = "copy";
    };

    const handleHoverEnter = (e, section) => {
        setHoveredSection(section);
    };

    const handleHoverLeave = () => {
        setHoveredSection(null);
    };

    const getTheme = (color) => {
        const theme = THEME_COLORS[color];
        if (!theme) {
            console.warn(`Missing theme color: ${color}, using gray fallback`);
            return THEME_COLORS["gray"];
        }
        return theme;
    };

    return (
        <aside className="w-[320px] shrink-0 flex flex-col border-r-4 border-white bg-black z-20 font-mono text-white selection:bg-lime-400 selection:text-black" ref={sidebarRef}>
            
            {/* ── HEADER & SEARCH ──────────────────────────────────── */}
            <div className="p-6 border-b-4 border-white bg-black shrink-0 relative">
                {/* Decorative lines */}
                <div className="absolute top-0 right-0 w-8 h-8 border-b-4 border-l-4 border-lime-400" />
                
                <h2 className="text-2xl font-black uppercase tracking-widest flex items-center gap-3 mb-6">
                    LIB.SYS
                </h2>
                
                <input
                    type="text"
                    placeholder="QUERY MODULES..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black border-4 border-white text-white placeholder:text-zinc-600 text-sm font-black px-4 py-3 outline-none focus:border-lime-400 focus:shadow-[4px_4px_0px_0px_#a3e635] transition-all uppercase tracking-widest"
                />
            </div>

            {/* ── VERTICAL MODULE FEED ─────────────────────────────── */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 [scrollbar-width:none]">
                {Object.entries(groupedRegistry).map(([groupName, sections]) => (
                    <div key={groupName} className="flex flex-col gap-4">
                        
                        {/* Huge Group Header */}
                        <div className="border-b-4 border-zinc-800 pb-2 mb-2">
                            <h3 className="text-xl font-black tracking-widest text-white uppercase">
                                {groupName}
                            </h3>
                        </div>

                        {/* Vertically Stacked Cards instead of Horizontal Scroll */}
                        <div className="flex flex-col gap-4">
                            {sections.map((section) => {
                                try {
                                    if (!section) return null;
                                    
                                    const isAdded = selectedIds.includes(section.id);
                                    const sig = SIGNAGE[section.id] || { word: "MOD", color: "gray" };
                                    const theme = getTheme(sig?.color || "gray");

                                    return (
                                        <article
                                            key={section.id}
                                            draggable={!isAdded}
                                            onDragStart={(e) => {
                                                if (isAdded) { e.preventDefault(); return; }
                                            writeDragData(e, section.id);
                                        }}
                                        onMouseEnter={(e) => !isAdded && handleHoverEnter(e, section)}
                                        onMouseLeave={handleHoverLeave}
                                        className={`
                                            group flex flex-col border-4 transition-all duration-150 bg-black
                                            ${isAdded
                                                ? "border-zinc-800 opacity-50 cursor-not-allowed grayscale border-dashed"
                                                : `${theme.border} cursor-grab active:cursor-grabbing hover:-translate-y-1 hover:-translate-x-1`
                                            }
                                        `}
                                        style={!isAdded ? { boxShadow: `6px 6px 0px 0px ${theme.hex}` } : {}}
                                    >
                                        <div className="flex justify-between items-start p-3 border-b-4 border-inherit">
                                            <p className="text-sm font-black uppercase leading-tight pr-2">
                                                {section.title}
                                            </p>
                                            <span className={`text-xs font-black tracking-widest px-2 py-1 uppercase bg-black border-2 border-inherit ${theme.text}`}>
                                                {sig.word}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => addSection(section.id)}
                                            disabled={isAdded}
                                            className={`
                                                w-full py-3 text-xs font-black uppercase tracking-widest transition-all
                                                ${isAdded
                                                    ? "bg-zinc-900 text-zinc-600"
                                                    : `bg-black ${theme.text} hover:${theme.bg} hover:text-black`
                                                }
                                            `}
                                        >
                                            {isAdded ? "STATUS: INJECTED" : "+ INJECT MODULE"}
                                        </button>
                                    </article>
                                    );
                                } catch (err) {
                                    console.error(`Error rendering section:`, err, section?.id);
                                    return null;
                                }
                            })}
                        </div>
                    </div>
                ))}

                {Object.keys(groupedRegistry).length === 0 && (
                    <div className="py-12 text-center border-4 border-dashed border-red-500 bg-red-500/10">
                        <p className="text-xl font-black text-red-500 uppercase">NULL RESULTS</p>
                    </div>
                )}
            </div>

            {/* ── BOTTOM ACTIVE PAYLOAD PANEL ──────────────────────── */}
            {selectedSections.length > 0 && (
                <div className="border-t-4 border-white bg-black shrink-0 relative z-10 shadow-[0_-10px_0_0_rgba(0,0,0,1)]">
                    
                    {/* Collapsible-style Header (Always open for now, but styled like a hardware drawer) */}
                    <div className="bg-white text-black p-3 flex items-center justify-between">
                        <span className="font-black text-sm uppercase tracking-widest">Active Payload</span>
                        <span className="bg-black text-white font-black px-2">{selectedSections.length}</span>
                    </div>
                    
                    <div className="p-4 space-y-3 max-h-[250px] overflow-y-auto [scrollbar-width:none]">
                        {selectedSections.map((section, index) => (
                            <div 
                                key={`${section.id}-${index}`}
                                className="flex border-2 border-zinc-700 bg-black hover:border-lime-400 transition-colors"
                            >
                                {/* Index Number Block */}
                                <div className="bg-zinc-900 px-3 py-2 flex items-center justify-center border-r-2 border-inherit font-black text-zinc-500">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                {/* Title */}
                                <div className="flex-1 p-2 flex items-center overflow-hidden">
                                    <p className="text-xs font-bold text-white uppercase truncate">{section.title}</p>
                                </div>
                                
                                {/* Controls */}
                                <div className="flex border-l-2 border-inherit">
                                    <div className="flex flex-col border-r-2 border-inherit">
                                        <button
                                            onClick={() => moveSection(section.id, "up")}
                                            disabled={index === 0}
                                            className="px-2 py-1 bg-black text-zinc-500 hover:bg-white hover:text-black disabled:opacity-30 font-black"
                                        >↑</button>
                                        <button
                                            onClick={() => moveSection(section.id, "down")}
                                            disabled={index === selectedSections.length - 1}
                                            className="px-2 py-1 bg-black text-zinc-500 hover:bg-white hover:text-black border-t-2 border-inherit disabled:opacity-30 font-black"
                                        >↓</button>
                                    </div>
                                    <button
                                        onClick={() => removeSection(section.id)}
                                        className="px-4 flex items-center justify-center bg-black text-red-500 hover:bg-red-500 hover:text-black font-black"
                                    >✕</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
}