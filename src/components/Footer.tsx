import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-blue-300" />
              <span className="text-2xl font-bold">{t('footerCompany')}</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerServices')}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footerMarineConstruction')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footerVesselBuilding')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footerShipMaintenance')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footerOffshoreEngineering')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('footerPortServices')}</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerQuickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-blue-300 transition-colors">{t('home')}</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">{t('services')}</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-blue-300 transition-colors">{t('about')}</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-blue-300 transition-colors">{t('contact')}</a></li>
              <li><a href="#gallery" className="text-blue-100 hover:text-blue-300 transition-colors">{t('gallery')}</a></li>
              <li><a href="#process" className="text-blue-100 hover:text-blue-300 transition-colors">{t('process')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerContactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">{t('footerPhone')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">{t('footerEmail')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-300 mt-0.5" />
                <span className="text-blue-100">
                  {t('footerAddress')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {currentYear} {t('footerCompany')}. {t('footerRights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">{t('footerPrivacy')}</a>
              <a href="#" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">{t('footerTerms')}</a>
              <a href="#" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">{t('footerCookie')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;