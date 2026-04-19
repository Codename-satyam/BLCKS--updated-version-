export default function Hero2({ content = {}, editor }) {
	const {
		badge = "✨ EXPLORE",
		title = "Where Innovation Meets Experience",
		description = "Craft beautiful, responsive websites with cutting-edge tools. Transform your vision into reality without compromise.",
		buttonLabel = "Start Building",
		badgeColor = "#a855f7",
		titleColor = "#ffffff",
		descColor = "#cbd5e1",
		buttonBgColor = "#a855f7",
		buttonTextColor = "#ffffff",
		accentColor = "#a855f7",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section 
			className="w-full min-h-[85vh] bg-gradient-to-br from-black via-slate-950 to-black text-white flex items-center border-b overflow-hidden relative"
			style={{ borderColor: `${accentColor}20` }}
		>
			{/* Animated gradient background */}
			<div 
				className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 opacity-20" 
				style={{ backgroundColor: accentColor }}
			/>
			<div 
				className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] -z-10 opacity-10" 
				style={{ backgroundColor: badgeColor }}
			/>

			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
				{/* Left content */}
				<div className="flex-1 text-left min-w-0">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(e) => onFieldChange("badge", e.target.value)}
							className="px-4 py-2 rounded-full border mb-6 bg-black/50 outline-none focus:ring-2 text-sm font-semibold inline-block"
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
							className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 bg-black/50 border rounded p-4 resize-y min-h-32 w-full outline-none focus:ring-2"
							style={{ 
								color: titleColor,
								borderColor: accentColor,
							}}
						/>
					) : (
						<h1 
							className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8"
							style={{ 
								color: titleColor,
								backgroundImage: `linear-gradient(135deg, ${titleColor}, ${badgeColor})`,
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							{title}
						</h1>
					)}

					{isEditing ? (
						<textarea
							value={description}
							onChange={(e) => onFieldChange("description", e.target.value)}
							className="text-lg md:text-xl max-w-xl font-sans mb-10 bg-black/50 border rounded p-4 resize-y min-h-24 w-full outline-none focus:ring-2"
							style={{ 
								color: descColor,
								borderColor: accentColor,
							}}
						/>
					) : (
						<p 
							className="text-lg md:text-xl max-w-xl font-sans mb-10 leading-relaxed"
							style={{ color: descColor }}
						>
							{description}
						</p>
					)}

					{isEditing ? (
						<input
							type="text"
							value={buttonLabel}
							onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
							className="px-8 py-4 font-bold rounded outline-none focus:ring-2 border"
							style={{ 
								backgroundColor: buttonBgColor,
								color: buttonTextColor,
								borderColor: accentColor,
							}}
						/>
					) : (
						<button 
							className="px-8 py-4 font-bold rounded transition-all duration-300 hover:scale-105 relative group"
							style={{ 
								backgroundColor: buttonBgColor,
								color: buttonTextColor,
								border: `2px solid ${accentColor}`,
								boxShadow: `0 0 20px ${accentColor}40`,
							}}
						>
							{buttonLabel}
						</button>
					)}
				</div>

				{/* Right visual element */}
				<div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
					<div 
						className="relative w-full max-w-lg h-96 rounded-xl overflow-hidden border-2"
						style={{ 
							borderColor: accentColor,
							backgroundColor: `${accentColor}10`,
							boxShadow: `0 0 40px ${accentColor}30`,
						}}
					>
						<div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(135deg, ${accentColor}20, transparent)` }} />
						<div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ backgroundColor: accentColor }} />
					</div>
				</div>
			</div>
		</section>
	);
}
