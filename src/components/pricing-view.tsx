import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";

export function PricingView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";
  const fatPage = t.pages.fatFreezing;

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{name: t.nav.pricing, path: "/pricing"}])} />
      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: t.nav.pricing, href: `${base}/pricing`}]} />

            <div className="inner-hero-head">
              <h1>{t.pages.pricing.title}</h1>
              <p className="section-lead">{t.pages.pricing.lead}</p>
            </div>

            <article className="card">
              <h2 className="section-title">{t.pages.pricing.packagesTitle}</h2>
              <p className="section-lead">{t.pages.pricing.packagesLead}</p>

              <div className="package-grid">
                {fatPage.packages.map((pkg) => (
                  <article className="card package-card" key={pkg.name}>
                    {pkg.badge ? <p className="package-badge">{pkg.badge}</p> : null}
                    <h3>{pkg.name}</h3>
                    <p className="package-pricing">
                      <span className="price-old">{pkg.standardPrice}</span>
                      <span className="price-new">{pkg.promoPrice}</span>
                    </p>
                    <p className="package-meta">{pkg.bestFor}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <h2 className="section-title">{t.pages.pricing.comparisonTitle}</h2>
            <div className="card pricing-table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>{locale === "ar" ? "العنصر" : "Feature"}</th>
                    <th>{locale === "ar" ? "البداية" : "Starter"}</th>
                    <th>{locale === "ar" ? "الأكثر طلباً" : "Popular"}</th>
                    <th>{locale === "ar" ? "التحول" : "Transformation"}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.pages.pricing.rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.starter}</td>
                      <td>{row.popular}</td>
                      <td>{row.transformation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="section-title" style={{marginTop: "20px"}}>
              {t.pages.pricing.addonsTitle}
            </h2>
            <div className="inner-card-grid">
              {t.pages.pricing.addons.map((addon) => (
                <article className="card addon-card" key={addon.name}>
                  <h3>{addon.name}</h3>
                  <p className="package-pricing">
                    <span className="price-old">{addon.standardPrice}</span>
                    <span className="price-new">{addon.promoPrice}</span>
                  </p>
                  <p className="package-meta">{addon.offer}</p>
                </article>
              ))}
            </div>

            <p className="results-disclaimer" style={{marginTop: "14px"}}>
              {t.pages.pricing.disclaimer}
            </p>

            <div className="cta-row" style={{marginTop: "18px"}}>
              <Link className="primary-btn" href={`${base}/book`}>
                {t.innerPage.primaryCta}
              </Link>
              <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                {t.finalCta.tertiaryCta}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
