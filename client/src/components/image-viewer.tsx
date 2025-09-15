import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function ImageViewer({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onIndexChange 
}: ImageViewerProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onIndexChange(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onIndexChange(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Close viewer"
      >
        <X size={24} />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-4xl mx-auto px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image Display */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`Nicole Adams - Professional Emcee ${currentIndex + 1}`}
            className={`w-full h-auto max-h-[70vh] object-contain transition-all duration-300 ${
              isTransitioning ? 'opacity-70 scale-95' : 'opacity-100 scale-100'
            }`}
            draggable={false}
          />
          
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="mt-6 flex justify-center">
            <div className="flex gap-3 overflow-x-auto pb-2 max-w-full">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      onIndexChange(index);
                      setTimeout(() => setIsTransitioning(false), 300);
                    }
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-champagne shadow-lg shadow-champagne/30 scale-110'
                      : 'border-gray-600 hover:border-gray-400 hover:scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Navigation Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
        Use arrow keys or click arrows to navigate
      </div>
    </div>
  );
}
