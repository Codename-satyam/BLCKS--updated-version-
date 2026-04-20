export default function GamingFooter({ content = {}, editor }) {
	const {
		brand = "BATTLE ARENA",
		tagline = "Where Champions Rise",
		link1 = "Tournaments",
		link2 = "Leaderboard",
		link3 = "Teams",
		link4 = "FAQ",
		link5 = "Privacy",
		link6 = "Terms",
		social1 = "Discord",
		social2 = "Twitch",
		social3 = "Twitter",
		social4 = "YouTube",
		copyright = "© 2024 Battle Arena. All rights reserved.",
		brandColor = "#00ff88",
		textColor = "#a0aec0",
		linkColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<footer 
			className="w-full bg-black border-t"
			style={{ borderColor: `${brandColor}20` }}
		>
			{/* Main footer */}
			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					{/* Brand section */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<span className="text-2xl">🎮</span>
							{isEditing ? (
								<input
									type="text"
									value={brand}
									onChange={(e) => onFieldChange("brand", e.target.value)}
									className="font-black tracking-widest outline-none focus:ring-2 bg-black/50 border rounded px-2 py-1"
									style={{ 
										color: brandColor,
										borderColor: brandColor,
									}}
								/>
							) : (
								<span 
									className="font-black tracking-widest"
									style={{ color: brandColor }}
								>
									{brand}
								</span>
							)}
						</div>
						{isEditing ? (
							<input
								type="text"
								value={tagline}
								onChange={(e) => onFieldChange("tagline", e.target.value)}
								className="text-sm outline-none focus:ring-2 bg-black/50 border rounded px-2 py-1"
								style={{ 
									color: textColor,
									borderColor: brandColor,
								}}
							/>
						) : (
							<p 
								className="text-sm"
								style={{ color: textColor }}
							>
								{tagline}
							</p>
						)}
					</div>

					{/* Navigation links */}
					<div>
						<h3 
							className="font-bold mb-4 text-sm"
							style={{ color: brandColor }}
						>
							NAVIGATION
						</h3>
						<ul className="space-y-2">
							{[
								{ key: "link1", label: link1 },
								{ key: "link2", label: link2 },
								{ key: "link3", label: link3 },
								{ key: "link4", label: link4 },
							].map((link, idx) => (
								<li key={idx}>
									{isEditing ? (
										<input
											type="text"
											value={link.label}
											onChange={(e) => onFieldChange(link.key, e.target.value)}
											className="text-sm outline-none focus:ring-2 bg-black/50 border rounded px-2 py-1 w-full"
											style={{ 
												color: linkColor,
												borderColor: brandColor,
											}}
										/>
									) : (
										<a 
											href="#"
											className="text-sm transition-all hover:opacity-80"
											style={{ color: linkColor }}
											onClick={(e) => e.preventDefault()}
										>
											{link.label}
										</a>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Legal links */}
					<div>
						<h3 
							className="font-bold mb-4 text-sm"
							style={{ color: brandColor }}
						>
							LEGAL
						</h3>
						<ul className="space-y-2">
							{[
								{ key: "link5", label: link5 },
								{ key: "link6", label: link6 },
							].map((link, idx) => (
								<li key={idx}>
									{isEditing ? (
										<input
											type="text"
											value={link.label}
											onChange={(e) => onFieldChange(link.key, e.target.value)}
											className="text-sm outline-none focus:ring-2 bg-black/50 border rounded px-2 py-1 w-full"
											style={{ 
												color: linkColor,
												borderColor: brandColor,
											}}
										/>
									) : (
										<a 
											href="#"
											className="text-sm transition-all hover:opacity-80"
											style={{ color: linkColor }}
											onClick={(e) => e.preventDefault()}
										>
											{link.label}
										</a>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Social links */}
					<div>
						<h3 
							className="font-bold mb-4 text-sm"
							style={{ color: brandColor }}
						>
							FOLLOW US
						</h3>
						<div className="flex flex-wrap gap-2">
							{[
								{ key: "social1", label: social1, icon: "🔗" },
								{ key: "social2", label: social2, icon: "📡" },
								{ key: "social3", label: social3, icon: "𝕏" },
								{ key: "social4", label: social4, icon: "▶" },
							].map((social, idx) => (
								<button
									key={idx}
									className="px-3 py-1 text-xs border rounded transition-all hover:scale-105"
									style={{ 
										borderColor: brandColor,
										color: brandColor,
									}}
									onClick={(e) => e.preventDefault()}
								>
									{isEditing ? (
										<input
											type="text"
											value={social.label}
											onChange={(e) => onFieldChange(social.key, e.target.value)}
											className="outline-none focus:ring-2 bg-black/50 border rounded px-1 py-0 text-xs"
											style={{ 
												color: brandColor,
												borderColor: brandColor,
											}}
										/>
									) : (
										<span>{social.icon} {social.label}</span>
									)}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Divider */}
				<div 
					className="border-t mb-8"
					style={{ borderColor: `${brandColor}20` }}
				/>

				{/* Copyright */}
				{isEditing ? (
					<input
						type="text"
						value={copyright}
						onChange={(e) => onFieldChange("copyright", e.target.value)}
						className="w-full text-xs outline-none focus:ring-2 bg-black/50 border rounded px-2 py-1 text-center"
						style={{ 
							color: textColor,
							borderColor: brandColor,
						}}
					/>
				) : (
					<p 
						className="text-xs text-center"
						style={{ color: textColor }}
					>
						{copyright}
					</p>
				)}
			</div>
		</footer>
	);
}
