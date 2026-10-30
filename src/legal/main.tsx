import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../App.css'
import { PrivacyPage } from './PrivacyPage'
import { TermsPage } from './TermsPage'

// Hangi yasal sayfa: <div id="root" data-doc="privacy|terms">. Her sayfa kendi HTML girişine sahip
// (bkz. gizlilik/index.html, kosullar/index.html) — yönlendirici/SPA yedeği gerektirmez.
const root = document.getElementById('root')!
const Page = root.dataset.doc === 'terms' ? TermsPage : PrivacyPage

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
