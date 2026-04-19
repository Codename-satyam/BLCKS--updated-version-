export default function PortfolioFooter3({ content = {}, editor }) {
	const {
		quote = "Thank you for visiting my portfolio",
		quote2 = "Let's create something amazing together",
		ctaLabel = "Start a Project",
		ctaLink = "#contact",
		navLink1 = "Home",
		navLink2 = "Portfolio",
		navLink3 = "Services",
		navLink4 = "Contact",
		copyright = "© 2025. All rights reserved.",
		backgroundColor = "#1a1a1a",
		accentColor = "#ff6b35",
		textColor = "#e0e0e0",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<footer
			className="w-full"
			style={{ backgroundColor }}
		>
			{/* CTA Section */}
			<div
				className="border-y-2 py-12 text-center"
				style={{ borderColor: accentColor, color: textColor }}
			>
				{isEditing ? (
					<textarea
						value={quote}
						onChange={(e) => onFieldChange("quote", e.target.value)}
						className="text-2xl md:text-4xl font-bold mb-4 w-full max-w-3xl mx-auto border rounded p-3 resize-y min-h-[80px] outline-none focus:ring-2"
						style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor, color: textColor }}
					/>
				) : (
					<h3 className="text-2xl md:text-4xl font-bold mb-4">{quote}</h3>
				)}

				{isEditing ? (
					<textarea
						value={quote2}
						onChange={(e) => onFieldChange("quote2", e.target.value)}
						className="text-lg md:text-xl mb-8 w-full max-w-2xl mx-auto border rounded p-3 resize-y min-h-[60px] outline-none focus:ring-2"
						style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor, color: textColor }}
					/>
				) : (
					<p className="text-lg md:text-xl mb-8">{quote2}</p>
				)}

				{isEditing ? (
					<input
						type="text"
						value={ctaLabel}
						onChange={(e) => onFieldChange("ctaLabel", e.target.value)}
						className="inline-block font-bold uppercase px-8 py-3 border-2 rounded transition-all hover:scale-105 outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<a
						href={ctaLink}
						className="inline-block font-bold uppercase px-8 py-3 border-2 rounded transition-all hover:scale-105"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					>
						{ctaLabel}
					</a>
				)}
			</div>

			{/* Bottom Links */}
			<div className="mx-auto w-full max-w-7xl px-6 py-8">
				<div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
					{[
						{ key: "navLink1", value: navLink1 },
						{ key: "navLink2", value: navLink2 },
						{ key: "navLink3", value: navLink3 },
						{ key: "navLink4", value: navLink4 },
					].map((link, idx) => (
						<div key={idx}>
							{isEditing ? (
								<input
									type="text"
									value={link.value}
									onChange={(e) => onFieldChange(link.key, e.target.value)}
									className="text-sm border rounded px-2 py-1 outline-none focus:ring-2"
									style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor, color: textColor }}
								/>
							) : (
								<a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: textColor }}>
									{link.value}
								</a>
							)}
						</div>
					))}
				</div>

				<div className="text-center border-t pt-8" style={{ borderColor: `${accentColor}40` }}>
					{isEditing ? (
						<input
							type="text"
							value={copyright}
							onChange={(e) => onFieldChange("copyright", e.target.value)}
							className="text-xs border rounded px-2 py-1 w-full max-w-xs mx-auto block outline-none focus:ring-2"
							style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor, color: textColor }}
						/>
					) : (
						<p className="text-xs" style={{ color: textColor }}>
							{copyright}
						</p>
					)}
				</div>
			</div>
		</footer>
	);
}
