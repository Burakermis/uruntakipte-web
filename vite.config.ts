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

// Arama motoru / sosyal medya paylaşım etiketleri, robots.txt ve sitemap.xml. Alan adı henüz belli olmadığı için
// SITE_URL ortam değişkeniyle verilir (ör. SITE_URL=https://uruntakipte.com npm run build): verilmezse mutlak
// adres gerektiren etiketler (canonical, og:url, og:image) ve sitemap eklenmez, geri kalanı yine eklenir.
const SITE_URL = (process.env.SITE_URL ?? '').replace(/\/+$/, '')
const SITE_PAGES = ['/', '/gizlilik/', '/kosullar/']
const siteMeta = (): Plugin => ({
  name: 'site-meta',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? 'ÜrünTakipte'
      const description = /<meta\s+name="description"\s+content="([^"]*)"/s.exec(html)?.[1] ?? ''
      const path = (ctx.path || '/').replace(/index\.html$/, '')
      const meta = (attrs: Record<string, string>) => ({ tag: 'meta', attrs, injectTo: 'head' as const })
      const tags = [
        meta({ name: 'theme-color', content: '#005c55' }),
        meta({ property: 'og:type', content: 'website' }),
        meta({ property: 'og:site_name', content: 'ÜrünTakipte' }),
        meta({ property: 'og:locale', content: 'tr_TR' }),
        meta({ property: 'og:title', content: title }),
        meta({ property: 'og:description', content: description }),
        meta({ name: 'twitter:card', content: SITE_URL ? 'summary_large_image' : 'summary' }),
        meta({ name: 'twitter:title', content: title }),
        meta({ name: 'twitter:description', content: description }),
      ]
      if (SITE_URL) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${SITE_URL}${path}` }, injectTo: 'head' as const },
          meta({ property: 'og:url', content: `${SITE_URL}${path}` }),
          meta({ property: 'og:image', content: `${SITE_URL}/og-image.png` }),
          meta({ name: 'twitter:image', content: `${SITE_URL}/og-image.png` }),
        )
      }
      return { html, tags }
    },
  },
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *\nAllow: /\n${SITE_URL ? `\nSitemap: ${SITE_URL}/sitemap.xml\n` : ''}`,
    })
    if (!SITE_URL) return
    const urls = SITE_PAGES.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), legalDirSlash(), siteMeta()],
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
