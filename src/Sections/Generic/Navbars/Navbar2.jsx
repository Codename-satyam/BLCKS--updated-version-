export default function Navbar2({ content = {}, editor }) {
	const {
		brand = "ELEMENT",
		link1 = "Products",
		link2 = "Solutions",
		link3 = "Resources",
		link4 = "Careers",
		cta = "GET STARTED",
		brandColor = "#ff00ff",
		accentColor = "#ffff00",
		textColor = "#ffffff",
		linkHoverColor = "#00ffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section 
			className="w-full overflow-hidden border-b-4 shadow-lg"
			style={{ 
				backgroundColor: "#050505",
				borderColor: brandColor,
			}}
		>
			<div className="mx-auto w-full max-w-7xl px-4 py-6">
				<nav 
					className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-4 transition-all duration-500"
					style={{ 
						backgroundColor: "#0a0a0a",
						border: `2px solid ${accentColor}`,
						boxShadow: `0 0 15px ${brandColor}30`,
					}}
				>
					{/* Brand section */}
					<div className="flex items-center gap-3">
						<div 
							className="w-8 h-8 hidden md:block animate-pulse rounded"
							style={{ backgroundColor: brandColor }}
						/>
						{isEditing ? (
							<input
								type="text"
								value={brand}
								onChange={(e) => onFieldChange("brand", e.target.value)}
								className="bg-transparent text-3xl font-black italic outline-none uppercase tracking-tighter border-b-2 p-1"
								style={{ 
									color: brandColor,
									borderColor: brandColor,
								}}
							/>
						) : (
							<h1 
								className="text-3xl font-black italic tracking-tighter uppercase drop-shadow-lg"
								style={{ 
									color: brandColor,
									textShadow: `2px 2px 0px ${linkHoverColor}`,
								}}
							>
								{brand}
							</h1>
						)}
					</div>

					{/* Navigation links */}
					<div className="flex flex-wrap justify-center gap-6 font-bold italic uppercase text-sm">
						{[
							{ key: "link1", val: link1 },
							{ key: "link2", val: link2 },
							{ key: "link3", val: link3 },
							{ key: "link4", val: link4 }
						].map((link) => (
							<div key={link.key} className="group relative">
								{isEditing ? (
									<input
										type="text"
										value={link.val}
										onChange={(e) => onFieldChange(link.key, e.target.value)}
										className="bg-black text-sm border px-2 py-1 outline-none focus:ring-2"
										style={{ 
											color: linkHoverColor,
											borderColor: accentColor,
										}}
									/>
								) : (
									<a 
										href="#" 
										className="transition-all duration-300 relative z-10"
										style={{ color: textColor }}
										onMouseEnter={(e) => e.target.style.color = linkHoverColor}
										onMouseLeave={(e) => e.target.style.color = textColor}
									>
										{link.val}
										<span 
											className="absolute -bottom-1 left-0 w-0 h-1 group-hover:w-full transition-all"
											style={{ backgroundColor: accentColor }}
										/>
									</a>
								)}
							</div>
						))}
					</div>

					{/* CTA button */}
					<div className="relative group">
						<div 
							className="absolute inset-0 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform rounded"
							style={{ backgroundColor: accentColor }}
						/>
						{isEditing ? (
							<input
								type="text"
								value={cta}
								onChange={(e) => onFieldChange("cta", e.target.value)}
								className="relative z-10 bg-black border-2 px-6 py-2 font-black uppercase text-sm outline-none focus:ring-2 rounded"
								style={{ 
									color: brandColor,
									borderColor: "black",
								}}
							/>
						) : (
							<button 
								className="relative z-10 bg-black border-2 px-6 py-2 font-black uppercase text-sm transition-all rounded hover:translate-x-0.5 hover:translate-y-0.5"
								style={{ 
									color: textColor,
									borderColor: "black",
								}}
								onMouseEnter={(e) => e.target.style.color = brandColor}
								onMouseLeave={(e) => e.target.style.color = textColor}
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
