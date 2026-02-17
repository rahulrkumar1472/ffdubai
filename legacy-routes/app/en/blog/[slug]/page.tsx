import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {BlogPostView} from "@/components/blog-post-view";
import {BLOG_SLUGS, getBlogPost} from "@/lib/blog";
import {buildMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({slug}));
}

export function generateMetadata({params}: {params: {slug: string}}): Metadata {
  const post = getBlogPost("en", params.slug);

  if (!post) {
    return buildMetadata({
      locale: "en",
      path: `/blog/${params.slug}`,
      title: "Blog | FAT FREEZING",
      description: "Fat freezing educational content in Dubai."
    });
  }

  return buildMetadata({
    locale: "en",
    path: `/blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription
  });
}

export default function EnBlogPostPage({params}: {params: {slug: string}}) {
  const post = getBlogPost("en", params.slug);
  if (!post) notFound();

  return <BlogPostView locale="en" post={post} />;
}
