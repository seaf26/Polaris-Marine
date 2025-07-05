import React from 'react';
import { Globe2, Ship, Wrench, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/ancient-egyptian-boats-1.webp';

interface PolarisAboutProps {
  t?: (key: string) => string;
}

const PolarisAbout: React.FC<PolarisAboutProps> = ({  }) => {
  const { t } = useTranslation();
  
  const expertiseItems = [
    {
      icon: <Ship className="w-6 h-6" />,
      text: t ? t('about.polaris.expertise1') : 'Practical maritime navigation expertise'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      text: t ? t('about.polaris.expertise2') : 'Specialized engineering in marine vessel design'
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: t ? t('about.polaris.expertise3') : 'Advanced industrial and operational management'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 overflow-hidden" data-aos="fade-up">
      {/* Decorative SVG wave top */}
      <svg className="absolute top-0 left-0 w-full h-24 text-blue-200 dark:text-slate-950" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="0.2" d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" />
      </svg>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Title - Centered */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-6 animate-bounce-slow">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 dark:bg-blue-900/80 shadow-2xl border-4 border-blue-300 dark:border-blue-700">
              <Globe2 className="w-12 h-12 text-blue-600 dark:text-blue-300" />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-slate-100 mb-6 leading-tight drop-shadow-lg text-hero">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t ? t('about.polaris.title') : 'About Polaris'}
            </span>
          </h2>
          <div className="text-lg md:text-xl font-semibold text-blue-900 dark:text-slate-300 max-w-4xl mx-auto drop-shadow text-subtitle">
            {t
              ? t('about.polaris.intro')
              : `Polaris was founded by three senior experts with decades of experience in marine navigation, shipbuilding, and industrial project execution. This diverse leadership empowers us to deliver fully integrated solutions that meet the highest international standards of quality, safety, and sustainability.`}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with animation */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right" data-aos-delay="200">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Marine construction and shipbuilding" 
                className="w-full h-[500px] object-cover transform hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-delayed">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-delay="400">
            <div className="bg-white/90 dark:bg-slate-800/90 dark:backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 text-center text-title">
                {t ? t('about.polaris.leadership') : 'Our leadership integrates:'}
              </h3>
              
              <div className="space-y-6">
                {expertiseItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-blue-200 dark:border-slate-600"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-700 text-white shadow-lg">
                      {item.icon}
                    </div>
                    <span className="text-blue-900 dark:text-slate-300 text-base md:text-lg font-medium flex-1 text-body">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              
                             {/* Additional info card */}
               <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-2xl text-white">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <h4 className="font-semibold text-lg">
                     {t ? t('about.polaris.qualityAssurance.title') : 'Quality Assurance'}
                   </h4>
                 </div>
                 <p className="text-blue-100 text-sm leading-relaxed">
                   {t ? t('about.polaris.qualityAssurance.description') : 'Every project is executed with precision, adhering to international maritime standards and best practices in marine construction.'}
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative SVG wave bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-24 text-blue-200 dark:text-slate-950" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default PolarisAbout; 