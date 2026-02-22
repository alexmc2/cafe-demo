![Business Website Demo](public/cafe.webp)

  

# Business Website Platform

This is a production-ready business website platform with a flexible block-based content system powered by Sanity and rendered through Next.js. It is designed to be reusable.

Clients can manage and update their own content through Sanity Studio, including page sections, text, images, navigation, and news posts, without needing developer support for day-to-day edits.

Live versatility examples:

- [cafe-demo](https://www.cafedemo.co.uk/)

- [rob-gardening.vercel.app](https://rob-gardening.vercel.app/)

- [calvinmoorememories.co.uk](https://www.calvinmoorememories.co.uk/)

## Project Highlights

- Content-managed pages and navigation using Sanity

- Block-based page builder architecture (non-dev friendly content editing)

- Client-friendly CMS workflow so clients can update content themselves

- Typed data flow from GROQ queries into React components

- Dynamic routes for pages and news posts

- Draft preview + live content updates + cache revalidation

- Real integrations (blog, gallery, google reviews, etc)

## How It Works

1. **Content is modeled in Sanity**

Page structure, reusable blocks, navigation, settings, posts, and FAQs are defined in `sanity/schemas`.

2. **Queries are composed per document/block type**

GROQ queries live in `sanity/queries` and are aggregated into document queries like `PAGE_QUERY` and `POST_QUERY`.

3. **A typed fetch layer loads content**

`sanity/lib/fetch.ts` wraps `sanityFetch` and returns typed results generated from the schema (`sanity.types.ts`).

4. **Routes fetch by slug and render blocks**

- `app/(main)/page.tsx` loads the homepage (`slug: "index"`)

- `app/(main)/[slug]/page.tsx` handles dynamic content pages

- `app/(main)/news/[slug]/page.tsx` handles post detail pages

5. **Blocks are resolved dynamically**

`components/blocks/index.tsx` maps each `_type` to a React component and lazy-loads the renderer for that block.

6. **Publishing and preview are wired for real workflow**

- Studio is embedded at `/studio`

- Draft mode endpoints are available under `/api/draft-mode/*`

- `SanityLive` keeps production content fresh

- `/api/sanity/revalidate` handles webhook-triggered cache invalidation

## Tech Stack

- Next.js 15 (App Router, React 19, Server Components)

- Sanity CMS + `next-sanity`

- Tailwind CSS 4

- TypeScript

- Radix/shadcn-style UI primitives

- Resend (newsletter API route)

## Local Setup

1. Install dependencies:

```bash

npm install

```

2. Copy env file:

```bash

cp .env.local.example .env.local

```

3. Add required env vars:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`

- `NEXT_PUBLIC_SANITY_DATASET`

4. Run the app:

```bash

npm run dev

```

5. Open:

- Site: `http://localhost:3000`

- Studio: `http://localhost:3000/studio`

## Environment Variables

Required for core CMS functionality:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`

- `NEXT_PUBLIC_SANITY_DATASET`

- `NEXT_PUBLIC_SANITY_API_VERSION`

Optional but recommended:

- `SANITY_API_READ_TOKEN` (draft/preview support)

- `SANITY_REVALIDATE_SECRET` (secure webhook revalidation)

- `NEXT_PUBLIC_SITE_URL` (canonical URLs, sitemap, sharing links)

- `NEXT_PUBLIC_SITE_ENV` (robots/indexing behavior)

- `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` (newsletter API route)

- `GOOGLE_REVIEWS_DATA_SOURCE`, `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACES_PLACE_ID`, `GOOGLE_PLACES_LANGUAGE` (live Google reviews; otherwise demo data is used)

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (map rendering in contact block)

## Scripts

- `npm run dev` - start local dev server

- `npm run build` - production build

- `npm run start` - run production build locally

- `npm run lint` - run lint checks

- `npm run typecheck` - run TypeScript checks

- `npm run typegen` - regenerate Sanity schema types

