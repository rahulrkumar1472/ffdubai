import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("treatments");

export const metadata: Metadata = buildRootMetadata({
  path: "/treatments",
  title: page.title,
  description: page.description
});

export default function TreatmentsPage() {
  return (
    <PageLayout>
      <SeoPage breadcrumbs={[{href: "/", label: "Home"}, {href: "/treatments", label: "Treatments"}]} page={page} />
    </PageLayout>
  );
}
