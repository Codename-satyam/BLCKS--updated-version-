export default function Pricing2({ content = {}, editor }) {
	const {
		badge = "🎯 PRICING",
		title = "CHOOSE YOUR TIER",
		plan1Name = "FREE",
		plan1Price = "$0",
		plan1Desc = "Perfect for getting started.",
		plan2Name = "PRO",
		plan2Price = "$25",
		plan2Desc = "Most popular for teams.",
		plan3Name = "ELITE",
		plan3Price = "$99",
		plan3Desc = "Full power unleashed.",
		bgColor = "#ffffff",
		badgeColor = "#000000",
		titleColor = "#000000",
		planBgColor = "#ffffff",
		planBorderColor = "#000000",
		priceColor = "#000000",
		buttonLabel = "SELECT",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const plans = [
		{ nameKey: "plan1Name", priceKey: "plan1Price", descKey: "plan1Desc", name: plan1Name, price: plan1Price, desc: plan1Desc },
		{ nameKey: "plan2Name", priceKey: "plan2Price", descKey: "plan2Desc", name: plan2Name, price: plan2Price, desc: plan2Desc },
		{ nameKey: "plan3Name", priceKey: "plan3Price", descKey: "plan3Desc", name: plan3Name, price: plan3Price, desc: plan3Desc },
	];

	return (
		<section 
			className="w-full border-t-8 border-b-8"
			style={{ 
				backgroundColor: bgColor,
				color: titleColor,
				borderColor: planBorderColor,
			}}
		>
			<div className="mx-auto max-w-6xl px-6 py-20">
				{isEditing ? (
					<input
						value={badge}
						onChange={(e) => onFieldChange("badge", e.target.value)}
						className="text-sm tracking-widest mb-4 border-2 px-2 py-1 w-full max-w-xs outline-none focus:ring-2"
						style={{ 
							backgroundColor: bgColor,
							color: badgeColor,
							borderColor: planBorderColor,
						}}
					/>
				) : (
					<p className="text-sm tracking-widest mb-4" style={{ color: badgeColor }}>
						{badge}
					</p>
				)}

				{isEditing ? (
					<textarea
						value={title}
						onChange={(e) => onFieldChange("title", e.target.value)}
						className="text-4xl md:text-6xl font-black mb-16 border-4 p-4 w-full resize-y min-h-32 outline-none focus:ring-2"
						style={{ 
							backgroundColor: bgColor,
							color: titleColor,
							borderColor: planBorderColor,
						}}
					/>
				) : (
					<h2 className="text-4xl md:text-6xl font-black mb-16" style={{ color: titleColor }}>
						{title}
					</h2>
				)}

				<div 
					className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4"
					style={{ borderColor: planBorderColor }}
				>
					{plans.map((plan, idx) => (
						<article
							key={idx}
							className="p-8 flex flex-col justify-between min-h-[300px]"
							style={{ 
								backgroundColor: planBgColor,
								borderRight: idx < 2 ? `4px solid ${planBorderColor}` : "none",
							}}
						>
							<div>
								{isEditing ? (
									<input
										value={plan.name}
										onChange={(e) => onFieldChange(plan.nameKey, e.target.value)}
										className="text-2xl font-bold mb-2 border-2 px-2 py-1 w-full outline-none focus:ring-2"
										style={{ 
											backgroundColor: bgColor,
											borderColor: planBorderColor,
										}}
									/>
								) : (
									<h3 className="text-2xl font-bold mb-2" style={{ color: titleColor }}>
										{plan.name}
									</h3>
								)}

								{isEditing ? (
									<input
										value={plan.price}
										onChange={(e) => onFieldChange(plan.priceKey, e.target.value)}
										className="text-4xl font-black mb-4 border-2 px-2 py-1 w-full outline-none focus:ring-2"
										style={{ 
											backgroundColor: bgColor,
											color: priceColor,
											borderColor: planBorderColor,
										}}
									/>
								) : (
									<p className="text-4xl font-black mb-4" style={{ color: priceColor }}>
										{plan.price}
									</p>
								)}

								{isEditing ? (
									<textarea
										value={plan.desc}
										onChange={(e) => onFieldChange(plan.descKey, e.target.value)}
										className="text-sm min-h-20 border-2 p-2 w-full resize-y outline-none focus:ring-2"
										style={{ 
											backgroundColor: bgColor,
											color: titleColor,
											borderColor: planBorderColor,
										}}
									/>
								) : (
									<p className="text-sm" style={{ color: titleColor }}>
										{plan.desc}
									</p>
								)}
							</div>

							<button 
								className="mt-6 font-black uppercase py-2 px-4 border-2 transition-all hover:scale-105"
								style={{ 
									backgroundColor: titleColor,
									color: bgColor,
									borderColor: planBorderColor,
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
