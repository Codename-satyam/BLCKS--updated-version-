export default function Footer1({ content = {}, editor }) {
	const {
		brand = "SYSTEM",
		tagline = "Build the future, powered by innovation",
		link1 = "Home",
		link2 = "Features",
		link3 = "Pricing",
		link4 = "Contact",
		copyright = "© 2025 All rights reserved",
		brandColor = "#00e5ff",
		textColor = "#a0aec0",
		linkColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const links = [
		{ key: "link1", label: link1 },
		{ key: "link2", label: link2 },
		{ key: "link3", label: link3 },
		{ key: "link4", label: link4 },
	];

	return (
		<footer 
			className="w-full bg-black text-white border-t overflow-hidden"
			style={{ borderColor: `${brandColor}20` }}
		>
			{/* Gradient top accent */}
			<div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />

			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16">
				{/* Main footer content */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
					{/* Brand section */}
					<div className="md:col-span-2">
						{isEditing ? (
							<input
								type="text"
								value={brand}
								onChange={(e) => onFieldChange("brand", e.target.value)}
								className="text-3xl font-bold mb-4 w-full bg-black/50 border rounded px-3 py-2 outline-none focus:ring-2"
								style={{ 
									color: brandColor,
									borderColor: brandColor,
								}}
							/>
						) : (
							<h3 
								className="text-3xl font-bold mb-4 tracking-widest"
								style={{ color: brandColor }}
							>
								{brand}
							</h3>
						)}

						{isEditing ? (
							<textarea
								value={tagline}
								onChange={(e) => onFieldChange("tagline", e.target.value)}
								className="w-full text-sm leading-relaxed bg-black/50 border rounded px-3 py-2 resize-y min-h-16 outline-none focus:ring-2"
								style={{ 
									color: textColor,
									borderColor: brandColor,
								}}
							/>
						) : (
							<p 
								className="text-sm leading-relaxed max-w-sm"
								style={{ color: textColor }}
							>
								{tagline}
							</p>
						)}
					</div>

					{/* Quick links */}
					<div>
						<h4 className="text-sm font-bold tracking-widest mb-6" style={{ color: brandColor }}>
							LINKS
						</h4>
						<nav className="space-y-3">
							{links.map((link) => (
								<div key={link.key}>
									{isEditing ? (
										<input
											type="text"
											value={link.label}
											onChange={(e) => onFieldChange(link.key, e.target.value)}
											className="w-full text-sm bg-black/50 border rounded px-3 py-2 outline-none focus:ring-2"
											style={{ 
												color: linkColor,
												borderColor: brandColor,
											}}
										/>
									) : (
										<a 
											href="#"
											className="text-sm transition-colors duration-300 hover:opacity-100 relative group"
											style={{ color: linkColor }}
										>
											{link.label}
											<span 
												className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
												style={{ backgroundColor: brandColor }}
											/>
										</a>
									)}
								</div>
							))}
						</nav>
					</div>

					{/* Social/Contact */}
					<div>
						<h4 className="text-sm font-bold tracking-widest mb-6" style={{ color: brandColor }}>
							CONNECT
						</h4>
						<div className="space-y-3">
							<a href="#" className="block text-sm transition-colors" style={{ color: linkColor }}>
								Twitter
							</a>
							<a href="#" className="block text-sm transition-colors" style={{ color: linkColor }}>
								LinkedIn
							</a>
							<a href="#" className="block text-sm transition-colors" style={{ color: linkColor }}>
								GitHub
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t" style={{ borderColor: `${brandColor}20` }} />

				{/* Bottom bar */}
				<div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
					{isEditing ? (
						<textarea
							value={copyright}
							onChange={(e) => onFieldChange("copyright", e.target.value)}
							className="w-full text-xs bg-black/50 border rounded px-3 py-2 resize-y min-h-12 outline-none focus:ring-2"
							style={{ 
								color: textColor,
								borderColor: brandColor,
							}}
						/>
					) : (
						<p 
							className="text-xs"
							style={{ color: textColor }}
						>
							{copyright}
						</p>
					)}

					{/* Status indicator */}
					<div className="flex items-center gap-2 text-xs" style={{ color: textColor }}>
						<div 
							className="w-2 h-2 rounded-full animate-pulse"
							style={{ backgroundColor: brandColor }}
						/>
						Status: Operational
					</div>
				</div>
			</div>
		</footer>
	);
}
