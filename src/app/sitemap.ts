import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/seo";
import {BLOG_SLUGS} from "@/lib/blog";
import {getAreaSlugs} from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/book",
    "/areas",
    "/fat-freezing",
    "/ultrasound-cavitation",
    "/radiofrequency",
    "/treatments",
    "/treatments/fat-freezing",
    "/treatments/ultrasound-cavitation",
    "/treatments/radiofrequency",
    "/pricing",
    "/results",
    "/faq",
    "/contact",
    "/blog"
  ];
  const areaPaths = getAreaSlugs().map((slug) => `/areas/${slug}`);
  const blogPaths = BLOG_SLUGS.map((slug) => `/blog/${slug}`);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["en", "ar"]) {
    for (const path of paths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.85
      });
    }

    for (const path of areaPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "weekly",
        priority: 0.82
      });
    }

    for (const path of blogPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: 0.78
      });
    }
  }

  const legalEntries: MetadataRoute.Sitemap = ["/terms", "/privacy-policy", "/cookies"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "yearly",
    priority: 0.4
  }));

  return [...entries, ...legalEntries];
}
