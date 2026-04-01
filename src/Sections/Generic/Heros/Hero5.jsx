export default function SplitHero({ content = {}, editor }) {
	const {
		badge = "NEW RELEASE v2.0",
		title = "Empower your workflow",
		description = "Streamline your tasks with our modern toolset designed for high-performing teams. Build faster and scale easier.",
		buttonLabel = "Get Started",
		imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section className="w-full min-h-[70vh] bg-slate-50 text-slate-900 flex items-center py-16 lg:py-0 border-b border-slate-200">
			<div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-w-0">
				
				{/* Left Column: Text Content */}
				<div className="text-left font-sans flex flex-col items-start min-w-0">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(event) => onFieldChange("badge", event.target.value)}
							className="text-indigo-600 text-sm font-semibold tracking-wide mb-4 bg-white border border-indigo-200 rounded-full px-4 py-1 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<span className="text-indigo-600 text-sm font-semibold tracking-wide mb-4 bg-indigo-100/50 border border-indigo-100 px-4 py-1 rounded-full inline-block">
							{badge}
						</span>
					)}

					{isEditing ? (
						<textarea
							value={title}
							onChange={(event) => onFieldChange("title", event.target.value)}
							className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-white border border-slate-300 rounded-lg p-3 w-full resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
							{title}
						</h1>
					)}

					{isEditing ? (
						<textarea
							value={description}
							onChange={(event) => onFieldChange("description", event.target.value)}
							className="text-lg text-slate-600 mb-8 bg-white border border-slate-300 rounded-lg p-3 w-full resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
							{description}
						</p>
					)}

					{isEditing ? (
						<input
							type="text"
							value={buttonLabel}
							onChange={(event) => onFieldChange("buttonLabel", event.target.value)}
							className="bg-white border border-slate-300 text-indigo-600 rounded-lg px-6 py-3 font-medium w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<button className="bg-indigo-600 text-white rounded-lg px-8 py-4 font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
							{buttonLabel}
						</button>
					)}
				</div>

				{/* Right Column: Visual / Image */}
				<div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
					{isEditing ? (
						<div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-400 p-6">
							<p className="text-slate-500 mb-4 font-medium">Edit Image URL</p>
							<input
								type="text"
								value={imageUrl}
								onChange={(event) => onFieldChange("imageUrl", event.target.value)}
								className="w-full bg-white border border-slate-300 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
								placeholder="Paste image URL here..."
							/>
						</div>
					) : (
						<img
							src={imageUrl}
							alt="Hero showcase"
							className="w-full h-full object-cover"
						/>
					)}
				</div>

			</div>
		</section>
	);
}