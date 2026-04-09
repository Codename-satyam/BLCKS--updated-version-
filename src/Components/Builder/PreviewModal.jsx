import { useEffect, useRef } from "react";
import { useBuilder, FONT_MAP } from "../../Context/BuilderContext";

const TEMPLATE_ACCENT_CSS = `
    .builder-template-surface {
        font-family: var(--builder-font) !important;
    }

    .builder-template-surface [class*="text-cyan-"] {
        color: var(--builder-accent) !important;
    }

    .builder-template-surface [class*="border-cyan-"] {
        border-color: var(--builder-accent) !important;
    }

    .builder-template-surface [class*="hover:text-cyan-"]:hover {
        color: var(--builder-accent) !important;
    }

    .builder-template-surface [class*="hover:bg-cyan-"]:hover {
        background-color: var(--builder-accent) !important;
        color: #020202 !important;
    }
`;

const VIEWPORT_WIDTHS = {
    desktop: "100%",
    tablet:  "768px",
    mobile:  "390px",
};

export default function PreviewModal() {
    const {
        isPreviewOpen,
        closePreview,
        previewViewport,
        setPreviewViewport,
        selectedSections,
        designSettings,
        resolvedBackground,
    } = useBuilder();

    const scrollRef = useRef(null);

    // Close on Escape
    useEffect(() => {
        if (!isPreviewOpen) return;
        const handler = (e) => { if (e.key === "Escape") closePreview(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isPreviewOpen, closePreview]);

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = isPreviewOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isPreviewOpen]);

    if (!isPreviewOpen) return null;

    const resolvedFont = FONT_MAP[designSettings.fontFamily] || FONT_MAP.mono;
    const textOpacityScale = Math.max(0.2, Math.min(1, (designSettings.textOpacity || 100) / 100));
    const sectionContentStyle = {
        "--builder-accent": designSettings.accentColor || "#00e5ff",
        "--builder-font": resolvedFont,
        fontFamily: resolvedFont,
        color: designSettings.textColor || "#ffffff",
        opacity: textOpacityScale,
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md">
            <style>{TEMPLATE_ACCENT_CSS}</style>

            {/* ── HEADER ───────────────────────────────────────────────── */}
            <header className="h-12 shrink-0 flex items-center justify-between px-5 border-b border-cyan-900/40 bg-black/80">
                <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-cyan-400">⊡ LIVE_PREVIEW</span>

                    {/* Viewport tabs */}
                    <div className="flex gap-1">
                        {(["desktop", "tablet", "mobile"]).map((vp) => (
                            <button
                                key={vp}
                                onClick={() => setPreviewViewport(vp)}
                                className={`text-[8px] font-mono tracking-widest px-3 py-1.5 border transition-all uppercase
                                    ${previewViewport === vp
                                        ? "border-cyan-500 bg-cyan-950/60 text-cyan-300"
                                        : "border-cyan-900/30 text-slate-600 hover:border-cyan-800 hover:text-slate-400"
                                    }`}
                            >
                                {vp === "desktop" ? "⬜ Desktop" : vp === "tablet" ? "▭ Tablet" : "▯ Mobile"}
                            </button>
                        ))}
                    </div>

                    <span className="text-[8px] font-mono text-slate-700">
                        {VIEWPORT_WIDTHS[previewViewport]}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-[8px] font-mono text-slate-700">
                        {selectedSections.length} section{selectedSections.length !== 1 ? "s" : ""}
                    </span>
                    <button
                        onClick={closePreview}
                        className="text-[9px] font-mono tracking-widest border border-red-900/50 text-red-600 px-4 py-1.5 hover:bg-red-950/40 hover:text-red-400 hover:border-red-500 transition-all"
                    >
                        ✕ CLOSE
                    </button>
                </div>
            </header>

            {/* ── PREVIEW STAGE ────────────────────────────────────────── */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-auto flex justify-center bg-[#0a0a0a] p-6"
            >
                {selectedSections.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <div className="w-16 h-16 border border-cyan-900/30 flex items-center justify-center">
                            <span className="text-cyan-800 text-2xl font-mono">∅</span>
                        </div>
                        <p className="text-[10px] font-mono tracking-[0.3em] text-cyan-900">NO_SECTIONS_LOADED</p>
                        <p className="text-xs text-slate-700 font-sans">Add sections from the sidebar to see a preview.</p>
                    </div>
                ) : (
                    <div
                        className="transition-all duration-300"
                        style={{
                            width: VIEWPORT_WIDTHS[previewViewport],
                            maxWidth: "100%",
                            background: resolvedBackground,
                            boxShadow: "0 0 80px rgba(0,0,0,0.8)",
                        }}
                    >
                        {selectedSections.map((section, index) => (
                            <div key={`${section.id}-${index}`} className="builder-template-surface relative isolate" style={sectionContentStyle}>
                                {section.Component ? (
                                    <section.Component
                                        content={section.content}
                                        editor={{ isEditing: false }}
                                    />
                                ) : (
                                    <div
                                        className="p-10 text-center text-xs font-mono opacity-30"
                                        style={{ color: designSettings.textColor }}
                                    >
                                        [{section.id.toUpperCase()}]
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ── FOOTER BAR ───────────────────────────────────────────── */}
            <footer className="h-9 shrink-0 flex items-center justify-between px-5 border-t border-cyan-900/20 bg-black/60">
                <div className="flex items-center gap-4 text-[8px] font-mono text-slate-700">
                    <span>BG: {designSettings.bgMode === "gradient" ? "GRADIENT" : designSettings.bgColor.toUpperCase()}</span>
                    <span>FONT: {designSettings.fontFamily.toUpperCase()}</span>
                    <span>ACCENT: <span style={{ color: designSettings.accentColor }}>{designSettings.accentColor.toUpperCase()}</span></span>
                </div>
                <span className="text-[8px] font-mono text-slate-800">ESC TO CLOSE</span>
            </footer>
        </div>
    );
}
