import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Captain James Mitchell',
      role: 'Yacht Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'AquaMarine Services has been maintaining my 45-foot yacht for over 8 years. Their attention to detail and professional service is unmatched. I trust them completely with my vessel.',
      location: 'Marina Bay'
    },
    {
      name: 'Sarah Thompson',
      role: 'Fishing Boat Owner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'When my engine failed 20 miles offshore, AquaMarine\'s emergency service saved the day. They had me back on the water within hours. Exceptional service and fair pricing.',
      location: 'Harbor Point'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Commercial Fleet Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Managing a fleet of 12 vessels, I need reliable service partners. AquaMarine consistently delivers quality work on time and within budget. They\'re our go-to marine service provider.',
      location: 'Commercial Harbor'
    },
    {
      name: 'Lisa Chen',
      role: 'Sailboat Enthusiast',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The team at AquaMarine restored my vintage sailboat to better-than-new condition. Their craftsmanship and knowledge of classic boats is impressive. Highly recommended!',
      location: 'Sunset Marina'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what boat owners throughout the region 
            have to say about our marine services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-200" />
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-blue-600 text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center text-blue-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center text-blue-600 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;