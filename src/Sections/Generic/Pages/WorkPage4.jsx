export default function WorkPage4({ content = {}, editor }) {
	const {
		badge = "PHASE 01",
		title = "Refined Approach",
		description = "Carefully curated essentials. Purposeful design. Every decision serves clarity and function.",
		item1 = "Discovery & Strategy",
		item2 = "Visual Architecture",
		item3 = "Technical Integration",
		item4 = "Quality Assurance",
		badgeColor = "#71717a",
		titleColor = "#09090b",
		descColor = "#52525b",
		itemBgColor = "#fafafa",
		itemBorderColor = "#e4e4e7",
		borderColor = "#e4e4e7",
		bgColor = "#ffffff",
		hoverColor = "#09090b",
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
			className="w-full overflow-hidden"
			style={{ backgroundColor: bgColor }}
		>
			<div className="mx-auto w-full max-w-5xl px-8 py-32 md:py-48">
				
				{/* Badge */}
				<div className="mb-12">
					{isEditing ? (
						<input 
							type="text" 
							value={badge} 
							onChange={(event) => onFieldChange("badge", event.target.value)} 
							className="text-[10px] tracking-[0.2em] font-medium bg-transparent border-b px-2 py-1 focus:outline-none w-full max-w-xs"
							style={{ 
								color: badgeColor,
								borderColor: borderColor,
							}}
						/>
					) : (
						<span 
							className="text-[10px] tracking-[0.2em] font-medium uppercase"
							style={{ color: badgeColor }}
						>
							{badge}
						</span>
					)}
				</div>

				{/* Title */}
				<div className="mb-12">
					{isEditing ? (
						<textarea 
							value={title} 
							onChange={(event) => onFieldChange("title", event.target.value)} 
							className="text-5xl md:text-7xl font-extralight tracking-tight bg-transparent border-b-2 w-full p-2 resize-y min-h-32 outline-none focus:ring-1"
							style={{ 
								color: titleColor,
								borderColor: borderColor,
							}}
						/>
					) : (
						<h2 
							className="text-5xl md:text-7xl font-extralight tracking-tight leading-tight"
							style={{ color: titleColor }}
						>
							{title}
						</h2>
					)}
				</div>

				{/* Description */}
				<div className="mb-24">
					{isEditing ? (
						<textarea 
							value={description} 
							onChange={(event) => onFieldChange("description", event.target.value)} 
							className="max-w-2xl text-base leading-relaxed bg-transparent border-b-2 w-full p-2 resize-y min-h-24 outline-none focus:ring-1"
							style={{ 
								color: descColor,
								borderColor: borderColor,
							}}
						/>
					) : (
						<p 
							className="max-w-2xl text-base leading-relaxed"
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
							className="border-2 p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
							style={{ 
								backgroundColor: itemBgColor,
								borderColor: borderColor,
							}}
						>
							<div className="flex items-start gap-6 mb-4">
								<span 
									className="text-xs font-medium uppercase whitespace-nowrap"
									style={{ color: badgeColor }}
								>
									{String(index + 1).padStart(2, "0")}
								</span>
								{isEditing ? (
									<input 
										type="text" 
										value={item.value} 
										onChange={(event) => onFieldChange(item.key, event.target.value)} 
										className="flex-1 bg-transparent border-b px-2 py-1 outline-none focus:ring-1 text-sm font-medium"
										style={{ 
											color: titleColor,
											borderColor: borderColor,
										}}
									/>
								) : (
									<span 
										className="flex-1 text-sm font-medium"
										style={{ color: titleColor }}
									>
										{item.value}
									</span>
								)}
							</div>
							<div 
								className="h-[2px] w-full"
								style={{ backgroundColor: borderColor }}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}