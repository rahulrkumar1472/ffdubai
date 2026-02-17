import type {Metadata} from "next";
import {HomeView} from "@/components/home-view";
import {PageLayout} from "@/components/site/PageLayout";
import {getServerLang} from "@/lib/i18n/lang";
import {buildRootMetadata, SITE_NAME} from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata({
  path: "/",
  title: `${SITE_NAME} | From AED 489`,
  description: "Fat freezing in Dubai from AED 489 with FREE 30-min consultation. Led by a specialised DHA doctor (in-house trained)."
});

export default function HomePage() {
  const lang = getServerLang();
  return (
    <PageLayout>
      <HomeView locale={lang} />
    </PageLayout>
  );
}
