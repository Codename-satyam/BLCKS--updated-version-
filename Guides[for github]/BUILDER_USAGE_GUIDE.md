# Webpage Builder - Complete User Guide

## Getting Started

Welcome to the **Webpage Builder Platform**! This is a powerful, visual website builder that lets you create beautiful websites without any coding knowledge.

### Main Interface

The builder consists of three main areas:

1. **Left Sidebar (Component Library)** - Browse and select components
2. **Center Panel (Live Editor)** - Edit your website in real-time  
3. **Right Panel (Design Settings)** - Customize colors, fonts, and styling

---

## How to Build a Website

### Step 1: Select Components

1. In the **left sidebar**, browse through component categories:
   - **[NAVBAR]** - Navigation bars (3 styles)
   - **[HERO]** - Hero sections (3 styles)
   - **[FEATURES]** - Feature showcases (3 styles)
   - **[PRICING]** - Pricing tables (3 styles)
   - **[WORK]** - Portfolio/work sections (4 styles)
   - **[FOOTER]** - Footers (3 styles)

2. **Select a component** by clicking the **"+ SELECT"** button
3. **Add more components** by selecting additional ones - you can combine multiple sections!

### Step 2: Arrange Your Components

Once you've selected components:

1. Look at the **"SELECTED"** panel at the bottom of the left sidebar
2. Use the **↑ ↓ buttons** to reorder components
3. Click **✕** to remove any component you don't want
4. Components will appear in the editor in the order you arrange them

### Step 3: Customize Content

1. **Click on any component** in the editor to edit its content
2. A form will appear on the right with editable fields:
   - Titles, text, buttons
   - Links, badges, descriptions
3. **Edit the text** directly in the form
4. Changes appear **instantly** in the preview!

### Step 4: Design & Styling

In the **right panel (Design Panel)**, customize:

- **Background**: Solid color or gradient
- **Text Color**: Primary text color
- **Text Opacity**: Adjust transparency (0-100%)
- **Font Family**: Choose between Mono, Sans, Serif, Display
- **Accent Color**: Highlight color for buttons, links, accents

All changes are **applied in real-time** across all sections!

### Step 5: Live Preview

1. Click the **"▶ PREVIEW"** button in the top-right
2. See your website rendered at full quality
3. Switch between **Desktop**, **Tablet**, and **Mobile** views
4. Check responsiveness and design
5. Press **ESC** or click **"✕ CLOSE"** to return to editing

### Step 6: Download Your Website

When you're happy with your creation:

1. Click the **"↓ DOWNLOAD"** button
2. Enter your **project name** (e.g., "my-awesome-website")
3. A ZIP file will download containing your **complete, runnable project**

---

## What You Get When You Download

Your downloaded ZIP file includes:

```
my-awesome-website/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Entry point
│   ├── index.css            # Base styles
│   └── Sections/            # All your selected components
├── public/                   # Static assets
├── package.json             # Project dependencies
├── vite.config.js           # Build configuration
├── tailwind.config.js       # Tailwind CSS config
├── eslint.config.js         # Code linting rules
├── index.html               # HTML template
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
└── project-config.json      # Your builder configuration
```

---

## Running Your Downloaded Website

### Quick Start

1. **Extract the ZIP file**
   ```bash
   unzip my-awesome-website.zip
   cd my-awesome-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   - The terminal will show: `Local: http://localhost:5173`
   - Click the link or paste it in your browser

5. **Build for production**
   ```bash
   npm run build
   ```

This creates an optimized `dist/` folder ready to deploy!

---

## Advanced Features

### Undo/Redo

- **Undo**: Available when you make changes
- **Redo**: Available after undoing
- State is tracked automatically!

### Search Components

- Use the **search box** in the left sidebar
- Filter by component name or category
- Great for finding specific layouts fast!

### Component Selection

- **Green with ✓**: Currently selected
- **Grayed out**: Already added to your design
- **Active state**: Shows on component cards

### Multiple Sections

You can now combine **multiple sections** in one website:
- Navbar + Hero + Features + Pricing + Footer
- Mix and match any combination!
- Reorder them however you want!

---

## Tips & Best Practices

### 1. Start Simple
- Begin with a Navbar, Hero, and Footer
- Add Features and Pricing later
- Build gradually!

### 2. Test Responsiveness
- Always preview on Mobile and Tablet views
- Ensure your content looks good on all sizes

### 3. Keep Content Concise
- Shorter headlines work better
- Use bullet points effectively
- Mobile users need clarity

### 4. Use Consistent Branding
- Pick one accent color
- Use consistent font throughout
- Maintain design cohesion

### 5. Backup Your Work
- Download your project frequently
- Keep versions as you iterate
- Use Git for version control

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `ESC` | Close preview modal |
| `Ctrl/Cmd + Z` | Undo (coming soon) |
| `Ctrl/Cmd + Shift + Z` | Redo (coming soon) |

---

## Troubleshooting

### Components Not Appearing
- Make sure you've **selected** them from the sidebar
- Check the "SELECTED" panel - it should list your components

### Preview Looks Different
- Try different viewport sizes (Mobile/Tablet/Desktop)
- Check your design settings (colors, fonts)
- Zoom in/out in your browser if needed

### Download Issues
- Make sure you have **at least one component** selected
- Try a different browser if it fails
- Check your downloads folder

### npm install Fails
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again
- Make sure you have Node.js 16+ installed

---

## Customizing Downloaded Projects

Once you download your project, you can:

1. **Edit Components**: Modify `/src/Sections/` files
2. **Add More Sections**: Copy existing components and modify
3. **Install Dependencies**: Add React packages with `npm install`
4. **Deploy**: Use Vercel, Netlify, GitHub Pages, etc.
5. **Version Control**: Initialize Git: `git init`

---

## Supported Browsers

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## Performance Tips

- The builder optimizes exports automatically
- Uses **Vite** for fast development
- **Tailwind CSS** for minimal bundle size
- Components are **tree-shakeable**

---

## Need Help?

- **Check Component Previews**: Hover over components to see what they include
- **Try Different Styles**: Each category has 3-4 style options
- **Experiment**: Make changes and preview immediately!
- **Read Defaults**: Default values show example content

---

## What's Next?

After downloading:

1. **Customize Colors**: Match your brand
2. **Update Content**: Replace with your actual text
3. **Add Images**: Modify components to include your images
4. **Deploy**: Push to production using your favorite platform
5. **Scale**: Add more pages and features as needed!

---

**Happy Building! 🚀**

This tool makes web design accessible to everyone. No coding required!
