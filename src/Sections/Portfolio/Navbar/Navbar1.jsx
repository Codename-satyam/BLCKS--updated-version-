export default function PortfolioNavbar1({ content = {}, editor }) {
	const {
		logo = "JD.",
		link1 = "Work",
		link2 = "Services",
		link3 = "About",
		ctaLabel = "Let's Talk",
		backgroundColor = "#09090b",
		textColor = "#f4f4f5",
		accentColor = "#10b981",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<header
			className="w-full sticky top-0 z-50 border-b"
			style={{
				backgroundColor,
				borderColor: `${accentColor}40`,
			}}
		>
			<nav className="mx-auto w-full max-w-7xl px-6 h-20 flex items-center justify-between">
				
				{/* Brand / Logo */}
				<div className="flex-shrink-0">
					{isEditing ? (
						<input
							type="text"
							value={logo}
							onChange={(e) => onFieldChange("logo", e.target.value)}
							className="text-2xl font-serif font-bold border rounded px-2 py-1 outline-none focus:ring-2"
							style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
						/>
					) : (
						<a href="#" className="text-2xl font-serif font-bold transition-colors hover:opacity-80" style={{ color: accentColor }}>
							{logo}
						</a>
					)}
				</div>

				{/* Center Links (Hidden on Mobile) */}
				<div className="hidden md:flex items-center space-x-8">
					{[
						{ key: "link1", value: link1 },
						{ key: "link2", value: link2 },
						{ key: "link3", value: link3 },
					].map((link) => (
						<div key={link.key}>
							{isEditing ? (
								<input
									type="text"
									value={link.value}
									onChange={(e) => onFieldChange(link.key, e.target.value)}
									className="text-sm border rounded px-2 py-1 outline-none focus:ring-2"
									style={{ backgroundColor, color: textColor, borderColor: accentColor }}
								/>
							) : (
								<a href={`#${link.value.toLowerCase()}`} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: textColor }}>
									{link.value}
								</a>
							)}
						</div>
					))}
				</div>

				{/* CTA Button */}
				{isEditing ? (
					<input
						type="text"
						value={ctaLabel}
						onChange={(e) => onFieldChange("ctaLabel", e.target.value)}
						className="px-6 py-2 font-semibold rounded border outline-none focus:ring-2"
						style={{
							backgroundColor: accentColor,
							color: backgroundColor,
							borderColor: accentColor,
						}}
					/>
				) : (
					<button
						className="px-6 py-2 font-semibold rounded transition-all hover:scale-105"
						style={{
							backgroundColor: accentColor,
							color: backgroundColor,
							borderColor: accentColor,
						}}
					>
						{ctaLabel}
					</button>
				)}
			</nav>
		</header>
	);
}
