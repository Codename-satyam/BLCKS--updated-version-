# 🚀 CHATTER WEBPAGE BUILDER - COMPLETE IMPLEMENTATION PROMPT

## Executive Summary

**Chatter** is a professional-grade, no-code webpage builder that enables visual design and export of fully-functional websites. This prompt documents the complete project state, all existing features, strategic improvements, and a prioritized roadmap for production-grade completion.

**Current Status:** MVP with stable foundation ready for advanced features  
**Target Version:** 1.0 Production Release  
**Estimated Timeline:** 8-12 weeks for all improvements

---

## 📋 COMPLETE PROJECT INVENTORY

### WHAT EXISTS (Built & Working)

#### 1. Core Builder Engine
- ✅ Full-screen immersive editor interface
- ✅ Completion progress tracking (0-100%)
- ✅ Real-time theme customization
- ✅ Live responsive preview (Desktop/Tablet/Mobile modes)
- ✅ Syntax-highlighted code display
- ✅ System-style UI with neon accents

#### 2. Template Section Library (16 Pre-built)
- ✅ **Navbars:** 3 professional designs
- ✅ **Heroes:** 5 landing page variants
- ✅ **Features:** 3 capability showcase layouts
- ✅ **Pricing:** 3 tiered pricing displays
- ✅ **Work Pages:** 4 portfolio layouts
- ✅ **Footers:** 3 footer variations

#### 3. Content Editing System
- ✅ 50+ editable fields across all sections
- ✅ Text input, textarea, color picker support
- ✅ Field validation and sensible defaults
- ✅ Real-time preview updates

#### 4. Design Customization
- ✅ 6 pre-defined gradient backgrounds
- ✅ 4 font families (Mono, Sans, Serif, Display)
- ✅ 6 accent color presets
- ✅ Opacity and color picker controls
- ✅ CSS variable injection system
- ✅ 4 pre-defined themes (Minimalist, Brutalist, Playful, Corporate)

#### 5. Export System
- ✅ ZIP file download with all sections
- ✅ builder-updates.json metadata export
- ✅ HTML template generation
- ✅ Design settings serialization

#### 6. Component Architecture
- ✅ Catalog-driven system (JSON single source of truth)
- ✅ 40+ components in organized categories
- ✅ Dynamic component factory utilities
- ✅ Lazy loading with React Router v7

#### 7. Landing Pages & Routing
- ✅ Public landing page with demos
- ✅ About page
- ✅ Contact page
- ✅ Login page
- ✅ Components showcase
- ✅ Builder route isolation

---

### WHAT NEEDS IMPROVEMENT

#### **CRITICAL ISSUES (Affect User Experience)**

1. **Mobile Editor Responsiveness**
   - Current: Desktop-only editor layout
   - Issue: Panels stack poorly on mobile, unusable
   - Solution: Implement mobile-optimized layouts with collapsible panels
   - Effort: 1 week

2. **Limited Export Formats**
   - Current: ZIP + HTML only
   - Missing: React, TypeScript, Next.js, Vue exports
   - Solution: Implement multiple export adapters
   - Effort: 1 week

3. **No Undo/Redo**
   - Current: No history management
   - Issue: Users can't undo mistakes
   - Solution: Implement history stack in BuilderContext
   - Effort: 3-4 days

4. **Limited Content Types**
   - Current: 16 sections only
   - Missing: Testimonials, FAQs, Newsletter, Teams, CTA, etc.
   - Solution: Add 20+ new template sections
   - Effort: 2 weeks

---

#### **IMPORTANT FEATURES (Increase Value)**

1. **Advanced Content Editing**
   - Rich text editor (bold, italic, lists)
   - Markdown support
   - HTML source mode
   - Copy/paste sections
   - Batch editing

2. **Smart Project Management**
   - Save/load projects locally
   - Cloud sync (Firebase/Supabase)
   - Project versioning
   - Template library
   - Project sharing

3. **Enhanced Preview**
   - Fullscreen immersive preview
   - Device simulator
   - Screenshot export
   - QR code for mobile testing

4. **Design System Expansion**
   - 15+ new themes
   - Theme builder UI
   - Custom CSS injection
   - Breakpoint-specific styling

---

#### **NICE-TO-HAVE FEATURES (Polish)**

1. Keyboard shortcuts (Ctrl+Z for undo, etc.)
2. AI content suggestions
3. Accessibility checker
4. SEO meta tags editor
5. Real-time collaboration
6. User accounts & dashboard
7. Analytics integration
8. Performance optimization

---

## 🏗️ COMPLETE ARCHITECTURE GUIDE

### Directory Structure

```
src/
├── Components/
│   ├── Builder/
│   │   ├── Builder.jsx (Main builder interface)
│   │   ├── SideBar.jsx (Section selection panel)
│   │   ├── Editor.jsx (Content editing panel)
│   │   ├── DesignPanel.jsx (Theme customization)
│   │   ├── PreviewModal.jsx (Live preview)
│   │   └── ProjectMetadata.jsx (Project info)
│   │
│   └── ReactComponents/
│       ├── ReactComponents.jsx (Component showcase)
│       ├── componentsCatalog.json (SINGLE SOURCE OF TRUTH)
│       └── components/ (Reusable components)
│
├── Context/
│   ├── BuilderContext.jsx (State management)
│   ├── sectionRegistry.js (Template sections)
│   └── useProjectSetup.js (Setup hook)
│
├── lib/
│   ├── componentFactory.js (Dynamic utilities)
│   ├── exportTemplate.js (Export generation)
│   ├── styleThemes.js (Theme definitions)
│   └── utils.js (Helper functions)
│
├── Pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   └── LandingPage/ (Public pages)
│
├── Sections/ (TEMPLATE LIBRARY)
│   ├── Generic/
│   │   ├── Navbars/ (3 variants)
│   │   ├── Heros/ (5 variants)
│   │   ├── Features/ (3 variants)
│   │   ├── Pricing/ (3 variants)
│   │   ├── Pages/ (4 variants)
│   │   └── Footers/ (3 variants)
│   └── Portfolio/ (Specialized templates)
│
├── assets/ (Custom cursors & animations)
├── App.jsx (Main router)
└── main.jsx (Entry point)
```

### Core State Management (BuilderContext.jsx)

```javascript
// MAIN STATE
selectedSectionIds: string[]        // Active section IDs
sectionContent: object              // Per-section content edits
designSettings: object              // Theme & styling
activeEditId: string | null         // Currently editing section
isPreviewOpen: boolean              // Preview mode toggle
previewViewport: string             // Desktop/Tablet/Mobile

// ACTIONS
addSection(id)                       // Select section
removeSection(id)                    // Deselect section
updateSectionField(id, key, value)  // Edit content
updateDesignSettings(settings)       // Update theme
resetTemplate()                      // Clear all
openPreview()                        // Toggle preview
setPreviewViewport(mode)             // Switch responsive view

// PRESETS
FONT_MAP: { mono, sans, serif, display }
GRADIENT_PRESETS: [ 6 gradients ]
ACCENT_PRESETS: [ 6 colors ]
```

### Section Registry (sectionRegistry.js)

Each section has:
```javascript
{
  id: string,                 // Unique ID
  title: string,              // Display name
  group: string,              // Category (navbar, hero, features, etc.)
  Component: React.Component, // React component
  defaultContent: object,     // Default field values
  fields: array               // Editable fields
}
```

### Component Factory (componentFactory.js)

```javascript
// Core utilities
getComponentById(id)           // Get component by ID
getComponentsByCategory(cat)   // Get all in category
getCatalogCategories()         // Get all categories
createComponentFromSource()    // Dynamic creation
generateImportCode()           // Generate import
getOrganizedCatalog()          // Hierarchical view
```

### Export System (exportTemplate.js)

**Supported Exports:**
1. ZIP with JSX files + metadata
2. HTML templates
3. builder-updates.json (config)

**To Extend:**
- Add exportToReact(sections, settings)
- Add exportToNextJs(sections, settings)
- Add exportToVue(sections, settings)
- Add exportToTypescript(sections, settings)

---

## 🔧 IMPLEMENTATION ROADMAP

### PHASE 1: STABILIZATION (Week 1-2)

#### Task 1.1: Mobile Editor Optimization
```
Files to Modify:
- src/Components/Builder/Builder.jsx (responsive layout)
- src/Components/Builder/SideBar.jsx (mobile panel)
- src/Components/Builder/Editor.jsx (mobile form)
- src/Components/Builder/DesignPanel.jsx (mobile menu)

Requirements:
1. [ ] Stack layout on mobile (vertical)
2. [ ] Collapsible panels with hamburger menu
3. [ ] Full-width editor on mobile
4. [ ] Touch-friendly button sizing (44px minimum)
5. [ ] Mobile-first responsive breakpoints
6. [ ] Sidebar collapses to icons on tablet
7. [ ] Touch gestures (swipe to switch sections)

Acceptance Criteria:
- Editor fully functional on iPhone SE (375px width)
- All buttons clickable with thumbs
- Preview modal responsive
- No horizontal scrolling
```

#### Task 1.2: Undo/Redo System
```
Files to Modify:
- src/Context/BuilderContext.jsx (add history stack)
- src/Components/Builder/Builder.jsx (add UI buttons)
- src/lib/utils.js (add hotkey handler)

Requirements:
1. [ ] History stack (max 50 actions)
2. [ ] Undo hotkey (Ctrl+Z / Cmd+Z)
3. [ ] Redo hotkey (Ctrl+Shift+Z / Cmd+Shift+Z)
4. [ ] UI buttons in header (with icons)
5. [ ] Keyboard shortcut hints
6. [ ] History persists during session
7. [ ] Visual indication of undo/redo state

Implementation:
function useHistory() {
  const [history, setHistory] = useState([initialState])
  const [historyIndex, setHistoryIndex] = useState(0)
  
  const pushState = (newState) => { /* ... */ }
  const undo = () => { /* ... */ }
  const redo = () => { /* ... */ }
}

Acceptance Criteria:
- Can undo/redo all builder actions
- Keyboard shortcuts work globally
- Performance smooth even with 50 items in history
- History survives page navigation (context)
```

#### Task 1.3: Export Format Expansion
```
Files to Create:
- src/lib/exporters/exportReact.js
- src/lib/exporters/exportNextJs.js
- src/lib/exporters/exportVue.js
- src/lib/exporters/exportTypescript.js
- src/lib/exporters/exportStatic.js

Requirements:
1. [ ] React component export (.jsx)
2. [ ] React TypeScript export (.tsx)
3. [ ] Next.js project export (with pages, app.js)
4. [ ] Vue component export (.vue)
5. [ ] Static HTML export (self-contained)
6. [ ] Tailwind config export
7. [ ] Package.json with dependencies

Implementation Pattern:
export function exportToReact(sections, designSettings) {
  const imports = generateImports(sections)
  const component = generateComponent(sections)
  const styles = generateStyles(designSettings)
  const packageJson = generatePackageJson()
  
  return {
    files: [
      { path: 'App.jsx', content: component },
      { path: 'styles.css', content: styles },
      { path: 'package.json', content: packageJson }
    ]
  }
}

Acceptance Criteria:
- Downloaded React project builds without errors
- All sections render correctly
- Design settings applied properly
- Tailwind classes working
- No build warnings
```

---

### PHASE 2: CONTENT EXPANSION (Week 3-4)

#### Task 2.1: Add 10 New Template Sections
```
New Sections to Add:

Testimonials (3 variants):
1. [ ] TestimonialCard - Card grid layout
2. [ ] TestimonialSlider - Carousel layout
3. [ ] TestimonialText - Text-focused layout

FAQ (3 variants):
1. [ ] FAQAccordion - Collapsible Q&A
2. [ ] FAQColumns - Two-column layout
3. [ ] FAQSimple - Simple list

Newsletter (2 variants):
1. [ ] NewsletterCTA - Large signup section
2. [ ] NewsletterEmbed - Small embed form

CTA (2 variants):
1. [ ] CTABanner - Full-width banner
2. [ ] CTACards - Card-based CTA

Structure for Each:
Files to Create:
- src/Sections/Generic/Testimonials/Testimonial[1-3].jsx
- src/Sections/Generic/FAQ/FAQ[1-3].jsx
- src/Sections/Generic/Newsletter/Newsletter[1-2].jsx
- src/Sections/Generic/CTA/CTA[1-2].jsx

Update Files:
- src/Context/sectionRegistry.js (add 10 entries)
- src/Components/Builder/Builder.jsx (add imports)

Each Section Needs:
- JSX component with Tailwind styling
- Default content
- Editable fields (5-10 per section)
- Responsive design
- Preview-ready appearance

Acceptance Criteria:
- All 10 sections render correctly
- Fields editable in editor
- Export includes new sections
- Sections appear in sidebar
- No styling conflicts
```

#### Task 2.2: Rich Text Editing
```
Files to Modify:
- src/Components/Builder/Editor.jsx
- src/lib/utils.js

Requirements:
1. [ ] Replace textarea with rich editor
2. [ ] Support bold, italic, underline
3. [ ] Bullet and numbered lists
4. [ ] Link insertion
5. [ ] Heading styles (h1, h2, h3)
6. [ ] HTML source view
7. [ ] Preview rendering

Library Recommendation: TipTap or Draft.js

Implementation:
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

function RichEditor({ value, onChange, disabled }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML())
  })
  
  return <EditorContent editor={editor} />
}

Acceptance Criteria:
- Rich text renders correctly in preview
- HTML preserved in export
- Toolbar intuitive and accessible
- Mobile-friendly text editing
```

#### Task 2.3: Image Upload Support
```
Files to Create:
- src/Components/ImageUploader.jsx
- src/lib/imageUtils.js

Requirements:
1. [ ] File upload input
2. [ ] Image preview
3. [ ] Base64 encoding for export
4. [ ] Image size validation (max 5MB)
5. [ ] Drag-and-drop support
6. [ ] Multiple image support per section
7. [ ] Image optimization (compress)

Implementation:
function ImageUploader({ value, onChange, maxSize = 5 }) {
  const handleFile = (file) => {
    if (file.size > maxSize * 1024 * 1024) {
      alert('File too large')
      return
    }
    
    const reader = new FileReader()
    reader.onload = (e) => onChange(e.target.result)
    reader.readAsDataURL(file)
  }
  
  return (
    <div>
      <input type="file" onChange={e => handleFile(e.target.files[0])} />
      {value && <img src={value} alt="preview" />}
    </div>
  )
}

Acceptance Criteria:
- Upload works without page reload
- Images persist in preview
- Base64 encoded in JSON export
- Performance acceptable with multiple images
```

---

### PHASE 3: USER EXPERIENCE (Week 5-6)

#### Task 3.1: Project Save/Load
```
Files to Create:
- src/lib/projectStorage.js
- src/Components/ProjectManager.jsx

Requirements:
1. [ ] Save project to localStorage
2. [ ] Load previous project on startup
3. [ ] Project name input
4. [ ] List saved projects
5. [ ] Delete project
6. [ ] Import project (.json file)
7. [ ] Export project (.json file)

Implementation:
export const projectStorage = {
  save: (projectName, state) => {
    const projects = getProjects()
    projects[projectName] = {
      ...state,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('builder-projects', JSON.stringify(projects))
  },
  
  load: (projectName) => {
    return getProjects()[projectName]
  },
  
  getProjects: () => {
    return JSON.parse(localStorage.getItem('builder-projects') || '{}')
  }
}

Acceptance Criteria:
- Projects persist across browser sessions
- UI shows list of saved projects
- Can load any saved project
- Can delete projects
- Can export/import projects as files
```

#### Task 3.2: Keyboard Shortcuts
```
Files to Modify:
- src/lib/utils.js (add shortcut handler)
- src/Components/Builder/Builder.jsx (add help modal)

Shortcuts to Implement:
- Ctrl+Z / Cmd+Z: Undo
- Ctrl+Shift+Z / Cmd+Shift+Z: Redo
- Ctrl+S / Cmd+S: Save project
- Ctrl+E / Cmd+E: Toggle preview
- Ctrl+D / Cmd+D: Download template
- ?: Show help (keyboard shortcuts)
- Ctrl+/: Toggle sidebar

Implementation:
function useKeyboardShortcuts(actions) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z' && !e.shiftKey) {
          e.preventDefault()
          actions.undo()
        }
        if (e.key === 'z' && e.shiftKey) {
          e.preventDefault()
          actions.redo()
        }
        // ... more shortcuts
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => removeEventListener('keydown', handleKeyDown)
  }, [])
}

Acceptance Criteria:
- All shortcuts work across all browsers
- Shortcuts don't conflict with browser defaults
- Help modal shows all shortcuts
- Mobile doesn't break with shortcuts
```

#### Task 3.3: Improved Preview Modal
```
Files to Modify:
- src/Components/Builder/PreviewModal.jsx

Requirements:
1. [ ] Fullscreen preview option
2. [ ] Device frame (iPhone, iPad, Desktop)
3. [ ] Screenshot export (PNG/JPG)
4. [ ] QR code for mobile testing
5. [ ] Edit mode toggle (overlay with edit buttons)
6. [ ] Viewport simulators
7. [ ] Zoom controls

Implementation:
function PreviewModal() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [deviceFrame, setDeviceFrame] = useState('desktop')
  const [showQR, setShowQR] = useState(false)
  
  const devices = {
    desktop: { width: 1440, height: 900 },
    iphone: { width: 375, height: 812 },
    ipad: { width: 768, height: 1024 }
  }
  
  return (
    <div className={isFullscreen ? 'fullscreen' : 'modal'}>
      <div className="toolbar">
        {/* Device selector */}
        {/* Screenshot button */}
        {/* QR code button */}
        {/* Edit toggle */}
      </div>
      
      <div className="preview-container">
        <iframe width={devices[deviceFrame].width} />
      </div>
    </div>
  )
}

Acceptance Criteria:
- Fullscreen preview immersive
- Device frames render correctly
- Screenshots download as images
- QR code functional and scannable
```

---

### PHASE 4: POLISH & OPTIMIZATION (Week 7-8)

#### Task 4.1: Theme Builder UI
```
Files to Create:
- src/Components/Builder/ThemeBuilder.jsx

Requirements:
1. [ ] Visual color picker with palette
2. [ ] Gradient editor (stops and angle)
3. [ ] Font preview (each family)
4. [ ] Theme save/load
5. [ ] Export theme as JSON
6. [ ] Apply theme to live preview
7. [ ] Pre-defined theme library (15+)

Implementation:
function ThemeBuilder() {
  const [theme, setTheme] = useState(defaultTheme)
  
  return (
    <div className="theme-builder">
      <ColorPaletteEditor 
        colors={theme.colors} 
        onChange={colors => setTheme({...theme, colors})}
      />
      <GradientEditor 
        gradient={theme.gradient}
        onChange={gradient => setTheme({...theme, gradient})}
      />
      <FontPreview 
        fonts={theme.fonts}
        onChange={fonts => setTheme({...theme, fonts})}
      />
      <ThemeLibrary onSelect={setTheme} />
    </div>
  )
}

Acceptance Criteria:
- Visual theme building intuitive
- Live preview updates instantly
- 15+ pre-defined themes available
- Can save custom themes
- Export/import themes as JSON
```

#### Task 4.2: Accessibility Audit & Fixes
```
Requirements:
1. [ ] WCAG 2.1 AA compliance
2. [ ] Keyboard navigation throughout
3. [ ] Screen reader support (ARIA labels)
4. [ ] Contrast ratio checking
5. [ ] Alt text fields for images
6. [ ] Focus management
7. [ ] Color blind mode

Acceptance Criteria:
- Passes axe-core audit with 0 violations
- All interactive elements keyboard accessible
- Screen reader announces all content
- Focus indicators visible
- Color not only distinguishing factor
```

#### Task 4.3: Performance Optimization
```
Requirements:
1. [ ] Lazy load sections in sidebar
2. [ ] Code-split template sections
3. [ ] Virtualize long lists
4. [ ] Optimize preview rendering
5. [ ] Cache computed values
6. [ ] Remove unused CSS
7. [ ] Minify exports

Tools:
- React DevTools Profiler
- Lighthouse
- Bundle analyzer (vite plugin)

Acceptance Criteria:
- Builder loads in < 3s
- Preview renders in < 500ms
- No jank when scrolling
- Main bundle < 500KB (gzipped)
- All Lighthouse scores > 90
```

---

### PHASE 5: ADVANCED FEATURES (Week 9-12)

#### Task 5.1: Cloud Sync (Firebase/Supabase)
```
Files to Create:
- src/lib/firebase.js (or supabase.js)
- src/Context/CloudSyncContext.jsx
- src/Components/CloudSync.jsx

Requirements:
1. [ ] Firebase/Supabase setup
2. [ ] User authentication (Google OAuth)
3. [ ] Real-time project sync
4. [ ] Conflict resolution
5. [ ] Offline support
6. [ ] Project sharing (public links)

Acceptance Criteria:
- Projects sync to cloud automatically
- Changes persist across devices
- Can share projects with link
- Works offline with eventual sync
```

#### Task 5.2: AI Content Suggestions
```
Files to Create:
- src/lib/openai.js (or similar API)
- src/Components/AISuggestions.jsx

Requirements:
1. [ ] Connect to OpenAI/Claude API
2. [ ] Generate content suggestions
3. [ ] Suggest section additions
4. [ ] SEO meta tags generation
5. [ ] Copy optimization

Acceptance Criteria:
- Suggestions relevant and useful
- Integration seamless
- Cost-effective API usage
- Works offline gracefully
```

#### Task 5.3: Real-Time Collaboration
```
Requirements:
1. [ ] WebSocket connection (Socket.io or Pusher)
2. [ ] Multi-user cursors
3. [ ] Live content updates
4. [ ] Comment system
5. [ ] Presence indicators

Acceptance Criteria:
- Two users can edit simultaneously
- Changes appear in real-time (< 200ms latency)
- No data conflicts
- Seamless collaboration experience
```

---

## 🎯 QUICK START CHECKLIST

### For New Developers

```
Phase 1: Learn the Codebase
[ ] Read PROJECT_COMPLETION_GUIDE.md
[ ] Review src/App.jsx routing structure
[ ] Explore src/Context/BuilderContext.jsx state
[ ] Check src/Sections/Generic/ for templates
[ ] Understand src/lib/componentFactory.js

Phase 2: Set Up Dev Environment
[ ] npm install
[ ] npm run dev (start dev server)
[ ] Open http://localhost:5173
[ ] Navigate to /builder route
[ ] Test adding/editing a section

Phase 3: Make Your First Change
[ ] Pick a simple task from PHASE 1
[ ] Create a feature branch (git checkout -b feature/name)
[ ] Implement the feature
[ ] Test thoroughly
[ ] Create pull request

Phase 4: Deploy
[ ] npm run build
[ ] Test preview build (npm run preview)
[ ] Deploy to hosting (Vercel, Netlify, etc.)
```

---

## 📊 FEATURE COMPLETION MATRIX

| Feature | Status | Priority | Effort | Week |
|---------|--------|----------|--------|------|
| **Mobile Optimization** | ❌ | CRITICAL | 1 week | W1 |
| **Undo/Redo** | ❌ | CRITICAL | 3-4 days | W1-2 |
| **Multi-Format Export** | ⚠️ | HIGH | 1 week | W2 |
| **10 New Sections** | ❌ | HIGH | 2 weeks | W3-4 |
| **Rich Text Editor** | ❌ | MEDIUM | 1 week | W4 |
| **Image Upload** | ❌ | MEDIUM | 3 days | W4 |
| **Project Save/Load** | ❌ | MEDIUM | 1 week | W5 |
| **Keyboard Shortcuts** | ❌ | MEDIUM | 3 days | W5 |
| **Advanced Preview** | ❌ | MEDIUM | 1 week | W5-6 |
| **Theme Builder** | ❌ | LOW | 1 week | W6 |
| **Accessibility** | ⚠️ | MEDIUM | 1 week | W7 |
| **Performance** | ⚠️ | MEDIUM | 1 week | W7-8 |
| **Cloud Sync** | ❌ | LOW | 2 weeks | W9-10 |
| **AI Features** | ❌ | LOW | 1 week | W11 |
| **Collaboration** | ❌ | LOW | 2 weeks | W11-12 |

---

## 🚨 CRITICAL IMPLEMENTATION GUIDELINES

### Code Quality
```javascript
// DO
✅ Use meaningful variable names
✅ Add JSDoc comments on functions
✅ Extract reusable logic to utils
✅ Use TypeScript for complex logic
✅ Write tests for critical features

// DON'T
❌ Hardcode values in components
❌ Create deeply nested JSX
❌ Mutate state directly
❌ Use `any` type in TypeScript
❌ Copy-paste large code blocks
```

### Performance
```javascript
// DO
✅ Use React.memo for expensive components
✅ Lazy load routes and sections
✅ Memoize callbacks with useCallback
✅ Use virtualization for long lists
✅ Code-split third-party libraries

// DON'T
❌ Create new objects/functions in render
❌ Inline all CSS
❌ Load all sections upfront
❌ Render entire catalog at once
❌ Block main thread with calculations
```

### Styling
```css
/* DO */
✅ Use Tailwind classes exclusively
✅ Extract repeated patterns to components
✅ Use CSS variables for themes
✅ Mobile-first responsive design
✅ Use semantic HTML

/* DON'T */
❌ Mix Tailwind with CSS-in-JS
❌ Use !important (almost ever)
❌ Hardcode colors
❌ Desktop-first breakpoints
❌ Use div instead of semantic tags
```

---

## 📱 RESPONSIVE DESIGN BREAKPOINTS

```javascript
// Mobile First
- Mobile: 375px-768px (phones)
- Tablet: 768px-1024px (iPads)
- Desktop: 1024px+ (laptops)

// Tailwind Classes
sm:  640px   // small devices
md:  768px   // tablets
lg:  1024px  // desktops
xl:  1280px  // large desktops
2xl: 1536px  // extra large
```

---

## 🔐 SECURITY BEST PRACTICES

```javascript
// Content Security
✅ Sanitize user input (DOMPurify)
✅ Escape special characters
✅ Validate file uploads
✅ Limit upload sizes

// Export Security
✅ Sandbox iframes for preview
✅ Never execute user code directly
✅ Validate JSON inputs
✅ Check file contents before download

// Data Protection
✅ Hash sensitive data
✅ Use HTTPS always
✅ Validate API responses
✅ Implement rate limiting
```

---

## 🧪 TESTING STRATEGY

```javascript
// Unit Tests (vitest)
- Utils and helpers
- Component utilities
- Data transformations

// Integration Tests (Cypress)
- Builder workflow
- Export functionality
- Theme application
- Preview rendering

// E2E Tests (Playwright)
- Complete user journeys
- Cross-browser testing
- Mobile testing
- Performance testing

// Accessibility Tests (axe)
- WCAG compliance
- Keyboard navigation
- Screen reader support
```

---

## 📖 DOCUMENTATION REQUIRED

For each feature implemented, document:

```markdown
## Feature Name

### Overview
Brief description of what it does.

### User Story
As a [user], I want to [action] so that [benefit]

### API/Props
```javascript
// Function signature or component props
function feature(param1, param2) { }
// or
<Component prop1="value" prop2={true} />
```

### Usage Example
```javascript
// Show how to use it
```

### Browser Support
- Chrome 100+
- Firefox 100+
- Safari 15+
- Edge 100+

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader compatible

### Performance
- Bundle size impact: X KB
- Load time impact: X ms
```

---

## 🚀 DEPLOYMENT CHECKLIST

Before going to production:

```
Code Quality
[ ] ESLint passes (no warnings)
[ ] Prettier formatted
[ ] All TODOs resolved
[ ] No console.logs in production
[ ] No sensitive data in code

Testing
[ ] Unit tests pass
[ ] Integration tests pass
[ ] E2E tests pass
[ ] Manual testing complete
[ ] Cross-browser tested

Performance
[ ] Lighthouse score > 90
[ ] Bundle size optimized
[ ] Images optimized
[ ] CSS minified
[ ] JS minified

Security
[ ] No XSS vulnerabilities
[ ] No CSRF vulnerabilities
[ ] Input validation added
[ ] HTTPS enabled
[ ] Security headers set

Documentation
[ ] README updated
[ ] API documented
[ ] Deployment guide written
[ ] Known issues documented
```

---

## 🎓 RESOURCES & REFERENCES

### Learning Resources
- [React 19 Docs](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router v7](https://reactrouter.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools & Libraries
- **UI Components:** Radix UI, Headless UI
- **Icons:** Lucide React, Heroicons
- **Text Editor:** TipTap, Draft.js
- **Date Picker:** React Calendar
- **File Upload:** React Dropzone
- **Rich Editor:** TipTap, Quill

### Services & APIs
- **Analytics:** Plausible, Fathom
- **Database:** Firebase, Supabase
- **Auth:** Auth0, Clerk
- **AI:** OpenAI, Claude, Cohere
- **Hosting:** Vercel, Netlify, Railway

---

## 🎯 SUCCESS METRICS

Track these metrics to measure project success:

```
User Engagement
- Users completing first template: > 50%
- Average sections per project: > 3
- Export rate: > 40%
- Return rate (week over week): > 30%

Performance
- Average load time: < 3s
- Builder interaction response: < 100ms
- Export generation: < 2s

Quality
- Bug report rate: < 5 per 1000 users
- Accessibility violations: < 5
- Support tickets: < 2% of users

Feature Adoption
- New export formats used: > 20%
- Cloud sync adoption: > 30%
- Keyboard shortcuts used: > 40%
- Saved projects: > 2 per user
```

---

## 🤝 CONTRIBUTION GUIDELINES

### Code Review Checklist

Before merging, verify:
- [ ] Code follows style guide
- [ ] No breaking changes
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Performance acceptable
- [ ] Accessibility maintained
- [ ] Security reviewed

### Commit Message Format

```
feat: Add feature name (feature commits)
fix: Fix bug description (bug fixes)
docs: Update documentation (docs changes)
style: Format code (no logic changes)
refactor: Restructure code (no feature changes)
perf: Improve performance (performance commits)
test: Add tests (test commits)
```

Example:
```
feat: Add undo/redo functionality

- Implement history stack in BuilderContext
- Add keyboard shortcuts (Ctrl+Z, Ctrl+Shift+Z)
- Add UI buttons in header
- Limit history to 50 items
- Update tests for history management

Closes #123
```

---

## 📞 SUPPORT & TROUBLESHOOTING

### Common Issues

**Issue:** Builder not loading  
**Solution:** Clear browser cache, check console for errors, verify dependencies with `npm ls`

**Issue:** Preview not updating  
**Solution:** Check BuilderContext state update, verify CSS variables applied, check console

**Issue:** Export contains old code  
**Solution:** Verify source map imports, rebuild with `npm run build`, check ?raw loader

**Issue:** Mobile editor unresponsive  
**Solution:** Check viewport settings, verify touch event handlers, test on actual device

---

## 📝 FINAL CHECKLIST

### Before declaring MVP complete:

```
Features
[ ] 16 base sections working
[ ] Content editing functional
[ ] Theme customization complete
[ ] Export to ZIP working
[ ] Preview modes (desktop/tablet/mobile)
[ ] Responsive design

Quality
[ ] No critical bugs
[ ] Lighthouse > 90
[ ] WCAG AA compliance
[ ] Cross-browser tested
[ ] Performance acceptable

Documentation
[ ] Architecture documented
[ ] API documented
[ ] User guide written
[ ] Deployment guide written
[ ] Troubleshooting guide written

Infrastructure
[ ] CI/CD pipeline set up
[ ] Automated tests running
[ ] Staging environment ready
[ ] Production hosting configured
[ ] Backup & recovery plan
```

---

## 🎉 SUCCESS CRITERIA

The project is **PRODUCTION READY** when:

✅ All Phase 1 tasks complete (mobile + undo/redo + exports)  
✅ Zero critical bugs  
✅ Mobile fully responsive  
✅ 90+ Lighthouse scores  
✅ WCAG AA accessible  
✅ Users can build and export pages in < 5 minutes  
✅ 99.9% uptime target met  
✅ Support ticket backlog < 24 hours  

---

## 📞 Contact & Questions

For questions or clarifications on this prompt:
1. Review PROJECT_COMPLETION_GUIDE.md
2. Check CATALOG_ARCHITECTURE.md
3. Examine existing code in src/
4. Test features in dev environment
5. Ask for clarification with specific examples

---

**Last Updated:** April 16, 2026  
**Version:** 1.0  
**Status:** Ready for Implementation  

🚀 **Let's build the complete, production-grade Chatter webpage builder!**
