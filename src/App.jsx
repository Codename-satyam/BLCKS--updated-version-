import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "./Context/AuthContext";

// Lazy imports
const HomePage = lazy(() => import("./Pages/LandingPage/HomePage/HomePage"));
const Page2 = lazy(() => import("./Pages/LandingPage/HomePage/page2"));
const Page3 = lazy(() => import("./Pages/LandingPage/HomePage/page3"));
const Page4 = lazy(() => import("./Pages/LandingPage/HomePage/page4"));
const Page5 = lazy(() => import("./Pages/LandingPage/HomePage/page5"));
const Footer = lazy(() => import("./Pages/LandingPage/HomePage/Footer"));

const Contact = lazy(() => import("./Pages/Contact/Contact"));
const About = lazy(() => import("./Pages/LandingPage/About"));
const Login = lazy(() => import("./Pages/Authentication/Login"));
const BuilderLanding = lazy(() => import("./Pages/BuilderLanding"));
const Builder = lazy(() => import("./Components/Builder/Builder"));
const ReactComponents = lazy(() => import("./Components/ReactComponents/ReactComponents"));
const PlatformSelector = lazy(() => import("./Components/PlatformSelector/PlatformSelector"));

import Navbar from "./Pages/LandingPage/HomePage/Navbar"; // keep normal
import Loader from "./assets/Loading/Loading"; // keep normal
import { BuilderProvider } from "./Context/BuilderContext";

export default function App() {
  const location = useLocation();

  // Hide navbar on full-screen utility pages
  const shouldShowNavbar = !["/builder", "/components", "/react-components", "/builder-landing"].some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <AuthProvider>
      <div>
        {shouldShowNavbar && <Navbar />}

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <Page2 />
                  <Page3 />
                  <Page4 />
                  <Page5 />
                  <Footer />
                </>
              }
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/components" element={<ReactComponents />} />
            
            {/* Builder Landing - Idea Selection */}
            <Route path="/builder-landing" element={<BuilderLanding />} />
            
            {/* Builder - Platform Selection */}
            <Route
              path="/builder"
              element={<PlatformSelector />}
            />

            {/* Generic Builder */}
            <Route
              path="/builder/generic"
              element={
                <BuilderProvider platform="generic">
                  <Builder platform="generic" />
                </BuilderProvider>
              }
            />

            {/* Portfolio Builder */}
            <Route
              path="/builder/portfolio"
              element={
                <BuilderProvider platform="portfolio">
                  <Builder platform="portfolio" />
                </BuilderProvider>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </AuthProvider>
  );
}