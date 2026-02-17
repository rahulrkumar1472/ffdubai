import type {Locale} from "@/lib/i18n";

export type AreaEntry = {
  slug: string;
  locale: Locale;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  body: string[];
  highlights: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const EN_AREAS: Omit<AreaEntry, "locale">[] = [
  {
    slug: "jumeirah-1",
    name: "Jumeirah 1",
    title: "Fat Freezing Near Jumeirah 1, Dubai",
    metaTitle: "Fat Freezing Near Jumeirah 1 Dubai | FAT FREEZING",
    metaDescription:
      "Doctor-led fat freezing near Jumeirah 1 with transparent packages, map directions, and consultation-first planning.",
    lead: "Our clinic on Jumeira Street offers consultation-first body contouring for patients based in and around Jumeirah 1.",
    body: [
      "Patients searching for fat freezing near Jumeirah 1 usually want trusted care close to home with transparent pricing and realistic guidance. Our process starts with a doctor-led consultation before any treatment recommendation is made.",
      "Appointments are available daily from 12:00 to 20:00, with same-day options when slots are open. You can book a free consultation first, then proceed to treatment if medically suitable.",
      "For convenience, we provide direct map access, WhatsApp coordination, and clear package options from AED 489 through advanced planning tiers."
    ],
    highlights: [
      "Jumeirah 1 access on Jumeira Street",
      "Open daily 12:00–20:00",
      "Doctor-led suitability screening",
      "Book consultation or treatment online"
    ],
    faq: [
      {
        question: "Do you serve patients living in Jumeirah 1?",
        answer: "Yes. Many patients from Jumeirah 1 choose our clinic because of proximity and daily scheduling."
      },
      {
        question: "Can I book treatment directly from Jumeirah 1?",
        answer: "Yes, but final suitability is confirmed by clinical assessment at your appointment."
      },
      {
        question: "How do I get directions quickly?",
        answer: "Use our map section or WhatsApp and we will share direct route guidance to the clinic."
      }
    ]
  }
];

const AR_AREAS: Omit<AreaEntry, "locale">[] = [
  {
    slug: "jumeirah-1",
    name: "جميرا 1",
    title: "تجميد الدهون بالقرب من جميرا 1، دبي",
    metaTitle: "تجميد الدهون قرب جميرا 1 دبي | FAT FREEZING",
    metaDescription: "عيادة تجميد الدهون بالقرب من جميرا 1 مع تقييم طبي وتسعير واضح ومواعيد يومية.",
    lead: "نقدّم في موقعنا على شارع جميرا خطة علاج تبدأ بالاستشارة للمرضى القريبين من منطقة جميرا 1.",
    body: [
      "الباحثون عن تجميد الدهون قرب جميرا 1 يهتمون غالباً بالثقة والوضوح وسهولة الوصول. لذلك نعتمد نهجاً طبياً يبدأ بالتقييم قبل اقتراح أي جلسة علاج.",
      "المواعيد متاحة يومياً من 12:00 حتى 20:00، مع إمكانية مواعيد في نفس اليوم حسب التوفر. يمكنك البدء باستشارة مجانية ثم متابعة الخطة المناسبة إذا كانت الملاءمة الطبية مؤكدة.",
      "نوفّر وصولاً مباشراً عبر الخريطة، وتنسيقاً سريعاً عبر واتساب، وباقات واضحة تبدأ من 489 درهم."
    ],
    highlights: [
      "موقع قريب من جميرا 1",
      "مواعيد يومية 12:00–20:00",
      "تقييم ملاءمة بإشراف طبي",
      "حجز الاستشارة أو العلاج أونلاين"
    ],
    faq: [
      {
        question: "هل تستقبلون مرضى من جميرا 1؟",
        answer: "نعم، لدينا عدد كبير من المراجعين من جميرا 1 بسبب قرب الموقع وسهولة الحجز."
      },
      {
        question: "هل يمكنني حجز العلاج مباشرة؟",
        answer: "يمكنك ذلك، لكن القرار النهائي يتم بعد تقييم الملاءمة الطبية في الموعد."
      },
      {
        question: "كيف أصل للعيادة بسرعة؟",
        answer: "استخدم رابط الخريطة أو تواصل عبر واتساب وسنرسل لك الاتجاهات بشكل مباشر."
      }
    ]
  }
];

const AREA_BY_LOCALE: Record<Locale, AreaEntry[]> = {
  en: EN_AREAS.map((area) => ({...area, locale: "en"})),
  ar: AR_AREAS.map((area) => ({...area, locale: "ar"}))
};

export function getArea(locale: Locale, slug: string) {
  return AREA_BY_LOCALE[locale].find((entry) => entry.slug === slug) ?? null;
}

export function getAreaSlugs() {
  return EN_AREAS.map((entry) => entry.slug);
}
