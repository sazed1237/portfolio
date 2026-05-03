# Sazed Creations — Portfolio (Next.js)

A personal portfolio site built with **Next.js**, React, Tailwind CSS, Framer Motion transitions, Radix UI (shadcn-style components), and Swiper.

## Pages / Routes

Routes are defined in the Next.js app router under [src/app/](src/app/):

- `/` → Home (composed page: Home + Services + Resume + Projects + Contact)
- `/services` → Services
- `/resume` → Resume (tabs + scroll-driven tab switching)
- `/projects` → Work/Projects slider
- `/contact` → Contact form + contact info

## Tech Stack

- **Frontend:** React, Next.js App Router
- **UI:** Tailwind CSS, shadcn/Radix UI components (see [src/components/ui/](src/components/ui/))
- **Animation:** Framer Motion
- **Slider:** Swiper
- **HTTP:** `fetch` + server route for GitHub stats

## Scripts

From [package.json](package.json):

- Install deps: `npm install`
- Dev server: `npm run dev` (also `npm run start:dev`)
- Production build: `npm run build`
- Start production server: `npm start`
- Lint: `npm run lint`

## Environment Variables

Copy [.env.example](.env.example) to `.env.local` (recommended) and fill in values.

### GitHub Stats (optional)

Used by [src/components/Stats.jsx](src/components/Stats.jsx) through [src/app/api/github-stats/route.js](src/app/api/github-stats/route.js).

- `GITHUB_USERNAME` — your GitHub username
- `GITHUB_TOKEN` — optional GitHub token to enable commit contributions

Notes:

- Commit count shown is **GitHub “total commit contributions (last year)”** from the GraphQL API.
- Results are cached in `localStorage` for ~6 hours to reduce API calls.

### Contact Form (optional)

Used by [src/Page/Contact/Contact.jsx](src/Page/Contact/Contact.jsx).

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — enables sending via Web3Forms (`https://api.web3forms.com/submit`).
- If the key is missing, the form falls back to `mailto:` so it still works locally.

### Security warning (important)

Only `NEXT_PUBLIC_*` variables are bundled into the browser. Keep `GITHUB_TOKEN` server-only.

## Content Editing

- Projects data: [src/components/Projects.jsx](src/components/Projects.jsx)
	- Supports mixed item shapes (new backend entries use `name / techStack / responsibilities / liveDemo`, older entries use `title / stack / live`).
- Services list (single source of truth): [src/helpers/servicesData.js](src/helpers/servicesData.js)
	- Used by both Services page and Contact “Select a service”.
- Resume content (About/Experience/Education/Skills): [src/Page/Resume/Resume.jsx](src/Page/Resume/Resume.jsx)

## Build & Deployment


## Build & Deployment

- Build: `npm run build`
- Start production server: `npm start`

Deploy the app to a Next.js-compatible host such as Vercel or any platform that supports `next build` and `next start`.
