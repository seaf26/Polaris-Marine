import React from 'react';
import { FileText, Wrench, Briefcase, Globe2, CheckCircle } from 'lucide-react';
import imgPrep from '../assets/IMG-20250626-WA0018.jpg';
import imgExec from '../assets/IMG-20250626-WA0020.jpg';
import imgPromo from '../assets/IMG-20250626-WA0023.jpg';
import imgFuture from '../assets/IMG-20250626-WA0026.jpg';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: FileText,
      title: t('phaseOneTitle'),
      details: [
        t('phaseOneDetail1'),
        t('phaseOneDetail2'),
        t('phaseOneDetail3'),
        t('phaseOneDetail4'),
        t('phaseOneDetail5'),
        t('phaseOneDetail6'),
        t('phaseOneDetail7'),
        t('phaseOneDetail8'),
        t('phaseOneDetail9'),
        t('phaseOneDetail10'),
        t('phaseOneDetail11'),
        t('phaseOneDetail12'),
        t('phaseOneDetail13'),
      ],
      image: imgPrep,
    },
    {
      icon: Wrench,
      title: t('phaseTwoTitle'),
      details: [
        t('phaseTwoDetail1'),
        t('phaseTwoDetail2'),
        t('phaseTwoDetail3'),
        t('phaseTwoDetail4'),
        t('phaseTwoDetail5'),
        t('phaseTwoDetail6'),
        t('phaseTwoDetail7'),
        t('phaseTwoDetail8'),
        t('phaseTwoDetail9'),
        t('phaseTwoDetail10'),
        t('phaseTwoDetail11'),
        t('phaseTwoDetail12'),
        t('phaseTwoDetail13'),
        t('phaseTwoDetail14'),
        t('phaseTwoDetail15'),
      ],
      image: imgExec,
    },
    {
      icon: Briefcase,
      title: t('phaseThreeTitle'),
      details: [
        t('phaseThreeDetail1'),
        t('phaseThreeDetail2'),
        t('phaseThreeDetail3'),
        t('phaseThreeDetail4'),
        t('phaseThreeDetail5'),
        t('phaseThreeDetail6'),
        t('phaseThreeDetail7'),
        t('phaseThreeDetail8'),
        t('phaseThreeDetail9'),
      ],
      image: imgPromo,
    },
    {
      icon: Globe2,
      title: t('phaseFourTitle'),
      details: [
        t('phaseFourDetail1'),
        t('phaseFourDetail2'),
        t('phaseFourDetail3'),
        t('phaseFourDetail4'),
        t('phaseFourDetail5'),
        t('phaseFourDetail6'),
        t('phaseFourDetail7'),
        t('phaseFourDetail8'),
        t('phaseFourDetail9'),
        t('phaseFourDetail10'),
        t('phaseFourDetail11'),
        t('phaseFourDetail12'),
        t('phaseFourDetail13'),
      ],
      image: imgFuture,
    },
  ];

  const PhaseCard = ({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) => (
    <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-white dark:bg-blue-900/80 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-800 px-6 py-10 md:px-10 md:py-14 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
      {/* Timeline/Stepper */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center z-10 lg:static lg:mr-0">
        <div className="hidden lg:block w-2 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full opacity-40" style={{ minHeight: '100%' }}></div>
        <div className="lg:absolute lg:left-[-2.5rem] lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-600 dark:bg-blue-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-blue-950">
            <step.icon className="h-8 w-8 text-white" />
          </div>
          <span className="mt-2 text-blue-700 dark:text-blue-200 font-bold text-lg">{index + 1}</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 space-y-6">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900 dark:text-white mb-2 tracking-tight flex items-center gap-3">
          {step.title}
        </h3>
        <ul className="space-y-3">
          {step.details.map((detail: string, detailIndex: number) => (
            <li key={detailIndex} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-blue-100 text-base leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-blue-200 dark:border-blue-800 w-full max-w-md h-72 md:h-80 bg-blue-50 dark:bg-blue-950">
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent dark:from-blue-950/60"></div>
          {/* Step Number Overlay for mobile */}
          <div className="absolute top-4 left-4 w-10 h-10 bg-blue-600 dark:bg-blue-800 rounded-full flex items-center justify-center lg:hidden">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
        </div>
      </div>
      {/* Timeline connector for mobile */}
      {index < total - 1 && (
        <div className="block lg:hidden absolute left-1/2 bottom-0 w-1 h-10 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full opacity-40" style={{ transform: 'translateX(-50%)' }}></div>
      )}
    </div>
  );

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            {t('process')}
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-100 max-w-3xl mx-auto">
            {t('processDesc')}
          </p>
        </div>
        <div className="space-y-16 relative">
          {steps.map((step, index) => (
            <PhaseCard key={index} step={step} index={index} total={steps.length} />
          ))}
        </div>
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-blue-100 dark:bg-blue-900/60 rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
              {t('readyToGetStarted')}
            </h3>
            <p className="text-xl text-blue-700 dark:text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('processCTA')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('getFreeQuote')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;