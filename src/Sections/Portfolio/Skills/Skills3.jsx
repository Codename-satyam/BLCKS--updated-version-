export default function PortfolioSkills3({ content = {}, editor }) {
	const {
		title = "Core Competencies",
		description = "Areas where I excel and create value",
		competency1 = "Web Development",
		competency1Desc = "Full-stack development with modern frameworks and best practices",
		competency2 = "UI/UX Design",
		competency2Desc = "Creating beautiful, intuitive, and accessible user interfaces",
		competency3 = "Problem Solving",
		competency3Desc = "Analytical approach to complex technical challenges",
		competency4 = "Team Collaboration",
		competency4Desc = "Effective communication and agile methodology experience",
		backgroundColor = "#1a1a2e",
		accentColor = "#16c784",
		cardBgColor = "#16213e",
		textColor = "#e4e4e7",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const competencies = [
		{
			titleKey: "competency1",
			descKey: "competency1Desc",
			title: competency1,
			desc: competency1Desc,
		},
		{
			titleKey: "competency2",
			descKey: "competency2Desc",
			title: competency2,
			desc: competency2Desc,
		},
		{
			titleKey: "competency3",
			descKey: "competency3Desc",
			title: competency3,
			desc: competency3Desc,
		},
		{
			titleKey: "competency4",
			descKey: "competency4Desc",
			title: competency4,
			desc: competency4Desc,
		},
	];

	return (
		<section className="w-full border-b-8 px-6 py-20" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl">
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={(e) => onFieldChange("title", e.target.value)}
						className="text-4xl md:text-5xl font-bold mb-4 border-2 rounded px-3 py-2 w-full max-w-2xl outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: accentColor }}>
						{title}
					</h2>
				)}

				{isEditing ? (
					<textarea
						value={description}
						onChange={(e) => onFieldChange("description", e.target.value)}
						className="text-lg mb-12 border-2 rounded px-3 py-2 w-full max-w-2xl resize-y min-h-[60px] outline-none focus:ring-2"
						style={{ backgroundColor, color: textColor, borderColor: accentColor }}
					/>
				) : (
					<p className="text-lg mb-12" style={{ color: textColor }}>
						{description}
					</p>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{competencies.map((comp, idx) => (
						<div
							key={idx}
							className="p-8 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-xl"
							style={{
								backgroundColor: cardBgColor,
								borderColor: accentColor,
							}}
						>
							{isEditing ? (
								<input
									type="text"
									value={comp.title}
									onChange={(e) => onFieldChange(comp.titleKey, e.target.value)}
									className="text-2xl font-bold mb-3 border rounded px-2 py-1 w-full outline-none focus:ring-2"
									style={{
										backgroundColor,
										color: accentColor,
										borderColor: accentColor,
									}}
								/>
							) : (
								<h3 className="text-2xl font-bold mb-3" style={{ color: accentColor }}>
									{comp.title}
								</h3>
							)}

							{isEditing ? (
								<textarea
									value={comp.desc}
									onChange={(e) => onFieldChange(comp.descKey, e.target.value)}
									className="text-sm border rounded px-2 py-1 w-full resize-y min-h-[60px] outline-none focus:ring-2"
									style={{ backgroundColor, color: textColor, borderColor: accentColor }}
								/>
							) : (
								<p className="text-sm" style={{ color: textColor }}>
									{comp.desc}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
