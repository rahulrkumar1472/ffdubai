import Link from "next/link";
import {getDictionary, type Locale} from "@/lib/i18n";
import {SITE_CONFIG} from "@/lib/site-config";

export function Footer({lang}: {lang: Locale}) {
  const t = getDictionary(lang);
  const primaryLinks = [
    {href: "/", label: t.nav.home},
    {href: "/treatments", label: t.nav.treatments},
    {href: "/fat-freezing", label: t.nav.fatFreezing},
    {href: "/cryolipolysis", label: "Cryolipolysis"},
    {href: "/ultrasound-cavitation", label: t.nav.ultrasound},
    {href: "/radiofrequency", label: t.nav.radiofrequency},
    {href: "/pricing", label: t.nav.pricing},
    {href: "/results", label: t.nav.results},
    {href: "/locations", label: lang === "ar" ? "المواقع" : "Locations"},
    {href: "/faq", label: t.nav.faq},
    {href: "/contact", label: t.nav.contact},
    {href: "/book", label: t.nav.book},
    {href: "/blog", label: lang === "ar" ? "المدونة" : "Blog"}
  ] as const;

  const policyLinks = [
    {href: "/privacy-policy", label: lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"},
    {href: "/terms", label: lang === "ar" ? "الشروط والأحكام" : "Terms"},
    {href: "/cookie-policy", label: lang === "ar" ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"},
    {href: "/disclaimer", label: lang === "ar" ? "إخلاء المسؤولية" : "Disclaimer"}
  ] as const;

  return (
    <footer className="footer seo-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="brand">{SITE_CONFIG.brandName}</p>
          <p className="brand-sub">{t.brand.tagline}</p>
          <p className="section-lead seo-footer-trust">
            {lang === "ar"
              ? "محتوى طبي توعوي بإشراف علاجي. جميع النتائج تختلف حسب الحالة ويتم تأكيد الملاءمة خلال الاستشارة."
              : "Doctor-led cryolipolysis and fat freezing guidance for Dubai residents. Treatment suitability is always confirmed during consultation."}
          </p>
        </div>

        <div className="footer-grid seo-footer-grid">
          <div className="footer-links">
            <p className="footer-label">{lang === "ar" ? "روابط أساسية" : "Primary Pages"}</p>
            {primaryLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-links">
            <p className="footer-label">{lang === "ar" ? "السياسات" : "Policies"}</p>
            {policyLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="footer-label">{lang === "ar" ? "التواصل" : "Contact"}</p>
            <p>{SITE_CONFIG.address}</p>
            <p>{SITE_CONFIG.phone}</p>
            <a href={SITE_CONFIG.whatsappUrl} rel="noreferrer" target="_blank">
              {lang === "ar" ? "واتساب العيادة" : "WhatsApp Enquiry"}
            </a>
          </div>
        </div>

        <p className="footer-disclaimer">
          {lang === "ar"
            ? "تنبيه طبي: المعلومات في الموقع للتوعية فقط ولا تُعد بديلاً عن التقييم السريري المباشر. النتائج تختلف من شخص لآخر."
            : "Medical disclaimer: Website information is educational and does not replace a clinical diagnosis. Results vary by individual and treatment suitability."}
        </p>
      </div>
    </footer>
  );
}
