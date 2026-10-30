import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { Connect, Plugin } from 'vite'

// Yasal sayfalar klasör olarak yayınlanır (/gizlilik/ -> gizlilik/index.html). Eğik çizgisiz adres
// (/gizlilik) geliştirme/önizleme sunucusunda ana sayfaya düşmesin diye yönlendirilir. Üretimde
// bunu barındırıcı yapar (Netlify, Cloudflare Pages, Caddy `try_files` vb. klasör adresini çözer).
const LEGAL_DIRS = ['/gizlilik', '/kosullar']
const redirectLegalDirs: Connect.NextHandleFunction = (req, res, next) => {
  const [path, query] = (req.url ?? '').split('?')
  if (LEGAL_DIRS.includes(path)) {
    res.statusCode = 301
    res.setHeader('Location', `${path}/${query ? `?${query}` : ''}`)
    res.end()
    return
  }
  next()
}
const legalDirSlash = (): Plugin => ({
  name: 'legal-dir-trailing-slash',
  configureServer: (server) => void server.middlewares.use(redirectLegalDirs),
  configurePreviewServer: (server) => void server.middlewares.use(redirectLegalDirs),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), legalDirSlash()],
  build: {
    // Ana sayfa + yasal sayfalar (/gizlilik/, /kosullar/): her biri kendi HTML girişi.
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gizlilik: resolve(__dirname, 'gizlilik/index.html'),
        kosullar: resolve(__dirname, 'kosullar/index.html'),
      },
    },
  },
})
