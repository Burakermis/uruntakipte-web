# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

---

# ÜrünTakipte — web sitesi

Tanıtım sayfası (`/`), Gizlilik Politikası (`/gizlilik/`) ve Kullanım Koşulları (`/kosullar/`). Çok sayfalı Vite derlemesi.

```bash
npm install
npm run dev      # geliştirme
npm run build    # tsc -b + vite build -> dist/
```

Yayın zamanı derleme değişkenleri (kodu değiştirmeden):

| Değişken | Ne için |
|---|---|
| `SITE_URL` | Alan adı (ör. `https://uruntakipte.com`). Verilirse `sitemap.xml`, `canonical`, `og:url`, `og:image` üretilir. |
| `VITE_APP_STORE_URL` | Gerçek App Store bağlantısı (yoksa yer tutucu kalır). |
| `VITE_PLAY_STORE_URL` | Google Play bağlantısı (yoksa paket adından türetilir). |

Örnek: `SITE_URL=https://uruntakipte.com VITE_APP_STORE_URL=https://apps.apple.com/app/id123456789 npm run build`

Yasal sayfaların firma/iletişim bilgisi tek yerde: `src/legal/company.ts` (`CONTACT_EMAIL` yayından önce gerçek adresle değiştirilmeli).
Statik barındırıcı `/gizlilik` → `/gizlilik/` yönlendirmesini yapmalı (Netlify, Cloudflare Pages ve Caddy `try_files` yapar) ve `404.html`'i kullanmalı.
