import Link from "next/link";
import {LanguageToggle} from "@/components/language-toggle";
import {getDictionary, type Locale} from "@/lib/i18n";

type SiteShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({locale, children}: SiteShellProps) {
  const t = getDictionary(locale);

  return (
    <div className="page" dir={t.dir} lang={locale}>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-strip-flags">
            <span aria-hidden>🇦🇪</span>
            <span aria-hidden>🇬🇧</span>
            <span>{t.nav.toggleLabel}</span>
          </div>
          <div>{t.trust.hours}</div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-wrap">
            <div className="brand">FAT FREEZING</div>
            <div className="brand-sub">{locale === "ar" ? "مركز دبي لنحت وخسارة الوزن" : "Dubai’s Weight Loss Centre"}</div>
          </div>

          <nav aria-label={t.nav.toggleLabel} className="header-links">
            <Link className="link-btn" href={locale === "en" ? "/en" : "/ar"}>
              {t.nav.home}
            </Link>
            <Link className="outline-btn" href={locale === "en" ? "/en/book" : "/ar/book"}>
              {t.nav.book}
            </Link>
            <LanguageToggle currentLocale={locale} />
          </nav>
        </div>
      </header>

      {children}

      <div className="mobile-sticky-cta" role="region" aria-label="Quick booking actions">
        <div className="mobile-sticky-inner">
          <Link className="primary-btn" href={locale === "en" ? "/en/book" : "/ar/book"}>
            {locale === "ar" ? "احجز الآن" : "Book Now"}
          </Link>
          <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
            WhatsApp
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div>{t.trust.address}</div>
          <div className="row-links">
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
          <p style={{marginTop: "0.8rem", fontSize: "0.84rem", color: "#6a87a7"}}>
            {locale === "ar"
              ? "تنبيه: المعلومات للتثقيف فقط. ملاءمة العلاج تحدد بعد الاستشارة الطبية."
              : "Disclaimer: Information is for education only. Treatment suitability is confirmed during consultation."}
          </p>
        </div>
      </footer>
    </div>
  );
}
