import Link from "next/link";
import {Breadcrumbs} from "@/components/site/Breadcrumbs";
import {CtaSection} from "@/components/site/CtaSection";
import {FaqSection} from "@/components/site/FaqSection";

type SectionBlock = {
  id?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type InternalLink = {
  href: string;
  label: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function SeoPageTemplate({
  h1,
  intro,
  trustItems,
  sections,
  internalLinks,
  faq,
  ctaTitle,
  ctaDescription,
  breadcrumbs,
  disclaimer,
  relatedHeading,
  faqHeading
}: {
  h1: string;
  intro: string[];
  trustItems: string[];
  sections: SectionBlock[];
  internalLinks: InternalLink[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  breadcrumbs: Array<{href: string; label: string}>;
  disclaimer: string;
  relatedHeading: string;
  faqHeading: string;
}) {
  return (
    <main>
      <section className="section inner-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <article className="card">
            <h1>{h1}</h1>
            {intro.map((paragraph) => (
              <p className="inner-paragraph" key={paragraph.slice(0, 30)}>
                {paragraph}
              </p>
            ))}

            <ul className="pill-row">
              {trustItems.map((item) => (
                <li className="pill" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            {sections.map((section) => (
              <section className="blog-section" id={section.id} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p className="inner-paragraph" key={`${section.title}-${paragraph.slice(0, 20)}`}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="inner-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="blog-section">
              <h2>{relatedHeading}</h2>
              <div className="inline-links">
                {internalLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <p className="results-disclaimer">{disclaimer}</p>
          </article>
        </div>
      </section>

      <FaqSection items={faq} title={faqHeading} />
      <CtaSection description={ctaDescription} title={ctaTitle} />
    </main>
  );
}
