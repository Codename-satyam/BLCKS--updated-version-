export default function PortfolioSkills2({ content = {}, editor }) {
	const {
		sectionTitle = "Technical Skills",
		frontendTitle = "Frontend",
		frontend1 = "HTML5",
		frontend2 = "CSS3",
		frontend3 = "JavaScript",
		frontend4 = "React",
		backendTitle = "Backend",
		backend1 = "Node.js",
		backend2 = "Python",
		backend3 = "SQL",
		backend4 = "MongoDB",
		toolsTitle = "Tools & Platforms",
		tools1 = "Git",
		tools2 = "Docker",
		tools3 = "AWS",
		tools4 = "Figma",
		backgroundColor = "#0a0a0a",
		accentColor = "#00d9ff",
		cardBgColor = "#1a1a2a",
		textColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const categories = [
		{
			titleKey: "frontendTitle",
			title: frontendTitle,
			items: [
				{ key: "frontend1", value: frontend1 },
				{ key: "frontend2", value: frontend2 },
				{ key: "frontend3", value: frontend3 },
				{ key: "frontend4", value: frontend4 },
			],
		},
		{
			titleKey: "backendTitle",
			title: backendTitle,
			items: [
				{ key: "backend1", value: backend1 },
				{ key: "backend2", value: backend2 },
				{ key: "backend3", value: backend3 },
				{ key: "backend4", value: backend4 },
			],
		},
		{
			titleKey: "toolsTitle",
			title: toolsTitle,
			items: [
				{ key: "tools1", value: tools1 },
				{ key: "tools2", value: tools2 },
				{ key: "tools3", value: tools3 },
				{ key: "tools4", value: tools4 },
			],
		},
	];

	return (
		<section className="w-full border-b-4 px-6 py-20" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl">
				{isEditing ? (
					<input
						type="text"
						value={sectionTitle}
						onChange={(e) => onFieldChange("sectionTitle", e.target.value)}
						className="text-4xl md:text-5xl font-bold mb-16 border-2 rounded px-3 py-2 w-full max-w-2xl outline-none focus:ring-2"
						style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
					/>
				) : (
					<h2 className="text-4xl md:text-5xl font-bold mb-16" style={{ color: accentColor }}>
						{sectionTitle}
					</h2>
				)}

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{categories.map((category, idx) => (
						<div key={idx} className="p-8 rounded-lg" style={{ backgroundColor: cardBgColor }}>
							{isEditing ? (
								<input
									type="text"
									value={category.title}
									onChange={(e) => onFieldChange(category.titleKey, e.target.value)}
									className="text-2xl font-bold mb-6 border-2 rounded px-3 py-1 w-full outline-none focus:ring-2"
									style={{ backgroundColor, color: accentColor, borderColor: accentColor }}
								/>
							) : (
								<h3 className="text-2xl font-bold mb-6" style={{ color: accentColor }}>
									{category.title}
								</h3>
							)}

							<div className="space-y-3">
								{category.items.map((item) => (
									<div key={item.key} className="flex items-center">
										<div
											className="w-3 h-3 rounded-full mr-3"
											style={{ backgroundColor: accentColor }}
										/>
										{isEditing ? (
											<input
												type="text"
												value={item.value}
												onChange={(e) => onFieldChange(item.key, e.target.value)}
												className="flex-1 text-sm border rounded px-2 py-1 outline-none focus:ring-2"
												style={{ backgroundColor, color: textColor, borderColor: accentColor }}
											/>
										) : (
											<span className="text-sm" style={{ color: textColor }}>
												{item.value}
											</span>
										)}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
