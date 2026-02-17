import type {Metadata} from "next";
import {ResultsPageView} from "@/components/results-page-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/results",
  title: "نتائج المرضى | FAT FREEZING دبي",
  description: "استعرض حالات قبل وبعد المعتمدة في دبي. النتائج تختلف حسب كل حالة."
});

export default function ArResultsPage() {
  return <ResultsPageView locale="ar" />;
}
