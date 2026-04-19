import React, { useState, useMemo } from "react";
import componentsCatalog from "./componentsCatalog.json";
import { NeonGridBackground, RollingWindowBackground } from "./components/backgrounds";
import { TerminalHeader, GlassNeonHeader } from "./components/headers";
import { TypeGlowText, ScanlineSweep, HologramTitle, FlickerCaption } from "./components/text-and-animations";
import "./components/animations.css";

// ─── Copy to Clipboard Hook ──────────────────────────────────────────────────
function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return { copied, copy };
}

// ─── Component Preview Renderer ──────────────────────────────────────────────
function PreviewRenderer({ componentId }) {
  const componentMap = {
    "bg-grid-neon": () => (
      <NeonGridBackground className="min-h-[400px]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-300 mb-2">Neon Grid</h2>
            <p className="text-gray-400">Ambient grid background effect</p>
          </div>
        </div>
      </NeonGridBackground>
    ),
    "bg-rolling-window": () => (
      <RollingWindowBackground className="h-[400px]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-300 mb-2">Rolling Window</h2>
            <p className="text-gray-400">Sweeping light bar animation</p>
          </div>
        </div>
      </RollingWindowBackground>
    ),
    "header-terminal": () => (
      <TerminalHeader
        brand="SYSTEM.NAV"
        links={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "Services", href: "#" },
        ]}
        cta="Deploy"
      />
    ),
    "header-glass-neon": () => (
      <GlassNeonHeader
        brand="GLASS.CO"
        links={[
          { label: "Work", href: "#" },
          { label: "Studio", href: "#" },
        ]}
        cta="Book Call"
      />
    ),
    "anim-typeglow": () => (
      <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-[#1a1a24] to-[#09090b] rounded-lg">
        <div className="text-center">
          <TypeGlowText text="System Initializing..." className="mb-4 justify-center" />
          <p className="text-gray-500 text-xs mt-4">Type glow animation effect</p>
        </div>
      </div>
    ),
    "anim-scanline": () => (
      <ScanlineSweep className="rounded-lg bg-gradient-to-br from-[#1a1a24] to-[#09090b] min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cyan-300 mb-2">Scanline Active</h3>
          <p className="text-gray-400">Vertical sweep effect overlay</p>
        </div>
      </ScanlineSweep>
    ),
    "text-hologram-title": () => (
      <div className="flex items-center justify-center min-h-[300px]">
        <HologramTitle as="h2" className="text-5xl text-center">
          System Override
        </HologramTitle>
      </div>
    ),
    "text-flicker-caption": () => (
      <div className="flex items-center justify-center min-h-[200px] bg-[#0a0a0d] rounded-lg">
        <FlickerCaption>
          ■ system ready — all nodes online ■
        </FlickerCaption>
      </div>
    ),
  };

  const renderer = componentMap[componentId];
  if (!renderer) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-gray-500">
        Preview not available
      </div>
    );
  }

  return renderer();
}

// ─── Left Sidebar Navigation ─────────────────────────────────────────────────
function Sidebar({ activeItem, setActiveItem }) {
  const groupedByCategory = componentsCatalog.reduce((acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = [];
    acc[comp.category].push(comp);
    return acc;
  }, {});

  const categories = Object.entries(groupedByCategory).map(([id, items]) => ({
    id,
    label: id.charAt(0).toUpperCase() + id.slice(1),
    items
  }));

  return (
    <aside className="w-72 shrink-0 border-r border-white/10 bg-[#09090b] overflow-y-auto hidden lg:block pb-10 sticky top-[57px] max-h-[calc(100vh-57px)]">
      <div className="py-6 px-4">
        {/* Getting Started Section */}
        <div className="mb-8">
          <h4 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Navigation</h4>
          <button
            onClick={() => setActiveItem(null)}
            className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all relative group
              ${!activeItem ? "text-white bg-gradient-to-r from-cyan-500/20 to-transparent border border-cyan-500/30" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"}`}
          >
            {!activeItem && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-cyan-400 rounded-r-full" />}
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">⊙</span> Component Index
            </span>
          </button>
        </div>

        {/* Component Categories */}
        {categories.map((cat) => (
          <div key={cat.id} className="mb-8">
            <h4 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">{cat.label}</h4>
            <ul className="space-y-1">
              {cat.items.map((item) => {
                const isActive = activeItem?.id === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveItem(item)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all relative group
                        ${isActive ? "text-white bg-gradient-to-r from-cyan-500/20 to-transparent border border-cyan-500/30" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"}`}
                    >
                      {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-cyan-400 rounded-r-full" />}
                      <span className="flex items-center gap-2">
                        {isActive ? <span className="text-cyan-400">◆</span> : <span className="text-gray-600">◇</span>}
                        {item.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ─── Top Navbar ──────────────────────────────────────────────────────────────
function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600">
            <span className="text-white font-bold text-sm">&lt;/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight">React Component Library</span>
            <span className="text-xs text-cyan-400">Premium UI Components</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition">Docs</a>
            <a href="#" className="hover:text-cyan-400 transition">Showcase</a>
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// ─── Component Grid Card (Index View) ────────────────────────────────────────
function MinimalCard({ item, onClick }) {
  return (
    <div 
      onClick={() => onClick(item)}
      className="group cursor-pointer rounded-xl border border-white/10 bg-gradient-to-b from-[#0f0f12] to-[#09090b] overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
    >
      {/* Preview Area */}
      <div className="h-32 w-full bg-gradient-to-br from-[#111113] to-[#0a0a0d] relative flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-30">
          {item.previewType === "background" && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,229,255,0.1),transparent_50%)]" />
          )}
          {item.previewType === "rolling" && (
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.15) 35%, transparent 70%)',
                animation: 'rollX 5s linear infinite',
              }}
            />
          )}
          {item.previewType === "header" && (
            <div className="absolute top-0 w-full h-8 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.2),transparent_80%)]" />
          )}
          {item.previewType === "type" && (
            <div className="text-cyan-400 font-mono text-xs opacity-70">█ Typing...</div>
          )}
          {item.previewType === "scan" && (
            <div className="absolute h-1 w-full bg-gradient-to-b from-cyan-400/50 to-transparent top-1/3" />
          )}
          {item.previewType === "text" && (
            <div className="text-2xl font-bold text-cyan-400/70" style={{textShadow: '0 0 20px rgba(0,229,255,0.5)'}}>
              Text
            </div>
          )}
        </div>
        <span className="text-gray-500 text-xs font-mono relative z-10 px-2 py-1 bg-black/50 rounded border border-white/10">{item.category}</span>
      </div>
      {/* Text Area */}
      <div className="p-4 border-t border-white/5 flex-1 flex flex-col">
        <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition">{item.name}</h3>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed flex-1">{item.description?.substring(0, 60)}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {item.tags?.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Component Detail View ───────────────────────────────────────────────────
function DetailView({ item, onBack }) {
  const [tab, setTab] = useState("preview");
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="max-w-5xl animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-4 transition"
        >
          ← Back to Components
        </button>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white tracking-tight mb-2">{item.name}</h1>
            <p className="text-gray-400 text-base leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags?.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            <button 
              onClick={() => copy(item.import)}
              className="p-2 text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/50 rounded-md bg-[#18181b] hover:bg-cyan-500/10 transition flex items-center gap-2"
            >
              {copied ? "✓ Copied" : "📋 Copy Import"}
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white border border-white/10 rounded-md bg-[#18181b] hover:bg-white/5 flex items-center gap-2 transition">
              ♡ Save
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 border-b border-white/10 pb-4 sticky top-20 bg-[#09090b] z-10">
        <button 
          onClick={() => setTab("preview")}
          className={`px-4 py-2.5 text-sm font-medium rounded-t-md transition flex items-center gap-2 ${
            tab === "preview" 
              ? "bg-cyan-500/20 text-cyan-300 border-b-2 border-cyan-400" 
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          ⊙ Preview
        </button>
        <button 
          onClick={() => setTab("code")}
          className={`px-4 py-2.5 text-sm font-medium rounded-t-md transition flex items-center gap-2 ${
            tab === "code" 
              ? "bg-cyan-500/20 text-cyan-300 border-b-2 border-cyan-400" 
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          &lt;/&gt; Code
        </button>
        <button 
          onClick={() => setTab("usage")}
          className={`px-4 py-2.5 text-sm font-medium rounded-t-md transition flex items-center gap-2 ${
            tab === "usage" 
              ? "bg-cyan-500/20 text-cyan-300 border-b-2 border-cyan-400" 
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          📖 Usage
        </button>
      </div>

      {/* Preview Section */}
      {tab === "preview" && (
        <div className="mb-12">
          <div className="w-full rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1a24] via-[#0f0f15] to-[#09090b] overflow-hidden p-8">
            <PreviewRenderer componentId={item.id} />
          </div>
        </div>
      )}

      {/* Code Section */}
      {tab === "code" && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-300">Source Code</h3>
            <button 
              onClick={() => copy(item.source)}
              className="text-xs px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded hover:bg-cyan-500/30 transition"
            >
              {copied ? "✓ Copied" : "Copy Code"}
            </button>
          </div>
          <div className="w-full rounded-xl border border-white/10 bg-[#111113] p-6 overflow-x-auto">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap break-words">
              <code>{item.source}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Usage Section */}
      {tab === "usage" && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-300">Usage Example</h3>
            <button 
              onClick={() => copy(item.usage || item.import)}
              className="text-xs px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded hover:bg-cyan-500/30 transition"
            >
              {copied ? "✓ Copied" : "Copy Example"}
            </button>
          </div>
          <div className="w-full rounded-xl border border-white/10 bg-[#111113] p-6 overflow-x-auto">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap break-words">
              <code>{item.usage || item.import}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Import Section */}
      <div className="mb-12 p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-2">
          📦 Installation
        </h3>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-400 mb-2">Import Statement:</p>
            <div className="bg-[#0a0a0d] border border-white/10 rounded p-3 flex items-center justify-between group">
              <code className="text-xs font-mono text-cyan-300 overflow-x-auto flex-1 pr-3">{item.import}</code>
              <button 
                onClick={() => copy(item.import)}
                className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap ml-2"
              >
                {copied ? "✓" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dependencies Section */}
      {item.dependencies && item.dependencies.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            🔗 Dependencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.dependencies.map(dep => (
              <div key={dep} className="px-4 py-3 bg-[#18181b] border border-white/10 rounded-lg font-mono text-sm text-cyan-400 flex items-center gap-2">
                <span className="text-gray-500">→</span> {dep}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Props Section */}
      {item.props && item.props.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            ⚙️ Component Props
          </h2>
          <div className="overflow-x-auto border border-white/10 rounded-xl bg-[#09090b]">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-4 text-gray-400 font-semibold">Property</th>
                  <th className="px-4 py-4 text-gray-400 font-semibold">Type</th>
                  <th className="px-4 py-4 text-gray-400 font-semibold">Default</th>
                  <th className="px-4 py-4 text-gray-400 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {item.props.map((prop, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition">
                    <td className="px-4 py-4 text-cyan-400 font-mono text-xs font-semibold">{prop.property}</td>
                    <td className="px-4 py-4 text-emerald-400 font-mono text-xs">{prop.type}</td>
                    <td className="px-4 py-4 text-gray-300 font-mono text-xs bg-black/50 rounded py-2 px-3 border border-white/5 inline-block">{prop.default}</td>
                    <td className="px-4 py-4 text-gray-400 leading-relaxed text-sm">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tags Section */}
      {item.tags && item.tags.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            🏷️ Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-500/40 rounded-full text-sm text-cyan-300 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Featured Components Section ─────────────────────────────────────────────
function FeaturedSection() {
  const featured = componentsCatalog.slice(0, 3);
  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">✨ Featured Components</h2>
          <p className="text-gray-400">Start with our most popular components</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map(item => (
          <div key={item.id} className="group rounded-lg border border-white/10 bg-gradient-to-b from-cyan-500/10 to-[#09090b] overflow-hidden hover:border-cyan-500/50 transition p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl">⭐</div>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded-full">{item.category}</span>
            </div>
            <h3 className="font-semibold text-white mb-2">{item.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-1">
              {item.tags?.slice(0, 3).map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-white/5 text-gray-400 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Getting Started Section ─────────────────────────────────────────────────
function GettingStartedSection() {
  const steps = [
    {
      icon: "📦",
      title: "Copy Import",
      description: "Click the copy button to get the import statement"
    },
    {
      icon: "🔧",
      title: "Paste Component",
      description: "Add the component code to your project"
    },
    {
      icon: "⚡",
      title: "Customize",
      description: "Modify props and styles to match your design"
    },
    {
      icon: "🚀",
      title: "Deploy",
      description: "Use the component in your production app"
    }
  ];

  return (
    <div className="mb-16 py-12 px-8 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-[#09090b] to-purple-500/10 backdrop-blur-sm">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">🚀 Getting Started</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Browse premium React components, copy the code, and integrate them into your project instantly</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3 className="font-semibold text-white mb-2 text-lg">{step.title}</h3>
            <p className="text-sm text-gray-400">{step.description}</p>
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-8 text-gray-600">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Application Layout ─────────────────────────────────────────────────
export default function ShowcaseApp() {
  const [activeItem, setActiveItem] = useState(null);
  const [search, setSearch] = useState("");

  const filteredComponents = useMemo(() => {
    if (!search) return componentsCatalog;
    return componentsCatalog.filter(c => 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description?.toLowerCase().includes(search.toLowerCase()) ||
      c.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const handleBack = () => setActiveItem(null);

  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans flex flex-col overflow-hidden">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        {!activeItem && <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />}
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12">
            {!activeItem ? (
              <>
                {/* Getting Started */}
                <GettingStartedSection />

                {/* Featured Components */}
                <FeaturedSection />

                {/* All Components */}
                <div>
                  <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#09090b] py-4 z-20">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-1">All Components</h2>
                      <p className="text-gray-400 text-sm">{filteredComponents.length} components available</p>
                    </div>
                    <div className="flex gap-3">
                      <input 
                        type="text" 
                        placeholder="Search components..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-[#18181b] border border-white/10 rounded-lg py-2.5 px-4 text-sm focus:border-cyan-500/50 outline-none w-64 transition placeholder-gray-600"
                      />
                      <select className="bg-[#18181b] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-gray-300 outline-none focus:border-cyan-500/50 transition">
                        <option>Filter by Category</option>
                        <option>Backgrounds</option>
                        <option>Animations</option>
                        <option>Headers</option>
                        <option>Text</option>
                      </select>
                    </div>
                  </div>

                  {filteredComponents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredComponents.map(item => (
                        <MinimalCard 
                          key={item.id} 
                          item={item} 
                          onClick={setActiveItem}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <p className="text-gray-400 text-lg">No components found matching your search</p>
                      <button 
                        onClick={() => setSearch("")}
                        className="mt-4 text-cyan-400 hover:text-cyan-300 transition text-sm"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <DetailView item={activeItem} onBack={handleBack} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}