import {SITE_URL} from "@/lib/seo";
import type {Locale} from "@/lib/i18n";
import type {BlogPost} from "@/lib/blog";

export function clinicSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
    name: "FAT FREEZING",
    alternateName: locale === "ar" ? "مركز دبي المتخصص لنحت وخسارة الوزن" : "Dubai's Weight Loss Centre",
    url: `${SITE_URL}/`,
    description: "Doctor-led fat freezing clinic in Dubai with transparent pricing from AED 489.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jumeira St - Jumeirah - Jumeirah 1",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2018,
      longitude: 55.245
    },
    telephone: "+971521231743",
    openingHours: "Mo-Su 12:00-20:00",
    sameAs: [
      "https://www.instagram.com/vivo_aesthetics_uae/",
      "https://share.google/sqnY4VLOsXzIrgkrD",
      "https://maps.app.goo.gl/nb9w9JxUo8nre2Ef9"
    ]
  };
}

export function serviceSchema(locale: Locale) {
  void locale;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fat Freezing (Cryolipolysis)",
    provider: {
      "@type": "MedicalClinic",
      name: "FAT FREEZING"
    },
    areaServed: "Dubai",
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: "489"
    },
    url: `${SITE_URL}/fat-freezing`
  };
}

export function breadcrumbSchema(
  locale: Locale,
  items: Array<{
    name: string;
    path: string;
  }>
) {
  const homeName = locale === "ar" ? "الرئيسية" : "Home";
  const elements = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeName,
      item: `${SITE_URL}/`
    }
  ];

  items.forEach((item, index) => {
    elements.push({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: elements
  };
}

export function faqSchema(items: Array<{question: string; answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function blogPostingSchema(locale: Locale, post: BlogPost) {
  void locale;
  const path = `/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
    mainEntityOfPage: `${SITE_URL}${path}`,
    url: `${SITE_URL}${path}`,
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
  };
}
