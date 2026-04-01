// Template export utility - converts builder sections to HTML
export function generateSectionHTML(section, designSettings) {
    const { content, id, group } = section;
    
    switch (group) {
        case "navbar":
            return generateNavbar(content);
        
        case "hero":
            return generateHero(content);
        
        case "features":
            return generateFeatures(content);
        
        case "pricing":
            return generatePricing(content);
        
        case "work":
            return generateWorkPage(content);
        
        case "footer":
            return generateFooter(content);
        
        default:
            return "";
    }
}

function generateNavbar(content) {
    return `
    <header class="navbar">
        <div class="container">
            <nav>
                <div class="brand">${content.brand || "Brand"}</div>
                <div class="nav-links">
                    <a href="#home">${content.link1 || "Link 1"}</a>
                    <a href="#features">${content.link2 || "Link 2"}</a>
                    <a href="#pricing">${content.link3 || "Link 3"}</a>
                    <a href="#contact">${content.link4 || "Link 4"}</a>
                </div>
                <button class="cta-btn">${content.cta || "CTA"}</button>
            </nav>
        </div>
    </header>`;
}

function generateHero(content) {
    return `
    <section class="hero">
        <div class="container">
            <div class="badge">${content.badge || "Badge"}</div>
            <h1>${content.title || "Title"}</h1>
            <p class="description">${content.description || "Description"}</p>
            <button class="cta-btn">${content.buttonLabel || "Button"}</button>
        </div>
    </section>`;
}

function generateFeatures(content) {
    return `
    <section class="features-section">
        <div class="container">
            <div class="badge">${content.badge || "Badge"}</div>
            <h2>${content.title || "Features"}</h2>
            
            <div class="features">
                <div class="feature-card">
                    <h3>${content.feature1Title || "Feature 1"}</h3>
                    <p>${content.feature1Desc || "Feature 1 description"}</p>
                </div>
                <div class="feature-card">
                    <h3>${content.feature2Title || "Feature 2"}</h3>
                    <p>${content.feature2Desc || "Feature 2 description"}</p>
                </div>
                <div class="feature-card">
                    <h3>${content.feature3Title || "Feature 3"}</h3>
                    <p>${content.feature3Desc || "Feature 3 description"}</p>
                </div>
            </div>
        </div>
    </section>`;
}

function generatePricing(content) {
    return `
    <section class="pricing-section">
        <div class="container">
            <div class="badge">${content.badge || "Badge"}</div>
            <h2>${content.title || "Pricing"}</h2>
            
            <div class="pricing-cards">
                <div class="pricing-card">
                    <h3>${content.plan1Name || "Plan 1"}</h3>
                    <p class="price">${content.plan1Price || "$0"}</p>
                    <p>${content.plan1Desc || "Plan description"}</p>
                    <button class="cta-btn">${content.buttonLabel || "Select"}</button>
                </div>
                <div class="pricing-card featured">
                    <h3>${content.plan2Name || "Plan 2"}</h3>
                    <p class="price">${content.plan2Price || "$0"}</p>
                    <p>${content.plan2Desc || "Plan description"}</p>
                    <button class="cta-btn">${content.buttonLabel || "Select"}</button>
                </div>
                <div class="pricing-card">
                    <h3>${content.plan3Name || "Plan 3"}</h3>
                    <p class="price">${content.plan3Price || "$0"}</p>
                    <p>${content.plan3Desc || "Plan description"}</p>
                    <button class="cta-btn">${content.buttonLabel || "Select"}</button>
                </div>
            </div>
        </div>
    </section>`;
}

function generateWorkPage(content) {
    return `
    <section class="workpage-section">
        <div class="container">
            <div class="badge">${content.badge || "Badge"}</div>
            <h2>${content.title || "Work Page"}</h2>
            <p class="section-description">${content.description || "Description"}</p>
            
            <div class="work-items">
                <div class="work-item">
                    <span class="item-number">01</span>
                    <p>${content.item1 || "Item 1"}</p>
                </div>
                <div class="work-item">
                    <span class="item-number">02</span>
                    <p>${content.item2 || "Item 2"}</p>
                </div>
                <div class="work-item">
                    <span class="item-number">03</span>
                    <p>${content.item3 || "Item 3"}</p>
                </div>
                <div class="work-item">
                    <span class="item-number">04</span>
                    <p>${content.item4 || "Item 4"}</p>
                </div>
            </div>
        </div>
    </section>`;
}

function generateFooter(content) {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div>
                    <h3>${content.brand || "Brand"}</h3>
                    <p>${content.subtitle || "Subtitle"}</p>
                </div>
                <div class="footer-links">
                    <a href="#home">${content.link1 || "Link 1"}</a>
                    <a href="#features">${content.link2 || "Link 2"}</a>
                    <a href="#pricing">${content.link3 || "Link 3"}</a>
                    <a href="#contact">${content.link4 || "Link 4"}</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>${content.copyrightLine || "Copyright"}</p>
            </div>
        </div>
    </footer>`;
}

export function getTemplateCSS(designSettings) {
    const textColor = designSettings?.textColor || "#ffffff";
    const bgColor = designSettings?.bgColor || "#020202";
    const bgGradient = designSettings?.bgGradient || false;
    const gradientValue = designSettings?.gradientValue || "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)";
    const textOpacity = (designSettings?.textOpacity || 100) / 100;

    const backgroundStyle = bgGradient ? gradientValue : bgColor;

    return `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: ${backgroundStyle};
            color: ${textColor};
            opacity: ${textOpacity};
            line-height: 1.6;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        button, .cta-btn {
            padding: 12px 24px;
            background: linear-gradient(135deg, #0891b2 0%, #7c3aed 100%);
            color: white;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        button:hover, .cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(8, 145, 178, 0.2);
            border: 1px solid #0891b2;
            border-radius: 20px;
            font-size: 0.875rem;
            color: #0891b2;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1rem;
        }

        h1 { font-size: 3rem; }
        h2 { font-size: 2.5rem; }
        h3 { font-size: 1.5rem; }
        p { margin-bottom: 1rem; }

        /* Navbar Styles */
        .navbar {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(200, 150, 255, 0.2);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
        }

        .brand {
            font-weight: 700;
            font-size: 1.5rem;
            color: ${textColor};
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            flex: 1;
        }

        .nav-links a {
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #0891b2;
        }

        /* Hero Section */
        .hero {
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
            text-align: center;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        .description {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Features Section */
        .features-section {
            padding: 4rem 2rem;
        }

        .features-section h2 {
            text-align: center;
            margin-bottom: 3rem;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(200, 150, 255, 0.2);
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(200, 150, 255, 0.4);
            transform: translateY(-5px);
        }

        .feature-card h3 {
            margin-bottom: 1rem;
        }

        /* Pricing Section */
        .pricing-section {
            padding: 4rem 2rem;
        }

        .pricing-section h2 {
            text-align: center;
            margin-bottom: 3rem;
        }

        .pricing-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .pricing-card {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(200, 150, 255, 0.2);
            border-radius: 8px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .pricing-card.featured {
            background: rgba(8, 145, 178, 0.1);
            border-color: #0891b2;
            transform: scale(1.05);
        }

        .pricing-card h3 {
            margin-bottom: 1rem;
        }

        .price {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 1rem 0;
            color: #0891b2;
        }

        /* Work Page Section */
        .workpage-section {
            padding: 4rem 2rem;
        }

        .workpage-section h2 {
            text-align: center;
            margin-bottom: 1rem;
        }

        .section-description {
            text-align: center;
            font-size: 1.1rem;
            margin-bottom: 3rem;
            opacity: 0.9;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .work-items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .work-item {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(200, 150, 255, 0.2);
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .work-item:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(200, 150, 255, 0.4);
        }

        .item-number {
            font-size: 2rem;
            font-weight: 700;
            color: #0891b2;
            display: block;
            margin-bottom: 1rem;
        }

        /* Footer */
        .footer {
            background: rgba(0, 0, 0, 0.3);
            border-top: 1px solid rgba(200, 150, 255, 0.2);
            padding: 3rem 2rem 1rem;
            margin-top: 4rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer h3 {
            margin-bottom: 0.5rem;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .footer-links a {
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: #0891b2;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(200, 150, 255, 0.1);
            opacity: 0.7;
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            h2 { font-size: 1.5rem; }
            .hero { min-height: 50vh; }
            .hero h1 { font-size: 2rem; }
            nav { flex-direction: column; gap: 1rem; }
            .nav-links { gap: 1rem; flex-direction: column; }
            .pricing-card.featured { transform: scale(1); }
        }
    `;
}
