import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("before-after");

export const metadata: Metadata = buildRootMetadata({
  path: "/before-after",
  title: page.title,
  description: page.description
});

export default function BeforeAfterPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/before-after", label: lang === "ar" ? "قبل وبعد" : "Before & After"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
