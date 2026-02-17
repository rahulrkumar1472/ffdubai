import type {Metadata} from "next";
import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {getArea, getAreaSlugs} from "@/lib/areas";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/areas",
  title: "Fat Freezing Areas in Dubai",
  description: "Explore local fat freezing area pages for Dubai with consultation-first booking options."
});

export default function AreasIndexPageEn() {
  const slugs = getAreaSlugs();

  return (
    <main>
      <section className="section inner-hero">
        <div className="container">
          <Breadcrumbs locale="en" items={[{label: "Areas", href: "/en/areas"}]} />
          <article className="card">
            <h1>Fat Freezing Areas in Dubai</h1>
            <p className="section-lead">
              Browse local area pages with practical access details, booking links, and consultation-first guidance.
            </p>
            <div className="inner-card-grid">
              {slugs.map((slug) => {
                const area = getArea("en", slug);
                if (!area) return null;
                return (
                  <article className="card feature-card" key={slug}>
                    <h2>{area.name}</h2>
                    <p>{area.lead}</p>
                    <div className="cta-row cta-row-tight">
                      <Link className="primary-btn" href={`/en/areas/${slug}`}>
                        View Area Page
                      </Link>
                      <Link className="outline-btn" href="/en/book">
                        Book Free Consultation
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

