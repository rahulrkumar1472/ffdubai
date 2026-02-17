import type {Metadata} from "next";
import {FatFreezingPageView} from "@/components/fat-freezing-page-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/fat-freezing",
  title: "تجميد الدهون في دبي | FAT FREEZING",
  description:
    "تجميد الدهون بإشراف طبي في دبي مع خطة تبدأ بالاستشارة وتسعير واضح وباقات تبدأ من 489 درهم."
});

export default function ArFatFreezingPillarPage() {
  return <FatFreezingPageView locale="ar" />;
}
