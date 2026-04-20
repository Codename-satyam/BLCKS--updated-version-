export default function Loader() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-black font-mono" 
      role="status"
    >
      {/* Arcade/Retro Container */}
      <div className="flex flex-col items-center border-4 border-cyan-500 bg-zinc-950 p-8 md:p-12 shadow-[8px_8px_0px_0px_#06b6d4]">
        
        {/* Blinking Terminal Text */}
        <h1 className="text-3xl md:text-5xl font-black text-cyan-400 uppercase tracking-[0.2em] mb-8 flex items-end">
          Loading
          <span className="w-6 h-1 bg-cyan-400 animate-ping inline-block ml-2 mb-1"></span>
        </h1>

        {/* Blocky 8-Bit Progress Bar */}
        <div className="w-64 md:w-80 h-8 border-4 border-cyan-500 p-1 flex gap-1">
          {[0, 1, 2, 3, 4].map((block) => (
            <div
              key={block}
              className="h-full flex-1 bg-cyan-500 animate-pulse"
              style={{ animationDelay: `${block * 150}ms` }}
            ></div>
          ))}
        </div>

        {/* Quest/RPG Flavour Text */}
        <p className="mt-8 text-xs md:text-sm text-cyan-700 font-bold tracking-[0.3em] uppercase">
          Preparing Next Quest...
        </p>
        
        {/* Screen Reader Text */}
        <span className="sr-only">Loading content, please wait.</span>
      </div>
    </div>
  );
}