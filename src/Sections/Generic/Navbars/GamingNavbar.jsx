import { useState } from "react";

export default function GamingNavbar({ content = {}, editor }) {
	const {
		brand = "⚔️ BATTLE ARENA",
		link1 = "Tournaments",
		link2 = "Leaderboard",
		link3 = "Teams",
		link4 = "Community",
		ctaLabel = "Join Now",
		brandColor = "#00ff88",
		linkColor = "#ffffff",
		ctaBgColor = "#ff2288",
		ctaTextColor = "#ffffff",
		bgColor = "#0a0a0a",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav 
			className="w-full border-b backdrop-blur-sm"
			style={{ 
				backgroundColor: `${bgColor}CC`,
				borderColor: `${brandColor}20`,
			}}
		>
			<div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-4 flex items-center justify-between">
				{/* Brand */}
				<div className="flex items-center gap-2">
					<span className="text-2xl">🎮</span>
					{isEditing ? (
						<input
							type="text"
							value={brand}
							onChange={(e) => onFieldChange("brand", e.target.value)}
							className="font-black tracking-widest outline-none focus:ring-2 bg-black/50 border rounded px-2 py-1"
							style={{ 
								color: brandColor,
								borderColor: brandColor,
							}}
						/>
					) : (
						<span 
							className="font-black tracking-widest text-lg"
							style={{ color: brandColor }}
						>
							{brand}
						</span>
					)}
				</div>

				{/* Desktop Links */}
				<div className="hidden md:flex items-center gap-8">
					{[
						{ key: "link1", label: link1 },
						{ key: "link2", label: link2 },
						{ key: "link3", label: link3 },
						{ key: "link4", label: link4 },
					].map((link, idx) => (
						isEditing ? (
							<input
								key={idx}
								type="text"
								value={link.label}
								onChange={(e) => onFieldChange(link.key, e.target.value)}
								className="outline-none focus:ring-2 bg-black/50 border rounded px-2 py-1 text-sm"
								style={{ 
									color: linkColor,
									borderColor: brandColor,
								}}
							/>
						) : (
							<a 
								key={idx}
								href="#"
								className="text-sm font-semibold transition-all hover:opacity-80"
								style={{ color: linkColor }}
								onClick={(e) => e.preventDefault()}
							>
								{link.label}
							</a>
						)
					))}
				</div>

				{/* CTA Button */}
				<div className="flex items-center gap-4">
					{isEditing ? (
						<input
							type="text"
							value={ctaLabel}
							onChange={(e) => onFieldChange("ctaLabel", e.target.value)}
							className="px-4 py-2 rounded font-bold text-sm outline-none focus:ring-2"
							style={{ 
								backgroundColor: ctaBgColor,
								color: ctaTextColor,
								border: `1px solid ${ctaBgColor}`,
							}}
						/>
					) : (
						<button 
							className="px-4 py-2 rounded font-bold text-sm transition-all hover:scale-105 hidden md:inline-block"
							style={{ 
								backgroundColor: ctaBgColor,
								color: ctaTextColor,
							}}
						>
							{ctaLabel}
						</button>
					)}

					{/* Mobile menu button */}
					<button
						className="md:hidden text-xl"
						onClick={() => setIsOpen(!isOpen)}
						style={{ color: brandColor }}
					>
						{isOpen ? "✕" : "☰"}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div 
					className="md:hidden border-t p-6 space-y-4"
					style={{ 
						borderColor: `${brandColor}20`,
						backgroundColor: `${bgColor}EE`,
					}}
				>
					{[
						{ key: "link1", label: link1 },
						{ key: "link2", label: link2 },
						{ key: "link3", label: link3 },
						{ key: "link4", label: link4 },
					].map((link, idx) => (
						<a 
							key={idx}
							href="#"
							className="block text-sm font-semibold transition-all hover:opacity-80"
							style={{ color: linkColor }}
							onClick={(e) => e.preventDefault()}
						>
							{link.label}
						</a>
					))}
					<button 
						className="w-full px-4 py-2 rounded font-bold text-sm transition-all hover:scale-105"
						style={{ 
							backgroundColor: ctaBgColor,
							color: ctaTextColor,
						}}
					>
						{ctaLabel}
					</button>
				</div>
			)}
		</nav>
	);
}
