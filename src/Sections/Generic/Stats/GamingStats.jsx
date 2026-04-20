export default function GamingStats({ content = {}, editor }) {
	const {
		badge = "🏅 LEADERBOARD",
		title = "Top Players This Month",
		player1Name = "ShadowNinja",
		player1Rank = "Rank #1",
		player1Score = "12,840 Points",
		player2Name = "PhoenixFire",
		player2Rank = "Rank #2",
		player2Score = "11,920 Points",
		player3Name = "StormBringer",
		player3Rank = "Rank #3",
		player3Score = "10,755 Points",
		badgeColor = "#00ff88",
		titleColor = "#ffffff",
		cardBgColor = "#0f0f1e",
		cardBorderColor = "#00ff88",
		rankColor = "#ff2288",
		scoreColor = "#00e5ff",
	} = content;

	const isEditing = editor?.isEditing;
	const onFieldChange = (fieldKey, value) => editor?.onFieldChange?.(fieldKey, value);

	const players = [
		{ nameKey: "player1Name", rankKey: "player1Rank", scoreKey: "player1Score", name: player1Name, rank: player1Rank, score: player1Score, medal: "🥇", position: 1 },
		{ nameKey: "player2Name", rankKey: "player2Rank", scoreKey: "player2Score", name: player2Name, rank: player2Rank, score: player2Score, medal: "🥈", position: 2 },
		{ nameKey: "player3Name", rankKey: "player3Rank", scoreKey: "player3Score", name: player3Name, rank: player3Rank, score: player3Score, medal: "🥉", position: 3 },
	];

	return (
		<section 
			className="w-full bg-black text-white border-b overflow-hidden"
			style={{ borderColor: `${badgeColor}20` }}
		>
			{/* Animated background */}
			<div className="absolute inset-0 opacity-5 pointer-events-none" 
				style={{ 
					backgroundImage: `radial-gradient(circle at 1px 1px, ${badgeColor}, transparent)`,
					backgroundSize: "50px 50px",
				}} 
			/>

			<div className="mx-auto w-full max-w-6xl px-6 md:px-8 py-20 relative z-10">
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

				{/* Leaderboard */}
				<div className="space-y-4 max-w-2xl mx-auto">
					{players.map((player, idx) => (
						<div 
							key={`${player.nameKey}-${idx}`}
							className="relative p-6 rounded-xl transition-all duration-300 hover:scale-102 flex items-center justify-between"
							style={{ 
								backgroundColor: cardBgColor,
								border: `2px solid ${cardBorderColor}30`,
							}}
							onMouseEnter={(e) => e.currentTarget.style.borderColor = cardBorderColor}
							onMouseLeave={(e) => e.currentTarget.style.borderColor = `${cardBorderColor}30`}
						>
							{/* Medal & Position */}
							<div className="flex items-center gap-4">
								<div className="text-4xl">{player.medal}</div>
								<div>
									{isEditing ? (
										<>
											<input
												type="text"
												value={player.name}
												onChange={(e) => onFieldChange(player.nameKey, e.target.value)}
												className="w-full font-bold text-lg bg-black/50 border rounded p-2 mb-2 outline-none focus:ring-2"
												style={{ 
													color: titleColor,
													borderColor: badgeColor,
												}}
											/>
											<input
												type="text"
												value={player.rank}
												onChange={(e) => onFieldChange(player.rankKey, e.target.value)}
												className="w-full text-sm bg-black/50 border rounded p-2 outline-none focus:ring-2"
												style={{ 
													color: rankColor,
													borderColor: badgeColor,
												}}
											/>
										</>
									) : (
										<>
											<div 
												className="font-bold text-lg"
												style={{ color: titleColor }}
											>
												{player.name}
											</div>
											<div 
												className="text-sm"
												style={{ color: rankColor }}
											>
												{player.rank}
											</div>
										</>
									)}
								</div>
							</div>

							{/* Score */}
							{isEditing ? (
								<input
									type="text"
									value={player.score}
									onChange={(e) => onFieldChange(player.scoreKey, e.target.value)}
									className="text-lg font-bold bg-black/50 border rounded p-2 outline-none focus:ring-2"
									style={{ 
										color: scoreColor,
										borderColor: badgeColor,
									}}
								/>
							) : (
								<div 
									className="text-xl font-bold"
									style={{ color: scoreColor }}
								>
									{player.score}
								</div>
							)}
						</div>
					))}
				</div>

				{/* Quick stats */}
				<div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-16 text-center">
					<div>
						<div className="text-2xl font-black" style={{ color: badgeColor }}>500+</div>
						<div className="text-xs text-zinc-500 mt-2">Total Players</div>
					</div>
					<div>
						<div className="text-2xl font-black" style={{ color: badgeColor }}>24</div>
						<div className="text-xs text-zinc-500 mt-2">Tournaments/Month</div>
					</div>
					<div>
						<div className="text-2xl font-black" style={{ color: badgeColor }}>$50K</div>
						<div className="text-xs text-zinc-500 mt-2">Monthly Prize Pool</div>
					</div>
				</div>
			</div>
		</section>
	);
}
