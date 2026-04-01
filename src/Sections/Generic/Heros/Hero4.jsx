export default function Hero2({ content = {}, editor }) {
	const {
		badge = "NEW FEATURE",
		title = "Unleash your creativity",
		description = "Drag, drop, and design stunning layouts with our intuitive visual builder. No coding required.",
		buttonLabel = "Get Started",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section className="relative w-full min-h-[75vh] bg-slate-950 text-slate-50 flex items-center overflow-hidden">
			{/* Decorative Background Blur */}
			<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none"></div>

			<div className="relative mx-auto w-full max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				
				{/* Left Column: Editable Content */}
				<div className="flex flex-col items-start text-left space-y-6 min-w-0">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(event) => onFieldChange("badge", event.target.value)}
							className="text-indigo-300 text-xs font-bold tracking-widest uppercase bg-slate-900 border border-indigo-500/50 px-3 py-1.5 rounded-full w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<span className="inline-block px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase border border-indigo-500/20">
							{badge}
						</span>
					)}

					{isEditing ? (
						<textarea
							value={title}
							onChange={(event) => onFieldChange("title", event.target.value)}
							className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight break-words bg-slate-900 border border-indigo-500/50 p-4 w-full rounded-lg resize-y min-h-[140px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight break-words">
							{title}
						</h1>
					)}

					{isEditing ? (
						<textarea
							value={description}
							onChange={(event) => onFieldChange("description", event.target.value)}
							className="text-slate-400 text-lg max-w-lg break-words bg-slate-900 border border-indigo-500/50 p-4 w-full rounded-lg resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<p className="text-slate-400 text-lg max-w-lg break-words leading-relaxed">
							{description}
						</p>
					)}

					{isEditing ? (
						<input
							type="text"
							value={buttonLabel}
							onChange={(event) => onFieldChange("buttonLabel", event.target.value)}
							className="mt-4 border border-indigo-500 bg-slate-900 px-6 py-3 text-white rounded-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					) : (
						<button className="mt-4 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
							{buttonLabel}
						</button>
					)}
				</div>

				{/* Right Column: Visual/Graphic Area */}
				<div className="hidden lg:flex justify-center items-center w-full h-full min-h-[450px] bg-slate-900/50 border border-slate-800 rounded-3xl relative overflow-hidden group">
					<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent"></div>
					<div className="text-center">
						<svg className="w-12 h-12 mx-auto text-slate-700 mb-3 group-hover:text-indigo-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<p className="text-slate-600 font-mono text-sm group-hover:text-indigo-400 transition-colors duration-300">
							[ Visual Placeholder ]
						</p>
					</div>
				</div>
				
			</div>
		</section>
	);
}