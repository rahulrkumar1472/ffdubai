import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url: `${SITE_URL}/en`, changeFrequency: "weekly", priority: 1},
    {url: `${SITE_URL}/ar`, changeFrequency: "weekly", priority: 1},
    {url: `${SITE_URL}/en/book`, changeFrequency: "weekly", priority: 0.9},
    {url: `${SITE_URL}/ar/book`, changeFrequency: "weekly", priority: 0.9}
  ];
}
