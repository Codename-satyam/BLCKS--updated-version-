export default function PortfolioHero3({ content = {}, editor }) {
	const {
		headline = "Turning Ideas Into Digital Reality",
		subheadline = "Full-stack developer crafting beautiful, functional web experiences",
		stat1Label = "Projects Completed",
		stat1Value = "50+",
		stat2Label = "Happy Clients",
		stat2Value = "30+",
		stat3Label = "Years Experience",
		stat3Value = "5+",
		primaryButtonLabel = "View Portfolio",
		secondaryButtonLabel = "Download CV",
		backgroundColor = "#1a1a2e",
		accentColor = "#16c784",
		textColor = "#e4e4e7",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section
			className="w-full min-h-screen flex items-center justify-center border-b-8 px-6 py-20"
			style={{
				backgroundColor,
				borderColor: accentColor,
			}}
		>
			<div className="w-full max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left: Text Content */}
					<div>
						{isEditing ? (
							<textarea
								value={headline}
								onChange={(e) => onFieldChange("headline", e.target.value)}
								className="text-4xl md:text-6xl font-bold mb-6 border-2 rounded p-4 w-full resize-y min-h-[120px] outline-none focus:ring-2"
								style={{ backgroundColor, color: textColor, borderColor: accentColor }}
							/>
						) : (
							<h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: textColor }}>
								{headline}
							</h1>
						)}

						{isEditing ? (
							<textarea
								value={subheadline}
								onChange={(e) => onFieldChange("subheadline", e.target.value)}
								className="text-lg md:text-xl mb-12 border-2 rounded p-3 w-full resize-y min-h-[80px] outline-none focus:ring-2"
								style={{ backgroundColor, color: textColor, borderColor: accentColor }}
							/>
						) : (
							<p className="text-lg md:text-xl mb-12" style={{ color: textColor }}>
								{subheadline}
							</p>
						)}

						<div className="flex flex-col sm:flex-row gap-4 mb-12">
							{isEditing ? (
								<input
									type="text"
									value={primaryButtonLabel}
									onChange={(e) => onFieldChange("primaryButtonLabel", e.target.value)}
									className="px-8 py-4 font-bold rounded transition-all outline-none focus:ring-2"
									style={{
										backgroundColor: accentColor,
										color: backgroundColor,
										borderColor: accentColor,
									}}
								/>
							) : (
								<button
									className="px-8 py-4 font-bold rounded transition-all hover:opacity-80"
									style={{
										backgroundColor: accentColor,
										color: backgroundColor,
									}}
								>
									{primaryButtonLabel}
								</button>
							)}

							{isEditing ? (
								<input
									type="text"
									value={secondaryButtonLabel}
									onChange={(e) => onFieldChange("secondaryButtonLabel", e.target.value)}
									className="px-8 py-4 font-bold border-2 rounded transition-all outline-none focus:ring-2"
									style={{
										backgroundColor: "transparent",
										color: accentColor,
										borderColor: accentColor,
									}}
								/>
							) : (
								<button
									className="px-8 py-4 font-bold border-2 rounded transition-all hover:opacity-80"
									style={{
										backgroundColor: "transparent",
										color: accentColor,
										borderColor: accentColor,
									}}
								>
									{secondaryButtonLabel}
								</button>
							)}
						</div>
					</div>

					{/* Right: Stats */}
					<div className="grid grid-cols-3 gap-4">
						{[
							{ key: "stat1Label", label: stat1Label, value: stat1Value },
							{ key: "stat2Label", label: stat2Label, value: stat2Value },
							{ key: "stat3Label", label: stat3Label, value: stat3Value },
						].map((stat, idx) => (
							<div
								key={idx}
								className="p-6 border-2 rounded text-center"
								style={{
									backgroundColor: `${accentColor}10`,
									borderColor: accentColor,
								}}
							>
								{isEditing ? (
									<input
										type="text"
										value={stat.value}
										onChange={(e) => onFieldChange(`stat${idx + 1}Value`, e.target.value)}
										className="text-3xl font-bold mb-2 w-full border rounded px-2 py-1 text-center outline-none focus:ring-2"
										style={{
											backgroundColor,
											color: accentColor,
											borderColor: accentColor,
										}}
									/>
								) : (
									<p className="text-3xl font-bold mb-2" style={{ color: accentColor }}>
										{stat.value}
									</p>
								)}

								{isEditing ? (
									<input
										type="text"
										value={stat.label}
										onChange={(e) => onFieldChange(stat.key, e.target.value)}
										className="text-xs uppercase tracking-widest w-full border rounded px-2 py-1 text-center outline-none focus:ring-2"
										style={{
											backgroundColor,
											color: textColor,
											borderColor: accentColor,
										}}
									/>
								) : (
									<p className="text-xs uppercase tracking-widest" style={{ color: textColor }}>
										{stat.label}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
