import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {blogPostingSchema, breadcrumbSchema} from "@/lib/schema";
import {calculateReadingTime, getRelatedPosts, type BlogPost} from "@/lib/blog";
import type {Locale} from "@/lib/i18n";

export function BlogPostView({locale, post}: {locale: Locale; post: BlogPost}) {
  const base = locale === "en" ? "/en" : "/ar";
  const related = getRelatedPosts(locale, post.slug, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{name: locale === "en" ? "Blog" : "المدونة", path: "/blog"}, {name: post.title, path: `/blog/${post.slug}`}])} />
      <JsonLd data={blogPostingSchema(locale, post)} />

      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs
              locale={locale}
              items={[
                {label: locale === "en" ? "Blog" : "المدونة", href: `${base}/blog`},
                {label: post.title, href: `${base}/blog/${post.slug}`}
              ]}
            />

            <article className="card blog-post-card">
              <h1>{post.title}</h1>
              <p className="blog-meta">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{calculateReadingTime(post)} {locale === "en" ? "min read" : "دقيقة قراءة"}</span>
              </p>
              <p className="section-lead">{post.summary}</p>

              {post.sections.map((section) => (
                <section className="blog-section" key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p className="inner-paragraph" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <div className="card blog-inline-cta">
                <h3>{locale === "en" ? "Plan your consultation" : "احجز تقييمك الطبي"}</h3>
                <p>
                  {locale === "en"
                    ? "Book a free consultation to review suitability, target areas, and package options."
                    : "احجز استشارة مجانية لمراجعة الملاءمة الطبية والمناطق المستهدفة وخيارات الباقات."}
                </p>
                <div className="cta-row cta-row-tight">
                  <Link className="primary-btn" href={`${base}/book`}>
                    {locale === "en" ? "Book Free Consultation" : "احجز استشارة مجانية"}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {locale === "en" ? "Chat on WhatsApp" : "تواصل عبر واتساب"}
                  </a>
                </div>
              </div>
            </article>

            {related.length > 0 ? (
              <section className="section" style={{paddingBottom: 0}}>
                <h2 className="section-title">{locale === "en" ? "Related Articles" : "مقالات ذات صلة"}</h2>
                <div className="blog-grid" style={{marginTop: 12}}>
                  {related.map((item) => (
                    <article className="card blog-card" key={item.slug}>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <Link className="outline-btn" href={`${base}/blog/${item.slug}`}>
                        {locale === "en" ? "Read" : "اقرأ"}
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}
