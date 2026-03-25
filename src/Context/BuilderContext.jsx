import { createContext, useContext, useMemo, useState } from "react";
import sectionRegistry from "./sectionRegistry";

const BuilderContext = createContext(null);
const defaultSectionOrder = []; // Start with empty canvas

const initialSectionContent = sectionRegistry.reduce((accumulator, section) => {
	accumulator[section.id] = { ...(section.defaultContent || {}) };
	return accumulator;
}, {});

export function BuilderProvider({ children }) {
	const [selectedSectionIds, setSelectedSectionIds] = useState(defaultSectionOrder);
	const [sectionContent, setSectionContent] = useState(initialSectionContent);

	const selectedSections = useMemo(() => {
		return selectedSectionIds
			.map((sectionId) => {
				const section = sectionRegistry.find((entry) => entry.id === sectionId);
				if (!section) {
					return null;
				}

				return {
					...section,
					content: sectionContent[sectionId] || {},
				};
			})
			.filter(Boolean);
	}, [selectedSectionIds, sectionContent]);

	const addSection = (sectionId) => {
		setSelectedSectionIds((currentIds) => {
			if (currentIds.includes(sectionId)) {
				return currentIds;
			}
			return [...currentIds, sectionId];
		});
	};

	const insertSection = (sectionId, index) => {
		setSelectedSectionIds((currentIds) => {
			if (currentIds.includes(sectionId)) {
				return currentIds;
			}

			const safeIndex = Math.max(0, Math.min(index, currentIds.length));
			const nextIds = [...currentIds];
			nextIds.splice(safeIndex, 0, sectionId);
			return nextIds;
		});
	};

	const removeSection = (sectionId) => {
		setSelectedSectionIds((currentIds) => currentIds.filter((id) => id !== sectionId));
	};

	const moveSection = (index, direction) => {
		setSelectedSectionIds((currentIds) => {
			const targetIndex = direction === "up" ? index - 1 : index + 1;
			if (targetIndex < 0 || targetIndex >= currentIds.length) {
				return currentIds;
			}

			const nextIds = [...currentIds];
			const [sectionId] = nextIds.splice(index, 1);
			nextIds.splice(targetIndex, 0, sectionId);
			return nextIds;
		});
	};

	const reorderSection = (sourceId, targetId) => {
		setSelectedSectionIds((currentIds) => {
			if (sourceId === targetId) {
				return currentIds;
			}

			const fromIndex = currentIds.indexOf(sourceId);
			const toIndex = currentIds.indexOf(targetId);

			if (fromIndex === -1 || toIndex === -1) {
				return currentIds;
			}

			const nextIds = [...currentIds];
			nextIds.splice(fromIndex, 1);
			nextIds.splice(toIndex, 0, sourceId);
			return nextIds;
		});
	};

	const resetTemplate = () => {
		setSelectedSectionIds(defaultSectionOrder);
		setSectionContent(initialSectionContent);
	};

	const updateSectionField = (sectionId, fieldKey, value) => {
		setSectionContent((currentContent) => ({
			...currentContent,
			[sectionId]: {
				...(currentContent[sectionId] || {}),
				[fieldKey]: value,
			},
		}));
	};

	const contextValue = {
		sectionRegistry,
		selectedSections,
		addSection,
		insertSection,
		removeSection,
		moveSection,
		reorderSection,
		resetTemplate,
		updateSectionField,
	};

	return <BuilderContext.Provider value={contextValue}>{children}</BuilderContext.Provider>;
}

export function useBuilder() {
	const context = useContext(BuilderContext);
	if (!context) {
		throw new Error("useBuilder must be used within a BuilderProvider");
	}
	return context;
}
