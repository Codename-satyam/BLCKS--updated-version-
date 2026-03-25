export default function FeaturesBold({ content = {}, editor }) {
    const {
        badge = "// CAPABILITIES",
        title = "BUILT FOR POWER USERS",
        feature1Title = "ULTRA-FAST",
        feature1Desc = "Zero lag, zero friction. Your workflow at the speed of thought.",
        feature2Title = "ROCK SOLID",
        feature2Desc = "Redundant systems ensure your data never hits the floor.",
        feature3Title = "GLOBAL EDGE",
        feature3Desc = "Deploy to 100+ nodes instantly with a single command.",
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    const featureItems = [
        { titleKey: "feature1Title", descKey: "feature1Desc", title: feature1Title, description: feature1Desc },
        { titleKey: "feature2Title", descKey: "feature2Desc", title: feature2Title, description: feature2Desc },
        { titleKey: "feature3Title", descKey: "feature3Desc", title: feature3Title, description: feature3Desc },
    ];

    return (
        <section className="w-full bg-white text-black border-y-8 border-black">
            <div className="mx-auto w-full max-w-7xl px-6 py-24 min-w-0" style={{ fontFamily: '"Inter", sans-serif' }}>
                
                {/* Badge Section */}
                <div className="mb-6">
                    {isEditing ? (
                        <input
                            type="text"
                            value={badge}
                            onChange={(event) => onFieldChange("badge", event.target.value)}
                            className="text-white bg-black font-black text-sm uppercase px-4 py-1 inline-block border-4 border-black"
                        />
                    ) : (
                        <span className="text-white bg-black font-black text-sm uppercase px-4 py-1 inline-block">
                            {badge}
                        </span>
                    )}
                </div>

                {/* Main Title - Heavy Impact */}
                <div className="mb-20">
                    {isEditing ? (
                        <textarea
                            value={title}
                            onChange={(event) => onFieldChange("title", event.target.value)}
                            className="text-6xl md:text-9xl font-black leading-tight tracking-tighter uppercase bg-gray-100 border-8 border-black p-4 w-full min-h-40"
                        />
                    ) : (
                        <h2 className="text-6xl md:text-9xl font-black leading-tight tracking-tighter uppercase break-words">
                            {title}
                        </h2>
                    )}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-8 border-black overflow-hidden bg-black">
                    {featureItems.map((item, index) => (
                        <article 
                            key={`${item.titleKey}-${index}`} 
                            className={`p-10 transition-all duration-200 bg-white border-b-8 md:border-b-0 md:border-r-8 last:border-r-0 last:border-b-0 border-black ${!isEditing ? 'hover:bg-yellow-400' : ''}`}
                        >
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={item.title}
                                    onChange={(event) => onFieldChange(item.titleKey, event.target.value)}
                                    className="text-3xl font-black uppercase mb-6 bg-gray-100 border-4 border-black px-2 py-1 w-full"
                                />
                            ) : (
                                <h3 className="text-3xl font-black uppercase mb-6 leading-none">{item.title}</h3>
                            )}

                            {isEditing ? (
                                <textarea
                                    value={item.description}
                                    onChange={(event) => onFieldChange(item.descKey, event.target.value)}
                                    className="text-lg font-bold leading-tight bg-gray-100 border-4 border-black p-2 w-full min-h-24"
                                />
                            ) : (
                                <p className="text-lg font-bold leading-tight">{item.description}</p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}