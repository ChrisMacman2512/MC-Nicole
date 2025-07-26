# Nicole Adams Professional Website

## Overview

This is a professional website for Nicole Adams, a multilingual emcee and event host based in Bangalore. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a portfolio showcase, client testimonials, service offerings, and a contact inquiry system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API endpoints

### Database Architecture
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured via Neon serverless)
- **Migration Strategy**: Drizzle Kit for schema management
- **Schema Location**: Shared between frontend and backend in `/shared/schema.ts`

## Key Components

### Frontend Components
- **Hero Section**: Main landing area with Nicole's introduction
- **About Section**: Professional background and language capabilities
- **Services Section**: Event types and expertise areas
- **Featured Work**: Video portfolio with categorized content
- **Client Portfolio**: Industry experience and notable clients
- **Photo Gallery**: Event photography with filtering
- **Testimonials**: Client feedback and reviews
- **Contact Section**: Inquiry form with validation

### Backend Services
- **Contact API**: Handles inquiry submissions and retrieval
- **Storage Layer**: Abstract interface with in-memory implementation for development
- **Route Management**: Centralized API routing with error handling

### UI Components
- **Component Library**: shadcn/ui components for consistent design
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Toast Notifications**: User feedback system

## Data Flow

### Contact Inquiry Flow
1. User fills out contact form with event details
2. Form validation using Zod schema
3. Data submitted to `/api/contact` endpoint
4. Backend validates and stores inquiry
5. Success/error feedback displayed to user

### Content Display Flow
1. Static content rendered from component data
2. Video content embedded from external sources
3. Image galleries with filtering capabilities
4. Responsive layouts adapt to device size

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom color scheme
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Playfair Display, Inter, Dancing Script)

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution

### Build and Development
- **Bundling**: Vite for frontend, esbuild for backend
- **TypeScript**: Strict mode with path aliases
- **Development Tools**: Replit-specific plugins for development environment

## Deployment Strategy

### Build Process
1. Frontend built with Vite to `dist/public`
2. Backend compiled with esbuild to ES modules
3. Static assets served by Express in production

### Environment Configuration
- **Development**: Uses Vite dev server with HMR
- **Production**: Express serves static files and API routes
- **Database**: Configured via `DATABASE_URL` environment variable

### Database Management
- **Schema**: Defined in `/shared/schema.ts` using Drizzle
- **Migrations**: Generated in `/migrations` directory
- **Push Strategy**: `db:push` command for schema updates

The application follows a monorepo structure with shared types and schemas, enabling type safety across the full stack while maintaining clear separation between frontend and backend concerns.