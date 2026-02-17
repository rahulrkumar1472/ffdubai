import type {Metadata} from "next";
import {BookView} from "@/components/book-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/book",
  title: "احجز استشارة أو جلسة علاج | FAT FREEZING",
  description: "اختر الموعد ثم أكمل البيانات و أكد حجزك لمدة 60 دقيقة للاستشارة أو العلاج في دبي."
});

export default function ArBookPage({searchParams}: {searchParams?: {mode?: string}}) {
  const initialMode = searchParams?.mode === "treatment" ? "treatment" : "consultation";

  return <BookView initialMode={initialMode} locale="ar" />;
}
