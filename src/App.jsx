import HomePage from "./Pages/LandingPage/HomePage";
import Navbar from "./Pages/LandingPage/Navbar";
import Page2 from "./Pages/LandingPage/page2";
import Contact from "./Pages/Contact/Contact";
import Page3 from "./Pages/LandingPage/page3";
import Page4 from "./Pages/LandingPage/page4";
import Page5 from "./Pages/LandingPage/page5";
import Footer from "./Pages/LandingPage/Footer";
import Login from "./Pages/Login";
import About from "./Pages/LandingPage/About";
import { Route, Routes } from "react-router-dom";
import Builder from "./Components/Builder/Builder";
import { BuilderProvider } from "./Context/BuilderContext";

export default function App(){
  return (
    <div>
      <Navbar />
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
        <Route
          path="/builder"
          element={
            <BuilderProvider>
              <Builder />
            </BuilderProvider>
          }
        />
      </Routes>
    </div>
  )
}