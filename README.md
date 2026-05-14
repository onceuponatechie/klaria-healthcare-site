# Klaria Health

A modern, multi-specialty clinic site for the way people actually book healthcare in 2026; calm, fast, mobile-first, and built on a stack designed to scale.

**Live site:** [klaria-healthcare.vercel.app](https://klaria-healthcare.vercel.app)
**Built by:** [Essy Udeme](https://linkedin.com/in/essyudeme)

---

## What this is

A six-page healthcare clinic site, built from the ground up in Next.js 16 with the App Router, TypeScript, Tailwind v4, and Framer Motion. It covers everything a modern clinic actually needs to convert nervous patients into booked appointments: a clear home page, a real specialists page, a journal with dynamic blog routing, an about page that doesn't read like a corporate brochure, and a contact flow that's simple and expressive.

The clinic is fictional. The engineering is not.

## Why it exists

I wanted to prove out a stack and a workflow I could ship to real clients in the African tech and healthcare space. Sites that are fast on flaky networks, look premium on any mobile, and don't fall over the first time a non-technical admin tries to update them. Klaria is the proof.

Along the way, I treated it as a deep study: how a multi-specialty clinic site should _feel_, how to make booking friction disappear, where to put trust signals, when to use motion and when to leave it still, and how to give a static site real polish without losing performance.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (with OKLCH design tokens for perceptually-uniform color)
- **Motion:** Framer Motion
- **UI primitives:** shadcn/ui (Radix under the hood)
- **Icons:** Lucide
- **Forms & validation:** React Hook Form + Zod
- **Package manager:** pnpm
- **Deployment:** Vercel

## What's inside

**Pages**

- `/` — Home with hero, trust strip, specialties, doctor gallery, testimonial carousel, journal preview, FAQ, and booking CTA
- `/about` — Mission, founding story, specialist team, and the six promises that guide every visit
- `/services` — Six in-house specialties with details, FAQs, and one-tap booking per service
- `/blog` — Featured post, category filtering, and a grid of journal entries
- `/blog/[slug]` — Dynamic blog post route with proper 404 handling for missing slugs
- `/contact` — Direct contact details, online booking widget, and a WhatsApp message option

**Highlights worth opening the dev tools for**

- Page transitions via `AnimatePresence` keyed on the route — every navigation feels intentional
- Scroll-aware navbar that swaps from translucent to glass-blurred at 12px
- A from-scratch `MagneticButton` component that picks between `<a>` for anchors and Next.js `<Link>` for routes
- A type-safe dynamic route using React 19's `use()` hook to unwrap the params Promise inside a client component
- Floating WhatsApp button with spring-loaded entrance — because this site is built for markets where WhatsApp _is_ the customer support channel

## Notes from the build

Three things I'd flag if I were handing this off:

1. **The design tokens are OKLCH, not hex.** Modern browsers handle it natively. If you're extending the palette, work in OKLCH; the perceptual uniformity is worth the small learning curve. Tokens live in `app/globals.css` under `@theme inline`.

2. **WhatsApp is a feature, not a quirk.** For a Lagos or Nairobi clinic, WhatsApp is often the _primary_ support channel. If you fork this for a US-only practice, swap the WhatsApp FAB for an SMS or in-app chat. It's an intentional choice, not a placeholder.

3. **The site is statically generated.** For a production clinic with a non-technical admin who needs to publish blog posts and update doctor profiles without engineering, the next move is layering Sanity CMS on top of this build. The structure is already organized to make that swap straightforward.

## Running locally

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000`.

## Project structure

```
klaria-healthcare-site/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── blog/
│   │   └── [slug]/       # Dynamic blog post route
│   ├── contact/
│   ├── services/
│   ├── globals.css       # Tailwind v4 + Klaria design tokens
│   ├── layout.tsx        # Root layout, fonts, providers
│   └── page.tsx          # Home
├── assets/               # Static imagery (heroes, doctors, services)
├── components/
│   ├── site/             # Klaria-specific components (Navbar, Footer, etc.)
│   └── ui/               # shadcn/ui primitives
├── hooks/                # Custom React hooks
├── lib/                  # Utilities (cn helper, etc.)
└── public/
```

## Credits

Design system and component patterns informed by shadcn/ui and the Radix UI primitive library. All copy, structure, and engineering decisions by [Essy Udeme](https://linkedin.com/in/essyudeme).

---

_Klaria is a fictional clinic. Any resemblance to real practices is incidental._
