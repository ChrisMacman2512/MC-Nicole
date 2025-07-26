import { Laptop, Heart, Building, Car, ShoppingBag, Plane } from "lucide-react";

export default function ClientPortfolioSection() {
  const industries = [
    {
      icon: Laptop,
      title: "Technology & OEM Leaders",
      clients: "Samsung, Infosys, Keysight Technologies",
      bgColor: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Global Healthcare Leaders",
      clients: "Manipal Hospitals, Cigna, Dozee",
      bgColor: "from-red-50 to-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Building,
      title: "Financial Services Sector",
      clients: "HSBC Canara Life Insurance",
      bgColor: "from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Car,
      title: "Premium Automotive Brands",
      clients: "Toyota, Skoda",
      bgColor: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: ShoppingBag,
      title: "E-commerce & Retail",
      clients: "Flipkart, Amazon, Mangaldeep",
      bgColor: "from-yellow-50 to-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: Building,
      title: "Enterprise & Construction",
      clients: "Saint-Gobain, GE Vernova",
      bgColor: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  const notableClients = [
    "Samsung", "Toyota", "Flipkart", "Amazon", "Infosys", "GE Vernova"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">Valued Partnerships</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Nicole has collaborated with a wide range of esteemed clients across various industries, 
            building strong and lasting relationships with leading brands.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${industry.bgColor} p-6 rounded-xl`}>
                <IconComponent className={`${industry.iconColor} mb-4`} size={48} />
                <h3 className="font-playfair text-xl font-bold mb-3">{industry.title}</h3>
                <p className="text-gray-700 text-sm">{industry.clients}</p>
              </div>
            );
          })}
        </div>
        
        {/* Notable Clients Logo Grid */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="font-playfair text-2xl font-bold text-center mb-8">Notable Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {notableClients.map((client, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16 font-semibold text-gray-700">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
