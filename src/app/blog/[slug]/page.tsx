import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {BlogPostView} from "@/components/blog-post-view";
import {PageLayout} from "@/components/site/PageLayout";
import {BLOG_SLUGS, getBlogPost} from "@/lib/blog";
import {buildRootMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({slug}));
}

export function generateMetadata({params}: {params: {slug: string}}): Metadata {
  const post = getBlogPost("en", params.slug);

  if (!post) {
    return buildRootMetadata({
      path: `/blog/${params.slug}`,
      title: "Blog Article",
      description: "Fat freezing educational article"
    });
  }

  return buildRootMetadata({
    path: `/blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription
  });
}

export default function BlogPostPage({params}: {params: {slug: string}}) {
  const post = getBlogPost("en", params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <BlogPostView basePath="" locale="en" post={post} />
    </PageLayout>
  );
}
