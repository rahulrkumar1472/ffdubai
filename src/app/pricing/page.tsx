import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("pricing");

export const metadata: Metadata = buildRootMetadata({
  path: "/pricing",
  title: page.title,
  description: page.description
});

export default function PricingPage() {
  return (
    <PageLayout>
      <SeoPage breadcrumbs={[{href: "/", label: "Home"}, {href: "/pricing", label: "Pricing"}]} page={page} />
    </PageLayout>
  );
}
