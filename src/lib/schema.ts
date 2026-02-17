import {SITE_URL} from "@/lib/seo";
import type {Locale} from "@/lib/i18n";

export function clinicSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: "FAT FREEZING",
    url: `${SITE_URL}/${locale}`,
    description: "Dubai fat freezing clinic with free 30-min consultation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jumeira St - Jumeirah - Jumeirah 1",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    telephone: "+971521231743"
  };
}

export function serviceSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fat Freezing",
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
    url: `${SITE_URL}/${locale}`
  };
}

export function breadcrumbSchema(locale: Locale, path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ar" ? "الرئيسية" : "Home",
        item: `${SITE_URL}/${locale}`
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE_URL}/${locale}${path}`
      }
    ]
  };
}
