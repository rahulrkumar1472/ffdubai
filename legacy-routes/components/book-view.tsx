import Image from "next/image";
import Link from "next/link";
import {BookingForm} from "@/components/booking-form";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema, clinicSchema, serviceSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";

function pickImage(images: string[], index: number) {
  if (images.length === 0) return null;
  return images[index % images.length];
}

export function BookView({
  locale,
  initialMode = "consultation",
  initialTreatment = "",
  initialPackage = ""
}: {
  locale: Locale;
  initialMode?: "consultation" | "treatment";
  initialTreatment?: string;
  initialPackage?: string;
}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";

  const sideImage = pickImage(STOCK_IMAGES, 3) || pickImage(STOCK_IMAGES, 0);

  return (
    <>
      <JsonLd data={clinicSchema(locale)} />
      <JsonLd data={serviceSchema(locale)} />
      <JsonLd data={breadcrumbSchema(locale, [{name: t.nav.book, path: "/book"}])} />

      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: t.nav.book, href: `${base}/book`}]} />

            <div className="inner-hero-head">
              <h1>{t.booking.pageTitle}</h1>
              <p className="section-lead">{t.booking.pageSubtitle}</p>
            </div>

            <div className="copy-image-grid booking-layout-grid">
              <article className="card">
                <h2 className="section-title">{t.booking.sectionTitle}</h2>
                <p className="section-lead">{t.booking.sectionSubtitle}</p>
                <BookingForm
                  initialMode={initialMode}
                  initialPackage={initialPackage}
                  initialTreatment={initialTreatment}
                  locale={locale}
                />
              </article>

              <article className="card booking-side-panel">
                <div className="image-card booking-side-media">{sideImage ? <Image alt="Booking preview" fill priority sizes="(max-width: 900px) 100vw, 40vw" src={sideImage} /> : null}</div>

                <div>
                  <h3 className="section-head">{t.booking.sideTitle}</h3>
                  <ul className="booking-side-list">
                    {t.booking.sidePoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="cta-row cta-row-tight">
                  <Link className="outline-btn" href={`${base}`}>
                    {t.innerPage.backToHome}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
