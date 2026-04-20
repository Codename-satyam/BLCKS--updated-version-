export default function GamingFeatures({ content = {}, editor }) {
	const {
		badge = "🏆 FEATURES",
		title = "Everything You Need to Compete",
		feature1Title = "Live Tournaments",
		feature1Desc = "Join daily competitive tournaments with real-time rankings.",
		feature2Title = "Team Management",
		feature2Desc = "Create squads, manage rosters, and dominate together.",
		feature3Title = "Streaming Integration",
		feature3Desc = "Built-in Twitch & YouTube streaming capabilities.",
		badgeColor = "#00ff88",
		titleColor = "#ffffff",
		cardBgColor = "#0f0f1e",
		cardBorderColor = "#00ff88",
		featureTitleColor = "#00ff88",
		featureDescColor = "#a0aec0",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const features = [
		{ titleKey: "feature1Title", descKey: "feature1Desc", title: feature1Title, desc: feature1Desc, icon: "🎯" },
		{ titleKey: "feature2Title", descKey: "feature2Desc", title: feature2Title, desc: feature2Desc, icon: "👥" },
		{ titleKey: "feature3Title", descKey: "feature3Desc", title: feature3Title, desc: feature3Desc, icon: "📡" },
	];

	return (
		<section 
			className="w-full bg-black text-white border-b overflow-hidden"
			style={{ borderColor: `${badgeColor}20` }}
		>
			{/* Gaming grid background */}
			<div className="absolute inset-0 opacity-5 pointer-events-none" 
				style={{ 
					backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
					backgroundSize: "40px 40px",
				}} 
			/>

			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-20 relative z-10">
				{/* Section header */}
				<div className="mb-16 text-center">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(e) => onFieldChange("badge", e.target.value)}
							className="inline-block px-4 py-2 rounded-full border mb-6 bg-black/50 outline-none focus:ring-2 text-sm font-semibold"
							style={{ 
								color: badgeColor,
								borderColor: badgeColor,
							}}
						/>
					) : (
						<div 
							className="inline-block px-4 py-2 rounded-full border mb-6 text-sm font-semibold tracking-widest"
							style={{ 
								color: badgeColor,
								borderColor: `${badgeColor}40`,
								backgroundColor: `${badgeColor}05`,
							}}
						>
							{badge}
						</div>
					)}

					{isEditing ? (
						<textarea
							value={title}
							onChange={(e) => onFieldChange("title", e.target.value)}
							className="w-full text-4xl md:text-5xl font-bold mb-6 bg-black/50 border rounded p-4 resize-y min-h-24 outline-none focus:ring-2"
							style={{ 
								color: titleColor,
								borderColor: badgeColor,
							}}
						/>
					) : (
						<h2 
							className="text-4xl md:text-5xl font-bold mb-6"
							style={{ color: titleColor }}
						>
							{title}
						</h2>
					)}
				</div>

				{/* Features grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, idx) => (
						<div 
							key={`${feature.titleKey}-${idx}`}
							className="group relative p-8 rounded-xl transition-all duration-300 hover:scale-105"
							style={{ 
								backgroundColor: cardBgColor,
								border: `2px solid ${cardBorderColor}30`,
							}}
							onMouseEnter={(e) => e.currentTarget.style.borderColor = cardBorderColor}
							onMouseLeave={(e) => e.currentTarget.style.borderColor = `${cardBorderColor}30`}
						>
							<div className="text-5xl mb-4">{feature.icon}</div>

							{isEditing ? (
								<>
									<input
										type="text"
										value={feature.title}
										onChange={(e) => onFieldChange(feature.titleKey, e.target.value)}
										className="w-full text-xl font-bold mb-3 bg-black/50 border rounded p-2 outline-none focus:ring-2"
										style={{ 
											color: featureTitleColor,
											borderColor: badgeColor,
										}}
									/>
									<textarea
										value={feature.desc}
										onChange={(e) => onFieldChange(feature.descKey, e.target.value)}
										className="w-full bg-black/50 border rounded p-2 resize-y min-h-16 outline-none focus:ring-2"
										style={{ 
											color: featureDescColor,
											borderColor: badgeColor,
										}}
									/>
								</>
							) : (
								<>
									<h3 
										className="text-xl font-bold mb-3"
										style={{ color: featureTitleColor }}
									>
										{feature.title}
									</h3>
									<p 
										className="text-sm"
										style={{ color: featureDescColor }}
									>
										{feature.desc}
									</p>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
