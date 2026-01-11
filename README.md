# Sazed Creations — Portfolio (React + Vite)

A personal portfolio site built with **React 18 + Vite**, Tailwind CSS, Framer Motion transitions, Radix UI (shadcn-style components), and Swiper.

## Pages / Routes

Routes are defined in [src/main.jsx](src/main.jsx):

- `/` → Home (composed page: Home + Services + Resume + Projects + Contact)
- `/services` → Services
- `/resume` → Resume (tabs + scroll-driven tab switching)
- `/projects` → Work/Projects slider
- `/contact` → Contact form + contact info

## Tech Stack

- **Frontend:** React, React Router, Vite
- **UI:** Tailwind CSS, shadcn/Radix UI components (see [src/components/ui/](src/components/ui/))
- **Animation:** Framer Motion
- **Slider:** Swiper
- **HTTP:** `fetch` + Axios (GitHub stats)

## Scripts

From [package.json](package.json):

- Install deps: `npm install`
- Dev server: `npm run dev` (also `npm start` / `npm run start:dev`)
- Production build: `npm run build`
- Preview build locally: `npm run preview`
- Lint: `npm run lint`

## Environment Variables

Copy [.env.example](.env.example) to `.env.local` (recommended) and fill in values.

### GitHub Stats (optional)

Used by [src/components/Stats.jsx](src/components/Stats.jsx).

- `VITE_GITHUB_USERNAME` — your GitHub username
- `VITE_GITHUB_TOKEN` — optional GitHub token to enable commit contributions

Notes:

- Commit count shown is **GitHub “total commit contributions (last year)”** from the GraphQL API.
- Results are cached in `localStorage` for ~6 hours to reduce API calls.

### Contact Form (optional)

Used by [src/Page/Contact/Contact.jsx](src/Page/Contact/Contact.jsx).

- `VITE_WEB3FORMS_ACCESS_KEY` — enables sending via Web3Forms (`https://api.web3forms.com/submit`).
- If the key is missing, the form falls back to `mailto:` so it still works locally.

### Security warning (important)

Any env var prefixed with `VITE_` is bundled into the frontend and is **publicly visible**. If you set `VITE_GITHUB_TOKEN`, treat it as exposed and keep it **low-privilege**.

## Content Editing

- Projects data: [src/components/Projects.jsx](src/components/Projects.jsx)
	- Supports mixed item shapes (new backend entries use `name / techStack / responsibilities / liveDemo`, older entries use `title / stack / live`).
- Services list (single source of truth): [src/helpers/servicesData.js](src/helpers/servicesData.js)
	- Used by both Services page and Contact “Select a service”.
- Resume content (About/Experience/Education/Skills): [src/Page/Resume/Resume.jsx](src/Page/Resume/Resume.jsx)

## Build & Deployment

- Build: `npm run build` → outputs to `dist/`
- Preview locally: `npm run preview`

Deploy the `dist/` folder to any static host (Netlify, Vercel static, GitHub Pages, etc.).
