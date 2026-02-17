"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {LanguageToggle} from "@/components/language-toggle";
import {getDictionary, type Locale} from "@/lib/i18n";

type MenuKey = "fat" | "treatments" | null;

function localePath(locale: Locale, path: string) {
  const prefix = locale === "en" ? "/en" : "/ar";
  return path === "/" ? prefix : `${prefix}${path}`;
}

export function SiteHeader({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const pathname = usePathname() ?? localePath(locale, "/");
  const headerRef = useRef<HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const bookHref = localePath(locale, "/book");
  const bookTreatmentHref = `${bookHref}?mode=treatment`;
  const homeHref = localePath(locale, "/");

  const fatFreezingMenu = useMemo(
    () => [
      {label: t.nav.whatIsFatFreezing, href: `${localePath(locale, "/fat-freezing")}#what-is-fat-freezing`},
      {label: t.nav.howItWorks, href: `${localePath(locale, "/fat-freezing")}#how-it-works`},
      {label: t.nav.areasTreated, href: `${localePath(locale, "/fat-freezing")}#areas-treated`},
      {label: t.nav.results, href: `${localePath(locale, "/fat-freezing")}#results`},
      {label: t.nav.pricing, href: `${localePath(locale, "/fat-freezing")}#pricing`},
      {label: t.nav.bookConsultation, href: `${localePath(locale, "/fat-freezing")}#book-consultation`}
    ],
    [locale, t.nav.areasTreated, t.nav.bookConsultation, t.nav.howItWorks, t.nav.pricing, t.nav.results, t.nav.whatIsFatFreezing]
  );

  const treatmentItems = useMemo(
    () => [
      {label: t.nav.fatFreezing, href: localePath(locale, "/fat-freezing")},
      {label: t.nav.ultrasound, href: localePath(locale, "/ultrasound-cavitation")},
      {label: t.nav.radiofrequency, href: localePath(locale, "/radiofrequency")}
    ],
    [locale, t.nav.fatFreezing, t.nav.radiofrequency, t.nav.ultrasound]
  );

  const closeMenus = () => {
    setOpenMenu(null);
    setDrawerOpen(false);
  };

  useEffect(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === homeHref) {
      return pathname === homeHref;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link className="brand-wrap" href={localePath(locale, "/")} onClick={closeMenus}>
          <span className="brand">{t.brand.name}</span>
          <span className="brand-sub">{t.brand.tagline}</span>
        </Link>

        <nav aria-label={t.nav.mobileMenu} className="desktop-nav">
          <Link className={`nav-link${isActive(homeHref) ? " is-active" : ""}`} href={homeHref}>
            {t.nav.home}
          </Link>

          <div className={`nav-dropdown${openMenu === "fat" ? " is-open" : ""}`}>
            <button
              aria-expanded={openMenu === "fat"}
              className="nav-link nav-trigger"
              onClick={() => setOpenMenu((prev) => (prev === "fat" ? null : "fat"))}
              type="button"
            >
              {t.nav.fatFreezing}
            </button>
            <div className="dropdown-panel" role="menu">
              {fatFreezingMenu.map((item) => (
                <Link className="dropdown-link" href={item.href} key={item.href} onClick={() => setOpenMenu(null)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={`nav-dropdown${openMenu === "treatments" ? " is-open" : ""}`}>
            <button
              aria-expanded={openMenu === "treatments"}
              className="nav-link nav-trigger"
              onClick={() => setOpenMenu((prev) => (prev === "treatments" ? null : "treatments"))}
              type="button"
            >
              {t.nav.treatments}
            </button>
            <div className="dropdown-panel" role="menu">
              {treatmentItems.map((item) => (
                <Link className="dropdown-link" href={item.href} key={item.href} onClick={() => setOpenMenu(null)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link className={`nav-link${isActive(localePath(locale, "/pricing")) ? " is-active" : ""}`} href={localePath(locale, "/pricing")}>
            {t.nav.pricing}
          </Link>
          <Link className={`nav-link${isActive(localePath(locale, "/results")) ? " is-active" : ""}`} href={localePath(locale, "/results")}>
            {t.nav.results}
          </Link>
          <Link className={`nav-link${isActive(localePath(locale, "/faq")) ? " is-active" : ""}`} href={localePath(locale, "/faq")}>
            {t.nav.faq}
          </Link>
          <Link className={`nav-link${isActive(localePath(locale, "/contact")) ? " is-active" : ""}`} href={localePath(locale, "/contact")}>
            {t.nav.contact}
          </Link>
        </nav>

        <div className="header-actions">
          <div className="desktop-only-lang">
            <LanguageToggle currentLocale={locale} />
          </div>

          <Link className="primary-btn header-book-desktop" href={bookHref}>
            {t.nav.bookNow}
          </Link>

          <Link className="primary-btn header-book-mobile" href={bookHref}>
            {t.nav.bookShort}
          </Link>

          <button
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? t.nav.closeMenu : t.nav.mobileMenu}
            className={`mobile-menu-btn${drawerOpen ? " is-open" : ""}`}
            onClick={() => {
              setOpenMenu(null);
              setDrawerOpen((prev) => !prev);
            }}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {drawerOpen ? <button aria-label={t.nav.closeMenu} className="mobile-drawer-backdrop" onClick={closeMenus} type="button" /> : null}

      <aside className={`mobile-drawer-panel${drawerOpen ? " is-open" : ""}`}>
        <div className="mobile-drawer-head">{t.nav.mobileMenu}</div>

        <div className="mobile-drawer-links">
          <Link className="drawer-link" href={localePath(locale, "/")} onClick={closeMenus}>
            {t.nav.home}
          </Link>

          <div className="drawer-group-title">{t.nav.fatFreezing}</div>
          {fatFreezingMenu.map((item) => (
            <Link className="drawer-link" href={item.href} key={item.href} onClick={closeMenus}>
              {item.label}
            </Link>
          ))}

          <div className="drawer-group-title">{t.nav.treatments}</div>
          {treatmentItems.map((item) => (
            <Link className="drawer-link" href={item.href} key={item.href} onClick={closeMenus}>
              {item.label}
            </Link>
          ))}

          <Link className="drawer-link" href={localePath(locale, "/pricing")} onClick={closeMenus}>
            {t.nav.pricing}
          </Link>
          <Link className="drawer-link" href={localePath(locale, "/results")} onClick={closeMenus}>
            {t.nav.results}
          </Link>
          <Link className="drawer-link" href={localePath(locale, "/faq")} onClick={closeMenus}>
            {t.nav.faq}
          </Link>
          <Link className="drawer-link" href={localePath(locale, "/contact")} onClick={closeMenus}>
            {t.nav.contact}
          </Link>
        </div>

        <div className="drawer-actions">
          <Link className="primary-btn drawer-cta" href={bookHref} onClick={closeMenus}>
            {t.nav.book}
          </Link>
          <Link className="outline-btn drawer-cta-secondary" href={bookTreatmentHref} onClick={closeMenus}>
            {t.nav.bookTreatment}
          </Link>
        </div>

        <div className="drawer-lang">
          <p className="drawer-group-title">{t.nav.languageLabel}</p>
          <LanguageToggle currentLocale={locale} />
        </div>
      </aside>
    </header>
  );
}
