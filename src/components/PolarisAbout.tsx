import React from 'react';
import { Globe2 } from 'lucide-react';

interface PolarisAboutProps {
  t?: (key: string) => string;
}

const PolarisAbout: React.FC<PolarisAboutProps> = ({ t }) => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 overflow-hidden" data-aos="fade-up">
      {/* Decorative SVG wave top */}
      <svg className="absolute top-0 left-0 w-full h-24 text-blue-200 dark:text-blue-950" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="0.2" d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" />
      </svg>
      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="200">
        {/* Animated Icon */}
        <div className="mb-6 animate-bounce-slow">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 dark:bg-blue-900/80 shadow-2xl border-4 border-blue-300 dark:border-blue-700">
            <Globe2 className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4 leading-tight drop-shadow-lg">
          <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 bg-clip-text text-transparent">
            {t ? t('about.polaris.title') : 'About Polaris'}
          </span>
        </h2>
        <div className="text-lg md:text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-6 drop-shadow">
          {t
            ? t('about.polaris.intro')
            : `Polaris was founded by three senior experts with decades of experience in marine navigation, shipbuilding, and industrial project execution. This diverse leadership empowers us to deliver fully integrated solutions that meet the highest international standards of quality, safety, and sustainability.`}
        </div>
        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
          {t ? t('about.polaris.leadership') : 'Our leadership integrates:'}
        </h3>
        <ul className="flex flex-col gap-4 max-w-md mx-auto w-full">
          {[ 
            t ? t('about.polaris.expertise1') : 'Practical maritime navigation expertise',
            t ? t('about.polaris.expertise2') : 'Specialized engineering in marine vessel design',
            t ? t('about.polaris.expertise3') : 'Advanced industrial and operational management'
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-white/80 dark:bg-blue-900/70 rounded-xl shadow-md px-5 py-4 transition-transform hover:scale-[1.025] hover:shadow-xl border border-blue-100 dark:border-blue-800"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-700 text-white text-xl shadow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Decorative SVG wave bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-24 text-blue-200 dark:text-blue-950" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="0.2" d="M0,80 C360,0 1080,120 1440,40 L1440,120 L0,120 Z" />
      </svg>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default PolarisAbout; 