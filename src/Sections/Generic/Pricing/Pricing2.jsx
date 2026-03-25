export default function PricingBrutal({ content = {}, editor }) {
	const {
		badge = "// PRICING",
		title = "CHOOSE YOUR WEAPON",
		plan1Name = "FREE",
		plan1Price = "$0",
		plan1Desc = "Bare minimum. No excuses.",
		plan2Name = "PRO",
		plan2Price = "$25",
		plan2Desc = "Serious tools for serious work.",
		plan3Name = "ELITE",
		plan3Price = "$99",
		plan3Desc = "No limits. Full control.",
		buttonLabel = "GET IT",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const plans = [
		{ nameKey: "plan1Name", priceKey: "plan1Price", descKey: "plan1Desc", name: plan1Name, price: plan1Price, description: plan1Desc },
		{ nameKey: "plan2Name", priceKey: "plan2Price", descKey: "plan2Desc", name: plan2Name, price: plan2Price, description: plan2Desc },
		{ nameKey: "plan3Name", priceKey: "plan3Price", descKey: "plan3Desc", name: plan3Name, price: plan3Price, description: plan3Desc },
	];

	return (
		<section className="w-full bg-white text-black border-t-[6px] border-b-[6px] border-black">
			<div className="mx-auto max-w-6xl px-6 py-20" style={{ fontFamily: '"Courier New", monospace' }}>
				
				{isEditing ? (
					<input
						value={badge}
						onChange={(e) => onFieldChange("badge", e.target.value)}
						className="text-sm tracking-widest mb-4 bg-white border-2 border-black px-2 py-1 w-full max-w-xs"
					/>
				) : (
					<p className="text-sm tracking-widest mb-4">{badge}</p>
				)}

				{isEditing ? (
					<textarea
						value={title}
						onChange={(e) => onFieldChange("title", e.target.value)}
						className="text-4xl md:text-6xl font-black mb-16 bg-white border-4 border-black p-4 w-full resize-y"
					/>
				) : (
					<h2 className="text-4xl md:text-6xl font-black mb-16">{title}</h2>
				)}

				<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black">
					{plans.map((plan, index) => (
						<article
							key={index}
							className="border-r-4 border-black last:border-r-0 p-8 flex flex-col justify-between min-h-[300px]"
						>
							<div>
								{isEditing ? (
									<input
										value={plan.name}
										onChange={(e) => onFieldChange(plan.nameKey, e.target.value)}
										className="text-2xl font-bold mb-2 bg-white border-2 border-black px-2 py-1 w-full"
									/>
								) : (
									<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
								)}

								{isEditing ? (
									<input
										value={plan.price}
										onChange={(e) => onFieldChange(plan.priceKey, e.target.value)}
										className="text-4xl font-black mb-4 bg-white border-2 border-black px-2 py-1 w-full"
									/>
								) : (
									<p className="text-4xl font-black mb-4">{plan.price}</p>
								)}

								{isEditing ? (
									<textarea
										value={plan.description}
										onChange={(e) => onFieldChange(plan.descKey, e.target.value)}
										className="text-sm mb-6 bg-white border-2 border-black p-2 w-full resize-y"
									/>
								) : (
									<p className="text-sm mb-6">{plan.description}</p>
								)}
							</div>

							{isEditing ? (
								<input
									value={buttonLabel}
									onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
									className="bg-black text-white border-2 border-black px-3 py-2 w-full"
								/>
							) : (
								<button className="bg-black text-white border-2 border-black px-4 py-3 hover:bg-white hover:text-black transition-none">
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