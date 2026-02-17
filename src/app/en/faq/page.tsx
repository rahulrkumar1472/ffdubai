import type {Metadata} from "next";
import {FaqView} from "@/components/faq-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/faq",
  title: "FAQ | FAT FREEZING Dubai",
  description: "Common questions on fat freezing, pricing, safety, downtime, and booking in Dubai."
});

export default function EnFaqPage() {
  return <FaqView locale="en" />;
}
