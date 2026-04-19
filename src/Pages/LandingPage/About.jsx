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

    // Carousel interval
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            className="relative min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-mono selection:bg-lime-400 selection:text-black"
        >
            {/* ================= BRUTALIST BACKGROUND ================= */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{ 
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
                    backgroundSize: "40px 40px" 
                }} 
            />
            {/* ======================================================= */}

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* ── LEFT: IMAGE CAROUSEL HUD ── */}
                <div className="relative w-full max-w-lg mx-auto lg:max-w-full">
                    <div className="bg-black border-4 border-white shadow-[12px_12px_0px_0px_#a3e635] flex flex-col hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300">
                        
                        {/* Status Bar */}
                        <div className="flex justify-between items-center border-b-4 border-white bg-zinc-900 p-4">
                            <span className="text-xs font-black text-white uppercase tracking-widest bg-black border-2 border-white px-2 py-1">
                                STREAM // 0{index + 1}
                            </span>
                            <div className="flex gap-2">
                                {images.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`h-3 w-3 border-2 border-white transition-colors duration-0 
                                            ${i === index ? 'bg-lime-400' : 'bg-black'}`
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black p-4">
                            {/* Inner Border Frame */}
                            <div className="w-full h-full border-4 border-zinc-800 relative overflow-hidden group">
                                
                                {/* Hard Scanline Overlay */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] z-10 pointer-events-none mix-blend-overlay" />
                                
                                {/* Image with Glitch/Hard Swap animation */}
                                <img 
                                    key={index}
                                    src={images[index]} 
                                    alt={`Profile visual ${index}`} 
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-0 animate-hard-swap"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: BIO CONTENT ── */}
                <div className="flex flex-col justify-center text-left">
                    
                    {/* System Tag */}
                    <div className="flex items-center gap-4 mb-6 border-b-4 border-fuchsia-500 pb-4 inline-flex self-start">
                        <div className="w-4 h-4 bg-fuchsia-500 shadow-[4px_4px_0px_0px_white]" />
                        <p className="text-sm font-black text-white uppercase tracking-widest">
                            SYS.USER_PROFILE
                        </p>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-[4px_4px_0px_#d946ef]">
                        SATYAM<br/>ANAND
                    </h2>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-lime-400 uppercase tracking-widest mb-8 border-l-4 border-lime-400 pl-4 bg-lime-400/10 py-2">
                        React Developer & QA Engineer
                    </h3>
                    
                    <div className="space-y-6 text-sm md:text-base text-zinc-400 font-bold uppercase leading-relaxed tracking-wider mb-12 border-l-4 border-white pl-6">
                        <p>
                            Based in India. Specializing in building dynamic, high-performance, and responsive web applications. 
                        </p>
                        <p>
                            Focused on crafting seamless user interfaces across devices, optimizing system architecture, and ensuring rigorous quality assurance protocols. Constantly exploring emerging tech trends and refining robust problem-solving methodologies.
                        </p>
                    </div>

                    {/* Brutalist Skills Output block */}
                    <div className="bg-black border-4 border-white p-6 shadow-[8px_8px_0px_0px_white]">
                        <p className="text-xs font-black text-white tracking-widest mb-4 border-b-2 border-zinc-800 pb-2 uppercase">
                            LOADED_MODULES // TECH_STACK
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "REACT.JS", color: "border-cyan-400 text-cyan-400" },
                                { name: "JAVASCRIPT", color: "border-yellow-400 text-yellow-400" },
                                { name: "JAVA", color: "border-orange-500 text-orange-500" },
                                { name: "PYTHON", color: "border-blue-400 text-blue-400" },
                                { name: "C++", color: "border-indigo-400 text-indigo-400" },
                                { name: "LARAVEL", color: "border-red-500 text-red-500" },
                                { name: "FIREBASE", color: "border-amber-500 text-amber-500" },
                                { name: "GIT", color: "border-white text-white" }
                            ].map((skill) => (
                                <span 
                                    key={skill.name} 
                                    className={`px-3 py-1 text-xs font-black tracking-widest border-2 uppercase bg-black hover:bg-white hover:text-black hover:border-white transition-colors cursor-default ${skill.color}`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes hardSwap {
                    0% { opacity: 0; filter: contrast(300%) grayscale(100%); transform: scale(1.05) translate(4px, 4px); }
                    10% { opacity: 1; filter: contrast(125%) grayscale(100%); transform: scale(1) translate(0, 0); }
                    100% { opacity: 1; filter: contrast(125%) grayscale(100%); transform: scale(1); }
                }
                .animate-hard-swap {
                    animation: hardSwap 0.3s steps(2, end) forwards;
                }
            `}</style>
        </section>
    );
}

export default About;