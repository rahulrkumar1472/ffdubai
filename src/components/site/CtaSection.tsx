import Link from "next/link";
import {SITE_CONFIG} from "@/lib/site-config";

export function CtaSection({
  title,
  description,
  primaryHref = "/book",
  primaryLabel = "Book Free Consultation"
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <article className="card final-panel">
          <h2>{title}</h2>
          <p className="section-lead">{description}</p>
          <div className="cta-row cta-row-tight">
            <Link className="primary-btn" href={primaryHref}>
              {primaryLabel}
            </Link>
            <a className="outline-btn" href={SITE_CONFIG.whatsappUrl} rel="noreferrer" target="_blank">
              WhatsApp Clinic
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
