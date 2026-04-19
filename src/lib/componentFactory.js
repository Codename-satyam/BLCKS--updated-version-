/**
 * Component Factory - Dynamically generates components from catalog metadata
 * This makes the system reusable and data-driven
 */

import componentsCatalog from "../Components/ReactComponents/componentsCatalog.json";

/**
 * Get component metadata by ID
 */
export function getComponentById(id) {
    return componentsCatalog.find((comp) => comp.id === id);
}

/**
 * Get all components in a category
 */
export function getComponentsByCategory(category) {
    return componentsCatalog.filter((comp) => comp.category === category);
}

/**
 * Get all categories from catalog
 */
export function getCatalogCategories() {
    return [...new Set(componentsCatalog.map((comp) => comp.category))];
}

/**
 * Parse and execute component code from catalog
 * This creates a usable React component from the sourceCode string
 */
export function createComponentFromSource(sourceCode, componentName) {
    try {
        // Create a function that returns the component
        const moduleFn = new Function(
            "React",
            `
            const React = arguments[0];
            ${sourceCode}
            return ${componentName};
            `
        );
        return moduleFn(require("react"));
    } catch (error) {
        console.error(`Failed to create component from source:`, error);
        return null;
    }
}

/**
 * Generate component import statement
 */
export function generateImportCode(component) {
    if (component.importCode) {
        return component.importCode;
    }
    // Fallback: generate from component name
    const name = component.id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    return `import ${name} from '@/components/${component.category}/${name}';`;
}

/**
 * Get catalog entry with derived properties
 */
export function getCatalogEntry(id) {
    const comp = getComponentById(id);
    if (!comp) return null;

    return {
        ...comp,
        importCode: generateImportCode(comp),
        componentName: extractComponentName(comp.sourceCode),
    };
}

/**
 * Extract component function name from source code
 */
function extractComponentName(sourceCode) {
    const match = sourceCode.match(/export\s+(?:default\s+)?function\s+(\w+)/);
    return match ? match[1] : "Component";
}

/**
 * Get all catalog data organized by category
 */
export function getOrganizedCatalog() {
    const organized = {};
    componentsCatalog.forEach((comp) => {
        if (!organized[comp.category]) {
            organized[comp.category] = [];
        }
        organized[comp.category].push(comp);
    });
    return organized;
}

/**
 * Validate catalog entry completeness
 */
export function validateCatalogEntry(entry) {
    const required = ["id", "name", "category", "description", "sourceCode"];
    const missing = required.filter((field) => !entry[field]);
    return {
        valid: missing.length === 0,
        missing,
    };
}

/**
 * Export raw catalog data
 */
export function getRawCatalog() {
    return componentsCatalog;
}
