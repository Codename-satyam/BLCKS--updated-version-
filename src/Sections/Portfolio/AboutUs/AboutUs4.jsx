export default function PortfolioAboutUs4({ content = {}, editor }) {
	const {
		sectionLabel = "ABOUT_CONTACT",
		title = "Let’s build the next portfolio together.",
		description = "The final AboutUs variation focuses on contact, positioning, and a clear next step for visitors who want to work with you.",
		name = "Satyam Anand",
		role = "React Developer & QA Engineer",
		email = "hello@example.com",
		location = "India",
		availability = "Open to freelance and full-time roles",
		ctaLabel = "Start a Conversation",
		backgroundColor = "#050505",
		accentColor = "#22d3ee",
		textColor = "#ffffff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	return (
		<section className="w-full border-b-4 px-6 py-24 md:py-32 font-mono selection:bg-white selection:text-black" style={{ backgroundColor, borderColor: accentColor }}>
			<div className="mx-auto w-full max-w-7xl md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 items-stretch">
				<div className="border-4 p-8 md:p-12" style={{ borderColor: textColor, backgroundColor: "#000" }}>
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

					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{[
							{ label: "Name", value: name, key: "name" },
							{ label: "Role", value: role, key: "role" },
							{ label: "Email", value: email, key: "email" },
							{ label: "Location", value: location, key: "location" },
						].map((field) => (
							<div key={field.key} className="border-2 p-4" style={{ borderColor: accentColor }}>
								<div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: accentColor }}>{field.label}</div>
								{isEditing ? (
									<input value={field.value} onChange={(e) => onFieldChange(field.key, e.target.value)} className="w-full bg-transparent outline-none font-bold uppercase tracking-widest" style={{ color: textColor }} />
								) : (
									<div className="font-bold uppercase tracking-widest" style={{ color: textColor }}>{field.value}</div>
								)}
							</div>
						))}
					</div>
				</div>

				<div className="border-4 p-8 md:p-12 flex flex-col justify-between" style={{ borderColor: accentColor, backgroundColor: "#000" }}>
					<div>
						<div className="w-16 h-16 border-4 mb-6 flex items-center justify-center" style={{ borderColor: accentColor, color: accentColor }}>AU</div>
						<div className="space-y-4 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed" style={{ color: textColor, opacity: 0.85 }}>
							<p>{availability}</p>
							<p>Portfolio templates focused on clarity and conversion.</p>
							<p>Built for resumes, case studies, and personal brands.</p>
						</div>
					</div>
					<div className="mt-10 border-t-4 pt-5" style={{ borderColor: accentColor }}>
						{isEditing ? (
							<input value={ctaLabel} onChange={(e) => onFieldChange("ctaLabel", e.target.value)} className="w-full bg-transparent outline-none border-4 px-6 py-3 text-xs font-black uppercase tracking-widest" style={{ color: accentColor, borderColor: accentColor }} />
						) : (
							<a href={`mailto:${email}`} className="inline-flex border-4 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:-translate-x-1" style={{ color: accentColor, borderColor: accentColor }}>
								{ctaLabel}
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
