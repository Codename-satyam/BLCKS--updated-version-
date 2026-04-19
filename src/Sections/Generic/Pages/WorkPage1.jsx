export default function WorkPage1({ content = {}, editor }) {
	const {
		badge = "> SHOWCASE_01",
		title = "Complete Template Workflow",
		description = "This section displays a complete website template system with all components, layouts, and capabilities pre-configured for immediate export.",
		item1 = "Hero Section + Call-to-Action",
		item2 = "Feature Grid with Custom Icons",
		item3 = "Pricing Plans with Interactions",
		item4 = "Footer with Navigation Links",
		badgeColor = "#00d4ff",
		titleColor = "#ffffff",
		descColor = "#999999",
		itemBgColor = "#0a0a0a",
		itemBorderColor = "#1a3a3a",
		numberColor = "#00d4ff",
		bgColor = "#000000",
		borderColor = "#1a2a2a",
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
			className="w-full border-b"
			style={{ 
				backgroundColor: bgColor,
				borderBottomColor: borderColor,
				fontFamily: '"Courier New", monospace',
			}}
		>
			<div className="mx-auto w-full max-w-6xl px-6 py-20">
				{isEditing ? (
					<input 
						type="text" 
						value={badge} 
						onChange={(event) => onFieldChange("badge", event.target.value)} 
						className="text-xs tracking-widest mb-4 px-2 py-1 w-full max-w-xs border outline-none focus:ring-1"
						style={{ 
							backgroundColor: bgColor,
							color: badgeColor,
							borderColor: itemBorderColor,
						}}
					/>
				) : (
					<p 
						className="text-xs tracking-widest mb-4"
						style={{ color: badgeColor }}
					>
						{badge}
					</p>
				)}

				{isEditing ? (
					<textarea 
						value={title} 
						onChange={(event) => onFieldChange("title", event.target.value)} 
						className="text-3xl md:text-5xl mb-6 break-words border p-3 w-full resize-y min-h-20 outline-none focus:ring-1"
						style={{ 
							backgroundColor: bgColor,
							color: titleColor,
							borderColor: itemBorderColor,
						}}
					/>
				) : (
					<h2 
						className="text-3xl md:text-5xl mb-6 break-words font-semibold"
						style={{ color: titleColor }}
					>
						{title}
					</h2>
				)}

				{isEditing ? (
					<textarea 
						value={description} 
						onChange={(event) => onFieldChange("description", event.target.value)} 
						className="text-sm md:text-base max-w-2xl mb-10 leading-relaxed border p-3 w-full resize-y min-h-24 outline-none focus:ring-1"
						style={{ 
							backgroundColor: bgColor,
							color: descColor,
							borderColor: itemBorderColor,
						}}
					/>
				) : (
					<p 
						className="text-sm md:text-base max-w-2xl mb-10 leading-relaxed"
						style={{ color: descColor }}
					>
						{description}
					</p>
				)}

				<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{workItems.map((item, index) => (
						<li 
							key={item.key} 
							className="p-4 flex items-center gap-4 border transition-all duration-200 hover:translate-x-1"
							style={{ 
								backgroundColor: itemBgColor,
								borderColor: itemBorderColor,
							}}
						>
							<span 
								className="font-bold text-lg font-mono whitespace-nowrap"
								style={{ color: numberColor }}
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							{isEditing ? (
								<input 
									type="text" 
									value={item.value} 
									onChange={(event) => onFieldChange(item.key, event.target.value)} 
									className="break-words border px-2 py-1 w-full outline-none focus:ring-1 text-sm"
									style={{ 
										backgroundColor: itemBgColor,
										color: descColor,
										borderColor: itemBorderColor,
									}}
								/>
							) : (
								<span 
									className="break-words text-sm"
									style={{ color: descColor }}
								>
									{item.value}
								</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
