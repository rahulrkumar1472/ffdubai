import Link from "next/link";
import Image from "next/image";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {faqSchema} from "@/lib/schema";
import {calculateReadingTime, getRelatedPosts, type BlogPost} from "@/lib/blog";
import type {Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";
import {SITE_URL} from "@/lib/seo";
import {breadcrumbJsonLd} from "@/lib/seo/jsonld";

function getFeaturedImage(slug: string) {
  if (!STOCK_IMAGES.length) return null;

  let hash = 0;
  for (let index = 0; index < slug.length; index += 1) {
    hash = (hash * 31 + slug.charCodeAt(index)) >>> 0;
  }

  return STOCK_IMAGES[hash % STOCK_IMAGES.length];
}

export function BlogPostView({
  locale,
  post,
  basePath,
  canonicalPrefix
}: {
  locale: Locale;
  post: BlogPost;
  basePath?: string;
  canonicalPrefix?: string;
}) {
  const base = basePath ?? "";
  const prefix = canonicalPrefix ?? "";
  const blogHref = `${base}/blog`.replace("//", "/");
  const related = getRelatedPosts(locale, post.slug, 3);
  const featuredImage = getFeaturedImage(post.slug);
  const canonicalBlogPath = `${prefix}/blog`.replace("//", "/");
  const canonicalPostPath = `${canonicalBlogPath}/${post.slug}`.replace("//", "/");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(SITE_URL, [
          {name: locale === "en" ? "Home" : "الرئيسية", path: prefix || "/"},
          {name: locale === "en" ? "Blog" : "المدونة", path: canonicalBlogPath},
          {name: post.title, path: canonicalPostPath}
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
          url: `${SITE_URL}${canonicalPostPath}`,
          mainEntityOfPage: `${SITE_URL}${canonicalPostPath}`,
          author: {
            "@type": "Person",
            name: post.author
          },
          publisher: {
            "@type": "Organization",
            name: "FAT FREEZING"
          },
          articleSection: post.category,
          keywords: post.tags.join(", ")
        }}
      />
      {post.faq.length > 0 ? <JsonLd data={faqSchema(post.faq)} /> : null}

      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs
              locale={locale}
              items={[
                {label: locale === "en" ? "Blog" : "المدونة", href: blogHref},
                {label: post.title, href: `${blogHref}/${post.slug}`.replace("//", "/")}
              ]}
            />

            <article className="card blog-post-card">
              <h1>{post.title}</h1>
              <p className="blog-meta">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{calculateReadingTime(post)} {locale === "en" ? "min read" : "دقيقة قراءة"}</span>
              </p>
              <p className="section-lead">{post.summary}</p>

              {featuredImage ? (
                <div className="inner-media-card">
                  <Image alt={post.title} fill priority sizes="(max-width: 900px) 100vw, 70vw" src={featuredImage} />
                </div>
              ) : null}

              <div className="card blog-toc">
                <h2>{locale === "en" ? "Table of Contents" : "جدول المحتوى"}</h2>
                <ul>
                  {post.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.heading}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {post.sections.map((section, index) => (
                <section className="blog-section" id={section.id} key={section.id}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p className="inner-paragraph" key={`${section.id}-${paragraphIndex}`}>
                      {paragraph}
                    </p>
                  ))}

                  {(index + 1) % 3 === 0 ? (
                    <div className="card blog-inline-cta">
                      <h3>{locale === "en" ? "Plan your consultation" : "احجز تقييمك الطبي"}</h3>
                      <p>
                        {locale === "en"
                          ? "Book a free consultation to review suitability, target areas, and package options."
                          : "احجز استشارة مجانية لمراجعة الملاءمة الطبية والمناطق المستهدفة وخيارات الباقات."}
                      </p>
                      <div className="cta-row cta-row-tight">
                        <Link className="primary-btn" href={`${base}/book`.replace("//", "/")}>
                          {locale === "en" ? "Book Free Consultation" : "احجز استشارة مجانية"}
                        </Link>
                        <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                          {locale === "en" ? "Chat on WhatsApp" : "تواصل عبر واتساب"}
                        </a>
                      </div>
                    </div>
                  ) : null}
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
                  <Link className="primary-btn" href={`${base}/book`.replace("//", "/")}>
                    {locale === "en" ? "Book Free Consultation" : "احجز استشارة مجانية"}
                  </Link>
                  <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                    {locale === "en" ? "Chat on WhatsApp" : "تواصل عبر واتساب"}
                  </a>
                </div>
              </div>

              {post.faq.length > 0 ? (
                <section className="blog-section">
                  <h2>{locale === "en" ? "FAQ" : "الأسئلة الشائعة"}</h2>
                  <div className="faq-list">
                    {post.faq.map((item) => (
                      <article className="card faq-item-card" key={item.question}>
                        <h3>{item.question}</h3>
                        <p className="inner-paragraph">{item.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}
            </article>

            {related.length > 0 ? (
              <section className="section" style={{paddingBottom: 0}}>
                <h2 className="section-title">{locale === "en" ? "Related Articles" : "مقالات ذات صلة"}</h2>
                <div className="blog-grid" style={{marginTop: 12}}>
                  {related.map((item) => (
                    <article className="card blog-card" key={item.slug}>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <Link className="outline-btn" href={`${blogHref}/${item.slug}`.replace("//", "/")}>
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
