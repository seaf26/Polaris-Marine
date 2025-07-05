import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/polar50.png';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 dark:bg-slate-900 text-white z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 gap-2" >
              <img src={logo} alt="Polaris Logo" className="h-10 w-10 bg-white rounded-full" />
              <span className="text-2xl font-bold">{t('footer.companyName')}</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              {t('footer.companyDesc')}
            </p>
            <div className="flex">
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors ml-4" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors ml-4" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors ml-4" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.services.0')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.services.1')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.services.2')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.services.3')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.services.4')}</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinksTitle')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.quickLinks.0')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.quickLinks.1')}</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.quickLinks.2')}</a></li>
              <li><a href="#gallery" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.quickLinks.3')}</a></li>
              <li><a href="#process" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.quickLinks.4')}</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footer.quickLinks.5')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-title">{t('footer.contactTitle')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <a href="tel:+201111111206" className="text-blue-100 hover:text-blue-300 transition-colors text-body">{t('footer.phone')}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <a href="mailto:info@polarismarine.com" className="text-blue-100 hover:text-blue-300 transition-colors text-body">{t('footer.email')}</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-300 mt-0.5" />
                <a href="https://maps.app.goo.gl/DvMbY3p1D6uoDWWL8?g_st=iw" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-blue-300 transition-colors text-body">
                  {t('locationMain')}<br />
                  {/* {t('footer.address.line2')} */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 dark:text-slate-300 text-sm text-body">
              © {currentYear} {t('footer.companyName')}. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 dark:text-slate-300 hover:text-blue-400 dark:hover:text-cyan-400 text-sm transition-colors text-body">{t('footer.privacy')}</a>
              <a href="#" className="text-blue-200 dark:text-slate-300 hover:text-blue-400 dark:hover:text-cyan-400 text-sm transition-colors text-body">{t('footer.terms')}</a>
              <a href="#" className="text-blue-200 dark:text-slate-300 hover:text-blue-400 dark:hover:text-cyan-400 text-sm transition-colors text-body">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;