# Digital Business Card — Next.js App

A minimal, mobile-first digital business card web app. Each employee gets a unique QR code linking to `/card/[username]`.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000/card/aadarsh](http://localhost:3000/card/aadarsh) to see a demo card.

## Demo Cards

- `/card/aadarsh` — Co-Founder
- `/card/rohan` — CTO  
- `/card/sita` — Head of Design

## Project Structure

```
src/
  app/
    layout.tsx               # Root layout
    page.tsx                 # Home page
    card/[username]/page.tsx # Dynamic card page (SSR)
    api/card/[username]/     # REST API route
    not-found.tsx            # 404 page
  components/
    profile-card/            # Main card UI + VCF download
    contact-button/          # Tap-friendly action button
    social-links/            # Social icon row
  lib/
    getCard.ts               # Data fetching (mock → swap for real API)
  types/
    card.ts                  # CardData TypeScript interface
```

## Connecting a Real Backend

Edit `src/lib/getCard.ts` and replace the mock with a real fetch:

```ts
export async function getCard(username: string): Promise<CardData | null> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/card/${username}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  return res.json();
}
```

Set `API_BASE_URL` in `.env.local`.

## Features

- ✅ Mobile-first, tap-friendly design
- ✅ Server-side rendered (fast first load)
- ✅ Email / Call / Portfolio / LinkedIn quick actions
- ✅ Save to Contacts (.vcf download)
- ✅ Social icons row
- ✅ Entrance animation
- ✅ 404 page for unknown usernames
- ✅ REST API route (`GET /api/card/:username`)
- ✅ TypeScript throughout

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS v4
- No external UI libraries
