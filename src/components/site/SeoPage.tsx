import {JsonLd} from "@/components/json-ld";
import {SeoPageTemplate} from "@/components/site/SeoPageTemplate";
import {CORE_PAGES, TRUST_ITEMS, type SeoPageData} from "@/lib/seo/site-pages";
import {SITE_CONFIG} from "@/lib/site-config";
import {breadcrumbJsonLd, faqJsonLd, medicalProcedureJsonLd} from "@/lib/seo/jsonld";
import type {Locale} from "@/lib/i18n";

type SeoPageProps = {
  page: SeoPageData;
  breadcrumbs: Array<{href: string; label: string}>;
  includeProcedureSchema?: boolean;
  locale?: Locale;
};

const TRUST_ITEMS_AR = ["تقييم طبي", "الأسعار تبدأ من 489 درهم", "بدون جراحة", "النتائج تختلف حسب الحالة"] as const;

export function SeoPage({page, breadcrumbs, includeProcedureSchema = false, locale = "en"}: SeoPageProps) {
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
        disclaimer={
          locale === "ar"
            ? "تنبيه طبي: المحتوى للتوعية فقط ولا يغني عن التقييم السريري المباشر. النتائج تختلف من شخص لآخر."
            : "Medical disclaimer: information is educational and not a substitute for direct clinical advice. Results vary by individual."
        }
        faq={page.faq}
        h1={page.h1}
        internalLinks={page.internalLinks}
        intro={page.intro}
        faqHeading={locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        relatedHeading={locale === "ar" ? "صفحات مرتبطة" : "Related Pages"}
        sections={page.sections}
        trustItems={locale === "ar" ? [...TRUST_ITEMS_AR] : [...TRUST_ITEMS]}
      />
    </>
  );
}

export function getCorePage(slug: keyof typeof CORE_PAGES) {
  return CORE_PAGES[slug];
}
