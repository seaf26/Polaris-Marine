import React from 'react';
import { Ship, Wrench, Layers, LifeBuoy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurServices: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Ship className="w-8 h-8 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('ourServices.service1.title'),
      desc: t('ourServices.service1.desc'),
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('ourServices.service2.title'),
      desc: t('ourServices.service2.desc'),
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('ourServices.service3.title'),
      desc: t('ourServices.service3.desc'),
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-blue-600 group-hover:!text-white transition-colors" />,
      title: t('ourServices.service4.title'),
      desc: t('ourServices.service4.desc'),
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 overflow-hidden" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4 leading-tight drop-shadow-lg">
            {t('ourServices.title')}
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-100 max-w-2xl mx-auto">
            {t('ourServices.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 bg-white/90 dark:bg-blue-900/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 p-7 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-blue-700 dark:text-blue-100 text-base">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-100 dark:bg-blue-900/60 rounded-xl p-8 shadow text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-blue-900 dark:text-blue-100 font-semibold">
            {t('ourServices.note1')} <span className="text-blue-700 dark:text-yellow-200 font-bold">{t('ourServices.note2')}</span> {t('ourServices.note3')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices; 