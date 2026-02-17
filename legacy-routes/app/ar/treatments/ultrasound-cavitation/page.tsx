import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/treatments/ultrasound-cavitation",
  title: "الألتراساوند كافيتيشن | FAT FREEZING دبي",
  description: "الألتراساوند كافيتيشن بسعر 450 درهم للجلسة مع عروض 6 جلسات في دبي."
});

export default function ArUltrasoundPage() {
  return <TreatmentView locale="ar" kind="ultrasound" />;
}
