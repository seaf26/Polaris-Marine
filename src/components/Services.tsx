import React from 'react';
import { Anchor, Wrench, Ship, LifeBuoy } from 'lucide-react';

const features = [
  {
    title: 'Marine Construction',
    description: 'Flat Top Barges, Side Wall Barges, Spud Barges, Motor Yachts, Fishing Boats, Tug Boats, Mooring Boats, Landing Crafts',
    icon: <Anchor className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Marine Equipment & Support',
    description: 'Navigational Equipment, Life-Saving Appliances, Diving Services',
    icon: <LifeBuoy className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Ship Maintenance & Modifications',
    description: 'Ship Repairs, Ship Refits, Marine Construction Modifications',
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Offshore & Port Services',
    description: 'Offshore Constructions, Berthing Services, Vessel Welfare Support',
    icon: <Ship className="w-8 h-8 text-blue-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto rounded-2xl shadow-xl bg-white/80">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={
        [
          "flex flex-col border-blue-100 py-10 relative group/feature",
          index !== 0 && 'lg:border-l',
          index < 2 && 'md:border-b',
        ].filter(Boolean).join(' ')
      }
      style={{ borderColor: '#dbeafe' }}
    >
      <div className="mb-4 relative z-10 px-10 text-blue-500">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-100 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-blue-900">
          {title}
        </span>
      </div>
      <p className="text-sm text-blue-700 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default Services;