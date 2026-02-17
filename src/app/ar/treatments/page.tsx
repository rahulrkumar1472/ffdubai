import type {Metadata} from "next";
import {TreatmentsIndexView} from "@/components/treatments-index-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/treatments",
  title: "العلاجات | FAT FREEZING دبي",
  description: "استكشف خيارات تجميد الدهون والألتراساوند كافيتيشن والتردد الحراري بإشراف طبي في دبي."
});

export default function ArTreatmentsIndexPage() {
  return <TreatmentsIndexView locale="ar" />;
}
