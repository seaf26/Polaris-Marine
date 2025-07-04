import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <div className="backdrop-blur-lg bg-white/30 dark:bg-slate-800/40 rounded-3xl shadow-2xl border border-blue-100 dark:border-slate-700 p-10 md:p-16 flex flex-col items-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600 dark:text-cyan-300 mb-6 drop-shadow-lg animate-glow text-hero">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-slate-100 mb-4 text-title">{t('notFound')}</h2>
        <p className="text-blue-700 dark:text-slate-300 text-lg mb-8 text-body">{t('notFoundDesc')}</p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 backdrop-blur-md btn-text"
        >
          {t('goHome')}
        </button>
      </div>
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 32px #3b82f6, 0 0 0 #fff; }
          50% { text-shadow: 0 0 64px #60a5fa, 0 0 16px #fff; }
        }
        .animate-glow {
          animation: glow 2.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default NotFound; 