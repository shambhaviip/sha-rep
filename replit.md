# Replit.md

## Overview

This is a personal resume and portfolio website tailored for roles in product management, strategy/consulting, and UX design. The site features a clean, modern, and professional design with sections for experience, projects/case studies, skills, education, achievements, articles/writing, and contact. Content is served dynamically from a PostgreSQL database via a REST API backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

The frontend is a single-page application with smooth scroll navigation between sections. All UI components are built on Radix UI primitives for accessibility. Content data is fetched from API endpoints and cached client-side.

### Backend Architecture
- **Framework**: Express.js 5 with TypeScript
- **Runtime**: Node.js with tsx for development
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for type safety
- **Build Tool**: esbuild for production server bundling, Vite for client

The server handles API routes for content retrieval and contact form submission. In development, Vite middleware serves the frontend; in production, static files are served from the `dist/public` directory.

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit with `drizzle-kit push` for schema synchronization

Database tables include: experiences, projects, skills, education, articles, achievements, and contact_messages. All content tables have an `order` field for manual sorting.

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Drizzle table definitions and Zod insert schemas
- `routes.ts`: API contract with paths, methods, and response schemas

This ensures type safety across the full stack without code duplication.

### File Structure
```
client/           # Frontend React application
  src/
    components/   # UI components (layout, sections, ui primitives)
    hooks/        # Custom React hooks for data fetching
    pages/        # Page components
    lib/          # Utilities and query client
server/           # Backend Express application
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared types and contracts
  schema.ts       # Database schema
  routes.ts       # API definitions
```

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: PostgreSQL session store (available but sessions not currently implemented)

### Frontend Libraries
- **@tanstack/react-query**: Data fetching and caching
- **framer-motion**: Animations
- **react-hook-form**: Form handling
- **zod**: Runtime validation
- **wouter**: Client-side routing
- **shadcn/ui components**: Built on Radix UI primitives

### Development Tools
- **Vite**: Frontend dev server and bundler
- **esbuild**: Production server bundler
- **drizzle-kit**: Database migrations
- **tsx**: TypeScript execution for Node.js