import { Building, Star, Users, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Corporate & Public Events",
      items: [
        "Conferences and seminars",
        "Corporate day outings",
        "Product launches",
        "Corporate gala nights",
        "Brand shoots and carnivals"
      ],
      bgClass: "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    },
    {
      icon: Star,
      title: "Celebratory Occasions",
      items: [
        "Award ceremonies",
        "Celebrity events",
        "Fashion shows",
        "Weddings",
        "Luxury gatherings"
      ],
      bgClass: "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    },
    {
      icon: Users,
      title: "Interactive Engagements",
      items: [
        "Quiz and panel moderation",
        "Team building events",
        "Marathon hosting",
        "Audience interaction management",
        "Dynamic event facilitation"
      ],
      bgClass: "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">Diverse Event Expertise</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From intimate corporate gatherings to grand celebrations, Nicole brings professionalism and energy to every occasion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isChampagne = service.bgClass.includes('champagne');
            
            return (
              <div key={index} className={`${service.bgClass} p-8 rounded-2xl hover:scale-105 transition-transform`}>
                <div className="text-center mb-6">
                  <IconComponent 
                    className="mx-auto mb-4 text-champagne" 
                    size={48} 
                  />
                  <h3 className="font-playfair text-2xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <Check 
                        className="mr-3 text-champagne" 
                        size={16} 
                      />
                      <span className="text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
