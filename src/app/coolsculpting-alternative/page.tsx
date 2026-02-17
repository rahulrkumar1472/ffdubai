import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("coolsculpting-alternative");

export const metadata: Metadata = buildRootMetadata({
  path: "/coolsculpting-alternative",
  title: page.title,
  description: page.description
});

export default function CoolsculptingAlternativePage() {
  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: "Home"},
          {href: "/coolsculpting-alternative", label: "CoolSculpting Alternative"}
        ]}
        includeProcedureSchema
        page={page}
      />
    </PageLayout>
  );
}
