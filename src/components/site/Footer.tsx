import Link from "next/link";
import {SITE_CONFIG} from "@/lib/site-config";

const primaryLinks = [
  {href: "/", label: "Home"},
  {href: "/treatments", label: "Treatments"},
  {href: "/fat-freezing", label: "Fat Freezing"},
  {href: "/cryolipolysis", label: "Cryolipolysis"},
  {href: "/pricing", label: "Pricing"},
  {href: "/results", label: "Results"},
  {href: "/locations", label: "Locations"},
  {href: "/faq", label: "FAQ"},
  {href: "/contact", label: "Contact"},
  {href: "/book", label: "Book"}
] as const;

const policyLinks = [
  {href: "/privacy-policy", label: "Privacy Policy"},
  {href: "/terms", label: "Terms"},
  {href: "/cookie-policy", label: "Cookie Policy"},
  {href: "/disclaimer", label: "Disclaimer"}
] as const;

export function Footer() {
  return (
    <footer className="footer seo-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="brand">{SITE_CONFIG.brandName}</p>
          <p className="brand-sub">{SITE_CONFIG.tagline}</p>
          <p className="section-lead seo-footer-trust">
            Doctor-led cryolipolysis and fat freezing guidance for Dubai residents. Treatment suitability is always confirmed
            during consultation.
          </p>
        </div>

        <div className="footer-grid seo-footer-grid">
          <div className="footer-links">
            <p className="footer-label">Primary Pages</p>
            {primaryLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-links">
            <p className="footer-label">Policies</p>
            {policyLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <p>{SITE_CONFIG.address}</p>
            <p>{SITE_CONFIG.phone}</p>
            <a href={SITE_CONFIG.whatsappUrl} rel="noreferrer" target="_blank">
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        <p className="footer-disclaimer">
          Medical disclaimer: Website information is educational and does not replace a clinical diagnosis. Results vary by
          individual and treatment suitability.
        </p>
      </div>
    </footer>
  );
}
