# Infiniflop.com Agent Notes

## Project Overview
- Next.js app using the App Router (coming soon page for Docksmith by Infiniflop Labs)
- Package manager: pnpm

## Tooling
- Next.js: 16.1.6
- React: 19.2.4
- React DOM: 19.2.4
- @neondatabase/serverless: for waitlist API (Neon Postgres)

## Environment Variables
- `DATABASE_URL` — Neon Postgres connection string (format: `postgresql://user:password@host/dbname?sslmode=require`). Required for the `/api/waitlist` route. Set in `.env.local` (gitignored) and in Vercel environment settings for production.

## Database Migration
Run this SQL on your Neon database before using the waitlist:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Lockfiles
- Canonical lockfile: pnpm-lock.yaml
- package-lock.json is present but not maintained; avoid relying on it

## Recent Changes (2026-02-05)
- Upgraded Next.js and React to current stable versions
- Updated eslint-config-next to match Next.js
- Adjusted .gitignore to keep pnpm lockfile tracked and allow AGENTS/CLAUDE
- Updated pnpm-lock.yaml to include @vercel/analytics@1.6.1 for frozen-lockfile installs
- Corrected @vercel/analytics integrity in pnpm-lock.yaml to match registry tarball
