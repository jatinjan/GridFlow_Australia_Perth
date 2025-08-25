# Grid Flow Website - Power Engineering Solutions

## Overview

Grid Flow is a professional power engineering website built as a full-stack application showcasing comprehensive electrical infrastructure and power systems engineering services. The project implements a modern, responsive design based on a Figma prototype, featuring a complete company website with service offerings, portfolio showcase, and contact functionality. The application serves as both a marketing platform and lead generation tool for a new power engineering consultancy founded by industry veterans with 15+ years of proven expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### August 2, 2025 - Complete Visual Redesign & Brand Enhancement
- **Migration**: Successfully migrated project from Replit Agent to standard Replit environment
- **Dependencies**: Installed all required Node.js packages and dependencies
- **Mega Menu**: Implemented comprehensive mega menu system with card-based layout
- **Visual Identity Overhaul**: Implementing bold, modern design system with:
  - Deep navy/charcoal backgrounds with electric blue and vibrant yellow accents
  - Premium typography using Inter font family with enhanced spacing
  - Signature brand "power pulse" animations throughout the site
  - Custom curated iconography replacing generic stock elements
- **Enhanced UI/UX**: Added microinteractions, hover effects, and smooth animations
- **Content Strategy**: Rewriting all messaging to be benefit-driven and action-oriented
- **Responsive Design**: Ensuring mobile-first approach with touch-friendly interactions
- **Accessibility**: High contrast colors, keyboard navigation, and screen reader support

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack React Query for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for end-to-end type safety
- **API Design**: RESTful endpoints with JSON communication
- **Data Storage**: In-memory storage with interface for future database integration
- **Validation**: Zod schemas for runtime type checking and validation
- **Development**: Hot module replacement and development server integration

### Data Management
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema**: Shared TypeScript schemas between client and server
- **Contact System**: Form submission handling with validation and storage
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Design System
- **Component Library**: Custom components built on shadcn/ui foundation
- **Theme System**: CSS custom properties for consistent color schemes
- **Typography**: Inter font family for modern, professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Brand Consistency**: Fixed logo positioning and brand color implementation

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for frontend state management
- **Build Tools**: Vite with TypeScript support, PostCSS, and Autoprefixer
- **UI Libraries**: Radix UI primitives for accessible components, Lucide React for icons

### Database and ORM
- **Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Validation**: Zod for schema validation and type inference

### Styling and Design
- **CSS Framework**: Tailwind CSS with custom configuration
- **Component Variants**: Class Variance Authority for component styling
- **Utility Libraries**: clsx and tailwind-merge for conditional styling

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **Development**: TSX for TypeScript execution and hot reload support

### External Services
- **Image Hosting**: Unsplash and Pixabay for high-quality stock photography
- **Fonts**: Google Fonts (Inter) for typography
- **Session Storage**: PostgreSQL-based session management for scalability