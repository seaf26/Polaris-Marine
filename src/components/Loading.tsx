import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <div className="backdrop-blur-lg bg-white/30 dark:bg-slate-800/40 rounded-3xl shadow-2xl border border-blue-100 dark:border-slate-700 p-10 md:p-16 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-b-4 border-blue-300 shadow-lg" style={{ boxShadow: '0 0 40px 8px #3b82f6, 0 0 0 0 #fff' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-400/60 blur-xl animate-pulse"></div>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-slate-100 mb-2 animate-pulse text-hero">{t('loading')}</h2>
        <p className="text-blue-700 dark:text-slate-300 text-lg animate-fade-in-slow text-body">{t('loadingDesc')}</p>
      </div>
      <style>{`
        @keyframes fade-in-slow {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 2.5s ease-in;
        }
      `}</style>
    </div>
  );
};

export default Loading; 