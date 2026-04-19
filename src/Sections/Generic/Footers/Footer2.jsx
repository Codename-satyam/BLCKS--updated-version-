export default function Footer2({ content = {}, editor }) {
	const {
		brand = "NEXUS",
		subtitle = "Modern design for modern times.",
		link1 = "About",
		link2 = "Services",
		link3 = "News",
		link4 = "Support",
		copyrightLine = "© 2025 All rights reserved.",
		bgColor = "#ffffff",
		brandColor = "#1a1a1a",
		textColor = "#666666",
		linkColor = "#666666",
		borderColor = "#e5e7eb",
		hoverColor = "#000000",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<footer 
			className="w-full border-t"
			style={{ 
				backgroundColor: bgColor,
				borderColor: borderColor,
			}}
		>
			<div className="mx-auto w-full max-w-6xl px-6 py-16">
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10" style={{ borderBottom: `1px solid ${borderColor}` }}>
					{/* Brand section */}
					<div className="max-w-sm">
						{isEditing ? (
							<input 
								type="text" 
								value={brand} 
								onChange={(e) => onFieldChange("brand", e.target.value)} 
								className="text-lg font-semibold tracking-tight mb-2 border px-2 py-1 w-full outline-none focus:ring-1"
								style={{ 
									backgroundColor: bgColor,
									color: brandColor,
									borderColor: borderColor,
								}}
							/>
						) : (
							<h3 className="text-lg font-semibold tracking-tight mb-2" style={{ color: brandColor }}>
								{brand}
							</h3>
						)}

						{isEditing ? (
							<input 
								type="text" 
								value={subtitle} 
								onChange={(e) => onFieldChange("subtitle", e.target.value)} 
								className="text-sm leading-relaxed border px-2 py-1 w-full outline-none focus:ring-1"
								style={{ 
									backgroundColor: bgColor,
									color: textColor,
									borderColor: borderColor,
								}}
							/>
						) : (
							<p className="text-sm leading-relaxed" style={{ color: textColor }}>
								{subtitle}
							</p>
						)}
					</div>

					{/* Links */}
					<nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
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
									className="bg-transparent border-b px-1 py-0.5 text-xs w-24 outline-none focus:ring-1"
									style={{ 
										color: linkColor,
										borderColor: linkColor,
									}}
								/>
							) : (
								<a 
									key={item.key} 
									href="#" 
									className="transition-colors duration-200"
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

				{/* Bottom bar */}
				<div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid ${borderColor}` }}>
					<div className="text-[11px] uppercase tracking-widest">
						{isEditing ? (
							<input 
								type="text" 
								value={copyrightLine} 
								onChange={(e) => onFieldChange("copyrightLine", e.target.value)} 
								className="bg-transparent border-b px-1 py-0.5 w-64 outline-none focus:ring-1"
								style={{ 
									color: textColor,
									borderColor: borderColor,
								}}
							/>
						) : (
							<p style={{ color: textColor }}>
								{copyrightLine}
							</p>
						)}
					</div>
					<div className="text-xs uppercase tracking-widest" style={{ color: textColor }}>
						Made with care
					</div>
				</div>
			</div>
		</footer>
	);
}