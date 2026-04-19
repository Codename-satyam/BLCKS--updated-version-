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
import navbar4Source   from "../../Sections/Generic/Navbars/Navbar4.jsx?raw";
import navbar5Source   from "../../Sections/Generic/Navbars/Navbar5.jsx?raw";
import navbar6Source   from "../../Sections/Generic/Navbars/Navbar6.jsx?raw";
import hero1Source     from "../../Sections/Generic/Heros/Hero1.jsx?raw";
import hero2Source     from "../../Sections/Generic/Heros/Hero2.jsx?raw";
import hero3Source     from "../../Sections/Generic/Heros/Hero3.jsx?raw";
import hero4Source     from "../../Sections/Generic/Heros/Hero4.jsx?raw";
import hero5Source     from "../../Sections/Generic/Heros/Hero5.jsx?raw";
import features1Source from "../../Sections/Generic/Features/Features1.jsx?raw";
import features2Source from "../../Sections/Generic/Features/Features2.jsx?raw";
import features3Source from "../../Sections/Generic/Features/Features3.jsx?raw";
import pricing1Source  from "../../Sections/Generic/Pricing/Pricing1.jsx?raw";
import pricing2Source  from "../../Sections/Generic/Pricing/Pricing2.jsx?raw";
import pricing3Source  from "../../Sections/Generic/Pricing/Pricing3.jsx?raw";
import pricing4Source  from "../../Sections/Generic/Pricing/Pricing4.jsx?raw";
import workPage1Source from "../../Sections/Generic/Pages/WorkPage1.jsx?raw";
import workPage2Source from "../../Sections/Generic/Pages/WorkPage2.jsx?raw";
import workPage3Source from "../../Sections/Generic/Pages/WorkPage3.jsx?raw";
import workPage4Source from "../../Sections/Generic/Pages/WorkPage4.jsx?raw";
import workPage5Source from "../../Sections/Generic/Pages/WorkPage5.jsx?raw";
import workPage6Source from "../../Sections/Generic/Pages/WorkPage6.jsx?raw";
import footer1Source   from "../../Sections/Generic/Footers/Footer1.jsx?raw";
import footer2Source   from "../../Sections/Generic/Footers/Footer2.jsx?raw";
import footer3Source   from "../../Sections/Generic/Footers/Footer3.jsx?raw";
import testimonials1Source from "../../Sections/Generic/Testimonials/Testimonials1.jsx?raw";
import testimonials2Source from "../../Sections/Generic/Testimonials/Testimonials2.jsx?raw";
import testimonials3Source from "../../Sections/Generic/Testimonials/Testimonials3.jsx?raw";
import cta1Source      from "../../Sections/Generic/CTA/CTA1.jsx?raw";
import cta2Source      from "../../Sections/Generic/CTA/CTA2.jsx?raw";
import cta3Source      from "../../Sections/Generic/CTA/CTA3.jsx?raw";
import stats1Source    from "../../Sections/Generic/Stats/Stats1.jsx?raw";
import stats2Source    from "../../Sections/Generic/Stats/Stats2.jsx?raw";
import stats3Source    from "../../Sections/Generic/Stats/Stats3.jsx?raw";
import gallery1Source  from "../../Sections/Generic/Gallery/Gallery1.jsx?raw";
import gallery2Source  from "../../Sections/Generic/Gallery/Gallery2.jsx?raw";
import gallery3Source  from "../../Sections/Generic/Gallery/Gallery3.jsx?raw";
import faq1Source      from "../../Sections/Generic/FAQ/FAQ1.jsx?raw";
import faq2Source      from "../../Sections/Generic/FAQ/FAQ2.jsx?raw";
import faq3Source      from "../../Sections/Generic/FAQ/FAQ3.jsx?raw";
import newsletter1Source from "../../Sections/Generic/Newsletter/Newsletter1.jsx?raw";
import newsletter2Source from "../../Sections/Generic/Newsletter/Newsletter2.jsx?raw";
import newsletter3Source from "../../Sections/Generic/Newsletter/Newsletter3.jsx?raw";
import timeline1Source from "../../Sections/Generic/Timeline/Timeline1.jsx?raw";
import timeline2Source from "../../Sections/Generic/Timeline/Timeline2.jsx?raw";
import timeline3Source from "../../Sections/Generic/Timeline/Timeline3.jsx?raw";
import comparison1Source from "../../Sections/Generic/Comparison/Comparison1.jsx?raw";
import comparison2Source from "../../Sections/Generic/Comparison/Comparison2.jsx?raw";
import comparison3Source from "../../Sections/Generic/Comparison/Comparison3.jsx?raw";

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
    navbar4:   { filePath: "src/Sections/Generic/Navbars/Navbar4.jsx",    source: navbar4Source, title: "Navbar 4" },
    navbar5:   { filePath: "src/Sections/Generic/Navbars/Navbar5.jsx",    source: navbar5Source, title: "Navbar 5" },
    navbar6:   { filePath: "src/Sections/Generic/Navbars/Navbar6.jsx",    source: navbar6Source, title: "Navbar 6" },
    hero1:     { filePath: "src/Sections/Generic/Heros/Hero1.jsx",        source: hero1Source, title: "Hero 1" },
    hero2:     { filePath: "src/Sections/Generic/Heros/Hero2.jsx",        source: hero2Source, title: "Hero 2" },
    hero3:     { filePath: "src/Sections/Generic/Heros/Hero3.jsx",        source: hero3Source, title: "Hero 3" },
    hero4:     { filePath: "src/Sections/Generic/Heros/Hero4.jsx",        source: hero4Source, title: "Hero 4" },
    hero5:     { filePath: "src/Sections/Generic/Heros/Hero5.jsx",        source: hero5Source, title: "Hero 5" },
    features1: { filePath: "src/Sections/Generic/Features/Features1.jsx", source: features1Source, title: "Features 1" },
    features2: { filePath: "src/Sections/Generic/Features/Features2.jsx", source: features2Source, title: "Features 2" },
    features3: { filePath: "src/Sections/Generic/Features/Features3.jsx", source: features3Source, title: "Features 3" },
    pricing1:  { filePath: "src/Sections/Generic/Pricing/Pricing1.jsx",   source: pricing1Source, title: "Pricing 1" },
    pricing2:  { filePath: "src/Sections/Generic/Pricing/Pricing2.jsx",   source: pricing2Source, title: "Pricing 2" },
    pricing3:  { filePath: "src/Sections/Generic/Pricing/Pricing3.jsx",   source: pricing3Source, title: "Pricing 3" },
    pricing4:  { filePath: "src/Sections/Generic/Pricing/Pricing4.jsx",   source: pricing4Source, title: "Pricing 4" },
    workpage1: { filePath: "src/Sections/Generic/Pages/WorkPage1.jsx",    source: workPage1Source, title: "Work Page 1" },
    workpage2: { filePath: "src/Sections/Generic/Pages/WorkPage2.jsx",    source: workPage2Source, title: "Work Page 2" },
    workpage3: { filePath: "src/Sections/Generic/Pages/WorkPage3.jsx",    source: workPage3Source, title: "Work Page 3" },
    workpage4: { filePath: "src/Sections/Generic/Pages/WorkPage4.jsx",    source: workPage4Source, title: "Work Page 4" },
    workpage5: { filePath: "src/Sections/Generic/Pages/WorkPage5.jsx",    source: workPage5Source, title: "Work Page 5" },
    workpage6: { filePath: "src/Sections/Generic/Pages/WorkPage6.jsx",    source: workPage6Source, title: "Work Page 6" },
    footer1:   { filePath: "src/Sections/Generic/Footers/Footer1.jsx",    source: footer1Source, title: "Footer 1" },
    footer2:   { filePath: "src/Sections/Generic/Footers/Footer2.jsx",    source: footer2Source, title: "Footer 2" },
    footer3:   { filePath: "src/Sections/Generic/Footers/Footer3.jsx",    source: footer3Source, title: "Footer 3" },
    
    // New sections
    testimonials1: { filePath: "src/Sections/Generic/Testimonials/Testimonials1.jsx", source: testimonials1Source, title: "Testimonials 1" },
    testimonials2: { filePath: "src/Sections/Generic/Testimonials/Testimonials2.jsx", source: testimonials2Source, title: "Testimonials 2" },
    testimonials3: { filePath: "src/Sections/Generic/Testimonials/Testimonials3.jsx", source: testimonials3Source, title: "Testimonials 3" },
    cta1:      { filePath: "src/Sections/Generic/CTA/CTA1.jsx",      source: cta1Source, title: "CTA 1" },
    cta2:      { filePath: "src/Sections/Generic/CTA/CTA2.jsx",      source: cta2Source, title: "CTA 2" },
    cta3:      { filePath: "src/Sections/Generic/CTA/CTA3.jsx",      source: cta3Source, title: "CTA 3" },
    stats1:    { filePath: "src/Sections/Generic/Stats/Stats1.jsx",    source: stats1Source, title: "Stats 1" },
    stats2:    { filePath: "src/Sections/Generic/Stats/Stats2.jsx",    source: stats2Source, title: "Stats 2" },
    stats3:    { filePath: "src/Sections/Generic/Stats/Stats3.jsx",    source: stats3Source, title: "Stats 3" },
    gallery1:  { filePath: "src/Sections/Generic/Gallery/Gallery1.jsx",  source: gallery1Source, title: "Gallery 1" },
    gallery2:  { filePath: "src/Sections/Generic/Gallery/Gallery2.jsx",  source: gallery2Source, title: "Gallery 2" },
    gallery3:  { filePath: "src/Sections/Generic/Gallery/Gallery3.jsx",  source: gallery3Source, title: "Gallery 3" },
    faq1:      { filePath: "src/Sections/Generic/FAQ/FAQ1.jsx",      source: faq1Source, title: "FAQ 1" },
    faq2:      { filePath: "src/Sections/Generic/FAQ/FAQ2.jsx",      source: faq2Source, title: "FAQ 2" },
    faq3:      { filePath: "src/Sections/Generic/FAQ/FAQ3.jsx",      source: faq3Source, title: "FAQ 3" },
    newsletter1: { filePath: "src/Sections/Generic/Newsletter/Newsletter1.jsx", source: newsletter1Source, title: "Newsletter 1" },
    newsletter2: { filePath: "src/Sections/Generic/Newsletter/Newsletter2.jsx", source: newsletter2Source, title: "Newsletter 2" },
    newsletter3: { filePath: "src/Sections/Generic/Newsletter/Newsletter3.jsx", source: newsletter3Source, title: "Newsletter 3" },
    timeline1: { filePath: "src/Sections/Generic/Timeline/Timeline1.jsx", source: timeline1Source, title: "Timeline 1" },
    timeline2: { filePath: "src/Sections/Generic/Timeline/Timeline2.jsx", source: timeline2Source, title: "Timeline 2" },
    timeline3: { filePath: "src/Sections/Generic/Timeline/Timeline3.jsx", source: timeline3Source, title: "Timeline 3" },
    comparison1: { filePath: "src/Sections/Generic/Comparison/Comparison1.jsx", source: comparison1Source, title: "Comparison 1" },
    comparison2: { filePath: "src/Sections/Generic/Comparison/Comparison2.jsx", source: comparison2Source, title: "Comparison 2" },
    comparison3: { filePath: "src/Sections/Generic/Comparison/Comparison3.jsx", source: comparison3Source, title: "Comparison 3" },
    
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
            {/* ── PREVIEW MODAL ── */}
            <PreviewModal />

            <main className="h-screen w-screen overflow-hidden flex flex-col bg-black text-white selection:bg-lime-400 selection:text-black font-mono">

                {/* ── BRUTALIST BACKGROUND GRID ──────────────────────── */}
                <div 
                    className="fixed inset-0 pointer-events-none z-0 opacity-20"
                    style={{ 
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", 
                        backgroundSize: "40px 40px" 
                    }} 
                />

                {/* ── HEADER ───────────────────────────────────────────── */}
                <header className="relative z-30 h-16 shrink-0 border-b-4 border-white bg-black px-4 md:px-6 flex items-center justify-between">
                    
                    <div className="flex items-center gap-4 md:gap-6 h-full py-3">
                        {/* Back Button */}
                        <button
                            onClick={() => navigate("/builder")}
                            className="flex items-center justify-center w-10 h-10 border-2 border-white bg-black text-white transition-all hover:bg-white hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_white] hover:shadow-none"
                            title="Back to Platform Selection"
                            aria-label="Back to platform selection"
                        >
                            <svg className="w-5 h-5 font-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="hidden md:flex items-center h-full border-r-4 border-white pr-6">
                            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                                SYS<span className="text-lime-400">.BUILDER</span>
                            </span>
                        </div>

                        {/* Platform Badge */}
                        <div className="hidden lg:flex items-center px-3 py-1 border-2 border-white bg-white text-black font-black uppercase text-xs tracking-widest shadow-[4px_4px_0px_0px_#a3e635]">
                            {platform}
                        </div>

                        {/* Completion Bar */}
                        <div className="hidden xl:flex items-center gap-3">
                            <div className="w-32 h-6 border-2 border-white bg-black p-0.5 flex">
                                <div
                                    className="h-full bg-lime-400 transition-all duration-150"
                                    style={{ width: `${completionPct}%` }}
                                />
                            </div>
                            <span className="text-sm font-black text-lime-400 tracking-widest">{completionPct}%</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Module count */}
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border-2 border-white bg-black text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_white]">
                            <div className="w-2 h-2 bg-lime-400" />
                            {selectedSections.length} COMPS
                        </div>

                        {/* PREVIEW BUTTON */}
                        <button
                            onClick={openPreview}
                            disabled={selectedSections.length === 0}
                            aria-label="Open live preview"
                            className="group flex items-center gap-2 border-2 border-fuchsia-500 bg-black text-fuchsia-500 px-4 py-2 font-black uppercase tracking-widest transition-all hover:bg-fuchsia-500 hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_#d946ef] hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_#d946ef] disabled:hover:bg-black disabled:hover:text-fuchsia-500"
                        >
                            ▶ <span className="hidden sm:inline">PREVIEW</span>
                        </button>

                        {/* DOWNLOAD BUTTON */}
                        <button
                            onClick={downloadTemplate}
                            aria-label="Download component"
                            className="group flex items-center gap-2 border-2 border-lime-400 bg-black text-lime-400 px-4 py-2 font-black uppercase tracking-widest transition-all hover:bg-lime-400 hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_#a3e635] hover:shadow-none"
                        >
                            ↓ <span className="hidden sm:inline">DOWNLOAD</span>
                        </button>

                        {/* RESET BUTTON */}
                        <button
                            onClick={resetTemplate}
                            aria-label="Clear all changes"
                            className="group flex items-center gap-2 border-2 border-red-500 bg-black text-red-500 px-4 py-2 font-black uppercase tracking-widest transition-all hover:bg-red-500 hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_#ef4444] hover:shadow-none"
                        >
                            <span className="hidden sm:inline">RESET</span> ⟲
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