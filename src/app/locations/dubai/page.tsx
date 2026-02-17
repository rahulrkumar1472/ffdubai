import type {Metadata} from "next";
import {JsonLd} from "@/components/json-ld";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";
import {localBusinessJsonLd} from "@/lib/seo/jsonld";
import {SITE_CONFIG} from "@/lib/site-config";

const page = getCorePage("locations-dubai");

export const metadata: Metadata = buildRootMetadata({
  path: "/locations/dubai",
  title: page.title,
  description: page.description
});

export default function DubaiLocationPage() {
  return (
    <PageLayout>
      <JsonLd
        data={
          localBusinessJsonLd({
            name: SITE_CONFIG.brandName,
            url: `${SITE_CONFIG.siteUrl}/locations/dubai`,
            description: page.description,
            areaServed: "Dubai, UAE",
            address: SITE_CONFIG.address,
            telephone: SITE_CONFIG.phone
          })
        }
      />
      <SeoPage
        breadcrumbs={[
          {href: "/", label: "Home"},
          {href: "/locations", label: "Locations"},
          {href: "/locations/dubai", label: "Dubai"}
        ]}
        page={page}
      />
    </PageLayout>
  );
}
