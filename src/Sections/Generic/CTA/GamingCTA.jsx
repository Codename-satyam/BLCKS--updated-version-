export default function GamingCTA({ content = {}, editor }) {
	const {
		badge = "⚡ READY?",
		title = "Start Your Gaming Journey",
		description = "Join the fastest-growing gaming community. Create an account and start competing in minutes.",
		primaryCTA = "Create Account",
		secondaryCTA = "Watch Demo",
		badgeColor = "#00ff88",
		titleColor = "#ffffff",
		descColor = "#a0aec0",
		primaryBgColor = "#00ff88",
		primaryTextColor = "#0a0a0a",
		secondaryBorderColor = "#ff2288",
		bgGradient = "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section 
			className="w-full py-20 relative overflow-hidden border-b"
			style={{ 
				background: bgGradient,
				borderColor: `${badgeColor}20`,
			}}
		>
			{/* Gaming glow effects */}
			<div className="absolute top-10 right-20 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none" 
				style={{ 
					background: `radial-gradient(circle, ${badgeColor}, transparent)`,
				}} 
			/>
			<div className="absolute -bottom-20 left-40 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none" 
				style={{ 
					background: `radial-gradient(circle, ${secondaryBorderColor}, transparent)`,
				}} 
			/>

			<div className="mx-auto w-full max-w-4xl px-6 md:px-8 text-center relative z-10">
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
						className="w-full text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 bg-black/50 border rounded p-4 resize-y min-h-28 outline-none focus:ring-2"
						style={{ 
							color: titleColor,
							borderColor: badgeColor,
						}}
					/>
				) : (
					<h2 
						className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
						style={{ color: titleColor }}
					>
						{title}
					</h2>
				)}

				{/* Description */}
				{isEditing ? (
					<textarea
						value={description}
						onChange={(e) => onFieldChange("description", e.target.value)}
						className="w-full text-lg mb-12 bg-black/50 border rounded p-4 resize-y min-h-20 outline-none focus:ring-2 max-w-2xl mx-auto"
						style={{ 
							color: descColor,
							borderColor: badgeColor,
						}}
					/>
				) : (
					<p 
						className="text-lg mb-12 max-w-2xl mx-auto"
						style={{ color: descColor }}
					>
						{description}
					</p>
				)}

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					{isEditing ? (
						<>
							<input
								type="text"
								value={primaryCTA}
								onChange={(e) => onFieldChange("primaryCTA", e.target.value)}
								className="px-8 py-4 rounded font-bold tracking-widest outline-none focus:ring-2"
								style={{ 
									backgroundColor: primaryBgColor,
									color: primaryTextColor,
								}}
							/>
							<input
								type="text"
								value={secondaryCTA}
								onChange={(e) => onFieldChange("secondaryCTA", e.target.value)}
								className="px-8 py-4 rounded border font-bold tracking-widest outline-none focus:ring-2 bg-transparent"
								style={{ 
									borderColor: secondaryBorderColor,
									color: titleColor,
								}}
							/>
						</>
					) : (
						<>
							<button 
								className="px-8 py-4 rounded font-bold tracking-widest transition-all hover:scale-105 hover:shadow-2xl"
								style={{ 
									backgroundColor: primaryBgColor,
									color: primaryTextColor,
								}}
							>
								{primaryCTA} →
							</button>
							<button 
								className="px-8 py-4 rounded border font-bold tracking-widest transition-all hover:scale-105"
								style={{ 
									borderColor: secondaryBorderColor,
									color: titleColor,
								}}
							>
								{secondaryCTA}
							</button>
						</>
					)}
				</div>

				{/* Trust badges */}
				<div className="mt-16 pt-12 border-t" style={{ borderColor: `${badgeColor}20` }}>
					<p className="text-sm text-zinc-500 mb-4">Trusted by esports pros worldwide</p>
					<div className="flex flex-wrap justify-center gap-8">
						<div style={{ color: badgeColor }} className="font-bold">✓ Anti-Cheat Verified</div>
						<div style={{ color: badgeColor }} className="font-bold">✓ Secure Payments</div>
						<div style={{ color: badgeColor }} className="font-bold">✓ Fair Rankings</div>
					</div>
				</div>
			</div>
		</section>
	);
}
