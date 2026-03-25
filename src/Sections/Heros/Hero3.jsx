export default function Hero3({ content = {}, editor }) {
    const {
        badge = "Announcing our next round of funding.",
        title = "Data to enrich your online business",
        description = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
        buttonLabel = "Get started",
        secondaryButtonLabel = "Learn more"
    } = content;

    const isEditing = editor?.isEditing;
    const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

    return (
        <section className="bg-gray-900 w-full min-h-screen flex items-center justify-center overflow-hidden relative isolate">
            {/* Background Decorative Element (Top) */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                />
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-6 lg:px-8">
                {/* Announcement Badge */}
                <div className="mb-8 flex justify-center">
                    {isEditing ? (
                        <input
                            type="text"
                            value={badge}
                            onChange={(e) => onFieldChange("badge", e.target.value)}
                            className="rounded-full px-3 py-1 text-sm bg-black/50 text-gray-400 ring-1 ring-white/10 text-center w-full max-w-md"
                        />
                    ) : (
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 transition-all">
                            {badge}{' '}
                            <span className="font-semibold text-indigo-400 cursor-pointer">
                                Read more <span aria-hidden="true">&rarr;</span>
                            </span>
                        </div>
                    )}
                </div>

                <div className="text-center">
                    {isEditing ? (
                        <textarea
                            value={title}
                            onChange={(e) => onFieldChange("title", e.target.value)}
                            className="w-full bg-transparent text-5xl font-semibold tracking-tight text-white sm:text-7xl text-center resize-none mb-6 border border-white/10 p-2"
                        />
                    ) : (
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl mb-6">
                            {title}
                        </h1>
                    )}

                    {isEditing ? (
                        <textarea
                            value={description}
                            onChange={(e) => onFieldChange("description", e.target.value)}
                            className="w-full bg-transparent text-lg font-medium text-gray-400 sm:text-xl/8 text-center resize-none mb-10 border border-white/10 p-2"
                        />
                    ) : (
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                            {description}
                        </p>
                    )}

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {isEditing ? (
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    value={buttonLabel}
                                    onChange={(e) => onFieldChange("buttonLabel", e.target.value)}
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white text-center"
                                />
                                <input
                                    type="text"
                                    value={secondaryButtonLabel}
                                    onChange={(e) => onFieldChange("secondaryButtonLabel", e.target.value)}
                                    className="rounded-md bg-transparent border border-white/10 px-3.5 py-2.5 text-sm font-semibold text-white text-center"
                                />
                            </div>
                        ) : (
                            <>
                                <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors">
                                    {buttonLabel}
                                </button>
                                <button className="text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors">
                                    {secondaryButtonLabel} <span aria-hidden="true">→</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Background Decorative Element (Bottom) */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                />
            </div>
        </section>
    );
}