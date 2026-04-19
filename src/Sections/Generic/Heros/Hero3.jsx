export default function Hero3({ content = {}, editor }) {
    const {
        badge = "🚀 NEW RELEASE",
        title = "Transform Your Vision Into Reality",
        description = "Build beautiful, responsive websites with advanced tools. No coding required. Deploy instantly.",
        buttonLabel = "Get Started",
        secondaryButtonLabel = "Learn More",
        badgeColor = "#6366f1",
        titleColor = "#ffffff",
        descColor = "#d1d5db",
        buttonBgColor = "#6366f1",
        buttonTextColor = "#ffffff",
        accentColor = "#ec4899",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    return (
        <section
            className="w-full min-h-screen flex items-center justify-center overflow-hidden relative isolate bg-gradient-to-b from-gray-900 via-gray-950 to-black"
        >
            {/* Animated background gradients */}
            <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl">
                <div
                    className="relative left-1/2 aspect-1155/678 w-96 -translate-x-1/2 rotate-30 opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(135deg, ${badgeColor}, ${accentColor})`,
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    }}
                />
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-6 lg:px-8 relative z-10">
                {/* Badge */}
                <div className="mb-8 flex justify-center">
                    {isEditing ? (
                        <input
                            type="text"
                            value={badge}
                            onChange={(e) => onFieldChange("badge", e.target.value)}
                            className="rounded-full px-4 py-2 text-sm bg-black/50 border outline-none focus:ring-2 text-center max-w-md w-full"
                            style={{
                                color: badgeColor,
                                borderColor: badgeColor,
                                backgroundColor: `${badgeColor}10`,
                            }}
                        />
                    ) : (
                        <div
                            className="relative rounded-full px-4 py-2 text-sm tracking-widest font-semibold transition-all"
                            style={{
                                color: badgeColor,
                                borderColor: `${badgeColor}40`,
                                backgroundColor: `${badgeColor}05`,
                                border: `1px solid ${badgeColor}40`,
                            }}
                        >
                            {badge}
                        </div>
                    )}
                </div>

                <div className="text-center">
                    {isEditing ? (
                        <textarea
                            value={title}
                            onChange={(e) => onFieldChange("title", e.target.value)}
                            className="w-full bg-transparent text-5xl font-semibold tracking-tight sm:text-7xl text-center resize-y min-h-40 border rounded p-4 outline-none focus:ring-2 mb-6"
                            style={{
                                color: titleColor,
                                borderColor: badgeColor,
                            }}
                        />
                    ) : (
                        <h1
                            className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl mb-6"
                            style={{ color: titleColor }}
                        >
                            {title}
                        </h1>
                    )}

                    {isEditing ? (
                        <textarea
                            value={description}
                            onChange={(e) => onFieldChange("description", e.target.value)}
                            className="w-full bg-transparent text-lg font-medium text-center resize-y min-h-20 border rounded p-4 outline-none focus:ring-2 mb-10"
                            style={{
                                color: descColor,
                                borderColor: badgeColor,
                            }}
                        />
                    ) : (
                        <p
                            className="mt-8 text-lg font-medium text-balance sm:text-xl/8 max-w-xl mx-auto"
                            style={{ color: descColor }}
                        >
                            {description}
                        </p>
                    )}

                    {/* CTA Buttons */}
                    <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={buttonLabel}
                                    onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
                                    className="px-6 py-3 rounded font-semibold border outline-none focus:ring-2"
                                    style={{
                                        backgroundColor: buttonBgColor,
                                        color: buttonTextColor,
                                        borderColor: badgeColor,
                                    }}
                                />
                                <input
                                    type="text"
                                    value={secondaryButtonLabel}
                                    onChange={(e) => onFieldChange("secondaryButtonLabel", e.target.value)}
                                    className="px-6 py-3 rounded font-semibold border outline-none focus:ring-2"
                                    style={{
                                        color: buttonBgColor,
                                        borderColor: buttonBgColor,
                                        backgroundColor: "transparent",
                                    }}
                                />
                            </>
                        ) : (
                            <>
                                <button
                                    className="px-6 py-3 rounded font-semibold transition-all hover:scale-105 relative group"
                                    style={{
                                        backgroundColor: buttonBgColor,
                                        color: buttonTextColor,
                                        boxShadow: `0 0 20px ${buttonBgColor}40`,
                                    }}
                                >
                                    {buttonLabel}
                                </button>
                                <button
                                    className="px-6 py-3 rounded font-semibold transition-all hover:scale-105"
                                    style={{
                                        color: buttonBgColor,
                                        border: `2px solid ${buttonBgColor}`,
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    {secondaryButtonLabel}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}