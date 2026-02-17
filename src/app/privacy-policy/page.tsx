import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {buildRootMetadata} from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy | FAT FREEZING",
  description: "Privacy policy covering booking forms, enquiry data, and communication preferences for fatfreezing.ae."
});

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <main>
        <section className="section">
          <div className="container">
            <article className="card legal-card">
              <h1>Privacy Policy</h1>
              <p className="section-lead">
                This policy explains how personal information submitted through fatfreezing.ae is handled for booking,
                communication, and service support. We use only the information required to coordinate your consultation and
                treatment planning journey.
              </p>
              <h2>Information we collect</h2>
              <p>
                Information may include your name, phone number, email, selected date and time, treatment interest, and
                message details entered into booking or enquiry forms.
              </p>
              <h2>How information is used</h2>
              <p>
                Data is used to respond to enquiries, confirm appointments, send service communications, and support
                consultation planning. We do not sell personal data.
              </p>
              <h2>Storage and protection</h2>
              <p>
                Data is stored using operational systems that support appointment management. Access is limited to relevant
                staff and service workflows.
              </p>
              <h2>Your rights</h2>
              <p>
                You may request data correction or deletion by contacting the clinic. Some records may be retained where
                required for legal, operational, or clinical documentation obligations.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
