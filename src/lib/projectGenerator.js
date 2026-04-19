/**
 * Project Generator - Creates complete, standalone project files for download
 * Generates all necessary files to make a runnable web project
 */

export function generatePackageJson(projectName = "my-website", projectDescription = "Built with Webpage Builder") {
    return {
        name: projectName.toLowerCase().replace(/\s+/g, "-"),
        version: "1.0.0",
        description: projectDescription,
        private: true,
        type: "module",
        scripts: {
            dev: "vite",
            build: "vite build",
            preview: "vite preview",
            lint: "eslint ."
        },
        dependencies: {
            "@headlessui/react": "^2.2.9",
            "@heroicons/react": "^2.2.0",
            "class-variance-authority": "^0.7.1",
            "clsx": "^2.1.1",
            "react": "^19.2.0",
            "react-dom": "^19.2.0",
            "react-router-dom": "^7.13.2",
            "tailwind-merge": "^3.5.0"
        },
        devDependencies: {
            "@eslint/js": "^9.39.1",
            "@tailwindcss/vite": "^4.2.1",
            "@vitejs/plugin-react": "^5.1.1",
            "eslint": "^9.39.1",
            "eslint-plugin-react-hooks": "^7.0.1",
            "eslint-plugin-react-refresh": "^0.4.24",
            "tailwindcss": "^4.2.1",
            "vite": "^8.0.0-beta.13"
        },
        overrides: {
            vite: "^8.0.0-beta.13"
        }
    };
}

export function generateViteConfig() {
    return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
`;
}

export function generateTailwindConfig() {
    return `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;
}

export function generatePostCssConfig() {
    return `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;
}

export function generateIndexHtml(projectName = "My Website") {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
}

export function generateMainJsx() {
    return `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;
}

export function generateIndexCss() {
    return `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
  height: 100%;
  width: 100%;
}
`;
}

export function generateAppJsx(sections, designSettings = {}) {
    const {
        bgMode = "solid",
        bgColor = "#020202",
        bgGradient = "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
        textColor = "#ffffff",
        fontFamily = "sans",
    } = designSettings;

    const bgStyle = bgMode === "gradient" 
        ? `linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)`
        : bgColor;

    const importStatements = sections
        .map((section, idx) => {
            const componentPath = section.filePath
                .replace("src/", "./")
                .replace(".jsx", "");
            return `import Section${idx} from "${componentPath}"`;
        })
        .join("\n");

    const componentRenders = sections
        .map((section, idx) => `        <Section${idx} />`)
        .join("\n");

    return `import './App.css'
${importStatements}

export default function App() {
  return (
    <div className="w-full" style={{
      background: \`${bgStyle}\`,
      color: '${textColor}',
      fontFamily: '${fontFamily}'
    }}>
${componentRenders}
    </div>
  )
}
`;
}

export function generateAppCss() {
    return `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: inherit;
  color: inherit;
}

html, body, #root {
  width: 100%;
  height: 100%;
}

#root {
  width: 100%;
}

/* Utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  width: 100%;
  padding: 4rem 0;
}

.section-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;
}

export function generateEslintConfig() {
    return `import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
`;
}

export function generateGitignore() {
    return `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment
.env
.env.local
.env.*.local
`;
}

export function generateReadme(projectName = "My Website", sections = []) {
    const sectionsDesc = sections
        .map(s => `- ${s.title}`)
        .join("\n");

    return `# ${projectName}

Generated with [Webpage Builder](https://example.com)

## Project Structure

\`\`\`
${projectName}/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
\`\`\`

## Sections Included

${sectionsDesc}

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`

## Customization

Edit the component files in the \`src/\` directory to customize your website.

## Technologies

- React 19
- Vite
- Tailwind CSS
- React Router

## License

MIT
`;
}

export function generateJsonConfig(sections, designSettings, projectName = "my-website") {
    return {
        projectName,
        version: "1.0.0",
        createdAt: new Date().toISOString(),
        designSettings,
        sections: sections.map(section => ({
            id: section.id,
            title: section.title,
            group: section.group,
            content: section.content || {},
        })),
    };
}
