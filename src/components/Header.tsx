import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Process', id: 'process' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      let currentSection = 'home';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-50 bg-white border-b border-blue-100 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Anchor className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold text-blue-800 tracking-tight">Polarise Marine</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors px-1 pb-1 border-b-2 ${
                  activeSection === item.id
                    ? 'text-blue-700 border-blue-500' 
                    : 'text-blue-700 border-transparent hover:text-blue-500 hover:border-blue-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-700" />
            ) : (
              <Menu className="h-6 w-6 text-blue-700" />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border border-blue-100 rounded-lg mt-2 p-4 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-2 rounded font-medium transition-colors mb-1 ${
                  activeSection === item.id
                    ? 'text-blue-700 bg-blue-50' 
                    : 'text-blue-700 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;