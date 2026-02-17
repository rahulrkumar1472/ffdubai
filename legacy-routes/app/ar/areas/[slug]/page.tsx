import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {AreaPageView} from "@/components/area-page-view";
import {getArea, getAreaSlugs} from "@/lib/areas";
import {buildMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return getAreaSlugs().map((slug) => ({slug}));
}

export function generateMetadata({params}: {params: {slug: string}}): Metadata {
  const area = getArea("ar", params.slug);

  if (!area) {
    return buildMetadata({
      locale: "ar",
      path: `/areas/${params.slug}`,
      title: "مناطق دبي | FAT FREEZING",
      description: "تعرّف على توفر جلسات تجميد الدهون حسب المنطقة في دبي."
    });
  }

  return buildMetadata({
    locale: "ar",
    path: `/areas/${area.slug}`,
    title: area.metaTitle,
    description: area.metaDescription
  });
}

export default function ArAreaPage({params}: {params: {slug: string}}) {
  const area = getArea("ar", params.slug);
  if (!area) notFound();

  return <AreaPageView area={area} locale="ar" />;
}
