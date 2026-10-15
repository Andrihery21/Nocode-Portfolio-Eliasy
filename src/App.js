import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
//import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="site-content">
        <Banner />
        <Features />
        <Projects />
        <Contact />
        <Footer />
        <FooterBottom />
      </main>
    </div>
  );
}

export default App;
