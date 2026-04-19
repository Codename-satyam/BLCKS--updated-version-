# 🏗️ CHATTER - ARCHITECTURE & TECH STACK REFERENCE

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CHATTER BUILDER                            │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                        Browser UI Layer                      │  │
│  │                                                              │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │  │
│  │  │    Header    │  │   Sidebar    │  │   Editor Panel   │  │  │
│  │  │ (Progress)   │  │  (Sections)  │  │  (Fields)        │  │  │
│  │  └──────────────┘  └──────────────┘  └──────────────────┘  │  │
│  │                                                              │  │
│  │  ┌─────────────────────────┐  ┌─────────────────────────┐  │  │
│  │  │   Design Panel          │  │  Preview Modal          │  │  │
│  │  │  (Colors/Fonts/Gradients)  │  (Live Preview)      │  │  │
│  │  └─────────────────────────┘  └─────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                           ▲                                        │
│                           │                                        │
└───────────────────────────┼────────────────────────────────────────┘
                            │
                  ┌─────────┴──────────┐
                  │                    │
            ┌─────▼─────┐        ┌────▼──────┐
            │ Components│        │ Context   │
            │ Library   │        │ State     │
            │ (Catalog) │        │ (Builder) │
            └───────────┘        └───────────┘
                  │                    │
        ┌─────────┼────────────────────┼─────────┐
        │         │                    │         │
   ┌────▼──┐  ┌──▼─────┐  ┌──────┐  ┌─▼──────┐
   │ 16    │  │ 40+    │  │ Util │  │ Export │
   │Section│  │Component│  │ Lib  │  │ System │
   │Template│  │Catalog │  │      │  │        │
   └────────┘  └────────┘  └──────┘  └────────┘


REACT COMPONENT HIERARCHY
═════════════════════════════════════════════════════════════

App (React Router)
├── (Public Routes)
│   ├── HomePage
│   │   ├── Navbar
│   │   ├── Page2, Page3, Page4, Page5
│   │   └── Footer
│   ├── About
│   ├── Contact
│   ├── Login
│   └── ReactComponents (Showcase)
│
└── (Protected Routes)
    └── BuilderProvider
        └── Builder
            ├── Header
            │   ├── Logo
            │   ├── Progress Bar
            │   └── Action Buttons
            ├── SideBar
            │   ├── Search
            │   └── Section Grid
            ├── Editor
            │   ├── Active Section Preview
            │   └── Field Editors
            ├── DesignPanel
            │   ├── Background Editor
            │   ├── Font Selector
            │   └── Accent Picker
            └── PreviewModal
                ├── Viewport Selector
                └── Live Preview (iframe)


STATE MANAGEMENT FLOW
═════════════════════════════════════════════════════════════

BuilderContext (Global State)
    │
    ├── selectedSectionIds: string[]
    │       ↓ changes on section select
    │   → Updates selectedSections (derived)
    │       ↓ used by
    │   → PreviewModal, Editor, Export
    │
    ├── sectionContent: object
    │       ↓ changes on field edit
    │   → Updated via updateSectionField()
    │       ↓ used by
    │   → Editor, Preview, Export
    │
    ├── designSettings: object
    │       ↓ changes on theme change
    │   → Updated via updateDesignSettings()
    │       ↓ used by
    │   → DesignPanel, CSS Injection, Export
    │
    ├── activeEditId: string | null
    │       ↓ changes on section focus
    │   → Used by Editor to show current form
    │
    ├── isPreviewOpen: boolean
    │       ↓ changes on preview toggle
    │   → Shows/hides PreviewModal
    │
    └── previewViewport: string
            ↓ changes on device select
        → ResizePreview, CSS media queries


DATA FLOW: USER INTERACTION → STATE → UI
═════════════════════════════════════════════════════════════

1. SELECT SECTION
   User clicks section in sidebar
   → addSection(sectionId)
   → setSelectedSectionIds([sectionId])
   → selectedSectionIds updated
   → selectedSections (derived) recalculated
   → Editor re-renders with new fields
   → Preview re-renders new section

2. EDIT CONTENT
   User types in Editor field
   → updateSectionField(sectionId, fieldKey, value)
   → setSectionContent({...prev, [sectionId]: {...}})
   → sectionContent updated
   → Preview re-renders with new content
   → Export data updated

3. CUSTOMIZE THEME
   User selects color in DesignPanel
   → updateDesignSettings({...prev, accentColor: value})
   → designSettings updated
   → CSS variables injected into preview iframe
   → Preview re-renders with new theme

4. DOWNLOAD EXPORT
   User clicks download button
   → downloadTemplate()
   → generateZip(selectedSections, sectionContent, designSettings)
   → JSZip packs files
   → Browser downloads file


FILE STRUCTURE & RESPONSIBILITIES
═════════════════════════════════════════════════════════════

src/App.jsx
  └─ Main router, page structure, lazy loading

src/Context/
  ├─ BuilderContext.jsx
  │  └─ Global builder state (sections, content, design, preview)
  ├─ sectionRegistry.js
  │  └─ Metadata for all 16 template sections
  └─ useProjectSetup.js
     └─ Setup hook for projects

src/Components/
  ├─ Builder/
  │  ├─ Builder.jsx (Main builder layout, header, download)
  │  ├─ SideBar.jsx (Section selector panel)
  │  ├─ Editor.jsx (Content field editor)
  │  ├─ DesignPanel.jsx (Theme customizer)
  │  ├─ PreviewModal.jsx (Live preview)
  │  └─ ProjectMetadata.jsx (Project info)
  └─ ReactComponents/
     ├─ ReactComponents.jsx (Component showcase)
     └─ componentsCatalog.json (JSON component library)

src/Sections/Generic/ (16 TEMPLATE SECTIONS)
  ├─ Navbars/ (Navbar1, Navbar2, Navbar3)
  ├─ Heros/ (Hero1, Hero2, Hero3, Hero4, Hero5)
  ├─ Features/ (Features1, Features2, Features3)
  ├─ Pricing/ (Pricing1, Pricing2, Pricing3)
  ├─ Pages/ (WorkPage1, WorkPage2, WorkPage3, WorkPage4)
  └─ Footers/ (Footer1, Footer2, Footer3)

src/Sections/Portfolio/ (Specialized sections)
  └─ [Various portfolio templates]

src/lib/
  ├─ componentFactory.js
  │  └─ getComponentById, getComponentsByCategory, etc.
  ├─ exportTemplate.js
  │  └─ HTML generation functions
  ├─ styleThemes.js
  │  └─ Pre-defined theme definitions
  └─ utils.js
     └─ Helper functions (cn, formatters)

src/Pages/
  ├─ Dashboard.jsx
  ├─ Login.jsx
  ├─ Contact/Contact.jsx
  ├─ LandingPage/
  │  ├─ About.jsx
  │  └─ The-homePage/ (Landing page components)
  └─ [Other pages]

src/assets/
  ├─ CardSwap/, GhostCursor/, Loading/
  ├─ SplashCursor/, TargetCursor/
  └─ Images/


EXPORT SYSTEM ARCHITECTURE
═════════════════════════════════════════════════════════════

User clicks "Download"
  ↓
downloadTemplate() in Builder.jsx
  ↓
┌─ Validate (sections selected?)
├─ Prepare metadata
│  ├─ Convert selectedSections array
│  ├─ Add sectionContent edits
│  └─ Add designSettings config
├─ Create ZIP file
│  ├─ Add .jsx files (from SOURCE_MAP)
│  ├─ Add builder-updates.json
│  └─ Compress
└─ Trigger download
   └─ User receives: "generated-template-used-sections.zip"


ZIP FILE STRUCTURE
═════════════════════════════════════════════════════════════

generated-template-used-sections.zip
├── src/Sections/Generic/Navbars/Navbar1.jsx
├── src/Sections/Generic/Heros/Hero1.jsx
├── src/Sections/Generic/Features/Features1.jsx
├── src/Sections/Generic/Pricing/Pricing1.jsx
├── src/Sections/Generic/Footers/Footer1.jsx
└── builder-updates.json
    {
      "designSettings": {
        "bgMode": "solid",
        "bgColor": "#020202",
        "textColor": "#ffffff",
        "fontFamily": "mono",
        "accentColor": "#00e5ff"
      },
      "sections": [
        {
          "key": "navbar1",
          "id": "navbar1",
          "title": "Navbar 1",
          "group": "navbar",
          "content": {
            "brand": "MyBrand",
            "link1": "Home",
            ...
          }
        }
      ]
    }


COMPONENT CATALOG STRUCTURE
═════════════════════════════════════════════════════════════

componentsCatalog.json (40+ entries)
[
  {
    "id": "header-terminal",
    "name": "Terminal Header",
    "category": "headers",
    "description": "...",
    "tags": ["navbar", "layout"],
    "importCode": "import TerminalHeader from '@/components/headers/TerminalHeader';",
    "previewType": "header",
    "sourceCode": "export default function TerminalHeader() { ... }",
    "usageCode": "<TerminalHeader prop={value} />"
  }
]

Categories:
  - headers (4)
  - backgrounds (6)
  - animations (8)
  - text-and-animations (12)
  - custom (10+)


STYLING SYSTEM
═════════════════════════════════════════════════════════════

CSS Variable Injection
┌────────────────────────────────┐
│ designSettings in BuilderContext │
│  - bgColor: "#020202"          │
│  - textColor: "#ffffff"        │
│  - fontFamily: "'Courier New'" │
│  - accentColor: "#00e5ff"      │
└────────────────────────────────┘
         ↓ injected into iframe
┌────────────────────────────────┐
│ <iframe style={{              │
│   --builder-bg: #020202;       │
│   --builder-text: #ffffff;     │
│   --builder-font: Courier New; │
│   --builder-accent: #00e5ff;   │
│ }}>                            │
│ </iframe>                      │
└────────────────────────────────┘
         ↓ CSS uses variables
.builder-template-surface {
  font-family: var(--builder-font);
  color: var(--builder-text);
  background: var(--builder-bg);
}

.accent-text {
  color: var(--builder-accent);
}


RESPONSIVE PREVIEW SYSTEM
═════════════════════════════════════════════════════════════

PreviewModal.jsx
├── isPreviewOpen (show/hide)
├── previewViewport (device mode)
│   ├── "desktop" → 1440x900
│   ├── "tablet" → 768x1024
│   └── "mobile" → 375x812
└── iframe
    ├── Renders PreviewContent
    ├── Isolated CSS scope
    ├── CSS variables applied
    └── Content from selectedSections


TECHNOLOGY STACK
═════════════════════════════════════════════════════════════

Frontend
├── React 19.2.0 (UI framework)
├── React DOM 19.2.0 (DOM rendering)
├── React Router 7.13.2 (Client-side routing)
└── JSX (Component syntax)

Styling
├── Tailwind CSS 4.2.1 (Utility CSS)
├── @tailwindcss/vite 4.2.1 (Vite integration)
└── Tailwind Merge 3.5.0 (Class merging)

Build & Development
├── Vite 8.0.0-beta.13 (Build tool)
├── @vitejs/plugin-react 5.1.1 (React plugin)
├── ESLint 9.39.1 (Code linting)
└── Babel (via SWC, transpiling)

Utilities & Libraries
├── GSAP 3.14.2 (Animations)
├── Three.js 0.183.2 (3D graphics - optional)
├── JSZip 3.10.1 (ZIP file creation)
├── Lucide React 0.577.0 (Icons)
├── @headlessui/react 2.2.9 (Unstyled components)
├── @heroicons/react 2.2.0 (Icon set)
├── class-variance-authority 0.7.1 (Component variants)
└── clsx 2.1.1 (Class concatenation)

UI Components
├── Radix UI 1.4.3 (Accessible primitives)
├── Headless UI 0.0.0 (Unstyled components)
├── Heroicons 2.2.0 (Icon library)
└── Custom components (Button, Card, Modal)


DEPLOYMENT ARCHITECTURE
═════════════════════════════════════════════════════════════

npm run build
    ↓ (Vite build)
    ├─ Compile JSX → JS
    ├─ Bundle CSS
    ├─ Minify & Tree-shake
    └─ dist/ folder

dist/
├── index.html
├── assets/
│   ├── index-XXXX.js (Main bundle)
│   ├── vendor-XXXX.js (Dependencies)
│   └── style-XXXX.css (Tailwind)
└── [other assets]

Deploy to:
├── Vercel (recommended)
├── Netlify
├── GitHub Pages
├── Self-hosted (Node server)
└── Docker container


PERFORMANCE TARGETS
═════════════════════════════════════════════════════════════

Load Time
  - First Paint: < 1s
  - Largest Contentful Paint: < 2.5s
  - Time to Interactive: < 3s

Runtime Performance
  - Editor interaction: < 100ms
  - Preview update: < 500ms
  - Export generation: < 2s
  - Theme change: < 200ms

Bundle Size
  - Main JS: < 300KB (gzipped)
  - CSS: < 50KB (gzipped)
  - Fonts: < 100KB
  - Total: < 450KB

Lighthouse Scores
  - Performance: > 90
  - Accessibility: > 95
  - Best Practices: > 90
  - SEO: > 90


SECURITY ARCHITECTURE
═════════════════════════════════════════════════════════════

User Input Sanitization
  Input → Validate → Sanitize → Store → Use
  └─ Prevent XSS
  └─ Escape special characters
  └─ Validate file uploads

Export Security
  Export → Validate files → Sign (optional) → Download
  └─ Check file contents
  └─ Verify no malicious code
  └─ Sandbox preview iframe

Data Protection
  └─ localStorage (unencrypted, local only)
  └─ No server storage (privacy by default)
  └─ HTTPS only (on production)


TESTING STRATEGY
═════════════════════════════════════════════════════════════

Unit Tests (vitest)
  - lib/componentFactory.js
  - lib/exportTemplate.js
  - lib/utils.js
  - Each utility function

Integration Tests (Cypress)
  - Add section workflow
  - Edit content workflow
  - Download export workflow
  - Theme customization workflow

E2E Tests (Playwright)
  - Complete user journey
  - Cross-browser testing
  - Mobile testing
  - Performance testing

Accessibility Tests (axe)
  - WCAG 2.1 AA compliance
  - Keyboard navigation
  - Screen reader support


MONITORING & ANALYTICS
═════════════════════════════════════════════════════════════

Events to Track
  ├── User Actions
  │   ├── section_selected
  │   ├── field_edited
  │   ├── design_changed
  │   ├── preview_toggled
  │   └── template_exported
  ├── Performance
  │   ├── editor_interaction_time
  │   ├── preview_render_time
  │   └── export_generation_time
  └── Errors
      ├── export_failed
      ├── preview_error
      └── validation_error

Tools
  ├── Plausible (privacy-first analytics)
  ├── Sentry (error tracking)
  └── LogRocket (session replay - optional)
```

---

## Technology Decision Rationale

| Technology | Why Used | Alternatives |
|-----------|----------|----------------|
| **React 19** | Latest features, Server Components, Compiler | Vue, Svelte |
| **Vite** | Fast HMR, optimized builds | Webpack, Parcel |
| **Tailwind CSS v4** | Utility-first, JIT, great ecosystem | Bootstrap, Styled Components |
| **React Router v7** | Client-side navigation, code splitting | Next.js, Remix |
| **Context API** | Built-in, sufficient for state size | Redux, Zustand, Jotai |
| **JSZip** | Lightweight, works in browser | Server-side zipping |
| **GSAP** | Smooth animations, powerful | Framer Motion, Motion |
| **Lucide** | Clean SVG icons, tree-shakeable | Font Awesome, Material Icons |

---

## Scalability Considerations

### Current Capacity
- 16 template sections → Easily handles 100+
- 40+ components → Can scale to 500+
- Single context provider → Suitable up to ~1000 fields

### Scaling Strategy
1. **More Sections:** Just add to sectionRegistry.js
2. **More Components:** Add to componentsCatalog.json
3. **State Growth:** Consider Redux if needed
4. **Database:** Add Firebase for cloud persistence
5. **Real-time:** Add Socket.io for collaboration

---

## Version History

| Version | Date | Major Changes |
|---------|------|-----------------|
| **0.0.0** | 2026-04-16 | Initial MVP |
| **0.1.0** | TBD | Mobile optimization, Undo/Redo |
| **0.2.0** | TBD | Multi-format exports, 10 new sections |
| **0.5.0** | TBD | Advanced features, cloud sync |
| **1.0.0** | TBD | Production release |

---

**Last Updated:** April 16, 2026  
**Status:** Active Development  
**Maintained By:** [Your Team]
