# PanIIT Andhra Pradesh Summit 2026

This is the official repository for the **Andhra's Resilient DeepTech Decade: Anchored by PanIIT** summit website. The project is built with [Next.js](https://nextjs.org), React, TypeScript, Tailwind CSS, and Framer Motion for animations.

## Getting Started

First, install dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The codebase is organized in the `src/` directory.

```
.
├── public/                 # Static assets (images, fonts, PDFs, SVGs)
│   ├── summit_highlights/  # Highlight images from past events
│   ├── user_images/        # User-uploaded content
│   └── PanIIT_AP_Summit_2026_Agenda.pdf # Event schedule document
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── agenda/         # /agenda route
│   │   ├── committee/      # /committee route
│   │   ├── layout.tsx      # Global layout and fonts
│   │   ├── page.tsx        # Landing page (Main entry)
│   │   └── globals.css     # Tailwind and global styles
│   ├── components/
│   │   ├── sections/       # UI sections for the landing page
│   │   │   ├── About.tsx
│   │   │   ├── AdvantageLegacy.tsx
│   │   │   ├── Committee.tsx
│   │   │   ├── Dignitaries.tsx
│   │   │   ├── Engagement.tsx
│   │   │   ├── EventDetails.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Glimpses.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Highlights.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── OurPartners.tsx
│   │   │   ├── Partnership.tsx
│   │   │   ├── PastEminentSpeakers.tsx
│   │   │   ├── PastSponsors.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Speakers.tsx
│   │   │   └── VisionMission.tsx
│   │   ├── ui/             # Shared UI components and effects
│   │   ├── AeroShards.tsx
│   │   ├── ChromaGrid.tsx
│   │   ├── GradientWaves.tsx
│   │   ├── SpecularButton.tsx
│   │   └── WebThreads.tsx
│   ├── data/
│   │   └── committee.ts    # Organizing committee data
│   └── lib/
│       └── utils.ts        # Helper utilities like clsx/tailwind-merge
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## Key Technologies

- **Next.js (App Router)** - React framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and gestures
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Deployment

This project is deployed to [Vercel](https://vercel.com). Commits pushed to the `main` branch will be automatically deployed to production.
