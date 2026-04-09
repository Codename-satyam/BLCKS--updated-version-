import { useBuilder } from "../../Context/BuilderContext";
import JSZip from "jszip";
import SideBar from "./SideBar";
import Editor from "./Editor";
import DesignPanel from "./DesignPanel";
import PreviewModal from "./PreviewModal";

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

const SOURCE_MAP = {
    navbar1:   { filePath: "src/Sections/Generic/Navbars/Navbar1.jsx",    source: navbar1Source },
    navbar2:   { filePath: "src/Sections/Generic/Navbars/Navbar2.jsx",    source: navbar2Source },
    navbar3:   { filePath: "src/Sections/Generic/Navbars/Navbar3.jsx",    source: navbar3Source },
    hero1:     { filePath: "src/Sections/Generic/Heros/Hero1.jsx",        source: hero1Source },
    hero2:     { filePath: "src/Sections/Generic/Heros/Hero2.jsx",        source: hero2Source },
    hero3:     { filePath: "src/Sections/Generic/Heros/Hero3.jsx",        source: hero3Source },
    features1: { filePath: "src/Sections/Generic/Features/Features1.jsx", source: features1Source },
    features2: { filePath: "src/Sections/Generic/Features/Features2.jsx", source: features2Source },
    features3: { filePath: "src/Sections/Generic/Features/Features3.jsx", source: features3Source },
    pricing1:  { filePath: "src/Sections/Generic/Pricing/Pricing1.jsx",   source: pricing1Source },
    pricing2:  { filePath: "src/Sections/Generic/Pricing/Pricing2.jsx",   source: pricing2Source },
    pricing3:  { filePath: "src/Sections/Generic/Pricing/Pricing3.jsx",   source: pricing3Source },
    workpage1: { filePath: "src/Sections/Generic/Pages/WorkPage1.jsx",    source: workPage1Source },
    workpage2: { filePath: "src/Sections/Generic/Pages/WorkPage2.jsx",    source: workPage2Source },
    workpage3: { filePath: "src/Sections/Generic/Pages/WorkPage3.jsx",    source: workPage3Source },
    workpage4: { filePath: "src/Sections/Generic/Pages/WorkPage4.jsx",    source: workPage4Source },
    footer1:   { filePath: "src/Sections/Generic/Footers/Footer1.jsx",    source: footer1Source },
    footer2:   { filePath: "src/Sections/Generic/Footers/Footer2.jsx",    source: footer2Source },
    footer3:   { filePath: "src/Sections/Generic/Footers/Footer3.jsx",    source: footer3Source },
};

export default function Builder() {
    const {
        resetTemplate,
        selectedSections,
        designSettings,
        checklistItems,
        openPreview,
    } = useBuilder();

    const toBaseName = () => "generated-template";

    const downloadTemplate = async () => {
        if (selectedSections.length === 0) {
            alert("Add at least one section before downloading.");
            return;
        }

        const updatesJson = JSON.stringify(
            {
                designSettings,
                sections: selectedSections.map((s) => ({
                    key:     s.id,
                    id:      s.id,
                    title:   s.title,
                    group:   s.group,
                    content: s.content || {},
                })),
            },
            null,
            2
        );

        const zip   = new JSZip();
        const added = new Set();

        selectedSections.forEach((section) => {
            const entry = SOURCE_MAP[section.id];
            if (!entry || added.has(entry.filePath)) return;
            zip.file(entry.filePath, entry.source);
            added.add(entry.filePath);
        });

        zip.file("builder-updates.json", updatesJson + "\n");

        const blob = await zip.generateAsync({ type: "blob" });
        const url  = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href            = url;
        link.download        = `${toBaseName()}-used-sections.zip`;
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
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
                            {selectedSections.length} MOD
                        </div>

                        {/* ── PREVIEW BUTTON ── */}
                        <button
                            onClick={openPreview}
                            disabled={selectedSections.length === 0}
                            className="group relative text-[10px] tracking-widest font-mono border border-purple-800/60 bg-purple-950/20 text-purple-400 px-4 py-1.5 hover:bg-purple-400 hover:text-black hover:border-purple-400 transition-all duration-200 uppercase disabled:opacity-30 disabled:cursor-not-allowed overflow-hidden"
                        >
                            <span className="relative z-10">⊡ Preview</span>
                        </button>

                        <button
                            onClick={downloadTemplate}
                            className="group relative text-[10px] tracking-widest font-mono border border-green-800/60 bg-green-950/20 text-green-400 px-4 py-1.5 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-200 uppercase overflow-hidden"
                        >
                            <span className="relative z-10">↓ Download</span>
                        </button>

                        <button
                            onClick={resetTemplate}
                            className="text-[10px] tracking-widest font-mono border border-red-900/50 bg-red-950/20 text-red-500 px-4 py-1.5 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 uppercase"
                        >
                            Purge All
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
