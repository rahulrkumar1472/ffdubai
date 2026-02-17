import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/radiofrequency",
  title: "Radiofrequency Tightening Dubai | FAT FREEZING",
  description: "Radiofrequency skin tightening in Dubai from AED 450 per session with package offers and doctor-led planning."
});

export default function EnRadiofrequencyStandalonePage() {
  return <TreatmentView locale="en" kind="radiofrequency" standalone />;
}
