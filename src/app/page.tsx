import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {JsonLd} from "@/components/json-ld";
import {CtaSection} from "@/components/site/CtaSection";
import {PageLayout} from "@/components/site/PageLayout";
import {FaqSection} from "@/components/site/FaqSection";
import {buildRootMetadata, SITE_NAME} from "@/lib/seo";
import {faqJsonLd, localBusinessJsonLd, medicalProcedureJsonLd} from "@/lib/seo/jsonld";
import {SITE_CONFIG} from "@/lib/site-config";
import {STOCK_IMAGES} from "@/lib/image-manifest";

const homeFaq = [
  {
    question: "What is fat freezing used for?",
    answer:
      "Fat freezing is used for localized contouring in stubborn fat areas and is not a replacement for general weight-loss treatment."
  },
  {
    question: "How much does treatment start from?",
    answer: "Current pricing starts from AED 489, with final scope based on consultation and treatment area planning."
  },
  {
    question: "How long until I can see changes?",
    answer: "Most patients notice gradual change over weeks, with clearer contour differences often reviewed around week 6 to 12."
  }
];

export const metadata: Metadata = buildRootMetadata({
  path: "/",
  title: `${SITE_NAME} | Fat Freezing Dubai (Cryolipolysis)`,
  description:
    "Fat Freezing Dubai (Cryolipolysis) with transparent pricing from AED 489, consultation-first planning, and realistic results guidance."
});

export default function HomePage() {
  const heroImage = STOCK_IMAGES[0] ?? null;

  return (
    <PageLayout>
      <JsonLd
        data={
          localBusinessJsonLd({
            name: SITE_CONFIG.brandName,
            url: SITE_CONFIG.siteUrl,
            description:
              "Doctor-led cryolipolysis and fat freezing consultation in Dubai with transparent pricing and realistic expectations.",
            areaServed: SITE_CONFIG.serviceArea,
            address: SITE_CONFIG.address,
            telephone: SITE_CONFIG.phone
          })
        }
      />
      <JsonLd
        data={
          medicalProcedureJsonLd({
            name: "Fat Freezing (Cryolipolysis)",
            description:
              "Non-surgical controlled-cooling procedure for localized fat contouring in suitable candidates.",
            url: `${SITE_CONFIG.siteUrl}/fat-freezing`
          })
        }
      />
      <JsonLd data={faqJsonLd(homeFaq)} />

      <main>
        <section className="section hero-section">
          <div className="container">
            <div className={heroImage ? "hero-grid" : "hero-grid hero-grid-single"}>
              <article className="card hero-copy">
                <span className="eyebrow">Dubai non-surgical body contouring</span>
                <h1>Fat Freezing Dubai (Cryolipolysis)</h1>
                <p className="section-lead">
                  Consultation-first cryolipolysis for stubborn fat pockets with transparent planning and realistic timelines.
                  Designed for targeted contouring, not broad weight-loss treatment.
                </p>
                <p className="price-chip">From AED 489</p>
                <ul className="pill-row">
                  <li className="pill">Doctor-led assessment</li>
                  <li className="pill">No surgery</li>
                  <li className="pill">No downtime</li>
                  <li className="pill">Results vary</li>
                </ul>
                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href="/book">
                    Book Free Consultation
                  </Link>
                  <Link className="outline-btn" href="/pricing">
                    View Pricing
                  </Link>
                </div>
              </article>

              {heroImage ? (
                <article className="hero-media card">
                  <Image
                    alt="Fat freezing consultation in Dubai"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 45vw"
                    src={heroImage}
                  />
                  <span aria-hidden className="hero-overlay" />
                </article>
              ) : null}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <article className="card">
              <h2>What is Fat Freezing?</h2>
              <p className="inner-paragraph">
                Fat freezing, also called cryolipolysis, uses controlled cooling to target localized fat tissue in selected
                body areas. The process is designed for contour refinement and is not a substitute for medical obesity care.
                During consultation, the clinician assesses whether the target area is suitable and whether one session or
                staged sessions are likely to be required.
              </p>
              <p className="inner-paragraph">
                Because treated fat is processed gradually, visible changes are usually reviewed over weeks rather than days.
                Most patients are guided through a structured timeline so decisions are made on clinical progress, not
                assumptions. This approach helps set realistic expectations and keeps treatment planning safe and transparent.
              </p>
              <h2>Results timeline and expectations</h2>
              <p className="inner-paragraph">
                Early changes may appear in 2 to 4 weeks, with clearer contour improvements commonly reviewed from week 6 to
                12. Outcomes vary by baseline profile, target area, and aftercare consistency. Ethical treatment communication
                always includes this variability and avoids guaranteed outcome claims.
              </p>
              <div className="inline-links">
                <Link href="/fat-freezing">Fat Freezing treatment guide</Link>
                <Link href="/results">Results timeline page</Link>
                <Link href="/body-areas">Areas we treat</Link>
                <Link href="/book">Book consultation</Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <article className="card">
              <h2>Locations served</h2>
              <p className="section-lead">
                We support patients across Dubai with consultation and treatment pathways built around practical scheduling.
              </p>
              <div className="inline-links">
                <Link href="/locations/dubai">Fat Freezing near Dubai</Link>
                <Link href="/locations/jumeirah">Fat Freezing near Jumeirah</Link>
                <Link href="/locations">View all location pages</Link>
              </div>
            </article>
          </div>
        </section>

        <FaqSection items={homeFaq} />
        <section className="section">
          <div className="container">
            <div className="inline-links">
              <Link href="/faq">Read full FAQ</Link>
              <Link href="/cryolipolysis">Cryolipolysis explained</Link>
              <Link href="/coolsculpting-alternative">CoolSculpting alternative guide</Link>
            </div>
          </div>
        </section>
        <CtaSection
          description="Discuss suitability, treatment area priorities, and transparent package planning with a clinician."
          title="Start with a consultation-first treatment plan"
        />
      </main>
    </PageLayout>
  );
}
