import React, { useState, useRef, useEffect } from "react";

// Type Glow Text Component
export function TypeGlowText({ text = 'Deploying Neon Interface', className = '' }) {
  return (
    <p
      className={`overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 ${className}`}
      style={{
        width: 0,
        animation: 'typing 3s steps(22, end) infinite, blink 0.8s step-end infinite',
      }}
    >
      {text}
    </p>
  );
}

// Scanline Sweep Component
export function ScanlineSweep({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Scan bar */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,229,255,0.18) 50%, transparent 100%)',
          animation: 'scanY 2.6s linear infinite',
        }}
      />
      {/* Scanlines overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-40"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.07) 4px)',
        }}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}

// Hologram Title Component
export function HologramTitle({ children, as: Tag = 'h1', className = '' }) {
  return (
    <Tag
      className={`font-black uppercase tracking-[0.18em] text-cyan-300 ${className}`}
      style={{
        textShadow:
          '0 0 12px rgba(0,229,255,0.7), 0 0 40px rgba(0,229,255,0.3), 2px 2px 0 rgba(0,180,220,0.4)',
      }}
    >
      {children}
    </Tag>
  );
}

// Flicker Caption Component
export function FlickerCaption({ children, className = '' }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.15em] text-cyan-500 ${className}`}
      style={{ animation: 'flicker 2.4s linear infinite' }}
    >
      {children}
    </p>
  );
}

//Chaotic Text Header Component
export function ChaoticHeader({ children, className = '' }) {
  return (
    <div className="text-center mb-5 overflow-hidden">
      <h2 className="text-[10px] tracking-[2px] mb-[30px] [text-shadow:2px_2px_0_#000] text-blue-500 animate-pulse font-mono">
        SYSTEM BOOT SEQUENCE INITIATED...
      </h2>

      <div className="flex justify-center items-center gap-[8px] mb-[30px] text-7xl font-extrabold text-white [perspective:1000px]">
        <span className="inline-block origin-center animate-bounce [animation-delay:0ms] -rotate-12 hover:rotate-180 hover:scale-125 transition-transform duration-300">
          J
        </span>
        <span className="inline-block origin-center -translate-y-4 rotate-12 animate-pulse hover:scale-150 transition-all">
          i
        </span>
        <span className="inline-block origin-center animate-bounce [animation-delay:150ms] skew-y-12 hover:skew-y-0 transition-transform">
          g
        </span>
        <span className="inline-block origin-center animate-[spin_4s_linear_infinite] scale-110">
          y
        </span>
        <span className="inline-block origin-center animate-bounce [animation-delay:300ms] -rotate-45 hover:rotate-0 transition-transform">
          a
        </span>
        <span className="inline-block origin-center translate-y-3 skew-x-12 animate-pulse hover:-translate-y-10 transition-transform duration-500">
          s
        </span>
        <span className="inline-block origin-center animate-[spin_3s_reverse_infinite] scale-125">
          a
        </span>
      </div>

      <p className="text-sm text-[#39ff14] tracking-[1px] mt-5 [text-shadow:3px_3px_0_#000] animate-[pulse_1s_ease-in-out_infinite]">
        WE MAKE LEARNING AN EPIC QUEST
      </p>
    </div>
  )
}

// Mission Card Component
export function MissionCard() {
  return (
    <div className="group relative w-80 p-1 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-[#39ff14] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
      {/* Inner dark card */}
      <div className="bg-black p-6 rounded-lg h-full border border-gray-900 relative overflow-hidden">
        
        {/* Scanline overlay effect */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-0 pointer-events-none opacity-50"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase animate-pulse">
              Mission 01
            </span>
            <span className="text-xs text-[#39ff14] border border-[#39ff14] px-2 py-1 rounded-full font-bold shadow-[0_0_5px_#39ff14]">
              +500 XP
            </span>
          </div>
          
          <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">
            Mastering React Hooks
          </h3>
          
          <p className="text-gray-400 text-sm mb-6 font-mono leading-relaxed">
            Infiltrate the state management facility and extract the useEffect protocols.
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-900 rounded-full h-2 mb-4 overflow-hidden border border-gray-800">
            <div className="bg-[#39ff14] h-full rounded-full w-[45%] shadow-[0_0_10px_#39ff14] relative">
                <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 animate-pulse"></div>
            </div>
          </div>
          
          <button className="w-full py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-bold tracking-widest uppercase hover:bg-blue-500 hover:text-black transition-colors duration-300">
            Initialize
          </button>
        </div>
      </div>
    </div>
  );
}

// User Profile Card Component
export function UserProfileCard() {
  return (
    <div className="w-80 bg-black border-l-4 border-[#39ff14] p-5 font-mono relative overflow-hidden group shadow-[0_0_15px_rgba(0,0,0,0.8)]">
      
      {/* Decorative background geometry */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl group-hover:bg-[#39ff14]/10 group-hover:scale-150 transition-all duration-700"></div>
      <div className="absolute bottom-2 right-2 text-gray-800 text-5xl font-black opacity-20 pointer-events-none select-none">
        //
      </div>

      <h4 className="text-gray-500 text-[10px] tracking-widest mb-2 flex items-center gap-2">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        USER_DATA_STREAM
      </h4>
      
      <div className="flex items-end gap-3 mb-4">
        <span className="text-5xl font-black text-white tracking-tighter">LVL.42</span>
        <span className="text-blue-400 text-xs mb-2 tracking-widest uppercase">"The Architect"</span>
      </div>
      
      <ul className="space-y-3 text-xs text-gray-400 mt-6">
        <li className="flex justify-between items-center border-b border-gray-800/50 pb-2 hover:text-[#39ff14] transition-colors">
          <span>INTEL_RATING:</span>
          <span className="text-white font-bold">S-Tier</span>
        </li>
        <li className="flex justify-between items-center border-b border-gray-800/50 pb-2 hover:text-[#39ff14] transition-colors">
          <span>QUESTS_CLEARED:</span>
          <span className="text-white font-bold">108</span>
        </li>
        <li className="flex justify-between items-center border-b border-gray-800/50 pb-2 hover:text-[#39ff14] transition-colors">
          <span>CURRENT_STREAK:</span>
          <span className="text-[#39ff14] font-bold drop-shadow-[0_0_5px_#39ff14]">14 DAYS</span>
        </li>
      </ul>
    </div>
  );
}

// Glitch Text Component
export function GlitchText({ text = 'System Override', className = '' }) {
  return (
    <div className={`flex justify-center items-center p-10 bg-black ${className}`}>
      <div className="group relative inline-block cursor-crosshair font-black text-6xl uppercase tracking-tighter">
        
        {/* Base Text */}
        <span className="relative z-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          {text}
        </span>
        
        {/* Red Glitch Layer */}
        <span className="absolute top-0 left-[3px] -z-10 text-red-500 opacity-80 mix-blend-screen animate-[pulse_100ms_infinite] group-hover:animate-none group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform">
          {text}
        </span>
        
        {/* Cyan Glitch Layer */}
        <span className="absolute -top-[2px] -left-[3px] -z-10 text-cyan-500 opacity-80 mix-blend-screen animate-[pulse_150ms_infinite] group-hover:animate-none group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform">
          {text}
        </span>
        
        {/* Interactivity strike-through line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white mix-blend-difference opacity-0 group-hover:opacity-100 group-hover:animate-[bounce_50ms_infinite] pointer-events-none"></div>
      </div>
    </div>
  );
}

// Plasma Fill Button Component
export function PlasmaButton({ children = 'Engage Warp', onClick }) {
  return (
    <button onClick={onClick} className="group relative px-8 py-4 bg-black text-[#39ff14] font-mono font-bold uppercase tracking-[0.3em] overflow-hidden border border-[#39ff14]/40 transition-all duration-300 hover:border-[#39ff14] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:text-black">
      
      {/* Rising Plasma Fill */}
      <span className="absolute inset-0 bg-[#39ff14] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
      
      {/* Sweeping Light Glare */}
      <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-45deg] group-hover:left-[200%] transition-all duration-700 ease-in-out z-10"></span>
      
      {/* Corner decorative accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#39ff14] z-20"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#39ff14] z-20"></span>

      <span className="relative z-20">{children}</span>
    </button>
  );
}

// Sandbox Grid Environment Component
export function SandboxGrid({ children }) {
  return (
    <div className="relative w-full h-96 bg-black overflow-hidden flex items-center justify-center border-y-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
      
      {/* Perspective Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(-10px)_scale(2)] opacity-70"></div>
      
      {/* Scanning Beam / Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
      
      {/* Vignette to blend edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]"></div>

      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Terminal Input Component
export function TerminalInput({ label, placeholder, ...props }) {
  return (
    <div className="flex flex-col gap-2 font-mono w-full max-w-sm">
      {/* HUD Label */}
      {label && (
        <label className="text-[10px] text-blue-500 tracking-[0.2em] uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          [ {label} ]
        </label>
      )}
      
      <div className="relative group">
        {/* Decorative Sci-Fi Brackets */}
        <div className="absolute -inset-1 border-x-2 border-[#39ff14]/30 group-focus-within:border-[#39ff14] group-focus-within:scale-105 transition-all duration-300 pointer-events-none opacity-50"></div>

        {/* Input Wrapper */}
        <div className="relative flex items-center bg-black border border-gray-800 px-4 py-3 focus-within:border-blue-500 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all overflow-hidden z-10">
          
          {/* Animated Prompt Arrow */}
          <span className="mr-3 text-blue-500 font-bold animate-[pulse_1s_ease-in-out_infinite]">
            &gt;
          </span>
          
          {/* Actual Input */}
          <input
            type="text"
            className="bg-transparent border-none outline-none w-full text-[#39ff14] font-bold tracking-wider placeholder-gray-700 focus:ring-0"
            placeholder={placeholder || "AWAITING_INPUT..."}
            {...props}
          />
          
          {/* Retro Blinking Cursor (Only visible on focus) */}
          <div className="w-2 h-5 bg-[#39ff14] animate-[pulse_1s_step-end_infinite] ml-1 opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
}

// Bounty Board Component
export function BountyBoard() {
  const players = [
    { rank: "01", name: "NullPointer", score: "94,020" },
    { rank: "02", name: "ByteMe", score: "88,110" },
    { rank: "03", name: "CrashOverride", score: "76,900" },
  ];

  return (
    <div className="w-full max-w-md bg-black border-4 border-[#39ff14] p-6 shadow-[12px_12px_0_#39ff14] font-mono">
      
      <div className="border-b-4 border-[#39ff14] pb-4 mb-4">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
          Top Operatives
        </h2>
        <p className="text-[#39ff14] text-[10px] tracking-widest mt-1">
          // GLOBAL_RANKING_DATA
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {players.map((player) => (
          <div 
            key={player.rank}
            className="flex justify-between items-center p-3 border-2 border-gray-800 bg-gray-950 text-white cursor-pointer hover:bg-[#39ff14] hover:text-black hover:border-black transition-none group"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-black">{player.rank}</span>
              <span className="text-sm font-bold tracking-wide uppercase group-hover:underline decoration-4 underline-offset-4">
                {player.name}
              </span>
            </div>
            <span className="font-black text-xl">{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Brutalist Stat Grid Component
export function BrutalistStatGrid() {
  return (
    <div className="grid grid-cols-2 w-full max-w-sm border-4 border-blue-500 bg-black font-mono shadow-[-10px_10px_0_theme(colors.blue.500)] text-white select-none">
      
      {/* Stat Block 1 */}
      <div className="border-r-4 border-b-4 border-blue-500 p-5 hover:bg-blue-500 hover:text-black transition-colors duration-75 flex flex-col justify-between">
        <span className="text-[10px] font-bold tracking-widest mb-4 block">QUESTS</span>
        <span className="text-4xl font-black tracking-tighter">142</span>
      </div>

      {/* Stat Block 2 */}
      <div className="border-b-4 border-blue-500 p-5 hover:bg-blue-500 hover:text-black transition-colors duration-75 flex flex-col justify-between">
        <span className="text-[10px] font-bold tracking-widest mb-4 block">STREAK</span>
        <span className="text-4xl font-black tracking-tighter">12<span className="text-xl">d</span></span>
      </div>

      {/* Stat Block 3 */}
      <div className="border-r-4 border-blue-500 p-5 hover:bg-blue-500 hover:text-black transition-colors duration-75 col-span-2 sm:col-span-1 flex flex-col justify-between">
        <span className="text-[10px] font-bold tracking-widest mb-4 block">CLASS</span>
        <span className="text-xl font-black uppercase overflow-hidden text-ellipsis whitespace-nowrap">
          Vanguard
        </span>
      </div>

      {/* Stat Block 4 */}
      <div className="p-5 hover:bg-blue-500 hover:text-black transition-colors duration-75 flex flex-col justify-between bg-blue-950/30">
        <span className="text-[10px] font-bold tracking-widest mb-4 block text-blue-300">XP RATE</span>
        <span className="text-2xl font-black tracking-tighter">+2.5x</span>
      </div>

    </div>
  );
}

// Kill Switch Component
export function KillSwitch({ label = "HARDCORE MODE" }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center gap-6 font-mono">
      <span className={`text-sm font-black tracking-widest uppercase ${isActive ? 'text-red-500' : 'text-gray-500'}`}>
        {label}
      </span>
      
      <label className="relative flex items-center cursor-pointer group">
        <input 
          type="checkbox" 
          className="sr-only peer"
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
        />
        
        {/* Switch Track */}
        <div className={`w-20 h-10 border-4 transition-colors duration-75 shadow-[6px_6px_0_#27272a] ${isActive ? 'bg-red-600 border-red-500 shadow-[6px_6px_0_#ef4444]' : 'bg-black border-gray-600'}`}></div>
        
        {/* Mechanical Switch Handle */}
        <div className={`absolute left-1 top-1 w-8 h-8 border-2 transition-all duration-100 ease-linear flex items-center justify-center ${isActive ? 'translate-x-10 bg-white border-black' : 'bg-gray-600 border-black'}`}>
          {/* Inner mechanical detail */}
          <div className={`w-1 h-4 ${isActive ? 'bg-red-600' : 'bg-black'}`}></div>
        </div>
      </label>
    </div>
  );
}

// Brutalist Button Component
export function BrutalistButton({ children = "EXECUTE SCRIPT", onClick, ...props }) {
  return (
    <button 
      onClick={onClick}
      className="relative px-8 py-4 bg-[#39ff14] text-black font-black text-xl font-mono uppercase tracking-widest border-4 border-black shadow-[6px_6px_0_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-75 outline-none"
      {...props}
    >
      {/* Decorative inner corner blocks */}
      <span className="absolute top-1 left-1 w-2 h-2 bg-black/20"></span>
      <span className="absolute bottom-1 right-1 w-2 h-2 bg-black/20"></span>
      
      {children}
    </button>
  );
}

// Ghost Protocol Button Component
export function GhostProtocolButton({ children = "ACCESS GRANTED", onClick, ...props }) {
  return (
    <button 
      onClick={onClick}
      className="relative px-8 py-4 bg-transparent text-blue-500 font-mono font-bold uppercase tracking-[0.2em] group outline-none"
      {...props}
    >
      {/* Expanding Corners */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 group-hover:w-full group-hover:h-full transition-all duration-300 ease-out -z-10"></span>
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 group-hover:w-full group-hover:h-full transition-all duration-300 ease-out -z-10"></span>
      
      {/* Background glow on hover */}
      <span className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></span>

      {/* Target Crosshair */}
      <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-[8px] text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
        &gt;
      </span>

      {children}
    </button>
  );
}

// Glitch Button Component
export function GlitchButton({ children = "INITIATE WIPE", onClick, ...props }) {
  return (
    <button 
      onClick={onClick}
      className="group relative px-8 py-4 bg-black text-white font-mono font-black text-lg tracking-widest uppercase overflow-hidden border border-red-500/30 hover:border-red-500 transition-colors"
      {...props}
    >
      {/* Base text */}
      <span className="relative z-10 block group-hover:opacity-0 transition-opacity duration-75">
        {children}
      </span>
      
      {/* Red Glitch Layer */}
      <span className="absolute inset-0 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_100ms_infinite] translate-x-[3px] z-20 mix-blend-screen pointer-events-none">
        {children}
      </span>
      
      {/* Cyan Glitch Layer */}
      <span className="absolute inset-0 flex items-center justify-center text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_150ms_infinite] -translate-x-[3px] z-20 mix-blend-screen pointer-events-none">
        {children}
      </span>

      {/* Aggressive Scanlines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 group-hover:animate-ping z-30 pointer-events-none"></div>
    </button>
  );
}
