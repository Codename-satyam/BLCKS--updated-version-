export default function WorkPage2({ content = {}, editor }) {
	const {
		badge = "// CORE_SYSTEMS",
		title = "INFRASTRUCTURE",
		description = "Uncompromising architecture. No frills. Pure function. Every element serves purpose.",
		item1 = "KERNEL ARCHITECTURE",
		item2 = "DIRECT API ACCESS",
		item3 = "SECURITY PROTOCOL",
		item4 = "FRONTEND SPECIFICATION",
		badgeColor = "#fbbf24",
		titleColor = "#ffffff",
		descColor = "#d1d5db",
		itemBgColor = "#18181b",
		itemBorderColor = "#fbbf24",
		bgColor = "#27272a",
		borderColor = "#fbbf24",
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
			className="w-full border-y-[6px]"
			style={{ 
				backgroundColor: bgColor,
				borderColor: borderColor,
				fontFamily: 'monospace',
			}}
		>
			<div className="mx-auto w-full max-w-6xl px-6 py-24">
				
				{/* Badge */}
				<div className="mb-8 inline-block px-4 py-1 font-black text-lg uppercase tracking-tighter border-2" style={{ 
					backgroundColor: badgeColor, 
					color: bgColor,
					borderColor: badgeColor,
				}}>
					{isEditing ? (
						<input 
							type="text" 
							value={badge} 
							onChange={(event) => onFieldChange("badge", event.target.value)} 
							className="bg-transparent border-none focus:ring-0 w-full"
							style={{ color: bgColor }}
						/>
					) : (
						<span>{badge}</span>
					)}
				</div>

				{/* Title */}
				<div className="mb-10 pl-6" style={{ borderLeft: `8px solid ${borderColor}` }}>
					{isEditing ? (
						<textarea 
							value={title} 
							onChange={(event) => onFieldChange("title", event.target.value)} 
							className="text-5xl md:text-8xl font-black uppercase leading-[0.9] p-4 w-full resize-none border-4"
							style={{ 
								backgroundColor: itemBgColor,
								color: titleColor,
								borderColor: borderColor,
							}}
						/>
					) : (
						<h2 
							className="text-5xl md:text-8xl font-black uppercase leading-[0.9] break-words"
							style={{ color: titleColor }}
						>
							{title}
						</h2>
					)}
				</div>

				{/* Description */}
				<div className="mb-16">
					{isEditing ? (
						<textarea 
							value={description} 
							onChange={(event) => onFieldChange("description", event.target.value)} 
							className="max-w-3xl text-base leading-relaxed p-3 w-full resize-y min-h-20 border-2"
							style={{ 
								backgroundColor: itemBgColor,
								color: descColor,
								borderColor: itemBorderColor,
							}}
						/>
					) : (
						<p 
							className="max-w-3xl text-base leading-relaxed"
							style={{ color: descColor }}
						>
							{description}
						</p>
					)}
				</div>

				{/* Grid */}
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{workItems.map((item, index) => (
						<li 
							key={item.key} 
							className="p-6 border-4 flex items-start gap-6 hover:translate-x-2 transition-transform duration-200"
							style={{ 
								backgroundColor: itemBgColor,
								borderColor: itemBorderColor,
							}}
						>
							<span 
								className="font-black text-2xl font-mono whitespace-nowrap"
								style={{ color: badgeColor }}
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							{isEditing ? (
								<input 
									type="text" 
									value={item.value} 
									onChange={(event) => onFieldChange(item.key, event.target.value)} 
									className="flex-1 border-b-2 p-1 outline-none focus:ring-1 text-sm font-semibold uppercase"
									style={{ 
										backgroundColor: itemBgColor,
										color: titleColor,
										borderColor: badgeColor,
									}}
								/>
							) : (
								<span 
									className="flex-1 text-sm font-semibold uppercase"
									style={{ color: titleColor }}
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
