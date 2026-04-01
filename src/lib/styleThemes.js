/**
 * Style Theme Utilities
 * Applies consistent styling based on selected styleDirection
 */

export const styleThemes = {
  minimalist: {
    name: "Minimalist",
    colors: {
      accent: "cyan",
      bg: "slate-950",
      text: "slate-100",
    },
    spacing: "generous",
    borders: "subtle",
    className: "style-minimalist",
    css: `
      .style-minimalist {
        --accent-color: #06b6d4;
        --bg-primary: #030712;
        --text-primary: #f1f5f9;
        --border-width: 0px;
        --spacing-factor: 1.5;
      }
    `,
  },
  brutalist: {
    name: "Brutalist",
    colors: {
      accent: "yellow",
      bg: "black",
      text: "white",
    },
    spacing: "tight",
    borders: "bold",
    className: "style-brutalist",
    css: `
      .style-brutalist {
        --accent-color: #facc15;
        --bg-primary: #000000;
        --text-primary: #ffffff;
        --border-width: 3px;
        --spacing-factor: 1;
      }
    `,
  },
  playful: {
    name: "Playful",
    colors: {
      accent: "pink",
      bg: "purple-950",
      text: "white",
    },
    spacing: "comfortable",
    borders: "rounded",
    className: "style-playful",
    css: `
      .style-playful {
        --accent-color: #ec4899;
        --bg-primary: #3f0f5c;
        --text-primary: #ffffff;
        --border-radius: 20px;
        --spacing-factor: 1.2;
      }
    `,
  },
  corporate: {
    name: "Corporate",
    colors: {
      accent: "blue",
      bg: "slate-900",
      text: "slate-50",
    },
    spacing: "professional",
    borders: "sharp",
    className: "style-corporate",
    css: `
      .style-corporate {
        --accent-color: #3b82f6;
        --bg-primary: #0f172a;
        --text-primary: #f8fafc;
        --border-width: 1px;
        --spacing-factor: 1.3;
      }
    `,
  },
  cyber: {
    name: "Cyberpunk",
    colors: {
      accent: "purple",
      bg: "black",
      text: "green",
    },
    spacing: "compact",
    borders: "neon",
    className: "style-cyber",
    css: `
      .style-cyber {
        --accent-color: #a855f7;
        --bg-primary: #000000;
        --text-primary: #22c55e;
        --glow-color: rgba(168, 85, 247, 0.5);
        --spacing-factor: 0.9;
      }
    `,
  },
};

/**
 * Get style theme by direction
 */
export function getStyleTheme(styleDirection) {
  return styleThemes[styleDirection] || styleThemes.corporate;
}

/**
 * Get Tailwind classes for theme
 */
export function getThemeClasses(styleDirection) {
  const theme = getStyleTheme(styleDirection);
  const themeMap = {
    minimalist: "bg-slate-950 text-slate-100",
    brutalist: "bg-black text-white border-2 border-black",
    playful: "bg-purple-950 text-white",
    corporate: "bg-slate-900 text-slate-50",
    cyber: "bg-black text-green-400",
  };
  return themeMap[styleDirection] || themeMap.corporate;
}

/**
 * Get accent classes for theme
 */
export function getAccentClasses(styleDirection) {
  const accentMap = {
    minimalist: "text-cyan-400 border-cyan-500 hover:bg-cyan-500/10",
    brutalist: "text-yellow-400 border-yellow-500 hover:bg-yellow-500/10",
    playful: "text-pink-400 border-pink-500 hover:bg-pink-500/10",
    corporate: "text-blue-400 border-blue-500 hover:bg-blue-500/10",
    cyber: "text-purple-400 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]",
  };
  return accentMap[styleDirection] || accentMap.corporate;
}

/**
 * Get button classes for theme
 */
export function getButtonClasses(styleDirection) {
  const buttonMap = {
    minimalist: "bg-cyan-600 hover:bg-cyan-500 text-white",
    brutalist: "bg-black text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black",
    playful: "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 text-white",
    corporate: "bg-blue-600 hover:bg-blue-500 text-white",
    cyber: "bg-purple-600 text-green-400 border border-purple-500 hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]",
  };
  return buttonMap[styleDirection] || buttonMap.corporate;
}
