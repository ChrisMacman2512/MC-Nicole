import { Car, Heart, GraduationCap, Laptop, Plane, ShoppingBag } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">Meet Nicole Adams</h2>
          <div className="w-24 h-1 bg-champagne mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-champagne">Multilingual Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Fluent presenter in English, Kannada, Tamil, Telugu, and Hindi (limited proficiency), 
                bringing cultural connectivity to diverse audiences across India.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-champagne">Educational Foundation</h3>
              <p className="text-gray-700 leading-relaxed">
                Master's in Business Administration (Finance and Operations) providing strategic 
                understanding for corporate events and business communications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-champagne">Specialized Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Balancing elegance and energy for both formal and high-energy hosting styles. 
                Frequently chosen for CEO-level summits, luxury gatherings, and high-profile events.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="font-playfair text-3xl font-bold mb-6 text-center text-black">Industry Experience</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Car className="text-champagne mx-auto mb-2" size={32} />
                <div className="font-semibold">Automobile</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Heart className="text-champagne mx-auto mb-2" size={32} />
                <div className="font-semibold">Healthcare</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <GraduationCap className="text-champagne mx-auto mb-2" size={32} />
                <div className="font-semibold">Education</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Laptop className="text-champagne mx-auto mb-2" size={32} />
                <div className="font-semibold">Technology</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Plane className="text-champagne mx-auto mb-2" size={32} />
                <div className="font-semibold">Tourism</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <ShoppingBag className="text-champagne mx-auto mb-2" size={32} />
                <div className="font-semibold">Retail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
