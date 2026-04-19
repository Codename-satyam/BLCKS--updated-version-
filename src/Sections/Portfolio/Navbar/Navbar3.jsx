export default function PortfolioNavbar3({ content = {}, editor }) {
	const {
		logo = "Portfolio",
		link1 = "Home",
		link2 = "Projects",
		link3 = "Experience",
		link4 = "Contact",
		resumeLabel = "Resume",
		backgroundColor = "#1a1a2e",
		accentColor = "#16c784",
		textColor = "#e4e4e7",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<header
			className="w-full sticky top-0 z-50 border-b-4"
			style={{
				backgroundColor,
				borderColor: accentColor,
			}}
		>
			<nav className="mx-auto w-full max-w-7xl px-6 h-20 flex items-center justify-between">
				{/* Logo */}
				{isEditing ? (
					<input
						type="text"
						value={logo}
						onChange={(e) => onFieldChange("logo", e.target.value)}
						className="text-2xl font-bold border-2 rounded px-3 py-1 outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<a href="#" className="text-2xl font-bold" style={{ color: accentColor }}>
						{logo}
					</a>
				)}

				{/* Links */}
				<div className="hidden md:flex items-center gap-6">
					{[
						{ key: "link1", value: link1 },
						{ key: "link2", value: link2 },
						{ key: "link3", value: link3 },
						{ key: "link4", value: link4 },
					].map((link) => (
						<div key={link.key}>
							{isEditing ? (
								<input
									type="text"
									value={link.value}
									onChange={(e) => onFieldChange(link.key, e.target.value)}
									className="text-sm font-medium border rounded px-2 py-1 outline-none focus:ring-2"
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

				{/* Resume Button */}
				{isEditing ? (
					<input
						type="text"
						value={resumeLabel}
						onChange={(e) => onFieldChange("resumeLabel", e.target.value)}
						className="px-6 py-2 font-bold rounded border-2 outline-none focus:ring-2"
						style={{
							backgroundColor: accentColor,
							color: backgroundColor,
							borderColor: accentColor,
						}}
					/>
				) : (
					<a
						href="#"
						className="px-6 py-2 font-bold rounded border-2 transition-all hover:opacity-80"
						style={{
							backgroundColor: accentColor,
							color: backgroundColor,
							borderColor: accentColor,
						}}
					>
						{resumeLabel}
					</a>
				)}
			</nav>
		</header>
	);
}
