# Platform Separation Implementation Guide

## Overview

The builder now supports two distinct platforms: **Generic** and **Portfolio**. Users select their platform before entering the builder, and only relevant components are shown for their chosen platform.

---

## Architecture Changes

### 1. **PlatformSelector Component**
- **Location**: `src/Components/PlatformSelector/PlatformSelector.jsx`
- **Purpose**: Welcome screen where users choose between Generic and Portfolio platforms
- **Features**:
  - Beautiful gradient cards with hover effects
  - Feature descriptions for each platform
  - Icons and color schemes to differentiate platforms
  - Responsive design (mobile, tablet, desktop)
  - Navigation to `/builder/generic` or `/builder/portfolio`

### 2. **BuilderContext Updates**
- **New Function**: `getFilteredRegistry(platform)`
  - Filters sections based on platform type
  - Generic: Sections without `portfolio-` prefix
  - Portfolio: Sections with `portfolio-` prefix
- **New State**: `currentPlatform` - tracks selected platform
- **Updated Provider Props**: Accepts `platform` parameter
- **Filtered Registry**: `filteredRegistry` exported in context value

### 3. **Routing Structure**
```
/builder                    → PlatformSelector (shows menu)
/builder/generic           → Generic Builder
/builder/portfolio         → Portfolio Builder
```

### 4. **Builder Component Enhancements**
- **New Import**: `useNavigate` from react-router-dom
- **New Props**: `platform` parameter passed from routes
- **Back Button**: Added in header to return to platform selection
- **Platform Badge**: Displays current platform in header
- **Portfolio Source Imports**: Added 19 portfolio component imports to SOURCE_MAP

### 5. **Sidebar Component**
- **Updated SIGNAGE**: Added entries for all portfolio components
  - Portfolio Navbars: PROF, SLEEK, FLOW
  - Portfolio Heroes: INTRO, IMPACT, SHINE
  - Portfolio Projects: CASE, SHOW, WORK
  - Portfolio Skills: TECH, SKILL, EXPT
  - Portfolio Footers: TOUCH, LINK, END
  - Portfolio Templates: START, BUILD, MADE, READY
- **Automatic Filtering**: Uses filtered registry from context

---

## Component Registry

### Generic Platform Components (19 total)
**Navbars**: navbar1, navbar2, navbar3
**Heroes**: hero1, hero2, hero3
**Features**: features1, features2, features3
**Pricing**: pricing1, pricing2, pricing3
**Work Pages**: workpage1, workpage2, workpage3, workpage4
**Footers**: footer1, footer2, footer3

### Portfolio Platform Components (19 total)
**Navbars**: portfolio-navbar1, portfolio-navbar2, portfolio-navbar3
**Heroes**: portfolio-hero1, portfolio-hero2, portfolio-hero3
**Projects**: portfolio-projects1, portfolio-projects2, portfolio-projects3
**Skills**: portfolio-skills1, portfolio-skills2, portfolio-skills3
**Footers**: portfolio-footer1, portfolio-footer2, portfolio-footer3
**Templates**: portfolio-template1, portfolio-template2, portfolio-template3, portfolio-template4

---

## User Flow

1. **User navigates to `/builder`**
   - PlatformSelector component displays
   - Two platform cards shown (Generic & Portfolio)

2. **User selects platform**
   - Clicks "Start Building →" on chosen card
   - Navigates to `/builder/generic` or `/builder/portfolio`

3. **Builder loads**
   - BuilderProvider receives platform prop
   - Filtered registry applies (only selected platform components)
   - Sidebar shows only relevant components

4. **User works with components**
   - Adds, removes, and customizes sections
   - All components belong to selected platform
   - Export generates code with platform-specific paths

5. **User can switch platforms**
   - Click back button in header
   - Returns to PlatformSelector
   - Can choose different platform

---

## File Changes Summary

### New Files
- `src/Components/PlatformSelector/PlatformSelector.jsx` - Platform selection UI

### Modified Files
1. **App.jsx**
   - Added PlatformSelector import
   - Updated routing structure (3 builder routes)
   - Updated navbar hiding logic

2. **BuilderContext.jsx**
   - Added `getFilteredRegistry()` function
   - Added `currentPlatform` state
   - Updated BuilderProvider to accept `platform` prop
   - Changed `sectionRegistry` to `filteredRegistry` in context value

3. **Builder.jsx**
   - Added `useNavigate` import
   - Added portfolio component source imports (19 files)
   - Updated SOURCE_MAP (added portfolio entries)
   - Added platform prop to component
   - Added back button in header
   - Added platform badge in header

4. **SideBar.jsx**
   - Extended SIGNAGE object with portfolio entries (19 components)
   - Updated color assignments for portfolio sections

---

## Key Features

✅ **Platform Isolation**: Generic and Portfolio components are completely separate
✅ **Smart Filtering**: Registry filtered server-side at context level
✅ **Seamless Navigation**: Easy switching between platforms via back button
✅ **Visual Differentiation**: Color-coded platform selector
✅ **Complete Export**: Platform-specific code generated on download
✅ **Responsive Design**: Works on all device sizes
✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

---

## Technical Implementation Details

### Registry Filtering Logic
```javascript
const getFilteredRegistry = (platform = "generic") => {
    if (platform === "portfolio") {
        return sectionRegistry.filter((section) => 
            section.group?.startsWith("portfolio-") || 
            section.id?.startsWith("portfolio-")
        );
    }
    return sectionRegistry.filter((section) => 
        !section.group?.startsWith("portfolio-") && 
        !section.id?.startsWith("portfolio-")
    );
};
```

### Context Provider Props
```javascript
<BuilderProvider platform="generic">
    <Builder platform="generic" />
</BuilderProvider>
```

### Route Configuration
```javascript
<Route path="/builder" element={<PlatformSelector />} />
<Route path="/builder/generic" element={
    <BuilderProvider platform="generic">
        <Builder platform="generic" />
    </BuilderProvider>
} />
<Route path="/builder/portfolio" element={
    <BuilderProvider platform="portfolio">
        <Builder platform="portfolio" />
    </BuilderProvider>
} />
```

---

## Testing Checklist

- [ ] Navigate to `/builder` - PlatformSelector displays
- [ ] Click Generic card - Routes to `/builder/generic`
- [ ] Click Portfolio card - Routes to `/builder/portfolio`
- [ ] Generic builder only shows generic components in sidebar
- [ ] Portfolio builder only shows portfolio components in sidebar
- [ ] Back button navigates to PlatformSelector
- [ ] Platform badge displays current platform
- [ ] Component export includes platform-specific paths
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Search functionality works within platform components

---

## Future Enhancements

1. **User Preferences**: Save last selected platform locally
2. **Template Export**: Export platform-specific templates
3. **Component Sharing**: Share components between platforms
4. **Advanced Filtering**: Filter by component type, complexity, etc.
5. **Platform Switching**: Migrate components between platforms

---

## Maintenance Notes

- When adding new Generic components: Don't use `portfolio-` prefix
- When adding new Portfolio components: Use `portfolio-` prefix consistently
- Update SIGNAGE in SideBar.jsx when adding components
- Update SOURCE_MAP in Builder.jsx for export functionality
- Keep portfolio group names consistent: `portfolio-navbar`, `portfolio-hero`, etc.

