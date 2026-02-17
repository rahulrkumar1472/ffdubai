import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";

export function PricingView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";
  const fatPage = t.pages.fatFreezing;
  const fatPackageIds = ["starter", "sculpt", "transform"] as const;
  const addonTreatments = [
    {id: "ultrasound-cavitation", content: t.pages.pricing.addons[0]},
    {id: "radiofrequency", content: t.pages.pricing.addons[1]}
  ] as const;

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
              <h2 className="section-title">{locale === "ar" ? "قائمة العلاجات والباقات" : "Treatment Menu & Packages"}</h2>
              <p className="section-lead">{t.pages.pricing.packagesLead}</p>

              <div className="package-grid">
                {fatPage.packages.map((pkg, index) => (
                  <article className={`card package-card${index === 1 ? " package-card-featured" : ""}`} key={pkg.name}>
                    {pkg.badge ? <p className="package-badge">{pkg.badge}</p> : null}
                    <p className="package-savings">{pkg.savingsLabel}</p>
                    <h3>{pkg.name}</h3>
                    <p className="package-pricing">
                      <span className="price-old">{pkg.standardPrice}</span>
                      <span className="price-new">{pkg.promoPrice}</span>
                    </p>
                    <p className="package-meta">{pkg.bestFor}</p>
                    <ul className="package-points">
                      <li>{pkg.sessions}</li>
                      <li>{pkg.areas}</li>
                    </ul>
                    <div className="cta-row cta-row-tight">
                      <Link className="primary-btn" href={`${base}/book?mode=treatment&treatment=fat-freezing&package=${fatPackageIds[index]}`}>
                        {t.nav.bookTreatment}
                      </Link>
                    </div>
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
                    <th>{fatPage.packages[0]?.name ?? (locale === "ar" ? "البداية" : "Starter")}</th>
                    <th>{fatPage.packages[1]?.name ?? (locale === "ar" ? "الأكثر طلباً" : "Popular")}</th>
                    <th>{fatPage.packages[2]?.name ?? (locale === "ar" ? "متقدم" : "Advanced")}</th>
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
            <p className="section-lead">{t.pages.pricing.addonsLead}</p>
            <div className="inner-card-grid">
              {addonTreatments.map((addon) => (
                <article className="card addon-card" key={addon.content.name}>
                  <h3>{addon.content.name}</h3>
                  <p className="package-pricing">
                    <span className="price-old">{addon.content.standardPrice}</span>
                    <span className="price-new">{addon.content.promoPrice}</span>
                  </p>
                  <p className="package-meta">{addon.content.offer}</p>
                  <div className="cta-row cta-row-tight">
                    <Link className="primary-btn" href={`${base}/book?mode=treatment&treatment=${addon.id}&package=six-session`}>
                      {t.nav.bookTreatment}
                    </Link>
                    <Link className="outline-btn" href={`${base}/book?mode=treatment&treatment=${addon.id}&package=single`}>
                      {t.booking.singleSessionCta}
                    </Link>
                  </div>
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
