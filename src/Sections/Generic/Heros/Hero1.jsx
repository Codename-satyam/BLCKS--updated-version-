export default function Hero1({ content = {}, editor }) {
	const {
		badge = "> HERO_01",
		title = "Build your page in blocks",
		description = "Start with prebuilt sections and compose a complete landing page in minutes.",
		buttonLabel = "Start Building",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section className="w-full min-h-[70vh] bg-black text-white flex items-center border-b border-cyan-900/50">
			<div className="mx-auto w-full max-w-6xl px-6 py-20 text-center min-w-0" style={{ fontFamily: '"Bungee", cursive' }}>
				{isEditing ? (
					<input
						type="text"
						value={badge}
						onChange={(event) => onFieldChange("badge", event.target.value)}
						className="text-cyan-400 text-xs tracking-widest mb-4 bg-black/50 border border-cyan-900 px-2 py-1 w-full max-w-xs mx-auto text-center"
					/>
				) : (
					<p className="text-cyan-400 text-xs tracking-widest mb-4">{badge}</p>
				)}

				{isEditing ? (
					<textarea
						value={title}
						onChange={(event) => onFieldChange("title", event.target.value)}
						className="text-4xl md:text-6xl leading-tight mb-6 break-words bg-black/50 border border-cyan-900 p-3 w-full text-center resize-y min-h-20"
					/>
				) : (
					<h1 className="text-4xl md:text-6xl leading-tight mb-6 break-words">{title}</h1>
				)}

				{isEditing ? (
					<textarea
						value={description}
						onChange={(event) => onFieldChange("description", event.target.value)}
						className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-sans break-words bg-black/50 border border-cyan-900 p-3 w-full resize-y min-h-24"
					/>
				) : (
					<p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-sans break-words">{description}</p>
				)}

				{isEditing ? (
					<input
						type="text"
						value={buttonLabel}
						onChange={(event) => onFieldChange("buttonLabel", event.target.value)}
						className="mt-8 border border-cyan-500 bg-black/50 px-4 py-2 text-cyan-400 text-center"
					/>
				) : (
				<button className="mt-8 border border-cyan-400 text-cyan-400 px-6 py-3 hover:bg-cyan-400 hover:text-black transition-colors">
						{buttonLabel}
					</button>
				)}
			</div>
		</section>
	);
}
