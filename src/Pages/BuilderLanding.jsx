import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuilderLanding() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [userIdea, setUserIdea] = useState("");

    const categories = [
        {
            id: "portfolio",
            title: "PORTFOLIO",
            label: "Projects / Resume / Skills",
            icon: "⊡",
            description: "Showcase your work professionally",
        },
        {
            id: "startup",
            title: "STARTUP",
            label: "Landing / SaaS / Product",
            icon: "▲",
            description: "Launch your business presence",
        },
        {
            id: "ecommerce",
            title: "ECOMMERCE",
            label: "Store / Products / Offers",
            icon: "◊",
            description: "Build your online storefront",
        },
        {
            id: "creator",
            title: "CREATOR",
            label: "Blog / Brand / Writing",
            icon: "◆",
            description: "Express your creative vision",
        },
        {
            id: "gaming",
            title: "GAMING",
            label: "Community / Team / Streamer",
            icon: "▶",
            description: "Build gaming identity",
        },
        {
            id: "generic",
            title: "GENERIC",
            label: "Blank Builder / Full Freedom",
            icon: "▢",
            description: "Start with complete freedom",
        },
    ];

    const popularStarters = [
        { name: "Developer Portfolio", icon: "▬" },
        { name: "Fresher Resume Site", icon: "▬" },
        { name: "AI Startup Page", icon: "▬" },
        { name: "Minimal Business Layout", icon: "▬" },
    ];

    const systemStats = [
        { label: "TEMPLATES READY", value: "51+" },
        { label: "COMPONENTS LOADED", value: "24" },
        { label: "THEMES AVAILABLE", value: "12" },
        { label: "EXPORTS GENERATED", value: "∞" },
    ];

    const handleLaunchBuilder = () => {
        // Route to builder based on category
        if (selectedCategory === "portfolio") {
            navigate(`/builder/portfolio?idea=${encodeURIComponent(userIdea)}`);
        } else if (selectedCategory === "generic") {
            navigate(`/builder/generic?idea=${encodeURIComponent(userIdea)}`);
        } else {
            // For other categories, route to generic builder with category hint
            navigate(`/builder/generic?category=${selectedCategory}&idea=${encodeURIComponent(userIdea)}`);
        }
    };

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
                    <div className="absolute top-12 right-12 w-12 h-12 border-t-4 border-r-4 border-lime-400" />

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
                        <div className="mt-4 text-xs uppercase tracking-widest text-zinc-500 flex flex-wrap gap-3">
                            <span>Example:</span>
                            <span className="text-zinc-400 cursor-pointer hover:text-lime-400">Portfolio for placements</span>
                            <span className="text-zinc-400 cursor-pointer hover:text-lime-400">Startup landing page</span>
                            <span className="text-zinc-400 cursor-pointer hover:text-lime-400">Resume website</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MAIN SELECTION GRID ──────────────────────────────────────── */}
            <section className="relative z-10 px-6 md:px-12 py-16 border-b-4 border-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-12 text-lime-400">
                        CHOOSE TEMPLATE SYSTEM
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex flex-col items-start p-8 border-4 transition-all duration-150 ${
                                    selectedCategory === category.id
                                        ? "border-lime-400 bg-lime-400/10 shadow-[8px_8px_0px_0px_#22c55e]"
                                        : "border-white bg-black hover:-translate-y-2 hover:-translate-x-2 shadow-[6px_6px_0px_0px_#ffffff]"
                                }`}
                            >
                                {/* Icon */}
                                <div className="text-5xl font-black mb-4 text-white">
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

                                {/* Arrow indicator */}
                                <div className="mt-auto text-lg font-black text-lime-400">
                                    {selectedCategory === category.id ? "✓ SELECTED" : "→"}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Launch Button */}
                    <button
                        onClick={handleLaunchBuilder}
                        disabled={!selectedCategory}
                        className={`mt-16 px-12 py-6 border-4 font-black uppercase text-lg tracking-widest transition-all ${
                            selectedCategory
                                ? "border-lime-400 bg-lime-400 text-black hover:shadow-[8px_8px_0px_0px_#22c55e] cursor-pointer"
                                : "border-zinc-700 bg-zinc-900 text-zinc-600 cursor-not-allowed"
                        }`}
                    >
                        {selectedCategory ? "LAUNCH BUILDER →" : "SELECT A CATEGORY FIRST"}
                    </button>
                </div>
            </section>

            {/* ── POPULAR STARTERS ──────────────────────────────────────────── */}
            <section className="relative z-10 px-6 md:px-12 py-16 border-b-4 border-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-8">
                        POPULAR STARTERS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {popularStarters.map((starter, idx) => (
                            <div
                                key={idx}
                                className="border-3 border-zinc-700 bg-black p-6 hover:border-magenta-500 hover:shadow-[4px_4px_0px_0px_#ec407a] transition-all cursor-pointer group"
                            >
                                <div className="text-3xl mb-3 text-zinc-500 group-hover:text-magenta-500">
                                    {starter.icon}
                                </div>
                                <p className="text-sm font-black uppercase tracking-widest">
                                    {starter.name}
                                </p>
                            </div>
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
                            <div
                                key={idx}
                                className="border-4 border-white bg-black p-8 flex flex-col items-center text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-lime-400 mb-4">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-black uppercase tracking-widest text-zinc-500">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer info */}
                    <div className="mt-16 border-t-4 border-white pt-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-xs uppercase tracking-widest text-zinc-500 mb-6 md:mb-0">
                            SYS.BUILDER v1.0 • CREATIVE OPERATING SYSTEM
                        </div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500">
                            BRUTALIST DESIGN • NO COMPROMISES
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DECORATIVE CORNER ────────────────────────────────────────── */}
            <div className="fixed bottom-12 left-12 w-16 h-16 border-b-4 border-l-4 border-lime-400 z-10" />
        </main>
    );
}
