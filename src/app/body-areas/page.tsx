import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("body-areas");

export const metadata: Metadata = buildRootMetadata({
  path: "/body-areas",
  title: page.title,
  description: page.description
});

export default function BodyAreasPage() {
  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[{href: "/", label: "Home"}, {href: "/body-areas", label: "Body Areas"}]}
        includeProcedureSchema
        page={page}
      />
    </PageLayout>
  );
}
