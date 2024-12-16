import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Destinations from "./pages/destinations/destinations.jsx";
import Faq from "./pages/faq.jsx";
export default function AppRouter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
