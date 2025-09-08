import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-playfair text-2xl font-bold text-white">Nicole Adams</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-champagne transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-champagne transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-300 hover:text-champagne transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-300 hover:text-champagne transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-champagne transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-4 py-2 text-charcoal hover:text-champagne transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left px-4 py-2 text-charcoal hover:text-champagne transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="block w-full text-left px-4 py-2 text-charcoal hover:text-champagne transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="block w-full text-left px-4 py-2 text-charcoal hover:text-champagne transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-4 py-2 text-charcoal hover:text-champagne transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
