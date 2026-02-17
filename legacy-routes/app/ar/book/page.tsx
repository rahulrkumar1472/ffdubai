import type {Metadata} from "next";
import {BookView} from "@/components/book-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/book",
  title: "احجز استشارة أو جلسة علاج | FAT FREEZING",
  description: "اختر الموعد ثم أكمل البيانات و أكد حجزك لمدة 60 دقيقة للاستشارة أو العلاج في دبي."
});

export default function ArBookPage({
  searchParams
}: {
  searchParams?: {mode?: string; treatment?: string; package?: string};
}) {
  const hasTreatmentPreset = Boolean(searchParams?.treatment);
  const initialMode = searchParams?.mode === "treatment" || hasTreatmentPreset ? "treatment" : "consultation";
  const initialTreatment = searchParams?.treatment ?? "";
  const initialPackage = searchParams?.package ?? "";

  return <BookView initialMode={initialMode} initialPackage={initialPackage} initialTreatment={initialTreatment} locale="ar" />;
}
