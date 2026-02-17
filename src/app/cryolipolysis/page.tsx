import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("cryolipolysis");

export const metadata: Metadata = buildRootMetadata({
  path: "/cryolipolysis",
  title: page.title,
  description: page.description
});

export default function CryolipolysisPage() {
  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[{href: "/", label: "Home"}, {href: "/cryolipolysis", label: "Cryolipolysis"}]}
        includeProcedureSchema
        page={page}
      />
    </PageLayout>
  );
}
