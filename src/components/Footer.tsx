import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-blue-300" />
              <span className="text-2xl font-bold">Polarise Marine</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Polarise Marine delivers world-class marine construction, precision-engineered vessels, and reliable offshore solutions. Building trust across the seas with expertise and innovation.
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">Marine Construction</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">Vessel Building</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">Ship Maintenance</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">Offshore Engineering</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">Port Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-blue-300 transition-colors">Services</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-blue-300 transition-colors">Contact</a></li>
              <li><a href="#gallery" className="text-blue-100 hover:text-blue-300 transition-colors">Gallery</a></li>
              <li><a href="#process" className="text-blue-100 hover:text-blue-300 transition-colors">Process</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">info@polarise-marine.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-300 mt-0.5" />
                <span className="text-blue-100">
                  789 Oceanic Drive<br />
                  Harbor City, CA 90210
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {currentYear} Polarise Marine. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;