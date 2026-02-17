import type {Metadata} from "next";
import {BookView} from "@/components/book-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/book",
  title: "احجز استشارة مجانية | FAT FREEZING",
  description: "احجز استشارة مجانية 30 دقيقة بين 12:00 و20:00 في دبي."
});

export default function ArBookPage() {
  return <BookView locale="ar" />;
}
