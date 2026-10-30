import type { ReactNode } from 'react';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import appIcon from '../assets/app-icon.png';
import { useTheme } from '../useTheme';
import { APP_NAME, LAST_UPDATED, PRIVACY_PATH, TERMS_PATH } from './company';
import './legal.css';

interface LegalLayoutProps {
  title: string;
  intro: string;
  children: ReactNode;
}

export function LegalLayout({ title, intro, children }: LegalLayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page legal-page">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand legal-brand" href="/" aria-label={`${APP_NAME} ana sayfa`}>
            <img src={appIcon} alt="" className="brand-icon" />
            <span className="brand-name">{APP_NAME}</span>
          </a>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'}
            >
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      <main className="legal-main">
        <a className="legal-back" href="/">
          <ArrowLeft size={16} strokeWidth={2} />
          Ana sayfaya dön
        </a>
        <article className="legal-doc">
          <h1>{title}</h1>
          <p className="legal-meta">Son güncelleme: {LAST_UPDATED}</p>
          <p className="legal-intro">{intro}</p>
          {children}
        </article>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src={appIcon} alt="" className="brand-icon" />
          <span className="brand-name">{APP_NAME}</span>
        </div>
        <nav className="footer-links" aria-label="Yasal">
          <a href={PRIVACY_PATH}>Gizlilik Politikası</a>
          <a href={TERMS_PATH}>Kullanım Koşulları</a>
        </nav>
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="legal-section" id={id} aria-labelledby={`${id}-baslik`}>
      <h2 id={`${id}-baslik`}>{title}</h2>
      {children}
    </section>
  );
}
