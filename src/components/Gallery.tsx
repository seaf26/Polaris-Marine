import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/IMG-20250626-WA0018.jpg';
import img2 from '../assets/IMG-20250626-WA0019.jpg';
import img3 from '../assets/IMG-20250626-WA0020.jpg';
import img4 from '../assets/IMG-20250626-WA0021.jpg';
import img5 from '../assets/IMG-20250626-WA0022.jpg';
import img6 from '../assets/IMG-20250626-WA0023.jpg';
import img7 from '../assets/IMG-20250626-WA0024.jpg';
import img8 from '../assets/IMG-20250626-WA0025.jpg';
import img9 from '../assets/IMG-20250626-WA0026.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: img1, title: 'Barge Construction Phase 1', category: 'Construction' },
    { src: img2, title: 'Steel Plate Shaping', category: 'Fabrication' },
    { src: img3, title: 'Welding & Assembly', category: 'Assembly' },
    { src: img4, title: 'Hull Completion', category: 'Hull' },
    { src: img5, title: 'Engine Installation', category: 'Engineering' },
    { src: img6, title: 'Electrical Systems Setup', category: 'Systems' },
    { src: img7, title: 'Painting & Finishing', category: 'Finishing' },
    { src: img8, title: 'Safety Inspection', category: 'Safety' },
    { src: img9, title: 'Barge Launch Event', category: 'Launch' },
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
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4 text-hero">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto text-subtitle">
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
                  <div className="text-xs text-cyan-300 font-medium mb-1 text-caption">{image.category}</div>
                  <div className="text-white font-semibold text-subtitle">{image.title}</div>
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
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-cyan-300 text-sm font-medium text-caption">{galleryImages[selectedImage].category}</div>
                <div className="text-white font-semibold text-lg text-subtitle">{galleryImages[selectedImage].title}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;