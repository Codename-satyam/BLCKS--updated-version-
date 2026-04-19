export default function Features3({ content = {}, editor }) {
	const {
		badge = "✨ THE CALM WAY",
		title = "A Gentler Approach to Web Building",
		feature1Title = "Soft Iteration",
		feature1Desc = "Change doesn't have to be loud. Adjust gracefully and naturally.",
		feature2Title = "Organic Growth",
		feature2Desc = "Your site expands like a garden, tended with care over time.",
		feature3Title = "Quiet Spaces",
		feature3Desc = "White space allows ideas to breathe and visitors to linger.",
		bgColor = "#fdfcf8",
		textColor = "#4a4a4a",
		badgeColor = "#8c9484",
		titleColor = "#8b8680",
		featureTitleColor = "#6b6560",
		featureDescColor = "#9b9892",
		borderColor = "#e8e4dd",
		accentColor = "#d4c5b0",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const features = [
		{ titleKey: "feature1Title", descKey: "feature1Desc", title: feature1Title, desc: feature1Desc },
		{ titleKey: "feature2Title", descKey: "feature2Desc", title: feature2Title, desc: feature2Desc },
		{ titleKey: "feature3Title", descKey: "feature3Desc", title: feature3Title, desc: feature3Desc },
	];

	return (
		<section 
			className="w-full border-y"
			style={{ 
				backgroundColor: bgColor,
				color: textColor,
				borderColor: borderColor,
			}}
		>
			<div className="mx-auto w-full max-w-5xl px-8 py-24">
				{/* Badge */}
				<div className="mb-8">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(e) => onFieldChange("badge", e.target.value)}
							className="text-sm italic tracking-wide bg-transparent border-b outline-none px-2 py-1 max-w-xs"
							style={{ 
								color: badgeColor,
								borderColor: borderColor,
							}}
						/>
					) : (
						<p 
							className="text-sm italic tracking-wide"
							style={{ color: badgeColor }}
						>
							{badge}
						</p>
					)}
				</div>

				{/* Title */}
				<div className="mb-16 max-w-2xl">
					{isEditing ? (
						<textarea
							value={title}
							onChange={(e) => onFieldChange("title", e.target.value)}
							className="text-4xl md:text-5xl font-light leading-snug bg-white/50 border p-3 w-full resize-y min-h-32 rounded-sm outline-none focus:ring-2"
							style={{ 
								color: titleColor,
								borderColor: borderColor,
							}}
						/>
					) : (
						<h2 
							className="text-4xl md:text-5xl font-light leading-snug"
							style={{ color: titleColor }}
						>
							{title}
						</h2>
					)}
				</div>

				{/* Features grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{features.map((feature, idx) => (
						<article key={`${feature.titleKey}-${idx}`} className="group">
							{/* Title */}
							{isEditing ? (
								<input
									type="text"
									value={feature.title}
									onChange={(e) => onFieldChange(feature.titleKey, e.target.value)}
									className="text-xl font-medium mb-3 bg-transparent border-b w-full outline-none focus:ring-1 px-2 py-1"
									style={{ 
										color: featureTitleColor,
										borderColor: borderColor,
									}}
								/>
							) : (
								<h3 
									className="text-xl font-medium mb-3"
									style={{ color: featureTitleColor }}
								>
									{feature.title}
								</h3>
							)}

							{/* Accent line */}
							<div 
								className="w-8 h-[1px] mb-4 transition-all group-hover:w-16"
								style={{ backgroundColor: accentColor }}
							/>

							{/* Description */}
							{isEditing ? (
								<textarea
									value={feature.desc}
									onChange={(e) => onFieldChange(feature.descKey, e.target.value)}
									className="text-base leading-relaxed bg-transparent border p-2 w-full resize-y min-h-20 outline-none focus:ring-1"
									style={{ 
										color: featureDescColor,
										borderColor: borderColor,
									}}
								/>
							) : (
								<p 
									className="text-base leading-relaxed"
									style={{ color: featureDescColor }}
								>
									{feature.desc}
								</p>
							)}
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
            