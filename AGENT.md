# Agent Guide for Dash2 - Dashboard Xerostomia

## Commands
- **Dev**: `npm run dev` (uses turbopack for faster builds)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **No tests configured**: No test framework or commands found

## Architecture
- **Next.js 15.4.2** with App Router (React 19)
- **Frontend**: Material-UI (MUI) + Tailwind CSS + TypeScript
- **Backend**: Express API at localhost:5000 (see src/constants.ts)
- **Structure**: Feature-based organization within app/ directory
- **Auth**: JWT-based auth flow in app/auth/
- **Dashboard**: Patient data management with MUI DataGrid

## Code Style
- **Imports**: Use `@/*` path alias for src/ imports
- **Components**: Co-located with features in app/ directory, not separate components folder
- **Files**: Use `"use client"` directive for client components
- **Naming**: camelCase for functions, PascalCase for components
- **Types**: TypeScript strict mode enabled
- **Styling**: Inline styles for MUI components, Tailwind for layout classes
- **Data**: JSON files for mock data, backend integration via constants.ts
