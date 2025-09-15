
import NicoleCarousel from "./nicole-carousel";

export default function PhotoGallerySection() {

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">Nicole's Gallery</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From corporate conferences and award ceremonies to fashion shows and cultural events, 
            witness Nicole's dynamic presence and professional excellence across diverse industries and celebrations.
          </p>
        </div>
        
        {/* Nicole's Professional Carousel */}
        <NicoleCarousel />
      </div>
    </section>
  );
}
