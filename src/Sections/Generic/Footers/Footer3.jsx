export default function Footer3({ content = {}, editor }) {
	const {
		brand = "STUDIO",
		subtitle = "SOPHISTICATED DESIGN",
		link1 = "Portfolio",
		link2 = "Process",
		link3 = "Contact",
		link4 = "Journal",
		copyrightLine = "© 2025. All inquiries welcome.",
		brandColor = "#1a1a1a",
		subtitleColor = "#999999",
		linkColor = "#1a1a1a",
		hoverColor = "#666666",
		bgColor = "#fafafa",
		borderColor = "#e5e5e5",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<footer 
			className="w-full border-t"
			style={{ 
				backgroundColor: bgColor,
				borderTopColor: borderColor,
			}}
		>
			<div className="mx-auto w-full max-w-5xl px-8 py-20">
				<div className="flex flex-col items-center text-center gap-12">
					
					{/* Brand & Subtitle */}
					<div className="flex flex-col items-center">
						{isEditing ? (
							<input 
								type="text" 
								value={brand} 
								onChange={(e) => onFieldChange("brand", e.target.value)} 
								className="text-5xl md:text-6xl font-light tracking-tight border-b-2 px-3 py-2 outline-none focus:ring-1 w-full max-w-lg bg-transparent"
								style={{ 
									color: brandColor,
									borderColor: borderColor,
								}}
							/>
						) : (
							<h3 
								className="text-5xl md:text-6xl font-light tracking-tight"
								style={{ color: brandColor }}
							>
								{brand}
							</h3>
						)}

						{isEditing ? (
							<input 
								type="text" 
								value={subtitle} 
								onChange={(e) => onFieldChange("subtitle", e.target.value)} 
								className="mt-3 text-[11px] uppercase tracking-[0.15em] border-b px-3 py-1 outline-none focus:ring-1 w-full max-w-sm bg-transparent"
								style={{ 
									color: subtitleColor,
									borderColor: borderColor,
								}}
							/>
						) : (
							<p className="mt-3 text-[11px] uppercase tracking-[0.15em]" style={{ color: subtitleColor }}>
								{subtitle}
							</p>
						)}
					</div>

					{/* Links */}
					<nav className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest">
						{[
							{ key: "link1", val: link1 },
							{ key: "link2", val: link2 },
							{ key: "link3", val: link3 },
							{ key: "link4", val: link4 },
						].map((item) => (
							isEditing ? (
								<input 
									key={item.key}
									type="text" 
									value={item.val} 
									onChange={(e) => onFieldChange(item.key, e.target.value)} 
									className="bg-transparent border-b px-2 py-0.5 outline-none focus:ring-1 w-28 text-center"
									style={{ 
										color: linkColor,
										borderColor: borderColor,
									}}
								/>
							) : (
								<a 
									key={item.key} 
									href="#" 
									className="transition-colors duration-300"
									style={{ color: linkColor }}
									onMouseEnter={(e) => e.target.style.color = hoverColor}
									onMouseLeave={(e) => e.target.style.color = linkColor}
								>
									{item.val}
								</a>
							)
						))}
					</nav>
				</div>

				{/* Copyright */}
				<div className="mt-16 pt-8 text-center border-t" style={{ borderTopColor: borderColor }}>
					{isEditing ? (
						<input 
							type="text" 
							value={copyrightLine} 
							onChange={(e) => onFieldChange("copyrightLine", e.target.value)} 
							className="text-[11px] uppercase tracking-widest px-3 py-1 outline-none focus:ring-1 w-full max-w-md mx-auto bg-transparent border-b"
							style={{ 
								color: subtitleColor,
								borderColor: borderColor,
							}}
						/>
					) : (
						<p className="text-[11px] uppercase tracking-widest" style={{ color: subtitleColor }}>
							{copyrightLine}
						</p>
					)}
				</div>
			</div>
		</footer>
	);
}