import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("results");

export const metadata: Metadata = buildRootMetadata({
  path: "/results",
  title: page.title,
  description: page.description
});

export default function ResultsPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/results", label: lang === "ar" ? "النتائج" : "Results"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
