import type {Metadata} from "next";
import Link from "next/link";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {ULTRASOUND_CHILDREN, getClusterPage} from "@/lib/seo/cluster-pages";
import {buildRootMetadata} from "@/lib/seo";

const englishPage = getClusterPage("ultrasound-cavitation", "en");

export const metadata: Metadata = buildRootMetadata({
  path: "/ultrasound-cavitation",
  title: englishPage.title,
  description: englishPage.description
});

export default function UltrasoundCavitationPage() {
  const lang = getServerLang();
  const page = getClusterPage("ultrasound-cavitation", lang);

  return (
    <PageLayout>
      <section className="section" aria-label={lang === "ar" ? "روابط أقسام العلاج" : "Treatment section links"}>
        <div className="container">
          <article className="card">
            <h2>{lang === "ar" ? "استكشف صفحات الألتراساوند" : "Explore Ultrasound Cavitation Pages"}</h2>
            <div className="inline-links">
              {ULTRASOUND_CHILDREN.map((child) => (
                <Link href={`/ultrasound-cavitation/${child}`} key={child}>
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
          {href: "/ultrasound-cavitation", label: lang === "ar" ? "الألتراساوند كافيتيشن" : "Ultrasound Cavitation"}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
