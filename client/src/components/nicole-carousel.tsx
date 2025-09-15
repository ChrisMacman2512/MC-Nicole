import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function NicoleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});
  const [visibleThumbnails, setVisibleThumbnails] = useState<Set<number>>(new Set());
  const preloadRefs = useRef<{ [key: number]: HTMLImageElement }>({});
  const thumbnailRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});

  // Generate all 40 images (nicole_gallery_1.jpeg to nicole_gallery_40.jpeg)
  const generateAllImages = () => {
    return Array.from({ length: 40 }, (_, index) => ({
      id: index + 1,
      image: `/NicoleImages/nicole_gallery_${index + 1}.jpeg`
    }));
  };

  const images = generateAllImages();

  // Preload images for better performance
  const preloadImage = (index: number) => {
    if (loadedImages.has(index) || preloadRefs.current[index]) return;
    
    const img = new Image();
    img.src = images[index].image;
    img.onload = () => {
      setLoadedImages(prev => new Set([...prev, index]));
      setImageLoading(prev => ({ ...prev, [index]: false }));
    };
    img.onerror = () => {
      setImageLoading(prev => ({ ...prev, [index]: false }));
    };
    preloadRefs.current[index] = img;
    setImageLoading(prev => ({ ...prev, [index]: true }));
  };

  // Preload current, next, and previous images
  useEffect(() => {
    const preloadIndices = [
      currentIndex,
      (currentIndex + 1) % images.length,
      (currentIndex - 1 + images.length) % images.length
    ];
    
    preloadIndices.forEach(index => {
      if (!loadedImages.has(index)) {
        preloadImage(index);
      }
    });
  }, [currentIndex, images.length, loadedImages]);

  // Intersection Observer for thumbnail lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleThumbnails(prev => new Set([...prev, index]));
          }
        });
      },
      { rootMargin: '50px' }
    );

    Object.values(thumbnailRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning, images.length]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-scroll thumbnail to keep current image visible (within container only)
  useEffect(() => {
    const currentThumbnail = thumbnailRefs.current[currentIndex];
    const thumbnailContainer = currentThumbnail?.parentElement;
    
    if (currentThumbnail && thumbnailContainer) {
      const containerRect = thumbnailContainer.getBoundingClientRect();
      const thumbnailRect = currentThumbnail.getBoundingClientRect();
      
      // Check if thumbnail is outside the visible area of the container
      const isOutOfView = 
        thumbnailRect.left < containerRect.left ||
        thumbnailRect.right > containerRect.right;
      
      if (isOutOfView) {
        // Calculate the scroll position to center the thumbnail
        const scrollLeft = currentThumbnail.offsetLeft - 
          (thumbnailContainer.clientWidth / 2) + 
          (currentThumbnail.clientWidth / 2);
        
        thumbnailContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case ' ':
          e.preventDefault();
          toggleAutoPlay();
          break;
        case 'Escape':
          setIsAutoPlaying(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
        {/* Main Image Display */}
        <div className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-gray-900">
          {/* Loading Skeleton */}
          {imageLoading[currentIndex] && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-champagne/30 border-t-champagne rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Main Image */}
          <img
            src={images[currentIndex].image}
            alt={`Nicole Adams - Professional Emcee ${currentIndex + 1}`}
            className={`max-w-full max-h-[70vh] object-contain transition-all duration-500 ${
              isTransitioning ? 'opacity-70 scale-105' : 'opacity-100 scale-100'
            } ${imageLoading[currentIndex] ? 'opacity-0' : 'opacity-100'}`}
            draggable={false}
            loading="eager"
            decoding="async"
            onLoad={() => {
              setImageLoading(prev => ({ ...prev, [currentIndex]: false }));
              setLoadedImages(prev => new Set([...prev, currentIndex]));
            }}
            onError={() => {
              setImageLoading(prev => ({ ...prev, [currentIndex]: false }));
            }}
          />
          
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 left-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2 max-w-full scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={image.id}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              data-index={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 disabled:opacity-50 ${
                index === currentIndex
                  ? 'border-champagne shadow-lg shadow-champagne/30 scale-110'
                  : 'border-gray-600 hover:border-gray-400 hover:scale-105'
              }`}
            >
              {visibleThumbnails.has(index) ? (
                <img
                  src={image.image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="mt-4 flex justify-center items-center gap-4">
        <div className="flex items-center gap-2 text-white text-sm">
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-3 py-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
          </button>
        </div>
        
        <div className="text-white/60 text-sm">
          Click thumbnails or use arrow keys to navigate • Spacebar to play/pause • Esc to stop
        </div>
      </div>
    </div>
  );
}
