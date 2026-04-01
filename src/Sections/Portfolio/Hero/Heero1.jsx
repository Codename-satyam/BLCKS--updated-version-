export default function PortfolioHero({ content = {}, editor }) {
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
						<p className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed font-light">
							{description}
						</p>
					)}

					{isEditing ? (
						<input
							type="text"
							value={buttonLabel}
							onChange={(event) => onFieldChange("buttonLabel", event.target.value)}
							className="bg-zinc-800 border border-zinc-700 text-white rounded-full px-6 py-3 font-medium w-full max-w-xs focus:outline-none focus:border-emerald-500"
						/>
					) : (
						<button className="bg-zinc-50 text-zinc-900 rounded-full px-8 py-4 font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-900/50">
							{buttonLabel}
						</button>
					)}
				</div>

				{/* Right Column: Profile/Showcase Image */}
				<div className="relative w-full h-80 sm:h-[450px] lg:h-[550px] order-1 lg:order-2">
					{/* Decorative background element for that "portfolio" flair */}
					<div className="absolute inset-0 bg-zinc-800 rounded-3xl transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 -z-10"></div>
					
					<div className="w-full h-full rounded-3xl overflow-hidden bg-zinc-800 border border-zinc-700 relative z-10">
						{isEditing ? (
							<div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-800/90 border-2 border-dashed border-zinc-500 p-6">
								<p className="text-zinc-300 mb-4 font-medium">Edit Profile Image URL</p>
								<input
									type="text"
									value={imageUrl}
									onChange={(event) => onFieldChange("imageUrl", event.target.value)}
									className="w-full bg-zinc-900 border border-zinc-600 rounded p-3 text-sm focus:outline-none focus:border-emerald-500 text-white"
									placeholder="Paste image URL here..."
								/>
							</div>
						) : (
							<img
								src={imageUrl}
								alt="Portfolio portrait or work showcase"
								className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
							/>
						)}
					</div>
				</div>

			</div>
		</section>
	);
}