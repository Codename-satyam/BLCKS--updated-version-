import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PlatformSelector() {
	const navigate = useNavigate();
	const [hoveredPlatform, setHoveredPlatform] = useState(null);

	const platforms = [
		{
			id: "generic",
			name: "Generic Templates",
			description: "Create versatile, multi-purpose websites with our collection of generic templates. Perfect for landing pages, business sites, and more.",
			icon: "🎨",
			features: [
				"Professional Navbars",
				"Hero Sections",
				"Feature Sections",
				"Pricing Tables",
				"Service Pages",
				"Flexible Layouts",
			],
			color: "from-blue-600 to-cyan-500",
			accentColor: "#00e5ff",
		},
		{
			id: "portfolio",
			name: "Portfolio Templates",
			description: "Showcase your work with professional portfolio templates. Ideal for freelancers, designers, developers, and creative professionals.",
			icon: "👤",
			features: [
				"Portfolio Navbars",
				"Hero Sections",
				"Project Showcase",
				"Skills Display",
				"Experience Sections",
				"Contact Footers",
			],
			color: "from-purple-600 to-pink-500",
			accentColor: "#10b981",
		},
	];

	const handleSelectPlatform = (platformId) => {
		navigate(`/builder/${platformId}`);
	};

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-6xl">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
						Choose Your Platform
					</h1>
					<p className="text-lg md:text-xl text-slate-400">
						Select the template type that best fits your project needs
					</p>
				</div>

				{/* Platform Cards Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{platforms.map((platform) => (
						<div
							key={platform.id}
							className="relative group"
							onMouseEnter={() => setHoveredPlatform(platform.id)}
							onMouseLeave={() => setHoveredPlatform(null)}
						>
							{/* Card Background */}
							<div
								className={`
									absolute inset-0 bg-gradient-to-br ${platform.color}
									rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl
								`}
							/>

							{/* Card */}
							<div
								className={`
									relative p-8 md:p-10 rounded-xl border-2 border-slate-800 bg-slate-900/50 backdrop-blur-lg
									transition-all duration-300 cursor-pointer
									${hoveredPlatform === platform.id ? "border-opacity-100 scale-105" : "border-opacity-50 hover:border-opacity-75"}
									${hoveredPlatform === platform.id ? "shadow-2xl" : "shadow-lg"}
								`}
								onClick={() => handleSelectPlatform(platform.id)}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										handleSelectPlatform(platform.id);
									}
								}}
							>
								{/* Icon */}
								<div
									className={`
										text-5xl md:text-7xl mb-6 inline-block p-4 rounded-lg
										transition-transform duration-300
										${hoveredPlatform === platform.id ? "scale-110" : ""}
									`}
									style={{
										backgroundColor: `${platform.accentColor}20`,
									}}
								>
									{platform.icon}
								</div>

								{/* Title */}
								<h2
									className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight"
									style={{ color: platform.accentColor }}
								>
									{platform.name}
								</h2>

								{/* Description */}
								<p className="text-slate-400 mb-8 text-sm md:text-base leading-relaxed">
									{platform.description}
								</p>

								{/* Features List */}
								<div className="space-y-2 mb-8">
									{platform.features.map((feature, idx) => (
										<div key={idx} className="flex items-center gap-3">
											<div
												className="w-2 h-2 rounded-full"
												style={{ backgroundColor: platform.accentColor }}
											/>
											<span className="text-slate-300 text-sm">{feature}</span>
										</div>
									))}
								</div>

								{/* Button */}
								<button
									className={`
										w-full py-3 px-6 font-bold rounded-lg transition-all duration-300 text-center
										uppercase tracking-wider text-sm
										${hoveredPlatform === platform.id
											? "shadow-lg scale-105"
											: "shadow-md"
										}
									`}
									style={{
										backgroundColor: platform.accentColor,
										color: "#000",
									}}
									onMouseDown={(e) => {
										e.preventDefault();
										handleSelectPlatform(platform.id);
									}}
								>
									Start Building →
								</button>

								{/* Gradient Line */}
								<div
									className={`
										absolute bottom-0 left-0 right-0 h-1 rounded-b-xl
										transition-opacity duration-300
										${hoveredPlatform === platform.id ? "opacity-100" : "opacity-0"}
									`}
									style={{
										background: `linear-gradient(90deg, ${platform.accentColor}, transparent)`,
									}}
								/>
							</div>
						</div>
					))}
				</div>

				{/* Info Section */}
				<div className="mt-16 p-8 rounded-lg bg-slate-900/30 border border-slate-800">
					<h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400 text-sm">
						<div className="flex gap-3">
							<span className="font-bold text-cyan-400 text-lg">1</span>
							<p>Choose your platform type (Generic or Portfolio)</p>
						</div>
						<div className="flex gap-3">
							<span className="font-bold text-cyan-400 text-lg">2</span>
							<p>Select and customize components from the sidebar</p>
						</div>
						<div className="flex gap-3">
							<span className="font-bold text-cyan-400 text-lg">3</span>
							<p>Export your code and deploy your website</p>
						</div>
					</div>
				</div>

				{/* Footer Note */}
				<div className="mt-8 text-center text-slate-500 text-sm">
					<p>You can always switch platforms when creating a new project</p>
				</div>
			</div>
		</div>
	);
}
