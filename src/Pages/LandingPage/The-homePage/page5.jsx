import React, { useEffect, useState } from "react";
import TargetCursor from "../../../assets/TargetCursor/TargetCursor"; // Adjust path as needed

const WhyUs = () => {
    const [visible, setVisible] = useState(false);

    // Fade in content on mount
    useEffect(() => {
        setTimeout(() => setVisible(true), 200);
    }, []);

    const features = [
        {
            id: "01",
            title: "ZERO LATENCY",
            desc: "Edge-deployed network nodes ensure your builds load instantly across the globe. No buffering, just execution.",
            color: "cyan"
        },
        {
            id: "02",
            title: "MODULAR CORE",
            desc: "Swap, upgrade, and scale individual components without rewriting your entire system architecture.",
            color: "purple"
        },
        {
            id: "03",
            title: "ABSOLUTE ENCRYPTION",
            desc: "Zero-trust security protocols baked directly into the foundation. Your data never moves unshielded.",
            color: "blue"
        },
        {
            id: "04",
            title: "INFINITE SCALE",
            desc: "Auto-balancing bandwidth that expands seamlessly whether you have ten users or ten million.",
            color: "cyan"
        }
    ];

    return (
        <section
            className="relative min-h-screen overflow-hidden bg-black text-white"
            style={{ fontFamily: '"Bungee", cursive', cursor: 'none' }} // Hide default cursor fallback
        >
            {/* INJECT THE CUSTOM CURSOR */}
            <TargetCursor 
                spinDuration={2} 
                hideDefaultCursor={true} 
                parallaxOn={true} 
                hoverDuration={0.2} 
            />

            {/* ================= BACKGROUND ELEMENTS ================= */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-500 opacity-15 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

                {/* Pixel Grid */}
                <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                        backgroundSize: "8px 8px",
                    }}
                ></div>

                {/* Scanlines */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}
                ></div>
            </div>

            {/* ================= CONTENT ================= */}
            <div 
                className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:py-32 flex flex-col items-center justify-center min-h-screen"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 1s ease",
                }}
            >
                {/* HEADER */}
                <div className="text-center mb-20">
                    <p className="text-xs md:text-sm text-cyan-400 mb-4 tracking-widest animate-pulse">
                        &gt; QUERY: SYSTEM_ADVANTAGES
                    </p>
                    <h2
                        className="text-5xl md:text-7xl leading-tight uppercase"
                        style={{ textShadow: "0 0 15px rgba(0,255,255,0.4), 0 0 50px rgba(0,255,255,0.2)" }}
                    >
                        Why Choose BLCKS
                    </h2>
                    <p className="mt-6 text-sm md:text-base text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed tracking-wide">
                        We don't just host websites; we engineer digital infrastructure. Built for developers, designers, and scaling entities who refuse to compromise on speed or security.
                    </p>
                </div>

                {/* FEATURES GRID - These act as TargetCursor targets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            // The 'cursor-target' class tells TargetCursor to snap to this element
                            className={`cursor-target group relative bg-black/50 backdrop-blur-md border border-${feature.color}-900/50 p-8 md:p-10 transition-all duration-300 hover:bg-${feature.color}-900/20 hover:border-${feature.color}-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                        >
                            {/* Decorative background glow on hover */}
                            <div className={`absolute inset-0 bg-${feature.color}-500/0 transition-colors duration-300 group-hover:bg-${feature.color}-500/5`}></div>
                            
                            <div className="relative z-10">
                                <span className={`text-xs text-${feature.color}-400 tracking-[0.2em] mb-4 block`}>
                                    // SYS.NODE_{feature.id}
                                </span>
                                <h3 className="text-2xl md:text-3xl mb-4 tracking-wide text-white group-hover:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM CTA - Also a TargetCursor target */}
                <div className="mt-20">
                    <button className="cursor-target relative px-10 py-5 bg-transparent border-2 border-cyan-500 text-cyan-400 uppercase tracking-[0.2em] text-sm md:text-base transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] font-bold overflow-hidden group">
                        <span className="relative z-10">Initialize Setup _</span>
                        {/* Hover glitch effect line */}
                        <div className="absolute top-1/2 -left-full w-[200%] h-0.5 bg-white opacity-0 group-hover:opacity-50 group-hover:animate-[scan_1s_linear_infinite] pointer-events-none"></div>
                    </button>
                </div>

            </div>
            
            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-50%) rotate(45deg) translateX(-100%); }
                    100% { transform: translateY(-50%) rotate(45deg) translateX(100%); }
                }
            `}</style>
        </section>
    );
};

export default WhyUs;