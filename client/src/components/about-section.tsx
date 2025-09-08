
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">Meet Nicole Adams</h2>
          <div className="w-24 h-1 bg-champagne mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-dark-card p-6 rounded-xl shadow-lg border border-dark">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-champagne">Multilingual Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Fluent presenter in English, Kannada, Tamil, Telugu, and Hindi (limited proficiency), 
                bringing cultural connectivity to diverse audiences across India.
              </p>
            </div>
            
            <div className="bg-dark-card p-6 rounded-xl shadow-lg border border-dark">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-champagne">Educational Foundation</h3>
              <p className="text-gray-300 leading-relaxed">
                Master's in Business Administration (Finance and Operations) providing strategic 
                understanding for corporate events and business communications.
              </p>
            </div>
            
            <div className="bg-dark-card p-6 rounded-xl shadow-lg border border-dark">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-champagne">Specialized Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Balancing elegance and energy for both formal and high-energy hosting styles. 
                Frequently chosen for CEO-level summits, luxury gatherings, and high-profile events.
              </p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/about-me.jpg" 
                alt="About Nicole Adams" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover object-top" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
