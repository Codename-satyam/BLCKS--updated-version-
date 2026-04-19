export default function PortfolioFooter1({ content = {}, editor }) {
	const {
		copyright = "© 2025 Your Name. All rights reserved.",
		social1Link = "#",
		social1Label = "LinkedIn",
		social2Link = "#",
		social2Label = "GitHub",
		social3Link = "#",
		social3Label = "Twitter",
		social4Link = "#",
		social4Label = "Email",
		backgroundColor = "#09090b",
		textColor = "#a1a1aa",
		accentColor = "#10b981",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const socialLinks = [
		{ key: "social1Label", link: social1Link, label: social1Label },
		{ key: "social2Label", link: social2Link, label: social2Label },
		{ key: "social3Label", link: social3Link, label: social3Label },
		{ key: "social4Label", link: social4Link, label: social4Label },
	];

	return (
		<footer
			className="w-full border-t"
			style={{
				backgroundColor,
				color: textColor,
				borderColor: accentColor,
			}}
		>
			<div className="mx-auto w-full max-w-7xl px-6 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					{/* Left: Social Links */}
					<div className="flex gap-6 flex-wrap justify-center md:justify-start">
						{socialLinks.map((social, idx) => (
							<div key={idx}>
								{isEditing ? (
									<input
										type="text"
										value={social.label}
										onChange={(e) => onFieldChange(social.key, e.target.value)}
										className="text-sm px-3 py-1 border rounded outline-none focus:ring-2"
										style={{
											backgroundColor,
											color: accentColor,
											borderColor: accentColor,
										}}
									/>
								) : (
									<a
										href={social.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-medium transition-colors hover:opacity-80"
										style={{ color: accentColor }}
									>
										{social.label}
									</a>
								)}
							</div>
						))}
					</div>

					{/* Right: Copyright */}
					<div>
						{isEditing ? (
							<textarea
								value={copyright}
								onChange={(e) => onFieldChange("copyright", e.target.value)}
								className="text-xs w-full max-w-xs border rounded p-2 resize-y min-h-[60px] outline-none focus:ring-2"
								style={{
									backgroundColor,
									color: textColor,
									borderColor: accentColor,
								}}
							/>
						) : (
							<p className="text-xs" style={{ color: textColor }}>
								{copyright}
							</p>
						)}
					</div>
				</div>
			</div>
		</footer>
	);
}
