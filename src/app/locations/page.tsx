import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("locations");

export const metadata: Metadata = buildRootMetadata({
  path: "/locations",
  title: page.title,
  description: page.description
});

export default function LocationsHubPage() {
  return (
    <PageLayout>
      <SeoPage breadcrumbs={[{href: "/", label: "Home"}, {href: "/locations", label: "Locations"}]} page={page} />
    </PageLayout>
  );
}
