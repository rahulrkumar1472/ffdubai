import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {PageLayout} from "@/components/site/PageLayout";
import {SeoPage} from "@/components/site/SeoPage";
import {getServerLang} from "@/lib/i18n/lang";
import {ULTRASOUND_CHILDREN, getClusterPage, isClusterPath} from "@/lib/seo/cluster-pages";
import {buildRootMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return ULTRASOUND_CHILDREN.map((slugPath) => ({slug: slugPath.split("/")}));
}

export function generateMetadata({params}: {params: {slug: string[]}}): Metadata {
  const slugPath = params.slug.join("/");
  const pagePath = `ultrasound-cavitation/${slugPath}`;

  if (!isClusterPath(pagePath)) {
    return buildRootMetadata({
      path: `/ultrasound-cavitation/${slugPath}`,
      title: "Ultrasound Cavitation Guide",
      description: "Ultrasound Cavitation educational page"
    });
  }

  const page = getClusterPage(pagePath, "en");

  return buildRootMetadata({
    path: `/ultrasound-cavitation/${slugPath}`,
    title: page.title,
    description: page.description
  });
}

export default function UltrasoundChildPage({params}: {params: {slug: string[]}}) {
  const slugPath = params.slug.join("/");
  const pagePath = `ultrasound-cavitation/${slugPath}`;

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
          {href: "/ultrasound-cavitation", label: lang === "ar" ? "الألتراساوند كافيتيشن" : "Ultrasound Cavitation"},
          {href: `/ultrasound-cavitation/${slugPath}`, label: page.h1}
        ]}
        includeProcedureSchema
        locale={lang}
        page={page}
      />
    </PageLayout>
  );
}
