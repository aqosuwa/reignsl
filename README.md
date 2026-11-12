# REIGN website (ReignSL.com)

React + Vite + React Router. Pages: Home, About, REIGN Energy, Range, Partner, Contact.

## Develop
    npm install
    npm run dev

## Build
    npm run build            # for Vercel / custom domain (base "/")
    VITE_BASE=/reignsl/ npm run build   # for GitHub Pages project site

## Deploy
- GitHub Pages: push to `main`; the workflow in `.github/workflows/deploy.yml` builds and publishes.
  Enable once: repo Settings > Pages > Source: GitHub Actions.
- Vercel: import the repo, framework Vite, no env vars needed. Add `reignsl.com` under Domains.

## Notes
- Contact form opens the visitor's email app (info@reignsl.com is a placeholder; change it in `src/pages/Contact.jsx`).
- Photos live in `public/assets/photos`; check each photo's licence before launch.
