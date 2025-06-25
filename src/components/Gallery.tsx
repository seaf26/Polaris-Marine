import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Engine Maintenance',
      category: 'Maintenance'
    },
    {
      src: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Luxury Yacht Service',
      category: 'Repairs'
    },
    {
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Marina Facilities',
      category: 'Marina'
    },
    {
      src: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Boat Transport',
      category: 'Transport'
    },
    {
      src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Hull Restoration',
      category: 'Restoration'
    },
    {
      src: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Professional Team',
      category: 'Team'
    },
    {
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Quality Workmanship',
      category: 'Maintenance'
    },
    {
      src: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Modern Equipment',
      category: 'Equipment'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see the quality craftsmanship 
            that sets AquaMarine Services apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-blue-300 font-medium mb-1">{image.category}</div>
                  <div className="text-white font-semibold">{image.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-blue-300 text-sm font-medium">{galleryImages[selectedImage].category}</div>
                <div className="text-white font-semibold text-lg">{galleryImages[selectedImage].title}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;