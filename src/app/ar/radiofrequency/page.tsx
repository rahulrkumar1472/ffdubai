import type {Metadata} from "next";
import {TreatmentView} from "@/components/treatment-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/radiofrequency",
  title: "شد البشرة بالتردد الحراري في دبي | FAT FREEZING",
  description: "جلسات شد البشرة بالتردد الحراري في دبي بسعر 450 درهم للجلسة مع عروض باقات متعددة."
});

export default function ArRadiofrequencyStandalonePage() {
  return <TreatmentView locale="ar" kind="radiofrequency" standalone />;
}
