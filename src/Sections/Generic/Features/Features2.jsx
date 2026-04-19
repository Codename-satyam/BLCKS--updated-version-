export default function Features2({ content = {}, editor }) {
	const {
		badge = "🚀 CAPABILITIES",
		title = "BUILT FOR POWER",
		feature1Title = "ULTRA-FAST",
		feature1Desc = "Lightning performance. Zero compromises.",
		feature2Title = "ROCK SOLID",
		feature2Desc = "Enterprise-grade reliability guaranteed.",
		feature3Title = "GLOBAL SCALE",
		feature3Desc = "Deploy instantly across the world.",
		bgColor = "#ffffff",
		badgeColor = "#000000",
		titleColor = "#000000",
		featureBgColor = "#ffffff",
		featureBorderColor = "#000000",
		featureTitleColor = "#000000",
		featureDescColor = "#333333",
		hoverBgColor = "#ffff00",
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
			className="w-full border-y-8"
			style={{ 
				backgroundColor: bgColor,
				color: titleColor,
				borderColor: featureBorderColor,
			}}
		>
			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-24">
				{/* Badge section */}
				<div className="mb-8">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(e) => onFieldChange("badge", e.target.value)}
							className="text-sm uppercase px-4 py-1 inline-block font-black border-4"
							style={{ 
								backgroundColor: badgeColor,
								color: bgColor,
								borderColor: featureBorderColor,
							}}
						/>
					) : (
						<span 
							className="text-sm uppercase px-4 py-1 inline-block font-black border-4"
							style={{ 
								backgroundColor: badgeColor,
								color: bgColor,
								borderColor: featureBorderColor,
							}}
						>
							{badge}
						</span>
					)}
				</div>

				{/* Main title */}
				<div className="mb-20">
					{isEditing ? (
						<textarea
							value={title}
							onChange={(e) => onFieldChange("title", e.target.value)}
							className="text-6xl md:text-9xl font-black leading-tight tracking-tighter uppercase bg-gray-100 border-8 p-4 w-full min-h-40 resize-y outline-none focus:ring-2"
							style={{ 
								color: titleColor,
								borderColor: featureBorderColor,
							}}
						/>
					) : (
						<h2 
							className="text-6xl md:text-9xl font-black leading-tight tracking-tighter uppercase break-words"
							style={{ color: titleColor }}
						>
							{title}
						</h2>
					)}
				</div>

				{/* Features grid */}
				<div 
					className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-black overflow-hidden border-8"
					style={{ borderColor: featureBorderColor }}
				>
					{features.map((feature, idx) => (
						<article 
							key={`${feature.titleKey}-${idx}`}
							className="p-10 transition-all duration-200 group cursor-pointer"
							style={{ 
								backgroundColor: featureBgColor,
								borderRight: idx < 2 ? `8px solid ${featureBorderColor}` : "none",
								borderBottom: idx < features.length - 1 ? `8px solid ${featureBorderColor}` : "none",
							}}
							onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBgColor}
							onMouseLeave={(e) => e.currentTarget.style.backgroundColor = featureBgColor}
						>
							{/* Title */}
							{isEditing ? (
								<input
									type="text"
									value={feature.title}
									onChange={(e) => onFieldChange(feature.titleKey, e.target.value)}
									className="text-3xl font-black uppercase mb-6 bg-gray-100 border-4 px-2 py-1 w-full outline-none focus:ring-2"
									style={{ 
										color: featureTitleColor,
										borderColor: featureBorderColor,
									}}
								/>
							) : (
								<h3 
									className="text-3xl font-black uppercase mb-6 leading-none"
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
									className="text-lg font-bold leading-tight bg-gray-100 border-4 p-2 w-full min-h-24 resize-y outline-none focus:ring-2"
									style={{ 
										color: featureDescColor,
										borderColor: featureBorderColor,
									}}
								/>
							) : (
								<p 
									className="text-lg font-bold leading-tight"
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
