import type {Metadata} from "next";
import {BlogIndexView} from "@/components/blog-index-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/blog",
  title: "مدونة تجميد الدهون في دبي | FAT FREEZING",
  description: "مقالات تثقيفية حول تجميد الدهون والأسعار والسلامة والعناية بعد الجلسات في دبي."
});

export default function ArBlogIndexPage() {
  return <BlogIndexView locale="ar" />;
}
