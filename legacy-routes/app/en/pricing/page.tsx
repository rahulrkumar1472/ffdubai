import type {Metadata} from "next";
import {PricingView} from "@/components/pricing-view";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/pricing",
  title: "Pricing & Packages | FAT FREEZING Dubai",
  description: "See fat freezing package pricing from AED 489 with clear package comparisons and add-on offers."
});

export default function EnPricingPage() {
  return <PricingView locale="en" />;
}
