import Link from "next/link";
import {LanguageToggle} from "@/components/language-toggle";
import {getDictionary, type Locale} from "@/lib/i18n";

type SiteShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

function localePath(locale: Locale, path: string) {
  const prefix = locale === "en" ? "/en" : "/ar";
  return path === "/" ? prefix : `${prefix}${path}`;
}

export function SiteShell({locale, children}: SiteShellProps) {
  const t = getDictionary(locale);

  const navItems = [
    {label: t.nav.home, href: localePath(locale, "/")},
    {label: t.nav.pricing, href: localePath(locale, "/pricing")},
    {label: t.nav.results, href: localePath(locale, "/results")},
    {label: t.nav.faq, href: localePath(locale, "/faq")},
    {label: t.nav.contact, href: localePath(locale, "/contact")}
  ];

  const treatmentItems = [
    {label: t.nav.fatFreezing, href: localePath(locale, "/treatments/fat-freezing")},
    {label: t.nav.ultrasound, href: localePath(locale, "/treatments/ultrasound-cavitation")},
    {label: t.nav.radiofrequency, href: localePath(locale, "/treatments/radiofrequency")}
  ];

  const bookLink = localePath(locale, "/book");

  return (
    <div className="page" dir={t.dir} lang={locale}>
      <div className="seasonal-banner" role="note">
        <div className="container">{t.banner.text}</div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-wrap" href={localePath(locale, "/")}>
            <span className="brand">{t.brand.name}</span>
            <span className="brand-sub">{t.brand.tagline}</span>
          </Link>

          <nav aria-label={t.nav.mobileMenu} className="desktop-nav">
            <Link className="nav-link" href={localePath(locale, "/")}>
              {t.nav.home}
            </Link>

            <details className="nav-dropdown">
              <summary className="nav-link">{t.nav.treatments}</summary>
              <div className="dropdown-panel">
                {treatmentItems.map((item) => (
                  <Link className="dropdown-link" href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            {navItems.slice(1).map((item) => (
              <Link className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageToggle currentLocale={locale} />
            <Link className="primary-btn header-book" href={bookLink}>
              {t.nav.book}
            </Link>

            <details className="mobile-drawer">
              <summary aria-label={t.nav.mobileMenu} className="mobile-menu-btn">
                <span />
                <span />
                <span />
              </summary>

              <div className="mobile-drawer-panel">
                <div className="mobile-drawer-head">{t.nav.mobileMenu}</div>
                <div className="mobile-drawer-links">
                  <Link className="drawer-link" href={localePath(locale, "/")}>
                    {t.nav.home}
                  </Link>
                  <div className="drawer-group-title">{t.nav.treatments}</div>
                  {treatmentItems.map((item) => (
                    <Link className="drawer-link" href={item.href} key={item.href}>
                      {item.label}
                    </Link>
                  ))}
                  <Link className="drawer-link" href={localePath(locale, "/pricing")}>
                    {t.nav.pricing}
                  </Link>
                  <Link className="drawer-link" href={localePath(locale, "/results")}>
                    {t.nav.results}
                  </Link>
                  <Link className="drawer-link" href={localePath(locale, "/faq")}>
                    {t.nav.faq}
                  </Link>
                  <Link className="drawer-link" href={localePath(locale, "/contact")}>
                    {t.nav.contact}
                  </Link>
                </div>
                <Link className="primary-btn drawer-cta" href={bookLink}>
                  {t.nav.book}
                </Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      {children}

      <div className="mobile-sticky-cta" role="region" aria-label="Quick booking actions">
        <div className="mobile-sticky-inner">
          <Link className="sticky-book" href={bookLink}>
            {locale === "ar" ? "احجز" : "Book"}
          </Link>
          <a className="sticky-wa" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
            WhatsApp
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <p className="brand">{t.brand.name}</p>
            <p className="brand-sub">{t.brand.tagline}</p>
          </div>

          <div className="footer-grid">
            <div>
              <p className="footer-label">{locale === "ar" ? "العنوان" : "Address"}</p>
              <p>{t.trust.address}</p>
            </div>
            <div>
              <p className="footer-label">{locale === "ar" ? "ساعات العمل" : "Hours"}</p>
              <p>{t.trust.hours}</p>
            </div>
            <div className="footer-links">
              <a href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                WhatsApp: +971521231743
              </a>
              <a href="https://share.google/sqnY4VLOsXzIrgkrD" rel="noreferrer" target="_blank">
                {t.trust.reviews}
              </a>
              <a href="https://www.instagram.com/vivo_aesthetics_uae/" rel="noreferrer" target="_blank">
                {t.trust.instagram}
              </a>
            </div>
          </div>

          <p className="footer-disclaimer">{t.trust.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
