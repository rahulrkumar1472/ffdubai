import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {ResultsGallery} from "@/components/results-gallery";
import {JsonLd} from "@/components/json-ld";
import {breadcrumbSchema} from "@/lib/schema";
import {getDictionary, type Locale} from "@/lib/i18n";
import {REAL_RESULTS_IMAGES} from "@/lib/results";

export function ResultsPageView({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const base = locale === "en" ? "/en" : "/ar";

  const images = REAL_RESULTS_IMAGES.filter(Boolean);
  const resultsClass = images.length === 1 ? "results-single" : images.length < 3 ? "results-compact" : "results-standard";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{name: t.nav.results, path: "/results"}])} />
      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: t.nav.results, href: `${base}/results`}]} />

            <div className="inner-hero-head">
              <h1>{t.pages.results.title}</h1>
              <p className="section-lead">{t.pages.results.lead}</p>
              <p className="results-disclaimer">{t.results.disclaimer}</p>
            </div>

            {images.length > 0 ? (
              <div className={`results-gallery-wrap ${resultsClass}`}>
                <ResultsGallery images={images.length < 3 ? images.slice(0, 2) : images} locale={locale} />
              </div>
            ) : (
              <article className="card results-empty">
                <h2>{locale === "ar" ? "إضافة النتائج الفعلية قريباً" : "Real patient results being added"}</h2>
                <p>{t.pages.results.emptyText}</p>
              </article>
            )}

            <div className="cta-row cta-row-tight">
              <Link className="primary-btn" href={`${base}/book`}>
                {t.innerPage.primaryCta}
              </Link>
              <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                {t.finalCta.tertiaryCta}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
