import type {Metadata} from "next";
import {HomeView} from "@/components/home-view";
import {buildMetadata, SITE_NAME} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/",
  title: `${SITE_NAME} | From AED 489`,
  description: "Fat freezing in Dubai from AED 489 with FREE 30-min consultation. Led by a specialised DHA doctor (in-house trained)."
});

export default function EnHomePage() {
  return <HomeView locale="en" />;
}
