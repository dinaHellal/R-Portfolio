import React from "react";
import "../src/index.css";
import Navbar from "../src/components/navbar";
import Hero from "../src/components/hero";
import About from "../src/components/about";
import Services from "../src/components/services";
import Blog from "../src/components/blog";
import Contact from "../src/components/contact";
import Footer from "../src/components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
