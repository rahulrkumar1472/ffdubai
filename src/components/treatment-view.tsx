import Image from "next/image";
import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema, serviceSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";

type TreatmentKind = "fatFreezing" | "ultrasound" | "radiofrequency";

const pathMap: Record<TreatmentKind, string> = {
  fatFreezing: "/treatments/fat-freezing",
  ultrasound: "/treatments/ultrasound-cavitation",
  radiofrequency: "/treatments/radiofrequency"
};

function pickImage(index: number) {
  if (STOCK_IMAGES.length === 0) return null;
  return STOCK_IMAGES[index % STOCK_IMAGES.length];
}

export function TreatmentView({locale, kind}: {locale: Locale; kind: TreatmentKind}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";
  const bookHref = `${base}/book`;

  const page =
    kind === "fatFreezing" ? t.pages.fatFreezing : kind === "ultrasound" ? t.pages.ultrasound : t.pages.radiofrequency;

  const heroImage = pickImage(kind === "fatFreezing" ? 2 : kind === "ultrasound" ? 6 : 9);

  const crumbs = [
    {label: t.nav.treatments, href: `${base}/treatments`},
    {label: page.title, href: `${base}${pathMap[kind]}`}
  ];

  return (
    <>
      <JsonLd data={serviceSchema(locale)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          {name: t.nav.treatments, path: "/treatments"},
          {name: page.title, path: pathMap[kind]}
        ])}
      />

      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={crumbs} />

            <div className={heroImage ? "inner-hero-grid" : "inner-hero-grid inner-hero-grid-single"}>
              <article className="card inner-copy-card">
                <h1>{page.title}</h1>
                <p className="section-lead">{page.lead}</p>
                {page.intro.map((text) => (
                  <p className="inner-paragraph" key={text}>
                    {text}
                  </p>
                ))}

                {"highlights" in page ? (
                  <ul className="inner-bullets">
                    {page.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="cta-row">
                  <Link className="primary-btn" href={bookHref}>
                    {t.innerPage.primaryCta}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.innerPage.secondaryCta}
                  </a>
                </div>
              </article>

              {heroImage ? (
                <article className="card inner-media-card">
                  <Image alt={page.title} fill priority sizes="(max-width: 960px) 100vw, 42vw" src={heroImage} />
                </article>
              ) : null}
            </div>
          </div>
        </section>

        {"packages" in page ? (
          <section className="section section-muted">
            <div className="container">
              <h2 className="section-title">{locale === "ar" ? "باقات تجميد الدهون" : "Fat Freezing Packages"}</h2>
              <div className="package-grid">
                {page.packages.map((pkg) => (
                  <article className="card package-card" key={pkg.name}>
                    {pkg.badge ? <p className="package-badge">{pkg.badge}</p> : null}
                    <h3>{pkg.name}</h3>
                    <p className="package-pricing">
                      <span className="price-old">{pkg.standardPrice}</span>
                      <span className="price-new">{pkg.promoPrice}</span>
                    </p>
                    <p className="package-meta">{pkg.bestFor}</p>
                    <Link className="primary-btn" href={bookHref}>
                      {t.hero.bookTreatmentCta}
                    </Link>
                  </article>
                ))}
              </div>
              <p className="results-disclaimer" style={{marginTop: "14px"}}>
                {page.disclaimer}
              </p>
            </div>
          </section>
        ) : (
          <section className="section section-muted">
            <div className="container">
              <div className="addon-price-card card">
                <h2 className="section-title">{page.price}</h2>
                <p className="price-offer">{page.offer}</p>
              </div>

              <div className="inner-card-grid" style={{marginTop: "16px"}}>
                {page.sections.map((section) => (
                  <article className="card info-card" key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </article>
                ))}
              </div>

              <p className="results-disclaimer" style={{marginTop: "14px"}}>
                {page.disclaimer}
              </p>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
