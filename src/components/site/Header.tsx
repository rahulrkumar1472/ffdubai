import Link from "next/link";
import {LanguageToggle} from "@/components/site/LanguageToggle";
import {getDictionary, type Locale} from "@/lib/i18n";
import {SITE_CONFIG} from "@/lib/site-config";

const fatFreezingLinks = [
  {href: "/fat-freezing#what-is-fat-freezing", id: "whatIsFatFreezing"},
  {href: "/fat-freezing#how-it-works", id: "howItWorks"},
  {href: "/fat-freezing#areas-treated", id: "areasTreated"},
  {href: "/fat-freezing#results", id: "results"},
  {href: "/fat-freezing#pricing", id: "pricing"},
  {href: "/fat-freezing#faq", id: "faq"},
  {href: "/book", id: "bookConsultation"}
] as const;

const treatmentLinks = [
  {href: "/fat-freezing", id: "fatFreezing"},
  {href: "/ultrasound-cavitation", id: "ultrasound"},
  {href: "/radiofrequency", id: "radiofrequency"}
] as const;

export function Header({lang}: {lang: Locale}) {
  const t = getDictionary(lang);

  return (
    <header className="site-header seo-site-header">
      <div className="container header-inner">
        <Link className="brand-wrap" href="/">
          <span className="brand">{SITE_CONFIG.brandName}</span>
          <span className="brand-sub">{t.brand.tagline}</span>
        </Link>

        <nav aria-label={lang === "ar" ? "التنقل الرئيسي" : "Primary navigation"} className="desktop-nav seo-nav-desktop">
          <Link className="nav-link" href="/">
            {t.nav.home}
          </Link>

          <details className="nav-dropdown-details">
            <summary className="nav-link">{t.nav.fatFreezing}</summary>
            <div className="dropdown-panel seo-dropdown-panel">
              {fatFreezingLinks.map((item) => (
                <Link className="dropdown-link" href={item.href} key={item.href}>
                  {t.nav[item.id as keyof typeof t.nav]}
                </Link>
              ))}
            </div>
          </details>

          <details className="nav-dropdown-details">
            <summary className="nav-link">{t.nav.treatments}</summary>
            <div className="dropdown-panel seo-dropdown-panel">
              {treatmentLinks.map((item) => (
                <Link className="dropdown-link" href={item.href} key={item.href}>
                  {t.nav[item.id as keyof typeof t.nav]}
                </Link>
              ))}
            </div>
          </details>

          <Link className="nav-link" href="/pricing">
            {t.nav.pricing}
          </Link>
          <Link className="nav-link" href="/results">
            {t.nav.results}
          </Link>
          <Link className="nav-link" href="/locations">
            {lang === "ar" ? "المواقع" : "Locations"}
          </Link>
          <Link className="nav-link" href="/faq">
            {t.nav.faq}
          </Link>
          <Link className="nav-link" href="/contact">
            {t.nav.contact}
          </Link>
        </nav>

        <div className="header-actions seo-header-actions">
          <LanguageToggle currentLang={lang} />
          <Link className="primary-btn header-book" href="/book">
            {t.nav.bookShort}
          </Link>
        </div>
      </div>

      <details className="seo-mobile-menu">
        <summary className="mobile-menu-btn" aria-label={lang === "ar" ? "القائمة" : "Menu"}>
          <span />
          <span />
          <span />
        </summary>
        <div className="mobile-drawer-panel seo-mobile-panel">
          <div className="mobile-drawer-links">
            <Link className="drawer-link" href="/">
              {t.nav.home}
            </Link>
            <Link className="drawer-link" href="/treatments">
              {t.nav.treatments}
            </Link>
            <Link className="drawer-link" href="/fat-freezing">
              {t.nav.fatFreezing}
            </Link>
            <Link className="drawer-link" href="/ultrasound-cavitation">
              {t.nav.ultrasound}
            </Link>
            <Link className="drawer-link" href="/radiofrequency">
              {t.nav.radiofrequency}
            </Link>
            <Link className="drawer-link" href="/pricing">
              {t.nav.pricing}
            </Link>
            <Link className="drawer-link" href="/results">
              {t.nav.results}
            </Link>
            <Link className="drawer-link" href="/faq">
              {t.nav.faq}
            </Link>
            <Link className="drawer-link" href="/contact">
              {t.nav.contact}
            </Link>
            <Link className="drawer-link" href="/book">
              {lang === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
            </Link>
          </div>
        </div>
      </details>
    </header>
  );
}
