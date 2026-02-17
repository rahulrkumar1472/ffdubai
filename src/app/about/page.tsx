import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("about");

export const metadata: Metadata = buildRootMetadata({
  path: "/about",
  title: page.title,
  description: page.description
});

export default function AboutPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/about", label: lang === "ar" ? "عن العيادة" : "About"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
