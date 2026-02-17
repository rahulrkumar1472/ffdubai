import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | FAT FREEZING",
  description: "Cookies policy for FAT FREEZING website and analytics usage."
};

export default function CookiesPolicyPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <article className="card legal-card">
            <h1>Cookies Policy</h1>
            <p className="section-lead">
              This website uses cookies and similar technologies to improve user experience, measure site usage, and support
              core booking journeys.
            </p>
            <h2>Essential cookies</h2>
            <p>
              Essential cookies support routing, language preference, and interface state such as banner or popup dismissal.
            </p>
            <h2>Performance cookies</h2>
            <p>
              Performance cookies may be used to understand page behavior and improve website quality. No medical decisions are
              made solely from analytics signals.
            </p>
            <h2>Managing cookies</h2>
            <p>
              You can manage cookies through your browser settings. Disabling certain cookies may reduce some site
              functionality.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

