import { useMemo, useState } from "react";
import componentsCatalog from "./componentsCatalog.json";

const CATEGORY_ORDER = ["backgrounds", "headers", "animations", "texts"];

const CATEGORY_LABELS = {
	backgrounds: "Backgrounds",
	headers: "Headers",
	animations: "Animations",
	texts: "Texts",
};

const CATEGORY_DESCRIPTIONS = {
	backgrounds: "Atmospheric layers and scene foundations.",
	headers: "Pre-built top navigation structures.",
	animations: "Motion utilities and visual effects.",
	texts: "Readable text styles and expressive typography.",
};

function PreviewPanel({ type }) {
	if (type === "header") {
		return (
			<div className="relative h-36 overflow-hidden rounded-xl border border-cyan-700/60 bg-[#061125]">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.2),transparent_45%)]" />
				<div className="absolute inset-x-3 top-3 flex items-center justify-between rounded-lg border border-cyan-500/50 bg-black/60 px-3 py-2">
					<span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">Neon Sys</span>
					<div className="flex gap-2">
						<span className="h-2 w-2 rounded-full bg-cyan-400" />
						<span className="h-2 w-2 rounded-full bg-cyan-700" />
						<span className="h-2 w-2 rounded-full bg-cyan-900" />
					</div>
				</div>
			</div>
		);
	}

	if (type === "rolling") {
		return (
			<div className="relative h-36 overflow-hidden rounded-xl border border-cyan-700/60 bg-[#050b1a]">
				<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,229,255,0.3)_35%,transparent_70%)] animate-[rollX_5s_linear_infinite]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.3),transparent_40%)]" />
			</div>
		);
	}

	if (type === "background") {
		return (
			<div className="relative h-36 overflow-hidden rounded-xl border border-cyan-700/60 bg-[#030712]">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.08)_1px,transparent_1px)] bg-size-[24px_24px]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,229,255,0.3),transparent_60%)]" />
			</div>
		);
	}

	if (type === "type") {
		return (
			<div className="relative h-36 overflow-hidden rounded-xl border border-cyan-700/60 bg-[#040b18] px-4 py-5">
				<p className="max-w-[20ch] overflow-hidden whitespace-nowrap border-r border-cyan-400 pr-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 animate-[typing_3s_steps(22,end)_infinite,blink_0.8s_step-end_infinite]">
					Deploying Neon Interface
				</p>
			</div>
		);
	}

	if (type === "scan") {
		return (
			<div className="relative h-36 overflow-hidden rounded-xl border border-cyan-700/60 bg-[#050d1f]">
				<div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,229,255,0.2)_50%,transparent_100%)] animate-[scanY_2.6s_linear_infinite]" />
				<div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.08)_4px)]" />
			</div>
		);
	}

	return (
		<div className="relative h-36 overflow-hidden rounded-xl border border-cyan-700/60 bg-[#061125] px-4 py-5">
			<p className="text-xl font-extrabold uppercase tracking-[0.18em] text-cyan-300 [text-shadow:0_0_12px_rgba(0,229,255,0.7)]">
				Hologram Text
			</p>
			<p className="mt-2 text-xs uppercase tracking-[0.15em] text-cyan-500 animate-[flicker_2.4s_linear_infinite]">
				system ready
			</p>
		</div>
	);
}

function ComponentCard({ item, onCopy }) {
	return (
		<article className="group rounded-2xl border border-cyan-900/80 bg-black/55 p-4 transition duration-300 hover:border-cyan-500/80 hover:shadow-[0_0_40px_rgba(0,229,255,0.14)]">
			<PreviewPanel type={item.previewType} />
			<div className="mt-4">
				<h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">{item.name}</h3>
				<p className="mt-2 min-h-10 text-xs leading-relaxed text-cyan-500/90">{item.description}</p>
			</div>
			<div className="mt-3 flex flex-wrap gap-2">
				{item.tags.map((tag) => (
					<span
						key={tag}
						className="rounded-full border border-cyan-800/80 bg-cyan-950/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-cyan-300"
					>
						{tag}
					</span>
				))}
			</div>
			<div className="mt-4 flex items-center justify-between gap-3">
				<span className="truncate text-[11px] text-cyan-600">{item.id}</span>
				<button
					onClick={() => onCopy(item.importCode, item.name)}
					className="rounded-md border border-cyan-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-black"
				>
					Copy Import
				</button>
			</div>
		</article>
	);
}

export default function ReactComponents() {
	const [activeCategory, setActiveCategory] = useState("all");
	const [notice, setNotice] = useState("");

	const grouped = useMemo(() => {
		return CATEGORY_ORDER.reduce((acc, category) => {
			acc[category] = componentsCatalog.filter((item) => item.category === category);
			return acc;
		}, {});
	}, []);

	const filteredCatalog = useMemo(() => {
		if (activeCategory === "all") return componentsCatalog;
		return componentsCatalog.filter((item) => item.category === activeCategory);
	}, [activeCategory]);

	const copyImport = async (importCode, name) => {
		try {
			await navigator.clipboard.writeText(importCode);
			setNotice(`${name} import copied.`);
			setTimeout(() => setNotice(""), 1800);
		} catch {
			setNotice("Copy failed. Clipboard permission blocked.");
			setTimeout(() => setNotice(""), 1800);
		}
	};

	return (
		<main className="min-h-screen bg-[#030712] text-cyan-100">
			<style>{`
				@keyframes rollX {
					0% { transform: translateX(-120%); }
					100% { transform: translateX(120%); }
				}
				@keyframes scanY {
					0% { transform: translateY(-130%); }
					100% { transform: translateY(130%); }
				}
				@keyframes typing {
					0% { width: 0; }
					40%, 80% { width: 22ch; }
					100% { width: 0; }
				}
				@keyframes blink {
					0%, 49% { border-color: rgba(34, 211, 238, 1); }
					50%, 100% { border-color: transparent; }
				}
				@keyframes flicker {
					0%, 17%, 19%, 22%, 63%, 65%, 100% { opacity: 1; }
					18%, 21%, 64% { opacity: 0.35; }
				}
			`}</style>

			<section className="relative overflow-hidden border-b border-cyan-900/70 bg-[#050b16]">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,229,255,0.16),transparent_36%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.15),transparent_40%)]" />
				<div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
					<p className="text-[11px] uppercase tracking-[0.35em] text-cyan-500">Component Arsenal</p>
					<h1 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] text-cyan-200 md:text-5xl">
						Cyberpunk React Components
					</h1>
					<p className="mt-4 max-w-2xl text-sm leading-relaxed text-cyan-400">
						A curated library of pre-built component patterns. Browse by use-case, preview style blocks, and copy ready-to-use imports.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-2">
						<button
							onClick={() => setActiveCategory("all")}
							className={`rounded-md border px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${
								activeCategory === "all"
									? "border-cyan-300 bg-cyan-400 text-black"
									: "border-cyan-700 text-cyan-300 hover:border-cyan-400"
							}`}
						>
							All
						</button>
						{CATEGORY_ORDER.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`rounded-md border px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${
									activeCategory === category
										? "border-cyan-300 bg-cyan-400 text-black"
										: "border-cyan-700 text-cyan-300 hover:border-cyan-400"
								}`}
							>
								{CATEGORY_LABELS[category]}
							</button>
						))}
					</div>

					{notice && (
						<p className="mt-4 text-xs uppercase tracking-[0.16em] text-cyan-300">{notice}</p>
					)}
				</div>
			</section>

			{activeCategory === "all" ? (
				<div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
					{CATEGORY_ORDER.map((category) => (
						<section key={category} className="mb-12 last:mb-0">
							<div className="mb-5 flex items-end justify-between gap-4 border-b border-cyan-900/60 pb-3">
								<div>
									<h2 className="text-xl font-bold uppercase tracking-[0.15em] text-cyan-200">
										{CATEGORY_LABELS[category]}
									</h2>
									<p className="mt-1 text-xs uppercase tracking-[0.12em] text-cyan-600">
										{CATEGORY_DESCRIPTIONS[category]}
									</p>
								</div>
								<span className="text-xs uppercase tracking-[0.2em] text-cyan-700">
									{grouped[category].length} Items
								</span>
							</div>

							<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
								{grouped[category].map((item) => (
									<ComponentCard key={item.id} item={item} onCopy={copyImport} />
								))}
							</div>
						</section>
					))}
				</div>
			) : (
				<section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
					<div className="mb-5 border-b border-cyan-900/60 pb-3">
						<h2 className="text-xl font-bold uppercase tracking-[0.15em] text-cyan-200">
							{CATEGORY_LABELS[activeCategory]}
						</h2>
						<p className="mt-1 text-xs uppercase tracking-[0.12em] text-cyan-600">
							{CATEGORY_DESCRIPTIONS[activeCategory]}
						</p>
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{filteredCatalog.map((item) => (
							<ComponentCard key={item.id} item={item} onCopy={copyImport} />
						))}
					</div>
				</section>
			)}
		</main>
	);
}
