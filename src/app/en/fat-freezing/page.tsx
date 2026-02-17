import type {Metadata} from "next";
import {FatFreezingPageView} from "@/components/fat-freezing-page-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/fat-freezing",
  title: "Fat Freezing in Dubai | FAT FREEZING",
  description:
    "Doctor-led fat freezing in Dubai with consultation-first planning, transparent packages, and treatment options from AED 489."
});

export default function EnFatFreezingPillarPage() {
  return <FatFreezingPageView locale="en" />;
}
