// Prefix public-folder paths with the deploy base ('/' on Vercel, '/reignsl/' on GitHub Pages)
export const asset = p => import.meta.env.BASE_URL + p.replace(/^\//, '')
