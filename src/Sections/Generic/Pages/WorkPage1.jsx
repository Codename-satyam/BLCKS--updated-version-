export default function WorkPage1({ content = {}, editor }) {
	const {
		badge = "> WORKPAGE_01",
		title = "Template workflow",
		description =
			"This section shows what your current page build includes and what will be exported as a complete webpage template.",
		item1 = "Hero + CTA layout",
		item2 = "Feature grid with icons",
		item3 = "Pricing cards with actions",
		item4 = "Footer with quick links",
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
		<section className="w-full bg-black text-white border-b border-cyan-900/50">
			<div className="mx-auto w-full max-w-6xl px-6 py-20 min-w-0" style={{ fontFamily: '"Bungee", cursive' }}>
				{isEditing ? (
					<input type="text" value={badge} onChange={(event) => onFieldChange("badge", event.target.value)} className="text-cyan-400 text-xs tracking-widest mb-4 bg-black/50 border border-cyan-900 px-2 py-1 w-full max-w-xs" />
				) : (
					<p className="text-cyan-400 text-xs tracking-widest mb-4">{badge}</p>
				)}

				{isEditing ? (
					<textarea value={title} onChange={(event) => onFieldChange("title", event.target.value)} className="text-3xl md:text-5xl mb-6 break-words bg-black/50 border border-cyan-900 p-3 w-full resize-y min-h-20" />
				) : (
					<h2 className="text-3xl md:text-5xl mb-6 break-words">{title}</h2>
				)}

				{isEditing ? (
					<textarea value={description} onChange={(event) => onFieldChange("description", event.target.value)} className="text-gray-400 font-sans text-sm md:text-base max-w-2xl mb-10 leading-relaxed bg-black/50 border border-cyan-900 p-3 w-full resize-y min-h-24" />
				) : (
					<p className="text-gray-400 font-sans text-sm md:text-base max-w-2xl mb-10 leading-relaxed">{description}</p>
				)}

				<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{workItems.map((item, index) => (
						<li key={item.key} className="border border-cyan-900/70 bg-black/50 p-4 flex items-center gap-3">
							<span className="text-cyan-400">{String(index + 1).padStart(2, "0")}</span>
							{isEditing ? (
								<input type="text" value={item.value} onChange={(event) => onFieldChange(item.key, event.target.value)} className="break-words bg-black/50 border border-cyan-900 px-2 py-1 w-full" />
							) : (
								<span className="break-words">{item.value}</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
