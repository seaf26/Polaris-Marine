import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, Sun, Moon } from 'lucide-react';
import logo from '../assets/s__1_-removebg-preview.png';
const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    // On mount, check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-blue-950 border-b border-blue-100 dark:border-blue-800 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* <Anchor className="h-8 w-8 text-blue-700 dark:text-blue-300" /> */}
            <img src={logo} alt="hello" className='w-12 object-cover '  />
            <span className="text-2xl font-bold text-blue-800 dark:text-white tracking-tight">Polarise Marine</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors px-1 pb-1 border-b-2 ${
                  activeSection === item.id
                    ? 'text-blue-700 dark:text-blue-300 border-blue-500 dark:border-blue-400' 
                    : 'text-blue-700 dark:text-blue-200 border-transparent hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500'
                }`}
              >
                {item.name}
              </button>
            ))}
            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="ml-6 p-2 rounded-full border border-blue-100 dark:border-blue-800 bg-white dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-700 dark:text-blue-300" />
            ) : (
              <Menu className="h-6 w-6 text-blue-700 dark:text-blue-300" />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-800 rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-2 rounded font-medium transition-colors mb-1 ${
                    activeSection === item.id
                      ? 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900' 
                      : 'text-blue-700 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {/* Dark mode toggle for mobile */}
              <button
                onClick={toggleDarkMode}
                className="mt-2 p-2 rounded-full border border-blue-100 dark:border-blue-800 bg-white dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-800 transition-colors duration-200 self-start"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;