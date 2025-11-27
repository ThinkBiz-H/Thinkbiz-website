import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Component/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Industries from "./pages/Industries.jsx";
import Package from "./pages/Package.jsx";
import Career from "./pages/Career.jsx"; //
import Footer from "./assets/Component/Footer.jsx";
import Admin from "./pages/Admin.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:serviceName" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/package" element={<Package />} />
        <Route path="/career" element={<Career />} />{" "}
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
