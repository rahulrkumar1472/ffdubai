import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("cryolipolysis");

export const metadata: Metadata = buildRootMetadata({
  path: "/cryolipolysis",
  title: page.title,
  description: page.description
});

export default function CryolipolysisPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/cryolipolysis", label: lang === "ar" ? "كرايو ليبوليسيس" : "Cryolipolysis"}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
