import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {buildRootMetadata} from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata({
  path: "/disclaimer",
  title: "Medical Disclaimer | FAT FREEZING",
  description: "Medical disclaimer for educational website content and treatment expectations on fatfreezing.ae."
});

export default function DisclaimerPage() {
  return (
    <PageLayout>
      <main>
        <section className="section">
          <div className="container">
            <article className="card legal-card">
              <h1>Medical Disclaimer</h1>
              <p className="section-lead">
                Information on fatfreezing.ae is educational and does not provide diagnosis, treatment prescription, or
                emergency medical advice.
              </p>
              <h2>No guaranteed outcomes</h2>
              <p>
                Cryolipolysis outcomes vary by individual profile, treatment area, and follow-up care. No page on this site
                should be interpreted as a guaranteed result statement.
              </p>
              <h2>Consultation-first requirement</h2>
              <p>
                Suitability must be confirmed by a clinician before treatment. Contraindications and side effects should be
                reviewed directly during consultation.
              </p>
              <h2>Emergency guidance</h2>
              <p>
                If you require urgent medical care, contact emergency services or a licensed healthcare provider immediately.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
