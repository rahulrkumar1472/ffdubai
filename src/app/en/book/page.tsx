import type {Metadata} from "next";
import {BookView} from "@/components/book-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/book",
  title: "Book Consultation or Treatment | FAT FREEZING",
  description: "Choose date and time, complete details, and confirm your 60-minute consultation or treatment booking in Dubai."
});

export default function EnBookPage({searchParams}: {searchParams?: {mode?: string}}) {
  const initialMode = searchParams?.mode === "treatment" ? "treatment" : "consultation";

  return <BookView initialMode={initialMode} locale="en" />;
}
