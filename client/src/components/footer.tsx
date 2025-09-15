export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-playfair text-2xl font-bold mb-4">Nicole Adams</div>
            <p className="text-gray-400 mb-4">Professional Emcee & Host</p>
            <p className="text-gray-400 text-sm">
              Transforming events into unforgettable experiences with magnetic presence, charm, and clarity.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-400 hover:text-champagne block"
              >
                About Nicole
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-400 hover:text-champagne block"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-gray-400 hover:text-champagne block"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-gray-400 hover:text-champagne block"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-400 hover:text-champagne block"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:nicoleadams927@gmail.com" className="text-gray-400 hover:text-champagne block">
                Email
              </a>
              <a href="tel:+919845965597" className="text-gray-400 hover:text-champagne block">
                Phone
              </a>
              <a 
                href="https://www.instagram.com/nicole_adams_93/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-champagne block"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@mcnicoleadams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-champagne block"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Nicole Adams - Professional Emcee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
