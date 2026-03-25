export default function Pricing1({ content = {}, editor }) {
	const {
		badge = "> PRICING_01",
		title = "Pick your plan",
		plan1Name = "Starter",
		plan1Price = "$0",
		plan1Desc = "Basic section presets and preview.",
		plan2Name = "Pro",
		plan2Price = "$19",
		plan2Desc = "More layouts and customization options.",
		plan3Name = "Studio",
		plan3Price = "$49",
		plan3Desc = "Advanced templates and team workflow.",
		buttonLabel = "Select",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const plans = [
		{ nameKey: "plan1Name", priceKey: "plan1Price", descKey: "plan1Desc", name: plan1Name, price: plan1Price, description: plan1Desc },
		{ nameKey: "plan2Name", priceKey: "plan2Price", descKey: "plan2Desc", name: plan2Name, price: plan2Price, description: plan2Desc },
		{ nameKey: "plan3Name", priceKey: "plan3Price", descKey: "plan3Desc", name: plan3Name, price: plan3Price, description: plan3Desc },
	];

	return (
		<section className="w-full bg-black text-white border-b border-cyan-900/50">
			<div className="mx-auto w-full max-w-6xl px-6 py-20 min-w-0" style={{ fontFamily: '"Bungee", cursive' }}>
				{isEditing ? (
					<input
						type="text"
						value={badge}
						onChange={(event) => onFieldChange("badge", event.target.value)}
						className="text-cyan-400 text-xs tracking-widest mb-4 bg-black/50 border border-cyan-900 px-2 py-1 w-full max-w-xs"
					/>
				) : (
					<p className="text-cyan-400 text-xs tracking-widest mb-4">{badge}</p>
				)}

				{isEditing ? (
					<textarea
						value={title}
						onChange={(event) => onFieldChange("title", event.target.value)}
						className="text-3xl md:text-5xl mb-12 break-words bg-black/50 border border-cyan-900 p-3 w-full resize-y min-h-20"
					/>
				) : (
					<h2 className="text-3xl md:text-5xl mb-12 break-words">{title}</h2>
				)}

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{plans.map((plan, index) => (
						<article key={`${plan.nameKey}-${index}`} className="border border-cyan-900/70 bg-black/50 p-6">
							{isEditing ? (
								<input type="text" value={plan.name} onChange={(event) => onFieldChange(plan.nameKey, event.target.value)} className="text-2xl mb-3 break-words bg-black/50 border border-cyan-900 px-2 py-1 w-full" />
							) : (
								<h3 className="text-2xl mb-3 break-words">{plan.name}</h3>
							)}
							{isEditing ? (
								<input type="text" value={plan.price} onChange={(event) => onFieldChange(plan.priceKey, event.target.value)} className="text-cyan-400 text-3xl mb-4 bg-black/50 border border-cyan-900 px-2 py-1 w-full" />
							) : (
								<p className="text-cyan-400 text-3xl mb-4">{plan.price}</p>
							)}
							{isEditing ? (
								<textarea value={plan.description} onChange={(event) => onFieldChange(plan.descKey, event.target.value)} className="text-gray-400 font-sans text-sm leading-relaxed mb-6 break-words bg-black/50 border border-cyan-900 p-2 w-full resize-y min-h-20" />
							) : (
								<p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 break-words">{plan.description}</p>
							)}
							{isEditing ? (
								<input type="text" value={buttonLabel} onChange={(event) => onFieldChange("buttonLabel", event.target.value)} className="border border-cyan-500 bg-black/50 text-cyan-400 px-3 py-2 w-full" />
							) : (
								<button className="border border-cyan-500 text-cyan-400 px-4 py-2 hover:bg-cyan-400 hover:text-black transition-colors">
									{buttonLabel}
								</button>
							)}
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
