import {
  BellRing,
  Check,
  Download,
  Gift,
  Layers,
  Minus,
  Moon,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import appIcon from './assets/app-icon.png';
import { useTheme } from './useTheme';
import { PRIVACY_PATH, TERMS_PATH } from './legal/company';
import './App.css';
import './legal/legal.css'; // .footer-links (altbilgideki yasal bağlantılar)

// Mağaza bağlantıları kodu değiştirmeden verilir: yayında VITE_APP_STORE_URL ve VITE_PLAY_STORE_URL ortam
// değişkenleriyle derleyin (bkz. web/README.md). Değer yoksa App Store için yer tutucu kalır (uygulama henüz
// yayınlanmadı); Play Store adresi paket adından türetilir.
const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL || 'https://apps.apple.com/app/id0000000000';
const PLAY_STORE_URL =
  import.meta.env.VITE_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.uruntakipte.app';

const SUPPORTED_BRANDS = [
  'Zara',
  'H&M',
  'Bershka',
  'Mango',
  'Pull&Bear',
  'Massimo Dutti',
  'Stradivarius',
  'Oysho',
];

const HERO_STATS: { icon: LucideIcon; label: string }[] = [
  { icon: Layers, label: '8 marka' },
  { icon: Zap, label: 'Gerçek zamanlı' },
  { icon: ShieldCheck, label: 'Ücretsiz başla' },
];

const HOW_IT_WORKS = [
  {
    title: 'Ürünü bul',
    description: 'Takip etmek istediğin ürünü mağaza uygulamasında aç.',
  },
  {
    title: 'Linki paylaş',
    description: "Paylaş butonuna bas ve listeden ÜrünTakipte'yi seç.",
  },
  {
    title: 'Bildirimi al',
    description: 'Fiyat düşünce ya da stok gelince telefonuna bildirim gelsin.',
  },
];

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: 'Gerçek zamanlı takip',
    description: 'Fiyat ve stok düzenli aralıklarla kontrol edilir; Premium ile bu süre 1 dakikaya iner.',
  },
  {
    icon: BellRing,
    title: 'Anlık bildirimler',
    description: 'Fiyat düşüşünü ve stok değişikliğini push bildirimiyle anında öğren.',
  },
  {
    icon: ShoppingBag,
    title: '8 markayı tek yerden takip et',
    description: 'Zara, H&M, Mango ve diğer favori markaların tümü tek uygulamada.',
  },
  {
    icon: Gift,
    title: 'Ücretsiz başla',
    description: 'Kayıt ol, ürününü ekle, hemen takibe başla — kredi kartı gerekmez.',
  },
];

interface PlanFeature {
  label: string;
  free: string | boolean;
  premium: string | boolean;
}

const PLAN_FEATURES: PlanFeature[] = [
  { label: 'Kontrol sıklığı', free: '5 dk', premium: '1 dk' },
  { label: 'Ürün takibi', free: '3 ürün', premium: 'Sınırsız' },
  { label: 'Fiyat bildirimi', free: true, premium: true },
  { label: 'Stok bildirimi', free: true, premium: true },
  { label: 'Bekleme süresi yok', free: false, premium: true },
];

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page">
      <a className="skip-link" href="#icerik">
        İçeriğe geç
      </a>

      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <img src={appIcon} alt="" className="brand-icon" />
            <span className="brand-name">ÜrünTakipte</span>
          </div>

          <nav className="nav-links">
            <a href="#nasil-calisir">Nasıl Çalışır</a>
            <a href="#fiyatlandirma">Fiyatlandırma</a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'}
            >
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
            </button>
            <a className="nav-cta" href="#indir">
              <Download size={16} strokeWidth={2} />
              Uygulamayı İndir
            </a>
          </div>
        </div>
      </header>

      <main id="icerik">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow-badge">8 marka · gerçek zamanlı takip</span>
            <h1>
              Fiyat düşünce
              <br />
              <span className="text-gradient">ilk sen öğren.</span>
            </h1>
            <p className="hero-subtitle">
              Zara, H&amp;M, Mango ve favori markalarındaki ürünleri takip et. Fiyat düşünce
              veya beden stoğa girince telefonuna anında bildirim gelsin.
            </p>

            <div className="store-buttons" id="indir">
              <a className="store-button store-button-primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                <AppleIcon />
                <span>
                  <small>İndir</small>
                  App Store
                </span>
              </a>
              <a className="store-button store-button-secondary" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                <PlayIcon />
                <span>
                  <small>İndir</small>
                  Google Play
                </span>
              </a>
            </div>

            <ul className="hero-stats">
              {HERO_STATS.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={16} strokeWidth={2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow" />
            <div className="notif-card notif-card-price">
              <div className="notif-card-head">
                <span className="notif-icon notif-icon-price">
                  <BellRing size={16} strokeWidth={2} />
                </span>
                <span>Fiyat Düştü!</span>
              </div>
              <div className="notif-card-body">
                <span className="notif-brand">ZARA</span>
                <strong>Oversize Blazer Ceket</strong>
                <span className="notif-meta">Siyah · M, L, XL</span>
                <div className="notif-price-row">
                  <span className="notif-price-new">1.290 ₺</span>
                  <span className="notif-price-old">1.790 ₺</span>
                  <span className="notif-discount">-28%</span>
                </div>
              </div>
            </div>
            <div className="notif-card notif-card-stock">
              <div className="notif-card-head">
                <span className="notif-icon notif-icon-stock">
                  <Sparkles size={16} strokeWidth={2} />
                </span>
                <span>Beden Stoğa Girdi!</span>
              </div>
              <div className="notif-card-body">
                <span className="notif-brand">MANGO</span>
                <strong>Yün Karışımlı Palto</strong>
                <span className="notif-meta">Gri · M beden stoğa girdi</span>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-strip">
          <span className="brand-strip-label">Desteklenen markalar</span>
          <ul className="brand-list">
            {SUPPORTED_BRANDS.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="nasil-calisir">
          <span className="eyebrow">Nasıl çalışır</span>
          <h2>3 adımda kolay takip</h2>
          <p className="section-subtitle">Karmaşık ayar yok. Ürünü paylaş, gerisini biz halledelim.</p>

          <ol className="steps">
            {HOW_IT_WORKS.map((step, index) => (
              <li className="step" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section-alt">
          <span className="eyebrow">Özellikler</span>
          <h2>Neden ÜrünTakipte?</h2>
          <p className="section-subtitle">Zamanını ve paranı korumak için tasarlandı.</p>

          <div className="features">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div className="feature-card" key={title}>
                <span className="feature-icon">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="fiyatlandirma">
          <span className="eyebrow">Fiyatlandırma</span>
          <h2>Ücretsiz mi, Premium mi?</h2>
          <p className="section-subtitle">
            Ücretsiz planla hemen başla, istediğin zaman Premium'a geçerek daha sık kontrol ve
            sınırsız takip elde et.
          </p>

          <div className="plans">
            <div className="plan-card">
              <h3>Ücretsiz</h3>
              <p className="plan-tagline">Denemeye başlamak için</p>
              <ul className="plan-features">
                {PLAN_FEATURES.map((item) => (
                  <li key={item.label}>
                    <PlanCheck value={item.free} />
                    <span>
                      {item.label}
                      {typeof item.free === 'string' && <strong> · {item.free}</strong>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="plan-card plan-card-highlight">
              <span className="plan-badge">En popüler</span>
              <h3>Premium</h3>
              <p className="plan-tagline">Fırsatı asla kaçırmayanlar için</p>
              <ul className="plan-features">
                {PLAN_FEATURES.map((item) => (
                  <li key={item.label}>
                    <PlanCheck value={item.premium} highlight />
                    <span>
                      {item.label}
                      {typeof item.premium === 'string' && <strong> · {item.premium}</strong>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-inner">
            <h2>Tasarruf etmeye başla</h2>
            <p>ÜrünTakipte'yi indir, favori ürünlerini takibe al ve fiyat düşünce haberin olsun.</p>
            <div className="store-buttons store-buttons-light">
              <a className="store-button store-button-light" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                <AppleIcon />
                <span>
                  <small>İndir</small>
                  App Store
                </span>
              </a>
              <a className="store-button store-button-light" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                <PlayIcon />
                <span>
                  <small>İndir</small>
                  Google Play
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src={appIcon} alt="" className="brand-icon" />
          <span className="brand-name">ÜrünTakipte</span>
        </div>
        <nav className="footer-links" aria-label="Yasal">
          <a href={PRIVACY_PATH}>Gizlilik Politikası</a>
          <a href={TERMS_PATH}>Kullanım Koşulları</a>
        </nav>
        <p>&copy; {new Date().getFullYear()} ÜrünTakipte. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

function PlanCheck({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  const isIncluded = value !== false;
  return (
    <span className={`plan-check ${isIncluded ? (highlight ? 'plan-check-on-highlight' : 'plan-check-on') : 'plan-check-off'}`}>
      {isIncluded ? <Check size={12} strokeWidth={3} /> : <Minus size={12} strokeWidth={3} />}
    </span>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}

export default App;
