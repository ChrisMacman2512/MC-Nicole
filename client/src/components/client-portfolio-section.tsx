import { Laptop, Heart, Building, Car, ShoppingBag, Plane, GraduationCap, Shirt, Utensils, Briefcase, Home, MapPin } from "lucide-react";
import LogoCarousel from "./logo-carousel";

export default function ClientPortfolioSection() {
  // Helper function to generate logo filenames
  const generateLogos = (folderName: string, startNum: number, count: number) => {
    return Array.from({ length: count }, (_, i) => 
      `${folderName}_s01_p${String(startNum + i).padStart(2, '0')}.png`
    );
  };

  // Define industry sectors with their corresponding logo folders and metadata
  const industries = [
    {
      icon: Laptop,
      title: "Technology & OEM Leaders",
      description: "Leading technology companies and original equipment manufacturers",
      folder: "Leaders_in_Technology_and_OEM",
      bgColor: "from-blue-900 to-blue-800",
      iconColor: "text-blue-400",
      logos: generateLogos("Leaders_in_Technology_and_OEM", 1, 47)
    },
    {
      icon: Heart,
      title: "Global Healthcare Leaders",
      description: "Premier healthcare institutions and medical technology companies",
      folder: "Global_Healthcare_Leaders",
      bgColor: "from-red-900 to-red-800",
      iconColor: "text-red-400",
      logos: generateLogos("Global_Healthcare_Leaders", 48, 17)
    },
    {
      icon: Building,
      title: "Financial Services Sector",
      description: "Leading banks, insurance companies, and financial institutions",
      folder: "Financal_Services_Sector",
      bgColor: "from-green-900 to-green-800",
      iconColor: "text-green-400",
      logos: generateLogos("Financal_Services_Sector", 65, 13)
    },
    {
      icon: Car,
      title: "Premium Automotive Brands",
      description: "Luxury and premium automotive manufacturers",
      folder: "Premium_Automotive_Brand",
      bgColor: "from-purple-900 to-purple-800",
      iconColor: "text-purple-400",
      logos: generateLogos("Premium_Automotive_Brand", 78, 15)
    },
    {
      icon: ShoppingBag,
      title: "Fashion & Lifestyle Industry",
      description: "Leading fashion brands and lifestyle companies",
      folder: "Fashion_Lifestyle_Industry",
      bgColor: "from-pink-900 to-pink-800",
      iconColor: "text-pink-400",
      logos: generateLogos("Fashion_Lifestyle_Industry", 93, 26)
    },
    {
      icon: Utensils,
      title: "Food, Beverage & FMCG",
      description: "Food and beverage companies and fast-moving consumer goods",
      folder: "Food_Beverage_FMCG",
      bgColor: "from-orange-900 to-orange-800",
      iconColor: "text-orange-400",
      logos: generateLogos("Food_Beverage_FMCG", 119, 12)
    },
    {
      icon: GraduationCap,
      title: "Education Sector Innovators",
      description: "Educational institutions and learning technology companies",
      folder: "Education_Sector_Innovator",
      bgColor: "from-indigo-900 to-indigo-800",
      iconColor: "text-indigo-400",
      logos: generateLogos("Education_Sector_Innovator", 172, 10)
    },
    {
      icon: Home,
      title: "Real Estate & Construction",
      description: "Real estate developers and construction companies",
      folder: "Real_Estate_Connstruction_Sector",
      bgColor: "from-amber-900 to-amber-800",
      iconColor: "text-amber-400",
      logos: generateLogos("Real_Estate_Connstruction_Sector", 131, 16)
    },
    {
      icon: MapPin,
      title: "Transport, Tourism & Entertainment",
      description: "Transportation, tourism, and entertainment companies",
      folder: "Transport_Tourism_Entertainment",
      bgColor: "from-teal-900 to-teal-800",
      iconColor: "text-teal-400",
      logos: generateLogos("Transport_Tourism_Entertainment", 147, 8)
    },
    {
      icon: Briefcase,
      title: "International Exhibitions & Conferences",
      description: "Global exhibition and conference organizers",
      folder: "International_Exhibitions_ConferencesSummits",
      bgColor: "from-cyan-900 to-cyan-800",
      iconColor: "text-cyan-400",
      logos: generateLogos("International_Exhibitions_ConferencesSummits", 155, 17)
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">Valued Partnerships</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Nicole has collaborated with a wide range of esteemed clients across various industries, 
            building strong and lasting relationships with leading brands.
          </p>
        </div>
        
        {/* Industry Logo Carousels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {industries.map((industry, index) => (
            <LogoCarousel
              key={index}
              industry={industry.folder}
              logos={industry.logos}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              bgColor={industry.bgColor}
              iconColor={industry.iconColor}
            />
          ))}
        </div>
        
        {/* Partnership Statistics */}
        <div className="bg-gradient-to-r from-champagne/10 to-champagne/5 p-8 rounded-2xl border border-champagne/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-champagne mb-2">200+</div>
              <div className="text-white font-semibold">Client Companies</div>
              <div className="text-gray-400 text-sm">Across 10+ Industries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-champagne mb-2">500+</div>
              <div className="text-white font-semibold">Events Hosted</div>
              <div className="text-gray-400 text-sm">Corporate & Celebratory</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-champagne mb-2">10+</div>
              <div className="text-white font-semibold">Years Experience</div>
              <div className="text-gray-400 text-sm">Professional Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
