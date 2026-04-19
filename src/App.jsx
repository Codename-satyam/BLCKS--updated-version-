import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy imports
const HomePage = lazy(() => import("./Pages/LandingPage/The-homePage/HomePage"));
const Page2 = lazy(() => import("./Pages/LandingPage/The-homePage/page2"));
const Page3 = lazy(() => import("./Pages/LandingPage/The-homePage/page3"));
const Page4 = lazy(() => import("./Pages/LandingPage/The-homePage/page4"));
const Page5 = lazy(() => import("./Pages/LandingPage/The-homePage/page5"));
const Footer = lazy(() => import("./Pages/LandingPage/The-homePage/Footer"));

const Contact = lazy(() => import("./Pages/Contact/Contact"));
const About = lazy(() => import("./Pages/LandingPage/About"));
const Login = lazy(() => import("./Pages/Login"));
const Builder = lazy(() => import("./Components/Builder/Builder"));
const ReactComponents = lazy(() => import("./Components/ReactComponents/ReactComponents"));
const PlatformSelector = lazy(() => import("./Components/PlatformSelector/PlatformSelector"));

import Navbar from "./Pages/LandingPage/The-homePage/Navbar"; // keep normal
import { BuilderProvider } from "./Context/BuilderContext";

// Loader component
function Loader() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-slate-50"
      role="status"
    >
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center w-16 h-16">
        {/* Background Track */}
        <div className="absolute w-full h-full border-4 border-slate-200 rounded-full"></div>
        
        {/* Spinning Indicator */}
        <div className="absolute w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-lg font-medium text-slate-600 animate-pulse">
        Loading...
      </p>

      {/* Screen Reader Text (Hidden visually) */}
      <span className="sr-only">Loading content, please wait.</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  // Hide navbar on full-screen utility pages
  const shouldShowNavbar = !["/builder", "/components", "/react-components"].some(route => 
    location.pathname.startsWith(route)
  );

  return (
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
  );
}