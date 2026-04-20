import React, { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════════════
// CIPHER TEXT - Animated cipher/glitch text reveal
// ═══════════════════════════════════════════════════════════════════════════

export const CipherText = ({ text = "SYSTEM GRANTED", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const startAnimation = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Controls the speed of the reveal
      }, 30);
    };

    const timeout = setTimeout(startAnimation, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return (
    <span className="font-mono font-black tracking-widest text-[#39ff14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
      {displayText}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MECH ENERGY BAR - Mechanical energy display with segments
// ═══════════════════════════════════════════════════════════════════════════

export const MechEnergyBar = ({ value = 65, max = 100, label = "CORE_CHARGE" }) => {
  const totalSegments = 20;
  const activeSegments = Math.round((value / max) * totalSegments);

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] text-blue-500 font-bold tracking-widest animate-pulse">
          // {label}
        </span>
        <span className="text-xl font-black text-white tracking-tighter">
          {value}<span className="text-sm text-gray-500">/{max}</span>
        </span>
      </div>

      <div className="flex gap-[2px] h-6 bg-black p-1 border-2 border-gray-800 skew-x-[-15deg]">
        {[...Array(totalSegments)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 transition-all duration-300 ${
              i < activeSegments
                ? "bg-[#39ff14] shadow-[0_0_10px_#39ff14]"
                : "bg-gray-900 border-r border-black"
            }`}
          ></div>
        ))}
      </div>
      
      {/* Decorative Underline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-transparent to-transparent mt-2"></div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// OVERRIDE MODAL - Warning modal with cyberpunk styling
// ═══════════════════════════════════════════════════════════════════════════

export const OverrideModal = ({ isOpen, onClose, title = "WARNING", children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-mono">
      {/* Harsh Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* The Modal Box */}
      <div className="relative w-full max-w-lg bg-black border-4 border-red-500 shadow-[15px_15px_0_#ef4444] animate-[pulse_0.2s_ease-in-out_1]">
        
        {/* Hazard Header */}
        <div className="bg-red-500 p-2 flex justify-between items-center" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px)' }}>
          <span className="text-black font-black text-xl tracking-widest">
            {title}
          </span>
          <button 
            onClick={onClose}
            className="text-black hover:text-white font-black text-xl bg-transparent border-2 border-transparent hover:border-black px-2 transition-all"
          >
            X
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 text-white">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-red-500 text-5xl animate-bounce mt-1">!</span>
            <div className="text-gray-300 text-sm leading-relaxed">
              {children}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex justify-end gap-4 mt-8 border-t border-gray-800 pt-4">
            <button 
              onClick={onClose}
              className="px-6 py-2 border-2 border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors uppercase text-xs font-bold tracking-widest"
            >
              Abort
            </button>
            <button 
              className="px-6 py-2 bg-red-500 text-black font-black uppercase text-xs tracking-widest hover:bg-white hover:text-red-500 transition-colors"
            >
              Confirm Override
            </button>
          </div>
        </div>
        
        {/* Scanning Line overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
      </div>
    </div>
  );
};
