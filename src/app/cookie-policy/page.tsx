import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {buildRootMetadata} from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata({
  path: "/cookie-policy",
  title: "Cookie Policy | FAT FREEZING",
  description: "Cookie policy for fatfreezing.ae describing essential and analytics-related browser storage usage."
});

export default function CookiePolicyPage() {
  return (
    <PageLayout>
      <main>
        <section className="section">
          <div className="container">
            <article className="card legal-card">
              <h1>Cookie Policy</h1>
              <p className="section-lead">
                This site uses cookies and browser storage to support core functionality, language/session preferences, and
                performance analysis.
              </p>
              <h2>Essential cookies</h2>
              <p>
                Essential storage supports core UX behavior such as navigation preferences and temporary dismissal states for
                banners or notices.
              </p>
              <h2>Performance and analytics</h2>
              <p>
                Performance measurements may be used to improve speed, layout consistency, and booking flow quality.
              </p>
              <h2>Managing cookies</h2>
              <p>
                You can update browser settings to control cookie behavior. Disabling some cookies may reduce functionality.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
