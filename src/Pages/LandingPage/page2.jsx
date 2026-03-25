import { useEffect, useRef, useState } from "react";

function Homepage() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Shared styling for the floating tech-cards
  const boxStyle = "absolute bg-black/60 backdrop-blur-md border border-cyan-900 shadow-[0_0_15px_rgba(0,255,255,0.1)] box-border transition-all duration-[1000ms] ease-out overflow-hidden z-10";

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>

      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-black w-full max-w-[100vw] box-border"
        style={{ fontFamily: '"Bungee", cursive' }}
      >
       
        {/* Glowing blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-[100px] animate-pulse pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-[120px] animate-pulse pointer-events-none z-0" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-500 opacity-15 blur-[100px] animate-pulse pointer-events-none z-0" style={{ animationDelay: "2s" }}></div>

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
          style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}
        ></div>
        {/* ======================================================= */}

        {/* UI Boxes - Shifted to the BOTTOM half of the screen */}
        <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto hidden md:block pointer-events-none">
          
          {/* Small pulsing indicator */}
          <div className={`${boxStyle} delay-[100ms] bottom-[35%] left-[15%] w-[120px] h-[40px] flex items-center px-2 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[120px]"}`}>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Large left panel */}
          <div className={`${boxStyle} delay-[200ms] bottom-[15%] left-[5%] w-[180px] h-[220px] border-t-2 border-t-cyan-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[160px]"}`} />
          
          {/* Medium right panel */}
          <div className={`${boxStyle} delay-[300ms] bottom-[40%] right-[15%] w-[140px] h-[100px] ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[120px]"}`} />
          
          {/* Large right panel */}
          <div className={`${boxStyle} delay-[400ms] bottom-[10%] right-[5%] w-[220px] h-[280px] border-b-2 border-b-purple-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[160px]"}`} />
          
          {/* Memory usage block */}
          <div className={`${boxStyle} delay-[500ms] bottom-[25%] left-[20%] w-[160px] h-[100px] flex flex-col justify-between p-3 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[80px]"}`}>
             <div className="w-full h-1 bg-gray-800"><div className="w-1/3 h-full bg-cyan-500"></div></div>
             <span className="text-[10px] text-gray-500">MEM.USAGE</span>
          </div>
          
          {/* System OK block */}
          <div className={`${boxStyle} delay-[600ms] bottom-[15%] right-[25%] w-[140px] h-[80px] flex items-end justify-end p-2 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[80px]"}`}>
            <span className="text-[10px] text-cyan-700">SYS_OK</span>
          </div>

          {/* Vertical data nodes */}
          <div className={`${boxStyle} delay-[700ms] bottom-[30%] left-[2%] w-[70px] h-[140px] border-l-2 border-l-purple-500 flex flex-col items-center justify-around py-2 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]"}`}>
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
          </div>

          {/* Scanner bar */}
          <div className={`${boxStyle} delay-[800ms] bottom-[45%] left-[40%] w-[20%] h-[25px] flex items-center overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}`}>
             <div className="w-[10px] h-full bg-cyan-400/50 shadow-[0_0_10px_#00ffff] animate-[scan_2s_linear_infinite] ml-2"></div>
          </div>

          {/* Hex code terminal */}
          <div className={`${boxStyle} delay-[900ms] bottom-[35%] right-[3%] w-[100px] h-[90px] p-2 flex flex-col border-r-2 border-r-cyan-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"}`}>
            <span className="text-[9px] text-cyan-500/50 leading-tight">0x00F8A</span>
            <span className="text-[9px] text-cyan-500/50 leading-tight">0x11B2C</span>
            <span className="text-[9px] text-white leading-tight mt-1">&gt; 0x33A_</span>
          </div>

          {/* Sync block */}
          <div className={`${boxStyle} delay-[1000ms] bottom-[5%] left-[45%] w-[10%] h-[40px] flex items-center justify-center gap-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}`}>
             <div className="w-2 h-2 bg-purple-500"></div>
             <span className="text-[10px] text-gray-400 tracking-widest">SYNC</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center box-border px-4 pt-[-10vh]">
          <p 
            className="text-xs md:text-sm text-cyan-400 mb-6 tracking-widest" 
            style={{ animation: "blink 1.5s infinite" }}
          >
            &gt; SYSTEM_READY
          </p>

          <h1 
            className={`text-[40px] md:text-[75px] text-white leading-[1.1] transition-all duration-[800ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}
            style={{ textShadow: "0 0 10px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.2)" }}
          >
            Create a website <br /> without limits
          </h1>

          {/* --- NEW PARAGRAPH --- */}
          <p 
            className={`max-w-xl mt-8 text-[12px] md:text-[14px] text-gray-400 leading-relaxed font-sans tracking-wide transition-all duration-[800ms] ease-out delay-[200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}
          >
            Deploy blazing-fast web applications with our next-generation infrastructure. 
            Harness the power of decentralized networks, edge computing, and AI-driven 
            optimization to scale your ideas globally.
          </p>

          <button 
            className={`mt-[40px] px-8 py-4 text-[16px] md:text-[18px] bg-transparent border-2 border-cyan-400 text-cyan-400 cursor-pointer transition-all duration-[800ms] ease-out hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] uppercase tracking-widest delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`} 
            onClick={() => window.location.href = "/builder"}
          >
            Initialize Build _
          </button>
        </div>
      </section>
    </>
  );
}

export default Homepage;