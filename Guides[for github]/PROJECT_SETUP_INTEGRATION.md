# ProjectSetup Integration Guide

## Overview
The **ProjectMetadata Panel** and **ProjectSetup Context** make the form data from the ProjectSetup page actually functional throughout the builder. Sections can now use project configuration to customize their appearance and content.

## What ProjectSetup Provides

The `useProjectSetup()` hook provides access to:

```javascript
{
  projectName: string,           // Project name from setup
  websiteType: string,           // Type: saas, portfolio, agency, ecommerce, event, personal
  purpose: string,               // Purpose: leads, showcase, sell, waitlist, educate
  styleDirection: string,        // Style: minimalist, brutalist, playful, corporate, cyber
  targetAudience: string,        // Who is the site for?
  brandTone: string,             // Tone: Professional, Friendly, Bold, etc.
  primaryCTA: string,            // Call-to-action button text (e.g., "Get Started")
  styleClasses: {
    theme: string,               // Tailwind classes for component background/text
    accent: string,              // Tailwind classes for accent colors
    button: string,              // Tailwind classes for buttons
  }
}
```

## How to Use in Sections

### 1. Import the Hook

```javascript
import { useProjectSetup } from "../../../Context/useProjectSetup";
```

### 2. Use in Your Component

```javascript
export default function MySection({ content = {}, editor }) {
  const setup = useProjectSetup();
  
  // Now you have access to:
  // - setup.primaryCTA (use this instead of hardcoded button text)
  // - setup.styleClasses.theme (apply to section background)
  // - setup.styleClasses.button (apply to buttons)
  // - setup.styleDirection (to customize styling)
}
```

### 3. Apply Theme Classes to Sections

```jsx
// Before
<section className="w-full bg-black text-white">

// After
<section className={`w-full ${setup.styleClasses.theme}`}>
```

### 4. Use Primary CTA in Buttons

```jsx
// Before
<button className="...">Start Building</button>

// After
<button className={`... ${setup.styleClasses.button}`}>
  {setup.primaryCTA}
</button>
```

### 5. Apply Button Styling

```jsx
// Before
<button className="bg-cyan-600 hover:bg-cyan-500 text-white">
  {buttonLabel}
</button>

// After
<button className={`${setup.styleClasses.button} px-6 py-3`}>
  {setup.primaryCTA}
</button>
```

## Complete Example

```javascript
import { useProjectSetup } from "../../../Context/useProjectSetup";

export default function Hero({ content = {}, editor }) {
  const setup = useProjectSetup();
  
  const {
    title = "Welcome",
    buttonLabel = setup.primaryCTA || "Get Started",
  } = content;

  return (
    <section className={`w-full min-h-[70vh] ${setup.styleClasses.theme} flex items-center`}>
      <div className="mx-auto text-center">
        <h1 className="text-5xl mb-8">{title}</h1>
        <button className={`px-8 py-4 ${setup.styleClasses.button}`}>
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
```

## Available Style Themes

The `styleClasses` are generated based on the selected `styleDirection`:

| Style | accent | button | theme |
|-------|--------|--------|-------|
| **minimalist** | Cyan | Cyan button | Light sans + minimal styling |
| **brutalist** | Yellow bold | Yellow w/ black text | Bold + harsh borders |
| **playful** | Pink neon | Pink gradient | Rounded + vibrant |
| **corporate** | Blue | Blue button | Professional + clean |
| **cyber** | Purple glow | Purple w/ glow | Edgy + cyberpunk |

## When Sections Auto-Update

1. **Preload Sections**: Sections listed in `preloadSections` automatically load when the builder initializes
2. **Completeness Checker**: The metadata panel shows COMPLETENESS progress based on which sections are present
3. **Style Changes**: Change the style in the metadata panel to see all sections update in real-time

## Migration Checklist

For each section component:
- [ ] Add `import { useProjectSetup } from "..."` at the top
- [ ] Call `const setup = useProjectSetup();` in the component
- [ ] Replace hardcoded button text with `setup.primaryCTA`
- [ ] Replace `bg-black text-white` with `setup.styleClasses.theme`
- [ ] Replace button classes with `setup.styleClasses.button`
- [ ] Test with different style directions to ensure it looks correct

## Notes

- The ProjectMetadata panel on the left shows real-time project info
- The panel is collapsible (click the ⟨ button) to save space
- Metadata fields marked with "editable" can be changed directly in the panel
- All changes sync across all sections immediately

