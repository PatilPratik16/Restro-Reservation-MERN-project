// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Import Pages
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Reserve from "./Components/Reserve";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-16">
          {" "}
          {/* To avoid content going under the fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
