type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type LocalBusinessInput = {
  name: string;
  url: string;
  description: string;
  areaServed: string;
  address?: string;
  telephone?: string;
};

export function localBusinessJsonLd(input: LocalBusinessInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: input.name,
    url: input.url,
    description: input.description,
    areaServed: input.areaServed
  };

  if (input.address) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: input.address,
      addressLocality: "Dubai",
      addressCountry: "AE"
    };
  }

  if (input.telephone) {
    schema.telephone = input.telephone;
  }

  return schema;
}

export function medicalProcedureJsonLd({
  name,
  description,
  url,
  bodyLocation
}: {
  name: string;
  description: string;
  url: string;
  bodyLocation?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    procedureType: "Non-surgical body contouring"
  };

  if (bodyLocation) {
    schema.bodyLocation = bodyLocation;
  }

  return schema;
}

export function faqJsonLd(items: FaqItem[]) {
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

export function breadcrumbJsonLd(baseUrl: string, items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };
}
