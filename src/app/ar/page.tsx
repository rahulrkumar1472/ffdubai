import type {Metadata} from "next";
import {HomeView} from "@/components/home-view";
import {buildMetadata, SITE_NAME} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/",
  title: `${SITE_NAME} | تبدأ من 489 درهم`,
  description: "تجميد الدهون في دبي يبدأ من 489 درهم مع استشارة مجانية 30 دقيقة بقيادة طبيب متخصص من هيئة الصحة بدبي."
});

export default function ArHomePage() {
  return <HomeView locale="ar" />;
}
