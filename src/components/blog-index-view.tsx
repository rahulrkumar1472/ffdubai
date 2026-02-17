import Link from "next/link";
import {Breadcrumbs} from "@/components/breadcrumbs";
import {JsonLd} from "@/components/json-ld";
import {calculateReadingTime, getBlogPosts} from "@/lib/blog";
import type {Locale} from "@/lib/i18n";
import {breadcrumbJsonLd} from "@/lib/seo/jsonld";
import {SITE_URL} from "@/lib/seo";

export function BlogIndexView({locale, basePath, canonicalPrefix}: {locale: Locale; basePath?: string; canonicalPrefix?: string}) {
  const base = basePath ?? (locale === "en" ? "/en" : "/ar");
  const prefix = canonicalPrefix ?? (locale === "en" ? "/en" : "/ar");
  const blogHref = `${base}/blog`.replace("//", "/");
  const posts = getBlogPosts(locale);

  const title = locale === "en" ? "Dubai Fat Freezing Blog" : "مدونة تجميد الدهون في دبي";
  const lead =
    locale === "en"
      ? "Medical-style guides covering fat freezing, pricing, safety, aftercare, and treatment planning in Dubai."
      : "محتوى تثقيفي بأسلوب طبي يغطي تجميد الدهون والأسعار والسلامة وخطة العلاج في دبي.";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(SITE_URL, [
          {name: locale === "en" ? "Home" : "الرئيسية", path: prefix || "/"},
          {name: locale === "en" ? "Blog" : "المدونة", path: `${prefix}/blog`.replace("//", "/")}
        ])}
      />
      <main>
        <section className="section inner-hero">
          <div className="container">
            <Breadcrumbs locale={locale} items={[{label: locale === "en" ? "Blog" : "المدونة", href: blogHref}]} />

            <div className="inner-hero-head">
              <h1>{title}</h1>
              <p className="section-lead">{lead}</p>
            </div>

            <div className="blog-grid">
              {posts.map((post) => (
                <article className="card blog-card" key={post.slug}>
                  <p className="blog-meta">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{calculateReadingTime(post)} {locale === "en" ? "min read" : "دقيقة قراءة"}</span>
                  </p>
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                  <div className="blog-tag-row">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span className="blog-tag" key={tag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="cta-row cta-row-tight">
                    <Link className="primary-btn" href={`${blogHref}/${post.slug}`.replace("//", "/")}>
                      {locale === "en" ? "Read Article" : "اقرأ المقال"}
                    </Link>
                    <Link className="outline-btn" href={`${base}/book`.replace("//", "/")}>
                      {locale === "en" ? "Book Free Consultation" : "احجز استشارة مجانية"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
