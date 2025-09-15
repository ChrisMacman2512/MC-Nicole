# Nicole Adams - Professional Emcee Portfolio Website

A sophisticated professional portfolio website for Nicole Adams, a multilingual emcee and event host based in Bangalore. Built with React, TypeScript, and Express.js.

## 🌟 Features

### Professional Portfolio Showcase
- **Hero Section**: Compelling introduction with Nicole's professional headshot and key statistics
- **About Section**: Comprehensive background, education, and multilingual capabilities
- **Services**: Detailed breakdown of event types and expertise areas
- **Client Portfolio**: Industry partnerships with major brands like Samsung, Toyota, Flipkart, Amazon, Infosys

### Interactive Video Portfolio
- **YouTube Integration**: Real video embeds from Nicole's channel (@mcnicoleadams)
- **Categorized Content**: Corporate events, product launches, awards ceremonies, weddings
- **Dynamic Filtering**: Easy navigation between different event types
- **Responsive Video Players**: Optimized for both regular videos and YouTube Shorts

### Professional Features
- **Contact Form**: Complete booking inquiry system with validation
- **Photo Gallery**: Event photography with category filtering
- **Client Testimonials**: Professional feedback and reviews
- **Social Media Integration**: Links to Instagram, YouTube, and WhatsApp
- **Mobile Responsive**: Optimized for all device sizes

## 🎥 Featured Video Content

### Corporate Events
- Cigna Care-nival
- GE Vernova Service Awards
- Infosys Awards For Excellence
- Keysight World events

### Product Launches
- Mangaldeep 3-1 Product Launch
- Dozee x Caretech Launch
- Toyota Brand Events

### Awards & Ceremonies
- Indywood Billionaires Awards
- GE Vernova Miles Service Awards

### Wedding Events
- Filmy Sangeeth Night
- Traditional Haldi Ceremonies
- Sangeet Celebrations

## 🏢 Notable Clients

- **Technology**: Samsung, Infosys, Keysight Technologies
- **Healthcare**: Manipal Hospitals, Cigna, Dozee
- **Automotive**: Toyota, Skoda
- **E-commerce**: Flipkart, Amazon
- **Industrial**: Saint-Gobain, GE Vernova
- **Financial**: HSBC Canara Life Insurance

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for client-side routing
- **TanStack React Query** for state management
- **React Hook Form** with Zod validation
- **Framer Motion** for animations

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** (Neon serverless)
- **Express Sessions** for session management
- **Zod** for runtime validation

### Development Tools
- **Vite** for frontend build and dev server
- **tsx** for TypeScript execution
- **ESBuild** for backend compilation
- **Replit** development environment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (or use in-memory storage for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChrisMacman2512/MC-Nicole.git
   cd MC-Nicole
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   ```

4. **Database Setup** (optional - uses in-memory storage by default)
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite dev server integration
├── shared/                # Shared TypeScript types and schemas
│   └── schema.ts          # Database schema and validation
└── components.json        # shadcn/ui configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Champagne Gold (#F5D547)
- **Secondary**: Charcoal (#333333)
- **Background**: Off-white (#FAFAFA)
- **Accent**: Black (#000000)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Decorative**: Dancing Script (cursive)

### Component Library
- Built with **shadcn/ui** components
- **Radix UI** primitives for accessibility
- **Tailwind CSS** for styling
- **Lucide React** icons

## 📱 Features Breakdown

### Navigation
- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- Quick links to all sections

### Hero Section
- Professional headshot display
- Key statistics (500+ events hosted)
- Call-to-action for bookings
- Location indicator (Bangalore)

### About Section
- Multilingual capabilities highlight
- Educational background (MBA)
- Industry experience showcase
- Professional expertise areas

### Services Section
- Three main service categories:
  - Corporate & Public Events
  - Celebratory Occasions  
  - Interactive Engagements
- Visual service cards with icons
- Detailed service descriptions

### Video Portfolio
- Real YouTube video embeds
- Category-based filtering
- Support for both regular videos and Shorts
- Professional event documentation

### Client Portfolio
- Industry-categorized client showcase
- Notable client logo display
- Partnership testimonials
- Brand relationship highlights

### Contact Section
- Comprehensive booking form
- Multiple contact methods
- Social media integration
- Professional media kit download

### Gallery
- Event photography showcase
- Category-based filtering
- Lightbox image viewing
- Professional event documentation

## 🌐 Social Media Integration

- **Instagram**: [@nicole_adams_93](https://www.instagram.com/nicole_adams_93/)
- **YouTube**: [@mcnicoleadams](https://www.youtube.com/@mcnicoleadams)
- **WhatsApp**: Direct booking communication
- **Email**: nicoleadams927@gmail.com

## 📊 Performance Features

- **Responsive Design**: Mobile-first approach
- **Optimized Images**: Proper sizing and lazy loading
- **Fast Loading**: Vite-powered development and build
- **SEO Optimized**: Proper meta tags and structure
- **Accessibility**: ARIA labels and keyboard navigation

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment (development/production)

### Deployment Platforms
- **Replit Deployments**: Automatic deployment from repository
- **Vercel**: Frontend with API routes
- **Railway/Render**: Full-stack deployment
- **Traditional VPS**: With PM2 process management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Nicole Adams.

## 📞 Contact

**Nicole Adams - Professional Emcee**
- 📧 Email: nicoleadams927@gmail.com
- 📱 Phone/WhatsApp: +91 9845965597
- 📍 Location: Bangalore, India
- 🎬 YouTube: [@mcnicoleadams](https://www.youtube.com/@mcnicoleadams)
- 📸 Instagram: [@nicole_adams_93](https://www.instagram.com/nicole_adams_93/)

---

*"Transforming events into unforgettable experiences with magnetic presence, charm, and clarity."*

## 🎯 About Nicole Adams

Nicole Adams is a seasoned professional emcee and event host based in Bangalore, with over a decade of experience and 500+ successful events. She specializes in:

- **Multilingual Hosting**: Fluent in English, Kannada, Tamil, Telugu, and Hindi
- **Corporate Events**: CEO summits, product launches, conferences
- **Celebratory Occasions**: Awards ceremonies, fashion shows, weddings
- **Interactive Engagements**: Panel moderation, team building, audience interaction

With an MBA in Finance and Operations, Nicole brings both professional expertise and engaging personality to every event, making her the preferred choice for high-profile corporate and luxury events across India.