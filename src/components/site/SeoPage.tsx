import {JsonLd} from "@/components/json-ld";
import {SeoPageTemplate} from "@/components/site/SeoPageTemplate";
import {CORE_PAGES, TRUST_ITEMS, type SeoPageData} from "@/lib/seo/site-pages";
import {SITE_CONFIG} from "@/lib/site-config";
import {breadcrumbJsonLd, faqJsonLd, medicalProcedureJsonLd} from "@/lib/seo/jsonld";

type SeoPageProps = {
  page: SeoPageData;
  breadcrumbs: Array<{href: string; label: string}>;
  includeProcedureSchema?: boolean;
};

export function SeoPage({page, breadcrumbs, includeProcedureSchema = false}: SeoPageProps) {
  const breadcrumbItems = breadcrumbs.map((item) => ({name: item.label, path: item.href}));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(SITE_CONFIG.siteUrl, breadcrumbItems)} />
      {page.faq.length > 0 ? <JsonLd data={faqJsonLd(page.faq)} /> : null}
      {includeProcedureSchema ? (
        <JsonLd
          data={medicalProcedureJsonLd({
            name: page.h1,
            description: page.description,
            url: `${SITE_CONFIG.siteUrl}${breadcrumbs[breadcrumbs.length - 1]?.href ?? ""}`
          })}
        />
      ) : null}

      <SeoPageTemplate
        breadcrumbs={breadcrumbs}
        ctaDescription={page.ctaDescription}
        ctaTitle={page.ctaTitle}
        disclaimer="Medical disclaimer: information is educational and not a substitute for direct clinical advice. Results vary by individual."
        faq={page.faq}
        h1={page.h1}
        internalLinks={page.internalLinks}
        intro={page.intro}
        sections={page.sections}
        trustItems={[...TRUST_ITEMS]}
      />
    </>
  );
}

export function getCorePage(slug: keyof typeof CORE_PAGES) {
  return CORE_PAGES[slug];
}
