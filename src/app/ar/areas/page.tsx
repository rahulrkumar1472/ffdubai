import type {Metadata} from "next";
import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {getArea, getAreaSlugs} from "@/lib/areas";
import {buildMetadata} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  path: "/areas",
  title: "مناطق تجميد الدهون في دبي",
  description: "تصفح صفحات المناطق المحلية في دبي مع روابط الحجز والاستشارة الطبية المجانية."
});

export default function AreasIndexPageAr() {
  const slugs = getAreaSlugs();

  return (
    <main>
      <section className="section inner-hero">
        <div className="container">
          <Breadcrumbs locale="ar" items={[{label: "المناطق", href: "/ar/areas"}]} />
          <article className="card">
            <h1>مناطق تجميد الدهون في دبي</h1>
            <p className="section-lead">
              صفحات مناطق محلية مع تفاصيل الوصول وروابط الحجز ونهج علاجي يبدأ بالاستشارة.
            </p>
            <div className="inner-card-grid">
              {slugs.map((slug) => {
                const area = getArea("ar", slug);
                if (!area) return null;
                return (
                  <article className="card feature-card" key={slug}>
                    <h2>{area.name}</h2>
                    <p>{area.lead}</p>
                    <div className="cta-row cta-row-tight">
                      <Link className="primary-btn" href={`/ar/areas/${slug}`}>
                        عرض صفحة المنطقة
                      </Link>
                      <Link className="outline-btn" href="/ar/book">
                        احجز استشارة مجانية
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

