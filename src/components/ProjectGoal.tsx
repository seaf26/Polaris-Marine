import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectGoal: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 overflow-hidden" data-aos="fade-up">
      {/* Decorative SVG wave */}
      <svg className="absolute top-0 left-0 w-full h-24 text-blue-200 dark:text-slate-950" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="0.2" d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" />
      </svg>
      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="200">
        {/* Animated Icon */}
        <div className="mb-6 animate-bounce-slow">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 dark:bg-blue-900/80 shadow-2xl border-4 border-blue-300 dark:border-blue-700">
            <Star className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg text-hero">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent">{t('projectGoal')}</span>
        </h2>
        <div className="text-lg md:text-2xl font-semibold text-blue-100 mb-6 drop-shadow text-subtitle">
          <span className="text-cyan-200 font-bold">{t('projectGoalText')}</span>
        </div>
        <p className="text-base md:text-lg text-blue-50 dark:text-slate-300 max-w-2xl mx-auto mb-2 text-body">
          {t('projectGoalDesc')}
        </p>
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
      `}</style>
    </section>
  );
};

export default ProjectGoal; 