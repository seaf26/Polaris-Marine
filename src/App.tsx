import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

// Lazy load larger components
const Process = lazy(() => import('./components/Process'));
// const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const MansoryDemo = lazy(() => import('./components/MansoryDemo'));
const ProjectGoal = lazy(() => import('./components/ProjectGoal'));
const PolarisAbout = lazy(() => import('./components/PolarisAbout'));
const OurServices = lazy(() => import('./components/OurServices'));
const WhyPolaris = lazy(() => import('./components/WhyPolaris'));
const FutureVision = lazy(() => import('./components/FutureVision'));
const MaritimeHeroSection = lazy(() => import('./components/maritime-hero-section'));

function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <MaritimeHeroSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <PolarisAbout />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <WhyPolaris />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FutureVision />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProjectGoal />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <OurServices />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Process />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MansoryDemo />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}