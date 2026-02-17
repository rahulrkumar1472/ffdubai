import type {Metadata} from "next";
import Link from "next/link";
import {BookingForm} from "@/components/booking-form";
import {JsonLd} from "@/components/json-ld";
import {PageLayout} from "@/components/site/PageLayout";
import {getDictionary} from "@/lib/i18n";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";
import {localBusinessJsonLd} from "@/lib/seo/jsonld";
import {SITE_CONFIG} from "@/lib/site-config";

export const metadata: Metadata = buildRootMetadata({
  path: "/book",
  title: "Book Free Consultation | FAT FREEZING Dubai",
  description: "Choose a date, share your details, and confirm your cryolipolysis consultation or treatment booking in Dubai."
});

export default function BookPage({
  searchParams
}: {
  searchParams?: {mode?: string; treatment?: string; package?: string};
}) {
  const lang = getServerLang();
  const t = getDictionary(lang);
  const hasTreatmentPreset = Boolean(searchParams?.treatment);
  const initialMode = searchParams?.mode === "treatment" || hasTreatmentPreset ? "treatment" : "consultation";
  const initialTreatment = searchParams?.treatment ?? "";
  const initialPackage = searchParams?.package ?? "";

  return (
    <PageLayout>
      <JsonLd
        data={
          localBusinessJsonLd({
            name: SITE_CONFIG.brandName,
            url: `${SITE_CONFIG.siteUrl}/book`,
            description:
              "Online booking flow for free consultation and treatment planning for fat freezing in Dubai.",
            areaServed: SITE_CONFIG.serviceArea,
            address: SITE_CONFIG.address,
            telephone: SITE_CONFIG.phone
          })
        }
      />

      <main>
        <section className="section inner-hero">
          <div className="container">
            <article className="card">
              <h1>{t.booking.pageTitle}</h1>
              <p className="section-lead">{t.booking.pageSubtitle}</p>
              <BookingForm
                initialMode={initialMode}
                initialPackage={initialPackage}
                initialTreatment={initialTreatment}
                locale={lang}
              />
              <div className="inline-links" style={{marginTop: 16}}>
                <Link href="/pricing">{t.nav.pricing}</Link>
                <Link href="/fat-freezing">{t.nav.fatFreezing}</Link>
                <Link href="/faq">{t.nav.faq}</Link>
              </div>
              <p className="results-disclaimer">
                {lang === "ar"
                  ? "ملاحظة: تأكيد الحجز لا يعني تأكيد الملاءمة الطبية النهائية. يتم اعتماد الخطة بعد التقييم السريري."
                  : "Informational note: booking confirmation does not guarantee treatment suitability. Final clinical decisions are made at consultation."}
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
