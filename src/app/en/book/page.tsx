import type {Metadata} from "next";
import {BookView} from "@/components/book-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/book",
  title: "Book Free Consultation | FAT FREEZING",
  description: "Book your free 30-min consultation between 12:00 and 20:00 in Dubai."
});

export default function EnBookPage() {
  return <BookView locale="en" />;
}
