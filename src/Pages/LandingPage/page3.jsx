import { useEffect, useState } from "react";

// Using placeholder strings for the example; replace with your actual import paths
import box1 from "../../assets/Images/box1.jpg";
import box2 from "../../assets/Images/box2.jpg";
import box3 from "../../assets/Images/box3.jpg";
import box4 from "../../assets/Images/box4.jpg";
import box5 from "../../assets/Images/box5.jpg";
import box6 from "../../assets/Images/box6.jpg";
import box7 from "../../assets/Images/box7.jpg";
import box8 from "../../assets/Images/box8.jpg";
import box9 from "../../assets/Images/box9.jpg";
import box10 from "../../assets/Images/box10.jpg";

const projects = [
  { id: 1, src: box1, title: "Modern Architecture", desc: "A deep dive into minimalist structural design and glass facades." },
  { id: 2, src: box2, title: "Urban Jungle", desc: "Exploring the intersection of nature and concrete in metropolitan areas." },
  { id: 3, src: box3, title: "Digital Horizon", desc: "A conceptual piece focusing on neon aesthetics and futuristic UI." },
  { id: 4, src: box4, title: "Abstract Flow", desc: "Experimental motion graphics captured in a single frame." },
  { id: 5, src: box5, title: "Timber & Steel", desc: "Industrial interior design showcasing raw materials." },
  { id: 6, src: box6, title: "Serene Landscapes", desc: "Capturing the tranquility of untouched natural environments." },
  { id: 7, src: box7, title: "Vibrant Streets", desc: "A colorful exploration of street art and urban culture." },
  { id: 8, src: box8, title: "Futuristic Mobility", desc: "Concept designs for next-gen transportation solutions." },
  { id: 9, src: box9, title: "Culinary Artistry", desc: "A visual feast highlighting modern gastronomy presentations." },
  { id: 10, src: box10, title: "Ethereal Forms", desc: "Sculptural designs inspired by fluid dynamics and organic shapes." },
];

function MainPage2() {
  const [offset, setOffset] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visible, setVisible] = useState(false);

  // Fade in content on mount
  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  // Parallax scroll effect for carousels
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-img {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.15); }
        }

        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-grid { animation: grid-move 2s linear infinite; }
        
        /* Floating effect for alternate items to make scroll dynamic */
        .carousel-item:nth-child(odd) { animation: float-y 6s ease-in-out infinite; }
        .carousel-item:nth-child(even) { animation: float-y 8s ease-in-out infinite reverse; }
        
        /* Continuous slow zoom on images */
        .img-pulse { animation: pulse-img 10s ease-in-out infinite; }

        /* Focus mode: dim siblings when one is hovered */
        .group\\/carousel:hover .group\\/item:not(:hover) {
          opacity: 0.3;
          filter: grayscale(80%);
        }
      `}</style>

      <section 
        className="relative w-full max-w-[100vw] min-h-screen py-[60px] overflow-hidden bg-black text-white box-border perspective-[1000px]"
        style={{ fontFamily: '"Bungee", cursive' }}
      >
        {/* ================= NEW IMMERSIVE BACKGROUND ================= */}
        {/* Animated 3D Perspective Grid (Floor) */}
        <div 
          className="absolute bottom-0 left-[-50%] w-[200%] h-[60%] animate-grid opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            transform: "perspective(500px) rotateX(75deg)",
            transformOrigin: "top center",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)"
          }}
        ></div>

        {/* Deep background glow to ground the grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-cyan-900/20 blur-[150px] pointer-events-none z-0 rounded-full"></div>

        {/* Scanlines Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}
        ></div>
        {/* ======================================================= */}

        
        {/* CONTENT WRAPPER */}
        <div 
          className="relative z-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease",
          }}
        >
          {/* HEADER */}
          <div className="text-center px-5 pt-2.5 pb-16 box-border relative z-20">
            <p className="text-xs md:text-sm text-cyan-400 mb-4 tracking-widest drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" style={{ animation: "blink 1.5s infinite" }}>
              &gt; LOAD_MODULE: FEATURED_WORK
            </p>
            <h2 
              className="text-4xl md:text-[5rem] mb-2.5 leading-tight"
              style={{ textShadow: "0 0 15px rgba(0,255,255,0.6), 0 0 50px rgba(0,255,255,0.2)" }}
            >
              Latest Builds
            </h2>
            <p className="text-[1.1rem] text-gray-400 mt-2 max-w-xl mx-auto leading-loose tracking-wide font-sans">
              Explore our recent deployments and system architectures.
            </p>
          </div>

          {/* TOP LANE CAROUSEL */}
          <div className="relative w-full overflow-visible mb-[50px] box-border group/carousel before:content-[''] before:absolute before:top-0 before:left-0 before:w-[15vw] before:h-full before:z-[5] before:pointer-events-none before:bg-gradient-to-r before:from-black before:to-transparent after:content-[''] after:absolute after:top-0 after:right-0 after:w-[15vw] after:h-full after:z-[5] after:pointer-events-none after:bg-gradient-to-l after:from-black after:to-transparent">
            <div 
              className="flex gap-[60px] w-max overflow-visible animate-scroll-left group-hover/carousel:[animation-play-state:paused]" 
              style={{ transform: `translateX(${offset}px)` }}
            >
              {[...projects, ...projects].map((project, i) => (
                <div 
                  key={`top-${i}`} 
                  className="group/item carousel-item relative shrink-0 w-[280px] h-[320px] rounded-sm border border-cyan-900/50 bg-black cursor-pointer z-[1] box-border transition-all duration-[400ms] ease-out hover:scale-[1.15] hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] hover:z-30 overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover img-pulse opacity-60 transition-all duration-500 ease-out group-hover/item:scale-125 group-hover/item:opacity-100" 
                  />
                  {/* Cyberpunk Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out text-cyan-400 border-[2px] border-transparent group-hover/item:border-cyan-400 group-hover/item:opacity-100">
                    <span className="text-xs tracking-[0.3em] mb-2 opacity-80">&gt; DATA.READ</span>
                    <span className="text-2xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">EXECUTE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM LANE CAROUSEL */}
          <div className="relative w-full overflow-visible mb-10 box-border group/carousel before:content-[''] before:absolute before:top-0 before:left-0 before:w-[15vw] before:h-full before:z-[5] before:pointer-events-none before:bg-gradient-to-r before:from-black before:to-transparent after:content-[''] after:absolute after:top-0 after:right-0 after:w-[15vw] after:h-full after:z-[5] after:pointer-events-none after:bg-gradient-to-l after:from-black after:to-transparent">
            <div 
              className="flex gap-[60px] w-max overflow-visible animate-scroll-right group-hover/carousel:[animation-play-state:paused]" 
              style={{ transform: `translateX(${-offset}px)` }}
            >
              {[...projects, ...projects].map((project, i) => (
                <div 
                  key={`bottom-${i}`} 
                  className="group/item carousel-item relative shrink-0 w-[280px] h-[320px] rounded-sm border border-cyan-900/50 bg-black cursor-pointer z-[1] box-border transition-all duration-[400ms] ease-out hover:scale-[1.15] hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] hover:z-30 overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover img-pulse opacity-60 transition-all duration-500 ease-out group-hover/item:scale-125 group-hover/item:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-out text-cyan-400 border-[2px] border-transparent group-hover/item:border-cyan-400 group-hover/item:opacity-100">
                    <span className="text-xs tracking-[0.3em] mb-2 opacity-80">&gt; DATA.READ</span>
                    <span className="text-2xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">EXECUTE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODAL MOVED OUTSIDE THE SECTION TO FIX SCROLL POSITIONING 
          ========================================================= */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-[10px] z-[10000] flex items-center justify-center p-5 opacity-0 animate-fade-in" 
          style={{ fontFamily: '"Bungee", cursive' }}
          onClick={() => setSelectedProject(null)}
        >
          {/* Scanlines inside Modal background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}></div>
          
          <div 
            className="bg-black/90 border border-cyan-500 text-white w-full max-w-[1100px] rounded-none relative overflow-hidden shadow-[0_0_80px_rgba(0,255,255,0.2)] box-border z-10" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal-style close button */}
            <button 
              className="absolute top-4 right-5 bg-transparent border-none text-cyan-400 text-[1.5rem] cursor-pointer z-20 transition-all duration-300 hover:text-white hover:scale-110 flex items-center justify-center drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" 
              onClick={() => setSelectedProject(null)}
            >
              [ X ]
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
              <div className="bg-gray-950 border-b md:border-b-0 md:border-r border-cyan-900 flex items-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={selectedProject.src} 
                  alt={selectedProject.title} 
                  className="w-full h-[350px] md:h-[550px] object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 grayscale-[40%] group-hover:grayscale-0" 
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                {/* Faint background terminal text for texture */}
                <div className="absolute right-[-20%] bottom-[-10%] text-[8rem] font-bold text-cyan-900/10 pointer-events-none select-none z-0 rotate-[-10deg]">
                  0{selectedProject.id}
                </div>
                
                <div className="relative z-10">
                  <p className="text-xs text-cyan-400 mb-3 tracking-[0.2em] animate-pulse">
                    SYS.DATA.READ // BLOCK_{selectedProject.id}
                  </p>
                  <h3 
                    className="text-[2.2rem] md:text-[2.8rem] mb-[20px] leading-none"
                    style={{ textShadow: "0 0 15px rgba(0,255,255,0.4)" }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-[1rem] md:text-[1.1rem] leading-loose text-gray-400 mb-[35px] font-sans">
                    {selectedProject.desc}
                  </p>
                  <div className="flex flex-col gap-3 text-[0.85rem] mb-[40px] text-gray-500 tracking-[0.1em]">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div><strong className="text-cyan-400">CLIENT:</strong> UNKNOWN_ENTITY</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div><strong className="text-cyan-400">YEAR:</strong> 2024.CYCLE</span>
                  </div>
                  <button className="px-8 py-4 bg-transparent text-cyan-400 border-2 border-cyan-400 rounded-none cursor-pointer transition-all duration-300 w-fit hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-[0.2em] text-sm font-bold">
                    Initialize Link_
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage2;