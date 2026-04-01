import React from "react";

const Footer = () => {
    return (
        <footer 
            className="relative w-full bg-black text-white border-t border-cyan-900/60 overflow-hidden pt-16 pb-8"
            style={{ fontFamily: '"Bungee", cursive' }}
        >
            {/* ================= BACKGROUND ELEMENTS ================= */}
            {/* Scanlines */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}
            ></div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-full h-64 bg-cyan-900/20 blur-[120px] pointer-events-none z-0"></div>
            {/* ======================================================= */}

            <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
                
                {/* TOP FOOTER GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    
                    {/* COL 1: BRAND & STATUS */}
                    <div className="flex flex-col">
                        <h2 
                            className="text-4xl tracking-wider mb-4"
                            style={{ textShadow: "0 0 10px rgba(0,255,255,0.5)" }}
                        >
                            BLCKS
                        </h2>
                        <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 max-w-xs">
                            Decentralized infrastructure and modular build environments for the next generation of the web.
                        </p>
                        
                        {/* System Status */}
                        <div className="flex items-center gap-3 px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 w-fit">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#00ffff]"></div>
                            <span className="text-[10px] text-cyan-400 tracking-widest">
                                SYS.CORE // ONLINE
                            </span>
                        </div>
                    </div>

                    {/* COL 2: DIRECTORY */}
                    <div className="flex flex-col">
                        <span className="text-xs text-purple-400 tracking-[0.2em] mb-6">
                            // DIRECTORY
                        </span>
                        <ul className="flex flex-col gap-5 font-sans text-sm text-gray-400">
                            <li>
                                <a href="#" className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300 w-fit">
                                    <svg className="w-4 h-4 text-cyan-500/50 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    <span className="group-hover:tracking-widest transition-all duration-300">HOME</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300 w-fit">
                                    <svg className="w-4 h-4 text-cyan-500/50 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                    </svg>
                                    <span className="group-hover:tracking-widest transition-all duration-300">FEATURES</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300 w-fit">
                                    <svg className="w-4 h-4 text-cyan-500/50 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
                                    </svg>
                                    <span className="group-hover:tracking-widest transition-all duration-300">MODULES</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300 w-fit">
                                    <svg className="w-4 h-4 text-cyan-500/50 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
                                    </svg>
                                    <span className="group-hover:tracking-widest transition-all duration-300">PRICING</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COL 3: COMMS / LEGAL */}
                    <div className="flex flex-col">
                        <span className="text-xs text-purple-400 tracking-[0.2em] mb-6">
                            // COMM_LINKS
                        </span>
                        <ul className="flex flex-col gap-5 font-sans text-sm text-gray-400">
                            <li>
                                <a href="#" className="group flex items-center gap-3 hover:text-purple-400 transition-all duration-300 w-fit">
                                    <svg className="w-4 h-4 text-purple-500/50 group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                    <span className="group-hover:tracking-widest transition-all duration-300">TWITTER / X</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-3 hover:text-purple-400 transition-all duration-300 w-fit">
                                    <svg className="w-4 h-4 text-purple-500/50 group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    <span className="group-hover:tracking-widest transition-all duration-300">GITHUB</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center gap-3 hover:text-purple-400 transition-all duration-300 w-fit">
                                    <svg className="w-4 h-4 text-purple-500/50 group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <span className="group-hover:tracking-widest transition-all duration-300">DISCORD</span>
                                </a>
                            </li>
                            <li className="mt-4 flex gap-4 text-xs">
                                <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY_POLICY</a>
                                <a href="#" className="hover:text-white transition-colors duration-300">TOS_AGREEMENT</a>
                            </li>
                        </ul>
                    </div>

                    {/* COL 4: TERMINAL NEWSLETTER */}
                    <div className="flex flex-col">
                        <span className="text-xs text-cyan-400 tracking-[0.2em] mb-6">
                            // INITIALIZE_SYNC
                        </span>
                        <p className="text-sm font-sans text-gray-400 mb-5">
                            Establish a direct link to receive system updates and patch notes.
                        </p>
                        
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan-500 text-sm pl-3 pointer-events-none group-focus-within:text-white transition-colors">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </span>
                                <input 
                                    type="email" 
                                    placeholder="ENTER_EMAIL_ADDRESS"
                                    required
                                    className="w-full bg-black/50 border border-cyan-900 text-cyan-300 text-sm font-sans pl-10 pr-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/20 transition-all placeholder:text-gray-600 placeholder:font-['Bungee']"
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-transparent border-2 border-cyan-500 text-cyan-400 uppercase tracking-[0.2em] text-xs py-3 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
                            >
                                Execute_
                            </button>
                        </form>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-gray-500 tracking-[0.2em]">
                        © {new Date().getFullYear()}.CYCLE BLCKS_CORE. ALL RIGHTS RESERVED.
                    </p>
                    
                    {/* Decorative Hex codes */}
                    <div className="flex gap-4 text-[9px] text-gray-700 tracking-widest hidden md:flex">
                        <span>0x00F8A</span>
                        <span>0x11B2C</span>
                        <span>0x33A9F</span>
                    </div>
                </div>

            </div>
            
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;