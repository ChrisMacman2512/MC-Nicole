import { useState } from "react";

export default function PhotoGallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'awards', label: 'Awards' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'weddings', label: 'Weddings' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Corporate Conference',
      description: 'Technology Summit 2024'
    },
    {
      id: 2,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Product Launch Event',
      description: 'Automotive Industry'
    },
    {
      id: 3,
      category: 'awards',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Excellence Awards',
      description: 'Healthcare Industry'
    },
    {
      id: 4,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Fashion Week',
      description: 'Bangalore Fashion Circuit'
    },
    {
      id: 5,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Sangeet Ceremony',
      description: 'Traditional Wedding'
    },
    {
      id: 6,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Corporate Gala',
      description: 'Annual Excellence Awards'
    },
    {
      id: 7,
      category: 'awards',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Celebrity Awards',
      description: 'Entertainment Industry'
    },
    {
      id: 8,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
      title: 'Team Building',
      description: 'Corporate Outing'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">Captured Highlights</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual journey through Nicole's most memorable events and professional moments.
          </p>
        </div>
        
        {/* Gallery Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === filter.id
                  ? 'bg-champagne text-black'
                  : 'bg-gray-200 text-charcoal hover:bg-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Photo Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-gray-600 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
