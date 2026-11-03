# AmanahMasjid

A mosque management web app for prayer times, events, donations, and community engagement, with an admin dashboard for mosque staff.

**Live demo:** https://amanah-masjid.vercel.app

## Features

- **Prayer times:** daily prayer schedule
- **Events:** mosque activities and announcements
- **Donations:** donation information and tracking
- **Authentication:** sign in and sign up with Supabase Auth
- **Dashboard:** admin area for managing mosque data

## Tech stack

- React + TypeScript, built with Vite
- Tailwind CSS and shadcn/ui
- Supabase (database and authentication)
- React Router, TanStack Query, React Hook Form + Zod
- Vitest for testing

## Getting started

Requirements: Node.js 18+ and npm.

```sh
git clone https://github.com/AriesDjae/AmanahMasjid.git
cd AmanahMasjid
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

### Environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

Database migrations live in `supabase/migrations`.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |
| `npm run test`    | Run tests                    |

## Author

Muhammad Aries Djaenuri
