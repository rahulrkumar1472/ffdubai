import type {Metadata} from "next";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage, getCorePage} from "@/components/site/SeoPage";
import {buildRootMetadata} from "@/lib/seo";

const page = getCorePage("about");

export const metadata: Metadata = buildRootMetadata({
  path: "/about",
  title: page.title,
  description: page.description
});

export default function AboutPage() {
  return (
    <PageLayout>
      <SeoPage breadcrumbs={[{href: "/", label: "Home"}, {href: "/about", label: "About"}]} page={page} />
    </PageLayout>
  );
}
