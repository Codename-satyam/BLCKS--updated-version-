export default function Features1({ content = {}, editor }) {
	const {
		badge = "> FEATURES_01",
		title = "Why this builder works",
		feature1Title = "Drag & Drop",
		feature1Desc = "Add sections to your page with one click.",
		feature2Title = "Reusable Blocks",
		feature2Desc = "Use the same section presets across projects.",
		feature3Title = "Live Preview",
		feature3Desc = "See the page flow update as you build.",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const featureItems = [
		{ titleKey: "feature1Title", descKey: "feature1Desc", title: feature1Title, description: feature1Desc },
		{ titleKey: "feature2Title", descKey: "feature2Desc", title: feature2Title, description: feature2Desc },
		{ titleKey: "feature3Title", descKey: "feature3Desc", title: feature3Title, description: feature3Desc },
	];

	return (
		<section className="w-full bg-black text-white border-b border-cyan-900/50">
			<div className="mx-auto w-full max-w-6xl px-6 py-20 min-w-0" style={{ fontFamily: '"Bungee", cursive' }}>
				{isEditing ? (
					<input
						type="text"
						value={badge}
						onChange={(event) => onFieldChange("badge", event.target.value)}
						className="text-cyan-400 text-xs tracking-widest mb-4 bg-black/50 border border-cyan-900 px-2 py-1 w-full max-w-xs"
					/>
				) : (
					<p className="text-cyan-400 text-xs tracking-widest mb-4">{badge}</p>
				)}

				{isEditing ? (
					<textarea
						value={title}
						onChange={(event) => onFieldChange("title", event.target.value)}
						className="text-3xl md:text-5xl mb-12 break-words bg-black/50 border border-cyan-900 p-3 w-full resize-y min-h-20"
					/>
				) : (
					<h2 className="text-3xl md:text-5xl mb-12 break-words">{title}</h2>
				)}

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{featureItems.map((item, index) => (
						<article key={`${item.titleKey}-${index}`} className="border border-cyan-900/70 bg-black/50 p-6">
							{isEditing ? (
								<input
									type="text"
									value={item.title}
									onChange={(event) => onFieldChange(item.titleKey, event.target.value)}
									className="text-xl mb-4 break-words bg-black/50 border border-cyan-900 px-2 py-1 w-full"
								/>
							) : (
								<h3 className="text-xl mb-4 break-words">{item.title}</h3>
							)}
							{isEditing ? (
								<textarea
									value={item.description}
									onChange={(event) => onFieldChange(item.descKey, event.target.value)}
									className="text-gray-400 font-sans text-sm leading-relaxed break-words bg-black/50 border border-cyan-900 p-2 w-full resize-y min-h-20"
								/>
							) : (
								<p className="text-gray-400 font-sans text-sm leading-relaxed break-words">{item.description}</p>
							)}
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
