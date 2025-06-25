import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
// import Emergency from './components/Emergency';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MaritimeHeroSection from "./components/maritime-hero-section"
import MansoryDemo from "./components/MansoryDemo"
import { NavbarDemo } from './components/NavbarDemo';

function App() {
  return (
    <div className="min-h-screen">
      <NavbarDemo />
      <MaritimeHeroSection />
      <Services />
      <Process />
      <About />
      {/* <Gallery /> */}
      <MansoryDemo />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;