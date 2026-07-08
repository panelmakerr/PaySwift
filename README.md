# PaySwift

**PaySwift — Full-Stack Next.js Application**

Built by [Raymora](https://github.com/panelmakerr/Raymora) — Premium Web Engineering.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 + React 19 + Tailwind CSS 4 |
| Backend | Next.js API Routes (Node.js) |
| Database | PostgreSQL (Supabase) |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Deployment | Vercel |

## Project Structure

`
PaySwift/
├── app/
│   ├── api/           # RESTful API endpoints
│   │   ├── products/  # (or entity-specific routes)
│   │   └── ...
│   ├── globals.css    # Tailwind + theme
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Homepage
├── db/
│   └── schema.sql     # PostgreSQL schema
├── lib/
│   └── supabase.ts    # Supabase client
├── types/
│   └── index.ts       # TypeScript types
├── index.html         # Premium landing page
├── package.json
├── next.config.js
├── tsconfig.json
└── .env.example
`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | List all records |
| POST | /api/products | Create new record |
| PUT | /api/products/[id] | Update record |
| DELETE | /api/products/[id] | Delete record |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase project (free tier)

### Installation

`ash
# 1. Clone the repo
git clone https://github.com/panelmakerr/PaySwift.git
cd PaySwift

# 2. Install dependencies (node_modules ~300-500MB)
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 4. Run database migrations
# Run db/schema.sql in your Supabase SQL editor

# 5. Start development server
npm run dev
`

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy 🚀

## Environment Variables

| Variable | Description |
|----------|-------------|
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anonymous key |
| SUPABASE_SERVICE_ROLE_KEY | Supabase service role key |
| NEXT_PUBLIC_SITE_URL | Site URL |
| RESEND_API_KEY | Resend email API key |
| ADMIN_EMAIL | Admin email address |

## License

MIT © 2026 Raymora
