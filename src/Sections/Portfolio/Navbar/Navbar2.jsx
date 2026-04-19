export default function PortfolioNavbar2({ content = {}, editor }) {
	const {
		brandName = "Alex",
		tagline = "Developer",
		nav1 = "Portfolio",
		nav2 = "About",
		nav3 = "Blog",
		nav4 = "Contact",
		ctaLabel = "Hire Me",
		backgroundColor = "#000000",
		accentColor = "#00d9ff",
		textColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<header
			className="w-full sticky top-0 z-50 border-b-2"
			style={{
				backgroundColor,
				borderColor: accentColor,
			}}
		>
			<nav className="mx-auto w-full max-w-7xl px-6 h-24 flex items-center justify-between">
				{/* Brand Section */}
				<div className="flex flex-col">
					{isEditing ? (
						<input
							type="text"
							value={brandName}
							onChange={(e) => onFieldChange("brandName", e.target.value)}
							className="text-2xl font-bold border rounded px-2 py-1 outline-none focus:ring-2"
							style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
						/>
					) : (
						<span className="text-2xl font-bold" style={{ color: accentColor }}>
							{brandName}
						</span>
					)}
					{isEditing ? (
						<input
							type="text"
							value={tagline}
							onChange={(e) => onFieldChange("tagline", e.target.value)}
							className="text-xs font-mono uppercase tracking-widest border rounded px-1 outline-none focus:ring-2"
							style={{ backgroundColor, color: textColor, borderColor: accentColor }}
						/>
					) : (
						<span className="text-xs font-mono uppercase tracking-widest" style={{ color: textColor }}>
							{tagline}
						</span>
					)}
				</div>

				{/* Navigation Links */}
				<div className="hidden md:flex items-center gap-8">
					{[
						{ key: "nav1", value: nav1 },
						{ key: "nav2", value: nav2 },
						{ key: "nav3", value: nav3 },
						{ key: "nav4", value: nav4 },
					].map((item) => (
						<div key={item.key}>
							{isEditing ? (
								<input
									type="text"
									value={item.value}
									onChange={(e) => onFieldChange(item.key, e.target.value)}
									className="text-sm font-medium border rounded px-2 py-1 outline-none focus:ring-2"
									style={{ backgroundColor, color: textColor, borderColor: accentColor }}
								/>
							) : (
								<a href={`#${item.value.toLowerCase()}`} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: textColor }}>
									{item.value}
								</a>
							)}
						</div>
					))}
				</div>

				{/* CTA */}
				{isEditing ? (
					<input
						type="text"
						value={ctaLabel}
						onChange={(e) => onFieldChange("ctaLabel", e.target.value)}
						className="px-6 py-2 font-bold rounded border-2 outline-none focus:ring-2"
						style={{
							backgroundColor: "transparent",
							color: accentColor,
							borderColor: accentColor,
						}}
					/>
				) : (
					<button
						className="px-6 py-2 font-bold border-2 rounded transition-all hover:scale-105"
						style={{
							backgroundColor: "transparent",
							color: accentColor,
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
