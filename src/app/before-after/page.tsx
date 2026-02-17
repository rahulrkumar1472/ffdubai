import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("before-after");

export const metadata: Metadata = buildRootMetadata({
  path: "/before-after",
  title: page.title,
  description: page.description
});

export default function BeforeAfterPage() {
  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[{href: "/", label: "Home"}, {href: "/before-after", label: "Before & After"}]}
        page={page}
      />
    </PageLayout>
  );
}
