import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Nicole's professionalism and energy transformed our corporate summit. Her multilingual abilities helped us connect with our diverse audience seamlessly.",
      author: "Rajesh Kumar",
      position: "Event Director, Tech Summit"
    },
    {
      id: 2,
      quote: "Exceptional hosting for our wedding celebrations. Nicole made every moment special and kept our guests engaged throughout the ceremonies.",
      author: "Priya & Arjun",
      position: "Wedding Couple"
    },
    {
      id: 3,
      quote: "Nicole's expertise in managing high-profile corporate events is unmatched. She brings the perfect balance of elegance and professionalism.",
      author: "Meera Reddy",
      position: "Corporate Events Manager"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from clients who have experienced Nicole's exceptional hosting and emcee services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-l-4 border-champagne">
              <div className="flex items-center mb-4">
                <div className="text-champagne flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current" size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
