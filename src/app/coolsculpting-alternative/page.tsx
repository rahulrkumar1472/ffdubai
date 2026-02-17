import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("coolsculpting-alternative");

export const metadata: Metadata = buildRootMetadata({
  path: "/coolsculpting-alternative",
  title: page.title,
  description: page.description
});

export default function CoolsculptingAlternativePage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/coolsculpting-alternative", label: lang === "ar" ? "بديل كول سكلبتنج" : "CoolSculpting Alternative"}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
