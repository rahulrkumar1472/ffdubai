import type {Metadata} from "next";
import {FaqView} from "@/components/faq-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/faq",
  title: "الأسئلة الشائعة | FAT FREEZING دبي",
  description: "أهم الأسئلة حول تجميد الدهون والأسعار والسلامة والحجز في دبي."
});

export default function ArFaqPage() {
  return <FaqView locale="ar" />;
}
