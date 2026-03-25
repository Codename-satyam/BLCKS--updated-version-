import { useEffect, useState } from "react";

// Using placeholder strings; replace with your actual import paths
import profile0 from "../../assets/Images/About/10.png";
import profile1 from "../../assets/Images/About/11.png";
import profile2 from "../../assets/Images/About/12.png";
import profile3 from "../../assets/Images/About/13.png";
import profile4 from "../../assets/Images/About/14.png";
import profile5 from "../../assets/Images/About/15.png";

const images = [
    profile0,
    profile1,
    profile2,
    profile3,
    profile4,
    profile5
];

function About() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    // Initial load fade-in
    useEffect(() => {
        setTimeout(() => setVisible(true), 200);
    }, []);

    // Carousel interval
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            className="relative min-h-screen bg-black text-white flex items-center justify-center py-24 px-5 md:px-10 overflow-hidden"
            style={{ fontFamily: '"Bungee", cursive' }}
        >
            {/* ================= BACKGROUND ELEMENTS ================= */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Glowing Blobs */}
                <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-600 opacity-10 blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-600 opacity-10 blur-[150px]" style={{ animationDelay: "1s" }}></div>
                
                {/* Pixel Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                ></div>

                {/* Scanlines */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}
                ></div>
            </div>
            {/* ======================================================= */}

            <div 
                className={`relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                
                {/* LEFT: IMAGE CAROUSEL HUD */}
                <div className="relative group mx-auto w-full max-w-md lg:max-w-full">
                    {/* Decorative Terminal Frame */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-30 blur-md group-hover:opacity-50 transition duration-500"></div>
                    
                    <div className="relative bg-black/80 border border-cyan-900/60 p-4 shadow-[0_0_30px_rgba(0,255,255,0.1)] backdrop-blur-sm">
                        
                        {/* Status Bar */}
                        <div className="flex justify-between items-center mb-4 border-b border-cyan-900/40 pb-2">
                            <span className="text-[10px] text-cyan-500 tracking-widest uppercase">IMG_STREAM // 0{index + 1}.PNG</span>
                            <div className="flex gap-1">
                                {images.map((_, i) => (
                                    <div key={i} className={`h-1.5 w-4 transition-all duration-300 ${i === index ? 'bg-cyan-400 shadow-[0_0_8px_#00ffff]' : 'bg-gray-800'}`}></div>
                                ))}
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-950 border border-cyan-950">
                            {/* Inner Scanline Overlay */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] z-10 pointer-events-none mix-blend-overlay"></div>
                            
                            {/* By applying the key prop, React forces a re-render, triggering the CSS animation every interval */}
                            <img 
                                key={index}
                                src={images[index]} 
                                alt={`Profile of Satyam Anand - ${index}`} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale-[20%] group-hover:grayscale-0 animate-image-swap"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT: BIO CONTENT */}
                <div className="flex flex-col justify-center text-left">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]"></div>
                        <p className="text-xs md:text-sm text-purple-400 tracking-[0.2em]">
                            &gt; SYS.USER_PROFILE
                        </p>
                    </div>

                    <h2 
                        className="text-4xl md:text-6xl mb-8 leading-tight"
                        style={{ textShadow: "0 0 15px rgba(0,255,255,0.4), 0 0 40px rgba(0,255,255,0.2)" }}
                    >
                        Satyam Anand
                    </h2>
                    
                    <div className="space-y-6 text-sm md:text-base text-gray-400 font-sans leading-relaxed tracking-wide mb-10 pl-4 border-l-2 border-cyan-900/50">
                        <p>
                            Hello! I'm a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in <span className="text-cyan-300 font-semibold tracking-normal">JavaScript, React, and CSS</span>, I strive to build user-friendly interfaces that provide seamless experiences across all devices.
                        </p>
                        <p>
                            When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and honing my skills through continuous learning.
                        </p>
                    </div>

                    {/* Terminal "Skills" Output block */}
                    <div className="bg-cyan-950/20 border border-cyan-900/50 p-4 max-w-sm">
                        <p className="text-[10px] text-cyan-500 tracking-widest mb-3 uppercase">Loaded_Modules:</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-[10px] tracking-wider border border-cyan-500/40 text-cyan-300 bg-cyan-900/20">REACT.JS</span>
                            <span className="px-2 py-1 text-[10px] tracking-wider border border-purple-500/40 text-purple-300 bg-purple-900/20">JAVASCRIPT_ES6</span>
                            <span className="px-2 py-1 text-[10px] tracking-wider border border-blue-500/40 text-blue-300 bg-blue-900/20">CSS/TAILWIND</span>
                            <span className="px-2 py-1 text-[10px] tracking-wider border border-gray-500/40 text-gray-300 bg-gray-900/20">UI_ENGINEERING</span>
                        </div>
                    </div>

                </div>

            </div>

            <style>{`
                @keyframes imageSwap {
                    0% { opacity: 0; filter: blur(10px) brightness(2); transform: scale(1.05); }
                    100% { opacity: 1; filter: blur(0px) brightness(1); transform: scale(1); }
                }
                .animate-image-swap {
                    animation: imageSwap 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
            `}</style>
        </section>
    );
}

export default About;