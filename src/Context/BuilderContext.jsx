/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, useCallback, useEffect } from "react";
import sectionRegistry from "./sectionRegistry";

const BuilderContext = createContext(null);

// Filter registry based on platform type
const getFilteredRegistry = (platform = "generic") => {
    if (platform === "portfolio") {
        return sectionRegistry.filter((section) => 
            section.group?.startsWith("portfolio-") || 
            section.id?.startsWith("portfolio-")
        );
    }
    // Default to generic
    return sectionRegistry.filter((section) => 
        !section.group?.startsWith("portfolio-") && 
        !section.id?.startsWith("portfolio-")
    );
};

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

export function BuilderProvider({ children, initialSetup, platform = "generic", initialTemplate = null }) {
    const filteredRegistry = useMemo(() => getFilteredRegistry(platform), [platform]);
    
    // Initialize with template design settings if provided
    const getInitialDesignSettings = () => {
        if (initialTemplate?.designSettings) {
            return {
                ...defaultDesignSettings,
                ...initialTemplate.designSettings
            };
        }
        return defaultDesignSettings;
    };
    
    const [selectedSectionIds, setSelectedSectionIds] = useState(
        initialSetup?.preloadSections || initialTemplate?.sections || []
    );
    const [sectionContent, setSectionContent]     = useState(initialSectionContent);
    const [designSettings, setDesignSettings]     = useState(getInitialDesignSettings());
    const [activeEditId, setActiveEditId]         = useState(null);
    const [isPreviewOpen, setIsPreviewOpen]       = useState(false);
    const [previewViewport, setPreviewViewport]   = useState("desktop"); // "desktop" | "tablet" | "mobile"
    const [currentPlatform, setCurrentPlatform]   = useState(platform);
    
    // ── Apply template content on mount ────────────────────────────────────
    useEffect(() => {
        // Handle pre-saved template with sectionContent
        if (initialTemplate?.sectionContent) {
            setSectionContent(prev => ({
                ...prev,
                ...initialTemplate.sectionContent
            }));
        }
        // Fallback to legacy template.content for backward compatibility
        else if (initialTemplate?.content) {
            const newContent = { ...initialSectionContent };
            Object.entries(initialTemplate.content).forEach(([sectionId, content]) => {
                newContent[sectionId] = { ...content };
            });
            setSectionContent(newContent);
        }
    }, [initialTemplate?.sectionContent, initialTemplate?.content]);
    
    // ── Undo/Redo History ──────────────────────────────────────────────────
    const [history, setHistory] = useState([{
        sectionIds: [],
        sectionContent: initialSectionContent,
        designSettings: defaultDesignSettings,
    }]);
    const [historyIndex, setHistoryIndex] = useState(0);

    // ── Derived ──────────────────────────────────────────────────────────
    const selectedSections = useMemo(() => {
        return selectedSectionIds
            .map((id) => {
                const section = filteredRegistry.find((s) => s.id === id);
                if (!section) return null;
                return { ...section, content: sectionContent[id] || {} };
            })
            .filter(Boolean);
    }, [selectedSectionIds, sectionContent, filteredRegistry]);

    // ── Section mutations (MULTIPLE COMPONENTS ENABLED) ─────────────────────
    const addSection = useCallback((sectionId) => {
        setSelectedSectionIds((ids) => {
            // Prevent duplicates, but allow multiple sections
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
            const currentIndex = ids.indexOf(sectionId);
            if (currentIndex === -1) return ids;
            
            const newIds = [...ids];
            if (direction === "up" && currentIndex > 0) {
                [newIds[currentIndex], newIds[currentIndex - 1]] = [newIds[currentIndex - 1], newIds[currentIndex]];
            } else if (direction === "down" && currentIndex < ids.length - 1) {
                [newIds[currentIndex], newIds[currentIndex + 1]] = [newIds[currentIndex + 1], newIds[currentIndex]];
            }
            return newIds;
        });
    }, []);

    const reorderSection = useCallback((sourceId, targetId) => {
        setSelectedSectionIds((ids) => {
            const sourceIndex = ids.indexOf(sourceId);
            const targetIndex = ids.indexOf(targetId);
            if (sourceIndex === -1 || targetIndex === -1) return ids;
            
            const newIds = [...ids];
            const [removed] = newIds.splice(sourceIndex, 1);
            newIds.splice(targetIndex, 0, removed);
            return newIds;
        });
    }, []);

    const resetTemplate = useCallback(() => {
        setSelectedSectionIds([]);
        setSectionContent(initialSectionContent);
        setActiveEditId(null);
        setIsPreviewOpen(false);
    }, []);

    // ── History (Undo/Redo) ───────────────────────────────────────────────
    const saveToHistory = useCallback((newSectionIds, newSectionContent, newDesignSettings) => {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push({
            sectionIds: newSectionIds,
            sectionContent: newSectionContent,
            designSettings: newDesignSettings,
        });
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    }, [history, historyIndex]);

    const undo = useCallback(() => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            const state = history[newIndex];
            setSelectedSectionIds(state.sectionIds);
            setSectionContent(state.sectionContent);
            setDesignSettings(state.designSettings);
            setHistoryIndex(newIndex);
        }
    }, [history, historyIndex]);

    const redo = useCallback(() => {
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1;
            const state = history[newIndex];
            setSelectedSectionIds(state.sectionIds);
            setSectionContent(state.sectionContent);
            setDesignSettings(state.designSettings);
            setHistoryIndex(newIndex);
        }
    }, [history, historyIndex]);

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
        sectionRegistry: filteredRegistry,
        filteredRegistry,
        currentPlatform,
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
        undo,
        redo,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
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
