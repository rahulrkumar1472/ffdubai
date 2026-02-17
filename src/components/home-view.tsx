import Image from "next/image";
import Link from "next/link";
import {Typewriter} from "@/components/typewriter";
import {ResultsGallery} from "@/components/results-gallery";
import {JsonLd} from "@/components/json-ld";
import {clinicSchema, serviceSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {BEFORE_AFTER_IMAGES, STOCK_IMAGES} from "@/lib/image-manifest";

function getImage(images: string[], index: number) {
  if (!images.length) return null;
  return images[index % images.length];
}

export function HomeView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const bookHref = locale === "en" ? "/en/book" : "/ar/book";

  const heroImage = STOCK_IMAGES[0] ?? null;
  const whatIsImage = STOCK_IMAGES[1] ?? null;
  const bookingImage = STOCK_IMAGES[2] ?? null;

  const areaCards = t.areas.items
    .map((item, index) => ({
      ...item,
      image: getImage(STOCK_IMAGES, index + 3)
    }))
    .filter((item): item is {name: string; description: string; image: string} => Boolean(item.image));

  const showResults = BEFORE_AFTER_IMAGES.length > 0;

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

                <div className="cta-row">
                  <Link className="primary-btn" href={bookHref}>
                    {t.hero.primaryCta}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.hero.secondaryCta}
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
                  <span className="hero-overlay" />
                  <span className="hero-badge">{t.hero.consultationBadge}</span>
                </article>
              ) : null}
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

              <div className="grid-areas">
                {areaCards.map((area) => (
                  <article className="card area-card" key={area.name}>
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

        {showResults ? (
          <section className="section" id="results">
            <div className="container">
              <h2 className="section-title">{t.results.title}</h2>
              <p className="section-lead">{t.results.subtitle}</p>
              <p className="results-disclaimer">{t.results.disclaimer}</p>
              <ResultsGallery images={BEFORE_AFTER_IMAGES} locale={locale} />
              <div className="cta-row cta-row-center section-cta">
                <Link className="primary-btn" href={bookHref}>
                  {t.hero.primaryCta}
                </Link>
                <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>
          </section>
        ) : null}

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
                <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                  {t.finalCta.secondaryCta}
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <div className="sticky-cta" role="region" aria-label={locale === "ar" ? "إجراءات الحجز السريع" : "Quick booking actions"}>
        <div className="sticky-cta-inner">
          <Link className="primary-btn" href={bookHref}>
            {t.hero.primaryCta}
          </Link>
          <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
    </>
  );
}
