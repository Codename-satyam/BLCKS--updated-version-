import CardSwap, { Card } from "../../assets/CardSwap/CardSwap.jsx";

const Page4 = () => {
    return (
        <section
            className="relative min-h-screen overflow-hidden bg-black text-white"
            style={{ fontFamily: '"Bungee", cursive' }}
        >
            {/* ================= BACKGROUND ================= */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-[100px] animate-pulse" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-[120px] animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-500 opacity-15 blur-[100px] animate-pulse"
                    style={{ animationDelay: "2s" }}
                />

                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.05]"
                    style={{
                        background:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
                    }}
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-24 md:pt-24">
                
                {/* MAIN HUD CONTAINER */}
                <div className="relative flex flex-col min-h-[720px] border border-cyan-900/60 bg-black/40 backdrop-blur-sm overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.05)]">
                    
                    {/* Top Label */}
                    <div className="absolute top-4 left-5 text-[10px] tracking-widest text-cyan-500/80 z-20">
                        [ active nodes ]
                    </div>

                    {/* TWO COLUMN LAYOUT: Text on Left, Cards on Right */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-12 relative z-10">
                        
                        {/* LEFT COLUMN: TEXT CONTENT */}
                        <div className="flex flex-col justify-center text-left pt-10 lg:pt-0">
                            <p className="text-xs md:text-sm text-cyan-400 mb-4 tracking-[0.2em] animate-pulse">
                                &gt; LOAD_MODULE: BUILD_STACK
                            </p>
                            <h2
                                className="text-5xl md:text-7xl leading-tight mb-6"
                                style={{
                                    textShadow:
                                        "0 0 15px rgba(0,255,255,0.4), 0 0 50px rgba(0,255,255,0.2)",
                                }}
                            >
                                Launch Stack
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 font-sans max-w-md leading-loose tracking-wide">
                                A rotating view of ready-to-deploy modules for creators and teams. Harness the power of modular architecture to scale your digital presence rapidly.
                            </p>
                        </div>

                        {/* RIGHT COLUMN: CARD SWAP */}
                        <div className="flex items-center justify-center relative min-h-[450px]">
                            <CardSwap
                                width={320}
                                height={380}
                                cardDistance={65}
                                verticalDistance={70}
                                delay={5000}
                                pauseOnHover={false}
                            >
                                <Card customClass="bg-black/90 border-cyan-500/60 text-white p-6 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                                    <p className="text-[11px] text-cyan-400 tracking-widest mb-3">BLOCK_01</p>
                                    <h3 className="text-2xl mb-4">Builder</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
                                        Drag, compose, and launch a full website flow without leaving your workspace.
                                    </p>
                                </Card>

                                <Card customClass="bg-black/90 border-purple-500/60 text-white p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                    <p className="text-[11px] text-purple-300 tracking-widest mb-3">BLOCK_02</p>
                                    <h3 className="text-2xl mb-4">Editor</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
                                        Refine layouts, content, and visual behavior in one streamlined editing layer.
                                    </p>
                                </Card>

                                <Card customClass="bg-black/90 border-blue-500/60 text-white p-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                    <p className="text-[11px] text-blue-300 tracking-widest mb-3">BLOCK_03</p>
                                    <h3 className="text-2xl mb-4">Publish</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
                                        Push optimized builds and share instantly with your audience from a single command.
                                    </p>
                                </Card>
                            </CardSwap>
                        </div>
                    </div>

                    {/* TERMINAL TEXT BOX (Bottom row) */}
                    <div className="relative w-full border-t border-cyan-900/70 bg-gradient-to-r from-cyan-900/20 to-black/80 backdrop-blur-md px-6 py-6 md:px-10 md:py-8 text-left mt-auto z-20">
                        {/* Decorative scanline glow inside the box */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 to-transparent opacity-50"></div>
                        
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <p className="text-[10px] md:text-xs text-cyan-400 tracking-widest">
                                SYS.LOG // WORKFLOW_SEQUENCE
                            </p>
                        </div>
                        
                        <p className="text-sm md:text-base text-gray-300 font-sans leading-relaxed">
                            The project follows a simple flow: start in <span className="px-1.5 py-0.5 mx-1 bg-cyan-900/40 border border-cyan-500/30 rounded text-cyan-300 font-semibold tracking-wide">Builder</span> to assemble sections,
                            move to <span className="px-1.5 py-0.5 mx-1 bg-purple-900/40 border border-purple-500/30 rounded text-purple-300 font-semibold tracking-wide">Editor</span> to refine content and styling,
                            then finish in <span className="px-1.5 py-0.5 mx-1 bg-blue-900/40 border border-blue-500/30 rounded text-blue-300 font-semibold tracking-wide">Publish</span> to deploy and share the final site.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Page4;