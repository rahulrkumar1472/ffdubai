import type {Metadata} from "next";
import Link from "next/link";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {FAT_FREEZING_CHILDREN} from "@/lib/seo/cluster-pages";
import {buildRootMetadata} from "@/lib/seo";

const pageEn = getCorePage("fat-freezing");

export const metadata: Metadata = buildRootMetadata({
  path: "/fat-freezing",
  title: pageEn.title,
  description: pageEn.description
});

export default function FatFreezingPage() {
  const lang = getServerLang();
  const page = getCorePage("fat-freezing");

  return (
    <PageLayout>
      <section className="section" aria-label={lang === "ar" ? "روابط أقسام تجميد الدهون" : "Fat Freezing subpages"}>
        <div className="container">
          <article className="card">
            <h2>{lang === "ar" ? "استكشف صفحات تجميد الدهون" : "Explore Fat Freezing Pages"}</h2>
            <div className="inline-links">
              {FAT_FREEZING_CHILDREN.map((child) => (
                <Link href={`/fat-freezing/${child}`} key={child}>
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
          {href: "/fat-freezing", label: lang === "ar" ? "تجميد الدهون" : "Fat Freezing"}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
