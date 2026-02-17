import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema, clinicSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";

export function ContactView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";

  return (
    <>
      <JsonLd data={clinicSchema(locale)} />
      <JsonLd data={breadcrumbSchema(locale, [{name: t.nav.contact, path: "/contact"}])} />

      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: t.nav.contact, href: `${base}/contact`}]} />

            <div className="inner-hero-head">
              <h1>{t.pages.contact.title}</h1>
              <p className="section-lead">{t.pages.contact.lead}</p>
            </div>

            <div className="inner-contact-grid">
              <article className="card contact-card">
                <h2>{t.pages.contact.addressLabel}</h2>
                <p>{t.trust.address}</p>

                <h3>{t.pages.contact.hoursLabel}</h3>
                <p>{t.trust.hours}</p>

                <div className="contact-links">
                  <a href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.pages.contact.whatsappLabel}
                  </a>
                  <a href="https://share.google/sqnY4VLOsXzIrgkrD" rel="noreferrer" target="_blank">
                    {t.pages.contact.reviewsLabel}
                  </a>
                  <a href="https://www.instagram.com/vivo_aesthetics_uae/" rel="noreferrer" target="_blank">
                    {t.pages.contact.instagramLabel}
                  </a>
                  <a href={t.pages.contact.mapUrl} rel="noreferrer" target="_blank">
                    {t.pages.contact.mapLabel}
                  </a>
                </div>

                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href={`${base}/book`}>
                    {t.innerPage.primaryCta}
                  </Link>
                </div>
              </article>

              <article className="card map-card">
                <iframe
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Jumeira%20St%20-%20Jumeirah%20-%20Jumeirah%201%20-%20Dubai%20-%20United%20Arab%20Emirates&output=embed"
                  title={t.pages.contact.mapLabel}
                />
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
