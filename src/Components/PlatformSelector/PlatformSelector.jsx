import { useNavigate } from "react-router-dom";

export default function PlatformSelector() {
    const navigate = useNavigate();

    const platforms = [
        {
            id: "generic",
            name: "GENERIC",
            subtitle: "ALL-PURPOSE SITES",
            icon: "✦",
            // Acid Green / Lime theme
            colorTheme: "border-lime-400 hover:bg-lime-400 shadow-[12px_12px_0px_0px_#a3e635] hover:shadow-[6px_6px_0px_0px_#a3e635]",
        },
        {
            id: "portfolio",
            name: "PORTFOLIO",
            subtitle: "SHOWCASE WORK",
            icon: "☻",
            // Hot Magenta / Fuchsia theme
            colorTheme: "border-fuchsia-500 hover:bg-fuchsia-500 shadow-[12px_12px_0px_0px_#d946ef] hover:shadow-[6px_6px_0px_0px_#d946ef]",
        },
    ];

    const handleSelectPlatform = (platformId) => {
        navigate(`/builder/${platformId}`);
    };

    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-6 md:p-12 selection:bg-white selection:text-black text-white">
            <div className="w-full max-w-6xl">
                
                {/* Dark Brutalist Header */}
                <div className="mb-12 border-b-4 md:border-b-8 border-white pb-6">
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                        Select <br />
                        <span className="text-black" style={{ WebkitTextStroke: '2px white' }}>Platform</span>
                    </h1>
                </div>

                {/* Platform Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16">
                    {platforms.map((platform) => (
                        <div
                            key={platform.id}
                            onClick={() => handleSelectPlatform(platform.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleSelectPlatform(platform.id);
                                }
                            }}
                            className={`
                                group relative w-full bg-black border-4 p-8 md:p-12
                                cursor-pointer transition-all duration-150 ease-in-out outline-none
                                hover:translate-x-[6px] hover:translate-y-[6px] hover:text-black
                                focus:translate-x-[12px] focus:translate-y-[12px] focus:shadow-none
                                ${platform.colorTheme}
                            `}
                        >
                            {/* Icon */}
                            <div className="text-7xl md:text-9xl mb-8 transition-transform origin-left group-hover:scale-110">
                                {platform.icon}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">
                                    {platform.name}
                                </h2>
                                <p className="font-mono font-bold text-lg md:text-xl border-t-4 border-current pt-4 uppercase">
                                    {platform.subtitle}
                                </p>
                            </div>

                            {/* Action Arrow */}
                            <div className="absolute top-8 right-8 text-4xl md:text-6xl transition-transform group-hover:translate-x-4">
                                →
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}