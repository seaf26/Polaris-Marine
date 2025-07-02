import React from 'react';
import { Factory, Ship, Landmark, Handshake, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FutureVision: React.FC = () => {
  const { t } = useTranslation();
  const visions = [
    {
      icon: <Factory className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('futureVision.vision1.title'),
      desc: t('futureVision.vision1.desc'),
    },
    {
      icon: <Ship className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('futureVision.vision2.title'),
      desc: t('futureVision.vision2.desc'),
    },
    {
      icon: <Landmark className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('futureVision.vision3.title'),
      desc: t('futureVision.vision3.desc'),
    },
    {
      icon: <Handshake className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('futureVision.vision4.title'),
      desc: t('futureVision.vision4.desc'),
    },
    {
      icon: <Globe2 className="w-7 h-7 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('futureVision.vision5.title'),
      desc: t('futureVision.vision5.desc'),
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 overflow-hidden" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4 leading-tight drop-shadow-lg">
            {t('futureVision.title')}
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-100 max-w-2xl mx-auto">
            {t('futureVision.subtitle')}
          </p>
        </div>
        {/* Custom layout for 5 cards: 3 in first row, 2 centered in second row */}
        <div className="hidden lg:grid grid-cols-3 gap-8 justify-items-center">
          {visions.slice(0, 3).map((vision, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/90 dark:bg-blue-900/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 p-8 hover:shadow-2xl transition-all duration-300 group w-full max-w-xs"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-800 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {vision.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">
                {vision.title}
              </h3>
              <p className="text-blue-700 dark:text-blue-100 text-base">
                {vision.desc}
              </p>
            </div>
          ))}
          {/* Empty cell for spacing */}
          <div></div>
          <div className="col-span-3 flex justify-center gap-8 mt-0">
            {visions.slice(3).map((vision, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white/90 dark:bg-blue-900/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 p-8 hover:shadow-2xl transition-all duration-300 group w-full max-w-xs"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-800 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {vision.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">
                  {vision.title}
                </h3>
                <p className="text-blue-700 dark:text-blue-100 text-base">
                  {vision.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Fallback for mobile/tablet: simple grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center lg:hidden">
          {visions.map((vision, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/90 dark:bg-blue-900/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 p-8 hover:shadow-2xl transition-all duration-300 group w-full max-w-xs"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-800 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {vision.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">
                {vision.title}
              </h3>
              <p className="text-blue-700 dark:text-blue-100 text-base">
                {vision.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision; 