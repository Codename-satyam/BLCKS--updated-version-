export default function Features1({ content = {}, editor }) {
	const {
		badge = "⚡ FEATURES",
		title = "Why Choose Us",
		feature1Title = "Lightning Fast",
		feature1Desc = "Optimized performance with minimal load times.",
		feature2Title = "Secure",
		feature2Desc = "Enterprise-grade security built in.",
		feature3Title = "Scalable",
		feature3Desc = "Grows with your business needs.",
		badgeColor = "#00e5ff",
		titleColor = "#ffffff",
		cardBgColor = "#0f0f1e",
		cardBorderColor = "#00e5ff",
		featureTitleColor = "#00e5ff",
		featureDescColor = "#a0aec0",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const features = [
		{ titleKey: "feature1Title", descKey: "feature1Desc", title: feature1Title, desc: feature1Desc, icon: "⚡" },
		{ titleKey: "feature2Title", descKey: "feature2Desc", title: feature2Title, desc: feature2Desc, icon: "🔒" },
		{ titleKey: "feature3Title", descKey: "feature3Desc", title: feature3Title, desc: feature3Desc, icon: "📈" },
	];

	return (
		<section 
			className="w-full bg-black text-white border-b overflow-hidden"
			style={{ borderColor: `${badgeColor}20` }}
		>
			{/* Animated background */}
			<div className="absolute inset-0 opacity-5 pointer-events-none" 
				style={{ 
					backgroundImage: `radial-gradient(circle at 1px 1px, ${badgeColor}, transparent)`,
					backgroundSize: "50px 50px",
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
							{/* Gradient overlay on hover */}
							<div 
								className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
								style={{ background: `linear-gradient(135deg, ${badgeColor}, transparent)` }}
							/>

							{/* Icon */}
							<div className="text-4xl mb-4">{feature.icon}</div>

							{/* Title */}
							{isEditing ? (
								<input
									type="text"
									value={feature.title}
									onChange={(e) => onFieldChange(feature.titleKey, e.target.value)}
									className="text-xl font-bold mb-3 w-full bg-black/50 border px-3 py-2 rounded outline-none focus:ring-2"
									style={{ 
										color: featureTitleColor,
										borderColor: badgeColor,
									}}
								/>
							) : (
								<h3 
									className="text-xl font-bold mb-3"
									style={{ color: featureTitleColor }}
								>
									{feature.title}
								</h3>
							)}

							{/* Description */}
							{isEditing ? (
								<textarea
									value={feature.desc}
									onChange={(e) => onFieldChange(feature.descKey, e.target.value)}
									className="w-full text-sm leading-relaxed bg-black/50 border px-3 py-2 rounded resize-y min-h-16 outline-none focus:ring-2"
									style={{ 
										color: featureDescColor,
										borderColor: badgeColor,
									}}
								/>
							) : (
								<p 
									className="text-sm leading-relaxed"
									style={{ color: featureDescColor }}
								>
									{feature.desc}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
