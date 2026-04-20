export default function GamingHero({ content = {}, editor }) {
	const {
		badge = "🎮 JOIN THE ARENA",
		title = "Level Up Your Gaming",
		description = "Compete. Connect. Conquer. Join thousands of players in epic tournaments.",
		buttonLabel = "Play Now",
		badgeColor = "#ff2288",
		titleColor = "#ffffff",
		descColor = "#a0aec0",
		buttonBgColor = "#ff2288",
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
			{/* Gaming glow effects */}
			<div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" 
				style={{ 
					background: `radial-gradient(circle, ${badgeColor}, transparent)`,
				}} 
			/>
			<div className="absolute -bottom-32 left-20 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" 
				style={{ 
					background: `radial-gradient(circle, #00ff88, transparent)`,
				}} 
			/>

			{/* Scanlines effect */}
			<div className="absolute inset-0 opacity-5 pointer-events-none" 
				style={{ 
					backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px)",
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
						className="inline-block px-4 py-2 rounded-full border mb-8 text-sm font-semibold tracking-widest animate-pulse"
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
						{title}</h1>
				)}

				{/* Description */}
				{isEditing ? (
					<textarea
						value={description}
						onChange={(e) => onFieldChange("description", e.target.value)}
						className="w-full text-lg md:text-xl mb-12 bg-black/50 border rounded p-4 resize-y min-h-20 outline-none focus:ring-2"
						style={{ 
							color: descColor,
							borderColor: badgeColor,
						}}
					/>
				) : (
					<p 
						className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
						style={{ color: descColor }}
					>
						{description}</p>
				)}

				{/* CTA Button */}
				{isEditing ? (
					<input
						type="text"
						value={buttonLabel}
						onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
						className="px-8 py-4 rounded border text-lg font-bold tracking-widest outline-none focus:ring-2"
						style={{ 
							backgroundColor: buttonBgColor,
							color: buttonTextColor,
							borderColor: buttonBgColor,
						}}
					/>
				) : (
					<button 
						className="px-8 py-4 rounded font-bold tracking-widest text-lg transition-all hover:scale-105 hover:shadow-2xl"
						style={{ 
							backgroundColor: buttonBgColor,
							color: buttonTextColor,
						}}
					>
						{buttonLabel} →
					</button>
				)}

				{/* Stats */}
				<div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-20 text-center">
					<div>
						<div className="text-3xl font-black" style={{ color: badgeColor }}>50K+</div>
						<div className="text-sm text-zinc-500 mt-2">Active Players</div>
					</div>
					<div>
						<div className="text-3xl font-black" style={{ color: badgeColor }}>1000+</div>
						<div className="text-sm text-zinc-500 mt-2">Tournaments</div>
					</div>
					<div>
						<div className="text-3xl font-black" style={{ color: badgeColor }}>$1M+</div>
						<div className="text-sm text-zinc-500 mt-2">Prize Pool</div>
					</div>
				</div>
			</div>
		</section>
	);
}
