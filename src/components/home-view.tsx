import Image from "next/image";
import Link from "next/link";
import {Typewriter} from "@/components/typewriter";
import {ResultsGallery} from "@/components/results-gallery";
import {LeadCapturePopup} from "@/components/lead-capture-popup";
import {ClinicMapSection} from "@/components/clinic-map-section";
import {JsonLd} from "@/components/json-ld";
import {clinicSchema, serviceSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";
import {REAL_RESULTS_IMAGES} from "@/lib/results";

function getImage(images: string[], index: number) {
  if (!images.length) return null;
  return images[index % images.length];
}

export function HomeView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = "";
  const bookHref = `${base}/book`;
  const treatmentBookHref = `${base}/book?mode=treatment`;
  const fatPackageIds = ["starter", "sculpt", "transform"] as const;
  const addonTreatments = [
    {id: "ultrasound-cavitation", content: t.pages.pricing.addons[0]},
    {id: "radiofrequency", content: t.pages.pricing.addons[1]}
  ] as const;

  const heroImage = getImage(STOCK_IMAGES, 0);
  const whatIsImage = getImage(STOCK_IMAGES, 1);
  const bookingImage = getImage(STOCK_IMAGES, 2);

  const areaCards = t.areas.items
    .map((item, index) => ({
      ...item,
      image: getImage(STOCK_IMAGES, index + 3)
    }))
    .filter((item): item is {name: string; description: string; image: string} => Boolean(item.image));

  const resultsImagesAvailable = REAL_RESULTS_IMAGES.filter(Boolean);
  const resultsCount = resultsImagesAvailable.length;
  const resultsMode = resultsCount === 0 ? "empty" : resultsCount < 3 ? "compact" : "grid";
  const isCompactResults = resultsMode === "compact";
  const hasResults = resultsMode !== "empty";
  const resultsImages = isCompactResults ? resultsImagesAvailable.slice(0, 2) : resultsImagesAvailable;
  const resultsLayoutClass = [
    "results-gallery-wrap",
    isCompactResults ? (resultsImages.length === 1 ? "results-single" : "results-compact") : "results-standard"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <JsonLd data={clinicSchema(locale)} />
      <JsonLd data={serviceSchema(locale)} />

      <main>
        <section className="section hero-section" id="top">
          <div className="container">
            <div className={heroImage ? "hero-grid" : "hero-grid hero-grid-single"}>
              <article className="card hero-copy">
                <span className="eyebrow">{t.hero.eyebrow}</span>

                <div className="brand-lockup">
                  <p className="hero-brand">{t.brandLockup.brandName}</p>
                  <p className="hero-tagline">{t.brandLockup.brandDescriptor}</p>
                </div>

                <h1>{t.hero.heading}</h1>
                <p className="price-chip">{t.hero.priceChip}</p>

                <ul className="pill-row" aria-label={locale === "ar" ? "مؤشرات الثقة" : "Trust indicators"}>
                  {t.hero.trustPills.map((pill) => (
                    <li className="pill" key={pill}>
                      {pill}
                    </li>
                  ))}
                </ul>

                <Typewriter lines={t.hero.typewriterLines} />
                <p className="section-lead">{t.hero.subheading}</p>

                <div className="cta-row cta-row-hero">
                  <Link className="primary-btn" href={bookHref}>
                    {t.hero.primaryCta}
                  </Link>
                  <Link className="outline-btn" href={`${base}/pricing`}>
                    {t.hero.secondaryCta}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.hero.tertiaryCta}
                  </a>
                </div>
                <p className="hero-trustline">{t.hero.sameDayLine}</p>
              </article>

              {heroImage ? (
                <article className="hero-media card" aria-label={locale === "ar" ? "صورة علاج تجميد الدهون" : "Fat freezing clinic visual"}>
                  <Image
                    alt={locale === "ar" ? "جلسة تجميد دهون في دبي" : "Fat freezing treatment in Dubai"}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 45vw"
                    src={heroImage}
                  />
                  <span aria-hidden className="hero-overlay" />
                  <span className="hero-badge">{t.hero.consultationBadge}</span>
                </article>
              ) : null}
            </div>
          </div>
        </section>

        <ClinicMapSection locale={locale} />

        <section className="section" id="offers">
          <div className="container">
            <h2 className="section-title">{t.offers.title}</h2>
            <p className="section-lead">{t.offers.lead}</p>

            <div className="offer-grid">
              {t.offers.cards.map((offer, index) => {
                const href =
                  index === 0
                    ? `${bookHref}?offer=${offer.id}`
                    : index === 1
                      ? `${base}/book?mode=treatment&treatment=fat-freezing&package=sculpt&offer=${offer.id}`
                      : `${base}/book?mode=treatment&treatment=radiofrequency&package=six-session&offer=${offer.id}`;

                return (
                  <article className={`card offer-card${index === 1 ? " offer-card-featured" : ""}`} key={offer.id}>
                    <p className="offer-highlight">{offer.highlight}</p>
                    <h3>{offer.title}</h3>
                    <ul className="offer-points">
                      {offer.bullets.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="cta-row cta-row-tight">
                      <Link className="primary-btn" href={href}>
                        {offer.cta}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="what-is-fat-freezing">
          <div className="container">
            <div className={whatIsImage ? "authority-grid" : "authority-grid authority-grid-single"}>
              {whatIsImage ? (
                <article className="card authority-media">
                  <Image
                    alt={locale === "ar" ? "شرح طبي لتجميد الدهون" : "Medical fat freezing explanation"}
                    fill
                    loading="lazy"
                    sizes="(max-width: 900px) 100vw, 42vw"
                    src={whatIsImage}
                  />
                </article>
              ) : null}

              <article className="card authority-copy">
                <h2 className="section-title">{t.whatIs.title}</h2>
                <p className="section-lead">{t.whatIs.intro}</p>

                {t.whatIs.sections.map((section) => (
                  <article className="authority-block" key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </article>
                ))}

                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href={bookHref}>
                    {t.whatIs.cta}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {areaCards.length > 0 ? (
          <section className="section section-muted" id="areas-we-treat">
            <div className="container">
              <h2 className="section-title">{t.areas.title}</h2>
              <p className="section-lead">{t.areas.lead}</p>
              <div className="inline-links">
                <Link href={`${base}/fat-freezing`}>{t.nav.fatFreezing}</Link>
                <Link href={`${base}/pricing`}>{t.nav.pricing}</Link>
              </div>

              <div className="grid-areas" role="list" aria-label={locale === "ar" ? "مناطق العلاج" : "Treatment areas"}>
                {areaCards.map((area) => (
                  <article className="card area-card" key={area.name} role="listitem">
                    <div className="area-media">
                      <Image alt={area.name} fill loading="lazy" sizes="(max-width: 900px) 100vw, 20vw" src={area.image} />
                      <span className="area-overlay" />
                    </div>
                    <div className="area-content">
                      <h3>{area.name}</h3>
                      <p>{area.description}</p>
                      <Link className="area-link" href={bookHref}>
                        {t.areas.cardCta}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <p className="section-lead areas-caption">{t.areas.popularCaption}</p>
            </div>
          </section>
        ) : null}

        <section className="section treatment-menu-section" id="treatment-menu">
          <div className="container">
            <h2 className="section-title">{t.pages.pricing.packagesTitle}</h2>
            <p className="section-lead">{t.pages.pricing.packagesLead}</p>

            <div className="package-grid">
              {t.pages.fatFreezing.packages.map((pkg, index) => (
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

            <h3 className="section-title section-subtitle">{t.pages.pricing.addonsTitle}</h3>
            <p className="section-lead">{t.pages.pricing.addonsLead}</p>

            <div className="inner-card-grid treatment-addon-grid">
              {addonTreatments.map((item) => (
                <article className="card addon-card" key={item.id}>
                  <h3>{item.content.name}</h3>
                  <p className="package-pricing">
                    <span className="price-old">{item.content.standardPrice}</span>
                    <span className="price-new">{item.content.promoPrice}</span>
                  </p>
                  <p className="package-meta">{item.content.offer}</p>
                  <div className="cta-row cta-row-tight">
                    <Link className="primary-btn" href={`${base}/book?mode=treatment&treatment=${item.id}&package=six-session`}>
                      {t.nav.bookTreatment}
                    </Link>
                    <Link className="outline-btn" href={`${base}/book?mode=treatment&treatment=${item.id}&package=single`}>
                      {t.booking.singleSessionCta}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="results">
          <div className="container">
            <h2 className="section-title">{t.results.title}</h2>
            <p className="section-lead">{t.results.subtitle}</p>
            <p className="results-disclaimer">{t.results.disclaimer}</p>

            {hasResults ? (
              <>
                <div className={resultsLayoutClass}>
                  <ResultsGallery images={resultsImages} locale={locale} />
                </div>
                <div className="cta-row cta-row-center section-cta">
                  <Link className="primary-btn" href={bookHref}>
                    {t.hero.primaryCta}
                  </Link>
                  <Link className="outline-btn" href={treatmentBookHref}>
                    {t.nav.bookTreatment}
                  </Link>
                </div>
              </>
            ) : (
              <article className="card results-empty">
                <h3>{t.results.comingSoonTitle}</h3>
                <p>{t.results.comingSoonText}</p>
                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href={bookHref}>
                    {t.results.comingSoonCta}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.finalCta.tertiaryCta}
                  </a>
                </div>
              </article>
            )}
          </div>
        </section>

        <section className="section section-muted" id="why-choose-us">
          <div className="container">
            <h2 className="section-title">{t.whyChooseUs.title}</h2>
            <p className="section-lead">{t.whyChooseUs.lead}</p>

            <div className="grid-features">
              {t.whyChooseUs.items.map((item) => (
                <article className="card feature-card" key={item.title}>
                  <span aria-hidden className="feature-dot" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how-booking-works">
          <div className="container">
            <div className={bookingImage ? "journey-grid" : "journey-grid journey-grid-single"}>
              <article className="card journey-content">
                <h2 className="section-title">{t.bookingJourney.title}</h2>
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

                <p className="journey-note">{t.bookingJourney.note}</p>

                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href={bookHref}>
                    {t.bookingJourney.cta}
                  </Link>
                </div>
              </article>

              {bookingImage ? (
                <article className="card journey-media">
                  <Image
                    alt={locale === "ar" ? "توضيح خطوات الاستشارة" : "Consultation journey visual"}
                    fill
                    loading="lazy"
                    sizes="(max-width: 900px) 100vw, 40vw"
                    src={bookingImage}
                  />
                </article>
              ) : null}
            </div>
          </div>
        </section>

        <section className="section" id="final-cta">
          <div className="container">
            <article className="card final-panel">
              <h2 className="section-title">{t.finalCta.title}</h2>
              <p className="section-lead">{t.finalCta.subtitle}</p>
              <p className="final-reassure">{t.finalCta.reassurance}</p>

              <div className="cta-row cta-row-center">
                <Link className="primary-btn" href={bookHref}>
                  {t.finalCta.primaryCta}
                </Link>
                <Link className="outline-btn" href={treatmentBookHref}>
                  {t.nav.bookTreatment}
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <LeadCapturePopup locale={locale} />
    </>
  );
}
