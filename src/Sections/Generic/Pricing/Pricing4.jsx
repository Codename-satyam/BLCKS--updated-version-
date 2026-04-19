export default function PricingModernSaaS({ content = {}, editor }) {
    const {
        badge = "Pricing",
        title = "Choose Your Tier",
        plan1Name = "FREE",
        plan1Price = "$0",
        plan1Desc = "Perfect for getting started.",
        plan2Name = "PRO",
        plan2Price = "$25",
        plan2Desc = "Most popular for teams.",
        plan3Name = "ELITE",
        plan3Price = "$99",
        plan3Desc = "Full power unleashed.",
        bgColor = "#f8fafc", // Soft slate background
        badgeColor = "#3b82f6", // Blue accent
        titleColor = "#0f172a", // Dark slate
        planBgColor = "#ffffff",
        planBorderColor = "#e2e8f0",
        priceColor = "#0f172a",
        buttonLabel = "Get Started",
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
            className="w-full relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            {/* Subtle Background Glow Elements (Optional, adds depth) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-b from-black/5 to-transparent blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
                
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <div className="inline-block mb-4">
                        {isEditing ? (
                            <input
                                value={badge}
                                onChange={(e) => onFieldChange("badge", e.target.value)}
                                className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-dashed outline-none focus:ring-2 text-center w-40 bg-transparent shadow-sm"
                                style={{ color: badgeColor, borderColor: badgeColor }}
                            />
                        ) : (
                            <span 
                                className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-opacity-10 inline-block shadow-sm" 
                                style={{ color: badgeColor, backgroundColor: `${badgeColor}15` }}
                            >
                                {badge}
                            </span>
                        )}
                    </div>

                    <div>
                        {isEditing ? (
                            <textarea
                                value={title}
                                onChange={(e) => onFieldChange("title", e.target.value)}
                                className="text-4xl md:text-5xl font-extrabold tracking-tight bg-transparent text-center border-b border-dashed p-2 w-full resize-none min-h-[80px] outline-none focus:ring-2 rounded-lg"
                                style={{ color: titleColor, borderColor: planBorderColor }}
                            />
                        ) : (
                            <h2 
                                className="text-4xl md:text-5xl font-extrabold tracking-tight" 
                                style={{ color: titleColor }}
                            >
                                {title}
                            </h2>
                        )}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                    {plans.map((plan, idx) => {
                        const isMiddle = idx === 1;

                        return (
                            <article
                                key={idx}
                                className={`relative flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300 hover:shadow-2xl ${
                                    isMiddle ? 'md:-translate-y-4 shadow-xl z-10' : 'shadow-md hover:-translate-y-1 z-0'
                                }`}
                                style={{ 
                                    backgroundColor: planBgColor,
                                    border: `1px solid ${isMiddle ? badgeColor : planBorderColor}`,
                                }}
                            >
                                {/* "Popular" Badge for Middle Card */}
                                {!isEditing && isMiddle && (
                                    <div 
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md"
                                        style={{ backgroundColor: badgeColor }}
                                    >
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex-1">
                                    {isEditing ? (
                                        <input
                                            value={plan.name}
                                            onChange={(e) => onFieldChange(plan.nameKey, e.target.value)}
                                            className="text-lg font-semibold mb-4 border-b border-dashed w-full outline-none focus:ring-1 bg-transparent"
                                            style={{ color: titleColor, borderColor: planBorderColor }}
                                        />
                                    ) : (
                                        <h3 className="text-lg font-semibold mb-4" style={{ color: titleColor }}>
                                            {plan.name}
                                        </h3>
                                    )}

                                    <div className="flex items-baseline gap-1 mb-6">
                                        {isEditing ? (
                                            <input
                                                value={plan.price}
                                                onChange={(e) => onFieldChange(plan.priceKey, e.target.value)}
                                                className="text-5xl font-black tracking-tight border-b border-dashed w-full outline-none focus:ring-1 bg-transparent"
                                                style={{ color: priceColor, borderColor: planBorderColor }}
                                            />
                                        ) : (
                                            <span className="text-5xl font-black tracking-tight" style={{ color: priceColor }}>
                                                {plan.price}
                                            </span>
                                        )}
                                        <span className="text-sm font-medium" style={{ color: titleColor, opacity: 0.6 }}>/month</span>
                                    </div>

                                    {isEditing ? (
                                        <textarea
                                            value={plan.desc}
                                            onChange={(e) => onFieldChange(plan.descKey, e.target.value)}
                                            className="text-base leading-relaxed border border-dashed p-2 w-full resize-y outline-none focus:ring-1 rounded-md bg-transparent"
                                            style={{ color: titleColor, opacity: 0.8, borderColor: planBorderColor }}
                                            rows={2}
                                        />
                                    ) : (
                                        <p className="text-base leading-relaxed mb-8" style={{ color: titleColor, opacity: 0.8 }}>
                                            {plan.desc}
                                        </p>
                                    )}
                                </div>

                                <button 
                                    className={`w-full py-4 rounded-xl font-bold transition-transform active:scale-95 ${
                                        isMiddle ? 'shadow-lg hover:shadow-xl hover:opacity-90' : 'hover:bg-opacity-5'
                                    }`}
                                    style={{ 
                                        backgroundColor: isMiddle ? badgeColor : 'transparent',
                                        color: isMiddle ? planBgColor : titleColor,
                                        border: `2px solid ${isMiddle ? badgeColor : planBorderColor}`,
                                    }}
                                >
                                    {buttonLabel}
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}