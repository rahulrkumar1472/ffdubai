import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/ultrasound-cavitation",
  title: "Ultrasound Cavitation Dubai | FAT FREEZING",
  description: "Ultrasound cavitation sessions in Dubai from AED 450 with 6-session offers and consultation-first suitability checks."
});

export default function EnUltrasoundStandalonePage() {
  return <TreatmentView locale="en" kind="ultrasound" standalone />;
}
