export default function PortfolioProjects1({ content = {}, editor }) {
	const {
		sectionTitle = "Featured Projects",
		sectionSubtitle = "A selection of work I'm proud of",
		project1Title = "E-Commerce Platform",
		project1Description = "Modern shopping experience with real-time inventory",
		project1Tag = "React • Node.js • MongoDB",
		project2Title = "Analytics Dashboard",
		project2Description = "Real-time data visualization and reporting",
		project2Tag = "Vue.js • D3.js • Python",
		project3Title = "Social App",
		project3Description = "Community-driven platform with messaging",
		project3Tag = "React • Firebase • GraphQL",
		backgroundColor = "#ffffff",
		cardBgColor = "#f3f4f6",
		titleColor = "#000000",
		textColor = "#4b5563",
		accentColor = "#3b82f6",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const projects = [
		{
			titleKey: "project1Title",
			descKey: "project1Description",
			tagKey: "project1Tag",
			title: project1Title,
			desc: project1Description,
			tag: project1Tag,
		},
		{
			titleKey: "project2Title",
			descKey: "project2Description",
			tagKey: "project2Tag",
			title: project2Title,
			desc: project2Description,
			tag: project2Tag,
		},
		{
			titleKey: "project3Title",
			descKey: "project3Description",
			tagKey: "project3Tag",
			title: project3Title,
			desc: project3Description,
			tag: project3Tag,
		},
	];

	return (
		<section
			className="w-full border-t-8 border-b-8 px-6 py-20"
			style={{
				backgroundColor,
				borderColor: accentColor,
			}}
		>
			<div className="mx-auto w-full max-w-7xl">
				{isEditing ? (
					<input
						type="text"
						value={sectionTitle}
						onChange={(e) => onFieldChange("sectionTitle", e.target.value)}
						className="text-4xl md:text-5xl font-bold mb-4 border-2 rounded px-3 py-2 w-full max-w-2xl outline-none focus:ring-2"
						style={{ backgroundColor, color: titleColor, borderColor: accentColor }}
					/>
				) : (
					<h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: titleColor }}>
						{sectionTitle}
					</h2>
				)}

				{isEditing ? (
					<textarea
						value={sectionSubtitle}
						onChange={(e) => onFieldChange("sectionSubtitle", e.target.value)}
						className="text-lg mb-12 border-2 rounded px-3 py-2 w-full max-w-2xl resize-y min-h-[60px] outline-none focus:ring-2"
						style={{ backgroundColor, color: textColor, borderColor: accentColor }}
					/>
				) : (
					<p className="text-lg mb-12" style={{ color: textColor }}>
						{sectionSubtitle}
					</p>
				)}

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="p-8 rounded-lg border-2 transition-all hover:shadow-xl hover:scale-105"
							style={{
								backgroundColor: cardBgColor,
								borderColor: accentColor,
							}}
						>
							{isEditing ? (
								<input
									type="text"
									value={project.title}
									onChange={(e) => onFieldChange(project.titleKey, e.target.value)}
									className="text-xl font-bold mb-3 border rounded px-2 py-1 w-full outline-none focus:ring-2"
									style={{ backgroundColor, color: titleColor, borderColor: accentColor }}
								/>
							) : (
								<h3 className="text-xl font-bold mb-3" style={{ color: titleColor }}>
									{project.title}
								</h3>
							)}

							{isEditing ? (
								<textarea
									value={project.desc}
									onChange={(e) => onFieldChange(project.descKey, e.target.value)}
									className="text-sm mb-4 border rounded px-2 py-1 w-full resize-y min-h-[60px] outline-none focus:ring-2"
									style={{ backgroundColor, color: textColor, borderColor: accentColor }}
								/>
							) : (
								<p className="text-sm mb-4" style={{ color: textColor }}>
									{project.desc}
								</p>
							)}

							{isEditing ? (
								<input
									type="text"
									value={project.tag}
									onChange={(e) => onFieldChange(project.tagKey, e.target.value)}
									className="text-xs font-mono uppercase tracking-widest border rounded px-2 py-1 w-full outline-none focus:ring-2"
									style={{
										backgroundColor,
										color: accentColor,
										borderColor: accentColor,
									}}
								/>
							) : (
								<p className="text-xs font-mono uppercase tracking-widest" style={{ color: accentColor }}>
									{project.tag}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
