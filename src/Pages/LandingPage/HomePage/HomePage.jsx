import { useEffect, useState } from "react";
import SplashCursor from "../../../assets/SplashCursor/SplashCursor";
import { useAuth } from "../../../Context/AuthContext";

function Homepage() {
  const [visible, setVisible] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ fontFamily: '"Bungee", cursive' }}
    >

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        {/* SplashCursor */}
        <div className="absolute inset-0">
          <SplashCursor
            SIM_RESOLUTION={128}
            DYE_RESOLUTION={1440}
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
          />
        </div>

        {/* Grid overlay for pixelated feel */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        ></div>

        {/* Glowing blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-500 opacity-15 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
          }}
        ></div>
      </div>

      {/* HERO CONTENT */}
      <div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}
      >
        <p className="text-xs md:text-sm text-cyan-400 mb-6 tracking-widest " style={{ animation: "blink 1.5s infinite" }}>
          {user ? `> WELCOME_BACK, ${user.username?.toUpperCase() || user.email?.split('@')[0].toUpperCase()}...` : "> INITIALIZING..."}
        </p>
        <h1 className="text-5xl md:text-5xl lg:text-8xl leading-relaxed mb-8" style={{
          textShadow: "0 0 10px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.2)",
        }}>
          <div className="mb-4 text-2xl md:text-4xl font-bold text-cyan-400">
            {user ? `Welcome, ${user.username || user.email.split('@')[0]}` : "Welcome To"}
          </div>
          <span className="text-indigo-600 
    drop-shadow-[2px_2px_0px_#000] 
    [text-shadow:4px_4px_0px_#4338ca,8px_8px_0px_#000]">
            B
          </span>

          <span className="text-rose-500 
    drop-shadow-[2px_2px_0px_#000] 
    [text-shadow:4px_4px_0px_#e11d48,8px_8px_0px_#000]">
            L
          </span>

          <span className="text-amber-400 
    drop-shadow-[2px_2px_0px_#000] 
    [text-shadow:4px_4px_0px_#d97706,8px_8px_0px_#000]">
            O
          </span>
          <span className="text-blue-400
          drop-shadow-[2px_2px_0px_#000]
          [text-shadow:4px_4px_0px_#3b82f6,8px_8px_0px_#000]">
            C
          </span>
          <span className="text-violet-500
          drop-shadow-[2px_2px_0px_#000]
          [text-shadow:4px_4px_0px_#8b5cf6,8px_8px_0px_#000]">
            K
          </span>
          <span className="text-green-500
          drop-shadow-[2px_2px_0px_#000]
          [text-shadow:4px_4px_0px_#10b981,8px_8px_0px_#000]">
            S
          </span>
        </h1>
        <p className="text-xs md:text-sm text-gray-400 max-w-md leading-loose">
          {user ? `Ready to create something amazing? Head to the builder or explore components.` : `Build. Launch. Create. Knowledge. Share.`}
        </p>

        {/* SCROLL DOWN */}
        <div
          onClick={scrollDown}
          className="absolute bottom-10 flex flex-col items-center gap-3 text-[10px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity text-cyan-400"
        >
          <div>[ scroll down ]</div>
          <span className="text-lg animate-bounce">▼</span>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default Homepage;