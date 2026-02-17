import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/ultrasound-cavitation",
  title: "الألتراساوند كافيتيشن في دبي | FAT FREEZING",
  description: "جلسات الألتراساوند كافيتيشن في دبي بسعر 450 درهم للجلسة مع عروض للباقات المتعددة."
});

export default function ArUltrasoundStandalonePage() {
  return <TreatmentView locale="ar" kind="ultrasound" standalone />;
}
