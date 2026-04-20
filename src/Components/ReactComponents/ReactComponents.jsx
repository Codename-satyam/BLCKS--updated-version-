import React, { useState, useMemo } from "react";
import componentsCatalog from "./componentsCatalog.json";
import { NeonGridBackground, RollingWindowBackground, HackerGrid, VoidPulse, GlitchNoise } from "./components/backgrounds";
import { TerminalHeader, GlassNeonHeader } from "./components/headers";
import { TypeGlowText, ScanlineSweep, HologramTitle, FlickerCaption, ChaoticHeader, MissionCard, UserProfileCard, GlitchText, PlasmaButton, SandboxGrid, TerminalInput, BountyBoard, BrutalistStatGrid, KillSwitch, BrutalistButton, GhostProtocolButton, GlitchButton, AlgorithmTerminal, RetroAchievement, HexNodeBadge } from "./components/text-and-animations";
import { CipherText, MechEnergyBar, OverrideModal } from "./components/cyberpunk-effects";
import "./components/animations.css";

// ─── Copy to Clipboard Hook ──────────────────────────────────────────────────
function useCopyToClipboard() {
    const [copied, setCopied] = useState(false);
    const copy = async (text) => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return { copied, copy };
}

// ─── Component Preview Renderer ──────────────────────────────────────────────
function PreviewRenderer({ componentId }) {
    const componentMap = {
        "bg-grid-neon": () => (
            <div className="relative w-full min-h-[400px] bg-black border-4 border-cyan-400 shadow-[8px_8px_0px_0px_#22d3ee] overflow-hidden">
                <NeonGridBackground className="absolute inset-0">
                    <div className="flex items-center justify-center h-full relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-lime-400 uppercase tracking-widest bg-black/80 border-4 border-lime-400 p-8 shadow-[8px_8px_0px_0px_#a3e635]">
                            GRID_ACTIVE
                        </h2>
                    </div>
                </NeonGridBackground>
            </div>
        ),
        "bg-rolling-window": () => (
            <div className="relative w-full min-h-[400px] bg-black border-4 border-fuchsia-500 shadow-[8px_8px_0px_0px_#d946ef] overflow-hidden">
                <RollingWindowBackground className="absolute inset-0">
                    <div className="flex items-center justify-center h-full relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-fuchsia-500 uppercase tracking-widest bg-black/80 border-4 border-fuchsia-500 p-8 shadow-[8px_8px_0px_0px_#d946ef]">
                            SWEEP_SEQ
                        </h2>
                    </div>
                </RollingWindowBackground>
            </div>
        ),
        "header-terminal": () => (
            <div className="w-full">
                <TerminalHeader
                    brand="SYS.NAV"
                    links={[
                        { label: "INDEX", href: "#" },
                        { label: "DATA", href: "#" },
                    ]}
                    cta="EXECUTE"
                />
            </div>
        ),
        "header-glass-neon": () => (
            <div className="w-full">
                <GlassNeonHeader
                    brand="GLASS.IO"
                    links={[
                        { label: "WORK", href: "#" },
                        { label: "CORE", href: "#" },
                    ]}
                    cta="INIT"
                />
            </div>
        ),
        "anim-typeglow": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-white">
                <TypeGlowText text="SYS.INIT()" className="text-4xl md:text-6xl font-black uppercase text-white" />
            </div>
        ),
        "anim-scanline": () => (
            <ScanlineSweep className="bg-black min-h-[400px] w-full flex items-center justify-center border-4 border-cyan-400">
                <h3 className="text-7xl font-black text-cyan-400 uppercase tracking-widest bg-black p-6 border-4 border-cyan-400 shadow-[8px_8px_0px_0px_#22d3ee]">
                    SCAN
                </h3>
            </ScanlineSweep>
        ),
        "text-hologram-title": () => (
            <div className="flex items-center justify-center min-h-[400px] w-full bg-black border-4 border-white shadow-[12px_12px_0px_0px_#fff]">
                <HologramTitle as="h2" className="text-7xl font-black uppercase tracking-tighter">
                    OVERRIDE
                </HologramTitle>
            </div>
        ),
        "text-flicker-caption": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-orange-500 shadow-[8px_8px_0px_0px_#f97316]">
                <FlickerCaption className="text-orange-500 font-black text-3xl uppercase tracking-widest">
                    [NODES_ONLINE]
                </FlickerCaption>
            </div>
        ),
        "anim-jiggyasa-splash": () => (
            <div className="flex items-center justify-center min-h-[400px] w-full bg-black border-4 border-cyan-400 shadow-[8px_8px_0px_0px_#22d3ee]">
                <ChaoticHeader />
            </div>
        ),
        "card-mission": () => (
            <div className="flex items-center justify-center min-h-[500px] w-full bg-black border-4 border-purple-500 shadow-[8px_8px_0px_0px_#a855f7] p-4">
                <MissionCard />
            </div>
        ),
        "card-user-profile": () => (
            <div className="flex items-center justify-center min-h-[400px] w-full bg-black border-4 border-lime-500 shadow-[8px_8px_0px_0px_#84cc16] p-4">
                <UserProfileCard />
            </div>
        ),
        "bg-sandbox-grid": () => (
            <SandboxGrid>
                <div className="text-white text-3xl font-black font-mono tracking-widest bg-black/50 px-6 py-2 border border-blue-500/50 backdrop-blur-sm">
                    SANDBOX_ENVIRONMENT
                </div>
            </SandboxGrid>
        ),
        "text-glitch-effect": () => (
            <div className="flex items-center justify-center min-h-[400px] w-full bg-black border-4 border-red-500 shadow-[8px_8px_0px_0px_#ef4444]">
                <GlitchText text="System Override" />
            </div>
        ),
        "btn-plasma-fill": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-lime-400 shadow-[8px_8px_0px_0px_#addc30] p-4">
                <PlasmaButton>Engage Warp</PlasmaButton>
            </div>
        ),
        "input-terminal": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-cyan-500 shadow-[8px_8px_0px_0px_#06b6d4] p-8">
                <TerminalInput label="COMMAND_INPUT" placeholder="ENTER_COMMAND_HERE" />
            </div>
        ),
        "card-bounty-board": () => (
            <div className="flex items-center justify-center min-h-[400px] w-full bg-black border-4 border-lime-400 shadow-[8px_8px_0px_0px_#addc30] p-4">
                <BountyBoard />
            </div>
        ),
        "card-stat-grid": () => (
            <div className="flex items-center justify-center min-h-[400px] w-full bg-black border-4 border-blue-500 shadow-[8px_8px_0px_0px_#3b82f6] p-4">
                <BrutalistStatGrid />
            </div>
        ),
        "toggle-kill-switch": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-red-500 shadow-[8px_8px_0px_0px_#ef4444] p-8">
                <KillSwitch />
            </div>
        ),
        "btn-brutalist": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-lime-400 shadow-[8px_8px_0px_0px_#addc30] p-4">
                <BrutalistButton>ACTIVATE_PROTOCOL</BrutalistButton>
            </div>
        ),
        "btn-ghost-protocol": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-blue-500 shadow-[8px_8px_0px_0px_#3b82f6] p-4">
                <GhostProtocolButton>INFILTRATE_SYSTEM</GhostProtocolButton>
            </div>
        ),
        "btn-glitch": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-red-500 shadow-[8px_8px_0px_0px_#ef4444] p-4">
                <GlitchButton>SYSTEM_WIPE</GlitchButton>
            </div>
        ),
        "bg-hacker-grid": () => (
            <div className="relative w-full h-[500px] bg-black border-4 border-lime-400 shadow-[8px_8px_0px_0px_#addc30] overflow-hidden">
                <HackerGrid />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center text-lime-400 font-mono text-sm opacity-80">
                        <p>[SCANNING_NETWORK...]</p>
                        <p className="text-xs mt-2">MOVE_CURSOR_TO_INTERACT</p>
                    </div>
                </div>
            </div>
        ),
        "bg-void-pulse": () => (
            <div className="relative w-full h-[500px] bg-black border-4 border-blue-500 shadow-[8px_8px_0px_0px_#3b82f6] overflow-hidden">
                <VoidPulse />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center text-blue-400 font-mono text-sm opacity-80">
                        <p>[VOID_INTERFACE_ACTIVE]</p>
                        <p className="text-xs mt-2">CLICK_TO_RIPPLE</p>
                    </div>
                </div>
            </div>
        ),
        "bg-glitch-noise": () => (
            <div className="relative w-full h-[500px] bg-black border-4 border-red-500 shadow-[8px_8px_0px_0px_#ef4444] overflow-hidden">
                <GlitchNoise />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center text-red-400 font-mono text-sm opacity-80">
                        <p>[SIGNAL_DISTORTION]</p>
                        <p className="text-xs mt-2">MOVE_TO_INTENSIFY</p>
                    </div>
                </div>
            </div>
        ),
        "anim-cipher-text": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-green-500 shadow-[8px_8px_0px_0px_#22c55e] p-8">
                <div className="text-center">
                    <CipherText text="ENCRYPTION_COMPLETE" delay={200} />
                    <p className="text-xs text-zinc-500 mt-8 font-mono">Character reveal glitch effect</p>
                </div>
            </div>
        ),
        "ui-mech-energy-bar": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-blue-500 shadow-[8px_8px_0px_0px_#3b82f6] p-8">
                <MechEnergyBar value={72} max={100} label="REACTOR_CORE" />
            </div>
        ),
        "modal-override": () => {
            const [isOpen, setIsOpen] = React.useState(true);
            return (
                <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-white shadow-[8px_8px_0px_0px_#fff] p-8">
                    <OverrideModal 
                        isOpen={isOpen} 
                        onClose={() => setIsOpen(false)}
                        title="CRITICAL WARNING"
                    >
                        This action cannot be undone. All data will be permanently deleted from the system. Proceed with caution.
                    </OverrideModal>
                    {!isOpen && (
                        <button 
                            onClick={() => setIsOpen(true)}
                            className="px-8 py-4 bg-red-500 text-black font-black uppercase tracking-widest border-4 border-red-500 hover:bg-black hover:text-red-500 transition-colors"
                        >
                            Reopen Modal
                        </button>
                    )}
                </div>
            );
        },
        "anim-algorithm-terminal": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-blue-500 shadow-[8px_8px_0px_0px_#3b82f6] p-4">
                <AlgorithmTerminal />
            </div>
        ),
        "badge-retro-achievement": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-yellow-500 shadow-[8px_8px_0px_0px_#eab308] p-4">
                <RetroAchievement />
            </div>
        ),
        "ui-hex-node-badge": () => (
            <div className="flex items-center justify-center min-h-[300px] w-full bg-black border-4 border-cyan-500 shadow-[8px_8px_0px_0px_#06b6d4] p-4">
                <HexNodeBadge />
            </div>
        ),
    };

    const renderer = componentMap[componentId];
    if (!renderer) {
        return (
            <div className="flex items-center justify-center min-h-[400px] w-full border-4 border-dashed border-red-500 bg-red-500/10 text-red-500 font-black text-2xl uppercase tracking-widest">
                ERR: COMP_NOT_FOUND
            </div>
        );
    }

    return renderer();
}

// ─── Left Sidebar Navigation ─────────────────────────────────────────────────
function Sidebar({ activeItem, setActiveItem }) {
    const groupedByCategory = componentsCatalog.reduce((acc, comp) => {
        if (!acc[comp.category]) acc[comp.category] = [];
        acc[comp.category].push(comp);
        return acc;
    }, {});

    const categories = Object.entries(groupedByCategory).map(([id, items]) => ({
        id,
        label: id.toUpperCase(),
        items
    }));

    return (
        <aside className="w-[320px] shrink-0 border-r-4 border-white bg-black overflow-y-auto hidden lg:block pb-10 sticky top-[72px] max-h-[calc(100vh-72px)] [scrollbar-width:none]">
            <div className="p-6">
                <div className="mb-8">
                    <button
                        onClick={() => setActiveItem(null)}
                        className={`w-full text-left px-4 py-3 text-sm font-black uppercase tracking-widest transition-all border-4 
                            ${!activeItem 
                                ? "border-lime-400 bg-lime-400 text-black shadow-[4px_4px_0px_0px_white] -translate-y-1" 
                                : "border-zinc-800 text-white hover:border-white hover:shadow-[4px_4px_0px_0px_white] hover:-translate-y-1"}`}
                    >
                        [ OVERVIEW ]
                    </button>
                </div>

                {categories.map((cat) => (
                    <div key={cat.id} className="mb-8">
                        <h4 className="mb-3 px-2 text-xs font-black uppercase tracking-widest text-zinc-500 border-b-2 border-zinc-800 pb-2">
                            {cat.label}
                        </h4>
                        <ul className="space-y-2 mt-4">
                            {cat.items.map((item) => {
                                const isActive = activeItem?.id === item.id;
                                return (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => setActiveItem(item)}
                                            className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all border-2
                                                ${isActive 
                                                    ? "border-fuchsia-500 bg-fuchsia-500/20 text-fuchsia-500 shadow-[4px_4px_0px_0px_#d946ef] -translate-y-1 translate-x-1" 
                                                    : "border-transparent text-zinc-400 hover:border-white hover:text-white hover:-translate-y-1"}`}
                                        >
                                            {isActive ? "▶ " : "■ "}{item.name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}

// ─── Top Navbar ──────────────────────────────────────────────────────────────
function TopNav() {
    return (
        <header className="sticky top-0 z-40 w-full border-b-4 border-white bg-black">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 border-4 border-white bg-lime-400 shadow-[4px_4px_0px_0px_white]">
                        <span className="text-black font-black text-xl">/</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-black text-xl uppercase tracking-widest leading-none">LIB.UI</span>
                        <span className="text-xs text-lime-400 font-bold tracking-widest uppercase mt-1">Modules</span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-black uppercase tracking-widest text-white">
                    <a href="#" className="border-b-4 border-transparent hover:border-fuchsia-500 pb-1 transition-colors">DOCS</a>
                    <a href="#" className="border-b-4 border-transparent hover:border-lime-400 pb-1 transition-colors">SHOWCASE</a>
                    <a href="#" className="border-b-4 border-transparent hover:border-cyan-400 pb-1 transition-colors">REPO</a>
                </nav>
            </div>
        </header>
    );
}

// ─── Component Grid Card (Index View) ────────────────────────────────────────
function MinimalCard({ item, onClick }) {
    return (
        <div 
            onClick={() => onClick(item)}
            className="group cursor-pointer border-4 border-zinc-800 bg-black overflow-hidden hover:border-lime-400 transition-all flex flex-col hover:shadow-[8px_8px_0px_0px_#a3e635] hover:-translate-y-2 hover:-translate-x-2"
        >
            <div className="p-4 border-b-4 border-inherit bg-zinc-900 group-hover:bg-lime-400 transition-colors">
                <span className="text-black font-black text-xs uppercase tracking-widest bg-white px-2 py-1 shadow-[2px_2px_0px_0px_#000]">
                    {item.category}
                </span>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2">{item.name}</h3>
                <p className="text-xs font-bold text-zinc-500 uppercase flex-1 leading-relaxed">{item.description}</p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-black px-2 py-1 border-2 border-zinc-700 text-zinc-400 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Component Detail View ───────────────────────────────────────────────────
function DetailView({ item, onBack }) {
    const [tab, setTab] = useState("preview");
    const { copied, copy } = useCopyToClipboard();

    return (
        <div className="w-full flex flex-col xl:flex-row gap-8 animate-in fade-in duration-300">
            
            {/* Left/Center Column: Main Content */}
            <div className="flex-1 min-w-0 flex flex-col">
                
                {/* Component Title */}
                <div className="mb-8 border-b-4 border-zinc-800 pb-6">
                    <div className="flex items-start gap-4 mb-4">
                        <button
                            onClick={onBack}
                            className="p-2 border-4 border-zinc-800 text-zinc-500 hover:border-white hover:text-white hover:shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 transition-all flex-shrink-0 mt-1"
                            title="Back to library"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                                <path d="M15 18l-6-6 6-6"></path>
                            </svg>
                        </button>
                        <div className="flex-1">
                            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">{item.name}</h1>
                            <p className="text-zinc-400 font-bold uppercase text-sm md:text-base leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                </div>

                {/* Toolbar (Preview/Code toggles & Copy actions) */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setTab("preview")}
                            className={`px-5 py-2 text-xs font-black uppercase tracking-widest border-4 transition-all
                                ${tab === "preview" 
                                    ? "border-white bg-white text-black shadow-[4px_4px_0px_0px_#fff] -translate-y-1" 
                                    : "border-zinc-800 text-zinc-500 hover:border-white hover:text-white"
                                }`}
                        >
                            [ PREVIEW ]
                        </button>
                        <button 
                            onClick={() => setTab("code")}
                            className={`px-5 py-2 text-xs font-black uppercase tracking-widest border-4 transition-all
                                ${tab === "code" 
                                    ? "border-white bg-white text-black shadow-[4px_4px_0px_0px_#fff] -translate-y-1" 
                                    : "border-zinc-800 text-zinc-500 hover:border-white hover:text-white"
                                }`}
                        >
                            [ CODE ]
                        </button>
                    </div>

                    <div className="flex gap-3">
                        <button className="p-2 border-4 border-zinc-800 text-zinc-500 hover:border-fuchsia-500 hover:text-fuchsia-500 hover:shadow-[4px_4px_0px_0px_#d946ef] hover:-translate-y-1 transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                        <button 
                            onClick={() => copy(`${item.import}\n\n${item.source}\n\n// Usage:\n${item.usage}`)}
                            className="px-4 py-2 border-4 border-zinc-800 text-white font-black uppercase tracking-widest hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-[4px_4px_0px_0px_#a3e635] hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            {copied ? "COPIED ✓" : "COPY PROMPT"}
                        </button>
                    </div>
                </div>

                {/* Large Preview / Code Area */}
                <div className="border-4 border-white bg-black shadow-[12px_12px_0px_0px_white] min-h-[500px] flex flex-col relative overflow-hidden mb-12">
                    {tab === "preview" && (
                        <div className="flex-1 w-full h-full flex items-center justify-center relative p-8">
                            <PreviewRenderer componentId={item.id} />
                        </div>
                    )}

                    {tab === "code" && (
                        <div className="flex-1 w-full p-6 overflow-hidden flex flex-col bg-zinc-950">
                            <div className="flex justify-between items-center mb-4 border-b-4 border-zinc-800 pb-4">
                                <span className="font-black text-white uppercase tracking-widest">SOURCE.TSX</span>
                                <button onClick={() => copy(item.source)} className="text-xs font-black text-lime-400 border-2 border-lime-400 px-3 py-1 hover:bg-lime-400 hover:text-black uppercase">
                                    {copied ? "✓" : "COPY"}
                                </button>
                            </div>
                            <pre className="text-xs md:text-sm text-zinc-400 font-mono overflow-auto [scrollbar-width:none] flex-1">
                                <code>{item.source}</code>
                            </pre>
                        </div>
                    )}
                </div>

                {/* Customize / Props Section (Below Preview) */}
                <div className="border-t-4 border-zinc-800 pt-12">
                    <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8">
                        CUSTOMIZE
                    </h2>
                    {item.props && item.props.length > 0 ? (
                        <div className="overflow-x-auto border-4 border-zinc-800 p-1 bg-black">
                            <table className="w-full text-left font-mono text-sm">
                                <thead>
                                    <tr className="border-b-4 border-zinc-800 bg-zinc-900">
                                        <th className="px-4 py-3 text-white uppercase">PROP</th>
                                        <th className="px-4 py-3 text-white uppercase">TYPE</th>
                                        <th className="px-4 py-3 text-white uppercase hidden md:table-cell">DEFAULT</th>
                                        <th className="px-4 py-3 text-white uppercase">DESC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.props.map((prop, idx) => (
                                        <tr key={idx} className="border-b-2 border-zinc-900 hover:bg-zinc-900 transition-colors">
                                            <td className="px-4 py-4 text-lime-400 font-black">{prop.property}</td>
                                            <td className="px-4 py-4 text-fuchsia-500 font-bold">{prop.type}</td>
                                            <td className="px-4 py-4 text-zinc-500 font-bold hidden md:table-cell">{prop.default}</td>
                                            <td className="px-4 py-4 text-zinc-400 text-xs uppercase">{prop.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="border-4 border-zinc-800 p-8 bg-zinc-900 text-center">
                            <span className="text-zinc-500 font-black uppercase tracking-widest">SYS.NO_PROPS_AVAILABLE</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: Sidebar (Promo & Sponsors) */}
            <div className="w-full xl:w-[360px] shrink-0 flex flex-col gap-8">
                
                {/* PRO Promo Box */}
                <div className="border-4 border-fuchsia-500 bg-black p-6 shadow-[8px_8px_0px_0px_#d946ef] flex flex-col relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl pointer-events-none" />
                    
                    <span className="bg-fuchsia-500 text-black font-black px-2 py-1 text-xs uppercase tracking-widest mb-4 self-start">
                        PRO_TIER
                    </span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 leading-none">
                        GET REACT BITS PRO
                    </h3>
                    <p className="text-xs font-bold text-zinc-400 uppercase mb-8 leading-relaxed">
                        85+ COMPONENTS, 100+ BLOCKS & 5 TEMPLATES TO SHIP MEMORABLE PRODUCTS FASTER.
                    </p>
                    <button className="w-full bg-fuchsia-500 text-black font-black uppercase tracking-widest py-4 border-4 border-fuchsia-500 hover:bg-black hover:text-fuchsia-500 transition-colors shadow-[4px_4px_0px_0px_black] hover:shadow-[4px_4px_0px_0px_white]">
                        EXPLORE PRO →
                    </button>
                </div>

                {/* Sponsors / Dependencies Box */}
                <div className="border-4 border-zinc-800 bg-black p-6">
                    <div className="flex justify-between items-end mb-6 border-b-4 border-zinc-800 pb-2">
                        <h3 className="text-sm font-black text-white uppercase tracking-widest">SPONSORS</h3>
                        <a href="#" className="text-[10px] font-bold text-zinc-500 hover:text-lime-400 uppercase transition-colors">BECOME A SPONSOR ↗</a>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">DIAMOND</span>
                        
                        <div className="border-2 border-zinc-700 p-4 hover:border-lime-400 transition-colors cursor-pointer group flex items-center gap-4 bg-zinc-900">
                            <div className="w-8 h-8 bg-zinc-800 border-2 border-zinc-600 flex items-center justify-center group-hover:border-lime-400 transition-colors">
                                <span className="text-white font-black text-xs">S</span>
                            </div>
                            <div>
                                <p className="text-sm font-black text-white uppercase group-hover:text-lime-400 transition-colors">Shadcnblocks.com</p>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase">2000+ extra Shadcn UI blocks</p>
                            </div>
                        </div>

                        <div className="border-2 border-zinc-700 p-4 hover:border-lime-400 transition-colors cursor-pointer group flex items-center gap-4 bg-zinc-900">
                            <div className="w-8 h-8 bg-zinc-800 border-2 border-zinc-600 flex items-center justify-center group-hover:border-lime-400 transition-colors">
                                <span className="text-white font-black text-xs">✦</span>
                            </div>
                            <div>
                                <p className="text-sm font-black text-white uppercase group-hover:text-lime-400 transition-colors">shadcnstudio.com</p>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase">shadcn blocks & templates</p>
                            </div>
                        </div>

                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mt-4">PLATINUM</span>
                        <div className="border-2 border-zinc-700 p-4 hover:border-fuchsia-500 transition-colors cursor-pointer group flex justify-center bg-zinc-900">
                            <span className="text-xl font-black text-white group-hover:text-fuchsia-500 uppercase tracking-tighter">TAILARK</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// ─── Main Application Layout ─────────────────────────────────────────────────
export default function ShowcaseApp() {
    const [activeItem, setActiveItem] = useState(null);
    const [search, setSearch] = useState("");

    const filteredComponents = useMemo(() => {
        if (!search) return componentsCatalog;
        return componentsCatalog.filter(c => 
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.category.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div className="min-h-screen bg-black text-white font-mono flex flex-col overflow-hidden selection:bg-white selection:text-black">
            
            {/* Brutalist Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
                style={{ 
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", 
                    backgroundSize: "40px 40px" 
                }} 
            />

            <TopNav />
            
            <div className="flex flex-1 overflow-hidden relative z-10 w-full max-w-[1920px] mx-auto">
                {!activeItem && <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />}
                
                <main className="flex-1 overflow-y-auto p-6 lg:p-12 [scrollbar-width:none]">
                    <div className="max-w-[1600px] mx-auto">
                        {!activeItem ? (
                            <>
                                {/* Search Header */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-4 border-white pb-6">
                                    <div>
                                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2">COMPONENTS</h1>
                                        <p className="text-lime-400 font-black uppercase tracking-widest border-2 border-lime-400 inline-block px-3 py-1 bg-black">
                                            {filteredComponents.length} MODULES
                                        </p>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="SEARCH..." 
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="bg-black border-4 border-white px-4 py-3 text-lg font-black uppercase tracking-widest focus:border-fuchsia-500 outline-none w-full md:w-80 shadow-[6px_6px_0px_0px_white] focus:shadow-[6px_6px_0px_0px_#d946ef] transition-all placeholder:text-zinc-600"
                                    />
                                </div>

                                {/* Grid */}
                                {filteredComponents.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                        {filteredComponents.map(item => (
                                            <MinimalCard 
                                                key={item.id} 
                                                item={item} 
                                                onClick={setActiveItem}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="border-4 border-dashed border-red-500 bg-black p-12 text-center">
                                        <p className="text-3xl font-black text-red-500 uppercase tracking-widest">NULL_QUERY</p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <DetailView item={activeItem} onBack={() => setActiveItem(null)} />
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}