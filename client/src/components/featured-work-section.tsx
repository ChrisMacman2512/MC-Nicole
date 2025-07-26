import { useState } from "react";

export default function FeaturedWorkSection() {
  const [activeCategory, setActiveCategory] = useState('corporate');

  const videoCategories = [
    { id: 'corporate', label: 'Corporate Events' },
    { id: 'launches', label: 'Product Launches' },
    { id: 'awards', label: 'Awards & Ceremonies' },
    { id: 'weddings', label: 'Wedding Events' }
  ];

  const videos = {
    corporate: [
      {
        id: 'PP3MYqiYd9g',
        title: 'Cigna Care-nival',
        description: 'Corporate carnival event hosting',
        aspectRatio: 'shorts-aspect'
      },
      {
        id: 'fhIz9PFbGY8',
        title: 'GE Vernova Service Awards',
        description: 'Corporate excellence awards ceremony',
        aspectRatio: 'shorts-aspect'
      },
      {
        id: 'HAwsMI6FG',
        title: 'Infosys - Awards For Excellence',
        description: 'Technology industry awards event',
        aspectRatio: 'video-aspect'
      }
    ],
    launches: [
      {
        id: '87Mo_zhMcg0',
        title: 'Mangaldeep 3-1 Product Launch',
        description: 'Consumer goods product launch event',
        aspectRatio: 'video-aspect'
      },
      {
        id: 'QYf_z7Bmx70',
        title: 'Event for Dozee x Caretech',
        description: 'Healthcare technology partnership launch',
        aspectRatio: 'video-aspect'
      },
      {
        id: '2-gh8fLfHkc',
        title: 'MC Nicole Adams for Toyota',
        description: 'Automotive industry corporate event',
        aspectRatio: 'video-aspect'
      }
    ],
    awards: [
      {
        id: 'D41xAwmR1wY',
        title: 'Indywood Billionaires Awards',
        description: 'Entertainment industry awards ceremony',
        aspectRatio: 'video-aspect'
      },
      {
        id: 'fhIz9PFbGY8',
        title: 'GE Vernova Miles Service Awards',
        description: 'Corporate milestone recognition event',
        aspectRatio: 'shorts-aspect'
      }
    ],
    weddings: [
      {
        id: 'dfefLUTgXSg',
        title: 'Filmy Sangeeth Night ✨',
        description: 'Bollywood-themed pre-wedding celebration',
        aspectRatio: 'video-aspect'
      },
      {
        id: 'kwtvrGMC25A',
        title: 'The Haldi Magic Begins!',
        description: 'Traditional wedding ceremony hosting',
        aspectRatio: 'shorts-aspect'
      },
      {
        id: 'SNpUcDnDoR0',
        title: 'Sangeet Soirée: Where Love Dances Loud',
        description: 'Musical wedding celebration event',
        aspectRatio: 'shorts-aspect'
      }
    ]
  };

  return (
    <section id="portfolio" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">Videos & Featured Work</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Nicole's professional work across various industries and event types.
          </p>
        </div>
        
        {/* Video Categories Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {videoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-champagne text-black'
                  : 'bg-gray-200 text-charcoal hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos[activeCategory as keyof typeof videos]?.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${video.aspectRatio} bg-gray-200`}>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
