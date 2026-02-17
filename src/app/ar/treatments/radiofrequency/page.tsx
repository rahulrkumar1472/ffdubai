import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/treatments/radiofrequency",
  title: "التردد الحراري | FAT FREEZING دبي",
  description: "جلسات التردد الحراري بسعر 450 درهم للجلسة مع عروض 6 جلسات في دبي."
});

export default function ArRadiofrequencyPage() {
  return <TreatmentView locale="ar" kind="radiofrequency" />;
}
