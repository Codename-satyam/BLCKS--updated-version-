export default function Hero1({ content = {}, editor }) {
	const {
		badge = "✦ NEW",
		title = "Build The Future",
		description = "Create stunning websites without code. Visual builder meets production-ready output.",
		buttonLabel = "Get Started",
		badgeColor = "#00e5ff",
		titleColor = "#ffffff",
		descColor = "#a0aec0",
		buttonBgColor = "#00e5ff",
		buttonTextColor = "#0a0a0a",
		bgGradient = "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section 
			className="w-full min-h-screen flex items-center justify-center relative overflow-hidden border-b"
			style={{ 
				background: bgGradient,
				borderColor: `${badgeColor}20`,
			}}
		>
			{/* Animated background elements */}
			<div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" 
				style={{ 
					background: `radial-gradient(circle, ${badgeColor}, transparent)`,
				}} 
			/>
			<div className="absolute -bottom-32 left-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" 
				style={{ 
					background: `radial-gradient(circle, #a855f7, transparent)`,
				}} 
			/>

			<div className="mx-auto w-full max-w-5xl px-6 md:px-8 py-32 text-center relative z-10">
				{/* Badge */}
				{isEditing ? (
					<input
						type="text"
						value={badge}
						onChange={(e) => onFieldChange("badge", e.target.value)}
						className="inline-block px-4 py-2 rounded-full border mb-8 bg-black/50 outline-none focus:ring-2 text-sm font-semibold tracking-wide"
						style={{ 
							color: badgeColor,
							borderColor: badgeColor,
						}}
					/>
				) : (
					<div 
						className="inline-block px-4 py-2 rounded-full border mb-8 text-sm font-semibold tracking-widest"
						style={{ 
							color: badgeColor,
							borderColor: `${badgeColor}40`,
							backgroundColor: `${badgeColor}05`,
						}}
					>
						{badge}
					</div>
				)}

				{/* Title */}
				{isEditing ? (
					<textarea
						value={title}
						onChange={(e) => onFieldChange("title", e.target.value)}
						className="w-full text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 bg-black/50 border rounded p-4 resize-y min-h-32 outline-none focus:ring-2"
						style={{ 
							color: titleColor,
							borderColor: badgeColor,
						}}
					/>
				) : (
					<h1 
						className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
						style={{ color: titleColor }}
					>
						{title}
					</h1>
				)}

				{/* Description */}
				{isEditing ? (
					<textarea
						value={description}
						onChange={(e) => onFieldChange("description", e.target.value)}
						className="w-full max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10 bg-black/50 border rounded p-4 resize-y min-h-24 outline-none focus:ring-2 font-sans"
						style={{ 
							color: descColor,
							borderColor: badgeColor,
						}}
					/>
				) : (
					<p 
						className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10 font-sans"
						style={{ color: descColor }}
					>
						{description}
					</p>
				)}

				{/* CTA Button */}
				{isEditing ? (
					<input
						type="text"
						value={buttonLabel}
						onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
						className="inline-block px-8 py-4 rounded font-bold text-lg tracking-wide outline-none focus:ring-2 bg-black/50 border"
						style={{ 
							backgroundColor: buttonBgColor,
							color: buttonTextColor,
							borderColor: buttonBgColor,
						}}
					/>
				) : (
					<button 
						className="inline-block px-8 py-4 rounded font-bold text-lg tracking-widest transition-all duration-300 hover:shadow-2xl hover:scale-105"
						style={{ 
							backgroundColor: buttonBgColor,
							color: buttonTextColor,
							boxShadow: `0 0 30px ${badgeColor}30`,
						}}
					>
						{buttonLabel}
					</button>
				)}

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div 
						className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
						style={{ borderColor: badgeColor, color: badgeColor }}
					>
						<div className="w-1 h-2 bg-current rounded-full animate-pulse" />
					</div>
				</div>
			</div>
		</section>
	);
}
