import type {Metadata} from "next";
import {ResultsPageView} from "@/components/results-page-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/results",
  title: "Patient Results | FAT FREEZING Dubai",
  description: "View approved before-and-after fat freezing case examples in Dubai. Results vary by individual."
});

export default function EnResultsPage() {
  return <ResultsPageView locale="en" />;
}
