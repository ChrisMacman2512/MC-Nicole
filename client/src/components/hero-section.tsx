import { Download } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-black via-charcoal to-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white animate-fade-in">
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6">
            Nicole Adams
            <span className="block text-champagne font-dancing text-4xl lg:text-5xl mt-2">The Voice of Connection</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            With over 500 shows and a decade of hosting experience, Nicole Adams transforms every event into a celebration with her magnetic presence, charm, and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-champagne text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg"
            >
              Book Nicole for Your Event
            </button>
            <a 
              href="/Nicole Adams_The Voice of Connection.pdf" 
              download="Nicole Adams - The Voice of Connection.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-lg border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download Profile
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <img 
              src="/hero.jpg" 
              alt="Nicole Adams Professional Headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto opacity-100" 
            />
            <div className="absolute -bottom-6 -right-6 bg-champagne text-black p-4 rounded-xl shadow-lg z-10">
              <div className="text-center">
                <div className="font-bold text-2xl">500+</div>
                <div className="text-sm">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
