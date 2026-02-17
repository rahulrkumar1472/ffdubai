import Link from "next/link";
import {getServerLang} from "@/lib/i18n/lang";
import {SITE_CONFIG} from "@/lib/site-config";

export function CtaSection({
  title,
  description,
  primaryHref = "/book",
  primaryLabel
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const lang = getServerLang();
  const resolvedPrimaryLabel = primaryLabel ?? (lang === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation");
  const whatsappLabel = lang === "ar" ? "واتساب العيادة" : "WhatsApp Clinic";

  return (
    <section className="section">
      <div className="container">
        <article className="card final-panel">
          <h2>{title}</h2>
          <p className="section-lead">{description}</p>
          <div className="cta-row cta-row-tight">
            <Link className="primary-btn" href={primaryHref}>
              {resolvedPrimaryLabel}
            </Link>
            <a className="outline-btn" href={SITE_CONFIG.whatsappUrl} rel="noreferrer" target="_blank">
              {whatsappLabel}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
