import type {Metadata} from "next";
import {BlogIndexView} from "@/components/blog-index-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/blog",
  title: "Dubai Fat Freezing Blog | FAT FREEZING",
  description: "Educational guides on fat freezing, pricing, aftercare, safety, and treatment planning in Dubai."
});

export default function EnBlogIndexPage() {
  return <BlogIndexView locale="en" />;
}
