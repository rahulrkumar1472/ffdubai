import Image from "next/image";
import Link from "next/link";
import {BookingForm} from "@/components/booking-form";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema, clinicSchema, serviceSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";

function pickImage(images: string[], index: number) {
  if (images.length === 0) return null;
  return images[index % images.length];
}

export function BookView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);

  const sideImage = pickImage(STOCK_IMAGES, 3) || pickImage(STOCK_IMAGES, 0);

  const whatNext =
    locale === "ar"
      ? [
          "نتواصل معك خلال وقت قصير لتأكيد الحجز.",
          "نراجع المنطقة المستهدفة ونضع توقعات واقعية.",
          "نحدد إذا كانت الجلسة الواحدة كافية أو تحتاج خطة على مرحلتين.",
          "يمكنك دائمًا متابعة أسرع عبر واتساب."
        ]
      : [
          "Our team confirms your requested slot shortly.",
          "We review your target area and realistic treatment goals.",
          "We advise whether one session is suitable or if a second session may help.",
          "You can continue faster on WhatsApp anytime."
        ];

  return (
    <>
      <JsonLd data={clinicSchema(locale)} />
      <JsonLd data={serviceSchema(locale)} />
      <JsonLd data={breadcrumbSchema(locale, "/book", locale === "ar" ? "احجز استشارة" : "Book Consultation")} />

      <main>
        <section className="hero" style={{paddingTop: "2rem"}}>
          <div className="container">
            <div className="copy-image-grid" style={{alignItems: "stretch"}}>
              <div>
                <h1 style={{fontSize: "clamp(1.9rem, 4vw, 2.8rem)"}}>{t.booking.title}</h1>
                <p className="lead">{t.booking.subtitle}</p>
                <div className="row-links" style={{marginTop: "0.6rem", marginBottom: "0.95rem"}}>
                  <Link className="link-btn" href={locale === "en" ? "/en" : "/ar"}>
                    {t.nav.home}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {t.hero.secondaryCta}
                  </a>
                </div>
                <BookingForm locale={locale} />
              </div>

              <div className="panel" style={{display: "flex", flexDirection: "column", gap: "0.8rem", background: "#fff"}}>
                <div className="image-card" style={{minHeight: "300px"}}>
                  {sideImage ? <Image alt="Consultation process" fill priority sizes="(max-width: 900px) 100vw, 40vw" src={sideImage} /> : null}
                </div>

                <div>
                  <h3 className="section-head" style={{fontSize: "1.3rem", marginBottom: "0.5rem"}}>
                    {locale === "ar" ? "ماذا يحدث بعد الحجز؟" : "What happens next"}
                  </h3>
                  <ul style={{paddingInlineStart: "1.1rem", color: "var(--text-soft)", lineHeight: 1.7}}>
                    {whatNext.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
