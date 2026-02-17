import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("treatments");

export const metadata: Metadata = buildRootMetadata({
  path: "/treatments",
  title: page.title,
  description: page.description
});

export default function TreatmentsPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/treatments", label: lang === "ar" ? "العلاجات" : "Treatments"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
