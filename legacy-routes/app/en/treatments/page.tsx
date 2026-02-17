import type {Metadata} from "next";
import {TreatmentsIndexView} from "@/components/treatments-index-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/treatments",
  title: "Treatments | FAT FREEZING Dubai",
  description: "Explore doctor-led fat freezing, ultrasound cavitation, and radiofrequency treatment options in Dubai."
});

export default function EnTreatmentsIndexPage() {
  return <TreatmentsIndexView locale="en" />;
}
