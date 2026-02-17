import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {HomeView} from "@/components/home-view";
import {getDictionary, locales, type Locale} from "@/lib/i18n";
import {buildMetadata, SITE_NAME} from "@/lib/seo";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateMetadata({
  params
}: {
  params: {locale: string};
}): Metadata {
  const {locale} = params;

  if (!isLocale(locale)) {
    return buildMetadata({
      locale: "en",
      path: "/",
      title: `${SITE_NAME} | From AED 489`,
      description: "Fat freezing in Dubai from AED 489 with FREE 30-min consultation. Led by a specialised DHA doctor (in-house trained)."
    });
  }

  const t = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/",
    title: `${SITE_NAME} | ${t.hero.priceChip}`,
    description: t.hero.subheading
  });
}

export default function LocalizedHomePage({
  params
}: {
  params: {locale: string};
}) {
  const {locale} = params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomeView locale={locale} />;
}
