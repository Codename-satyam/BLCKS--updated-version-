export default function Navbar3({ content = {}, editor }) {
	const {
		brand = "STUDIO",
		link1 = "Work",
		link2 = "About",
		link3 = "Journal",
		link4 = "Contact",
		cta = "Start a Project",
		bgColor = "#ffffff",
		brandColor = "#000000",
		linkColor = "#666666",
		borderColor = "#e5e7eb",
		ctaColor = "#000000",
		ctaBgColor = "#000000",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section 
			className="w-full selection:text-white"
			style={{ 
				backgroundColor: bgColor,
				color: brandColor,
			}}
		>
			<div className="mx-auto max-w-7xl px-6 py-8">
				<nav 
					className="flex flex-col md:flex-row items-center justify-between gap-8 pb-6"
					style={{ 
						borderBottom: `1px solid ${borderColor}`,
					}}
				>
					{/* Brand */}
					<div className="flex-shrink-0">
						{isEditing ? (
							<input
								type="text"
								value={brand}
								onChange={(e) => onFieldChange("brand", e.target.value)}
								className="bg-transparent text-xl font-medium tracking-tight border-none focus:ring-1 px-2 py-1 outline-none"
								style={{ 
									color: brandColor,
									focusRingColor: brandColor,
								}}
							/>
						) : (
							<span 
								className="text-xl font-medium tracking-tighter uppercase cursor-default"
								style={{ color: brandColor }}
							>
								{brand}
							</span>
						)}
					</div>

					{/* Links */}
					<div className="flex items-center gap-10 text-[13px] font-normal tracking-wide uppercase">
						{[
							{ key: "link1", val: link1 },
							{ key: "link2", val: link2 },
							{ key: "link3", val: link3 },
							{ key: "link4", val: link4 }
						].map((link) => (
							<div key={link.key}>
								{isEditing ? (
									<input
										type="text"
										value={link.val}
										onChange={(e) => onFieldChange(link.key, e.target.value)}
										className="bg-transparent w-20 text-center focus:ring-1 border-b outline-none"
										style={{ 
											color: linkColor,
											borderColor: linkColor,
										}}
									/>
								) : (
									<a 
										href="#" 
										className="transition-colors duration-500 ease-in-out relative group"
										style={{ color: linkColor }}
										onMouseEnter={(e) => e.target.style.color = brandColor}
										onMouseLeave={(e) => e.target.style.color = linkColor}
									>
										{link.val}
										<span 
											className="absolute -bottom-0.5 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300"
											style={{ backgroundColor: brandColor }}
										/>
									</a>
								)}
							</div>
						))}
					</div>

					{/* CTA */}
					<div className="flex-shrink-0">
						{isEditing ? (
							<input
								type="text"
								value={cta}
								onChange={(e) => onFieldChange("cta", e.target.value)}
								className="px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest border outline-none focus:ring-2"
								style={{ 
									backgroundColor: ctaBgColor,
									color: "#ffffff",
									borderColor: ctaBgColor,
								}}
							/>
						) : (
							<button 
								className="px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all hover:scale-105"
								style={{ 
									backgroundColor: ctaBgColor,
									color: "#ffffff",
									border: `1px solid ${ctaBgColor}`,
								}}
							>
								{cta}
							</button>
						)}
					</div>
				</nav>

				{/* Status line */}
				{!isEditing && (
					<div className="flex justify-between items-center mt-4 text-[10px] uppercase tracking-[0.2em]" style={{ color: linkColor }}>
						<span>Available Now</span>
						<span>Est. 2024</span>
					</div>
				)}
			</div>
		</section>
	);
}
