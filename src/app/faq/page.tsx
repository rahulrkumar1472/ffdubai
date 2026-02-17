import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("faq");

export const metadata: Metadata = buildRootMetadata({
  path: "/faq",
  title: page.title,
  description: page.description
});

export default function FaqPage() {
  return (
    <PageLayout>
      <SeoPage breadcrumbs={[{href: "/", label: "Home"}, {href: "/faq", label: "FAQ"}]} page={page} />
    </PageLayout>
  );
}
