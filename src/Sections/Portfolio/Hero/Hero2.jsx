export default function PortfolioHero2({ content = {}, editor }) {
	const {
		pretitle = "HELLO, I'M",
		name = "Alex Johnson",
		tagline = "Full-Stack Developer & Creative Technologist",
		subtitle = "Crafting digital experiences that matter. Specializing in web development, UI/UX design, and interactive storytelling.",
		cta1Label = "Explore My Work",
		cta2Label = "Let's Talk",
		scrollIndicator = "↓ Scroll to explore",
		backgroundColor = "#0a0a0a",
		accentColor = "#00d9ff",
		textColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section
			className="w-full min-h-screen flex items-center justify-center border-b-4 px-6 py-20"
			style={{
				backgroundColor,
				borderColor: accentColor,
			}}
		>
			<div className="w-full max-w-4xl text-center">
				{isEditing ? (
					<input
						type="text"
						value={pretitle}
						onChange={(e) => onFieldChange("pretitle", e.target.value)}
						className="text-xs font-mono tracking-widest mb-4 border rounded px-3 py-1 w-full max-w-xs mx-auto block outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<p className="text-xs font-mono tracking-widest mb-4" style={{ color: accentColor }}>
						{pretitle}
					</p>
				)}

				{isEditing ? (
					<textarea
						value={name}
						onChange={(e) => onFieldChange("name", e.target.value)}
						className="text-5xl md:text-7xl font-bold mb-6 border rounded p-3 w-full resize-y min-h-[100px] outline-none focus:ring-2"
						style={{ backgroundColor, color: textColor, borderColor: accentColor }}
					/>
				) : (
					<h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: textColor }}>
						{name}
					</h1>
				)}

				{isEditing ? (
					<input
						type="text"
						value={tagline}
						onChange={(e) => onFieldChange("tagline", e.target.value)}
						className="text-xl md:text-3xl font-semibold mb-6 border rounded px-3 py-2 w-full outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<h2 className="text-xl md:text-3xl font-semibold mb-6" style={{ color: accentColor }}>
						{tagline}
					</h2>
				)}

				{isEditing ? (
					<textarea
						value={subtitle}
						onChange={(e) => onFieldChange("subtitle", e.target.value)}
						className="text-base md:text-lg mb-12 max-w-2xl mx-auto border rounded p-3 w-full resize-y min-h-[80px] outline-none focus:ring-2"
						style={{ backgroundColor, color: textColor, borderColor: accentColor }}
					/>
				) : (
					<p className="text-base md:text-lg mb-12 max-w-2xl mx-auto" style={{ color: textColor }}>
						{subtitle}
					</p>
				)}

				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					{isEditing ? (
						<input
							type="text"
							value={cta1Label}
							onChange={(e) => onFieldChange("cta1Label", e.target.value)}
							className="px-8 py-3 font-semibold border-2 rounded transition-all outline-none focus:ring-2"
							style={{
								backgroundColor: accentColor,
								color: backgroundColor,
								borderColor: accentColor,
							}}
						/>
					) : (
						<button
							className="px-8 py-3 font-semibold border-2 rounded transition-all hover:scale-105"
							style={{
								backgroundColor: accentColor,
								color: backgroundColor,
								borderColor: accentColor,
							}}
						>
							{cta1Label}
						</button>
					)}

					{isEditing ? (
						<input
							type="text"
							value={cta2Label}
							onChange={(e) => onFieldChange("cta2Label", e.target.value)}
							className="px-8 py-3 font-semibold border-2 rounded transition-all outline-none focus:ring-2"
							style={{
								backgroundColor: "transparent",
								color: accentColor,
								borderColor: accentColor,
							}}
						/>
					) : (
						<button
							className="px-8 py-3 font-semibold border-2 rounded transition-all hover:scale-105"
							style={{
								backgroundColor: "transparent",
								color: accentColor,
								borderColor: accentColor,
							}}
						>
							{cta2Label}
						</button>
					)}
				</div>

				{isEditing ? (
					<input
						type="text"
						value={scrollIndicator}
						onChange={(e) => onFieldChange("scrollIndicator", e.target.value)}
						className="text-sm border rounded px-3 py-1 w-full max-w-xs mx-auto block outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<p className="text-sm animate-bounce" style={{ color: accentColor }}>
						{scrollIndicator}
					</p>
				)}
			</div>
		</section>
	);
}
