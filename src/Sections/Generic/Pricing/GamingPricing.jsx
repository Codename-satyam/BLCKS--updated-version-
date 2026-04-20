export default function GamingPricing({ content = {}, editor }) {
	const {
		badge = "💎 MEMBERSHIP",
		title = "Choose Your Tier",
		plan1Title = "Bronze",
		plan1Price = "$0",
		plan1Desc = "For casual players",
		plan1Features = "Basic tournaments\nCommunity access\nMonthly rewards",
		plan2Title = "Silver",
		plan2Price = "$9.99",
		plan2Desc = "For serious competitors",
		plan2Features = "Premium tournaments\nPriority support\nWeekly rewards\nTeam features",
		plan3Title = "Platinum",
		plan3Price = "$29.99",
		plan3Desc = "For esports pros",
		plan3Features = "All tournaments\n24/7 support\nDaily rewards\nPrivate leagues\nMonetization options",
		badgeColor = "#ff2288",
		titleColor = "#ffffff",
		cardBgColor = "#0f0f1e",
		highlightColor = "#ff2288",
		featureTextColor = "#a0aec0",
		buttonBgColor = "#00ff88",
		buttonTextColor = "#0a0a0a",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const plans = [
		{
			titleKey: "plan1Title",
			priceKey: "plan1Price",
			descKey: "plan1Desc",
			featuresKey: "plan1Features",
			title: plan1Title,
			price: plan1Price,
			desc: plan1Desc,
			features: plan1Features.split("\n"),
			icon: "🥉"
		},
		{
			titleKey: "plan2Title",
			priceKey: "plan2Price",
			descKey: "plan2Desc",
			featuresKey: "plan2Features",
			title: plan2Title,
			price: plan2Price,
			desc: plan2Desc,
			features: plan2Features.split("\n"),
			icon: "🥈",
			highlight: true
		},
		{
			titleKey: "plan3Title",
			priceKey: "plan3Price",
			descKey: "plan3Desc",
			featuresKey: "plan3Features",
			title: plan3Title,
			price: plan3Price,
			desc: plan3Desc,
			features: plan3Features.split("\n"),
			icon: "🥇"
		},
	];

	return (
		<section 
			className="w-full bg-black text-white border-b overflow-hidden"
			style={{ borderColor: `${badgeColor}20` }}
		>
			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-20 relative z-10">
				{/* Section header */}
				<div className="mb-16 text-center">
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
							className="w-full text-4xl md:text-5xl font-bold mb-6 bg-black/50 border rounded p-4 resize-y min-h-24 outline-none focus:ring-2"
							style={{ 
								color: titleColor,
								borderColor: badgeColor,
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
							key={`${plan.titleKey}-${idx}`}
							className={`relative p-8 rounded-xl transition-all duration-300 ${plan.highlight ? "md:scale-105" : ""}`}
							style={{ 
								backgroundColor: cardBgColor,
								border: `2px solid ${plan.highlight ? highlightColor : cardBgColor}50`,
								boxShadow: plan.highlight ? `0 0 20px ${highlightColor}40` : "none",
							}}
						>
							{/* Badge */}
							<div className="text-4xl mb-4">{plan.icon}</div>

							{isEditing ? (
								<>
									<input
										type="text"
										value={plan.title}
										onChange={(e) => onFieldChange(plan.titleKey, e.target.value)}
										className="w-full text-2xl font-bold mb-2 bg-black/50 border rounded p-2 outline-none focus:ring-2"
										style={{ 
											color: highlightColor,
											borderColor: badgeColor,
										}}
									/>
									<input
										type="text"
										value={plan.price}
										onChange={(e) => onFieldChange(plan.priceKey, e.target.value)}
										className="w-full text-3xl font-bold mb-2 bg-black/50 border rounded p-2 outline-none focus:ring-2"
										style={{ 
											color: titleColor,
											borderColor: badgeColor,
										}}
									/>
									<input
										type="text"
										value={plan.desc}
										onChange={(e) => onFieldChange(plan.descKey, e.target.value)}
										className="w-full text-sm mb-6 bg-black/50 border rounded p-2 outline-none focus:ring-2"
										style={{ 
											color: featureTextColor,
											borderColor: badgeColor,
										}}
									/>
									<textarea
										value={plan.features.join("\n")}
										onChange={(e) => onFieldChange(plan.featuresKey, e.target.value)}
										className="w-full bg-black/50 border rounded p-2 resize-y min-h-32 outline-none focus:ring-2 mb-6 text-sm"
										style={{ 
											color: featureTextColor,
											borderColor: badgeColor,
										}}
									/>
								</>
							) : (
								<>
									<h3 
										className="text-2xl font-bold mb-2"
										style={{ color: highlightColor }}
									>
										{plan.title}
									</h3>
									<div 
										className="text-3xl font-bold mb-2"
										style={{ color: titleColor }}
									>
										{plan.price}
										{plan.price !== "$0" && <span className="text-sm text-zinc-500">/mo</span>}
									</div>
									<p 
										className="text-sm mb-6"
										style={{ color: featureTextColor }}
									>
										{plan.desc}
									</p>
									<ul className="space-y-3 mb-8">
										{plan.features.map((feature, i) => (
											<li key={i} className="flex items-start gap-2">
												<span style={{ color: highlightColor }}>✓</span>
												<span style={{ color: featureTextColor }}>{feature}</span>
											</li>
										))}
									</ul>
									<button 
										className="w-full py-3 rounded font-bold transition-all hover:scale-105"
										style={{ 
											backgroundColor: buttonBgColor,
											color: buttonTextColor,
										}}
									>
										Join Now
									</button>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
