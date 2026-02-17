import type {Metadata} from "next";
import type {Locale} from "@/lib/i18n";

const siteUrl = "https://fatfreezing.ae";

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
  void locale;
  const canonical = `${siteUrl}${normalizedPath}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function buildRootMetadata({
  path,
  title,
  description
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${siteUrl}${normalizedPath}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export const SITE_NAME = "FAT FREEZING";
export const SITE_DESCRIPTION = "Dubai clinic for fat freezing with free 30-min consultation and specialised DHA doctor-led planning.";
export const SITE_URL = siteUrl;
