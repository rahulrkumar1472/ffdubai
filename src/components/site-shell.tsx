import Link from "next/link";
import {LanguageToggle} from "@/components/language-toggle";
import {PromoBanner} from "@/components/promo-banner";
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
  const bookTreatmentLink = `${bookLink}?mode=treatment`;

  return (
    <div className="page" dir={t.dir} lang={locale}>
      <PromoBanner dismissLabel={t.banner.dismissLabel} text={t.banner.text} />

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
                <Link className="dropdown-link" href={localePath(locale, "/treatments")}>
                  {t.nav.treatments}
                </Link>
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
            <div className="header-lang desktop-only-lang">
              <LanguageToggle currentLocale={locale} />
            </div>

            <Link className="primary-btn header-book header-book-desktop" href={bookLink}>
              {t.nav.bookNow}
            </Link>
            <Link className="primary-btn header-book header-book-mobile" href={bookLink}>
              {t.nav.bookShort}
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
                  <Link className="drawer-link" href={localePath(locale, "/treatments")}>
                    {t.nav.treatments}
                  </Link>
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

                <div className="drawer-actions">
                  <Link className="primary-btn drawer-cta" href={bookLink}>
                    {t.nav.book}
                  </Link>
                  <Link className="outline-btn drawer-cta-secondary" href={bookTreatmentLink}>
                    {t.nav.bookTreatment}
                  </Link>
                </div>

                <div className="drawer-lang">
                  <p className="drawer-group-title">{t.nav.languageLabel}</p>
                  <LanguageToggle currentLocale={locale} />
                </div>
              </div>
            </details>
          </div>
        </div>
      </header>

      {children}

      <div
        className="mobile-sticky-cta"
        role="region"
        aria-label={locale === "ar" ? "إجراءات الحجز السريع" : "Quick booking actions"}
      >
        <div className="mobile-sticky-inner">
          <Link className="sticky-book" href={bookLink}>
            {t.nav.bookShort}
          </Link>
          <a className="sticky-wa" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
            {t.nav.whatsappShort}
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
