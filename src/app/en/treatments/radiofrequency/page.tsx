import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/treatments/radiofrequency",
  title: "Radiofrequency Skin Tightening | FAT FREEZING Dubai",
  description: "Radiofrequency skin tightening from AED 450 per session with 6-session offers in Dubai."
});

export default function EnRadiofrequencyPage() {
  return <TreatmentView locale="en" kind="radiofrequency" />;
}
