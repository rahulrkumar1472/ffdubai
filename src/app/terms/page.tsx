import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {buildRootMetadata} from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata({
  path: "/terms",
  title: "Terms and Conditions | FAT FREEZING",
  description: "Terms of use and booking conditions for fatfreezing.ae services in Dubai."
});

export default function TermsPage() {
  return (
    <PageLayout>
      <main>
        <section className="section">
          <div className="container">
            <article className="card legal-card">
              <h1>Terms and Conditions</h1>
              <p className="section-lead">
                By using this website, you agree to these terms for information use, booking requests, and communication.
                Content is educational and should not be treated as a substitute for direct medical evaluation.
              </p>
              <h2>Service information</h2>
              <p>
                Treatment descriptions are provided for general education. Final suitability and treatment scope are determined
                only after consultation.
              </p>
              <h2>Booking requests</h2>
              <p>
                Appointment submissions are requests, not guaranteed treatment approval. Slots are subject to confirmation and
                clinical suitability checks.
              </p>
              <h2>Pricing and offers</h2>
              <p>
                Offer terms can change over time. Transparent package recommendations are provided during consultation based on
                area suitability and treatment plan.
              </p>
              <h2>Liability notice</h2>
              <p>
                We work to keep information accurate and current, but no guarantee is made that every page is complete at all
                times. Use of site information remains your responsibility.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
