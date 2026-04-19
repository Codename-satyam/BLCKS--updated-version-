# Component Catalog Architecture

## Overview

The component system has been refactored from hardcoded imports to a **catalog-driven, data-first architecture**. The `componentsCatalog.json` is now the single source of truth for all component metadata, source code, and usage patterns.

## Key Benefits

✅ **Single Source of Truth**: All component data lives in JSON  
✅ **Reusable**: Add new components by updating JSON—no code changes needed  
✅ **Dynamic Rendering**: Preview panels and components generated from catalog metadata  
✅ **Extensible**: Easy to add new component types and preview styles  
✅ **Maintainable**: Decoupled from UI implementation  

---

## System Architecture

### 1. **componentsCatalog.json** (Source of Truth)

Location: `src/Components/ReactComponents/componentsCatalog.json`

Each component entry contains:

```json
{
  "id": "header-terminal",
  "name": "Terminal Header",
  "category": "headers",
  "description": "Navigation bar styled like a futuristic command deck.",
  "tags": ["navbar", "layout", "topbar"],
  "importCode": "import TerminalHeader from '@/components/headers/TerminalHeader';",
  "previewType": "header",
  "sourceCode": "// Full JSX source code...",
  "usageCode": "<TerminalHeader ... />"
}
```

**Key Fields**:
- `id`: Unique identifier (kebab-case)
- `category`: Group type (backgrounds, headers, animations, texts)
- `previewType`: Preview renderer type (used by GenericPreview)
- `sourceCode`: Full component implementation
- `usageCode`: Example usage snippet

### 2. **componentFactory.js** (Utility Layer)

Location: `src/lib/componentFactory.js`

Provides utility functions to work with the catalog:

```javascript
// Get single component
getComponentById("header-terminal")

// Get components by category
getComponentsByCategory("headers")

// Get organized structure
getOrganizedCatalog()

// Extract component name from source
extractComponentName(sourceCode)

// Validate catalog entry
validateCatalogEntry(entry)
```

### 3. **ReactComponents.jsx** (UI Layer)

Now uses **GenericPreview** instead of hardcoded preview panels:

```javascript
function GenericPreview({ item, large = false }) {
    // Dynamically renders based on item.previewType
    const previewRenderers = {
        header: () => { ... },
        rolling: () => { ... },
        background: () => { ... },
        type: () => { ... },
        scan: () => { ... },
        default: () => { ... },
    };
    
    const renderer = previewRenderers[item.previewType] || previewRenderers.default;
    return renderer();
}
```

### 4. **sectionRegistry.js** (Page Sections)

Generic page sections (Navbar1, Hero1, etc.) remain separate but can also use the factory:

Location: `src/Context/sectionRegistry.js`

---

## Adding New Components

To add a new component, follow these steps:

### Step 1: Write Component Code

Create your component following the pattern:

```jsx
// MyComponent.jsx
export default function MyComponent({ prop1 = 'default', prop2 = true }) {
  return (
    <div className="...">
      {/* Your component JSX */}
    </div>
  );
}
```

### Step 2: Add to Catalog

Add entry to `componentsCatalog.json`:

```json
{
  "id": "my-component-id",
  "name": "My Component Name",
  "category": "animations",
  "description": "What this component does",
  "tags": ["tag1", "tag2", "tag3"],
  "importCode": "import MyComponent from '@/components/animations/MyComponent';",
  "previewType": "scan",
  "sourceCode": "// Full JSX source code copied here...",
  "usageCode": "<MyComponent prop1=\"value\" />"
}
```

### Step 3: Add Preview Type (if new)

If using a new `previewType`, add renderer to GenericPreview:

```javascript
const previewRenderers = {
    myCustomType: () => (
        <div className="relative h-36 ...">
            {/* Your preview here */}
        </div>
    ),
};
```

### Step 4: Done!

The component automatically appears in:
- Component library browse
- Category filters  
- Search results
- Modal view with source/usage tabs

No other code changes needed!

---

## Data Flow

```
componentsCatalog.json
        ↓
componentFactory.js (utilities)
        ↓
ReactComponents.jsx
        ├→ GenericPreview (renders from catalog.previewType)
        ├→ ComponentCard (displays from catalog data)
        └→ ComponentModal (shows source/usage from catalog code)
```

---

## Import Structure Comparison

### Before (Hardcoded)

```javascript
// componentsCatalog.json
{ "importCode": "import TerminalHeader from '...'" }

// ReactComponents.jsx  
if (type === "header") return <div>...</div>; // Hardcoded
```

### After (Catalog-Driven)

```javascript
// componentsCatalog.json (single source)
{
  "id": "header-terminal",
  "sourceCode": "// Full component code",
  "previewType": "header"
}

// ReactComponents.jsx (data-driven)
function GenericPreview({ item }) {
  const renderers = { header: () => {...} };
  return renderers[item.previewType]();
}
```

---

## Extending the System

### Add New Category

1. Add to `CATEGORY_META` in ReactComponents.jsx
2. Add entries to catalog with new category
3. System automatically updates filters and displays

### Add New Preview Type

1. Add renderer to `previewRenderers` in GenericPreview
2. Set `previewType` on catalog entries
3. Previews render automatically

### Add New Metadata Field

1. Add field to catalog entries
2. Use in utilities via `getComponentById()`
3. Access in UI components

---

## File Organization

```
src/
├── Components/
│   └── ReactComponents/
│       ├── ReactComponents.jsx (UI - consumes catalog)
│       └── componentsCatalog.json (DATA - source of truth)
├── lib/
│   └── componentFactory.js (UTILITIES - catalog helpers)
└── Context/
    └── sectionRegistry.js (SEPARATE system for page sections)
```

---

## Usage Examples

### In ReactComponents.jsx

```javascript
import { getComponentById, getOrganizedCatalog } from "../../lib/componentFactory";

// Get single component
const header = getComponentById("header-terminal");
console.log(header.sourceCode); // Full JSX
console.log(header.importCode);  // Import statement

// Get all organized
const catalog = getOrganizedCatalog();
catalog.headers.forEach(comp => {
  console.log(comp.name);
});
```

### Rendering Components

```javascript
// From catalog sourceCode
<GenericPreview item={catalogEntry} large={true} />

// Catalog data in UI
<ComponentCard item={catalogEntry} onOpen={setModal} />
```

---

## Benefits Over Previous Approach

| Aspect | Before | After |
|--------|--------|-------|
| Component Definitions | Hardcoded in JSX | JSON catalog |
| Add New Component | Modify multiple files | Update JSON only |
| Preview Logic | Individual if/else | Generic renderer |
| Extensibility | Limited | Unlimited |
| Maintainability | Scattered | Centralized |
| Type Safety | Implicit | Can add schema |
| Reusability | Per-component | By category + type |

---

## Next Steps

1. ✅ Update componentsCatalog.json with more components
2. ✅ Export utilities for reuse across app
3. 📋 Add JSON schema validation (optional)
4. 📋 Create component template generator (optional)
5. 📋 Add version tracking per component (optional)
