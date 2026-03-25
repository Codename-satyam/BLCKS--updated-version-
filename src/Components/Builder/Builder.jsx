import { useMemo, useRef, useState } from "react";
import { useBuilder } from "../../Context/BuilderContext";

export default function Builder() {
    const {
        sectionRegistry,
        selectedSections,
        addSection,
        removeSection,
        resetTemplate,
        updateSectionField,
    } = useBuilder();

    const [activeEditId, setActiveEditId] = useState(null);
    const [canvasDragOver, setCanvasDragOver] = useState(false);
    const railRefs = useRef({});

    const selectedIds = selectedSections.map((section) => section.id);
    const groupedRegistry = useMemo(() => {
        return sectionRegistry.reduce((groups, section) => {
            if (!groups[section.group]) {
                groups[section.group] = [];
            }
            groups[section.group].push(section);
            return groups;
        }, {});
    }, [sectionRegistry]);

    const sectionSignage = useMemo(
        () => ({
            navbar1: { word: "FRAME", tone: "tech" },
            navbar2: { word: "COOL", tone: "brutalist" },
            navbar3: { word: "GLIDE", tone: "tech" },
            hero1: { word: "BOLD", tone: "tech" },
            hero2: { word: "PULSE", tone: "tech" },
            hero3: { word: "SPARK", tone: "tech" },
            features1: { word: "STACK", tone: "tech" },
            features2: { word: "SMART", tone: "tech" },
            features3: { word: "SHIFT", tone: "tech" },
            pricing1: { word: "VALUE", tone: "tech" },
            pricing2: { word: "DEAL", tone: "tech" },
            pricing3: { word: "PLAN", tone: "tech" },
            workpage1: { word: "FLOW", tone: "tech" },
            workpage2: { word: "TRACK", tone: "tech" },
            workpage3: { word: "BUILD", tone: "tech" },
            workpage4: { word: "LAUNCH", tone: "tech" },
            footer1: { word: "WRAP", tone: "tech" },
            footer2: { word: "CLOSE", tone: "tech" },
            footer3: { word: "END", tone: "tech" },
        }),
        []
    );

    const getSignage = (section) => {
        return sectionSignage[section.id] || { word: section.group?.slice(0, 4).toUpperCase() || "TYPE", tone: "tech" };
    };

    const scrollRail = (groupName, direction) => {
        const railElement = railRefs.current[groupName];
        if (!railElement) return;
        const scrollAmount = Math.max(160, Math.floor(railElement.clientWidth * 0.8));
        railElement.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    };

    const writeDragData = (event, payload) => {
        event.dataTransfer.setData("application/x-builder-section", JSON.stringify(payload));
        event.dataTransfer.setData("text/plain", JSON.stringify(payload));
        event.dataTransfer.effectAllowed = "move";
    };

    const readDragData = (event) => {
        const raw =
            event.dataTransfer.getData("application/x-builder-section") ||
            event.dataTransfer.getData("text/plain");
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch {
            return null;
        }
    };

    const handleDropOnCanvas = (event) => {
        event.preventDefault();
        setCanvasDragOver(false);

        const payload = readDragData(event);
        if (!payload?.sectionId) return;

        if (payload.source === "registry") {
            addSection(payload.sectionId);
        }
    };

    return (
        <main 
            className="h-screen w-screen overflow-hidden flex flex-col bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200" 
            style={{ fontFamily: '"Bungee", cursive' }}
        >
            {/* GLOBAL BACKGROUND EFFECTS - Placed behind everything so glassmorphism panels catch it */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/10 blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[150px]"></div>
            </div>

            {/* TOP NAVIGATION / HEADER */}
            <header className="relative z-30 h-16 shrink-0 border-b border-cyan-900/60 bg-black/50 backdrop-blur-xl px-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-sm animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                        <h1 className="text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] tracking-wide">
                            SYS.BUILDER
                        </h1>
                    </div>
                    <div className="hidden md:flex h-6 w-px bg-cyan-900/50"></div>
                    <p className="hidden md:block text-gray-400 font-sans text-xs tracking-wider max-w-md">
                        Drag & Drop Matrix. Select modules below.
                    </p>
                </div>
                
                <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.2em] text-cyan-400 bg-cyan-950/40 px-3 py-1.5 border border-cyan-900/50 rounded-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {selectedSections.length} MODULES
                    </span>
                    <button
                        onClick={() => {
                            resetTemplate();
                            setActiveEditId(null);
                        }}
                        className="text-[10px] tracking-widest border border-red-900/50 bg-red-950/20 text-red-400 px-4 py-1.5 hover:bg-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300 uppercase rounded-sm"
                    >
                        Purge All
                    </button>
                </div>
            </header>

            {/* IDE WORKSPACE */}
            <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden relative z-10">
                
                {/* LEFT PANEL: SECTION REGISTRY */}
                <aside className="w-full md:w-[340px] md:shrink-0 max-h-[48vh] md:max-h-none flex flex-col border-r border-cyan-900/60 bg-black/40 backdrop-blur-lg z-20 transition-all">
                    <div className="p-4 border-b border-cyan-900/30 bg-black/20">
                        <h2 className="text-sm tracking-[0.2em] text-cyan-500 flex items-center gap-2">
                            <span className="block w-4 h-px bg-cyan-500"></span>
                            COMPONENT_LIBRARY
                        </h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-8 [scrollbar-width:thin] [scrollbar-color:#0891b2_#000000]">
                        {Object.entries(groupedRegistry).map(([groupName, sections]) => (
                            <div key={groupName} className="flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-2 border-b border-cyan-900/30 pb-2">
                                    <p className="text-[10px] text-gray-400 tracking-widest uppercase">
                                        [{groupName}]
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <button onClick={() => scrollRail(groupName, -1)} className="text-[10px] bg-cyan-950/30 border border-cyan-900/50 w-6 h-6 flex items-center justify-center text-cyan-400 hover:bg-cyan-900 hover:text-white transition-colors">←</button>
                                        <button onClick={() => scrollRail(groupName, 1)} className="text-[10px] bg-cyan-950/30 border border-cyan-900/50 w-6 h-6 flex items-center justify-center text-cyan-400 hover:bg-cyan-900 hover:text-white transition-colors">→</button>
                                    </div>
                                </div>

                                <div
                                    ref={(element) => { railRefs.current[groupName] = element; }}
                                    className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] relative"
                                >
                                    {sections.map((section) => {
                                        const alreadyAdded = selectedIds.includes(section.id);
                                        const signage = getSignage(section);
                                        const isBrutalist = signage.tone === "brutalist";

                                        return (
                                            <article
                                                key={section.id}
                                                draggable={!alreadyAdded}
                                                onDragStart={(event) => {
                                                    if (alreadyAdded) { event.preventDefault(); return; }
                                                    writeDragData(event, { source: "registry", sectionId: section.id });
                                                }}
                                                className={`group relative p-3 w-40 shrink-0 snap-start backdrop-blur-md border transition-all duration-300 flex flex-col gap-3
                                                    ${alreadyAdded 
                                                        ? "border-gray-800 bg-gray-950/30 opacity-40 cursor-not-allowed grayscale" 
                                                        : "border-cyan-900/40 bg-black/60 hover:border-cyan-400 hover:bg-cyan-950/20 hover:shadow-[0_4px_20px_rgba(0,255,255,0.15)] hover:-translate-y-1 cursor-grab active:cursor-grabbing"
                                                    }`}
                                            >
                                                <div className={`border px-2 py-1 flex justify-center ${
                                                    isBrutalist ? "border-white bg-white text-black" : "border-cyan-900/60 bg-cyan-950/40 text-cyan-300"
                                                }`}>
                                                    <p className={`text-sm leading-none tracking-widest ${isBrutalist ? "font-black" : ""}`}>
                                                        {signage.word}
                                                    </p>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs text-white/90 font-medium leading-tight">{section.title}</p>
                                                </div>
                                                <button
                                                    onClick={() => addSection(section.id)}
                                                    disabled={alreadyAdded}
                                                    className="w-full text-[9px] border border-cyan-800/80 bg-cyan-950/40 py-1.5 text-cyan-400 disabled:border-gray-800 disabled:text-gray-600 disabled:bg-transparent hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase tracking-widest"
                                                >
                                                    {alreadyAdded ? "Deployed" : "+ Inject"}
                                                </button>
                                            </article>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* RIGHT PANEL: LIVE CANVAS */}
                <section className="flex-1 min-h-0 relative flex flex-col min-w-0 bg-[#020202]">
                    {/* Interactive Canvas Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" 
                         style={{ 
                             backgroundImage: "radial-gradient(#0ff 1px, transparent 1px)", 
                             backgroundSize: "24px 24px" 
                         }}>
                    </div>
                    <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" 
                         style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}>
                    </div>

                    <div
                        onDragOver={(event) => {
                            event.preventDefault();
                            event.dataTransfer.dropEffect = "move";
                            setCanvasDragOver(true);
                        }}
                        onDragLeave={() => setCanvasDragOver(false)}
                        onDrop={handleDropOnCanvas}
                        className={`flex-1 overflow-y-auto p-6 md:p-12 transition-all duration-500 ease-out z-10 
                            ${canvasDragOver ? "bg-cyan-900/10 scale-[0.98] ring-inset ring-2 ring-cyan-500/50 shadow-[inset_0_0_100px_rgba(0,255,255,0.1)]" : ""}`}
                    >
                        <div className="max-w-[1200px] mx-auto flex flex-col gap-6 min-h-full">
                            
                            {/* EMPTY STATE HUD */}
                            {selectedSections.length === 0 && (
                                <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-cyan-900/40 bg-cyan-950/5 py-32 px-6 text-center backdrop-blur-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite]"></div>
                                    <div className="w-20 h-20 rounded-full border border-cyan-500/30 bg-cyan-900/20 flex items-center justify-center mb-8 relative">
                                        <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></div>
                                        <span className="text-cyan-400 text-3xl font-sans font-light animate-pulse">+</span>
                                    </div>
                                    <p className="text-cyan-400 tracking-[0.3em] text-sm mb-4">AWAITING_INPUT</p>
                                    <p className="text-gray-500 font-sans text-sm mb-8 max-w-sm leading-relaxed">
                                        Drop modules here to construct the interface. The grid is active and ready for injection.
                                    </p>
                                    <div className="w-64 h-px bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent"></div>
                                </div>
                            )}

                            {/* RENDERED SECTIONS */}
                            {selectedSections.map((section, index) => {
                                const SectionComponent = section.Component;
                                const isActive = activeEditId === section.id;

                                return (
                                    <article
                                        key={section.id}
                                        className={`relative group/canvas-item min-w-0 overflow-hidden border transition-all duration-300 ease-out transform origin-top
                                            ${isActive 
                                                ? "border-cyan-400 ring-4 ring-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.1)] scale-[1.01] z-20" 
                                                : "border-cyan-900/40 hover:border-cyan-700 hover:shadow-[0_0_15px_rgba(0,255,255,0.05)] z-10"
                                            }`}
                                    >
                                        {/* SECTION HEADER BAR */}
                                        <div className="px-4 py-2 bg-[#050505] border-b border-cyan-900/40 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-30">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
                                                    <span className="text-cyan-500/50 text-[10px]">SEQ</span>
                                                    <span className="text-cyan-400 text-xs font-bold tracking-widest">{String(index + 1).padStart(2, '0')}</span>
                                                </div>
                                                <p className="text-xs tracking-widest text-gray-300">{section.title}</p>
                                                {isActive && (
                                                    <span className="flex items-center gap-1.5 text-[9px] text-cyan-300 bg-cyan-900/30 px-2 py-0.5 border border-cyan-400/30 rounded animate-pulse">
                                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> LIVE EDIT
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover/canvas-item:opacity-100 md:focus-within:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => setActiveEditId(isActive ? null : section.id)}
                                                    className={`text-[9px] uppercase tracking-widest border px-3 py-1.5 transition-colors ${
                                                        isActive 
                                                        ? "border-cyan-400 bg-cyan-900/40 text-cyan-300" 
                                                        : "border-cyan-900/60 bg-black text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                                                    }`}
                                                >
                                                    {isActive ? "✓ Save" : "✎ Edit"}
                                                </button>
                                                <button
                                                    onClick={() => removeSection(section.id)}
                                                    className="text-[9px] uppercase tracking-widest border border-red-900/40 bg-black px-3 py-1.5 text-gray-500 hover:border-red-500 hover:bg-red-950/30 hover:text-red-400 transition-colors"
                                                >
                                                    ✕ Del
                                                </button>
                                            </div>
                                        </div>

                                        {/* SECTION RENDER AREA */}
                                        <div 
                                            className="relative bg-black overflow-x-auto min-w-0 cursor-pointer" 
                                            onClick={(e) => {
                                                if(!isActive) {
                                                    e.stopPropagation();
                                                    setActiveEditId(section.id);
                                                }
                                            }}
                                        >
                                            <div className={isActive ? "" : "pointer-events-none"}>
                                                <SectionComponent
                                                    content={section.content}
                                                    editor={{
                                                        isEditing: isActive,
                                                        onFieldChange: (fieldKey, value) => updateSectionField(section.id, fieldKey, value),
                                                    }}
                                                />
                                            </div>
                                            
                                            {/* Hover Overlay for Non-Active State */}
                                            {!isActive && (
                                                <div className="absolute inset-0 bg-cyan-900/0 hover:bg-cyan-900/10 transition-colors duration-300 flex items-center justify-center">
                                                    <span className="opacity-0 group-hover/canvas-item:opacity-100 transition-opacity bg-black/80 text-cyan-400 text-xs px-4 py-2 border border-cyan-500/50 backdrop-blur tracking-widest">
                                                        CLICK TO EDIT
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
            
            {/* Tailwind Custom Animation (Required in global CSS if you want the empty state scanline) */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
            `}} />
        </main>
    );
}