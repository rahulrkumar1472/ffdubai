import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {AreaPageView} from "@/components/area-page-view";
import {getArea, getAreaSlugs} from "@/lib/areas";
import {buildMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return getAreaSlugs().map((slug) => ({slug}));
}

export function generateMetadata({params}: {params: {slug: string}}): Metadata {
  const area = getArea("en", params.slug);

  if (!area) {
    return buildMetadata({
      locale: "en",
      path: `/areas/${params.slug}`,
      title: "Dubai Areas | FAT FREEZING",
      description: "Find fat freezing availability by area in Dubai."
    });
  }

  return buildMetadata({
    locale: "en",
    path: `/areas/${area.slug}`,
    title: area.metaTitle,
    description: area.metaDescription
  });
}

export default function EnAreaPage({params}: {params: {slug: string}}) {
  const area = getArea("en", params.slug);
  if (!area) notFound();

  return <AreaPageView area={area} locale="en" />;
}
