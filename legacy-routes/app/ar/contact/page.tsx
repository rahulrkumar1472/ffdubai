import type {Metadata} from "next";
import {ContactView} from "@/components/contact-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/contact",
  title: "التواصل والموقع | FAT FREEZING دبي",
  description: "عنوان العيادة وساعات العمل وواتساب وتقييمات العملاء في دبي."
});

export default function ArContactPage() {
  return <ContactView locale="ar" />;
}
