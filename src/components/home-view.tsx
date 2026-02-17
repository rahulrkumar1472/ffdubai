import Image from "next/image";
import Link from "next/link";
import {Typewriter} from "@/components/typewriter";
import {BookingForm} from "@/components/booking-form";
import {ResultsGallery} from "@/components/results-gallery";
import {JsonLd} from "@/components/json-ld";
import {clinicSchema, serviceSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {BEFORE_AFTER_IMAGES, STOCK_IMAGES} from "@/lib/image-manifest";

function pickImage(images: string[], index: number) {
  if (images.length === 0) return null;
  return images[index % images.length];
}

export function HomeView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);

  const stockImages = STOCK_IMAGES;
  const beforeAfterImages = BEFORE_AFTER_IMAGES;
  const heroImage = pickImage(stockImages, 0);
  const whatIsImage = pickImage(stockImages, 1);
  const areaImageMap = t.areas.items.map((_, index) => pickImage(stockImages, index + 2));

  const typewriterLines =
    locale === "ar"
      ? [
          "ابتداءً من 489 درهم • مواعيد نفس اليوم متاحة",
          "طبيب مرخص من DHA • بدون فترة نقاهة",
          "استهداف البطن • الخواصر • الذراعين • الذقن",
          "استشارة مجانية 30 دقيقة — احجز اليوم"
        ]
      : [
          "From AED 489 • Same-day appointments available",
          "DHA-licensed doctor • No downtime",
          "Target stomach • love handles • arms • chin",
          "Free 30-min consultation — book today"
        ];

  return (
    <>
      <JsonLd data={clinicSchema(locale)} />
      <JsonLd data={serviceSchema(locale)} />

      <main>
        <section className="hero">
          <div className="container hero-shell">
            <div className="hero-layout">
              <div className="hero-copy">
                <span className="eyebrow">{t.hero.eyebrow}</span>
                <div style={{marginTop: "0.8rem", marginBottom: "0.1rem", color: "#1a4d7d", fontWeight: 800, letterSpacing: "0.14em"}}>
                  FAT FREEZING
                </div>
                <div style={{color: "#6d89a8", fontWeight: 600, marginBottom: "0.2rem"}}>
                  {locale === "ar" ? "مركز دبي لنحت وخسارة الوزن" : "Dubai’s Weight Loss Centre"}
                </div>
                <h1>{t.hero.heading}</h1>
                <Typewriter lines={typewriterLines} />
                <p className="lead">{t.hero.subheading}</p>

                <ul style={{marginTop: "0.9rem", paddingInlineStart: "1.1rem", color: "#3e6287", lineHeight: 1.75}}>
                  <li>{locale === "ar" ? "طبيب مرخص من DHA" : "DHA-licensed doctor"}</li>
                  <li>{locale === "ar" ? "مواعيد نفس اليوم متاحة" : "Same-day slots available"}</li>
                  <li>{locale === "ar" ? "بدون جراحة • بدون إبر • بدون نقاهة" : "No surgery • No needles • No downtime"}</li>
                  <li>{locale === "ar" ? "جميرا، دبي" : "Jumeirah, Dubai"}</li>
                </ul>

                <div className="hero-cta-row">
                  <Link className="primary-btn" href={locale === "en" ? "/en/book" : "/ar/book"}>
                    {t.hero.primaryCta}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.hero.secondaryCta}
                  </a>
                </div>
                <p className="hero-trustline">{t.hero.trustLine}</p>
              </div>

              <div className="hero-image">
                {heroImage ? (
                  <Image alt="Fat freezing consultation in Dubai" fill priority sizes="(max-width: 900px) 100vw, 45vw" src={heroImage} />
                ) : null}
                <div className="hero-badge-floating">{locale === "ar" ? "ابتداءً من 489 درهم" : "From AED 489"}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="highlight-grid">
              {[
                locale === "ar" ? "إشراف طبي" : "Doctor-led",
                locale === "ar" ? "أجهزة طبية معتمدة" : "Medical-grade devices",
                locale === "ar" ? "أسعار واضحة" : "Transparent pricing",
                locale === "ar" ? "تجربة 5 نجوم" : "5-star rated experience"
              ].map((item, idx) => (
                <article className="highlight-item" key={item}>
                  <span className="highlight-icon" aria-hidden>
                    {idx === 0 ? "✓" : idx === 1 ? "✚" : idx === 2 ? "AED" : "★"}
                  </span>
                  <span className="highlight-text">{item}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container copy-image-grid">
            <div className="copy-box">
              <h2 className="section-head">{t.whatIs.title}</h2>
              {t.whatIs.body.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="image-card">
              {whatIsImage ? <Image alt="What is fat freezing" fill sizes="(max-width: 900px) 100vw, 40vw" src={whatIsImage} /> : null}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-head">{t.areas.title}</h2>
            <div className="area-grid">
              {t.areas.items.map((area, index) => {
                const areaCardImage = areaImageMap[index] || heroImage;

                return (
                  <Link className="area-card" href={locale === "en" ? "/en/book" : "/ar/book"} key={area.name}>
                    <div className="area-thumb">
                      {areaCardImage ? <Image alt={area.name} fill sizes="(max-width: 900px) 100vw, 20vw" src={areaCardImage} /> : null}
                    </div>
                    <div className="area-name">{area.name}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="offer-strip">
              <div className="offer-title">{t.offers.title}</div>
              <div className="offer-subtitle">{t.offers.subtitle}</div>
              <Link className="primary-btn" href={locale === "en" ? "/en/book" : "/ar/book"}>
                {locale === "ar" ? "احجز الآن" : "Book Now"}
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-head">{t.howItWorks.title}</h2>
            <div className="steps-grid">
              {t.howItWorks.steps.map((step) => (
                <article className="step-card" key={step.title}>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </article>
              ))}
            </div>
            <p style={{marginTop: "0.7rem", color: "#6a86a5", fontSize: "0.9rem"}}>
              {locale === "ar" ? "تنبيه: النتائج تختلف من شخص لآخر." : "Disclaimer: Results vary."}
            </p>
          </div>
        </section>

        {beforeAfterImages.length > 0 ? (
          <section className="section section-alt">
            <div className="container">
              <h2 className="section-head">{locale === "ar" ? "نتائج قبل وبعد" : "Results (Before & After)"}</h2>
              <p className="section-sub">
                {locale === "ar"
                  ? "جميع الصور المعروضة من مجلد before-after. النتائج تختلف حسب الحالة والمنطقة وخطة العلاج."
                  : "Gallery pulled from the before-after folder. Results vary by body profile, area, and treatment plan."}
              </p>
              <ResultsGallery images={beforeAfterImages} locale={locale} />
              <p style={{marginTop: "0.7rem", color: "#6a86a5", fontSize: "0.9rem"}}>
                {locale === "ar" ? "تنبيه: النتائج تختلف من شخص لآخر." : "Disclaimer: Results vary."}
              </p>
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="container">
            <h2 className="section-head">{t.booking.sectionTitle}</h2>
            <p className="section-sub">{t.booking.sectionSubtitle}</p>
            <BookingForm locale={locale} />
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-head">{t.faq.title}</h2>
            <div className="faq-grid">
              {t.faq.items.map((faq) => (
                <article className="faq-card" key={faq.question}>
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="final-cta">
              <h3 className="section-head" style={{marginTop: 0}}>
                {t.finalCta.title}
              </h3>
              <p className="section-sub">{t.finalCta.subtitle}</p>
              <div className="actions">
                <Link className="primary-btn" href={locale === "en" ? "/en/book" : "/ar/book"}>
                  {t.finalCta.button}
                </Link>
                <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
