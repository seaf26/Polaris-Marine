import React from 'react';
import { MapPin, Users, BadgeCheck, Leaf, ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyPolaris: React.FC = () => {
  const { t } = useTranslation();
  const reasons = [
    {
      icon: <MapPin className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('whyPolaris.reason1.title'),
      desc: t('whyPolaris.reason1.desc'),
    },
    {
      icon: <Users className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('whyPolaris.reason2.title'),
      desc: t('whyPolaris.reason2.desc'),
    },
    {
      icon: <BadgeCheck className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('whyPolaris.reason3.title'),
      desc: t('whyPolaris.reason3.desc'),
    },
    {
      icon: <Leaf className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('whyPolaris.reason4.title'),
      desc: t('whyPolaris.reason4.desc'),
    },
    {
      icon: <ThumbsUp className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('whyPolaris.reason5.title'),
      desc: t('whyPolaris.reason5.desc'),
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 overflow-hidden" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-slate-100 mb-4 leading-tight drop-shadow-lg text-hero">
            {t('whyPolaris.title')}
          </h2>
          <p className="text-xl text-blue-700 dark:text-slate-300 max-w-2xl mx-auto text-subtitle">
            {t('whyPolaris.subtitle')}
          </p>
        </div>
        {/* Custom layout for 5 cards: 3 in first row, 2 centered in second row */}
        <div className="hidden lg:grid grid-cols-3 gap-8 justify-items-center">
          {reasons.slice(0, 3).map((reason, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/90 dark:bg-slate-800/90 dark:backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 dark:border-slate-700 p-8 hover:shadow-2xl transition-all duration-300 group w-full max-w-xs"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-slate-700 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-slate-100 mb-2 card-title">
                {reason.title}
              </h3>
              <p className="text-blue-700 dark:text-slate-300 text-base font-bold card-body">
                {reason.desc}
              </p>
            </div>
          ))}
          {/* Empty cell for spacing */}
          <div></div>
          <div className="col-span-3 flex justify-center gap-8 mt-0">
            {reasons.slice(3).map((reason, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white/90 dark:bg-slate-800/90 dark:backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 dark:border-slate-700 p-8 hover:shadow-2xl transition-all duration-300 group w-full max-w-xs"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-slate-700 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-slate-100 mb-2 card-title">
                  {reason.title}
                </h3>
                <p className="text-blue-700 dark:text-slate-300 text-base font-bold card-body">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Fallback for mobile/tablet: simple grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center lg:hidden">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/90 dark:bg-slate-800/90 dark:backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 dark:border-slate-700 p-8 hover:shadow-2xl transition-all duration-300 group w-full max-w-xs"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-slate-700 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-slate-100 mb-2 card-title">
                {reason.title}
              </h3>
              <p className="text-blue-700 dark:text-slate-300 text-base card-body">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPolaris; 