import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("locations");

export const metadata: Metadata = buildRootMetadata({
  path: "/locations",
  title: page.title,
  description: page.description
});

export default function LocationsHubPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/locations", label: lang === "ar" ? "المواقع" : "Locations"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
