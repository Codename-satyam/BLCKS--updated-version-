export default function PortfolioProjects3({ content = {}, editor }) {
	const {
		sectionTitle = "Portfolio",
		sectionDescription = "Explore my recent projects and work samples",
		project1 = "Project 1",
		project2 = "Project 2",
		project3 = "Project 3",
		project4 = "Project 4",
		project5 = "Project 5",
		project6 = "Project 6",
		viewLabel = "View Project",
		backgroundColor = "#1a1a2e",
		accentColor = "#16c784",
		cardColor = "#16213e",
		textColor = "#e4e4e7",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const projects = [
		{ key: "project1", label: project1 },
		{ key: "project2", label: project2 },
		{ key: "project3", label: project3 },
		{ key: "project4", label: project4 },
		{ key: "project5", label: project5 },
		{ key: "project6", label: project6 },
	];

	return (
		<section className="w-full border-b-8 px-6 py-20" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl">
				{/* Header */}
				<div className="text-center mb-16">
					{isEditing ? (
						<input
							type="text"
							value={sectionTitle}
							onChange={(e) => onFieldChange("sectionTitle", e.target.value)}
							className="text-4xl md:text-5xl font-bold mb-4 border-2 rounded px-3 py-2 w-full max-w-2xl mx-auto block outline-none focus:ring-2"
							style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
						/>
					) : (
						<h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: accentColor }}>
							{sectionTitle}
						</h2>
					)}

					{isEditing ? (
						<textarea
							value={sectionDescription}
							onChange={(e) => onFieldChange("sectionDescription", e.target.value)}
							className="text-lg border-2 rounded px-3 py-2 w-full max-w-2xl mx-auto block resize-y min-h-[60px] outline-none focus:ring-2"
							style={{ backgroundColor, color: textColor, borderColor: accentColor }}
						/>
					) : (
						<p className="text-lg" style={{ color: textColor }}>
							{sectionDescription}
						</p>
					)}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="group p-8 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 hover:shadow-2xl flex flex-col justify-between min-h-[200px]"
							style={{
								backgroundColor: cardColor,
								borderColor: accentColor,
							}}
						>
							{isEditing ? (
								<input
									type="text"
									value={project.label}
									onChange={(e) => onFieldChange(project.key, e.target.value)}
									className="text-xl font-bold mb-4 border rounded px-2 py-1 w-full outline-none focus:ring-2"
									style={{
										backgroundColor,
										color: accentColor,
										borderColor: accentColor,
									}}
								/>
							) : (
								<h3 className="text-xl font-bold mb-4" style={{ color: accentColor }}>
									{project.label}
								</h3>
							)}

							{isEditing ? (
								<input
									type="text"
									value={viewLabel}
									onChange={(e) => onFieldChange("viewLabel", e.target.value)}
									className="self-start px-4 py-2 font-semibold border rounded transition-all outline-none focus:ring-2"
									style={{
										backgroundColor: "transparent",
										color: accentColor,
										borderColor: accentColor,
									}}
								/>
							) : (
								<button
									className="self-start px-4 py-2 font-semibold border rounded transition-all hover:bg-opacity-20 group-hover:opacity-100"
									style={{
										backgroundColor: "transparent",
										color: accentColor,
										borderColor: accentColor,
									}}
								>
									{viewLabel}
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
