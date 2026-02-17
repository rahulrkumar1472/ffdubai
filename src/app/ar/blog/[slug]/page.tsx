import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {BlogPostView} from "@/components/blog-post-view";
import {BLOG_SLUGS, getBlogPost} from "@/lib/blog";
import {buildMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({slug}));
}

export function generateMetadata({params}: {params: {slug: string}}): Metadata {
  const post = getBlogPost("ar", params.slug);

  if (!post) {
    return buildMetadata({
      locale: "ar",
      path: `/blog/${params.slug}`,
      title: "المدونة | FAT FREEZING",
      description: "محتوى تثقيفي حول تجميد الدهون في دبي."
    });
  }

  return buildMetadata({
    locale: "ar",
    path: `/blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription
  });
}

export default function ArBlogPostPage({params}: {params: {slug: string}}) {
  const post = getBlogPost("ar", params.slug);
  if (!post) notFound();

  return <BlogPostView locale="ar" post={post} />;
}
