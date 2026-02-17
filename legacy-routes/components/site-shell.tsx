import Link from "next/link";
import {SiteHeader} from "@/components/site-header";
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
  const bookLink = localePath(locale, "/book");

  return (
    <div className="page" dir={t.dir} lang={locale}>
      <PromoBanner
        locale={locale}
        ctaHref={localePath(locale, "/#offers")}
        ctaLabel={t.banner.ctaLabel}
        dismissLabel={t.banner.dismissLabel}
        secondaryCtaHref={bookLink}
        secondaryCtaLabel={t.hero.primaryCta}
        text={t.banner.text}
      />

      <SiteHeader locale={locale} />

      {children}

      <div
        aria-label={locale === "ar" ? "إجراءات الحجز السريع" : "Quick booking actions"}
        className="mobile-sticky-cta"
        role="region"
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
              <Link href={localePath(locale, "/fat-freezing")}>{t.nav.fatFreezing}</Link>
              <Link href={localePath(locale, "/pricing")}>{t.nav.pricing}</Link>
              <Link href={localePath(locale, "/book")}>{t.nav.book}</Link>
              <Link href={localePath(locale, "/blog")}>{locale === "ar" ? "المدونة" : "Blog"}</Link>
              <Link href={localePath(locale, "/areas/jumeirah-1")}>{locale === "ar" ? "جميرا 1" : "Jumeirah 1"}</Link>
              <Link href="/terms">{locale === "ar" ? "الشروط والأحكام" : "Terms"}</Link>
              <Link href="/privacy-policy">{locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
              <Link href="/cookies">{locale === "ar" ? "سياسة ملفات الارتباط" : "Cookies Policy"}</Link>
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
