/**
 * Hook to access project setup data and styling utilities
 * Use this in any section component to get primaryCTA, styleDirection, etc.
 */

import { useBuilder } from "./BuilderContext";
import { getButtonClasses, getAccentClasses, getThemeClasses } from "../lib/styleThemes";

export function useProjectSetup() {
    const { projectSetup } = useBuilder();

    const styleClasses = {
        theme: getThemeClasses(projectSetup?.styleDirection),
        accent: getAccentClasses(projectSetup?.styleDirection),
        button: getButtonClasses(projectSetup?.styleDirection),
    };

    return {
        projectSetup,
        projectName: projectSetup?.projectName || "",
        websiteType: projectSetup?.websiteType || "",
        purpose: projectSetup?.purpose || "",
        styleDirection: projectSetup?.styleDirection || "corporate",
        targetAudience: projectSetup?.targetAudience || "",
        brandTone: projectSetup?.brandTone || "",
        primaryCTA: projectSetup?.primaryCTA || "Get Started",
        styleClasses,
    };
}
