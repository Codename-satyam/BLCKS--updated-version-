import { useState, useRef } from "react";
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
        color: #000 !important;
        box-shadow: 4px 4px 0px 0px var(--builder-accent) !important;
        transform: translate(-2px, -2px) !important;
    }
`;

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
    // ── PORTFOLIO SECTIONS ───────────────────────────────────────────────
    "portfolio-navbar1": [
        { key: "logo", label: "Logo" },
        { key: "link1", label: "Link 1" },
        { key: "link2", label: "Link 2" },
        { key: "link3", label: "Link 3" },
        { key: "ctaLabel", label: "CTA Label" },
    ],
    "portfolio-navbar2": [
        { key: "brandName", label: "Brand Name" },
        { key: "tagline", label: "Tagline" },
        { key: "nav1", label: "Nav 1" },
        { key: "nav2", label: "Nav 2" },
        { key: "nav3", label: "Nav 3" },
        { key: "nav4", label: "Nav 4" },
        { key: "ctaLabel", label: "CTA Label" },
    ],
    "portfolio-navbar3": [
        { key: "logo", label: "Logo" },
        { key: "link1", label: "Link 1" },
        { key: "link2", label: "Link 2" },
        { key: "link3", label: "Link 3" },
        { key: "link4", label: "Link 4" },
        { key: "resumeLabel", label: "Resume Label" },
    ],
    "portfolio-hero1": [
        { key: "badge", label: "Badge" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description", multiline: true },
        { key: "buttonLabel", label: "Button Label" },
        { key: "imageUrl", label: "Image URL" },
    ],
    "portfolio-hero2": [
        { key: "pretitle", label: "Pretitle" },
        { key: "name", label: "Name" },
        { key: "tagline", label: "Tagline" },
        { key: "subtitle", label: "Subtitle", multiline: true },
        { key: "cta1Label", label: "CTA 1 Label" },
        { key: "cta2Label", label: "CTA 2 Label" },
        { key: "scrollIndicator", label: "Scroll Indicator" },
    ],
    "portfolio-hero3": [
        { key: "headline", label: "Headline" },
        { key: "subheadline", label: "Subheadline" },
        { key: "stat1Label", label: "Stat 1 Label" },
        { key: "stat1Value", label: "Stat 1 Value" },
        { key: "stat2Label", label: "Stat 2 Label" },
        { key: "stat2Value", label: "Stat 2 Value" },
        { key: "stat3Label", label: "Stat 3 Label" },
        { key: "stat3Value", label: "Stat 3 Value" },
        { key: "primaryButtonLabel", label: "Primary Button" },
        { key: "secondaryButtonLabel", label: "Secondary Button" },
    ],
    "portfolio-projects1": [
        { key: "sectionTitle", label: "Section Title" },
        { key: "sectionSubtitle", label: "Section Subtitle" },
        { key: "project1Title", label: "Project 1 Title" },
        { key: "project1Description", label: "Project 1 Description" },
        { key: "project1Tag", label: "Project 1 Tag" },
        { key: "project2Title", label: "Project 2 Title" },
        { key: "project2Description", label: "Project 2 Description" },
        { key: "project2Tag", label: "Project 2 Tag" },
        { key: "project3Title", label: "Project 3 Title" },
        { key: "project3Description", label: "Project 3 Description" },
        { key: "project3Tag", label: "Project 3 Tag" },
    ],
    "portfolio-projects2": [
        { key: "heading", label: "Heading" },
        { key: "subheading", label: "Subheading" },
        { key: "project1Title", label: "Project 1 Title" },
        { key: "project1Desc", label: "Project 1 Description" },
        { key: "project1Image", label: "Project 1 Image URL" },
        { key: "project2Title", label: "Project 2 Title" },
        { key: "project2Desc", label: "Project 2 Description" },
        { key: "project2Image", label: "Project 2 Image URL" },
        { key: "project3Title", label: "Project 3 Title" },
        { key: "project3Desc", label: "Project 3 Description" },
        { key: "project3Image", label: "Project 3 Image URL" },
        { key: "project4Title", label: "Project 4 Title" },
        { key: "project4Desc", label: "Project 4 Description" },
        { key: "project4Image", label: "Project 4 Image URL" },
    ],
    "portfolio-projects3": [
        { key: "sectionTitle", label: "Section Title" },
        { key: "sectionDescription", label: "Section Description" },
        { key: "project1", label: "Project 1" },
        { key: "project2", label: "Project 2" },
        { key: "project3", label: "Project 3" },
        { key: "project4", label: "Project 4" },
        { key: "project5", label: "Project 5" },
        { key: "project6", label: "Project 6" },
        { key: "viewLabel", label: "View Label" },
    ],
    "portfolio-skills1": [
        { key: "title", label: "Title" },
        { key: "subtitle", label: "Subtitle" },
        { key: "skill1", label: "Skill 1" },
        { key: "skill2", label: "Skill 2" },
        { key: "skill3", label: "Skill 3" },
        { key: "skill4", label: "Skill 4" },
        { key: "skill5", label: "Skill 5" },
        { key: "skill6", label: "Skill 6" },
        { key: "skill7", label: "Skill 7" },
        { key: "skill8", label: "Skill 8" },
    ],
    "portfolio-skills2": [
        { key: "sectionTitle", label: "Section Title" },
        { key: "frontendTitle", label: "Frontend Title" },
        { key: "frontend1", label: "Frontend 1" },
        { key: "frontend2", label: "Frontend 2" },
        { key: "frontend3", label: "Frontend 3" },
        { key: "frontend4", label: "Frontend 4" },
        { key: "backendTitle", label: "Backend Title" },
        { key: "backend1", label: "Backend 1" },
        { key: "backend2", label: "Backend 2" },
        { key: "backend3", label: "Backend 3" },
        { key: "backend4", label: "Backend 4" },
        { key: "toolsTitle", label: "Tools Title" },
        { key: "tools1", label: "Tool 1" },
        { key: "tools2", label: "Tool 2" },
        { key: "tools3", label: "Tool 3" },
        { key: "tools4", label: "Tool 4" },
    ],
    "portfolio-skills3": [
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
        { key: "competency1", label: "Competency 1" },
        { key: "competency1Desc", label: "Competency 1 Description" },
        { key: "competency2", label: "Competency 2" },
        { key: "competency2Desc", label: "Competency 2 Description" },
        { key: "competency3", label: "Competency 3" },
        { key: "competency3Desc", label: "Competency 3 Description" },
        { key: "competency4", label: "Competency 4" },
        { key: "competency4Desc", label: "Competency 4 Description" },
    ],
    "portfolio-footer1": [
        { key: "copyright", label: "Copyright" },
        { key: "social1Label", label: "Social 1" },
        { key: "social2Label", label: "Social 2" },
        { key: "social3Label", label: "Social 3" },
        { key: "social4Label", label: "Social 4" },
    ],
    "portfolio-footer2": [
        { key: "sectionTitle", label: "Section Title" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "location", label: "Location" },
        { key: "footerText", label: "Footer Text" },
    ],
    "portfolio-footer3": [
        { key: "quote", label: "Quote 1" },
        { key: "quote2", label: "Quote 2" },
        { key: "ctaLabel", label: "CTA Label" },
        { key: "navLink1", label: "Nav Link 1" },
        { key: "navLink2", label: "Nav Link 2" },
        { key: "navLink3", label: "Nav Link 3" },
        { key: "navLink4", label: "Nav Link 4" },
        { key: "copyright", label: "Copyright" },
    ],
    "portfolio-template1": [
        { key: "navbarContent.logo", label: "Navbar: Logo" },
        { key: "heroContent.title", label: "Hero: Title" },
        { key: "projectsContent.sectionTitle", label: "Projects: Title" },
        { key: "skillsContent.title", label: "Skills: Title" },
        { key: "footerContent.copyright", label: "Footer: Copyright" },
    ],
    "portfolio-template2": [
        { key: "navbarContent.brandName", label: "Navbar: Brand Name" },
        { key: "heroContent.name", label: "Hero: Name" },
        { key: "projectsContent.heading", label: "Projects: Heading" },
        { key: "skillsContent.sectionTitle", label: "Skills: Title" },
        { key: "footerContent.sectionTitle", label: "Footer: Title" },
    ],
    "portfolio-template3": [
        { key: "navbarContent.logo", label: "Navbar: Logo" },
        { key: "heroContent.headline", label: "Hero: Headline" },
        { key: "projectsContent.sectionTitle", label: "Projects: Title" },
        { key: "skillsContent.title", label: "Skills: Title" },
        { key: "footerContent.quote", label: "Footer: Quote" },
    ],
    "portfolio-template4": [
        { key: "navbarContent.logo", label: "Navbar: Logo" },
        { key: "heroContent.badge", label: "Hero: Badge" },
        { key: "projectsContent.sectionTitle", label: "Projects: Title" },
        { key: "skillsContent.title", label: "Skills: Title" },
        { key: "footerContent.copyright", label: "Footer: Copyright" },
    ],
};

// ── Live preview renderer (Brutalist Update) ──────────────────────────────────
function SectionPreview({ sectionId, content, designSettings }) {
    const accent = designSettings.accentColor || "#a3e635"; // Default to acid green
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
    
    // Brutalist button base
    const btnBase = {
        ...accentBorder,
        fontSize: 14,
        padding: "12px 24px",
        border: "4px solid",
        background: "#000",
        fontWeight: 900,
        cursor: "pointer",
        letterSpacing: "0.15em",
        fontFamily,
        textTransform: "uppercase",
        boxShadow: `6px 6px 0px 0px ${accent}`
    };

    if (sectionId.startsWith("navbar")) {
        const links = (content.links || "About, Features, Pricing").split(",").map((l) => l.trim());
        return (
            <div style={{ ...s(), background: "#000", borderBottom: "4px solid #fff", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ ...accentStyle, fontSize: 24, letterSpacing: "0.15em", fontWeight: 900, textTransform: "uppercase" }}>
                    {content.brandName || "BRAND.SYS"}
                </span>
                <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 700, textTransform: "uppercase" }}>
                    {links.slice(0, 5).map((l, i) => <span key={i}>{l}</span>)}
                </div>
                <button style={btnBase}>
                    {content.ctaText || "Get Started"}
                </button>
            </div>
        );
    }

    if (sectionId.startsWith("hero")) {
        return (
            <div style={{ ...s(), padding: "80px 24px", textAlign: "center", background: "transparent" }}>
                {content.badge && (
                    <div style={{ ...accentStyle, fontSize: 14, fontWeight: 900, letterSpacing: "0.3em", marginBottom: 24, textTransform: "uppercase", display: "inline-block", border: `2px solid ${accent}`, padding: "8px 16px" }}>
                        {content.badge}
                    </div>
                )}
                <h1 style={{ fontSize: 64, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 24, whiteSpace: "pre-line", letterSpacing: "-0.02em" }}>
                    {content.headline || "Build the Future"}
                </h1>
                <p style={{ fontSize: 18, fontWeight: 700, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.5, fontFamily: "monospace", textTransform: "uppercase", borderTop: "4px solid currentColor", paddingTop: 20 }}>
                    {content.subtext || "A next-generation platform."}
                </p>
                <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={btnBase}>
                        {content.ctaPrimary || "Start Building"}
                    </button>
                    {content.ctaSecondary && (
                        <button style={{ ...btnBase, borderColor: "#fff", color: "#fff", boxShadow: "6px 6px 0px 0px #fff" }}>
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
            <div style={{ ...s(), padding: "80px 24px", background: "transparent" }}>
                {content.sectionLabel && (
                    <div style={{ ...accentStyle, fontSize: 14, fontWeight: 900, letterSpacing: "0.3em", marginBottom: 16, textTransform: "uppercase" }}>
                        // {content.sectionLabel}
                    </div>
                )}
                <div style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", marginBottom: 48, borderBottom: "4px solid #fff", paddingBottom: 16 }}>
                    {content.title || "Everything You Need"}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
                    {feats.map((f, i) => (
                        <div key={i} style={{ background: "#000", border: "4px solid #fff", padding: 32, boxShadow: "8px 8px 0px 0px #fff" }}>
                            <div style={{ fontSize: 48, marginBottom: 24 }}>{f.icon}</div>
                            <div style={{ ...accentStyle, fontSize: 24, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>{f.title}</div>
                            <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase" }}>{f.desc}</div>
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
            <div style={{ ...s(), padding: "80px 24px" }}>
                <div style={{ ...accentStyle, fontSize: 14, fontWeight: 900, letterSpacing: "0.3em", textAlign: "center", marginBottom: 16 }}>// PRICING_SYS</div>
                <div style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", textAlign: "center", marginBottom: 48 }}>Choose Your Plan</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
                    {tiers.map((t, i) => (
                        <div key={i} style={{ border: `4px solid ${t.highlight ? accent : "#fff"}`, background: "#000", padding: "40px 24px", textAlign: "center", boxShadow: `8px 8px 0px 0px ${t.highlight ? accent : "#fff"}`, transform: t.highlight ? "scale(1.05)" : "none" }}>
                            <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: "0.2em", marginBottom: 16 }}>{t.name.toUpperCase()}</div>
                            <div style={{ fontSize: 56, fontWeight: 900, marginBottom: 16, ...(t.highlight ? accentStyle : {}) }}>{t.price}</div>
                            <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 32, borderTop: `2px dashed ${t.highlight ? accent : "#fff"}`, paddingTop: 16 }}>{t.desc}</div>
                            <button style={{ ...btnBase, width: "100%", borderColor: t.highlight ? accent : "#fff", color: t.highlight ? accent : "#fff", boxShadow: "none", borderTopWidth: 4 }}>
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
            <div style={{ ...s(), padding: "80px 24px" }}>
                <div style={{ ...accentStyle, fontSize: 14, fontWeight: 900, letterSpacing: "0.3em", marginBottom: 16 }}>// WORK_LOG</div>
                <div style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase", marginBottom: 40, borderBottom: "4px solid #fff", paddingBottom: 16 }}>{content.title || "Selected Work"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {items.map((item, i) => (
                        <div key={i} style={{ background: "#000", border: "4px solid #fff", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "6px 6px 0px 0px #fff" }}>
                            <span style={{ fontSize: 24, fontWeight: 900, textTransform: "uppercase" }}>{item.name}</span>
                            <span style={{ ...accentStyle, fontSize: 18, fontWeight: 900, letterSpacing: "0.15em" }}>{item.tag} →</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (sectionId.startsWith("footer")) {
        return (
            <div style={{ ...s(), borderTop: "4px solid #fff", background: "#000", padding: "40px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
                <span style={{ ...accentStyle, fontSize: 24, fontWeight: 900, letterSpacing: "0.1em" }}>{content.brandName || "BRAND.SYS"}</span>
                <span style={{ fontSize: 14, fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase" }}>{content.tagline || content.ctaHeadline || "Building the future."}</span>
                <span style={{ fontSize: 14, fontWeight: 900, fontFamily: "monospace", border: "2px solid #fff", padding: "4px 8px" }}>{content.copyright || "© 2025"}</span>
            </div>
        );
    }

    return <div style={{ padding: 40, fontSize: 18, fontWeight: 900, color: "#fff", background: "#000", border: "4px dashed #fff", textAlign: "center" }}>[{sectionId.toUpperCase()}] MODULE</div>;
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
        resolvedFont,
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

    const textOpacityScale = Math.max(0.2, Math.min(1, (designSettings.textOpacity || 100) / 100));
    const sectionContentStyle = {
        "--builder-accent": designSettings.accentColor || "#a3e635",
        "--builder-font": resolvedFont || FONT_MAP.mono,
        fontFamily: resolvedFont || FONT_MAP.mono,
        color: designSettings.textColor || "#ffffff",
        opacity: textOpacityScale,
    };

    return (
        <section
            className="flex-1 min-h-0 flex flex-col overflow-hidden transition-all duration-0 relative bg-black font-mono text-white"
            style={bgStyle}
        >
            <style>{TEMPLATE_ACCENT_CSS}</style>

            {/* Brutalist Grid Overlay */}
            <div 
                className="absolute inset-0 pointer-events-none z-0 opacity-20"
                style={{ 
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
                    backgroundSize: "40px 40px" 
                }} 
            />

            {/* Scrollable canvas */}
            <div
                onDragOver={(e) => { e.preventDefault(); setCanvasDragOver(true); }}
                onDragLeave={() => { setCanvasDragOver(false); }}
                onDrop={handleCanvasDrop}
                className={`flex-1 overflow-y-auto p-6 md:p-12 z-10 relative transition-all duration-150 [scrollbar-width:none]
                    ${canvasDragOver ? "border-8 border-dashed border-lime-400 bg-lime-400/10" : "border-8 border-transparent"}
                `}
            >
                <div className="max-w-5xl mx-auto flex flex-col gap-12 min-h-full pb-32">

                    {/* EMPTY STATE */}
                    {selectedSections.length === 0 && (
                        <div className="flex-1 flex flex-col items-center justify-center border-4 border-dashed border-white py-32 px-6 text-center min-h-[500px] bg-black shadow-[12px_12px_0px_0px_#a3e635]">
                            <div className="w-24 h-24 border-4 border-white flex items-center justify-center mb-8 bg-lime-400 text-black shadow-[6px_6px_0px_0px_white]">
                                <span className="text-6xl font-black">+</span>
                            </div>
                            <p className="text-2xl font-black tracking-widest text-lime-400 mb-4 uppercase">SYS.AWAITING_INPUT</p>
                            <p className="text-white text-sm font-bold uppercase tracking-widest max-w-md border-t-4 border-white pt-4">
                                Inject modules from the library on the left, or drag sections directly onto the canvas payload area.
                            </p>
                        </div>
                    )}

                    {/* SECTIONS */}
                    {selectedSections.map((section, index) => {
                        const isActive = activeEditId === section.id;
                        const isDragTarget = dragOverSectionId === section.id;

                        return (
                            <article
                                key={`${section.id}-${index}`}
                                draggable
                                onDragStart={(e) => handleSectionDragStart(e, section.id)}
                                onDragOver={(e) => handleSectionDragOver(e, section.id)}
                                onDragLeave={() => setDragOverSectionId(null)}
                                onDrop={(e) => handleSectionDrop(e, section.id)}
                                className={`
                                    relative border-4 transition-all duration-150 origin-top bg-black
                                    ${isActive
                                        ? "border-lime-400 shadow-[12px_12px_0px_0px_#a3e635] -translate-y-1 -translate-x-1"
                                        : isDragTarget
                                        ? "border-fuchsia-500 border-dashed shadow-[12px_12px_0px_0px_#d946ef]"
                                        : "border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:border-white hover:shadow-[12px_12px_0px_0px_white] hover:-translate-y-1 hover:-translate-x-1"
                                    }
                                `}
                            >
                                {/* Section control bar */}
                                <div className={`flex items-stretch justify-between border-b-4 bg-black
                                    ${isActive ? "border-lime-400" : "border-white"}
                                `}>
                                    <div className="px-4 py-3 flex items-center gap-4">
                                        {/* Drag handle */}
                                        <div className="cursor-grab text-xl font-black text-white hover:text-lime-400 select-none px-2">☰</div>

                                        <div className="flex items-center gap-2 bg-white px-3 py-1 border-2 border-white">
                                            <span className="text-xs font-black text-black uppercase">SEQ</span>
                                            <span className="text-sm font-black text-black">{String(index + 1).padStart(2, "0")}</span>
                                        </div>

                                        <p className="text-sm font-black tracking-widest text-white uppercase">{section.title}</p>

                                        {isActive && (
                                            <span className="flex items-center gap-2 text-xs font-black text-black bg-lime-400 border-2 border-lime-400 px-3 py-1 uppercase tracking-widest">
                                                <span className="w-2 h-2 bg-black" />
                                                LIVE EDIT
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-stretch">
                                        <button
                                            onClick={() => setActiveEditId(isActive ? null : section.id)}
                                            aria-label={isActive ? "Save changes" : "Edit component"}
                                            className={`text-xs font-black border-l-4 px-6 transition-all tracking-widest uppercase flex items-center
                                                ${isActive
                                                    ? "border-lime-400 bg-lime-400 text-black hover:bg-white"
                                                    : "border-white bg-black text-white hover:bg-white hover:text-black"
                                                }`}
                                        >
                                            {isActive ? "✓ SAVE" : "✎ EDIT"}
                                        </button>
                                        <button
                                            onClick={() => removeSection(section.id)}
                                            aria-label="Remove component"
                                            className={`text-xs font-black border-l-4 px-6 text-red-500 transition-all tracking-widest uppercase flex items-center
                                                ${isActive ? "border-lime-400 hover:bg-red-500 hover:text-black" : "border-white hover:bg-red-500 hover:text-black"}
                                            `}
                                        >
                                            ✕ REMOVE
                                        </button>
                                    </div>
                                </div>

                                {/* Live preview */}
                                <div
                                    className="relative overflow-hidden cursor-pointer group/preview min-h-[100px]"
                                    onClick={() => { if (!isActive) setActiveEditId(section.id); }}
                                >
                                    <div className={`builder-template-surface ${isActive ? "" : "pointer-events-none"}`} style={sectionContentStyle}>
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

                                    {/* Click-to-edit overlay (Brutalist Block) */}
                                    {!isActive && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 bg-black/40">
                                            <span className="text-sm font-black tracking-widest text-black bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] px-8 py-4 uppercase">
                                                CLICK TO EDIT MODULE
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}