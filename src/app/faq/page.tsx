import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("faq");

export const metadata: Metadata = buildRootMetadata({
  path: "/faq",
  title: page.title,
  description: page.description
});

export default function FaqPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/faq", label: lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
