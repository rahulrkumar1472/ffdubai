import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/seo";
import {BLOG_SLUGS} from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/book",
    "/about",
    "/fat-freezing",
    "/cryolipolysis",
    "/coolsculpting-alternative",
    "/body-areas",
    "/treatments",
    "/pricing",
    "/results",
    "/before-after",
    "/locations",
    "/locations/dubai",
    "/locations/jumeirah",
    "/faq",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/disclaimer"
  ];
  const blogPaths = BLOG_SLUGS.map((slug) => `/blog/${slug}`);

  const entries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path.startsWith("/blog") ? "monthly" : "weekly",
    priority: path === "" ? 1 : 0.82
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: 0.78
  }));

  return [...entries, ...blogEntries];
}
