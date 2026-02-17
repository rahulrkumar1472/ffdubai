import type {Metadata} from "next";
import {JsonLd} from "@/components/json-ld";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";
import {localBusinessJsonLd} from "@/lib/seo/jsonld";
import {SITE_CONFIG} from "@/lib/site-config";

const page = getCorePage("contact");

export const metadata: Metadata = buildRootMetadata({
  path: "/contact",
  title: page.title,
  description: page.description
});

export default function ContactPage() {
  return (
    <PageLayout>
      <JsonLd
        data={
          localBusinessJsonLd({
            name: SITE_CONFIG.brandName,
            url: `${SITE_CONFIG.siteUrl}/contact`,
            description: page.description,
            areaServed: SITE_CONFIG.serviceArea,
            address: SITE_CONFIG.address,
            telephone: SITE_CONFIG.phone
          })
        }
      />
      <SeoPage breadcrumbs={[{href: "/", label: "Home"}, {href: "/contact", label: "Contact"}]} page={page} />
    </PageLayout>
  );
}
