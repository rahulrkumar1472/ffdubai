import Image from "next/image";
import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";

function pickImage(index: number) {
  if (STOCK_IMAGES.length === 0) return null;
  return STOCK_IMAGES[index % STOCK_IMAGES.length];
}

export function TreatmentsIndexView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";

  const cards = [
    {
      title: t.nav.fatFreezing,
      description:
        locale === "ar"
          ? "العلاج الرئيسي لنحت الدهون الموضعية بخطة تبدأ من 489 درهم."
          : "Core contouring treatment with doctor-led planning from AED 489.",
      href: `${base}/fat-freezing`,
      image: pickImage(4)
    },
    {
      title: t.nav.ultrasound,
      description:
        locale === "ar"
          ? "جلسات داعمة لنحت القوام بسعر 450 درهم للجلسة."
          : "Supportive contouring sessions at AED 450 per session.",
      href: `${base}/ultrasound-cavitation`,
      image: pickImage(6)
    },
    {
      title: t.nav.radiofrequency,
      description:
        locale === "ar"
          ? "جلسات شد البشرة بالتردد الحراري بسعر 450 درهم للجلسة."
          : "Skin-firming RF sessions at AED 450 per session.",
      href: `${base}/radiofrequency`,
      image: pickImage(8)
    }
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{name: t.nav.treatments, path: "/treatments"}])} />
      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: t.nav.treatments, href: `${base}/treatments`}]} />

            <div className="inner-hero-head">
              <h1>{t.nav.treatments}</h1>
              <p className="section-lead">
                {locale === "ar"
                  ? "مجموعة علاجات نحت الجسم لدينا مبنية على تقييم طبي واضح وخيارات سعرية شفافة."
                  : "Our treatment menu combines doctor-led assessment with transparent package options."}
              </p>
            </div>

            <div className="inner-card-grid">
              {cards.map((card) => (
                <article className="card inner-service-card" key={card.href}>
                  {card.image ? (
                    <div className="inner-service-media">
                      <Image alt={card.title} fill sizes="(max-width: 900px) 100vw, 33vw" src={card.image} />
                    </div>
                  ) : null}
                  <div className="inner-service-content">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <Link className="outline-btn" href={card.href}>
                      {locale === "ar" ? "عرض التفاصيل" : "View details"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
