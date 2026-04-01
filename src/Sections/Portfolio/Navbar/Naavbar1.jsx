export default function PortfolioNav({ content = {}, editor }) {
	const {
		logo = "JD.",
		link1 = "Work",
		link2 = "Services",
		link3 = "About",
		ctaLabel = "Let's Talk",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<header className="w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50 text-zinc-50">
			<nav className="mx-auto w-full max-w-7xl px-6 h-20 flex items-center justify-between">
				
				{/* Brand / Logo */}
				<div className="flex-shrink-0">
					{isEditing ? (
						<input
							type="text"
							value={logo}
							onChange={(event) => onFieldChange("logo", event.target.value)}
							className="text-xl font-serif font-bold bg-zinc-800 border border-zinc-700 rounded px-2 py-1 w-24 focus:outline-none focus:border-emerald-500 text-white"
						/>
					) : (
						<a href="#" className="text-2xl font-serif font-bold tracking-tighter text-white hover:text-emerald-400 transition-colors">
							{logo}
						</a>
					)}
				</div>

				{/* Center Links (Hidden on Mobile) */}
				<div className="hidden md:flex items-center space-x-8">
					{[
						{ key: "link1", value: link1 },
						{ key: "link2", value: link2 },
						{ key: "link3", value: link3 },
					].map((link) => (
						<div key={link.key}>
							{isEditing ? (
								<input
									type="text"
									value={link.value}
									onChange={(event) => onFieldChange(link.key, event.target.value)}
									className="text-sm bg-zinc-800 border border-zinc-700 rounded px-2 py-1 w-20 text-center focus:outline-none focus:border-emerald-500 text-zinc-300"
								/>
							) : (
								<a href={`#${link.value.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
									{link.value}
								</a>
							)}
						</div>
					))}
				</div>

				{/* Right CTA */}
				<div className="flex-shrink-0 flex items-center">
					{isEditing ? (
						<input
							type="text"
							value={ctaLabel}
							onChange={(event) => onFieldChange("ctaLabel", event.target.value)}
							className="text-sm bg-zinc-800 border border-zinc-700 rounded-full px-4 py-2 w-32 text-center focus:outline-none focus:border-emerald-500 text-white"
						/>
					) : (
						<button className="text-sm font-medium border border-zinc-700 text-zinc-300 rounded-full px-6 py-2 hover:border-emerald-500 hover:text-emerald-400 transition-colors">
							{ctaLabel}
						</button>
					)}
				</div>

			</nav>
		</header>
	);
}