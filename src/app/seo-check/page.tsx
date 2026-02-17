import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SITE_URL, buildRootMetadata} from "@/lib/seo";

const keyCanonicals = [
  "/",
  "/fat-freezing",
  "/cryolipolysis",
  "/pricing",
  "/results",
  "/locations/dubai",
  "/faq",
  "/book"
] as const;

export const metadata: Metadata = {
  ...buildRootMetadata({
    path: "/seo-check",
    title: "SEO Check",
    description: "Internal SEO diagnostics"
  }),
  robots: {
    index: false,
    follow: false
  }
};

export default function SeoCheckPage() {
  return (
    <PageLayout>
      <main>
        <section className="section">
          <div className="container">
            <article className="card legal-card">
              <h1>SEO Check (Internal)</h1>
              <p className="section-lead">Noindex diagnostics page for deployment QA.</p>
              <p>
                <strong>Canonical Site URL:</strong> {SITE_URL}
              </p>
              <p>
                <strong>Build timestamp:</strong> {new Date().toISOString()}
              </p>
              <h2>Key canonical URLs</h2>
              <ul className="inner-list">
                {keyCanonicals.map((path) => (
                  <li key={path}>{`${SITE_URL}${path}`}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
