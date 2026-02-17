import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {FAT_FREEZING_CHILDREN, getClusterPage, isClusterPath} from "@/lib/seo/cluster-pages";
import {buildRootMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return FAT_FREEZING_CHILDREN.map((slugPath) => ({slug: slugPath.split("/")}));
}

export function generateMetadata({params}: {params: {slug: string[]}}): Metadata {
  const slugPath = params.slug.join("/");
  const pagePath = `fat-freezing/${slugPath}`;

  if (!isClusterPath(pagePath)) {
    return buildRootMetadata({
      path: `/fat-freezing/${slugPath}`,
      title: "Fat Freezing Guide",
      description: "Fat Freezing educational page"
    });
  }

  const page = getClusterPage(pagePath, "en");

  return buildRootMetadata({
    path: `/fat-freezing/${slugPath}`,
    title: page.title,
    description: page.description
  });
}

export default function FatFreezingChildPage({params}: {params: {slug: string[]}}) {
  const slugPath = params.slug.join("/");
  const pagePath = `fat-freezing/${slugPath}`;

  if (!isClusterPath(pagePath)) {
    notFound();
  }

  const lang = getServerLang();
  const page = getClusterPage(pagePath, lang);

  return (
    <PageLayout>
      <SeoPage
        breadcrumbs={[
          {href: "/", label: lang === "ar" ? "الرئيسية" : "Home"},
          {href: "/fat-freezing", label: lang === "ar" ? "تجميد الدهون" : "Fat Freezing"},
          {href: `/fat-freezing/${slugPath}`, label: page.h1}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
