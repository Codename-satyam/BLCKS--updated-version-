import React, { useEffect, useState } from "react";

export default function Contact() {
    const [visible, setVisible] = useState(false);

    // Fade in on mount
    useEffect(() => {
        setTimeout(() => setVisible(true), 200);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Transmitting message...");
    };

    return (
        <section 
            id="contact" 
            className="relative min-h-screen bg-black text-white flex items-center justify-center py-20 px-5 overflow-hidden"
            style={{ fontFamily: '"Bungee", cursive' }}
        >
            {/* ================= BACKGROUND ELEMENTS ================= */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Glowing Blobs */}
                <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-600 opacity-10 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-600 opacity-10 blur-[120px]" style={{ animationDelay: "1s" }}></div>
                
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

            {/* TERMINAL WINDOW */}
            <div 
                className={`relative z-10 w-full max-w-2xl bg-black/80 backdrop-blur-xl border border-cyan-900/60 shadow-[0_0_40px_rgba(0,255,255,0.1)] transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                {/* Top glow edge */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                
                {/* TERMINAL HEADER */}
                <div className="flex items-center justify-between px-4 py-3 bg-cyan-950/30 border-b border-cyan-900/50">
                    <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                    </div>
                    <h2 className="text-[10px] md:text-xs text-cyan-400 tracking-widest uppercase opacity-80">
                        CONTACT_TERMINAL.EXE
                    </h2>
                    <div className="w-12"></div> {/* Spacer to center title */}
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    {/* BOOT SEQUENCE */}
                    <div className="flex flex-col gap-2 text-xs md:text-sm text-cyan-500 tracking-widest">
                        <p className="animate-fade-in-line opacity-0" style={{ animationDelay: "0.2s" }}>
                            &gt; INITIALIZING COMMUNICATION MODULE...
                        </p>
                        <p className="animate-fade-in-line opacity-0" style={{ animationDelay: "1s" }}>
                            &gt; SECURE CONNECTION ESTABLISHED.
                        </p>
                        <p className="animate-fade-in-line opacity-0" style={{ animationDelay: "1.8s" }}>
                            &gt; SYSTEM READY. ENTER MESSAGE: <span className="inline-block w-2 h-4 bg-cyan-400 animate-blink align-middle ml-1"></span>
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-fade-in-line opacity-0" style={{ animationDelay: "2.5s" }}>
                        
                        {/* NAME */}
                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="name" className="text-[10px] text-purple-400 tracking-[0.2em] group-focus-within:text-cyan-400 transition-colors">
                                // IDENTIFIER (NAME)
                            </label>
                            <div className="relative">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan-500 text-sm pl-3 pointer-events-none group-focus-within:text-white transition-colors">
                                    &gt;
                                </span>
                                <input 
                                    id="name" 
                                    type="text" 
                                    name="name" 
                                    placeholder="ENTER YOUR NAME" 
                                    required
                                    className="w-full bg-black/50 border border-gray-800 text-cyan-300 text-sm font-sans pl-8 pr-4 py-3 focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/20 transition-all placeholder:text-gray-700 placeholder:font-['Bungee']"
                                />
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="email" className="text-[10px] text-purple-400 tracking-[0.2em] group-focus-within:text-cyan-400 transition-colors">
                                // RETURN_ADDRESS (EMAIL)
                            </label>
                            <div className="relative">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan-500 text-sm pl-3 pointer-events-none group-focus-within:text-white transition-colors">
                                    &gt;
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="ENTER YOUR EMAIL"
                                    required
                                    className="w-full bg-black/50 border border-gray-800 text-cyan-300 text-sm font-sans pl-8 pr-4 py-3 focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/20 transition-all placeholder:text-gray-700 placeholder:font-['Bungee']"
                                />
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="message" className="text-[10px] text-purple-400 tracking-[0.2em] group-focus-within:text-cyan-400 transition-colors">
                                // PAYLOAD (MESSAGE)
                            </label>
                            <div className="relative">
                                <span className="absolute left-0 top-4 text-cyan-500 text-sm pl-3 pointer-events-none group-focus-within:text-white transition-colors">
                                    &gt;
                                </span>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="TYPE YOUR MESSAGE..."
                                    required
                                    className="w-full bg-black/50 border border-gray-800 text-cyan-300 text-sm font-sans pl-8 pr-4 py-4 focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/20 transition-all placeholder:text-gray-700 placeholder:font-['Bungee'] resize-y"
                                />
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button 
                            type="submit" 
                            className="mt-2 w-full bg-transparent border-2 border-cyan-500 text-cyan-400 uppercase tracking-[0.2em] text-sm py-4 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 relative overflow-hidden group/btn"
                        >
                            <span className="relative z-10">TRANSMIT _</span>
                            {/* Hover scanline effect */}
                            <div className="absolute top-1/2 left-[-100%] w-[200%] h-[2px] bg-white opacity-0 group-hover/btn:opacity-50 group-hover/btn:animate-[scan_1s_linear_infinite] pointer-events-none"></div>
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
                @keyframes fadeInLine {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-line {
                    animation: fadeInLine 0.5s ease-out forwards;
                }
                @keyframes scan {
                    0% { transform: translateY(-50%) rotate(45deg) translateX(-100%); }
                    100% { transform: translateY(-50%) rotate(45deg) translateX(100%); }
                }
            `}</style>
        </section>
    );
}