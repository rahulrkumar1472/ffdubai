import type {Metadata} from "next";
import type {Locale} from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function buildMetadata({
  locale,
  path,
  title,
  description
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const localePath = `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
  const canonical = `${siteUrl}${localePath}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en${normalizedPath === "/" ? "" : normalizedPath}`,
        ar: `${siteUrl}/ar${normalizedPath === "/" ? "" : normalizedPath}`
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website"
    }
  };
}

export const SITE_NAME = "FAT FREEZING";
export const SITE_DESCRIPTION = "Dubai clinic for fat freezing with free 30-min consultation and specialised DHA doctor-led planning.";
export const SITE_URL = siteUrl;
