export default function PortfolioAboutUs2({ content = {}, editor }) {
	const {
		sectionLabel = "ABOUT_WORKFLOW",
		title = "The portfolio is built like a product system.",
		description = "Each section is designed to be composable, reusable, and visually distinct while still fitting into one coherent personal brand.",
		item1Title = "DISCOVERY",
		item1Desc = "Define the audience and the type of work that should be highlighted.",
		item2Title = "STRUCTURE",
		item2Desc = "Arrange the story with clear hierarchy, proof, and action points.",
		item3Title = "PRESENTATION",
		item3Desc = "Use motion and contrast to make the portfolio feel deliberate.",
		item4Title = "ITERATION",
		item4Desc = "Refine based on feedback, performance, and project outcomes.",
		backgroundColor = "#050505",
		accentColor = "#22d3ee",
		textColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const items = [
		{ titleKey: "item1Title", descKey: "item1Desc", title: item1Title, desc: item1Desc, number: "01" },
		{ titleKey: "item2Title", descKey: "item2Desc", title: item2Title, desc: item2Desc, number: "02" },
		{ titleKey: "item3Title", descKey: "item3Desc", title: item3Title, desc: item3Desc, number: "03" },
		{ titleKey: "item4Title", descKey: "item4Desc", title: item4Title, desc: item4Desc, number: "04" },
	];

	return (
		<section className="w-full border-b-4 px-6 py-24 md:py-32 font-mono selection:bg-white selection:text-black" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl md:px-12">
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b-4 pb-8 mb-12" style={{ borderColor: accentColor }}>
					<div className="max-w-4xl">
						<div className="text-xs font-black uppercase tracking-[0.3em] mb-4" style={{ color: accentColor }}>
							{isEditing ? <input value={sectionLabel} onChange={(e) => onFieldChange("sectionLabel", e.target.value)} className="bg-transparent outline-none border-b-2 border-dashed border-current" style={{ color: accentColor }} /> : sectionLabel}
						</div>
						{isEditing ? (
							<input value={title} onChange={(e) => onFieldChange("title", e.target.value)} className="w-full bg-transparent outline-none text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4" style={{ color: textColor }} />
						) : (
							<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-tight" style={{ color: textColor }}>{title}</h2>
						)}
						{isEditing ? (
							<textarea value={description} onChange={(e) => onFieldChange("description", e.target.value)} className="w-full bg-transparent outline-none text-sm md:text-base font-bold uppercase tracking-widest border-l-4 p-4 resize-y min-h-20" style={{ color: accentColor, borderColor: accentColor }} />
						) : (
							<p className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 pl-6 max-w-3xl leading-relaxed" style={{ color: accentColor, borderColor: accentColor }}>{description}</p>
						)}
					</div>
					<div className="hidden lg:flex flex-col items-end">
						<div className="text-xs font-black uppercase tracking-widest px-2 py-1 border-2 mb-2" style={{ color: accentColor, borderColor: accentColor }}>PROCESS_ACTIVE</div>
						<div className="w-24 h-4" style={{ backgroundColor: textColor }} />
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{items.map((item) => (
						<div key={item.number} className="border-4 p-6 md:p-8 bg-black flex flex-col gap-4 transition-all duration-150" style={{ borderColor: textColor }}>
							<div className="flex items-center justify-between border-b-4 pb-3" style={{ borderColor: accentColor }}>
								<div className="text-2xl font-black" style={{ color: accentColor }}>{item.number}</div>
								<div className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: accentColor }}>PHASE</div>
							</div>
							{isEditing ? (
								<input value={item.title} onChange={(e) => onFieldChange(item.titleKey, e.target.value)} className="w-full bg-transparent outline-none text-2xl md:text-3xl font-black uppercase tracking-tighter" style={{ color: textColor }} />
							) : (
								<h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter" style={{ color: textColor }}>{item.title}</h3>
							)}
							{isEditing ? (
								<textarea value={item.desc} onChange={(e) => onFieldChange(item.descKey, e.target.value)} className="w-full bg-transparent outline-none text-sm font-bold uppercase tracking-widest resize-y min-h-20" style={{ color: accentColor, borderColor: accentColor }} />
							) : (
								<p className="text-sm font-bold uppercase tracking-widest leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>{item.desc}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
