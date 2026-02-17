import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Terms | FAT FREEZING",
  description: "Terms and conditions for FAT FREEZING clinic website and booking use."
};

export default function TermsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <article className="card legal-card">
            <h1>Terms & Conditions</h1>
            <p className="section-lead">
              These terms govern use of FAT FREEZING website content, appointment requests, and communication channels. By
              using this site, you agree to these terms and any applicable UAE regulations.
            </p>
            <h2>Medical suitability</h2>
            <p>
              Website content is informational and does not replace a clinical assessment. Treatment recommendations are
              confirmed only after consultation with a qualified clinician.
            </p>
            <h2>Bookings and availability</h2>
            <p>
              Appointment requests are subject to slot confirmation. Same-day availability may vary. We reserve the right to
              reschedule when clinical requirements or operational constraints apply.
            </p>
            <h2>Pricing and offers</h2>
            <p>
              Promotional pricing may be time-limited and subject to suitability checks. Final treatment planning is agreed
              during consultation.
            </p>
            <h2>Liability</h2>
            <p>
              We work to keep information accurate, but no guarantee is made that site content is complete at all times. Use
              of this site is at your own discretion.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

