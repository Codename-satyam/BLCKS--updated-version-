/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, useCallback } from "react";
import sectionRegistry from "./sectionRegistry";

const BuilderContext = createContext(null);

const initialSectionContent = sectionRegistry.reduce((acc, section) => {
    acc[section.id] = { ...(section.defaultContent || {}) };
    return acc;
}, {});

const defaultDesignSettings = {
    bgMode: "solid",
    bgColor: "#020202",
    bgGradient: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
    textColor: "#ffffff",
    textOpacity: 100,
    fontFamily: "mono",
    accentColor: "#00e5ff",
    bgGradientEnabled: false,
    gradientValue: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
};

export const FONT_MAP = {
    mono:    "'Courier New', 'Lucida Console', monospace",
    sans:    "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    serif:   "Georgia, 'Times New Roman', Times, serif",
    display: "Impact, 'Arial Black', 'Franklin Gothic Heavy', sans-serif",
};

export const GRADIENT_PRESETS = [
    { name: "Deep Space",   value: "linear-gradient(135deg, #091e2e 0%, #0a1628 100%)" },
    { name: "Cyan-Purple",  value: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" },
    { name: "Nebula",       value: "linear-gradient(135deg, #1a0533 0%, #05111a 100%)" },
    { name: "Forest Dark",  value: "linear-gradient(135deg, #0f1a0f 0%, #0a1a0a 100%)" },
    { name: "Ember",        value: "linear-gradient(135deg, #1a0a00 0%, #0d0500 100%)" },
    { name: "Violet Night", value: "linear-gradient(135deg, #13001f 0%, #00101a 100%)" },
];

export const ACCENT_PRESETS = [
    { name: "Cyan",   value: "#00e5ff" },
    { name: "Purple", value: "#a855f7" },
    { name: "Green",  value: "#00ff88" },
    { name: "Orange", value: "#ff6600" },
    { name: "Pink",   value: "#ff2288" },
    { name: "White",  value: "#ffffff" },
];

export function BuilderProvider({ children, initialSetup }) {
    const [selectedSectionIds, setSelectedSectionIds] = useState(
        initialSetup?.preloadSections || []
    );
    const [sectionContent, setSectionContent]     = useState(initialSectionContent);
    const [designSettings, setDesignSettings]     = useState(defaultDesignSettings);
    const [activeEditId, setActiveEditId]         = useState(null);
    const [isPreviewOpen, setIsPreviewOpen]       = useState(false);
    const [previewViewport, setPreviewViewport]   = useState("desktop"); // "desktop" | "tablet" | "mobile"

    // ── Derived ──────────────────────────────────────────────────────────
    const selectedSections = useMemo(() => {
        return selectedSectionIds
            .map((id) => {
                const section = sectionRegistry.find((s) => s.id === id);
                if (!section) return null;
                return { ...section, content: sectionContent[id] || {} };
            })
            .filter(Boolean);
    }, [selectedSectionIds, sectionContent]);

    // ── Section mutations ─────────────────────────────────────────────────
    const addSection = useCallback((sectionId) => {
        setSelectedSectionIds((ids) => {
            if (ids.includes(sectionId)) return ids;
            return [...ids, sectionId];
        });
        setActiveEditId(sectionId);
    }, []);

    const removeSection = useCallback((sectionId) => {
        setSelectedSectionIds((ids) => ids.filter((id) => id !== sectionId));
        setActiveEditId((prev) => (prev === sectionId ? null : prev));
    }, []);

    const moveSection = useCallback((sectionId, direction) => {
        setSelectedSectionIds((ids) => {
            const idx = ids.indexOf(sectionId);
            const targetIdx = idx + direction;
            if (idx === -1 || targetIdx < 0 || targetIdx >= ids.length) return ids;
            const next = [...ids];
            [next[idx], next[targetIdx]] = [next[targetIdx], next[idx]];
            return next;
        });
    }, []);

    const reorderSection = useCallback((sourceId, targetId) => {
        setSelectedSectionIds((ids) => {
            if (sourceId === targetId) return ids;
            const from = ids.indexOf(sourceId);
            const to   = ids.indexOf(targetId);
            if (from === -1 || to === -1) return ids;
            const next = [...ids];
            next.splice(from, 1);
            next.splice(to, 0, sourceId);
            return next;
        });
    }, []);

    const resetTemplate = useCallback(() => {
        setSelectedSectionIds([]);
        setSectionContent(initialSectionContent);
        setActiveEditId(null);
        setIsPreviewOpen(false);
    }, []);

    // ── Content mutations ─────────────────────────────────────────────────
    const updateSectionField = useCallback((sectionId, fieldKey, value) => {
        setSectionContent((prev) => ({
            ...prev,
            [sectionId]: { ...(prev[sectionId] || {}), [fieldKey]: value },
        }));
    }, []);

    const updateSectionContent = useCallback((sectionId, patch) => {
        setSectionContent((prev) => ({
            ...prev,
            [sectionId]: { ...(prev[sectionId] || {}), ...patch },
        }));
    }, []);

    // ── Design mutations ─────────────────────────────────────────────────
    const updateDesignSettings = useCallback((updates) => {
        setDesignSettings((prev) => ({ ...prev, ...updates }));
    }, []);

    // ── Preview ───────────────────────────────────────────────────────────
    const openPreview  = useCallback(() => setIsPreviewOpen(true),  []);
    const closePreview = useCallback(() => setIsPreviewOpen(false), []);

    // ── Checklist ────────────────────────────────────────────────────────
    const checklistItems = useMemo(() => [
        { id: "navbar",   label: "Navbar",           completed: selectedSectionIds.some((id) => id.startsWith("navbar")) },
        { id: "hero",     label: "Hero",             completed: selectedSectionIds.some((id) => id.startsWith("hero")) },
        { id: "features", label: "Features",         completed: selectedSectionIds.some((id) => id.startsWith("features")) },
        { id: "pricing",  label: "Pricing",          completed: selectedSectionIds.some((id) => id.startsWith("pricing")) },
        { id: "work",     label: "Work / Portfolio", completed: selectedSectionIds.some((id) => id.startsWith("workpage")) },
        { id: "footer",   label: "Footer",           completed: selectedSectionIds.some((id) => id.startsWith("footer")) },
    ], [selectedSectionIds]);

    const completedCount    = checklistItems.filter((i) => i.completed).length;
    const checklistProgress = `${completedCount}/${checklistItems.length}`;

    // ── Resolved style helpers ────────────────────────────────────────────
    const resolvedBackground = designSettings.bgMode === "gradient"
        ? designSettings.bgGradient
        : designSettings.bgColor;

    const resolvedFont = FONT_MAP[designSettings.fontFamily] || FONT_MAP.mono;

    const contextValue = {
        designSettings,
        updateDesignSettings,
        resolvedBackground,
        resolvedFont,
        sectionRegistry,
        selectedSections,
        addSection,
        removeSection,
        moveSection,
        reorderSection,
        resetTemplate,
        updateSectionField,
        updateSectionContent,
        activeEditId,
        setActiveEditId,
        checklistItems,
        checklistProgress,
        isPreviewOpen,
        openPreview,
        closePreview,
        previewViewport,
        setPreviewViewport,
    };

    return (
        <BuilderContext.Provider value={contextValue}>
            {children}
        </BuilderContext.Provider>
    );
}

export function useBuilder() {
    const ctx = useContext(BuilderContext);
    if (!ctx) throw new Error("useBuilder must be used within a BuilderProvider");
    return ctx;
}
