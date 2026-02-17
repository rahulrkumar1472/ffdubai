import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/treatments/fat-freezing",
  title: "باقات تجميد الدهون | FAT FREEZING دبي",
  description: "باقات تجميد الدهون تبدأ من 489 درهم وتصل حتى 1,599 درهم مع استشارة طبية واضحة."
});

export default function ArFatFreezingPage() {
  return <TreatmentView locale="ar" kind="fatFreezing" />;
}
