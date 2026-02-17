import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("pricing");

export const metadata: Metadata = buildRootMetadata({
  path: "/pricing",
  title: page.title,
  description: page.description
});

export default function PricingPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/pricing", label: lang === "ar" ? "الأسعار" : "Pricing"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
