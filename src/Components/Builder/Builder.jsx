import { useBuilder } from "../../Context/BuilderContext";
import { useNavigate } from "react-router-dom";
import JSZip from "jszip";
import SideBar from "./SideBar";
import Editor from "./Editor";
import DesignPanel from "./DesignPanel";
import PreviewModal from "./PreviewModal";
import {
    generatePackageJson,
    generateViteConfig,
    generateTailwindConfig,
    generatePostCssConfig,
    generateIndexHtml,
    generateMainJsx,
    generateIndexCss,
    generateAppJsx,
    generateAppCss,
    generateEslintConfig,
    generateGitignore,
    generateReadme,
    generateJsonConfig,
} from "../../lib/projectGenerator";

// ── Raw source imports (Vite ?raw) ────────────────────────────────────────────
import navbar1Source   from "../../Sections/Generic/Navbars/Navbar1.jsx?raw";
import navbar2Source   from "../../Sections/Generic/Navbars/Navbar2.jsx?raw";
import navbar3Source   from "../../Sections/Generic/Navbars/Navbar3.jsx?raw";
import hero1Source     from "../../Sections/Generic/Heros/Hero1.jsx?raw";
import hero2Source     from "../../Sections/Generic/Heros/Hero2.jsx?raw";
import hero3Source     from "../../Sections/Generic/Heros/Hero3.jsx?raw";
import features1Source from "../../Sections/Generic/Features/Features1.jsx?raw";
import features2Source from "../../Sections/Generic/Features/Features2.jsx?raw";
import features3Source from "../../Sections/Generic/Features/Features3.jsx?raw";
import pricing1Source  from "../../Sections/Generic/Pricing/Pricing1.jsx?raw";
import pricing2Source  from "../../Sections/Generic/Pricing/Pricing2.jsx?raw";
import pricing3Source  from "../../Sections/Generic/Pricing/Pricing3.jsx?raw";
import workPage1Source from "../../Sections/Generic/Pages/WorkPage1.jsx?raw";
import workPage2Source from "../../Sections/Generic/Pages/WorkPage2.jsx?raw";
import workPage3Source from "../../Sections/Generic/Pages/WorkPage3.jsx?raw";
import workPage4Source from "../../Sections/Generic/Pages/WorkPage4.jsx?raw";
import footer1Source   from "../../Sections/Generic/Footers/Footer1.jsx?raw";
import footer2Source   from "../../Sections/Generic/Footers/Footer2.jsx?raw";
import footer3Source   from "../../Sections/Generic/Footers/Footer3.jsx?raw";

// Portfolio imports
import portfolioNavbar1Source from "../../Sections/Portfolio/Navbar/Navbar1.jsx?raw";
import portfolioNavbar2Source from "../../Sections/Portfolio/Navbar/Navbar2.jsx?raw";
import portfolioNavbar3Source from "../../Sections/Portfolio/Navbar/Navbar3.jsx?raw";
import portfolioHero1Source from "../../Sections/Portfolio/Hero/Hero1.jsx?raw";
import portfolioHero2Source from "../../Sections/Portfolio/Hero/Hero2.jsx?raw";
import portfolioHero3Source from "../../Sections/Portfolio/Hero/Hero3.jsx?raw";
import portfolioProjects1Source from "../../Sections/Portfolio/Projects/Projects1.jsx?raw";
import portfolioProjects2Source from "../../Sections/Portfolio/Projects/Projects2.jsx?raw";
import portfolioProjects3Source from "../../Sections/Portfolio/Projects/Projects3.jsx?raw";
import portfolioSkills1Source from "../../Sections/Portfolio/Skills/Skills1.jsx?raw";
import portfolioSkills2Source from "../../Sections/Portfolio/Skills/Skills2.jsx?raw";
import portfolioSkills3Source from "../../Sections/Portfolio/Skills/Skills3.jsx?raw";
import portfolioFooter1Source from "../../Sections/Portfolio/Footer/Footer1.jsx?raw";
import portfolioFooter2Source from "../../Sections/Portfolio/Footer/Footer2.jsx?raw";
import portfolioFooter3Source from "../../Sections/Portfolio/Footer/Footer3.jsx?raw";
import portfolioTemplate1Source from "../../Sections/Portfolio/Pages/PortfolioTemplate1.jsx?raw";
import portfolioTemplate2Source from "../../Sections/Portfolio/Pages/PortfolioTemplate2.jsx?raw";
import portfolioTemplate3Source from "../../Sections/Portfolio/Pages/PortfolioTemplate3.jsx?raw";
import portfolioTemplate4Source from "../../Sections/Portfolio/Pages/PortfolioTemplate4.jsx?raw";

const SOURCE_MAP = {
    // Generic sections
    navbar1:   { filePath: "src/Sections/Generic/Navbars/Navbar1.jsx",    source: navbar1Source, title: "Navbar 1" },
    navbar2:   { filePath: "src/Sections/Generic/Navbars/Navbar2.jsx",    source: navbar2Source, title: "Navbar 2" },
    navbar3:   { filePath: "src/Sections/Generic/Navbars/Navbar3.jsx",    source: navbar3Source, title: "Navbar 3" },
    hero1:     { filePath: "src/Sections/Generic/Heros/Hero1.jsx",        source: hero1Source, title: "Hero 1" },
    hero2:     { filePath: "src/Sections/Generic/Heros/Hero2.jsx",        source: hero2Source, title: "Hero 2" },
    hero3:     { filePath: "src/Sections/Generic/Heros/Hero3.jsx",        source: hero3Source, title: "Hero 3" },
    features1: { filePath: "src/Sections/Generic/Features/Features1.jsx", source: features1Source, title: "Features 1" },
    features2: { filePath: "src/Sections/Generic/Features/Features2.jsx", source: features2Source, title: "Features 2" },
    features3: { filePath: "src/Sections/Generic/Features/Features3.jsx", source: features3Source, title: "Features 3" },
    pricing1:  { filePath: "src/Sections/Generic/Pricing/Pricing1.jsx",   source: pricing1Source, title: "Pricing 1" },
    pricing2:  { filePath: "src/Sections/Generic/Pricing/Pricing2.jsx",   source: pricing2Source, title: "Pricing 2" },
    pricing3:  { filePath: "src/Sections/Generic/Pricing/Pricing3.jsx",   source: pricing3Source, title: "Pricing 3" },
    workpage1: { filePath: "src/Sections/Generic/Pages/WorkPage1.jsx",    source: workPage1Source, title: "Work Page 1" },
    workpage2: { filePath: "src/Sections/Generic/Pages/WorkPage2.jsx",    source: workPage2Source, title: "Work Page 2" },
    workpage3: { filePath: "src/Sections/Generic/Pages/WorkPage3.jsx",    source: workPage3Source, title: "Work Page 3" },
    workpage4: { filePath: "src/Sections/Generic/Pages/WorkPage4.jsx",    source: workPage4Source, title: "Work Page 4" },
    footer1:   { filePath: "src/Sections/Generic/Footers/Footer1.jsx",    source: footer1Source, title: "Footer 1" },
    footer2:   { filePath: "src/Sections/Generic/Footers/Footer2.jsx",    source: footer2Source, title: "Footer 2" },
    footer3:   { filePath: "src/Sections/Generic/Footers/Footer3.jsx",    source: footer3Source, title: "Footer 3" },
    
    // Portfolio sections
    "portfolio-navbar1": { filePath: "src/Sections/Portfolio/Navbar/Navbar1.jsx", source: portfolioNavbar1Source, title: "Portfolio Navbar 1" },
    "portfolio-navbar2": { filePath: "src/Sections/Portfolio/Navbar/Navbar2.jsx", source: portfolioNavbar2Source, title: "Portfolio Navbar 2" },
    "portfolio-navbar3": { filePath: "src/Sections/Portfolio/Navbar/Navbar3.jsx", source: portfolioNavbar3Source, title: "Portfolio Navbar 3" },
    "portfolio-hero1":   { filePath: "src/Sections/Portfolio/Hero/Hero1.jsx", source: portfolioHero1Source, title: "Portfolio Hero 1" },
    "portfolio-hero2":   { filePath: "src/Sections/Portfolio/Hero/Hero2.jsx", source: portfolioHero2Source, title: "Portfolio Hero 2" },
    "portfolio-hero3":   { filePath: "src/Sections/Portfolio/Hero/Hero3.jsx", source: portfolioHero3Source, title: "Portfolio Hero 3" },
    "portfolio-projects1": { filePath: "src/Sections/Portfolio/Projects/Projects1.jsx", source: portfolioProjects1Source, title: "Portfolio Projects 1" },
    "portfolio-projects2": { filePath: "src/Sections/Portfolio/Projects/Projects2.jsx", source: portfolioProjects2Source, title: "Portfolio Projects 2" },
    "portfolio-projects3": { filePath: "src/Sections/Portfolio/Projects/Projects3.jsx", source: portfolioProjects3Source, title: "Portfolio Projects 3" },
    "portfolio-skills1": { filePath: "src/Sections/Portfolio/Skills/Skills1.jsx", source: portfolioSkills1Source, title: "Portfolio Skills 1" },
    "portfolio-skills2": { filePath: "src/Sections/Portfolio/Skills/Skills2.jsx", source: portfolioSkills2Source, title: "Portfolio Skills 2" },
    "portfolio-skills3": { filePath: "src/Sections/Portfolio/Skills/Skills3.jsx", source: portfolioSkills3Source, title: "Portfolio Skills 3" },
    "portfolio-footer1": { filePath: "src/Sections/Portfolio/Footer/Footer1.jsx", source: portfolioFooter1Source, title: "Portfolio Footer 1" },
    "portfolio-footer2": { filePath: "src/Sections/Portfolio/Footer/Footer2.jsx", source: portfolioFooter2Source, title: "Portfolio Footer 2" },
    "portfolio-footer3": { filePath: "src/Sections/Portfolio/Footer/Footer3.jsx", source: portfolioFooter3Source, title: "Portfolio Footer 3" },
    "portfolio-template1": { filePath: "src/Sections/Portfolio/Pages/PortfolioTemplate1.jsx", source: portfolioTemplate1Source, title: "Portfolio Template 1" },
    "portfolio-template2": { filePath: "src/Sections/Portfolio/Pages/PortfolioTemplate2.jsx", source: portfolioTemplate2Source, title: "Portfolio Template 2" },
    "portfolio-template3": { filePath: "src/Sections/Portfolio/Pages/PortfolioTemplate3.jsx", source: portfolioTemplate3Source, title: "Portfolio Template 3" },
    "portfolio-template4": { filePath: "src/Sections/Portfolio/Pages/PortfolioTemplate4.jsx", source: portfolioTemplate4Source, title: "Portfolio Template 4" },
};

export default function Builder({ platform = "generic" }) {
    const navigate = useNavigate();
    const {
        resetTemplate,
        selectedSections,
        designSettings,
        checklistItems,
        openPreview,
    } = useBuilder();

    const downloadTemplate = async () => {
        if (selectedSections.length === 0) {
            alert("❌ Add at least one section before downloading.");
            return;
        }

        try {
            const projectName = prompt("📝 Project Name:", "my-website") || "my-website";
            const zip = new JSZip();

            // Prepare sections data with file paths
            const sectionsWithPaths = selectedSections.map((section) => {
                const entry = SOURCE_MAP[section.id];
                return {
                    ...section,
                    filePath: entry?.filePath || "",
                };
            });

            // 1. Create src folder structure
            const srcFolder = zip.folder("src");
            
            // 1a. Add section files
            selectedSections.forEach((section) => {
                const entry = SOURCE_MAP[section.id];
                if (!entry) return;
                
                // Create nested folder structure
                const pathParts = entry.filePath.split("/");
                let currentFolder = srcFolder;
                
                for (let i = 0; i < pathParts.length - 1; i++) {
                    currentFolder = currentFolder.folder(pathParts[i]);
                }
                
                currentFolder.file(pathParts[pathParts.length - 1], entry.source);
            });

            // 1b. Add main application files
            srcFolder.file("main.jsx", generateMainJsx());
            srcFolder.file("index.css", generateIndexCss());
            srcFolder.file("App.css", generateAppCss());
            srcFolder.file("App.jsx", generateAppJsx(sectionsWithPaths, designSettings));

            // 2. Create public folder
            zip.folder("public");

            // 3. Create root configuration files
            zip.file("package.json", JSON.stringify(generatePackageJson(projectName), null, 2));
            zip.file("vite.config.js", generateViteConfig());
            zip.file("tailwind.config.js", generateTailwindConfig());
            zip.file("postcss.config.js", generatePostCssConfig());
            zip.file("eslint.config.js", generateEslintConfig());
            zip.file("index.html", generateIndexHtml(projectName));

            // 4. Add configuration and documentation
            zip.file(".gitignore", generateGitignore());
            zip.file("README.md", generateReadme(projectName, selectedSections));
            zip.file("project-config.json", JSON.stringify(
                generateJsonConfig(selectedSections, designSettings, projectName),
                null,
                2
            ));

            // 5. Generate and download zip
            const blob = await zip.generateAsync({ type: "blob" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${projectName}-webapp.zip`;
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            alert("✅ Project downloaded successfully!\n\n📚 Next steps:\n1. Extract the ZIP file\n2. Run: npm install\n3. Run: npm run dev\n4. Open the URL shown in terminal");
        } catch (error) {
            console.error("Download error:", error);
            alert("❌ Error downloading project. Check console for details.");
        }
    };

    const completedCount = checklistItems.filter((i) => i.completed).length;
    const completionPct  = Math.round((completedCount / checklistItems.length) * 100);

    return (
        <>
            {/* ── PREVIEW MODAL (portal-like, renders above everything) ── */}
            <PreviewModal />

            <main className="h-screen w-screen overflow-hidden flex flex-col bg-[#080808] text-white selection:bg-cyan-500/20 selection:text-cyan-200">

                {/* ── AMBIENT BACKGROUND ───────────────────────────────── */}
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-cyan-950/20 blur-[180px]" />
                    <div className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-950/15 blur-[180px]" />
                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{ backgroundImage: "radial-gradient(#00e5ff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
                    />
                </div>

                {/* ── HEADER ───────────────────────────────────────────── */}
                <header className="relative z-30 h-14 shrink-0 border-b border-cyan-900/50 bg-black/70 backdrop-blur-xl px-5 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        {/* Back Button */}
                        <button
                            onClick={() => navigate("/builder")}
                            className="flex items-center justify-center w-8 h-8 rounded border border-cyan-700/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
                            title="Back to Platform Selection"
                            aria-label="Back to platform selection"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="flex items-center gap-2.5">
                            <div className="relative flex items-center justify-center w-7 h-7">
                                <div className="absolute inset-0 border border-cyan-500/60 rotate-45" />
                                <div className="w-2 h-2 bg-cyan-400 rotate-45 shadow-[0_0_12px_rgba(0,229,255,0.9)]" />
                            </div>
                            <span className="text-[13px] tracking-[0.25em] text-cyan-400 font-mono font-bold">
                                SYS.BUILDER
                            </span>
                        </div>

                        {/* Platform Badge */}
                        <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded bg-slate-800/50 border border-slate-700/50">
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Platform:</span>
                            <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                                {platform}
                            </span>
                        </div>

                        {/* Completion bar */}
                        <div className="hidden md:flex items-center gap-3">
                            <div className="h-px w-px bg-cyan-900/60 mx-1" />
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-1 bg-cyan-950 overflow-hidden">
                                    <div
                                        className="h-full bg-cyan-400 transition-all duration-700"
                                        style={{ width: `${completionPct}%` }}
                                    />
                                </div>
                                <span className="text-[10px] text-cyan-600 font-mono tracking-wider">{completionPct}%</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Module count */}
                        <div className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-cyan-500 bg-cyan-950/40 px-3 py-1.5 border border-cyan-900/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            {selectedSections.length === 0 
                                ? "0 COMPONENTS" 
                                : `${selectedSections.length} ${selectedSections.length === 1 ? "COMPONENT" : "COMPONENTS"}`}
                        </div>

                        {/* ── PREVIEW BUTTON (PROMINENT) ── */}
                        <button
                            onClick={openPreview}
                            disabled={selectedSections.length === 0}
                            aria-label="Open live preview"
                            className="group relative text-[11px] tracking-widest font-mono font-bold border-2 border-purple-600/80 bg-gradient-to-r from-purple-900 to-purple-800 text-purple-100 px-5 py-2 hover:from-purple-700 hover:to-purple-600 hover:text-white hover:border-purple-400 transition-all duration-200 uppercase disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/30 overflow-hidden"
                        >
                            <span className="relative z-10">▶ PREVIEW</span>
                        </button>

                        <button
                            onClick={downloadTemplate}
                            aria-label="Download component"
                            className="group relative text-[11px] tracking-widest font-mono font-bold border border-green-800/60 bg-green-950/20 text-green-400 px-5 py-2 hover:bg-green-600 hover:text-black hover:border-green-400 transition-all duration-200 uppercase overflow-hidden shadow-lg hover:shadow-green-500/20"
                        >
                            <span className="relative z-10">↓ DOWNLOAD</span>
                        </button>

                        <button
                            onClick={resetTemplate}
                            aria-label="Clear all changes"
                            className="text-[11px] tracking-widest font-mono font-bold border border-red-900/50 bg-red-950/20 text-red-500 px-5 py-2 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-200 uppercase shadow-lg hover:shadow-red-500/20"
                        >
                            ⟲ RESET
                        </button>
                    </div>
                </header>

                {/* ── WORKSPACE ────────────────────────────────────────── */}
                <div className="flex-1 min-h-0 flex overflow-hidden relative z-10">
                    <SideBar />
                    <Editor />
                    <DesignPanel />
                </div>
            </main>
        </>
    );
}
