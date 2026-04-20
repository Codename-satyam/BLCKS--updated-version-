import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTemplate, getSavedTemplate, getAllSavedTemplates } from "../../services/templateService";

export default function BuilderLanding() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [userIdea, setUserIdea] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredStat, setHoveredStat] = useState(null);

    const categories = [
        {
            id: "portfolio",
            title: "PORTFOLIO",
            label: "Projects / Resume / Skills",
            icon: "⊡",
            description: "Showcase your work professionally",
            tips: ["Project galleries", "Skills showcase", "Case studies"],
        },
        {
            id: "startup",
            title: "STARTUP",
            label: "Landing / SaaS / Product",
            icon: "▲",
            description: "Launch your business presence",
            tips: ["Value proposition", "Feature highlights", "CTA sections"],
        },
        {
            id: "ecommerce",
            title: "ECOMMERCE",
            label: "Store / Products / Offers",
            icon: "◊",
            description: "Build your online storefront",
            tips: ["Product galleries", "Cart integration", "Pricing tiers"],
        },
        {
            id: "creator",
            title: "CREATOR",
            label: "Blog / Brand / Writing",
            icon: "◆",
            description: "Express your creative vision",
            tips: ["Blog sections", "Social links", "Newsletter signup"],
        },
        {
            id: "gaming",
            title: "GAMING",
            label: "Community / Team / Streamer",
            icon: "▶",
            description: "Build gaming identity",
            tips: ["Team profiles", "Stream schedule", "Community hub"],
        },
        {
            id: "generic",
            title: "GENERIC",
            label: "Blank Builder / Full Freedom",
            icon: "▢",
            description: "Start with complete freedom",
            tips: ["Custom layouts", "All components", "Full control"],
        },
    ];

    const popularStarters = [
        { name: "Developer Portfolio", category: "portfolio", idea: "Showcase my development projects and skills", icon: "▬" },
        { name: "Fresher Resume Site", category: "portfolio", idea: "Create a digital resume for job applications", icon: "▬" },
        { name: "AI Startup Page", category: "startup", idea: "Launch page for AI SaaS product", icon: "▬" },
        { name: "Minimal Business Layout", category: "startup", idea: "Simple business landing page", icon: "▬" },
    ];

    const systemStats = [
        { label: "TEMPLATES READY", value: "51+", stat: "Total pre-built components" },
        { label: "COMPONENTS LOADED", value: "24", stat: "New variants available" },
        { label: "THEMES AVAILABLE", value: "12", stat: "Color & style options" },
        { label: "EXPORTS GENERATED", value: "∞", stat: "Possible combinations" },
    ];

    const exampleIdeas = [
        "Portfolio for placements",
        "Startup landing page",
        "Resume website",
        "Gaming community hub",
    ];

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.ctrlKey && e.key === "Enter" && selectedCategory) {
                handleLaunchBuilder();
            }
            // Number keys to select category
            const num = parseInt(e.key);
            if (num >= 1 && num <= 6) {
                setSelectedCategory(categories[num - 1].id);
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [selectedCategory]);

    const handleLaunchBuilder = async () => {
        setIsLoading(true);
        // Small delay for feedback
        await new Promise(r => setTimeout(r, 300));
        
        const template = getTemplate(selectedCategory);
        const templateState = {
            templateId: selectedCategory,
            template: template,
            idea: userIdea
        };
        
        if (selectedCategory === "portfolio") {
            navigate(`/builder/portfolio?idea=${encodeURIComponent(userIdea)}`, { state: templateState });
        } else if (selectedCategory === "generic") {
            navigate(`/builder/generic?idea=${encodeURIComponent(userIdea)}`, { state: templateState });
        } else {
            navigate(`/builder/generic?category=${selectedCategory}&idea=${encodeURIComponent(userIdea)}`, { state: templateState });
        }
    };

    const handleLoadSavedTemplate = async (templateId) => {
        setIsLoading(true);
        await new Promise(r => setTimeout(r, 300));
        
        const savedTemplate = getSavedTemplate(templateId);
        if (!savedTemplate) {
            setIsLoading(false);
            return;
        }

        const templateState = {
            templateId: templateId,
            template: savedTemplate,
            savedContent: savedTemplate.sectionContent,
            designSettings: savedTemplate.designSettings,
            isSavedTemplate: true,
            idea: `Using template: ${savedTemplate.name}`
        };
        
        navigate(`/builder/generic?template=${templateId}`, { state: templateState });
    };

    const handleQuickStart = (starter) => {
        setSelectedCategory(starter.category);
        setUserIdea(starter.idea);
        
        const template = getTemplate(starter.category);
        const templateState = {
            templateId: starter.category,
            template: template,
            idea: starter.idea
        };
        
        setTimeout(() => {
            if (starter.category === "portfolio") {
                navigate(`/builder/portfolio?idea=${encodeURIComponent(starter.idea)}`, { state: templateState });
            } else {
                navigate(`/builder/generic?category=${starter.category}&idea=${encodeURIComponent(starter.idea)}`, { state: templateState });
            }
        }, 150);
    };

    const handleExampleClick = (example) => {
        setUserIdea(example);
    };

    const selectedCategoryData = categories.find(c => c.id === selectedCategory);

    return (
        <main className="min-h-screen bg-black text-white font-mono selection:bg-lime-400 selection:text-black overflow-hidden">
            {/* ── GRID BACKGROUND ────────────────────────────────────────────── */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-5"
                style={{ 
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", 
                    backgroundSize: "48px 48px" 
                }} 
            />

            {/* ── HERO SECTION ──────────────────────────────────────────────── */}
            <section className="relative z-10 px-6 md:px-12 pt-20 pb-16 border-b-4 border-white">
                <div className="max-w-7xl mx-auto">
                    {/* Decorative corner */}
                    <div className="absolute top-12 right-12 w-12 h-12 border-t-4 border-r-4 border-lime-400 animate-pulse" />

                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                        SELECT YOUR<br />
                        <span className="text-lime-400">BUILD GOAL</span>
                    </h1>

                    <p className="text-lg md:text-xl uppercase tracking-widest text-zinc-400 mb-12 max-w-2xl">
                        Choose a direction. Launch the correct system instantly.
                    </p>

                    {/* Idea Input Field */}
                    <div className="max-w-2xl">
                        <input
                            type="text"
                            placeholder="DESCRIBE YOUR IDEA..."
                            value={userIdea}
                            onChange={(e) => setUserIdea(e.target.value)}
                            className="w-full bg-black border-4 border-white text-white placeholder:text-zinc-600 text-sm font-black px-6 py-4 outline-none focus:border-lime-400 focus:shadow-[8px_8px_0px_0px_#22c55e] transition-all uppercase tracking-widest"
                        />
                        <div className="mt-4 text-xs uppercase tracking-widest text-zinc-500 flex flex-wrap gap-2">
                            <span>Quick ideas:</span>
                            {exampleIdeas.map((example, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleExampleClick(example)}
                                    className="text-zinc-400 cursor-pointer hover:text-lime-400 hover:underline transition-colors"
                                >
                                    {example}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MAIN SELECTION GRID ──────────────────────────────────────── */}
            <section className="relative z-10 px-6 md:px-12 py-16 border-b-4 border-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-baseline justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-lime-400">
                            CHOOSE TEMPLATE SYSTEM
                        </h2>
                        <span className="text-xs uppercase tracking-widest text-zinc-500">Use 1-6 keys to select</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, idx) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex flex-col items-start p-8 border-4 transition-all duration-150 group relative overflow-hidden ${
                                    selectedCategory === category.id
                                        ? "border-lime-400 bg-lime-400/10 shadow-[8px_8px_0px_0px_#22c55e]"
                                        : "border-white bg-black hover:-translate-y-2 hover:-translate-x-2 shadow-[6px_6px_0px_0px_#ffffff]"
                                }`}
                            >
                                {/* Keyboard shortcut indicator */}
                                <div className="absolute top-3 right-3 text-xs font-black text-zinc-600 group-hover:text-lime-400 transition-colors">
                                    [{idx + 1}]
                                </div>

                                {/* Icon */}
                                <div className={`text-5xl font-black mb-4 text-white transition-transform ${selectedCategory === category.id ? "scale-110" : ""}`}>
                                    {category.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-black uppercase tracking-widest mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
                                    {category.label}
                                </p>
                                <p className="text-sm text-zinc-500 mb-6">
                                    {category.description}
                                </p>

                                {/* Tips - Show when selected */}
                                {selectedCategory === category.id && (
                                    <div className="mb-4 pb-4 border-t-2 border-lime-400/50 w-full pt-3">
                                        <p className="text-xs uppercase tracking-widest text-lime-400 font-black mb-2">Included:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {category.tips.map((tip, i) => (
                                                <span key={i} className="text-xs bg-lime-400/20 text-lime-300 px-2 py-1 border border-lime-400/50">
                                                    {tip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Arrow indicator */}
                                <div className="mt-auto text-lg font-black text-lime-400">
                                    {selectedCategory === category.id ? "✓ SELECTED" : "→"}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Launch Button with Keyboard Hint */}
                    <button
                        onClick={handleLaunchBuilder}
                        disabled={!selectedCategory || isLoading}
                        className={`mt-16 px-12 py-6 border-4 font-black uppercase text-lg tracking-widest transition-all flex items-center justify-center gap-3 ${
                            selectedCategory && !isLoading
                                ? "border-lime-400 bg-lime-400 text-black hover:shadow-[8px_8px_0px_0px_#22c55e] cursor-pointer"
                                : "border-zinc-700 bg-zinc-900 text-zinc-600 cursor-not-allowed"
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <span className="inline-block animate-spin">⟳</span>
                                INITIALIZING...
                            </>
                        ) : (
                            <>
                                {selectedCategory ? "LAUNCH BUILDER →" : "SELECT A CATEGORY FIRST"}
                                {selectedCategory && <span className="text-xs opacity-70">(Ctrl+Enter)</span>}
                            </>
                        )}
                    </button>
                </div>
            </section>

            {/* ── QUICK START SECTION ──────────────────────────────────────── */}
            <section className="relative z-10 px-6 md:px-12 py-16 border-b-4 border-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-8">
                        ⚡ QUICK START TEMPLATES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {popularStarters.map((starter, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleQuickStart(starter)}
                                className="border-4 border-white bg-black hover:border-magenta-500 hover:bg-magenta-500/5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_#ec407a] transition-all cursor-pointer group p-6 flex flex-col"
                            >
                                <div className="text-4xl mb-4 text-zinc-400 group-hover:text-magenta-500 transition-colors">
                                    {starter.icon}
                                </div>
                                <p className="text-sm font-black uppercase tracking-widest mb-2">
                                    {starter.name}
                                </p>
                                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    {starter.idea}
                                </p>
                                <div className="mt-auto pt-3 text-xs text-zinc-600 group-hover:text-magenta-400 font-black">
                                    INSTANT SETUP →
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRE-SAVED COMPLETE TEMPLATES ──────────────────────────────── */}
            <section className="relative z-10 px-6 md:px-12 py-16 border-b-4 border-white bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-2">
                                📦 PRE-SAVED TEMPLATES
                            </h2>
                            <p className="text-xs uppercase tracking-widest text-zinc-500">Complete projects with all content pre-populated - ready to customize</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {getAllSavedTemplates().map((savedTemplate) => (
                            <button
                                key={savedTemplate.id}
                                onClick={() => handleLoadSavedTemplate(savedTemplate.id)}
                                className="border-4 border-cyan-400 bg-black hover:bg-cyan-400/10 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0px_0px_#06b6d4] transition-all cursor-pointer group p-6 flex flex-col relative overflow-hidden"
                            >
                                {/* Category badge */}
                                <div className="absolute top-3 right-3 bg-cyan-400/20 border border-cyan-400/50 px-2 py-1 text-xs font-black uppercase tracking-widest text-cyan-300 rounded">
                                    {savedTemplate.category}
                                </div>

                                {/* Icon - Category based */}
                                <div className="text-5xl mb-4 text-cyan-400 transition-transform group-hover:scale-110">
                                    {savedTemplate.category === "portfolio" && "⊡"}
                                    {savedTemplate.category === "startup" && "▲"}
                                    {savedTemplate.category === "gaming" && "▶"}
                                    {savedTemplate.category === "ecommerce" && "◊"}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-black uppercase tracking-wider mb-2">
                                    {savedTemplate.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 mb-4 flex-grow">
                                    {savedTemplate.description}
                                </p>

                                {/* Sections info */}
                                <div className="border-t border-cyan-400/30 pt-3 mb-4">
                                    <p className="text-xs uppercase tracking-widest text-cyan-300/70 mb-2">
                                        {savedTemplate.sections.length} sections included:
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {savedTemplate.sections.slice(0, 3).map((section, idx) => (
                                            <span key={idx} className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 border border-cyan-400/30 rounded">
                                                {section.replace(/[-_]/g, ' ')}
                                            </span>
                                        ))}
                                        {savedTemplate.sections.length > 3 && (
                                            <span className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 border border-cyan-400/30 rounded">
                                                +{savedTemplate.sections.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Load button */}
                                <div className="text-xs font-black text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                    LOAD TEMPLATE →
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SYSTEM DATA STATS ────────────────────────────────────────── */}
            <section className="relative z-10 px-6 md:px-12 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-12">
                        SYSTEM DATA
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {systemStats.map((stat, idx) => (
                            <button
                                key={idx}
                                onMouseEnter={() => setHoveredStat(idx)}
                                onMouseLeave={() => setHoveredStat(null)}
                                className={`border-4 border-white bg-black p-8 flex flex-col items-center text-center transition-all ${
                                    hoveredStat === idx
                                        ? "border-lime-400 bg-lime-400/10 shadow-[6px_6px_0px_0px_#22c55e] -translate-y-2"
                                        : ""
                                }`}
                            >
                                <div className={`text-4xl md:text-5xl font-black mb-4 transition-colors ${
                                    hoveredStat === idx ? "text-lime-400" : "text-lime-400"
                                }`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
                                    {stat.label}
                                </div>
                                {hoveredStat === idx && (
                                    <div className="text-xs text-zinc-400 mt-2 pt-2 border-t border-zinc-700">
                                        {stat.stat}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Footer info */}
                    <div className="mt-16 border-t-4 border-white pt-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-xs uppercase tracking-widest text-zinc-500 mb-6 md:mb-0">
                            SYS.BUILDER v1.0 • CREATIVE OPERATING SYSTEM
                        </div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500 flex gap-4">
                            <span>Keyboard: 1-6 to select | Ctrl+Enter to launch</span>
                            <span>•</span>
                            <span>BRUTALIST DESIGN • NO COMPROMISES</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DECORATIVE CORNER ────────────────────────────────────────── */}
            <div className="fixed bottom-12 left-12 w-16 h-16 border-b-4 border-l-4 border-lime-400 z-10 animate-pulse" />
        </main>
    );
}
