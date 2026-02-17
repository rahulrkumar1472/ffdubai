import Link from "next/link";
import {SITE_CONFIG} from "@/lib/site-config";

const fatFreezingLinks = [
  {href: "/fat-freezing#what-is-fat-freezing", label: "What is Fat Freezing"},
  {href: "/fat-freezing#how-it-works", label: "How it Works"},
  {href: "/fat-freezing#areas-treated", label: "Areas Treated"},
  {href: "/fat-freezing#results", label: "Results"},
  {href: "/fat-freezing#pricing", label: "Pricing"},
  {href: "/fat-freezing#faq", label: "FAQs"},
  {href: "/book", label: "Book Consultation"}
] as const;

const treatmentLinks = [
  {href: "/fat-freezing", label: "Fat Freezing"},
  {href: "/cryolipolysis", label: "Cryolipolysis"},
  {href: "/coolsculpting-alternative", label: "CoolSculpting Alternative"}
] as const;

export function Header() {
  return (
    <header className="site-header seo-site-header">
      <div className="container header-inner">
        <Link className="brand-wrap" href="/">
          <span className="brand">{SITE_CONFIG.brandName}</span>
          <span className="brand-sub">{SITE_CONFIG.tagline}</span>
        </Link>

        <nav aria-label="Primary" className="desktop-nav seo-nav-desktop">
          <Link className="nav-link" href="/">
            Home
          </Link>

          <details className="nav-dropdown-details">
            <summary className="nav-link">Fat Freezing</summary>
            <div className="dropdown-panel seo-dropdown-panel">
              {fatFreezingLinks.map((item) => (
                <Link className="dropdown-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="nav-dropdown-details">
            <summary className="nav-link">Treatments</summary>
            <div className="dropdown-panel seo-dropdown-panel">
              {treatmentLinks.map((item) => (
                <Link className="dropdown-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <Link className="nav-link" href="/pricing">
            Pricing
          </Link>
          <Link className="nav-link" href="/results">
            Results
          </Link>
          <Link className="nav-link" href="/locations">
            Locations
          </Link>
          <Link className="nav-link" href="/faq">
            FAQ
          </Link>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="header-actions seo-header-actions">
          <div className="lang-toggle" aria-label="Language">
            <Link className="lang-option" href="/en">
              EN
            </Link>
            <Link className="lang-option" href="/ar">
              AR
            </Link>
          </div>
          <Link className="primary-btn header-book" href="/book">
            Book Free Consultation
          </Link>
        </div>
      </div>

      <details className="seo-mobile-menu">
        <summary className="mobile-menu-btn" aria-label="Menu">
          <span />
          <span />
          <span />
        </summary>
        <div className="mobile-drawer-panel seo-mobile-panel">
          <div className="mobile-drawer-links">
            <Link className="drawer-link" href="/">
              Home
            </Link>
            <Link className="drawer-link" href="/treatments">
              Treatments
            </Link>
            <Link className="drawer-link" href="/fat-freezing">
              Fat Freezing
            </Link>
            <Link className="drawer-link" href="/pricing">
              Pricing
            </Link>
            <Link className="drawer-link" href="/results">
              Results
            </Link>
            <Link className="drawer-link" href="/locations">
              Locations
            </Link>
            <Link className="drawer-link" href="/faq">
              FAQ
            </Link>
            <Link className="drawer-link" href="/contact">
              Contact
            </Link>
            <Link className="drawer-link" href="/book">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </details>
    </header>
  );
}
