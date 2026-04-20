export default function PortfolioAboutUs1({ content = {}, editor }) {
	const {
		sectionLabel = "ABOUT_THE_CREATOR",
		title = "Designing systems that feel precise and human.",
		description = "I build portfolio experiences that combine product thinking, motion, and strong content hierarchy so the work feels credible at first glance.",
		stat1Value = "08+",
		stat1Label = "YEARS BUILDING",
		stat2Value = "40+",
		stat2Label = "PROJECTS SHIPPED",
		stat3Value = "12",
		stat3Label = "TECH STACKS",
		ctaLabel = "View Resume",
		backgroundColor = "#000000",
		accentColor = "#a3e635",
		textColor = "#ffffff",
		cardBgColor = "#050505",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const stats = [
		{ valueKey: "stat1Value", labelKey: "stat1Label", value: stat1Value, label: stat1Label },
		{ valueKey: "stat2Value", labelKey: "stat2Label", value: stat2Value, label: stat2Label },
		{ valueKey: "stat3Value", labelKey: "stat3Label", value: stat3Value, label: stat3Label },
	];

	return (
		<section className="w-full border-b-4 px-6 py-24 md:py-32 font-mono selection:bg-white selection:text-black" style={{ backgroundColor, borderColor: textColor }}>
			<div className="mx-auto w-full max-w-7xl md:px-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-stretch">
				<div className="flex flex-col justify-center">
					<div className="inline-flex items-center gap-3 self-start border-2 px-3 py-2 mb-8" style={{ borderColor: accentColor, color: accentColor }}>
						<div className="w-3 h-3" style={{ backgroundColor: accentColor }} />
						{isEditing ? (
							<input value={sectionLabel} onChange={(e) => onFieldChange("sectionLabel", e.target.value)} className="bg-transparent outline-none uppercase tracking-widest text-xs font-black w-full" style={{ color: accentColor }} />
						) : (
							<span className="text-xs font-black uppercase tracking-widest">{sectionLabel}</span>
						)}
					</div>

					{isEditing ? (
						<textarea value={title} onChange={(e) => onFieldChange("title", e.target.value)} className="w-full bg-transparent outline-none border-4 p-4 text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 resize-y min-h-24" style={{ color: textColor, borderColor: accentColor }} />
					) : (
						<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight" style={{ color: textColor }}>{title}</h2>
					)}

					{isEditing ? (
						<textarea value={description} onChange={(e) => onFieldChange("description", e.target.value)} className="w-full bg-transparent outline-none border-l-4 p-4 text-sm md:text-base uppercase tracking-widest mb-10 resize-y min-h-20" style={{ color: accentColor, borderColor: accentColor }} />
					) : (
						<p className="text-sm md:text-base uppercase tracking-widest max-w-2xl border-l-4 pl-6 mb-10 leading-relaxed" style={{ color: accentColor, borderColor: accentColor }}>{description}</p>
					)}

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
						{stats.map((stat) => (
							<div key={stat.valueKey} className="border-4 p-4 bg-black" style={{ borderColor: accentColor, backgroundColor: cardBgColor }}>
								{isEditing ? (
									<input value={stat.value} onChange={(e) => onFieldChange(stat.valueKey, e.target.value)} className="w-full bg-transparent outline-none text-2xl font-black uppercase mb-2" style={{ color: textColor }} />
								) : (
									<div className="text-2xl font-black uppercase mb-2" style={{ color: textColor }}>{stat.value}</div>
								)}
								{isEditing ? (
									<input value={stat.label} onChange={(e) => onFieldChange(stat.labelKey, e.target.value)} className="w-full bg-transparent outline-none text-xs font-black uppercase tracking-widest" style={{ color: accentColor }} />
								) : (
									<div className="text-xs font-black uppercase tracking-widest" style={{ color: accentColor }}>{stat.label}</div>
								)}
							</div>
						))}
					</div>

					{isEditing ? (
						<input value={ctaLabel} onChange={(e) => onFieldChange("ctaLabel", e.target.value)} className="w-fit bg-transparent outline-none border-4 px-6 py-3 text-xs font-black uppercase tracking-widest" style={{ color: accentColor, borderColor: accentColor }} />
					) : (
						<a href="#contact" className="w-fit border-4 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:-translate-x-1" style={{ color: accentColor, borderColor: accentColor }}>
							{ctaLabel}
						</a>
					)}
				</div>

				<div className="border-4 p-6 md:p-8 flex flex-col justify-between" style={{ borderColor: accentColor, backgroundColor: cardBgColor }}>
					<div>
						<div className="text-xs font-black uppercase tracking-[0.3em] mb-6" style={{ color: accentColor }}>PROFILE_NODE</div>
						<div className="space-y-4 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed" style={{ color: textColor, opacity: 0.85 }}>
							<p>Frontend systems architect.</p>
							<p>Portfolio and product UI specialist.</p>
							<p>Focused on readable, maintainable, fast interfaces.</p>
						</div>
					</div>
					<div className="mt-8 border-t-4 pt-4" style={{ borderColor: accentColor }}>
						<div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: accentColor }}>CURRENT_STACK</div>
						<div className="flex flex-wrap gap-2">
							{["React", "Tailwind", "Figma", "Node", "Testing"].map((item) => (
								<span key={item} className="px-3 py-1 border-2 text-xs font-black uppercase tracking-widest" style={{ color: textColor, borderColor: textColor }}>{item}</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
