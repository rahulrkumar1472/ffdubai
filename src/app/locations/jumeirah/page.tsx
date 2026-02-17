import type {Metadata} from "next";
import {JsonLd} from "@/components/json-ld";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata} from "@/lib/seo";
import {localBusinessJsonLd} from "@/lib/seo/jsonld";
import {SITE_CONFIG} from "@/lib/site-config";

const page = getCorePage("locations-jumeirah");

export const metadata: Metadata = buildRootMetadata({
  path: "/locations/jumeirah",
  title: page.title,
  description: page.description
});

export default function JumeirahLocationPage() {
  const lang = getServerLang();

  return (
    <PageLayout>
      <JsonLd
        data={
          localBusinessJsonLd({
            name: SITE_CONFIG.brandName,
            url: `${SITE_CONFIG.siteUrl}/locations/jumeirah`,
            description: page.description,
            areaServed: "Jumeirah, Dubai, UAE",
            address: SITE_CONFIG.address,
            telephone: SITE_CONFIG.phone
          })
        }
      />
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/locations", label: lang === "ar" ? "المواقع" : "Locations"},
          {href: "/locations/jumeirah", label: lang === "ar" ? "جميرا" : "Jumeirah"}
        ]}
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
