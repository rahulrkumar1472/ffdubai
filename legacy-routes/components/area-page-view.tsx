import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema, faqSchema} from "@/lib/schema";
import type {AreaEntry} from "@/lib/areas";
import type {Locale} from "@/lib/i18n";

export function AreaPageView({locale, area}: {locale: Locale; area: AreaEntry}) {
  const base = locale === "en" ? "/en" : "/ar";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          {name: locale === "en" ? "Areas" : "المناطق", path: "/areas/jumeirah-1"},
          {name: area.name, path: `/areas/${area.slug}`}
        ])}
      />
      <JsonLd data={faqSchema(area.faq)} />

      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs
              locale={locale}
              items={[
                {label: locale === "en" ? "Areas" : "المناطق", href: `${base}/areas/${area.slug}`},
                {label: area.name, href: `${base}/areas/${area.slug}`}
              ]}
            />

            <div className="inner-hero-head">
              <h1>{area.title}</h1>
              <p className="section-lead">{area.lead}</p>
            </div>

            <div className="copy-image-grid">
              <article className="card">
                {area.body.map((paragraph) => (
                  <p className="inner-paragraph" key={paragraph}>
                    {paragraph}
                  </p>
                ))}

                <ul className="inner-bullets">
                  {area.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href={`${base}/book`}>
                    {locale === "en" ? "Book Free Consultation" : "احجز استشارة مجانية"}
                  </Link>
                  <Link className="outline-btn" href={`${base}/fat-freezing`}>
                    {locale === "en" ? "View Fat Freezing" : "عرض تجميد الدهون"}
                  </Link>
                  <Link className="outline-btn" href={`${base}/pricing`}>
                    {locale === "en" ? "View Pricing" : "عرض الأسعار"}
                  </Link>
                </div>
              </article>

              <article className="card map-card">
                <iframe
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Jumeira%20St%20-%20Jumeirah%20-%20Jumeirah%201%20-%20Dubai%20-%20United%20Arab%20Emirates&output=embed"
                  title={area.title}
                />
                <a className="map-inline-link" href="https://maps.app.goo.gl/nb9w9JxUo8nre2Ef9" rel="noreferrer" target="_blank">
                  {locale === "en" ? "Get Directions" : "عرض الاتجاهات"}
                </a>
              </article>
            </div>

            <section className="section" style={{paddingBottom: 0}}>
              <h2 className="section-title">{locale === "en" ? "Area-specific FAQs" : "أسئلة شائعة حسب المنطقة"}</h2>
              <div className="faq-stack" style={{marginTop: 12}}>
                {area.faq.map((item) => (
                  <details className="card faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
