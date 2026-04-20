export default function PortfolioAboutUs3({ content = {}, editor }) {
	const {
		sectionLabel = "ABOUT_IMPACT",
		title = "Proof of work matters more than claims.",
		description = "This layout foregrounds measurable outcomes, making it easy to understand the scale and quality of the work at a glance.",
		metric1Value = "18",
		metric1Label = "CLIENTS",
		metric2Value = "96%",
		metric2Label = "SATISFACTION",
		metric3Value = "24K",
		metric3Label = "LINES DELIVERED",
		metric4Value = "07",
		metric4Label = "PRODUCTS",
		backgroundColor = "#000000",
		accentColor = "#f97316",
		textColor = "#ffffff",
		panelColor = "#050505",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const metrics = [
		{ valueKey: "metric1Value", labelKey: "metric1Label", value: metric1Value, label: metric1Label },
		{ valueKey: "metric2Value", labelKey: "metric2Label", value: metric2Value, label: metric2Label },
		{ valueKey: "metric3Value", labelKey: "metric3Label", value: metric3Value, label: metric3Label },
		{ valueKey: "metric4Value", labelKey: "metric4Label", value: metric4Value, label: metric4Label },
	];

	return (
		<section className="w-full border-b-4 px-6 py-24 md:py-32 font-mono selection:bg-white selection:text-black overflow-hidden" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl md:px-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
				<div>
					<div className="text-xs font-black uppercase tracking-[0.35em] mb-4" style={{ color: accentColor }}>
						{isEditing ? <input value={sectionLabel} onChange={(e) => onFieldChange("sectionLabel", e.target.value)} className="w-full bg-transparent outline-none border-b-2 border-dashed border-current" style={{ color: accentColor }} /> : sectionLabel}
					</div>
					{isEditing ? (
						<textarea value={title} onChange={(e) => onFieldChange("title", e.target.value)} className="w-full bg-transparent outline-none text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 resize-y min-h-32" style={{ color: textColor }} />
					) : (
						<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-5 leading-tight" style={{ color: textColor }}>{title}</h2>
					)}
					{isEditing ? (
						<textarea value={description} onChange={(e) => onFieldChange("description", e.target.value)} className="w-full bg-transparent outline-none text-sm md:text-base font-bold uppercase tracking-widest border-l-4 p-4 resize-y min-h-20" style={{ color: accentColor, borderColor: accentColor }} />
					) : (
						<p className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 pl-6 max-w-2xl leading-relaxed" style={{ color: accentColor, borderColor: accentColor }}>{description}</p>
					)}

					<div className="mt-10 border-4 p-6 bg-black" style={{ borderColor: textColor, backgroundColor: panelColor }}>
						<div className="text-xs font-black uppercase tracking-[0.3em] mb-4" style={{ color: accentColor }}>CAPABILITIES</div>
						<ul className="space-y-3 text-sm md:text-base font-bold uppercase tracking-widest" style={{ color: textColor, opacity: 0.85 }}>
							<li>Interface systems and design tokens</li>
							<li>Portfolio storytelling and content hierarchy</li>
							<li>Builder workflows and reusable section systems</li>
						</ul>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 md:gap-6">
					{metrics.map((metric) => (
						<div key={metric.valueKey} className="border-4 p-6 md:p-8 bg-black flex flex-col justify-between min-h-40" style={{ borderColor: textColor, backgroundColor: panelColor }}>
							{isEditing ? (
								<input value={metric.value} onChange={(e) => onFieldChange(metric.valueKey, e.target.value)} className="bg-transparent outline-none text-4xl md:text-6xl font-black uppercase mb-4" style={{ color: accentColor }} />
							) : (
								<div className="text-4xl md:text-6xl font-black uppercase mb-4" style={{ color: accentColor }}>{metric.value}</div>
							)}
							{isEditing ? (
								<input value={metric.label} onChange={(e) => onFieldChange(metric.labelKey, e.target.value)} className="bg-transparent outline-none text-xs font-black uppercase tracking-widest" style={{ color: textColor }} />
							) : (
								<div className="text-xs font-black uppercase tracking-widest" style={{ color: textColor }}>{metric.label}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
