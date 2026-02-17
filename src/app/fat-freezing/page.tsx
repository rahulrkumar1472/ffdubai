import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("fat-freezing");

export const metadata: Metadata = buildRootMetadata({
  path: "/fat-freezing",
  title: page.title,
  description: page.description
});

export default function FatFreezingPage() {
  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[{href: "/", label: "Home"}, {href: "/fat-freezing", label: "Fat Freezing"}]}
        includeProcedureSchema
        page={page}
      />
    </PageLayout>
  );
}
