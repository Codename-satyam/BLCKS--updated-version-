// ═══════════════════════════════════════════════════════════════════════════
// Pre-Saved Complete Template Projects
// Ready-to-use templates with all content pre-populated
// ═══════════════════════════════════════════════════════════════════════════

export const SAVED_TEMPLATES = {
  // Developer Portfolio - Complete with all sections
  "dev-portfolio": {
    id: "dev-portfolio",
    name: "Developer Portfolio",
    description: "Professional developer portfolio with projects and stats",
    category: "portfolio",
    sections: ["navbar1", "hero1", "features1", "stats1", "pricing1", "footer1"],
    sectionContent: {
      navbar1: {
        brand: "Alex Chen",
        link1: "Work",
        link2: "About",
        link3: "Blog",
        link4: "Contact",
        cta: "Let's Talk",
        brandColor: "#00e5ff",
        linkColor: "#ffffff",
        ctaBgColor: "#00e5ff",
        ctaTextColor: "#0a0a0a",
      },
      hero1: {
        badge: "✦ FULL-STACK DEVELOPER",
        title: "Building Digital Experiences",
        description: "Crafting elegant solutions to complex problems. React, Node.js, and cloud technologies.",
        buttonLabel: "View My Work",
        badgeColor: "#00e5ff",
        titleColor: "#ffffff",
        descColor: "#a0aec0",
        buttonBgColor: "#00e5ff",
        buttonTextColor: "#0a0a0a",
      },
      features1: {
        badge: "⚡ FEATURED PROJECTS",
        title: "Selected Work",
        feature1Title: "E-Commerce Platform",
        feature1Desc: "Full-stack marketplace built with React, Node.js, and MongoDB. Real-time inventory and payment processing.",
        feature2Title: "AI Chat Application",
        feature2Desc: "ChatGPT-powered customer service tool. 50k+ daily users, deployed on AWS.",
        feature3Title: "Design System Library",
        feature3Desc: "Open-source component library with 100+ reusable React components and design tokens.",
      },
      stats1: {
        badge: "📊 BY THE NUMBERS",
        title: "My Impact",
        stat1Label: "PROJECTS SHIPPED",
        stat1Value: "30+",
        stat1Stat: "Production applications",
        stat2Label: "USERS SERVED",
        stat2Value: "500K+",
        stat2Stat: "Active daily users",
        stat3Label: "CODE QUALITY",
        stat3Value: "99%",
        stat3Stat: "Test coverage",
        stat4Label: "YEARS EXPERIENCE",
        stat4Value: "5+",
        stat4Stat: "Professional development",
      },
      pricing1: {
        badge: "💼 SERVICES",
        title: "Available For Hire",
        plan1Title: "Freelance",
        plan1Price: "$75",
        plan1Desc: "Per hour",
        plan1Features: "Web Development\nAPI Design\nConsulting",
        plan2Title: "Contract",
        plan2Price: "$8K",
        plan2Desc: "Per month",
        plan2Features: "Full-time equivalent\nDedicated support\nFlexible schedule",
        plan3Title: "Full-Time",
        plan3Price: "Negotiable",
        plan3Desc: "Annual salary",
        plan3Features: "Product Development\nTeam Leadership\nStrategic Planning",
      },
      footer1: {
        brand: "ALEX CHEN",
        tagline: "Full-Stack Developer & Problem Solver",
        link1: "Portfolio",
        link2: "Blog",
        link3: "GitHub",
        link4: "LinkedIn",
        link5: "Privacy",
        link6: "Terms",
        social1: "GitHub",
        social2: "LinkedIn",
        social3: "Twitter",
        social4: "Email",
        copyright: "© 2024 Alex Chen. All rights reserved.",
      },
    },
    designSettings: {
      bgColor: "#0a0a0a",
      textColor: "#ffffff",
      accentColor: "#00e5ff",
      fontFamily: "mono",
    },
  },

  // SaaS Startup - Complete landing page
  "saas-startup": {
    id: "saas-startup",
    name: "SaaS Startup",
    description: "Complete SaaS landing page with all features",
    category: "startup",
    sections: ["navbar2", "hero2", "features2", "pricing2", "testimonials1", "footer2"],
    sectionContent: {
      navbar2: {
        brand: "TaskFlow",
        link1: "Features",
        link2: "Pricing",
        link3: "Docs",
        link4: "Blog",
        cta: "Start Free",
        brandColor: "#a855f7",
        linkColor: "#ffffff",
        ctaBgColor: "#a855f7",
        ctaTextColor: "#ffffff",
      },
      hero2: {
        badge: "🚀 PRODUCTIVITY REIMAGINED",
        title: "The Future of Task Management",
        description: "Automate workflows, collaborate seamlessly, and deliver faster. Purpose-built for modern teams.",
        primaryCta: "Start 14-Day Free Trial",
        secondaryCta: "Watch Demo",
        badgeColor: "#a855f7",
        titleColor: "#ffffff",
        descColor: "#a0aec0",
        primaryBgColor: "#a855f7",
        primaryTextColor: "#ffffff",
      },
      features2: {
        badge: "⚡ POWERFUL FEATURES",
        title: "Everything You Need",
        feature1Title: "AI-Powered Automation",
        feature1Desc: "Automatically organize, prioritize, and route tasks using AI.",
        feature2Title: "Team Collaboration",
        feature2Desc: "Real-time collaboration, comments, and file attachments.",
        feature3Title: "Advanced Analytics",
        feature3Desc: "Deep insights into team productivity and project timelines.",
      },
      pricing2: {
        badge: "💰 SIMPLE PRICING",
        title: "Transparent & Fair",
        plan1Title: "Starter",
        plan1Price: "$0",
        plan1Desc: "Perfect for individuals",
        plan1Features: "Up to 100 tasks\nBasic reports\nCommunity support",
        plan2Title: "Team",
        plan2Price: "$49",
        plan2Desc: "For growing teams",
        plan2Features: "Unlimited tasks\nAdvanced automation\nPriority support\nAPI access",
        plan3Title: "Enterprise",
        plan3Price: "$Custom",
        plan3Desc: "For large organizations",
        plan3Features: "Everything in Team\nDedicated support\nCustom integrations\nSLA guarantee",
      },
      testimonials1: {
        badge: "⭐ LOVED BY TEAMS",
        title: "What Our Users Say",
        testimonial1Author: "Sarah Chen",
        testimonial1Title: "CEO, Design Co",
        testimonial1Text: "TaskFlow cut our project planning time by 60%. The team loves it.",
        testimonial2Author: "Marcus Rodriguez",
        testimonial2Title: "CTO, Tech Startup",
        testimonial2Text: "Best productivity tool we've used. The AI features are game-changing.",
        testimonial3Author: "Emma Watson",
        testimonial3Title: "Project Manager, Agency",
        testimonial3Text: "TaskFlow streamlined our entire workflow. Couldn't imagine working without it.",
      },
      footer2: {
        brand: "TASKFLOW",
        tagline: "Modern Task Management for Modern Teams",
        link1: "Features",
        link2: "Pricing",
        link3: "Security",
        link4: "Status",
        link5: "Privacy",
        link6: "Terms",
        social1: "Twitter",
        social2: "LinkedIn",
        social3: "GitHub",
        social4: "Discord",
        copyright: "© 2024 TaskFlow. All rights reserved.",
      },
    },
    designSettings: {
      bgColor: "#0a0a0a",
      textColor: "#ffffff",
      accentColor: "#a855f7",
      fontFamily: "mono",
    },
  },

  // Gaming Community Hub
  "gaming-community": {
    id: "gaming-community",
    name: "Gaming Community",
    description: "Esports platform with tournaments and leaderboards",
    category: "gaming",
    sections: ["gaming-navbar", "gaming-hero", "gaming-features", "gaming-stats", "gaming-pricing", "gaming-cta", "gaming-footer"],
    sectionContent: {
      "gaming-navbar": {
        brand: "⚔️ BATTLE ARENA",
        link1: "Tournaments",
        link2: "Leaderboard",
        link3: "Teams",
        link4: "Community",
        ctaLabel: "Play Now",
        brandColor: "#00ff88",
        linkColor: "#ffffff",
        ctaBgColor: "#ff2288",
        ctaTextColor: "#ffffff",
        bgColor: "#0a0a0a",
      },
      "gaming-hero": {
        badge: "🎮 JOIN THE ARENA",
        title: "Compete at the Highest Level",
        description: "Join thousands of competitive players. Climb the ranks, earn prizes, and become a legend.",
        buttonLabel: "Start Playing",
        badgeColor: "#ff2288",
        titleColor: "#ffffff",
        descColor: "#a0aec0",
        buttonBgColor: "#ff2288",
        buttonTextColor: "#ffffff",
      },
      "gaming-features": {
        badge: "🏆 WHAT WE OFFER",
        title: "Experience Competition",
        feature1Title: "Daily Tournaments",
        feature1Desc: "New tournaments every day with escalating prize pools.",
        feature2Title: "Team Features",
        feature2Desc: "Create teams, manage rosters, and compete in tournaments.",
        feature3Title: "Live Streaming",
        feature3Desc: "Built-in Twitch and YouTube integration.",
      },
      "gaming-stats": {
        badge: "🏅 TOP PLAYERS",
        title: "Leaderboard",
        player1Name: "NinjaGamer",
        player1Rank: "#1",
        player1Score: "45,230 Points",
        player2Name: "ShadowPro",
        player2Rank: "#2",
        player2Score: "42,105 Points",
        player3Name: "PhoenixKing",
        player3Rank: "#3",
        player3Score: "38,945 Points",
      },
      "gaming-pricing": {
        badge: "💎 MEMBERSHIP",
        title: "Choose Your Tier",
        plan1Title: "Bronze",
        plan1Price: "$0",
        plan1Desc: "Casual players",
        plan1Features: "Basic tournaments\nCommunity access\nMonthly rewards",
        plan2Title: "Silver",
        plan2Price: "$9.99",
        plan2Desc: "Competitive",
        plan2Features: "Premium tournaments\nPriority matchmaking\nWeekly rewards\nTeam features",
        plan3Title: "Platinum",
        plan3Price: "$29.99",
        plan3Desc: "Pro athletes",
        plan3Features: "All tournaments\n24/7 support\nDaily rewards\nMonetization",
      },
      "gaming-cta": {
        badge: "⚡ READY?",
        title: "Start Your Journey",
        description: "Create an account in seconds and start competing.",
        primaryCTA: "Create Account",
        secondaryCTA: "Watch Matches",
        badgeColor: "#00ff88",
        titleColor: "#ffffff",
        descColor: "#a0aec0",
        primaryBgColor: "#00ff88",
        primaryTextColor: "#0a0a0a",
        secondaryBorderColor: "#ff2288",
      },
      "gaming-footer": {
        brand: "BATTLE ARENA",
        tagline: "Where Champions Rise",
        link1: "Tournaments",
        link2: "Leaderboard",
        link3: "Community",
        link4: "Support",
        link5: "Privacy",
        link6: "Terms",
        social1: "Discord",
        social2: "Twitch",
        social3: "Twitter",
        social4: "YouTube",
        copyright: "© 2024 Battle Arena. All rights reserved.",
        brandColor: "#00ff88",
        textColor: "#a0aec0",
        linkColor: "#ffffff",
      },
    },
    designSettings: {
      bgColor: "#0a0a0a",
      textColor: "#ffffff",
      accentColor: "#00ff88",
      fontFamily: "mono",
    },
  },

  // E-Commerce Store
  "ecommerce-shop": {
    id: "ecommerce-shop",
    name: "E-Commerce Store",
    description: "Complete online store with products and pricing",
    category: "ecommerce",
    sections: ["navbar3", "hero3", "features3", "pricing3", "testimonials2", "footer3"],
    sectionContent: {
      navbar3: {
        brand: "ShopHub",
        link1: "Shop",
        link2: "Categories",
        link3: "Sales",
        link4: "Support",
        cta: "Cart",
        brandColor: "#ff6600",
        linkColor: "#ffffff",
        ctaBgColor: "#ff6600",
        ctaTextColor: "#ffffff",
      },
      hero3: {
        badge: "🛍️ EXCLUSIVE COLLECTION",
        title: "Premium Quality Products",
        description: "Discover our curated selection. Fast shipping, easy returns, guaranteed satisfaction.",
        buttonLabel: "Shop Now",
        badgeColor: "#ff6600",
        titleColor: "#ffffff",
        descColor: "#a0aec0",
        buttonBgColor: "#ff6600",
        buttonTextColor: "#ffffff",
      },
      features3: {
        badge: "✨ FEATURED",
        title: "Customer Favorites",
        feature1Title: "Premium Wireless Headphones",
        feature1Desc: "$199.99 - Active noise cancellation, 30-hour battery",
        feature2Title: "Designer Smart Watch",
        feature2Desc: "$299.99 - Fitness tracking, 5-day battery",
        feature3Title: "4K Action Camera",
        feature3Desc: "$399.99 - Waterproof, stabilization, AI editing",
      },
      pricing3: {
        badge: "💳 SHIPPING OPTIONS",
        title: "Choose Your Delivery",
        plan1Title: "Standard",
        plan1Price: "FREE",
        plan1Desc: "5-7 business days",
        plan1Features: "Standard packaging\nTracking included\nInsurance available",
        plan2Title: "Express",
        plan2Price: "$19.99",
        plan2Desc: "2-3 business days",
        plan2Features: "Priority processing\nUpgraded packaging\nGuaranteed delivery",
        plan3Title: "Overnight",
        plan3Price: "$49.99",
        plan3Desc: "Next business day",
        plan3Features: "Overnight delivery\nSignature required\nFully insured",
      },
      testimonials2: {
        badge: "⭐ REVIEWS",
        title: "Loved by Customers",
        testimonial1Author: "John Smith",
        testimonial1Title: "Verified Buyer",
        testimonial1Text: "Amazing quality and fast shipping. Will shop again!",
        testimonial2Author: "Lisa Johnson",
        testimonial2Title: "Verified Buyer",
        testimonial2Text: "Best prices I've found. Customer service is fantastic.",
        testimonial3Author: "David Lee",
        testimonial3Title: "Verified Buyer",
        testimonial3Text: "Exceeded my expectations. Highly recommend.",
      },
      footer3: {
        brand: "SHOPHUB",
        tagline: "Your Trusted Shopping Destination",
        link1: "Shop",
        link2: "Categories",
        link3: "Deals",
        link4: "Blog",
        link5: "Privacy",
        link6: "Terms",
        social1: "Facebook",
        social2: "Instagram",
        social3: "Twitter",
        social4: "Pinterest",
        copyright: "© 2024 ShopHub. All rights reserved.",
      },
    },
    designSettings: {
      bgColor: "#0a0a0a",
      textColor: "#ffffff",
      accentColor: "#ff6600",
      fontFamily: "mono",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Template Categories for Quick Selection
// ═══════════════════════════════════════════════════════════════════════════

export const TEMPLATES = {
  portfolio: {
    name: "Portfolio",
    description: "Professional portfolio showcase",
    sections: ["navbar1", "hero1", "features1", "pricing1", "footer1"],
  },
  startup: {
    name: "Startup",
    description: "SaaS and product landing page",
    sections: ["navbar2", "hero2", "features2", "pricing2", "footer2"],
  },
  gaming: {
    name: "Gaming",
    description: "Gaming hub and community portal",
    sections: ["gaming-navbar", "gaming-hero", "gaming-features", "gaming-footer"],
  },
  ecommerce: {
    name: "E-Commerce",
    description: "Online store and product showcase",
    sections: ["navbar1", "hero1", "features1", "pricing1", "footer1"],
  },
  generic: {
    name: "Blank Canvas",
    description: "Start from scratch with full freedom",
    sections: [],
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// Utility Functions
// ═══════════════════════════════════════════════════════════════════════════

export const getTemplate = (templateId) => {
  return TEMPLATES[templateId] || TEMPLATES.generic;
};

export const getSavedTemplate = (templateId) => {
  return SAVED_TEMPLATES[templateId] || null;
};

export const getAllSavedTemplates = () => {
  return Object.values(SAVED_TEMPLATES);
};

export const getTemplatesByCategory = (category) => {
  return Object.values(SAVED_TEMPLATES).filter((t) => t.category === category);
};

export const getTemplateByName = (templateName) => {
  const key = Object.keys(TEMPLATES).find(
    (k) => TEMPLATES[k].name.toLowerCase() === templateName.toLowerCase()
  );
  return key ? TEMPLATES[key] : TEMPLATES.generic;
};

export const getAllTemplates = () => {
  return Object.entries(TEMPLATES).map(([id, template]) => ({
    id,
    ...template
  }));
};
