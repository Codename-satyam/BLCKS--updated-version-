export default function PortfolioProjects2({ content = {}, editor }) {
	const {
		heading = "Recent Work",
		subheading = "Showcasing my latest projects",
		project1Title = "Project One",
		project1Desc = "Description of your project",
		project1Image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60",
		project2Title = "Project Two",
		project2Desc = "Description of your project",
		project2Image = "https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=500&q=60",
		project3Title = "Project Three",
		project3Desc = "Description of your project",
		project3Image = "https://images.unsplash.com/photo-1460925895917-adf4e0655519?auto=format&fit=crop&w=500&q=60",
		project4Title = "Project Four",
		project4Desc = "Description of your project",
		project4Image = "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=500&q=60",
		backgroundColor = "#0a0a0a",
		accentColor = "#00d9ff",
		textColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const projects = [
		{ titleKey: "project1Title", descKey: "project1Desc", imageKey: "project1Image", title: project1Title, desc: project1Desc, image: project1Image },
		{ titleKey: "project2Title", descKey: "project2Desc", imageKey: "project2Image", title: project2Title, desc: project2Desc, image: project2Image },
		{ titleKey: "project3Title", descKey: "project3Desc", imageKey: "project3Image", title: project3Title, desc: project3Desc, image: project3Image },
		{ titleKey: "project4Title", descKey: "project4Desc", imageKey: "project4Image", title: project4Title, desc: project4Desc, image: project4Image },
	];

	return (
		<section className="w-full border-b-4 px-6 py-20" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl">
				{isEditing ? (
					<input
						type="text"
						value={heading}
						onChange={(e) => onFieldChange("heading", e.target.value)}
						className="text-4xl md:text-5xl font-bold mb-3 border-2 rounded px-3 py-2 w-full max-w-2xl outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: accentColor }}>
						{heading}
					</h2>
				)}

				{isEditing ? (
					<textarea
						value={subheading}
						onChange={(e) => onFieldChange("subheading", e.target.value)}
						className="text-lg mb-12 border-2 rounded px-3 py-2 w-full max-w-2xl resize-y min-h-[60px] outline-none focus:ring-2"
						style={{ backgroundColor, color: textColor, borderColor: accentColor }}
					/>
				) : (
					<p className="text-lg mb-12" style={{ color: textColor }}>
						{subheading}
					</p>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="group overflow-hidden rounded-lg border-2 transition-all hover:scale-105"
							style={{ borderColor: accentColor }}
						>
							{isEditing ? (
								<input
									type="text"
									value={project.image}
									onChange={(e) => onFieldChange(project.imageKey, e.target.value)}
									className="w-full h-64 border-2 border-dashed rounded bg-zinc-900 px-3 py-2 text-sm outline-none focus:ring-2"
									style={{ borderColor: accentColor }}
									placeholder="Image URL"
								/>
							) : (
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
								/>
							)}

							<div className="p-6" style={{ backgroundColor }}>
								{isEditing ? (
									<input
										type="text"
										value={project.title}
										onChange={(e) => onFieldChange(project.titleKey, e.target.value)}
										className="text-xl font-bold mb-2 border rounded px-2 py-1 w-full outline-none focus:ring-2"
										style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
									/>
								) : (
									<h3 className="text-xl font-bold mb-2" style={{ color: accentColor }}>
										{project.title}
									</h3>
								)}

								{isEditing ? (
									<textarea
										value={project.desc}
										onChange={(e) => onFieldChange(project.descKey, e.target.value)}
										className="text-sm border rounded px-2 py-1 w-full resize-y min-h-[50px] outline-none focus:ring-2"
										style={{ backgroundColor, color: textColor, borderColor: accentColor }}
									/>
								) : (
									<p className="text-sm" style={{ color: textColor }}>
										{project.desc}
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
