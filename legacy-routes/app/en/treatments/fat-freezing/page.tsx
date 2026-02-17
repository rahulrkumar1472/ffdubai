import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/treatments/fat-freezing",
  title: "Fat Freezing Packages | FAT FREEZING Dubai",
  description: "Fat freezing packages from AED 489 to AED 1,599 with doctor-led consultation and transparent pricing."
});

export default function EnFatFreezingPage() {
  return <TreatmentView locale="en" kind="fatFreezing" />;
}
