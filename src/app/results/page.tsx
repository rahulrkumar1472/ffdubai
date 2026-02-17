import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("results");

export const metadata: Metadata = buildRootMetadata({
  path: "/results",
  title: page.title,
  description: page.description
});

export default function ResultsPage() {
  return (
    <PageLayout>
      <SeoPage breadcrumbs={[{href: "/", label: "Home"}, {href: "/results", label: "Results"}]} page={page} />
    </PageLayout>
  );
}
