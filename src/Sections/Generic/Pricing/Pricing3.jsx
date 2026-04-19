export default function Pricing3({ content = {}, editor }) {
	const {
		badge = "🎮 LEVEL SELECT",
		title = "CHOOSE YOUR POWER",
		plan1Name = "STARTER",
		plan1Price = "FREE",
		plan1Desc = "Begin your adventure.",
		plan2Name = "CHAMPION",
		plan2Price = "$29",
		plan2Desc = "Unlock all skills.",
		plan3Name = "LEGEND",
		plan3Price = "$99",
		plan3Desc = "Dominate everything.",
		badgeColor = "#00ffcc",
		titleColor = "#ff00ff",
		planNameColor = "#00ffcc",
		planPriceColor = "#ff00ff",
		buttonLabel = "PLAY",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (key, value) => editor?.onFieldChange?.(key, value);

	const plans = [
		{ nameKey: "plan1Name", priceKey: "plan1Price", descKey: "plan1Desc", name: plan1Name, price: plan1Price, desc: plan1Desc },
		{ nameKey: "plan2Name", priceKey: "plan2Price", descKey: "plan2Desc", name: plan2Name, price: plan2Price, desc: plan2Desc },
		{ nameKey: "plan3Name", priceKey: "plan3Price", descKey: "plan3Desc", name: plan3Name, price: plan3Price, desc: plan3Desc },
	];

	return (
		<section className="w-full bg-[#0a0a0a] text-white border-y-4 border-[#00ffcc]">
			<div className="mx-auto max-w-6xl px-6 py-20" style={{ fontFamily: '"Courier New", monospace' }}>

				{isEditing ? (
					<input 
						value={badge} 
						onChange={(e) => onFieldChange("badge", e.target.value)}
						className="text-xs mb-6 bg-black border-2 px-2 py-1 w-full max-w-xs outline-none focus:ring-2"
						style={{ 
							color: badgeColor,
							borderColor: badgeColor,
						}}
					/>
				) : (
					<p className="text-xs mb-6" style={{ color: badgeColor }}>
						{badge}
					</p>
				)}

				{isEditing ? (
					<textarea 
						value={title} 
						onChange={(e) => onFieldChange("title", e.target.value)}
						className="text-3xl md:text-5xl mb-16 bg-black border-4 p-4 w-full resize-y min-h-32 outline-none focus:ring-2"
						style={{ 
							color: titleColor,
							borderColor: titleColor,
						}}
					/>
				) : (
					<h2 className="text-3xl md:text-5xl mb-16" style={{ color: titleColor }}>
						{title}
					</h2>
				)}

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, i) => (
						<article
							key={i}
							className="relative bg-black p-6 transition-transform duration-200 hover:scale-105 border-4"
							style={{ 
								borderColor: badgeColor,
								boxShadow: `0 0 20px ${badgeColor}40, inset 0 0 20px ${titleColor}10`,
							}}
						>
							<div className="absolute -top-2 -left-2 w-4 h-4 border-2" style={{ borderColor: titleColor }} />
							<div className="absolute -top-2 -right-2 w-4 h-4 border-2" style={{ borderColor: titleColor }} />
							<div className="absolute -bottom-2 -left-2 w-4 h-4 border-2" style={{ borderColor: titleColor }} />
							<div className="absolute -bottom-2 -right-2 w-4 h-4 border-2" style={{ borderColor: titleColor }} />

							<div className="mb-6">
								{isEditing ? (
									<input 
										value={plan.name} 
										onChange={(e) => onFieldChange(plan.nameKey, e.target.value)}
										className="text-lg mb-2 bg-black border-2 px-2 py-1 w-full outline-none focus:ring-2"
										style={{ 
											color: planNameColor,
											borderColor: badgeColor,
										}}
									/>
								) : (
									<h3 className="text-lg" style={{ color: planNameColor }}>
										{plan.name}
									</h3>
								)}

								{isEditing ? (
									<input 
										value={plan.price} 
										onChange={(e) => onFieldChange(plan.priceKey, e.target.value)}
										className="text-2xl mb-3 bg-black border-2 px-2 py-1 w-full outline-none focus:ring-2"
										style={{ 
											color: planPriceColor,
											borderColor: titleColor,
										}}
									/>
								) : (
									<p className="text-2xl" style={{ color: planPriceColor }}>
										{plan.price}
									</p>
								)}

								{isEditing ? (
									<textarea 
										value={plan.desc} 
										onChange={(e) => onFieldChange(plan.descKey, e.target.value)}
										className="text-xs bg-black border-2 p-2 w-full resize-y min-h-16 outline-none focus:ring-2"
										style={{ 
											color: "#888888",
											borderColor: badgeColor,
										}}
									/>
								) : (
									<p className="text-xs" style={{ color: "#888888" }}>
										{plan.desc}
									</p>
								)}
							</div>

							<button 
								className="w-full border-2 px-4 py-3 font-bold uppercase transition-all hover:translate-x-1 hover:translate-y-1"
								style={{ 
									color: titleColor,
									borderColor: titleColor,
									backgroundColor: `${titleColor}20`,
								}}
							>
								{buttonLabel}
							</button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
