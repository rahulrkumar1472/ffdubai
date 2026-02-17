import type {Locale} from "@/lib/i18n";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  locale: Locale;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  category: string;
  tags: string[];
  summary: string;
  sections: BlogSection[];
};

type Translation = {
  title: string;
  summary: string;
  category: string;
};

const EN_POSTS: Omit<BlogPost, "locale">[] = [
  {
    slug: "fat-freezing-dubai-how-it-works",
    title: "Fat Freezing in Dubai: How Cryolipolysis Works",
    metaTitle: "How Fat Freezing Works in Dubai | FAT FREEZING",
    metaDescription:
      "Understand how cryolipolysis targets stubborn fat pockets, who it suits, and what to expect from consultation to results.",
    publishedAt: "2026-02-01",
    category: "Education",
    tags: ["fat freezing", "cryolipolysis", "dubai"],
    summary: "A practical guide to the science, treatment flow, and realistic expectations for fat freezing in Dubai.",
    sections: [
      {
        heading: "What cryolipolysis actually does",
        paragraphs: [
          "Cryolipolysis is a controlled-cooling treatment designed for localized fat. The applicator draws a pinchable area of tissue into a cup and applies a medically set cooling profile.",
          "Fat cells are more cold-sensitive than surrounding tissue. The body then gradually clears affected fat cells over several weeks. It is not a medical weight-loss method and should be planned as contouring."
        ]
      },
      {
        heading: "What the appointment looks like",
        paragraphs: [
          "A doctor-led consultation checks your target area, skin quality, and expectations. This determines if treatment is suitable and whether one or more sessions should be planned.",
          "During treatment, the area is marked, the applicator is placed, and the cooling cycle runs. Most patients use this time to rest, answer emails, or listen to audio content."
        ]
      },
      {
        heading: "Results timeline and planning",
        paragraphs: [
          "Initial changes may appear around weeks two to four, while clearer contour shifts are often more visible between weeks six and twelve.",
          "Results vary by area and baseline profile. A transparent clinic should explain likely outcomes before treatment and avoid guaranteed claims."
        ]
      }
    ]
  },
  {
    slug: "fat-freezing-results-timeline",
    title: "Fat Freezing Results Timeline: Week-by-Week Expectations",
    metaTitle: "Fat Freezing Results Timeline | Dubai Guide",
    metaDescription: "Learn what usually changes from day one through week twelve after fat freezing and how to track progress correctly.",
    publishedAt: "2026-02-02",
    category: "Results",
    tags: ["fat freezing results", "timeline", "dubai"],
    summary: "A week-by-week view of what most patients notice after cryolipolysis and why patience matters.",
    sections: [
      {
        heading: "First week after treatment",
        paragraphs: [
          "Most people return to normal activity quickly. You may notice temporary fullness, tenderness, or numbness in treated areas.",
          "These early sensations do not represent final contour change. They are part of normal post-treatment response and usually settle with time."
        ]
      },
      {
        heading: "Weeks two to six",
        paragraphs: [
          "Subtle visible change can begin in this window, especially in side profiles and fitted clothing. Clinical photography helps detect progress more accurately than memory.",
          "Routine consistency matters. Hydration, basic activity, and stable habits can support overall body composition while results develop."
        ]
      },
      {
        heading: "Weeks six to twelve and review",
        paragraphs: [
          "This is often when contour changes become clearer. Your doctor can reassess whether current progress is on-track and whether a second session is justified.",
          "Structured follow-up protects outcomes and prevents overtreatment. Decisions should stay consultation-led, not sales-led."
        ]
      }
    ]
  },
  {
    slug: "fat-freezing-vs-liposuction-dubai",
    title: "Fat Freezing vs Liposuction in Dubai: Key Differences",
    metaTitle: "Fat Freezing vs Liposuction Dubai | What to Choose",
    metaDescription: "Compare fat freezing and liposuction by downtime, invasiveness, suitability, and expected contour outcomes.",
    publishedAt: "2026-02-03",
    category: "Comparisons",
    tags: ["fat freezing vs lipo", "liposuction", "dubai"],
    summary: "A balanced comparison between non-invasive cryolipolysis and surgical liposuction for Dubai patients.",
    sections: [
      {
        heading: "Invasiveness and recovery",
        paragraphs: [
          "Fat freezing is non-surgical and typically has minimal interruption to routine. Liposuction is a surgical procedure and involves recovery planning.",
          "If your top priority is avoiding surgery, cryolipolysis may be considered first for suitable localized fat areas."
        ]
      },
      {
        heading: "Scale of change and planning",
        paragraphs: [
          "Liposuction can produce larger immediate volume changes in selected cases. Fat freezing usually offers gradual contour refinement.",
          "The right option depends on goals, body profile, and risk tolerance. A clinical consultation should discuss both realistically."
        ]
      },
      {
        heading: "How to decide safely",
        paragraphs: [
          "Start with objective goals: which area, what timeline, what level of change, and what recovery constraints you can accept.",
          "Choose clinics that communicate limitations clearly and avoid absolute promises for either pathway."
        ]
      }
    ]
  },
  {
    slug: "belly-fat-cryolipolysis-dubai",
    title: "Belly Fat Cryolipolysis in Dubai: What to Expect",
    metaTitle: "Belly Fat Freezing Dubai | Stomach Area Guide",
    metaDescription: "Stomach-area fat freezing guide covering candidate profile, treatment feel, and results timeline.",
    publishedAt: "2026-02-04",
    category: "Areas",
    tags: ["stomach fat freezing", "belly fat", "dubai"],
    summary: "How stomach-area cryolipolysis is planned and what results usually look like over time.",
    sections: [
      {
        heading: "Who is commonly suitable",
        paragraphs: [
          "Stomach-area cryolipolysis is usually considered for pinchable, localized fat that remains despite routine efforts.",
          "It is not intended as a substitute for structured weight-loss treatment when broader metabolic support is required."
        ]
      },
      {
        heading: "During the session",
        paragraphs: [
          "The treatment area is marked and fitted with an applicator. Cooling begins after placement and continues for the selected cycle.",
          "Post-session guidance generally includes hydration, movement, and realistic review intervals."
        ]
      },
      {
        heading: "Outcome expectations",
        paragraphs: [
          "Visible refinement is gradual, often noticed first in clothing fit and side profile photos.",
          "Some cases need staged treatment to meet goals, particularly when fat thickness is higher at baseline."
        ]
      }
    ]
  },
  {
    slug: "double-chin-fat-freezing-dubai",
    title: "Double Chin Fat Freezing in Dubai: Candidacy and Results",
    metaTitle: "Double Chin Fat Freezing Dubai | Under-Chin Guide",
    metaDescription: "Under-chin cryolipolysis overview for candidacy, session planning, and realistic contour outcomes.",
    publishedAt: "2026-02-05",
    category: "Areas",
    tags: ["double chin", "under chin fat freezing", "dubai"],
    summary: "A focused guide for under-chin contouring with fat freezing in Dubai clinics.",
    sections: [
      {
        heading: "Assessment first",
        paragraphs: [
          "Under-chin treatment starts with a careful review of fat thickness, skin elasticity, and jawline goals.",
          "When skin support is a concern, add-on tightening sessions may be discussed as part of an integrated plan."
        ]
      },
      {
        heading: "Treatment experience",
        paragraphs: [
          "The area is smaller than body zones but still requires precise placement and controlled parameters.",
          "Most people return to normal routine quickly, with temporary sensitivity as a common short-term response."
        ]
      },
      {
        heading: "How results are reviewed",
        paragraphs: [
          "Progress should be judged at planned intervals, not day-to-day. Angle-consistent photography improves review accuracy.",
          "Consultation-led reviews help decide if one session is enough or if staged treatment is better."
        ]
      }
    ]
  },
  {
    slug: "love-handles-fat-freezing-dubai",
    title: "Love Handles Fat Freezing in Dubai: Side-Contour Planning",
    metaTitle: "Love Handles Fat Freezing Dubai | Side Contour",
    metaDescription: "How cryolipolysis is planned for love handles, including realistic expectations and treatment stages.",
    publishedAt: "2026-02-06",
    category: "Areas",
    tags: ["love handles", "fat freezing dubai", "body contouring"],
    summary: "What to know before treating side waist fat pockets with cryolipolysis.",
    sections: [
      {
        heading: "Why side contours are common",
        paragraphs: [
          "Love handles are one of the most requested zones because even modest reduction can improve waistline definition.",
          "Suitability depends on pinchable fat and an achievable contour goal, not on scale weight alone."
        ]
      },
      {
        heading: "Session strategy",
        paragraphs: [
          "Treatment planning considers bilateral symmetry and profile balance. Some cases benefit from phased sessions.",
          "Transparent plans should explain where immediate change is unlikely and when reassessment should occur."
        ]
      },
      {
        heading: "Maintaining outcomes",
        paragraphs: [
          "After treatment, stable routines support long-term shape maintenance. Dramatic lifestyle swings can affect visual consistency.",
          "Use follow-up check-ins to refine next steps instead of overbooking early."
        ]
      }
    ]
  },
  {
    slug: "how-many-sessions-fat-freezing",
    title: "How Many Fat Freezing Sessions Do You Need?",
    metaTitle: "How Many Fat Freezing Sessions | Dubai Planning Guide",
    metaDescription: "Learn what determines session count for cryolipolysis and why one-size-fits-all advice is unreliable.",
    publishedAt: "2026-02-07",
    category: "Planning",
    tags: ["sessions", "fat freezing", "consultation"],
    summary: "Session count depends on area thickness, goal depth, and response speed, not fixed package claims.",
    sections: [
      {
        heading: "What drives session count",
        paragraphs: [
          "Area size, fat thickness, and contour target are primary variables. Smaller refinement goals may need fewer sessions.",
          "Patients seeking broader reshaping usually need staged treatment windows with reassessment between sessions."
        ]
      },
      {
        heading: "Why follow-up matters",
        paragraphs: [
          "Progress is gradual, so decisions should be based on timeline reviews rather than immediate post-session impressions.",
          "Clinical follow-up helps avoid unnecessary additional sessions before true response is visible."
        ]
      },
      {
        heading: "Building a realistic plan",
        paragraphs: [
          "A strong plan defines target areas, review timing, and acceptable outcomes before treatment starts.",
          "This keeps package decisions practical and aligned with medical suitability."
        ]
      }
    ]
  },
  {
    slug: "fat-freezing-safety-side-effects",
    title: "Fat Freezing Safety and Side Effects: Dubai Clinic Guide",
    metaTitle: "Fat Freezing Safety Dubai | Side Effects Explained",
    metaDescription: "Understand common short-term effects, rare risks, and what safety screening should include before treatment.",
    publishedAt: "2026-02-08",
    category: "Safety",
    tags: ["fat freezing safety", "side effects", "doctor-led"],
    summary: "A medical-safety perspective on common effects, screening, and when to seek review.",
    sections: [
      {
        heading: "Common short-term effects",
        paragraphs: [
          "Temporary redness, tenderness, numbness, or firmness can occur in treated areas and usually settle progressively.",
          "These effects should be discussed before treatment so expectations are realistic and reassuring."
        ]
      },
      {
        heading: "Why screening protects outcomes",
        paragraphs: [
          "Pre-treatment checks identify contraindications and determine whether non-invasive contouring is suitable for your profile.",
          "Doctor-led screening helps align safety, comfort, and expected response before any session is booked."
        ]
      },
      {
        heading: "When to contact the clinic",
        paragraphs: [
          "If post-treatment symptoms feel unusual or prolonged, follow your clinic's review protocol rather than self-diagnosing.",
          "Quality clinics provide clear aftercare channels and escalation guidance."
        ]
      }
    ]
  },
  {
    slug: "fat-freezing-aftercare-guide",
    title: "Fat Freezing Aftercare Guide: Practical Steps",
    metaTitle: "Fat Freezing Aftercare Dubai | Simple Guide",
    metaDescription: "A practical aftercare checklist for cryolipolysis including routine, hydration, and follow-up timing.",
    publishedAt: "2026-02-09",
    category: "Aftercare",
    tags: ["aftercare", "fat freezing", "dubai"],
    summary: "Simple post-treatment habits that support comfort and consistent timeline reviews.",
    sections: [
      {
        heading: "First 48 hours",
        paragraphs: [
          "Follow the clinic's area-specific instructions and keep expectations realistic while early tissue response settles.",
          "Gentle movement and hydration are commonly encouraged unless your provider advises otherwise."
        ]
      },
      {
        heading: "Weeks one to four",
        paragraphs: [
          "Consistency is more useful than extremes. Sudden routine changes can make results harder to evaluate objectively.",
          "Track progress with date-stamped photos under similar lighting and posture."
        ]
      },
      {
        heading: "Planned review stage",
        paragraphs: [
          "Attend scheduled reviews to decide whether you are on-track or need staged treatment adjustments.",
          "This approach keeps decisions evidence-based and avoids rushed add-on bookings."
        ]
      }
    ]
  },
  {
    slug: "cavitation-vs-fat-freezing-dubai",
    title: "Cavitation vs Fat Freezing in Dubai: How They Differ",
    metaTitle: "Cavitation vs Fat Freezing Dubai | Treatment Comparison",
    metaDescription: "Compare cavitation and fat freezing by mechanism, expected timeline, and where each may fit in a treatment plan.",
    publishedAt: "2026-02-10",
    category: "Comparisons",
    tags: ["cavitation", "fat freezing", "dubai"],
    summary: "A clear comparison to help patients understand when each modality may be recommended.",
    sections: [
      {
        heading: "Different mechanisms",
        paragraphs: [
          "Cryolipolysis uses controlled cooling for localized fat pockets. Cavitation uses ultrasound energy and is often planned as a supportive modality.",
          "They are not interchangeable in every case and can be sequenced based on goals."
        ]
      },
      {
        heading: "Treatment planning",
        paragraphs: [
          "Some patients start with fat freezing for core area reduction, then use cavitation as an adjunct in follow-up stages.",
          "The sequence should remain suitability-led rather than package-led."
        ]
      },
      {
        heading: "Practical decision points",
        paragraphs: [
          "Define your target area, desired timeline, and budget range before choosing a route.",
          "A doctor-led consultation should explain where combination plans add value and where they do not."
        ]
      }
    ]
  },
  {
    slug: "radiofrequency-after-fat-freezing",
    title: "Radiofrequency After Fat Freezing: When It Helps",
    metaTitle: "Radiofrequency After Fat Freezing Dubai | Skin Support",
    metaDescription: "Understand when RF skin tightening may complement fat freezing, especially for firmness concerns.",
    publishedAt: "2026-02-11",
    category: "Combinations",
    tags: ["radiofrequency", "skin tightening", "fat freezing"],
    summary: "How RF sessions can be used as a supportive step when firmness is part of the treatment goal.",
    sections: [
      {
        heading: "Why RF is paired",
        paragraphs: [
          "When a patient is concerned about skin texture or firmness, RF may be included as a supportive modality after contouring.",
          "The objective is not to replace fat reduction, but to complement overall visual balance."
        ]
      },
      {
        heading: "Timing and frequency",
        paragraphs: [
          "Scheduling depends on area, skin condition, and response during review appointments. There is no universal fixed schedule for all cases.",
          "Clear documentation at follow-up helps determine whether continuation is justified."
        ]
      },
      {
        heading: "Expectation management",
        paragraphs: [
          "RF should be explained as supportive rather than miracle tightening. Results vary and should be discussed with realistic language.",
          "Combination pathways work best when each step has a defined reason."
        ]
      }
    ]
  },
  {
    slug: "fat-freezing-cost-dubai-prices",
    title: "Fat Freezing Cost in Dubai: Pricing Explained",
    metaTitle: "Fat Freezing Cost Dubai | Packages from AED 489",
    metaDescription: "A transparent guide to fat freezing pricing in Dubai, including package ranges and consultation-first planning.",
    publishedAt: "2026-02-12",
    category: "Pricing",
    tags: ["fat freezing cost", "pricing dubai", "packages"],
    summary: "How package pricing is structured and what to ask before committing to a treatment plan.",
    sections: [
      {
        heading: "Starter to advanced package ladder",
        paragraphs: [
          "Many clinics use tiered packages. In our current menu, plans start from AED 489 and extend to AED 1,599 based on treatment scope.",
          "A consultation-first model confirms which tier is appropriate before finalizing any commitment."
        ]
      },
      {
        heading: "What influences total cost",
        paragraphs: [
          "Cost depends on treatment area count, session strategy, and whether add-on modalities are clinically advised.",
          "Transparent pricing should include clear inclusions, realistic outcomes, and review timing."
        ]
      },
      {
        heading: "How to evaluate value",
        paragraphs: [
          "Low headline pricing without clinical planning can create poor expectations. Value comes from safety, fit, and honest guidance.",
          "Ask for a clear treatment roadmap, not just a one-line price quote."
        ]
      }
    ]
  }
];

const AR_TRANSLATIONS: Record<string, Translation> = {
  "fat-freezing-dubai-how-it-works": {
    title: "كيف يعمل تجميد الدهون في دبي؟",
    summary: "شرح مبسّط لآلية الكرايو ليبوليسيس وخطوات الجلسة والتوقعات الواقعية للنتائج.",
    category: "تثقيف"
  },
  "fat-freezing-results-timeline": {
    title: "الجدول الزمني لنتائج تجميد الدهون",
    summary: "ما الذي يمكن ملاحظته عادةً من الأسبوع الأول حتى الأسبوع الثاني عشر بعد الجلسة.",
    category: "النتائج"
  },
  "fat-freezing-vs-liposuction-dubai": {
    title: "تجميد الدهون أم شفط الدهون في دبي؟",
    summary: "مقارنة عملية بين الخيار غير الجراحي والخيار الجراحي من حيث التعافي والنتيجة المتوقعة.",
    category: "مقارنات"
  },
  "belly-fat-cryolipolysis-dubai": {
    title: "تجميد دهون البطن في دبي: ماذا تتوقع؟",
    summary: "دليل عملي لمنطقة البطن يشمل الملاءمة وخطة الجلسات ومتى تبدأ النتائج بالظهور.",
    category: "المناطق"
  },
  "double-chin-fat-freezing-dubai": {
    title: "تجميد دهون الذقن المزدوج في دبي",
    summary: "نقاط مهمة حول تقييم منطقة أسفل الذقن، وخيارات الخطة المناسبة لكل حالة.",
    category: "المناطق"
  },
  "love-handles-fat-freezing-dubai": {
    title: "تجميد دهون الخواصر في دبي",
    summary: "كيف يتم التخطيط لعلاج الخواصر وما العوامل التي تحدد عدد الجلسات.",
    category: "المناطق"
  },
  "how-many-sessions-fat-freezing": {
    title: "كم جلسة تحتاج لتجميد الدهون؟",
    summary: "عدد الجلسات يختلف حسب المنطقة والهدف والاستجابة، وليس رقماً ثابتاً للجميع.",
    category: "التخطيط"
  },
  "fat-freezing-safety-side-effects": {
    title: "سلامة تجميد الدهون والآثار الجانبية",
    summary: "نظرة طبية على الآثار المؤقتة الشائعة، ومتى يلزم التواصل مع العيادة.",
    category: "السلامة"
  },
  "fat-freezing-aftercare-guide": {
    title: "دليل العناية بعد تجميد الدهون",
    summary: "خطوات عملية بعد الجلسة لدعم الراحة ومتابعة النتائج بشكل صحيح.",
    category: "العناية"
  },
  "cavitation-vs-fat-freezing-dubai": {
    title: "الكافيتيشن أم تجميد الدهون؟",
    summary: "الفرق بين الطريقتين ومتى يمكن الجمع بينهما ضمن خطة نحت القوام.",
    category: "مقارنات"
  },
  "radiofrequency-after-fat-freezing": {
    title: "التردد الحراري بعد تجميد الدهون",
    summary: "متى قد يفيد شد البشرة بالتردد الحراري كخطوة داعمة بعد النحت.",
    category: "العلاجات المركبة"
  },
  "fat-freezing-cost-dubai-prices": {
    title: "تكلفة تجميد الدهون في دبي",
    summary: "شرح واضح لبنية الأسعار والباقات وكيف تختار الخطة المناسبة لحالتك.",
    category: "الأسعار"
  }
};

const AR_POSTS: Omit<BlogPost, "locale">[] = EN_POSTS.map((post) => {
  const translated = AR_TRANSLATIONS[post.slug];
  return {
    ...post,
    title: translated.title,
    metaTitle: `${translated.title} | FAT FREEZING دبي`,
    metaDescription: translated.summary,
    category: translated.category,
    summary: translated.summary,
    sections: [
      {
        heading: "لماذا هذا الموضوع مهم؟",
        paragraphs: [
          translated.summary,
          "ننصح دائماً بالبدء باستشارة طبية لتحديد الملاءمة ووضع خطة واضحة حسب المنطقة المستهدفة والأهداف الواقعية."
        ]
      },
      {
        heading: "ما الخطوة التالية؟",
        paragraphs: [
          "بعد الاطلاع على المعلومات، احجز استشارة مجانية لمراجعة الخيارات الأنسب لحالتك ضمن تسعير شفاف.",
          "هذه المقالة مختصرة حالياً، وسيتم توسيع المحتوى العربي تدريجياً في التحديثات القادمة."
        ]
      }
    ]
  };
});

function withLocale(locale: Locale, posts: Omit<BlogPost, "locale">[]): BlogPost[] {
  return posts.map((post) => ({...post, locale}));
}

const BLOG_BY_LOCALE: Record<Locale, BlogPost[]> = {
  en: withLocale("en", EN_POSTS),
  ar: withLocale("ar", AR_POSTS)
};

export function getBlogPosts(locale: Locale) {
  return BLOG_BY_LOCALE[locale].slice().sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPost(locale: Locale, slug: string) {
  const posts = BLOG_BY_LOCALE[locale];
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedPosts(locale: Locale, slug: string, limit = 3) {
  const post = getBlogPost(locale, slug);
  if (!post) return [];

  return BLOG_BY_LOCALE[locale]
    .filter((candidate) => candidate.slug !== slug)
    .map((candidate) => ({
      post: candidate,
      score: candidate.tags.reduce((total, tag) => total + (post.tags.includes(tag) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function calculateReadingTime(post: BlogPost) {
  const text = [post.summary, ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(" ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.round(words / 200));
}

export const BLOG_SLUGS = EN_POSTS.map((post) => post.slug);
