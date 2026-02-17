import type {Metadata} from "next";
import {PricingView} from "@/components/pricing-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/pricing",
  title: "الأسعار والباقات | FAT FREEZING دبي",
  description: "تعرف على أسعار باقات تجميد الدهون من 489 درهم مع مقارنة واضحة للعروض."
});

export default function ArPricingPage() {
  return <PricingView locale="ar" />;
}
