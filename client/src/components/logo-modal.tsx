import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  industry: string;
  logos: string[];
  icon: React.ComponentType<{ className?: string; size?: number }>;
  iconColor: string;
}

export default function LogoModal({ 
  isOpen, 
  onClose, 
  title, 
  industry, 
  logos, 
  icon: IconComponent, 
  iconColor 
}: LogoModalProps) {
  const [loadedLogos, setLoadedLogos] = useState<Set<number>>(new Set());
  const [logoLoading, setLogoLoading] = useState<{ [key: number]: boolean }>({});
  const [visibleLogos, setVisibleLogos] = useState<Set<number>>(new Set());
  const logoRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Intersection Observer for modal logo lazy loading
  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleLogos(prev => new Set([...prev, index]));
          }
        });
      },
      { rootMargin: '50px' }
    );

    Object.values(logoRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isOpen]);

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setLoadedLogos(new Set());
      setLogoLoading({});
      setVisibleLogos(new Set());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl max-w-6xl max-h-[90vh] w-full mx-4 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <IconComponent className={`${iconColor}`} size={32} />
            <div>
              <h2 className="font-playfair text-2xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600 text-sm">{logos.length} client logos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        
        {/* Logo Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {logos.map((logo, index) => (
              <div 
                key={index}
                ref={(el) => (logoRefs.current[index] = el)}
                data-index={index}
                className="bg-gray-50 rounded-lg p-4 h-24 flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 hover:scale-105 hover:shadow-md relative"
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
                      alt={`${title} client logo ${index + 1}`}
                      className={`max-h-16 max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 ${
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
                  <div className="w-full h-16 bg-gray-200 animate-pulse rounded"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">
              Showing all {logos.length} client logos for {title}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
