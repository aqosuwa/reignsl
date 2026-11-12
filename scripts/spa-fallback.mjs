// GitHub Pages serves 404.html for unknown paths; reuse index.html so deep links like /about work.
import { copyFileSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
