import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema, faqSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";

export function FaqView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";

  const faqItems = t.pages.faq.items;

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{name: t.nav.faq, path: "/faq"}])} />
      <JsonLd data={faqSchema(faqItems)} />

      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: t.nav.faq, href: `${base}/faq`}]} />

            <div className="inner-hero-head">
              <h1>{t.pages.faq.title}</h1>
              <p className="section-lead">{t.pages.faq.lead}</p>
            </div>

            <div className="faq-stack">
              {faqItems.map((item) => (
                <details className="card faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            <div className="cta-row cta-row-tight">
              <Link className="primary-btn" href={`${base}/book`}>
                {t.innerPage.primaryCta}
              </Link>
              <Link className="outline-btn" href={`${base}/pricing`}>
                {t.nav.pricing}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
