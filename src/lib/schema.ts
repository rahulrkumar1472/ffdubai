import {SITE_URL} from "@/lib/seo";
import type {Locale} from "@/lib/i18n";

export function clinicSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
    name: "FAT FREEZING",
    alternateName: locale === "ar" ? "مركز دبي المتخصص لنحت وخسارة الوزن" : "Dubai's Weight Loss Centre",
    url: `${SITE_URL}/${locale}`,
    description: "Doctor-led fat freezing clinic in Dubai with transparent pricing from AED 489.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jumeira St - Jumeirah - Jumeirah 1",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    telephone: "+971521231743",
    openingHours: "Mo-Su 12:00-20:00"
  };
}

export function serviceSchema(locale: Locale) {
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
    url: `${SITE_URL}/${locale}/fat-freezing`
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
      item: `${SITE_URL}/${locale}`
    }
  ];

  items.forEach((item, index) => {
    elements.push({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path}`
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
