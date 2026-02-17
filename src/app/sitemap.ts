import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/seo";
import {BLOG_SLUGS} from "@/lib/blog";
import {FAT_FREEZING_CHILDREN, RADIOFREQUENCY_CHILDREN, ULTRASOUND_CHILDREN} from "@/lib/seo/cluster-pages";

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
    "/ultrasound-cavitation",
    "/radiofrequency",
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
  const fatFreezingClusterPaths = FAT_FREEZING_CHILDREN.map((slug) => `/fat-freezing/${slug}`);
  const ultrasoundClusterPaths = ULTRASOUND_CHILDREN.map((slug) => `/ultrasound-cavitation/${slug}`);
  const radiofrequencyClusterPaths = RADIOFREQUENCY_CHILDREN.map((slug) => `/radiofrequency/${slug}`);
  const blogPaths = BLOG_SLUGS.map((slug) => `/blog/${slug}`);

  const entries: MetadataRoute.Sitemap = [...paths, ...fatFreezingClusterPaths, ...ultrasoundClusterPaths, ...radiofrequencyClusterPaths].map((path) => ({
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
