export default function WorkPage3({ content = {}, editor }) {
	const {
		badge = "✧ ECOSYSTEM",
		title = "Unified Experience",
		description = "Architectural harmony across all layers. Sophisticated systems working in seamless concert.",
		item1 = "Immersive Interface",
		item2 = "Dynamic Interactions",
		item3 = "Cloud Integration",
		item4 = "Global Distribution",
		badgeColor = "#e5e7eb",
		titleColor = "#e2e8f0",
		descColor = "#cbd5e1",
		itemBgColor = "rgba(15, 23, 42, 0.5)",
		itemBorderColor = "rgba(229, 231, 235, 0.2)",
		accentColor = "#a78bfa",
		bgColor = "#0f172a",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const workItems = [
		{ key: "item1", value: item1 },
		{ key: "item2", value: item2 },
		{ key: "item3", value: item3 },
		{ key: "item4", value: item4 },
	];

	return (
		<section 
			className="relative w-full overflow-hidden"
			style={{ backgroundColor: bgColor }}
		>
			{/* Gradient orbs for visual depth */}
			<div 
				className="absolute top-0 -left-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20" 
				style={{ background: accentColor }}
			/>
			<div 
				className="absolute bottom-0 -right-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20" 
				style={{ background: "rgb(59, 130, 246)" }}
			/>

			<div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28">
				
				{/* Badge */}
				<div className="mb-6">
					{isEditing ? (
						<input 
							type="text" 
							value={badge} 
							onChange={(event) => onFieldChange("badge", event.target.value)} 
							className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border focus:outline-none w-full max-w-xs"
							style={{ 
								backgroundColor: "rgba(229, 231, 235, 0.05)",
								color: badgeColor,
								borderColor: itemBorderColor,
							}}
						/>
					) : (
						<span 
							className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border inline-block backdrop-blur-sm"
							style={{ 
								backgroundColor: "rgba(229, 231, 235, 0.05)",
								color: badgeColor,
								borderColor: itemBorderColor,
							}}
						>
							{badge}
						</span>
					)}
				</div>

				{/* Title with gradient effect */}
				<div className="mb-8">
					{isEditing ? (
						<textarea 
							value={title} 
							onChange={(event) => onFieldChange("title", event.target.value)} 
							className="text-5xl md:text-7xl font-light tracking-tight w-full resize-y min-h-32 p-3 rounded-lg border outline-none focus:ring-1"
							style={{ 
								backgroundColor: itemBgColor,
								color: titleColor,
								borderColor: itemBorderColor,
							}}
						/>
					) : (
						<h2 
							className="text-5xl md:text-7xl font-light tracking-tight leading-tight"
							style={{ color: titleColor }}
						>
							{title}
						</h2>
					)}
				</div>

				{/* Description */}
				<div className="mb-24 max-w-3xl">
					{isEditing ? (
						<textarea 
							value={description} 
							onChange={(event) => onFieldChange("description", event.target.value)} 
							className="text-sm leading-relaxed w-full resize-y min-h-24 p-3 rounded-lg border outline-none focus:ring-1"
							style={{ 
								backgroundColor: itemBgColor,
								color: descColor,
								borderColor: itemBorderColor,
							}}
						/>
					) : (
						<p 
							className="text-sm leading-relaxed"
							style={{ color: descColor }}
						>
							{description}
						</p>
					)}
				</div>

				{/* Grid */}
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{workItems.map((item, index) => (
						<li 
							key={item.key} 
							className="border rounded-lg p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-opacity-100"
							style={{ 
								backgroundColor: itemBgColor,
								borderColor: itemBorderColor,
								backdropFilter: 'blur(10px)',
							}}
						>
							<div className="flex items-start gap-4">
								<span 
									className="text-sm font-semibold uppercase whitespace-nowrap"
									style={{ color: accentColor }}
								>
									{String(index + 1).padStart(2, "0")}
								</span>
								{isEditing ? (
									<input 
										type="text" 
										value={item.value} 
										onChange={(event) => onFieldChange(item.key, event.target.value)} 
										className="flex-1 bg-transparent border-b outline-none focus:ring-1 text-sm"
										style={{ 
											color: titleColor,
											borderColor: accentColor,
										}}
									/>
								) : (
									<span 
										className="flex-1 text-sm"
										style={{ color: titleColor }}
									>
										{item.value}
									</span>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
} 
                          