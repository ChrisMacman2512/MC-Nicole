import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LogoModal from "./logo-modal";

interface LogoCarouselProps {
  industry: string;
  logos: string[];
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  bgColor: string;
  iconColor: string;
}

export default function LogoCarousel({
  industry,
  logos,
  title,
  description,
  icon: IconComponent,
  bgColor,
  iconColor
}: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedLogos, setLoadedLogos] = useState<Set<number>>(new Set());
  const [logoLoading, setLogoLoading] = useState<{ [key: number]: boolean }>({});
  const [visibleLogos, setVisibleLogos] = useState<Set<number>>(new Set());
  const logoRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const preloadRefs = useRef<{ [key: number]: HTMLImageElement }>({});
  
  // Responsive logos per view
  const getLogosPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // Mobile
      if (window.innerWidth < 1024) return 3; // Tablet
      return 4; // Desktop
    }
    return 4;
  };
  
  const [logosPerView, setLogosPerView] = useState(getLogosPerView());

  // Preload logos for better performance
  const preloadLogo = (index: number) => {
    if (loadedLogos.has(index) || preloadRefs.current[index]) return;
    
    const img = new Image();
    img.src = `/ClientLogos/${industry}/${logos[index]}`;
    img.onload = () => {
      setLoadedLogos(prev => new Set([...prev, index]));
      setLogoLoading(prev => ({ ...prev, [index]: false }));
    };
    img.onerror = () => {
      setLogoLoading(prev => ({ ...prev, [index]: false }));
    };
    preloadRefs.current[index] = img;
    setLogoLoading(prev => ({ ...prev, [index]: true }));
  };

  // Preload visible logos
  useEffect(() => {
    const visibleIndices = Array.from({ length: Math.min(8, logos.length) }, (_, i) => i);
    visibleIndices.forEach(index => {
      if (!loadedLogos.has(index)) {
        preloadLogo(index);
      }
    });
  }, [logos.length, loadedLogos, industry]);

  // Update logos per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setLogosPerView(getLogosPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for logo lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleLogos(prev => new Set([...prev, index]));
          }
        });
      },
      { rootMargin: '100px' }
    );

    Object.values(logoRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % Math.max(1, logos.length - logosPerView + 1)
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, logos.length, logosPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % Math.max(1, logos.length - logosPerView + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, logos.length - logosPerView)
        : prevIndex - 1
    );
  };

  if (logos.length === 0) return null;

  return (
    <div 
      className={`bg-gradient-to-br ${bgColor} p-6 rounded-xl relative overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <IconComponent className={`${iconColor} mr-3`} size={32} />
        <div>
          <h3 className="font-playfair text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>

      {/* Logo Grid Container */}
      <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {logos.slice(0, 8).map((logo, index) => (
                <div
                  key={index}
                  ref={(el) => (logoRefs.current[index] = el)}
                  data-index={index}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-3 h-16 sm:h-20 flex items-center justify-center border border-white/30 hover:bg-white hover:border-white/50 transition-all duration-300 group-hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                >
                  {visibleLogos.has(index) ? (
                    <>
                      {logoLoading[index] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img
                        src={`/ClientLogos/${industry}/${logo}`}
                        alt={`${title} client logo`}
                        className={`max-h-8 sm:max-h-12 max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                          logoLoading[index] ? 'opacity-0' : 'opacity-90'
                        }`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          console.error(`Failed to load logo: ${target.src}`);
                          setLogoLoading(prev => ({ ...prev, [index]: false }));
                        }}
                        onLoad={() => {
                          setLogoLoading(prev => ({ ...prev, [index]: false }));
                          setLoadedLogos(prev => new Set([...prev, index]));
                        }}
                      />
                    </>
                  ) : (
                    <div className="w-full h-8 sm:h-12 bg-gray-200 animate-pulse rounded"></div>
                  )}
                </div>
              ))}
            </div>

        {/* Show more logos indicator or view all button */}
        {logos.length > 8 ? (
          <div className="text-center mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white/60 hover:text-white text-sm underline hover:no-underline transition-all duration-200 hover:scale-105"
            >
              +{logos.length - 8} more logos
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white/60 hover:text-white text-sm underline hover:no-underline transition-all duration-200 hover:scale-105"
            >
              View all {logos.length} logos
            </button>
          </div>
        )}
      </div>


      {/* Logo Modal */}
      <LogoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        industry={industry}
        logos={logos}
        icon={IconComponent}
        iconColor={iconColor}
      />
    </div>
  );
}
