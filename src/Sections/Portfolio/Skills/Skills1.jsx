export default function PortfolioSkills1({ content = {}, editor }) {
	const {
		title = "Skills & Expertise",
		subtitle = "Technologies and tools I work with",
		skill1 = "JavaScript",
		skill2 = "React",
		skill3 = "TypeScript",
		skill4 = "Node.js",
		skill5 = "MongoDB",
		skill6 = "Tailwind CSS",
		skill7 = "GraphQL",
		skill8 = "AWS",
		backgroundColor = "#ffffff",
		cardBgColor = "#f3f4f6",
		titleColor = "#000000",
		textColor = "#4b5563",
		accentColor = "#3b82f6",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const skills = [
		{ key: "skill1", label: skill1 },
		{ key: "skill2", label: skill2 },
		{ key: "skill3", label: skill3 },
		{ key: "skill4", label: skill4 },
		{ key: "skill5", label: skill5 },
		{ key: "skill6", label: skill6 },
		{ key: "skill7", label: skill7 },
		{ key: "skill8", label: skill8 },
	];

	return (
		<section className="w-full border-t-8 border-b-8 px-6 py-20" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl">
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={(e) => onFieldChange("title", e.target.value)}
						className="text-4xl md:text-5xl font-bold mb-4 border-2 rounded px-3 py-2 w-full max-w-2xl outline-none focus:ring-2"
						style={{ backgroundColor, color: titleColor, borderColor: accentColor }}
					/>
				) : (
					<h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: titleColor }}>
						{title}
					</h2>
				)}

				{isEditing ? (
					<textarea
						value={subtitle}
						onChange={(e) => onFieldChange("subtitle", e.target.value)}
						className="text-lg mb-12 border-2 rounded px-3 py-2 w-full max-w-2xl resize-y min-h-[60px] outline-none focus:ring-2"
						style={{ backgroundColor, color: textColor, borderColor: accentColor }}
					/>
				) : (
					<p className="text-lg mb-12" style={{ color: textColor }}>
						{subtitle}
					</p>
				)}

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{skills.map((skill, idx) => (
						<div
							key={idx}
							className="p-6 text-center rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105"
							style={{
								backgroundColor: cardBgColor,
								borderColor: accentColor,
							}}
						>
							{isEditing ? (
								<input
									type="text"
									value={skill.label}
									onChange={(e) => onFieldChange(skill.key, e.target.value)}
									className="font-semibold border rounded px-2 py-1 w-full outline-none focus:ring-2 text-center"
									style={{ backgroundColor, color: titleColor, borderColor: accentColor }}
								/>
							) : (
								<p className="font-semibold text-sm" style={{ color: titleColor }}>
									{skill.label}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
