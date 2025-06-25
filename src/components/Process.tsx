import React from 'react';
import { Phone, Calendar, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Call or fill out our online form to describe your marine service needs.',
      details: ['Free consultation', 'Emergency services available', '24/7 support line'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Calendar,
      title: 'Schedule Inspection',
      description: 'We arrange a convenient time to inspect your vessel and provide a detailed quote.',
      details: ['On-site evaluation', 'Detailed written estimate', 'Timeline discussion'],
      image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Expert Service',
      description: 'Our certified technicians perform the work using quality parts and proven techniques.',
      details: ['Certified technicians', 'Quality parts & materials', 'Progress updates'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'We test all work thoroughly and provide documentation before returning your vessel.',
      details: ['Comprehensive testing', 'Service documentation', 'Warranty coverage'],
      image: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined our process to make marine service as convenient and 
            transparent as possible. Here's how we work with you from start to finish.
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
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-600 mb-1">
                      Step {index + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                {index < steps.length - 1 && (
                  <div className="flex items-center space-x-2 text-blue-600 font-medium">
                    <span>Next Step</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  
                  {/* Step Number Overlay */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="tel:+1-555-0123"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-lg transition-all duration-300 border-2 border-blue-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;