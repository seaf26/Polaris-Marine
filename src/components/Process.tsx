import React from 'react';
import { Anchor, LifeBuoy, Wrench, Ship } from 'lucide-react';

const steps = [
  {
    icon: Anchor,
    title: 'Marine Construction',
    description: '',
    details: [
      'Flat Top Barges',
      'Side Wall Barges',
      'Spud Barges',
      'Motor Yachts',
      'Fishing Boats',
      'Tug Boats',
      'Mooring Boats',
      'Landing Crafts',
    ],
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: LifeBuoy,
    title: 'Marine Equipment & Support',
    description: '',
    details: [
      'Navigational Equipment',
      'Life-Saving Appliances',
      'Diving Services',
    ],
    image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Wrench,
    title: 'Ship Maintenance & Modifications',
    description: '',
    details: [
      'Ship Repairs',
      'Ship Refits',
      'Marine Construction Modifications',
    ],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Ship,
    title: 'Offshore & Port Services',
    description: '',
    details: [
      'Offshore Constructions',
      'Berthing Services',
      'Vessel Welfare Support',
    ],
    image: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
];

const Process = () => {
  return (
    <section id="services"   className="py-20 bg-white dark:bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-100 max-w-3xl mx-auto">
            Explore our core marine services, designed to meet a wide range of construction, equipment, maintenance, and offshore needs.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-800 rounded-xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-300 mb-1">
                      Service {index + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Bulleted list of details */}
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-blue-100">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent dark:from-blue-950/60"></div>
                  {/* Step Number Overlay */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-blue-600 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-blue-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let our expert team 
              take care of all your marine service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;