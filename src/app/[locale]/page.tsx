import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {PRICING} from "@/config/pricing";
import {buildMetadata} from "@/lib/seo";
import {HomePage} from "@/components/sections/home-page";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: "en" | "ar"}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "meta"});

  return buildMetadata({
    locale,
    path: "/",
    title: t("defaultTitle"),
    description: t("defaultDescription", {price: PRICING.fatFreezingFromAED})
  });
}

export default async function LocalizedHomePage({
  params
}: {
  params: Promise<{locale: "en" | "ar"}>;
}) {
  const {locale} = await params;
  return <HomePage locale={locale} />;
}
