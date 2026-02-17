import type {Metadata} from "next";
import {ContactView} from "@/components/contact-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/contact",
  title: "Contact & Location | FAT FREEZING Dubai",
  description: "Find clinic location, opening hours, WhatsApp contact, and reviews for FAT FREEZING Dubai."
});

export default function EnContactPage() {
  return <ContactView locale="en" />;
}
