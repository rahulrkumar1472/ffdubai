import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {RADIOFREQUENCY_CHILDREN, getClusterPage, isClusterPath} from "@/lib/seo/cluster-pages";
import {buildRootMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return RADIOFREQUENCY_CHILDREN.map((slugPath) => ({slug: slugPath.split("/")}));
}

export function generateMetadata({params}: {params: {slug: string[]}}): Metadata {
  const slugPath = params.slug.join("/");
  const pagePath = `radiofrequency/${slugPath}`;

  if (!isClusterPath(pagePath)) {
    return buildRootMetadata({
      path: `/radiofrequency/${slugPath}`,
      title: "Radiofrequency Guide",
      description: "Radiofrequency educational page"
    });
  }

  const page = getClusterPage(pagePath, "en");

  return buildRootMetadata({
    path: `/radiofrequency/${slugPath}`,
    title: page.title,
    description: page.description
  });
}

export default function RadiofrequencyChildPage({params}: {params: {slug: string[]}}) {
  const slugPath = params.slug.join("/");
  const pagePath = `radiofrequency/${slugPath}`;

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
          {href: "/radiofrequency", label: lang === "ar" ? "الراديو فريكونسي" : "Radiofrequency"},
          {href: `/radiofrequency/${slugPath}`, label: page.h1}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
