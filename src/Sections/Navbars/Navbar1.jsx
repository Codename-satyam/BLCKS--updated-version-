export default function Navbar1({ content = {}, editor }) {
	const {
		brand = "BLCKS",
		link1 = "Home",
		link2 = "Build",
		link3 = "Pricing",
		link4 = "Contact",
		cta = "Login",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section className="w-full bg-black text-white border-b border-cyan-900/60" style={{ fontFamily: '"Bungee", cursive' }}>
			<div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-4">
				<nav className="w-full bg-black/70 backdrop-blur-md text-white border border-cyan-900/30 p-4 md:px-6 md:py-3 flex flex-col gap-4 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] md:items-center">
					{isEditing ? (
						<input
							type="text"
							value={brand}
							onChange={(event) => onFieldChange("brand", event.target.value)}
							className="text-cyan-400 text-[24px] bg-black/50 border border-cyan-900 px-2 py-1 w-full min-w-0"
						/>
					) : (
						<div className="text-cyan-400 text-[24px] break-words min-w-0">{brand}</div>
					)}

					<div className="min-w-0 flex flex-wrap md:flex-nowrap justify-start md:justify-center gap-3 md:gap-6 text-[14px] overflow-hidden">
						{isEditing ? (
							<>
								<input type="text" value={link1} onChange={(event) => onFieldChange("link1", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 text-[12px] w-24" />
								<input type="text" value={link2} onChange={(event) => onFieldChange("link2", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 text-[12px] w-24" />
								<input type="text" value={link3} onChange={(event) => onFieldChange("link3", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 text-[12px] w-24" />
								<input type="text" value={link4} onChange={(event) => onFieldChange("link4", event.target.value)} className="bg-black/50 border border-cyan-900 px-2 py-1 text-[12px] w-24" />
							</>
						) : (
							<>
								<a href="#" className="hover:text-cyan-400 transition-colors truncate max-w-full">{link1}</a>
								<a href="#" className="hover:text-cyan-400 transition-colors truncate max-w-full">{link2}</a>
								<a href="#" className="hover:text-cyan-400 transition-colors truncate max-w-full">{link3}</a>
								<a href="#" className="hover:text-cyan-400 transition-colors truncate max-w-full">{link4}</a>
							</>
						)}
					</div>

					<div className="flex justify-start md:justify-end min-w-0">
						{isEditing ? (
							<input
								type="text"
								value={cta}
								onChange={(event) => onFieldChange("cta", event.target.value)}
								className="border border-cyan-900 bg-black/50 px-3 py-2 text-cyan-400 w-full md:w-auto"
							/>
						) : (
							<button className="border border-cyan-400 px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors truncate max-w-full">
								{cta}
							</button>
						)}
					</div>
				</nav>
			</div>
		</section>
	);
}
