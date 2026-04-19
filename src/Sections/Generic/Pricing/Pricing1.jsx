export default function Pricing1({ content = {}, editor }) {
	const {
		badge = "💰 PRICING",
		title = "Simple, Transparent Pricing",
		plan1Name = "Starter",
		plan1Price = "Free",
		plan1Desc = "Perfect for beginners",
		plan2Name = "Pro",
		plan2Price = "$29",
		plan2Desc = "Most popular for teams",
		plan3Name = "Enterprise",
		plan3Price = "Custom",
		plan3Desc = "For large organizations",
		badgeColor = "#00e5ff",
		titleColor = "#ffffff",
		priceColor = "#a855f7",
		buttonColor = "#00e5ff",
		highlightPlan = "plan2Name",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const plans = [
		{ nameKey: "plan1Name", priceKey: "plan1Price", descKey: "plan1Desc", name: plan1Name, price: plan1Price, desc: plan1Desc, highlighted: false },
		{ nameKey: "plan2Name", priceKey: "plan2Price", descKey: "plan2Desc", name: plan2Name, price: plan2Price, desc: plan2Desc, highlighted: true },
		{ nameKey: "plan3Name", priceKey: "plan3Price", descKey: "plan3Desc", name: plan3Name, price: plan3Price, desc: plan3Desc, highlighted: false },
	];

	return (
		<section 
			className="w-full bg-black text-white border-b overflow-hidden"
			style={{ borderColor: `${badgeColor}20` }}
		>
			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-20">
				{/* Header */}
				<div className="text-center mb-16">
					{isEditing ? (
						<input
							type="text"
							value={badge}
							onChange={(e) => onFieldChange("badge", e.target.value)}
							className="inline-block px-4 py-2 rounded-full border mb-6 bg-black/50 outline-none focus:ring-2 text-sm font-semibold"
							style={{ 
								color: badgeColor,
								borderColor: badgeColor,
							}}
						/>
					) : (
						<div 
							className="inline-block px-4 py-2 rounded-full border mb-6 text-sm font-semibold tracking-widest"
							style={{ 
								color: badgeColor,
								borderColor: `${badgeColor}40`,
								backgroundColor: `${badgeColor}05`,
							}}
						>
							{badge}
						</div>
					)}

					{isEditing ? (
						<textarea
							value={title}
							onChange={(e) => onFieldChange("title", e.target.value)}
							className="w-full text-4xl md:text-5xl font-bold mb-6 bg-black/50 border rounded p-4 resize-y min-h-24 outline-none focus:ring-2 mx-auto"
							style={{ 
								color: titleColor,
								borderColor: badgeColor,
								maxWidth: "600px",
							}}
						/>
					) : (
						<h2 
							className="text-4xl md:text-5xl font-bold mb-6"
							style={{ color: titleColor }}
						>
							{title}
						</h2>
					)}
				</div>

				{/* Pricing cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, idx) => (
						<div 
							key={`${plan.nameKey}-${idx}`}
							className="group relative rounded-xl overflow-hidden transition-all duration-300"
							style={{ 
								border: `2px solid ${plan.highlighted ? badgeColor : `${badgeColor}20`}`,
								backgroundColor: plan.highlighted ? `${badgeColor}10` : `#0f0f1e`,
								transform: plan.highlighted ? "scale(1.05)" : "scale(1)",
							}}
						>
							{/* Highlight badge */}
							{plan.highlighted && (
								<div 
									className="absolute top-0 right-0 px-4 py-1 text-xs font-bold tracking-widest rounded-bl"
									style={{ backgroundColor: badgeColor, color: "#0a0a0a" }}
								>
									POPULAR
								</div>
							)}

							{/* Content */}
							<div className="p-8">
								{/* Plan name */}
								{isEditing ? (
									<input
										type="text"
										value={plan.name}
										onChange={(e) => onFieldChange(plan.nameKey, e.target.value)}
										className="text-2xl font-bold mb-4 w-full bg-black/50 border rounded px-3 py-2 outline-none focus:ring-2"
										style={{ 
											color: titleColor,
											borderColor: badgeColor,
										}}
									/>
								) : (
									<h3 
										className="text-2xl font-bold mb-4"
										style={{ color: titleColor }}
									>
										{plan.name}
									</h3>
								)}

								{/* Price */}
								{isEditing ? (
									<input
										type="text"
										value={plan.price}
										onChange={(e) => onFieldChange(plan.priceKey, e.target.value)}
										className="text-4xl font-bold mb-2 w-full bg-black/50 border rounded px-3 py-2 outline-none focus:ring-2"
										style={{ 
											color: priceColor,
											borderColor: badgeColor,
										}}
									/>
								) : (
									<p 
										className="text-4xl font-bold mb-2"
										style={{ color: priceColor }}
									>
										{plan.price}
									</p>
								)}

								{/* Description */}
								{isEditing ? (
									<textarea
										value={plan.desc}
										onChange={(e) => onFieldChange(plan.descKey, e.target.value)}
										className="text-sm mb-6 w-full bg-black/50 border rounded px-3 py-2 resize-y min-h-12 outline-none focus:ring-2"
										style={{ 
											color: "#a0aec0",
											borderColor: badgeColor,
										}}
									/>
								) : (
									<p className="text-sm mb-6" style={{ color: "#a0aec0" }}>
										{plan.desc}
									</p>
								)}

								{/* CTA Button */}
								<button 
									className="w-full py-3 rounded font-bold tracking-widest transition-all duration-300"
									style={{ 
										backgroundColor: plan.highlighted ? badgeColor : `${badgeColor}15`,
										color: plan.highlighted ? "#0a0a0a" : badgeColor,
										border: `2px solid ${badgeColor}`,
									}}
									onMouseEnter={(e) => {
										e.target.style.backgroundColor = badgeColor;
										e.target.style.color = "#0a0a0a";
									}}
									onMouseLeave={(e) => {
										e.target.style.backgroundColor = plan.highlighted ? badgeColor : `${badgeColor}15`;
										e.target.style.color = plan.highlighted ? "#0a0a0a" : badgeColor;
									}}
								>
									Get Started
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
