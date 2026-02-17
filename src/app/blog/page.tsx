import type {Metadata} from "next";
import {BlogIndexView} from "@/components/blog-index-view";
import {PageLayout} from "@/components/site/PageLayout";
import {buildRootMetadata} from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata({
  path: "/blog",
  title: "Fat Freezing Dubai Blog",
  description:
    "Educational blog covering cryolipolysis safety, pricing, results timeline, and treatment planning in Dubai."
});

export default function BlogPage() {
  return (
    <PageLayout>
      <BlogIndexView basePath="" locale="en" />
    </PageLayout>
  );
}
