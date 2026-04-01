import { useState } from "react";
import { useBuilder } from "../../Context/BuilderContext";

export default function ProjectMetadata() {
    const { projectSetup, updateProjectSetup, checklistItems, checklistProgress } = useBuilder();
    const [isCollapsed, setIsCollapsed] = useState(false);

    if (!projectSetup?.projectName) {
        return null;
    }

    const metadataFields = [
        { key: "projectName", label: "Project", icon: "📋", editable: true },
        { key: "websiteType", label: "Type", icon: "🌐", editable: false },
        { key: "purpose", label: "Goal", icon: "🎯", editable: false },
        { key: "styleDirection", label: "Style", icon: "🎨", editable: false },
        { key: "targetAudience", label: "Audience", icon: "👥", editable: false },
        { key: "brandTone", label: "Tone", icon: "💬", editable: false },
        { key: "primaryCTA", label: "CTA", icon: "🔘", editable: true },
    ];

    const handleFieldUpdate = (field, newValue) => {
        updateProjectSetup({ [field]: newValue });
    };

    return (
        <div className={`flex flex-col transition-all duration-300 ${isCollapsed ? "w-14" : "w-80"} bg-slate-950/80 border-r border-slate-700/50 overflow-hidden`}>
            {/* Header with Toggle */}
            <div className="px-4 py-3 border-b border-slate-700/50 flex items-center justify-between">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="flex items-center gap-2 hover:text-cyan-400 transition text-cyan-300"
                >
                    <span className="text-lg">📊</span>
                    {!isCollapsed && <span className="text-xs font-semibold tracking-wider">PROJECT</span>}
                </button>
                {!isCollapsed && (
                    <button
                        onClick={() => setIsCollapsed(true)}
                        className="text-slate-500 hover:text-slate-300 text-sm"
                        title="Collapse"
                    >
                        ⟨
                    </button>
                )}
            </div>

            {!isCollapsed && (
                <>
                    {/* Progress Indicator */}
                    <div className="px-4 py-3 bg-slate-900/50 border-b border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-slate-400 tracking-widest">COMPLETENESS</span>
                            <span className="text-xs font-bold text-cyan-400">{checklistProgress}</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                                style={{ width: `${(checklistItems.filter(i => i.completed).length / checklistItems.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Metadata Fields */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                        <div className="space-y-3 p-4">
                            {metadataFields.map((field) => {
                                const value = projectSetup[field.key];
                                if (!value) return null;

                                return (
                                    <div key={field.key} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 hover:border-slate-600/50 transition">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-sm">{field.icon}</span>
                                            <span className="text-[10px] text-slate-500 font-semibold tracking-wider">{field.label}</span>
                                        </div>
                                        {field.editable ? (
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(e) => handleFieldUpdate(field.key, e.target.value)}
                                                className="w-full text-xs bg-slate-800 border border-slate-600 rounded px-2 py-1.5 text-cyan-300 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                                            />
                                        ) : (
                                            <p className="text-xs text-cyan-200 capitalize">{value}</p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-900/30">
                        <p className="text-[10px] text-slate-400 font-semibold tracking-wider mb-2">SECTION CHECKLIST</p>
                        <div className="space-y-1.5">
                            {checklistItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-2">
                                    <div
                                        className={`w-3 h-3 rounded-sm transition ${
                                            item.completed
                                                ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                                                : "bg-slate-700"
                                        }`}
                                    />
                                    <span className={`text-[10px] ${item.completed ? "text-green-400" : "text-slate-500"}`}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* Collapsed State - Icons */}
            {isCollapsed && (
                <div className="flex flex-col items-center justify-start gap-4 p-2 flex-1">
                    <button
                        onClick={() => setIsCollapsed(false)}
                        className="text-cyan-400 hover:text-cyan-300 text-lg"
                        title="Expand metadata"
                    >
                        ⟩
                    </button>
                </div>
            )}
        </div>
    );
}
