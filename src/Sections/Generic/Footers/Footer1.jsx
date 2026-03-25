export default function Footer1({ content = {}, editor }) {
	const {
		brand = "BLCKS",
		subtitle = "Template Builder Foundation",
		link1 = "Home",
		link2 = "Build",
		link3 = "Pricing",
		link4 = "Contact",
		copyrightLine = "BLCKS. All rights reserved.",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<footer className="w-full bg-black text-white border-t border-cyan-900/60">
			<div className="mx-auto w-full max-w-6xl px-6 py-12 min-w-0" style={{ fontFamily: '"Bungee", cursive' }}>
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					<div className="min-w-0">
						{isEditing ? (
							<input type="text" value={brand} onChange={(event) => onFieldChange("brand", event.target.value)} className="text-3xl text-cyan-400 mb-2 break-words bg-black/50 border border-cyan-900 px-2 py-1 w-full" />
						) : (
							<h3 className="text-3xl text-cyan-400 mb-2 break-words">{brand}</h3>
						)}

						{isEditing ? (
							<input type="text" value={subtitle} onChange={(event) => onFieldChange("subtitle", event.target.value)} className="text-gray-400 font-sans text-sm break-words bg-black/50 border border-cyan-900 px-2 py-1 w-full" />
						) : (
							<p className="text-gray-400 font-sans text-sm break-words">{subtitle}</p>
						)}
					</div>

					<nav className="flex flex-wrap gap-3 text-sm text-gray-300 min-w-0">
						{isEditing ? (
							<>
								<input type="text" value={link1} onChange={(event) => onFieldChange("link1", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 w-24" />
								<input type="text" value={link2} onChange={(event) => onFieldChange("link2", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 w-24" />
								<input type="text" value={link3} onChange={(event) => onFieldChange("link3", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 w-24" />
								<input type="text" value={link4} onChange={(event) => onFieldChange("link4", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 w-24" />
							</>
						) : (
							<>
								<a href="#" className="hover:text-cyan-400 transition-colors">{link1}</a>
								<a href="#" className="hover:text-cyan-400 transition-colors">{link2}</a>
								<a href="#" className="hover:text-cyan-400 transition-colors">{link3}</a>
								<a href="#" className="hover:text-cyan-400 transition-colors">{link4}</a>
							</>
						)}
					</nav>
				</div>

				<div className="mt-8 pt-6 border-t border-cyan-950 text-xs text-gray-500 break-words">
					{isEditing ? (
						<input type="text" value={copyrightLine} onChange={(event) => onFieldChange("copyrightLine", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 w-full" />
					) : (
						<>© {new Date().getFullYear()} {copyrightLine}</>
					)}
				</div>
			</div>
		</footer>
	);
}
