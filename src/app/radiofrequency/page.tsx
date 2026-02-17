import type {Metadata} from "next";
import Link from "next/link";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {RADIOFREQUENCY_CHILDREN, getClusterPage} from "@/lib/seo/cluster-pages";
import {buildRootMetadata} from "@/lib/seo";

const englishPage = getClusterPage("radiofrequency", "en");

export const metadata: Metadata = buildRootMetadata({
  path: "/radiofrequency",
  title: englishPage.title,
  description: englishPage.description
});

export default function RadiofrequencyPage() {
  const lang = getServerLang();
  const page = getClusterPage("radiofrequency", lang);

  return (
    <PageLayout>
      <section className="section" aria-label={lang === "ar" ? "روابط أقسام الراديو فريكونسي" : "Treatment section links"}>
        <div className="container">
          <article className="card">
            <h2>{lang === "ar" ? "استكشف صفحات الراديو فريكونسي" : "Explore Radiofrequency Pages"}</h2>
            <div className="inline-links">
              {RADIOFREQUENCY_CHILDREN.map((child) => (
                <Link href={`/radiofrequency/${child}`} key={child}>
                  {child.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/radiofrequency", label: lang === "ar" ? "الراديو فريكونسي" : "Radiofrequency"}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
