import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Component/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Industries from "./pages/Industries.jsx";
import Package from "./pages/Package.jsx";
import Career from "./pages/Career.jsx";
import Policies from "./pages/Policies.jsx";
import Admin from "./pages/Admin.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Footer from "./assets/Component/Footer.jsx";

import ScrollToTop from "./assets/Component/ScrollToTop";
import TrackAnalytics from "./TrackAnalytics";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* Google Analytics Page View Tracker */}
      <TrackAnalytics />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:serviceName" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/package" element={<Package />} />
        <Route path="/career" element={<Career />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/admin" element={<Admin />} />

        {/* Blog routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
