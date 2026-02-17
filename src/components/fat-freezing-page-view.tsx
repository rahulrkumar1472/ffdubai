import Image from "next/image";
import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {ResultsGallery} from "@/components/results-gallery";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema, faqSchema, serviceSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";
import {REAL_RESULTS_IMAGES} from "@/lib/results";

function getImage(index: number) {
  if (STOCK_IMAGES.length === 0) return null;
  return STOCK_IMAGES[index % STOCK_IMAGES.length];
}

export function FatFreezingPageView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";
  const bookHref = `${base}/book`;
  const treatmentHref = `${base}/book?mode=treatment&treatment=fat-freezing&package=sculpt`;
  const heroImage = getImage(2);
  const fat = t.pages.fatFreezing;
  const faqItems = t.pages.faq.items.slice(0, 6);
  const results = REAL_RESULTS_IMAGES.filter(Boolean);
  const resultsClass = results.length === 1 ? "results-single" : results.length < 3 ? "results-compact" : "results-standard";
  const fatPackageIds = ["starter", "sculpt", "transform"] as const;

  return (
    <>
      <JsonLd data={serviceSchema(locale)} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd data={breadcrumbSchema(locale, [{name: fat.title, path: "/fat-freezing"}])} />

      <main>
        <section className="section inner-hero" id="top">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: fat.title, href: `${base}/fat-freezing`}]} />
            <div className={heroImage ? "inner-hero-grid" : "inner-hero-grid inner-hero-grid-single"}>
              <article className="card inner-copy-card">
                <h1>{fat.title}</h1>
                <p className="section-lead">{fat.lead}</p>
                {fat.intro.map((paragraph) => (
                  <p className="inner-paragraph" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <ul className="inner-bullets">
                  {fat.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href={bookHref}>
                    {t.hero.primaryCta}
                  </Link>
                  <Link className="outline-btn" href={treatmentHref}>
                    {t.nav.bookTreatment}
                  </Link>
                </div>
              </article>

              {heroImage ? (
                <article className="card inner-media-card">
                  <Image alt={fat.title} fill priority sizes="(max-width: 960px) 100vw, 42vw" src={heroImage} />
                </article>
              ) : null}
            </div>
          </div>
        </section>

        <section className="hub-subnav-wrap" aria-label={locale === "ar" ? "تنقل أقسام الصفحة" : "Section navigation"}>
          <div className="container">
            <nav className="hub-subnav">
              <a href="#what-is-fat-freezing">{t.nav.whatIsFatFreezing}</a>
              <a href="#how-it-works">{t.nav.howItWorks}</a>
              <a href="#areas-treated">{t.nav.areasTreated}</a>
              <a href="#results">{t.nav.results}</a>
              <a href="#pricing">{t.nav.pricing}</a>
              <a href="#faq">{t.nav.faq}</a>
              <a href="#book-consultation">{t.nav.bookConsultation}</a>
            </nav>
          </div>
        </section>

        <section className="section" id="what-is-fat-freezing">
          <div className="container">
            <article className="card">
              <h2 className="section-title">{t.whatIs.title}</h2>
              <p className="section-lead">{t.whatIs.intro}</p>
              <div className="inner-card-grid" style={{marginTop: "14px"}}>
                {t.whatIs.sections.map((section) => (
                  <article className="card info-card" key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section section-muted" id="how-it-works">
          <div className="container">
            <h2 className="section-title">{locale === "ar" ? "كيف يعمل العلاج" : "How It Works"}</h2>
            <p className="section-lead">{t.bookingJourney.lead}</p>
            <div className="grid-steps">
              {t.bookingJourney.steps.map((step, index) => (
                <article className="card step-card" key={step.title}>
                  <p className="step-index">{`${t.bookingJourney.stepLabel} ${index + 1}`}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="areas-treated">
          <div className="container">
            <h2 className="section-title">{t.areas.title}</h2>
            <p className="section-lead">{t.areas.lead}</p>
            <div className="grid-areas">
              {t.areas.items.map((item, index) => {
                const image = getImage(index + 4);
                if (!image) return null;

                return (
                  <article className="card area-card" key={item.name}>
                    <div className="area-media">
                      <Image alt={item.name} fill sizes="(max-width: 900px) 100vw, 20vw" src={image} />
                      <span className="area-overlay" />
                    </div>
                    <div className="area-content">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="results">
          <div className="container">
            <h2 className="section-title">{t.results.title}</h2>
            <p className="results-disclaimer">{t.results.disclaimer}</p>
            {results.length > 0 ? (
              <div className={`results-gallery-wrap ${resultsClass}`}>
                <ResultsGallery images={results.length < 3 ? results.slice(0, 2) : results} locale={locale} />
              </div>
            ) : (
              <article className="card results-empty">
                <h3>{locale === "ar" ? "إضافة النتائج الفعلية قريباً" : "Real patient results being added"}</h3>
                <p>{t.results.comingSoonText}</p>
                <div className="cta-row cta-row-center cta-row-tight">
                  <Link className="primary-btn" href={bookHref}>
                    {t.hero.primaryCta}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.finalCta.tertiaryCta}
                  </a>
                </div>
              </article>
            )}
            <div className="cta-row cta-row-tight">
              <Link className="primary-btn" href={bookHref}>
                {t.hero.primaryCta}
              </Link>
              <Link className="outline-btn" href={treatmentHref}>
                {t.nav.bookTreatment}
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <h2 className="section-title">{t.pages.pricing.packagesTitle}</h2>
            <div className="package-grid">
              {fat.packages.map((pkg, index) => (
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
                  <Link className="primary-btn" href={`${base}/book?mode=treatment&treatment=fat-freezing&package=${fatPackageIds[index]}`}>
                    {t.nav.bookTreatment}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="faq">
          <div className="container">
            <h2 className="section-title">{t.nav.faq}</h2>
            <div className="faq-stack">
              {faqItems.map((item) => (
                <details className="card faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="book-consultation">
          <div className="container">
            <article className="card final-panel">
              <h2 className="section-title">{t.finalCta.title}</h2>
              <p className="section-lead">{t.finalCta.reassurance}</p>
              <div className="cta-row cta-row-center">
                <Link className="primary-btn" href={bookHref}>
                  {t.hero.primaryCta}
                </Link>
                <Link className="outline-btn" href={treatmentHref}>
                  {t.nav.bookTreatment}
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
