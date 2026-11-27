# Mohit's developer portfolio

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion. Fully static, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run lint
```

## Edit your content (nothing else needs touching)

| What | File |
| --- | --- |
| Name, title, bio, email, GitHub, LinkedIn, resume file name, terminal script | `src/data/personal.ts` |
| Project repo URLs, live demo URLs, descriptions, stacks | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Company, dates, highlights | `src/data/experience.ts` |
| Degree, institution, year, coursework (empty array hides the section) | `src/data/education.ts` |
| Learning topics | `src/data/learning.ts` |
| Resume | replace `public/resume.pdf` |
| Site URL for SEO / Open Graph | `.env` → `VITE_SITE_URL` |

Placeholders to replace: `YOUR_USERNAME`, `YOUR_PROFILE`, `your.email@example.com`, the Education entry, and the placeholder `public/resume.pdf`. To show a "Live demo" button on a project, add `liveUrl: "https://..."` to it.

The contact form opens the visitor's email client (mailto). To send messages without an email client, edit `submitContact` in `src/lib/contact.ts` (documented integration point).

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project to the `main` branch.
   - Repo named `YOUR_USERNAME.github.io` → site at `https://YOUR_USERNAME.github.io/`
   - Any other name (e.g. `portfolio`) → site at `https://YOUR_USERNAME.github.io/portfolio/`
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically. Watch it under the **Actions** tab.

The workflow sets the base path (`VITE_BASE`) and `VITE_SITE_URL` for you. To build locally for a project site: `VITE_BASE=/portfolio/ npm run build`.
