import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FAT FREEZING",
  description: "Privacy policy for FAT FREEZING clinic website, booking forms, and contact requests."
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <article className="card legal-card">
            <h1>Privacy Policy</h1>
            <p className="section-lead">
              FAT FREEZING respects your privacy. This policy explains how booking and contact details are collected and used
              to manage consultation requests and treatment communication.
            </p>
            <h2>Data we collect</h2>
            <p>
              We collect name, phone, email, preferred date/time, and optional message fields submitted through booking forms
              or lead capture modules.
            </p>
            <h2>How data is used</h2>
            <p>
              Data is used to coordinate appointments, send confirmations, and provide relevant service updates. We do not sell
              personal data.
            </p>
            <h2>Storage and retention</h2>
            <p>
              Submitted data is stored securely within our booking systems and retained only as needed for operational,
              clinical-support, or regulatory purposes.
            </p>
            <h2>Your rights</h2>
            <p>
              You can request correction or deletion of your contact data by contacting the clinic directly via WhatsApp or
              phone.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

