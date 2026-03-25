export default function PricingRetroGame({ content = {}, editor }) {
	const {
		badge = "LEVEL SELECT",
		title = "CHOOSE YOUR LOADOUT",
		plan1Name = "NOOB",
		plan1Price = "FREE",
		plan1Desc = "Start your journey. Limited abilities.",
		plan2Name = "PRO",
		plan2Price = "$29",
		plan2Desc = "Unlock advanced skills and upgrades.",
		plan3Name = "LEGEND",
		plan3Price = "$99",
		plan3Desc = "Maximum power. Dominate the game.",
		buttonLabel = "UNLOCK",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (key, value) => editor?.onFieldChange?.(key, value);

	const plans = [
		{ nameKey: "plan1Name", priceKey: "plan1Price", descKey: "plan1Desc", name: plan1Name, price: plan1Price, description: plan1Desc },
		{ nameKey: "plan2Name", priceKey: "plan2Price", descKey: "plan2Desc", name: plan2Name, price: plan2Price, description: plan2Desc },
		{ nameKey: "plan3Name", priceKey: "plan3Price", descKey: "plan3Desc", name: plan3Name, price: plan3Price, description: plan3Desc },
	];

	return (
		<section className="w-full bg-[#0a0a0a] text-white border-y-4 border-[#00ffcc]">
			<div className="mx-auto max-w-6xl px-6 py-20" style={{ fontFamily: '"Press Start 2P", cursive' }}>

				{isEditing ? (
					<input value={badge} onChange={(e) => onFieldChange("badge", e.target.value)}
						className="text-xs mb-6 bg-black border-2 border-[#00ffcc] px-2 py-1 w-full max-w-xs" />
				) : (
					<p className="text-xs mb-6 text-[#00ffcc]">{badge}</p>
				)}

				{isEditing ? (
					<textarea value={title} onChange={(e) => onFieldChange("title", e.target.value)}
						className="text-3xl md:text-5xl mb-16 bg-black border-4 border-[#ff00ff] p-4 w-full resize-y" />
				) : (
					<h2 className="text-3xl md:text-5xl mb-16 text-[#ff00ff]">{title}</h2>
				)}

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, i) => (
						<article
							key={i}
							className="relative bg-black border-4 border-[#00ffcc] p-6 
							hover:scale-105 transition-transform duration-200
							before:absolute before:top-2 before:left-2 before:w-full before:h-full 
							before:border-4 before:border-[#ff00ff] before:-z-10"
						>
							<div className="mb-6">
								{isEditing ? (
									<input value={plan.name} onChange={(e) => onFieldChange(plan.nameKey, e.target.value)}
										className="text-lg mb-2 bg-black border-2 border-[#00ffcc] px-2 py-1 w-full" />
								) : (
									<h3 className="text-lg text-[#00ffcc]">{plan.name}</h3>
								)}

								{isEditing ? (
									<input value={plan.price} onChange={(e) => onFieldChange(plan.priceKey, e.target.value)}
										className="text-2xl mb-3 bg-black border-2 border-[#ff00ff] px-2 py-1 w-full" />
								) : (
									<p className="text-2xl text-[#ff00ff]">{plan.price}</p>
								)}

								{isEditing ? (
									<textarea value={plan.description} onChange={(e) => onFieldChange(plan.descKey, e.target.value)}
										className="text-xs bg-black border-2 border-[#00ffcc] p-2 w-full resize-y" />
								) : (
									<p className="text-xs text-gray-300">{plan.description}</p>
								)}
							</div>

							{isEditing ? (
								<input value={buttonLabel} onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
									className="w-full border-2 border-[#ff00ff] px-2 py-2 bg-black text-[#ff00ff]" />
							) : (
								<button className="w-full border-2 border-[#ff00ff] px-4 py-3 
									text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black transition-colors">
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