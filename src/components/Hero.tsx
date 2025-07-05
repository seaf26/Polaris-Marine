import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Anchor, Star, Users, Award } from 'lucide-react';

import img1 from '../assets/IMG-20250626-WA0018.jpg';
import img2 from '../assets/IMG-20250626-WA0019.jpg';
import img3 from '../assets/IMG-20250626-WA0020.jpg';
import img4 from '../assets/IMG-20250626-WA0021.jpg';
import img5 from '../assets/IMG-20250626-WA0022.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const backgroundImages = [img1, img2, img3, img4, img5];

  const stats = [
    { icon: Users, value: '2,500+', label: 'Happy Customers' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/60"></div>
      </div>

      {/* Two-column Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Main Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start">
          <div className={`relative w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-12 border border-white/30 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 
            {/* Floating Badge */}
            <div className="absolute left-8 -top-8 bg-gradient-to-r from-blue-500 to-blue-300 text-white px-6 py-2 rounded-full shadow-lg font-semibold text-xs tracking-widest border-2 border-white/40 animate-fade-in text-shadow-sm">
              ISO Certified
            </div>
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-cyan-600/20 backdrop-blur-md border border-cyan-400/30 rounded-full text-cyan-200 text-sm font-medium mb-8 animate-fade-in text-shadow-sm">
              <Anchor className="w-4 h-4 mr-2" />
              Crafting Marine Construction & Offshore Engineering
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-hero text-white leading-tight mb-8 animate-slide-up-fade">
              <span className="block">At Polarise, we transform vision into reality</span>
              <span className="block text-cyan-300 text-2xl md:text-3xl font-display font-bold text-shadow-md" style={{ animationDelay: '0.2s' }}>
                through world-class marine construction
              </span>
            </h1>
            <p className="text-lg md:text-xl text-light-enhanced mb-8 leading-relaxed max-w-3xl animate-slide-up-fade delay-200">Precision-engineered vessels and reliable offshore solutions. With unmatched expertise and a commitment to quality, we build more than just structures — we build trust across the seas.</p>
            {/* SEO Text */}
            <p className="text-sm text-cyan-200 mb-6 max-w-2xl italic animate-fade-in delay-300 font-medium">
              Polarise offers expert marine construction services including barge building, yacht fabrication, ship repair, offshore construction, and vessel maintenance — built with precision and engineered for the sea.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8 animate-fade-in delay-500">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 text-base btn-text"
              >
                🔹 build with us
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="tel:+1-555-0123"
                className="group inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 hover:scale-110 text-base btn-text"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Call Now
              </a>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 border-2 border-white/30 hover:border-white/50 hover:scale-110 text-base btn-text"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
        {/* Right: Stats */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end mt-12 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xl animate-fade-in delay-700">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-blue-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow-md">{stat.value}</div>
                <div className="text-cyan-200 text-shadow-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill="#0f172a" fillOpacity="0.7" d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-6 h-6 rounded-full transition-all duration-300 mx-1 focus:outline-none ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;