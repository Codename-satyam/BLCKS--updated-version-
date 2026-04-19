export default function PortfolioFooter2({ content = {}, editor }) {
	const {
		sectionTitle = "Let's Connect",
		email = "hello@yourname.com",
		phone = "+1 (555) 123-4567",
		location = "San Francisco, CA",
		footerText = "Open to freelance and full-time opportunities",
		backgroundColor = "#000000",
		textColor = "#ffffff",
		accentColor = "#3b82f6",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<footer
			className="w-full border-t-4"
			style={{
				backgroundColor,
				color: textColor,
				borderColor: accentColor,
			}}
		>
			<div className="mx-auto w-full max-w-7xl px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Contact Info */}
					<div className="space-y-4">
						<h3 className="text-lg font-bold" style={{ color: accentColor }}>
							Contact
						</h3>
						{isEditing ? (
							<input
								type="email"
								value={email}
								onChange={(e) => onFieldChange("email", e.target.value)}
								className="block w-full border px-3 py-1 text-sm rounded outline-none focus:ring-2"
								style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor }}
							/>
						) : (
							<p className="text-sm">{email}</p>
						)}
						{isEditing ? (
							<input
								type="tel"
								value={phone}
								onChange={(e) => onFieldChange("phone", e.target.value)}
								className="block w-full border px-3 py-1 text-sm rounded outline-none focus:ring-2"
								style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor }}
							/>
						) : (
							<p className="text-sm">{phone}</p>
						)}
					</div>

					{/* Location */}
					<div className="space-y-4">
						<h3 className="text-lg font-bold" style={{ color: accentColor }}>
							Location
						</h3>
						{isEditing ? (
							<input
								type="text"
								value={location}
								onChange={(e) => onFieldChange("location", e.target.value)}
								className="block w-full border px-3 py-1 text-sm rounded outline-none focus:ring-2"
								style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor }}
							/>
						) : (
							<p className="text-sm">{location}</p>
						)}
					</div>

					{/* Status */}
					<div className="space-y-4">
						<h3 className="text-lg font-bold" style={{ color: accentColor }}>
							Status
						</h3>
						{isEditing ? (
							<textarea
								value={footerText}
								onChange={(e) => onFieldChange("footerText", e.target.value)}
								className="block w-full border px-3 py-1 text-sm rounded resize-y min-h-[60px] outline-none focus:ring-2"
								style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor }}
							/>
						) : (
							<p className="text-sm">{footerText}</p>
						)}
					</div>
				</div>

				<div className="mt-12 pt-8 border-t" style={{ borderColor: `${accentColor}40` }}>
					{isEditing ? (
						<input
							type="text"
							value={sectionTitle}
							onChange={(e) => onFieldChange("sectionTitle", e.target.value)}
							className="text-center text-xs font-mono uppercase tracking-widest border px-3 py-1 w-full max-w-xs mx-auto block rounded outline-none focus:ring-2"
							style={{ backgroundColor: `${accentColor}20`, borderColor: accentColor }}
						/>
					) : (
						<p className="text-center text-xs font-mono uppercase tracking-widest" style={{ color: accentColor }}>
							{sectionTitle}
						</p>
					)}
				</div>
			</div>
		</footer>
	);
}
