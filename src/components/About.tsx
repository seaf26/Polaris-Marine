import React, { useEffect } from 'react';
import { Award, Clock, Users, MapPin } from 'lucide-react';

const stats = [
  { icon: Clock, label: 'Years Experience', value: '25+' },
  { icon: Users, label: 'Happy Customers', value: '2,500+' },
  { icon: Award, label: 'Certified Technicians', value: '15' },
  { icon: MapPin, label: 'Service Locations', value: '8' }
];

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.countup');
    elements.forEach((el) => {
      const value = parseInt(el.getAttribute('data-value')?.replace(/\D/g, '') || '0', 10);
      if (value > 0) {
        let start = 0;
        const duration = 1200;
        const step = Math.ceil(value / (duration / 16));
        const animate = () => {
          start += step;
          if (start > value) start = value;
          el.textContent = value.toString().includes('+') ? `${start}+` : `${start}`;
          if (start < value) requestAnimationFrame(animate);
        };
        animate();
      }
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Marine Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="marine-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#3b82f6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#marine-dots)" />
          </svg>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-2 h-10 bg-blue-600 rounded-full mr-4"></div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
              Polarise is a leading marine construction company providing tailored solutions for the maritime and offshore sectors. We take pride in building durable, high-performance vessels and marine structures that meet international standards and client-specific requirements.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Our team combines technical expertise with a commitment to safety and innovation — ensuring smooth sailing from concept to completion.
            </p>
            {/* Stats Grid in Glass Card */}
            <div className="grid grid-cols-2 gap-4 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100 p-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1 countup" data-value={stat.value}>{stat.value}</div>
                  <div className="text-gray-600 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Marine technician working on boat engine"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certified Excellence</div>
                  <div className="text-sm text-gray-600">NMMA & ABYC Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;