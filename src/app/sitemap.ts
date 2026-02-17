import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/book",
    "/treatments",
    "/treatments/fat-freezing",
    "/treatments/ultrasound-cavitation",
    "/treatments/radiofrequency",
    "/pricing",
    "/results",
    "/faq",
    "/contact"
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["en", "ar"]) {
    for (const path of paths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.85
      });
    }
  }

  return [
    ...entries
  ];
}
