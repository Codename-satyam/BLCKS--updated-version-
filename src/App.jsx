import HomePage from "./Pages/LandingPage/HomePage";
import Navbar from "./Pages/LandingPage/Navbar";
import Page2 from "./Pages/LandingPage/page2";
import Contact from "./Contact/Contact";
import Page3 from "./Pages/LandingPage/page3";
import { Route, Routes } from "react-router-dom";

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
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}