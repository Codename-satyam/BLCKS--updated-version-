import { useState, useRef } from "react";
import { useBuilder, FONT_MAP } from "../../Context/BuilderContext";

// ── Per-section editable fields definition ────────────────────────────────────
export const SECTION_FIELDS = {
    navbar1:   [
        { key: "brandName",  label: "Brand Name",          type: "text",     default: "BRAND.SYS" },
        { key: "links",      label: "Nav Links (comma)",    type: "text",     default: "About, Features, Pricing, Contact" },
        { key: "ctaText",    label: "CTA Button",           type: "text",     default: "Get Started" },
    ],
    navbar2:   [
        { key: "brandName",  label: "Brand Name",           type: "text",     default: "SYSTEM" },
        { key: "tagline",    label: "Tagline",              type: "text",     default: "next-gen platform" },
        { key: "ctaText",    label: "CTA Button",           type: "text",     default: "Launch App" },
    ],
    navbar3:   [
        { key: "brandName",  label: "Brand Name",           type: "text",     default: "GLASS.CO" },
        { key: "ctaText",    label: "CTA Label",            type: "text",     default: "Sign Up Free" },
    ],
    hero1:     [
        { key: "badge",      label: "Badge Text",           type: "text",     default: "✦ Launching Soon" },
        { key: "headline",   label: "Headline",             type: "textarea", default: "Build the Future,\nOne Module at a Time." },
        { key: "subtext",    label: "Subtext",              type: "textarea", default: "A next-generation platform for building modern web experiences." },
        { key: "ctaPrimary", label: "Primary CTA",          type: "text",     default: "Start Building" },
        { key: "ctaSecondary", label: "Secondary CTA",      type: "text",     default: "View Demo" },
    ],
    hero2:     [
        { key: "headline",   label: "Headline",             type: "textarea", default: "The Platform Built for Scale." },
        { key: "subtext",    label: "Subtext",              type: "textarea", default: "Deploy faster. Iterate smarter. Ship with confidence." },
        { key: "ctaPrimary", label: "CTA",                  type: "text",     default: "Get Early Access" },
    ],
    hero3:     [
        { key: "headline",   label: "Headline",             type: "textarea", default: "Clarity. Precision. Speed." },
        { key: "subtext",    label: "Subtext",              type: "textarea", default: "Everything you need, nothing you don't." },
        { key: "ctaPrimary", label: "CTA",                  type: "text",     default: "Get Started" },
    ],
    features1: [
        { key: "sectionLabel", label: "Section Tag",        type: "text",     default: "WHY CHOOSE US" },
        { key: "title",        label: "Section Title",      type: "text",     default: "Everything You Need" },
        { key: "feat1Title",   label: "Feature 1 Title",    type: "text",     default: "Lightning Fast" },
        { key: "feat1Desc",    label: "Feature 1 Desc",     type: "text",     default: "Blazing performance at any scale." },
        { key: "feat2Title",   label: "Feature 2 Title",    type: "text",     default: "Secure by Default" },
        { key: "feat2Desc",    label: "Feature 2 Desc",     type: "text",     default: "Enterprise-grade security built in." },
        { key: "feat3Title",   label: "Feature 3 Title",    type: "text",     default: "Real-time Analytics" },
        { key: "feat3Desc",    label: "Feature 3 Desc",     type: "text",     default: "Insights that drive decisions." },
    ],
    features2: [
        { key: "title",        label: "Title",              type: "text",     default: "Built for Professionals" },
        { key: "feat1",        label: "Feature 1",          type: "text",     default: "Advanced Automation" },
        { key: "feat2",        label: "Feature 2",          type: "text",     default: "Team Collaboration" },
        { key: "feat3",        label: "Feature 3",          type: "text",     default: "API-first Architecture" },
    ],
    features3: [
        { key: "title",        label: "Title",              type: "text",     default: "Core Capabilities" },
        { key: "feat1Title",   label: "Card 1 Title",       type: "text",     default: "Modular Design" },
        { key: "feat1Desc",    label: "Card 1 Desc",        type: "text",     default: "Compose your perfect stack." },
        { key: "feat2Title",   label: "Card 2 Title",       type: "text",     default: "Smart Defaults" },
        { key: "feat2Desc",    label: "Card 2 Desc",        type: "text",     default: "Works great out of the box." },
        { key: "feat3Title",   label: "Card 3 Title",       type: "text",     default: "Instant Deploy" },
        { key: "feat3Desc",    label: "Card 3 Desc",        type: "text",     default: "From commit to live in seconds." },
    ],
    pricing1:  [
        { key: "tier1Name",  label: "Plan 1 Name",          type: "text",     default: "Starter" },
        { key: "tier1Price", label: "Plan 1 Price",          type: "text",     default: "$0" },
        { key: "tier1Desc",  label: "Plan 1 Desc",           type: "text",     default: "Perfect to get started" },
        { key: "tier2Name",  label: "Plan 2 Name",           type: "text",     default: "Pro" },
        { key: "tier2Price", label: "Plan 2 Price",           type: "text",     default: "$29/mo" },
        { key: "tier2Desc",  label: "Plan 2 Desc",           type: "text",     default: "For growing teams" },
        { key: "tier3Name",  label: "Plan 3 Name",           type: "text",     default: "Enterprise" },
        { key: "tier3Price", label: "Plan 3 Price",           type: "text",     default: "Custom" },
        { key: "tier3Desc",  label: "Plan 3 Desc",           type: "text",     default: "Scale without limits" },
    ],
    pricing2:  [
        { key: "tier1Name",  label: "Plan 1 Name",           type: "text",     default: "Free" },
        { key: "tier2Name",  label: "Plan 2 Name",           type: "text",     default: "Growth" },
        { key: "tier2Price", label: "Plan 2 Monthly Price",  type: "text",     default: "$49/mo" },
        { key: "tier2Annual", label: "Plan 2 Annual Price",  type: "text",     default: "$39/mo" },
    ],
    pricing3:  [
        { key: "tier1Name",  label: "Tier 1 Name",           type: "text",     default: "Lite" },
        { key: "tier1Price", label: "Tier 1 Price",           type: "text",     default: "$9" },
        { key: "tier2Name",  label: "Tier 2 Name",           type: "text",     default: "Pro" },
        { key: "tier2Price", label: "Tier 2 Price",           type: "text",     default: "$29" },
        { key: "tier3Name",  label: "Tier 3 Name",           type: "text",     default: "Scale" },
        { key: "tier3Price", label: "Tier 3 Price",           type: "text",     default: "$99" },
    ],
    workpage1: [
        { key: "title",      label: "Section Title",         type: "text",     default: "Case Studies" },
        { key: "project1",   label: "Project 1 Name",        type: "text",     default: "Platform Redesign — SaaS" },
        { key: "tag1",       label: "Project 1 Tag",         type: "text",     default: "UX / Product" },
        { key: "project2",   label: "Project 2 Name",        type: "text",     default: "Mobile App Launch" },
        { key: "tag2",       label: "Project 2 Tag",         type: "text",     default: "Fintech" },
        { key: "project3",   label: "Project 3 Name",        type: "text",     default: "Brand Identity" },
        { key: "tag3",       label: "Project 3 Tag",         type: "text",     default: "Agency" },
    ],
    workpage2: [
        { key: "title",      label: "Title",                 type: "text",     default: "Selected Work" },
        { key: "project1",   label: "Project 1",            type: "text",     default: "E-commerce Platform" },
        { key: "project2",   label: "Project 2",            type: "text",     default: "Dashboard Analytics" },
        { key: "project3",   label: "Project 3",            type: "text",     default: "Mobile Banking App" },
    ],
    workpage3: [
        { key: "title",      label: "Title",                 type: "text",     default: "How It Works" },
        { key: "step1",      label: "Step 1",               type: "text",     default: "Sign Up & Configure" },
        { key: "step1Desc",  label: "Step 1 Desc",          type: "text",     default: "Create your account in under 60 seconds." },
        { key: "step2",      label: "Step 2",               type: "text",     default: "Build & Customize" },
        { key: "step2Desc",  label: "Step 2 Desc",          type: "text",     default: "Drag, drop, and style your perfect page." },
        { key: "step3",      label: "Step 3",               type: "text",     default: "Launch & Scale" },
        { key: "step3Desc",  label: "Step 3 Desc",          type: "text",     default: "Go live and grow with confidence." },
    ],
    workpage4: [
        { key: "title",      label: "Gallery Title",         type: "text",     default: "Project Showcase" },
        { key: "item1",      label: "Item 1",               type: "text",     default: "Web Design" },
        { key: "item2",      label: "Item 2",               type: "text",     default: "Branding" },
        { key: "item3",      label: "Item 3",               type: "text",     default: "Mobile UI" },
        { key: "item4",      label: "Item 4",               type: "text",     default: "Motion Design" },
    ],
    footer1:   [
        { key: "brandName",  label: "Brand Name",            type: "text",     default: "BRAND.SYS" },
        { key: "tagline",    label: "Tagline",               type: "text",     default: "Building the future, one pixel at a time." },
        { key: "copyright",  label: "Copyright Text",        type: "text",     default: "© 2025 Brand. All rights reserved." },
    ],
    footer2:   [
        { key: "brandName",  label: "Brand Name",            type: "text",     default: "SYSTEM.CO" },
        { key: "col1Title",  label: "Column 1 Title",        type: "text",     default: "Product" },
        { key: "col1Links",  label: "Column 1 Links",        type: "text",     default: "Features, Pricing, Changelog, Roadmap" },
        { key: "col2Title",  label: "Column 2 Title",        type: "text",     default: "Company" },
        { key: "col2Links",  label: "Column 2 Links",        type: "text",     default: "About, Blog, Careers, Press" },
        { key: "copyright",  label: "Copyright",             type: "text",     default: "© 2025 System.co" },
    ],
    footer3:   [
        { key: "ctaHeadline", label: "CTA Headline",         type: "text",     default: "Ready to Launch?" },
        { key: "ctaSubtext",  label: "CTA Subtext",          type: "text",     default: "Start for free. No credit card required." },
        { key: "ctaBtn",      label: "CTA Button",           type: "text",     default: "Get Started Free" },
        { key: "copyright",   label: "Copyright",            type: "text",     default: "© 2025 Brand. All rights reserved." },
    ],
};

// ── Live preview renderer ─────────────────────────────────────────────────────
function SectionPreview({ sectionId, content, designSettings }) {
    const accent = designSettings.accentColor || "#00e5ff";
    const textColor = designSettings.textColor || "#ffffff";
    const opacity = (designSettings.textOpacity || 100) / 100;
    const fontFamily = FONT_MAP[designSettings.fontFamily] || FONT_MAP.mono;

    const s = (extra = "") => ({
        color: textColor,
        opacity,
        fontFamily,
        ...(extra ? JSON.parse(extra) : {}),
    });

    const accentStyle = { color: accent };
    const accentBorder = { borderColor: accent, color: accent };

    if (sectionId.startsWith("navbar")) {
        const links = (content.links || "About, Features, Pricing").split(",").map((l) => l.trim());
        return (
            <div style={{ ...s(), background: "rgba(0,0,0,0.6)", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ ...accentStyle, fontSize: 15, letterSpacing: "0.15em", fontWeight: "bold" }}>
                    {content.brandName || "BRAND.SYS"}
                </span>
                <div style={{ display: "flex", gap: 20, fontSize: 11, opacity: 0.7 }}>
                    {links.slice(0, 5).map((l, i) => <span key={i}>{l}</span>)}
                </div>
                <button style={{ ...accentBorder, fontSize: 10, padding: "5px 14px", border: "1px solid", background: "transparent", cursor: "pointer", letterSpacing: "0.1em", fontFamily }}>
                    {content.ctaText || "Get Started"}
                </button>
            </div>
        );
    }

    if (sectionId.startsWith("hero")) {
        return (
            <div style={{ ...s(), padding: "48px 24px", textAlign: "center" }}>
                {content.badge && (
                    <div style={{ ...accentStyle, fontSize: 10, letterSpacing: "0.3em", marginBottom: 16, opacity: 0.8 }}>
                        {content.badge}
                    </div>
                )}
                <h1 style={{ fontSize: 28, lineHeight: 1.3, marginBottom: 16, whiteSpace: "pre-line" }}>
                    {content.headline || "Build the Future"}
                </h1>
                <p style={{ fontSize: 13, opacity: 0.65, maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.7, fontFamily: "sans-serif" }}>
                    {content.subtext || "A next-generation platform."}
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={{ ...accentBorder, fontSize: 11, padding: "9px 24px", border: "1px solid", background: "transparent", cursor: "pointer", letterSpacing: "0.12em", fontFamily }}>
                        {content.ctaPrimary || "Start Building"}
                    </button>
                    {content.ctaSecondary && (
                        <button style={{ fontSize: 11, padding: "9px 24px", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.6)", background: "transparent", cursor: "pointer", letterSpacing: "0.1em", fontFamily }}>
                            {content.ctaSecondary}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    if (sectionId.startsWith("features")) {
        const feats = [
            { icon: "⚡", title: content.feat1Title || content.feat1 || "Feature One",   desc: content.feat1Desc || "High-performance at any scale." },
            { icon: "🔒", title: content.feat2Title || content.feat2 || "Feature Two",   desc: content.feat2Desc || "Enterprise-grade security built in." },
            { icon: "📊", title: content.feat3Title || content.feat3 || "Feature Three", desc: content.feat3Desc || "Real-time analytics and insights." },
        ];
        return (
            <div style={{ ...s(), padding: "40px 24px" }}>
                {content.sectionLabel && (
                    <div style={{ ...accentStyle, fontSize: 9, letterSpacing: "0.3em", textAlign: "center", marginBottom: 8 }}>
                        {content.sectionLabel}
                    </div>
                )}
                <div style={{ fontSize: 18, textAlign: "center", marginBottom: 24 }}>
                    {content.title || "Everything You Need"}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                    {feats.map((f, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: 14 }}>
                            <div style={{ fontSize: 20, marginBottom: 8 }}>{f.icon}</div>
                            <div style={{ ...accentStyle, fontSize: 11, marginBottom: 5 }}>{f.title}</div>
                            <div style={{ fontSize: 10, opacity: 0.5, lineHeight: 1.5, fontFamily: "sans-serif" }}>{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (sectionId.startsWith("pricing")) {
        const tiers = [
            { name: content.tier1Name || "Starter", price: content.tier1Price || "$0",     desc: content.tier1Desc || "For individuals", highlight: false },
            { name: content.tier2Name || "Pro",      price: content.tier2Price || "$29/mo", desc: content.tier2Desc || "For growing teams", highlight: true },
            { name: content.tier3Name || "Scale",    price: content.tier3Price || "Custom", desc: content.tier3Desc || "For enterprises", highlight: false },
        ];
        return (
            <div style={{ ...s(), padding: "40px 24px" }}>
                <div style={{ ...accentStyle, fontSize: 9, letterSpacing: "0.3em", textAlign: "center", marginBottom: 8 }}>PRICING</div>
                <div style={{ fontSize: 18, textAlign: "center", marginBottom: 24 }}>Choose Your Plan</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                    {tiers.map((t, i) => (
                        <div key={i} style={{ border: `1px solid ${t.highlight ? accent : "rgba(255,255,255,0.1)"}`, padding: "18px 12px", textAlign: "center" }}>
                            <div style={{ fontSize: 9, letterSpacing: "0.2em", opacity: 0.5, marginBottom: 8 }}>{t.name.toUpperCase()}</div>
                            <div style={{ fontSize: 24, marginBottom: 6, ...(t.highlight ? accentStyle : {}) }}>{t.price}</div>
                            <div style={{ fontSize: 10, opacity: 0.4, marginBottom: 12, fontFamily: "sans-serif" }}>{t.desc}</div>
                            <button style={{ fontSize: 9, padding: "5px 0", width: "100%", border: `1px solid ${t.highlight ? accent : "rgba(255,255,255,0.2)"}`, background: t.highlight ? accent : "transparent", color: t.highlight ? "#000" : "inherit", cursor: "pointer", fontFamily, letterSpacing: "0.1em" }}>
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (sectionId.startsWith("workpage")) {
        const items = [
            { name: content.project1 || content.step1 || content.item1 || "Project Alpha", tag: content.tag1 || content.step1Desc || "01" },
            { name: content.project2 || content.step2 || content.item2 || "Project Beta",  tag: content.tag2 || content.step2Desc || "02" },
            { name: content.project3 || content.step3 || content.item3 || "Project Gamma", tag: content.tag3 || content.step3Desc || "03" },
        ].filter(Boolean);
        return (
            <div style={{ ...s(), padding: "40px 24px" }}>
                <div style={{ ...accentStyle, fontSize: 9, letterSpacing: "0.3em", marginBottom: 8 }}>WORK</div>
                <div style={{ fontSize: 18, marginBottom: 20 }}>{content.title || "Selected Work"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {items.map((item, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: 13, fontFamily: "sans-serif" }}>{item.name}</span>
                            <span style={{ ...accentStyle, fontSize: 9, letterSpacing: "0.15em" }}>{item.tag} →</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (sectionId.startsWith("footer")) {
        return (
            <div style={{ ...s(), borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <span style={{ ...accentStyle, fontSize: 13, letterSpacing: "0.1em" }}>{content.brandName || "BRAND.SYS"}</span>
                <span style={{ fontSize: 11, opacity: 0.45, fontFamily: "sans-serif" }}>{content.tagline || content.ctaHeadline || "Building the future."}</span>
                <span style={{ fontSize: 10, opacity: 0.3, fontFamily: "sans-serif" }}>{content.copyright || "© 2025"}</span>
            </div>
        );
    }

    return <div style={{ padding: 20, fontSize: 12, color: "#444", fontFamily: "sans-serif" }}>[{sectionId}] section</div>;
}

// ── Inline edit panel ─────────────────────────────────────────────────────────
function EditPanel({ section, onFieldChange, onClose }) {
    const fields = SECTION_FIELDS[section.id] || [];
    const content = section.content || {};

    return (
        <div className="border-t border-cyan-900/40 bg-[#040404]">
            {/* Panel header */}
            <div className="px-5 py-3 border-b border-cyan-900/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-[9px] font-mono tracking-[0.2em] text-cyan-400">CONTENT EDITOR</span>
                    <span className="text-[9px] font-mono text-cyan-800">— {section.title}</span>
                </div>
                <button
                    onClick={onClose}
                    className="text-[9px] font-mono tracking-widest border border-cyan-700/50 bg-cyan-950/40 text-cyan-400 px-3 py-1 hover:bg-cyan-400 hover:text-black transition-all"
                >
                    ✓ SAVE
                </button>
            </div>

            {/* Fields grid */}
            <div className="p-5 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3">
                {fields.map((field) => {
                    const value = content[field.key] !== undefined ? content[field.key] : field.default;
                    const isWide = field.type === "textarea";
                    return (
                        <div key={field.key} className={`flex flex-col gap-1.5 ${isWide ? "col-span-2 md:col-span-3" : ""}`}>
                            <label className="text-[8px] font-mono tracking-[0.18em] text-cyan-800 uppercase">
                                {field.label}
                            </label>
                            {field.type === "textarea" ? (
                                <textarea
                                    value={value}
                                    rows={3}
                                    onChange={(e) => onFieldChange(field.key, e.target.value)}
                                    className="bg-black border border-cyan-900/40 focus:border-cyan-500 text-cyan-200 text-[11px] font-sans px-3 py-2 outline-none resize-none transition-colors placeholder-cyan-900/50"
                                    placeholder={field.default}
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => onFieldChange(field.key, e.target.value)}
                                    className="bg-black border border-cyan-900/40 focus:border-cyan-500 text-cyan-200 text-[11px] font-mono px-3 py-2 outline-none transition-colors"
                                    placeholder={field.default}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ── Main Editor ───────────────────────────────────────────────────────────────
export default function Editor() {
    const {
        selectedSections,
        removeSection,
        moveSection,
        reorderSection,
        updateSectionField,
        designSettings,
        resolvedBackground,
        activeEditId,
        setActiveEditId,
    } = useBuilder();

    const [canvasDragOver, setCanvasDragOver] = useState(false);
    const [dragOverSectionId, setDragOverSectionId] = useState(null);
    const draggedSectionIdRef = useRef(null);

    const { addSection } = useBuilder();

    // ── Drag from sidebar ───────────────────────────────────────────────
    const handleCanvasDrop = (e) => {
        e.preventDefault();
        setCanvasDragOver(false);
        setDragOverSectionId(null);

        const raw = e.dataTransfer.getData("application/x-builder-section") || e.dataTransfer.getData("text/plain");
        if (!raw) return;
        try {
            const payload = JSON.parse(raw);
            if (payload.source === "registry" && payload.sectionId) {
                addSection(payload.sectionId);
            }
        } catch { /* no-op */ }
    };

    // ── Drag to reorder ─────────────────────────────────────────────────
    const handleSectionDragStart = (e, sectionId) => {
        draggedSectionIdRef.current = sectionId;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", JSON.stringify({ source: "canvas", sectionId }));
    };

    const handleSectionDragOver = (e, targetId) => {
        e.preventDefault();
        if (draggedSectionIdRef.current && draggedSectionIdRef.current !== targetId) {
            setDragOverSectionId(targetId);
        }
    };

    const handleSectionDrop = (e, targetId) => {
        e.preventDefault();
        setDragOverSectionId(null);
        const sourceId = draggedSectionIdRef.current;
        if (sourceId && sourceId !== targetId) {
            reorderSection(sourceId, targetId);
        }
        draggedSectionIdRef.current = null;
    };

    const bgStyle = {
        background: resolvedBackground || designSettings.bgColor,
    };

    return (
        <section
            className="flex-1 min-h-0 flex flex-col overflow-hidden transition-all duration-500"
            style={bgStyle}
        >
            {/* Dot grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(rgba(0,229,255,1) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />

            {/* Scrollable canvas */}
            <div
                onDragOver={(e) => { e.preventDefault(); setCanvasDragOver(true); }}
                onDragLeave={() => { setCanvasDragOver(false); }}
                onDrop={handleCanvasDrop}
                className={`flex-1 overflow-y-auto p-6 md:p-10 z-10 relative transition-all duration-300
                    ${canvasDragOver ? "ring-inset ring-2 ring-cyan-500/30 bg-cyan-950/5" : ""}
                `}
            >
                <div className="max-w-4xl mx-auto flex flex-col gap-4 min-h-full">

                    {/* EMPTY STATE */}
                    {selectedSections.length === 0 && (
                        <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-cyan-900/30 py-32 px-6 text-center min-h-[400px]">
                            <div className="relative w-16 h-16 border border-cyan-500/20 rounded-full flex items-center justify-center mb-8">
                                <div className="absolute inset-0 rounded-full border border-cyan-400/10 animate-ping" />
                                <span className="text-cyan-500 text-3xl font-mono font-light">+</span>
                            </div>
                            <p className="text-[11px] font-mono tracking-[0.35em] text-cyan-600 mb-3">AWAITING_INPUT</p>
                            <p className="text-slate-600 text-xs font-sans max-w-xs leading-relaxed">
                                Inject modules from the library on the left, or drag sections directly onto the canvas.
                            </p>
                        </div>
                    )}

                    {/* SECTIONS */}
                    {selectedSections.map((section, index) => {
                        const isActive = activeEditId === section.id;
                        const isDragTarget = dragOverSectionId === section.id;

                        return (
                            <article
                                key={section.id}
                                draggable
                                onDragStart={(e) => handleSectionDragStart(e, section.id)}
                                onDragOver={(e) => handleSectionDragOver(e, section.id)}
                                onDragLeave={() => setDragOverSectionId(null)}
                                onDrop={(e) => handleSectionDrop(e, section.id)}
                                className={`
                                    relative border transition-all duration-200 origin-top
                                    ${isActive
                                        ? "border-cyan-500 shadow-[0_0_30px_rgba(0,229,255,0.08)]"
                                        : isDragTarget
                                        ? "border-cyan-700/70 shadow-[0_0_20px_rgba(0,229,255,0.06)]"
                                        : "border-white/[0.06] hover:border-white/10"
                                    }
                                `}
                            >
                                {/* Section control bar */}
                                <div className="px-4 py-2 bg-[#050505]/95 border-b border-white/[0.04] flex items-center justify-between gap-3 backdrop-blur-sm">
                                    <div className="flex items-center gap-3">
                                        {/* Drag handle */}
                                        <div className="cursor-grab text-[10px] text-slate-700 hover:text-slate-500 select-none px-1">⠿</div>

                                        <div className="flex items-center gap-1.5 bg-black/40 border border-cyan-900/30 px-2 py-0.5">
                                            <span className="text-[8px] font-mono text-cyan-800">SEQ</span>
                                            <span className="text-[9px] font-mono text-cyan-500 font-bold">{String(index + 1).padStart(2, "0")}</span>
                                        </div>

                                        <p className="text-[10px] font-mono tracking-widest text-slate-300">{section.title}</p>

                                        {isActive && (
                                            <span className="flex items-center gap-1.5 text-[8px] font-mono text-cyan-400 border border-cyan-500/30 bg-cyan-950/40 px-2 py-0.5 animate-pulse">
                                                <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                                                LIVE EDIT
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <button
                                            onClick={() => moveSection(section.id, -1)}
                                            disabled={index === 0}
                                            title="Move up"
                                            className="text-[9px] font-mono border border-slate-800 px-2 py-1 text-slate-600 hover:border-slate-500 hover:text-slate-300 disabled:opacity-20 transition-colors"
                                        >↑</button>
                                        <button
                                            onClick={() => moveSection(section.id, 1)}
                                            disabled={index === selectedSections.length - 1}
                                            title="Move down"
                                            className="text-[9px] font-mono border border-slate-800 px-2 py-1 text-slate-600 hover:border-slate-500 hover:text-slate-300 disabled:opacity-20 transition-colors"
                                        >↓</button>
                                        <button
                                            onClick={() => setActiveEditId(isActive ? null : section.id)}
                                            className={`text-[9px] font-mono border px-3 py-1 transition-all duration-150 tracking-widest
                                                ${isActive
                                                    ? "border-cyan-500 bg-cyan-950/50 text-cyan-300"
                                                    : "border-slate-700 bg-transparent text-slate-500 hover:border-cyan-700 hover:text-cyan-500"
                                                }`}
                                        >
                                            {isActive ? "✓ Save" : "✎ Edit"}
                                        </button>
                                        <button
                                            onClick={() => removeSection(section.id)}
                                            className="text-[9px] font-mono border border-red-900/40 px-3 py-1 text-red-700 hover:border-red-500 hover:bg-red-950/40 hover:text-red-400 transition-all duration-150 tracking-widest"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>

                                {/* Live preview */}
                                <div
                                    className="relative overflow-hidden cursor-pointer group/preview"
                                    style={{
                                        background: "transparent",
                                        color: designSettings.textColor,
                                        opacity: isActive ? 1 : undefined,
                                    }}
                                    onClick={() => { if (!isActive) setActiveEditId(section.id); }}
                                >
                                    <div className={isActive ? "" : "pointer-events-none"}>
                                        {/* If section has a React Component use it, otherwise render preview */}
                                        {section.Component ? (
                                            <section.Component
                                                content={section.content}
                                                editor={{
                                                    isEditing: isActive,
                                                    onFieldChange: (key, val) => updateSectionField(section.id, key, val),
                                                }}
                                            />
                                        ) : (
                                            <SectionPreview
                                                sectionId={section.id}
                                                content={section.content || {}}
                                                designSettings={designSettings}
                                            />
                                        )}
                                    </div>

                                    {/* Click-to-edit overlay */}
                                    {!isActive && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200">
                                            <span className="text-[9px] font-mono tracking-widest text-cyan-400 border border-cyan-600/60 bg-black/80 px-5 py-2 backdrop-blur-sm">
                                                CLICK TO EDIT
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Inline edit panel */}
                                {isActive && (
                                    <EditPanel
                                        section={section}
                                        onFieldChange={(key, val) => updateSectionField(section.id, key, val)}
                                        onClose={() => setActiveEditId(null)}
                                    />
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
