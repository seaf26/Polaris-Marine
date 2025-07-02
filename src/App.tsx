import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
// import Emergency from './components/Emergency';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MaritimeHeroSection from "./components/maritime-hero-section"
import MansoryDemo from "./components/MansoryDemo"
import ProjectGoal from './components/ProjectGoal';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import PolarisAbout from './components/PolarisAbout';
import OurServices from './components/OurServices';
import WhyPolaris from './components/WhyPolaris';
import FutureVision from './components/FutureVision';

function Home() {
  return (
    <>
      <Header />
      <MaritimeHeroSection />
      <PolarisAbout />
      <WhyPolaris />
      <FutureVision />
      <ProjectGoal />
      {/* <Services /> */}
      <OurServices />
      <Process />
      {/* <Gallery /> */}
      <MansoryDemo />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}> {/* Show loading while lazy components load */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed, e.g. <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}