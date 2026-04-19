export default function Navbar1({ content = {}, editor }) {
	const {
		brand = "SYSTEM",
		link1 = "Home",
		link2 = "Features",
		link3 = "Pricing",
		link4 = "Docs",
		cta = "Launch",
		bgColor = "#0a0a0a",
		brandColor = "#00e5ff",
		linkColor = "#ffffff",
		ctaBgColor = "#00e5ff",
		ctaTextColor = "#0a0a0a",
		fontSize = "14",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section 
			className="w-full bg-black/95 text-white border-b backdrop-blur-xl overflow-hidden"
			style={{ 
				borderColor: `${brandColor}20`,
				backgroundColor: bgColor,
			}}
		>
			{/* Animated gradient line */}
			<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
			
			<div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-5">
				<nav className="flex flex-col md:flex-row items-center justify-between gap-6">
					{/* Brand */}
					<div className="flex-shrink-0">
						{isEditing ? (
							<input
								type="text"
								value={brand}
								onChange={(e) => onFieldChange("brand", e.target.value)}
								className="text-2xl font-bold tracking-wider bg-black/50 border px-3 py-2 outline-none focus:ring-2"
								style={{ 
									color: brandColor,
									borderColor: brandColor,
									focusRingColor: brandColor
								}}
							/>
						) : (
							<span 
								className="text-2xl font-bold tracking-widest"
								style={{ color: brandColor }}
							>
								{brand}
							</span>
						)}
					</div>

					{/* Links */}
					<div className="flex flex-wrap justify-center gap-8 md:gap-12 flex-1">
						{isEditing ? (
							<>
								{[
									{ key: "link1", val: link1 },
									{ key: "link2", val: link2 },
									{ key: "link3", val: link3 },
									{ key: "link4", val: link4 },
								].map((item) => (
									<input
										key={item.key}
										type="text"
										value={item.val}
										onChange={(e) => onFieldChange(item.key, e.target.value)}
										className="bg-black/50 border px-2 py-1 text-sm outline-none focus:ring-2"
										style={{ color: linkColor, borderColor: brandColor }}
									/>
								))}
							</>
						) : (
							<>
								{[link1, link2, link3, link4].map((link, idx) => (
									<a
										key={idx}
										href="#"
										className="text-sm tracking-wide transition-all duration-300 hover:opacity-100 relative group"
										style={{ color: linkColor, fontSize: `${fontSize}px` }}
									>
										{link}
										<span 
											className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
											style={{ backgroundColor: brandColor }}
										/>
									</a>
								))}
							</>
						)}
					</div>

					{/* CTA Button */}
					<div className="flex-shrink-0">
						{isEditing ? (
							<input
								type="text"
								value={cta}
								onChange={(e) => onFieldChange("cta", e.target.value)}
								className="px-6 py-2 font-semibold tracking-wider border bg-black/50 outline-none focus:ring-2"
								style={{ 
									color: ctaTextColor,
									backgroundColor: ctaBgColor,
									borderColor: ctaBgColor
								}}
							/>
						) : (
							<button 
								className="px-6 py-2.5 font-bold tracking-widest text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
								style={{ 
									backgroundColor: ctaBgColor,
									color: ctaTextColor,
									border: `2px solid ${ctaBgColor}`
								}}
							>
								{cta}
							</button>
						)}
					</div>
				</nav>
			</div>
		</section>
	);
}
