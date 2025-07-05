import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, Sun, Moon } from 'lucide-react';
import logo from '../assets/polar50.png';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };
  return (
    <div className="ml-auto">
      <select
        value={i18n.language}
        onChange={changeLanguage}
        className="px-3 py-1 rounded-lg font-semibold transition-colors duration-200 bg-white text-blue-600 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={t('language')}
      >
        <option value="en">{t('english')}</option>
        <option value="ar">{t('arabic')}</option>
      </select>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const { t } = useTranslation();

  const navItems = React.useMemo(() => [
    { name: t('home'), id: 'home' },
    { name: t('services'), id: 'services' },
    { name: t('gallery'), id: 'gallery' },
    { name: t('about.polaris.title'), id: 'about' },
    { name: t('process'), id: 'process' },
    { name: t('contact'), id: 'contact' },
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add some offset for header height
      let currentSection = 'home';
      
      // Check each section to see which one is currently in view
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is in view (top of section is above viewport + offset)
          if (rect.top <= 100) {
            currentSection = item.id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    // Call once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

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
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900 border-b border-blue-100 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* <Anchor className="h-8 w-8 text-blue-700 dark:text-blue-300" /> */}
            <img src={logo} alt="hello" className='w-10 object-cover' />
            <span className="text-xl font-bold text-blue-800 dark:text-slate-100 tracking-tight text-shadow-sm">{t('polaris')}</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors px-2 pb-1 border-b-2 whitespace-nowrap nav-text ${
                  activeSection === item.id
                    ? 'text-blue-700 dark:text-cyan-300 border-blue-500 dark:border-cyan-400' 
                    : 'text-blue-700 dark:text-slate-300 border-transparent hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-cyan-500'
                }`}
              >
                {item.name}
              </button>
            ))}
            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full border border-blue-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-blue-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <LanguageSwitcher />
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
          <div className="md:hidden bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-700 rounded-lg mt-2 p-4 shadow-lg dark:shadow-slate-900/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                                                    className={`block w-full text-left py-2 px-2 rounded font-medium transition-colors mb-1 nav-text ${
                    activeSection === item.id
                      ? 'text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-slate-800' 
                      : 'text-blue-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {/* Dark mode toggle for mobile */}
              <button
                onClick={toggleDarkMode}
                className="mt-2 p-2 rounded-full border border-blue-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-blue-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-200 self-start"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;