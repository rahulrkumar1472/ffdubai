import type {Metadata} from "next";
import {BookView} from "@/components/book-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/book",
  title: "Book Consultation or Treatment | FAT FREEZING",
  description: "Choose date and time, complete details, and confirm your 60-minute consultation or treatment booking in Dubai."
});

export default function EnBookPage({
  searchParams
}: {
  searchParams?: {mode?: string; treatment?: string; package?: string};
}) {
  const hasTreatmentPreset = Boolean(searchParams?.treatment);
  const initialMode = searchParams?.mode === "treatment" || hasTreatmentPreset ? "treatment" : "consultation";
  const initialTreatment = searchParams?.treatment ?? "";
  const initialPackage = searchParams?.package ?? "";

  return <BookView initialMode={initialMode} initialPackage={initialPackage} initialTreatment={initialTreatment} locale="en" />;
}
