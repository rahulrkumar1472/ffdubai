import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/treatments/ultrasound-cavitation",
  title: "Ultrasound Cavitation | FAT FREEZING Dubai",
  description: "Ultrasound cavitation from AED 450 per session with 6-session promotional packages in Dubai."
});

export default function EnUltrasoundPage() {
  return <TreatmentView locale="en" kind="ultrasound" />;
}
