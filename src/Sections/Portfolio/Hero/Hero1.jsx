export default function PortfolioHero1({ content = {}, editor }) {
	const {
		badge = "🟢 AVAILABLE FOR FREELANCE",
		title = "Creative Developer & UI/UX Designer",
		description = "I bridge the gap between design and engineering to build pixel-perfect, accessible, and interactive digital experiences.",
		buttonLabel = "View Selected Work",
		imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section className="w-full min-h-[80vh] bg-zinc-900 text-zinc-50 flex items-center py-20 lg:py-0 border-b border-zinc-800">
			<div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-w-0">
				
				{/* Left Column: Bio & Intro */}
				<div className="text-left font-sans flex flex-col items-start min-w-0 order-2 lg:order-1">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(event) => onFieldChange("badge", event.target.value)}
							className="text-emerald-400 text-xs font-mono tracking-widest mb-6 bg-zinc-800 border border-zinc-700 rounded px-3 py-1 w-full max-w-xs focus:outline-none focus:border-emerald-500"
						/>
					) : (
						<span className="text-emerald-400 text-xs font-mono tracking-widest mb-6 uppercase tracking-wider">
							{badge}
						</span>
					)}

					{isEditing ? (
						<textarea
							value={title}
							onChange={(event) => onFieldChange("title", event.target.value)}
							className="text-4xl md:text-6xl font-serif leading-tight mb-6 bg-zinc-800 border border-zinc-700 rounded p-3 w-full resize-y min-h-[120px] focus:outline-none focus:border-emerald-500"
						/>
					) : (
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-white">
							{title}
						</h1>
					)}

					{isEditing ? (
						<textarea
							value={description}
							onChange={(event) => onFieldChange("description", event.target.value)}
							className="text-lg text-zinc-400 mb-10 bg-zinc-800 border border-zinc-700 rounded p-3 w-full resize-y min-h-[100px] focus:outline-none focus:border-emerald-500"
						/>
					) : (
						<p className="text-lg text-zinc-400 mb-10 leading-relaxed">
							{description}
						</p>
					)}

					{isEditing ? (
						<input
							type="text"
							value={buttonLabel}
							onChange={(event) => onFieldChange("buttonLabel", event.target.value)}
							className="font-semibold py-3 px-8 bg-emerald-500 text-zinc-900 rounded transition-all hover:bg-emerald-400 border border-emerald-500 outline-none focus:ring-2 focus:ring-emerald-300"
						/>
					) : (
						<button className="font-semibold py-3 px-8 bg-emerald-500 text-zinc-900 rounded transition-all hover:bg-emerald-400">
							{buttonLabel}
						</button>
					)}
				</div>

				{/* Right Column: Image */}
				<div className="relative order-1 lg:order-2 min-w-0">
					{isEditing ? (
						<input
							type="text"
							value={imageUrl}
							onChange={(event) => onFieldChange("imageUrl", event.target.value)}
							className="w-full h-96 border-2 border-zinc-700 rounded bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
							placeholder="Image URL"
						/>
					) : (
						<img
							src={imageUrl}
							alt="Portfolio Hero"
							className="w-full h-96 object-cover rounded-lg shadow-2xl border border-zinc-700"
						/>
					)}
				</div>
			</div>
		</section>
	);
}
