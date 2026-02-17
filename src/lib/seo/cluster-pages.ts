import type {Locale} from "@/lib/i18n";
import type {SeoPageData} from "@/lib/seo/site-pages";

type ClusterPath =
  | "fat-freezing/how-it-works"
  | "fat-freezing/areas-treated"
  | "fat-freezing/results-timeline"
  | "fat-freezing/pricing"
  | "fat-freezing/safety-side-effects"
  | "fat-freezing/before-after"
  | "fat-freezing/faq"
  | "fat-freezing/consultation"
  | "fat-freezing/ultrasound-cavitation"
  | "fat-freezing/ultrasound-cavitation/how-it-enhances-results"
  | "fat-freezing/ultrasound-cavitation/combined-plan"
  | "fat-freezing/radiofrequency"
  | "fat-freezing/radiofrequency/skin-tightening-vs-fat-reduction"
  | "fat-freezing/radiofrequency/combined-plan"
  | "ultrasound-cavitation"
  | "ultrasound-cavitation/how-it-works"
  | "ultrasound-cavitation/areas-treated"
  | "ultrasound-cavitation/results"
  | "ultrasound-cavitation/pricing"
  | "ultrasound-cavitation/faq"
  | "ultrasound-cavitation/with-fat-freezing"
  | "radiofrequency"
  | "radiofrequency/how-it-works"
  | "radiofrequency/skin-tightening"
  | "radiofrequency/body-contouring"
  | "radiofrequency/pricing"
  | "radiofrequency/faq"
  | "radiofrequency/with-fat-freezing";

type LocalizedClusterPage = Record<Locale, SeoPageData>;

type EnSeed = {
  path: ClusterPath;
  arTitle: string;
  en: SeoPageData;
};

const COMMON_FAQ_EN = [
  {
    question: "Is this treatment suitable for everyone?",
    answer:
      "No. Suitability is assessed during consultation, including goals, medical history, and treatment-area profile."
  },
  {
    question: "Are results guaranteed?",
    answer: "No. Outcomes vary by individual, baseline profile, treatment area, and follow-up consistency."
  },
  {
    question: "Can I book directly online?",
    answer: "Yes. Use the booking page to request a consultation or treatment planning appointment."
  }
];

function buildArabicVersion(page: SeoPageData, arTitle: string): SeoPageData {
  return {
    ...page,
    title: arTitle,
    description:
      "دليل عربي مبسط يشرح العلاج بطريقة طبية واقعية مع مراعاة عوامل الملاءمة، وخطة الجلسات، واحتمالية اختلاف النتائج من شخص لآخر.",
    h1: arTitle,
    intro: [
      `توضح هذه الصفحة موضوع ${arTitle} بأسلوب طبي واضح يناسب الباحثين عن علاج آمن في دبي.`,
      "نركز على التقييم السريري أولاً، ثم وضع خطة علاج تناسب المنطقة المستهدفة والنتائج الواقعية المتوقعة.",
      "المحتوى تثقيفي ولا يغني عن الاستشارة المباشرة، والنتائج قد تختلف حسب الحالة الفردية."
    ],
    sections: page.sections.map((section, index) => ({
      title: index === 0 ? "نظرة عامة طبية" : index === 1 ? "الملاءمة وخطة العلاج" : "النتائج والمتابعة",
      paragraphs: [
        `نقدم شرحاً عملياً حول ${arTitle} مع توضيح ما يمكن توقعه بشكل واقعي دون وعود مبالغ فيها.`,
        "تحديد الخطة يعتمد على الفحص الطبي، وأهدافك، واستجابة الجسم خلال فترة المتابعة."
      ],
      bullets:
        section.bullets?.length
          ? [
              "تقييم طبي قبل البدء",
              "خطة جلسات واضحة",
              "إرشادات متابعة وعناية",
              "النتائج تختلف حسب الحالة"
            ]
          : undefined
    })),
    faq: [
      {
        question: "هل يناسب هذا العلاج جميع الحالات؟",
        answer: "لا، يتم تأكيد الملاءمة خلال الاستشارة وفق الحالة الصحية والمنطقة المستهدفة."
      },
      {
        question: "متى أرى النتيجة؟",
        answer: "عادةً تظهر التغيرات تدريجياً خلال أسابيع، مع مراجعة أوضح بين الأسبوع السادس والثاني عشر."
      },
      {
        question: "هل النتائج مضمونة؟",
        answer: "لا. النتائج تختلف من شخص لآخر ويجب تقييم الحالة قبل أي خطة علاجية."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "صفحة تجميد الدهون"},
      {href: "/pricing", label: "الأسعار والباقات"},
      {href: "/results", label: "النتائج والجدول الزمني"},
      {href: "/book", label: "احجز استشارة"}
    ],
    ctaTitle: "ابدأ بخطة علاج مبنية على تقييم طبي",
    ctaDescription: "احجز استشارة لمراجعة الملاءمة، المنطقة المستهدفة، وخيارات الباقة الأنسب لك."
  };
}

const seeds: EnSeed[] = [
  {
    path: "fat-freezing/how-it-works",
    arTitle: "كيف يعمل تجميد الدهون",
    en: {
      title: "How Fat Freezing Works | Step-by-Step Cryolipolysis Guide",
      description:
        "Step-by-step guide to how fat freezing works in Dubai, from consultation and applicator planning to gradual contour change.",
      h1: "How Fat Freezing Works",
      intro: [
        "Fat freezing uses controlled cooling to target localized fat cells in selected body areas. The process is planned during consultation so the approach is tailored to area profile, comfort, and realistic timeline expectations.",
        "During treatment, an applicator delivers a regulated cooling cycle to the target zone. The session is designed for non-surgical contouring and should not be presented as a replacement for whole-body weight-loss management.",
        "After treatment, the body gradually processes affected fat cells over several weeks. This is why progress is tracked across review milestones rather than judged in the first few days."
      ],
      sections: [
        {
          title: "Consultation and treatment planning",
          paragraphs: [
            "A clinician reviews your target area, baseline profile, and expectations before recommending cycles or staged sessions.",
            "This step protects both safety and value by avoiding one-size-fits-all package recommendations."
          ],
          bullets: ["Area mapping", "Applicator selection", "Timeline expectations", "Clinical suitability check"]
        },
        {
          title: "What the session feels like",
          paragraphs: [
            "Most patients describe an initial cold sensation and pressure that settles as the cycle progresses.",
            "Temporary firmness, numbness, or sensitivity can occur and should be explained clearly before booking."
          ]
        },
        {
          title: "What happens after treatment",
          paragraphs: [
            "Contour change develops gradually and is usually reviewed over weeks 2 to 12 with consistent progress checks.",
            "If additional cycles are needed, they are planned according to response rather than promises."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/fat-freezing", label: "Fat Freezing parent hub"},
        {href: "/fat-freezing/results-timeline", label: "Results timeline"},
        {href: "/fat-freezing/pricing", label: "Fat Freezing pricing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Need a treatment plan built around your target area?",
      ctaDescription: "Book a consultation to review suitability, expected timeline, and transparent cycle planning."
    }
  },
  {
    path: "fat-freezing/areas-treated",
    arTitle: "المناطق التي نعالجها بتجميد الدهون",
    en: {
      title: "Fat Freezing Areas Treated in Dubai",
      description: "Guide to common body areas treated with fat freezing including stomach, flanks, arms, thighs, and chin.",
      h1: "Fat Freezing Areas Treated",
      intro: [
        "Fat freezing is designed for localized pockets of stubborn fat, not broad weight-loss change. Area selection is one of the most important decisions because each body zone responds differently.",
        "Common treatment requests include the abdomen, love handles, upper arms, thighs, and under-chin fullness. Each area is assessed for tissue profile and realistic contour potential before a cycle plan is recommended.",
        "A consultation-first approach helps prioritise the highest-impact area first, then stage additional zones when clinically appropriate."
      ],
      sections: [
        {
          title: "Most requested body zones",
          paragraphs: [
            "Abdomen and flank areas are often prioritised for contour definition. Arms and thighs can also be suitable in selected profiles.",
            "Under-chin planning is typically handled as a focused area with specific comfort and timeline guidance."
          ],
          bullets: ["Stomach", "Love handles", "Upper arms", "Thighs", "Under-chin"]
        },
        {
          title: "How area choice affects timeline",
          paragraphs: [
            "Smaller zones may have simpler cycle planning, while larger or bilateral areas are often staged over reviews.",
            "Planning should balance comfort, expected progression, and practical appointment schedule."
          ]
        },
        {
          title: "When combination treatment may be discussed",
          paragraphs: [
            "In selected cases, ultrasound cavitation or radiofrequency may be discussed as supportive options.",
            "These options should be recommendation-led, not sales-led, and always based on consultation findings."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/body-areas", label: "Body areas overview"},
        {href: "/fat-freezing/pricing", label: "Area-based pricing factors"},
        {href: "/fat-freezing/consultation", label: "Consultation process"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Unsure which area to start with?",
      ctaDescription: "Get a consultation-led plan focused on realistic contour priorities."
    }
  },
  {
    path: "fat-freezing/results-timeline",
    arTitle: "الجدول الزمني لنتائج تجميد الدهون",
    en: {
      title: "Fat Freezing Results Timeline | Week-by-Week Guidance",
      description: "Understand realistic fat freezing milestones from day 0 to week 12 with consultation-based progress reviews.",
      h1: "Fat Freezing Results Timeline",
      intro: [
        "Fat freezing outcomes are gradual by design. Progress usually appears over weeks and should be reviewed against consistent photos and clinical milestones.",
        "Many patients notice early change from weeks 2 to 4, while clearer contour differences are often evaluated around weeks 6 to 12.",
        "This timeline can vary based on area profile, baseline body composition, and whether one session or staged sessions are used."
      ],
      sections: [
        {
          title: "Day 0 to week 2",
          paragraphs: [
            "Temporary post-treatment sensations can occur, including numbness or firmness in the treated area.",
            "This period is usually focused on comfort and recovery rather than visual judgement."
          ]
        },
        {
          title: "Week 2 to week 6",
          paragraphs: [
            "Early contour changes may begin to appear, especially in areas with clear treatment boundaries.",
            "Clinical review helps determine whether progression is on track or whether staged adjustments are needed later."
          ]
        },
        {
          title: "Week 6 to week 12",
          paragraphs: [
            "This is commonly the period for clearer visual comparison and plan decisions for next steps.",
            "A realistic review framework avoids over-promising and supports medically responsible planning."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/results", label: "Results page"},
        {href: "/before-after", label: "Before and after guidance"},
        {href: "/fat-freezing/before-after", label: "Fat Freezing case review guidance"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Want a realistic timeline for your target area?",
      ctaDescription: "Book consultation and get milestone planning based on your baseline profile."
    }
  },
  {
    path: "fat-freezing/pricing",
    arTitle: "أسعار تجميد الدهون",
    en: {
      title: "Fat Freezing Pricing Breakdown | From AED 489",
      description: "Transparent pricing guide explaining area size, cycles, and session planning factors in Dubai.",
      h1: "Fat Freezing Pricing",
      intro: [
        "Fat freezing starts from AED 489, but total planning depends on area size, cycle count, and whether staged sessions are required.",
        "Transparent pricing should explain exactly why a package is recommended and what is included in follow-up review.",
        "A consultation-first quote protects patients from under-scoped or over-scoped recommendations."
      ],
      sections: [
        {
          title: "What drives treatment cost",
          paragraphs: [
            "Cycle count, area profile, and treatment goals are the main factors that affect final pricing.",
            "Clinics should explain these factors clearly so patients can compare value, not just headline discounts."
          ],
          bullets: ["Area size", "Applicator/cycle count", "Single vs staged plan", "Supportive add-ons if suitable"]
        },
        {
          title: "Packages and planning transparency",
          paragraphs: [
            "Package ladders help simplify decisions, but final recommendations should still be individualized.",
            "Clear inclusion/exclusion language is essential for trust and long-term satisfaction."
          ]
        },
        {
          title: "Consultation-first pricing approach",
          paragraphs: [
            "The best pricing process links budget to realistic contour priorities and expected timeline.",
            "No ethical clinic should guarantee outcomes or promise fixed inch-loss numbers."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/pricing", label: "Main pricing page"},
        {href: "/fat-freezing", label: "Fat Freezing hub"},
        {href: "/fat-freezing/consultation", label: "Consultation route"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Get a transparent quote based on your area plan",
      ctaDescription: "Book consultation for a clear, medically responsible treatment and pricing roadmap."
    }
  },
  {
    path: "fat-freezing/safety-side-effects",
    arTitle: "سلامة تجميد الدهون والآثار الجانبية",
    en: {
      title: "Fat Freezing Safety and Side Effects",
      description: "Clinical overview of safety checks, common temporary effects, and when to seek review.",
      h1: "Fat Freezing Safety and Side Effects",
      intro: [
        "Safety begins with screening. Cryolipolysis is non-surgical, but it still requires proper assessment before treatment starts.",
        "Common temporary effects may include sensitivity, numbness, firmness, or local tenderness after a session.",
        "These effects should be explained in advance, along with clear escalation guidance if symptoms persist longer than expected."
      ],
      sections: [
        {
          title: "Pre-treatment safety checks",
          paragraphs: [
            "A clinician reviews medical history, area profile, and goals before confirming suitability.",
            "This step helps identify contraindications and protects against inappropriate treatment."
          ]
        },
        {
          title: "Common short-term effects",
          paragraphs: [
            "Most post-session effects are temporary and manageable with routine aftercare guidance.",
            "Patients should be given a clear timeframe for what is expected and when to request follow-up."
          ],
          bullets: ["Temporary tenderness", "Localized firmness", "Short-term numbness", "Mild redness"]
        },
        {
          title: "When to contact the clinic",
          paragraphs: [
            "If symptoms feel unusual or prolonged, clinical review should be requested promptly.",
            "Responsible care includes access to post-treatment support, not just treatment-day communication."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/faq", label: "General FAQ"},
        {href: "/fat-freezing/consultation", label: "Consultation and screening"},
        {href: "/fat-freezing/how-it-works", label: "How treatment works"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Need a consultation-first safety review?",
      ctaDescription: "Book an assessment to confirm suitability and understand expected aftercare."
    }
  },
  {
    path: "fat-freezing/before-after",
    arTitle: "قبل وبعد تجميد الدهون",
    en: {
      title: "Fat Freezing Before and After Guidance",
      description: "How to interpret before-and-after progress responsibly with realistic expectations and review timing.",
      h1: "Fat Freezing Before and After",
      intro: [
        "Before-and-after references can support decision-making when they are interpreted responsibly and with consistent comparison standards.",
        "Lighting, angle, posture, and timing all affect perceived change. This is why clinics should use structured review windows.",
        "Any visual review should include the statement that results vary and depend on treatment suitability."
      ],
      sections: [
        {
          title: "How to compare images fairly",
          paragraphs: [
            "Use consistent camera distance, lighting, and body position at each checkpoint.",
            "Comparing daily photos often creates false conclusions and unnecessary anxiety."
          ]
        },
        {
          title: "What timeline to use",
          paragraphs: [
            "Week 6 to 12 checkpoints are often more meaningful than immediate post-session comparisons.",
            "Consultation-led review ensures context for what is clinically realistic."
          ]
        },
        {
          title: "Why outcomes differ",
          paragraphs: [
            "Baseline profile, area selected, and aftercare consistency all influence visible contour change.",
            "Ethical clinics never promise guaranteed visuals."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/before-after", label: "Main before-and-after page"},
        {href: "/fat-freezing/results-timeline", label: "Results timeline"},
        {href: "/results", label: "Results overview"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Review expected outcomes with a clinician",
      ctaDescription: "Book consultation for realistic visual milestones and treatment planning."
    }
  },
  {
    path: "fat-freezing/faq",
    arTitle: "الأسئلة الشائعة حول تجميد الدهون",
    en: {
      title: "Fat Freezing FAQ | Dubai Patient Questions",
      description: "Frequently asked questions about fat freezing treatment suitability, timeline, comfort, and pricing.",
      h1: "Fat Freezing FAQ",
      intro: [
        "This FAQ focuses on the questions patients ask most often before booking cryolipolysis treatment in Dubai.",
        "The answers are designed to support informed decisions and realistic expectations, not to promote exaggerated claims.",
        "If your case has specific medical considerations, the correct next step is a direct consultation."
      ],
      sections: [
        {
          title: "Treatment suitability",
          paragraphs: [
            "Cryolipolysis is intended for localized contouring. It is not a replacement for broad weight-loss treatment.",
            "Suitability is always confirmed after assessing area profile, goals, and relevant medical history."
          ]
        },
        {
          title: "Session planning and comfort",
          paragraphs: [
            "Session count depends on area and response timeline; it is not identical for every patient.",
            "Most patients tolerate sessions well with temporary post-treatment sensations that are discussed before booking."
          ]
        },
        {
          title: "Price and next steps",
          paragraphs: [
            "Entry pricing can start from AED 489, while final recommendations depend on area and cycle planning.",
            "Use consultation to align budget with realistic treatment priorities."
          ]
        }
      ],
      faq: [
        {
          question: "How long does one session take?",
          answer: "Session duration varies by area and protocol, with full appointment timing confirmed during planning."
        },
        {
          question: "Can I combine fat freezing with other treatments?",
          answer: "In selected cases, supportive treatments may be discussed after consultation and suitability review."
        },
        {
          question: "Is downtime required?",
          answer: "Most patients return to routine activity quickly, though mild temporary effects are possible."
        }
      ],
      internalLinks: [
        {href: "/faq", label: "Site-wide FAQ"},
        {href: "/fat-freezing/how-it-works", label: "How treatment works"},
        {href: "/fat-freezing/pricing", label: "Fat Freezing pricing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Still have specific questions?",
      ctaDescription: "Book a consultation and get direct answers based on your treatment goals."
    }
  },
  {
    path: "fat-freezing/consultation",
    arTitle: "استشارة تجميد الدهون",
    en: {
      title: "Fat Freezing Consultation in Dubai",
      description: "What to expect during consultation, suitability review, and treatment planning before any cryolipolysis session.",
      h1: "Fat Freezing Consultation",
      intro: [
        "Consultation is the most important part of a safe, high-quality fat freezing journey. It aligns clinical suitability with your practical goals.",
        "During this appointment, the clinician reviews target areas, treatment expectations, and any contraindications before suggesting cycles.",
        "This process keeps decisions transparent and reduces the risk of unrealistic package selection."
      ],
      sections: [
        {
          title: "What happens in consultation",
          paragraphs: [
            "You discuss target areas, expected timeline, and any concerns about comfort or recovery.",
            "Area mapping and treatment sequencing are then planned around realistic priorities."
          ],
          bullets: ["Suitability screening", "Area review", "Cycle planning", "Pricing clarity"]
        },
        {
          title: "Questions to ask your clinician",
          paragraphs: [
            "Ask how outcomes are measured, when follow-up happens, and what side effects are considered normal.",
            "This helps you compare clinics based on quality of planning, not just headline offers."
          ]
        },
        {
          title: "After consultation",
          paragraphs: [
            "You can choose to proceed with treatment booking or take time to review options.",
            "A consultation-first model should always support informed consent and clear next steps."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/book", label: "Book consultation"},
        {href: "/fat-freezing/pricing", label: "Review pricing factors"},
        {href: "/fat-freezing/safety-side-effects", label: "Safety and side effects"},
        {href: "/fat-freezing", label: "Fat Freezing hub"}
      ],
      ctaTitle: "Ready for a consultation-first plan?",
      ctaDescription: "Book now and review your treatment pathway with clear clinical guidance."
    }
  },
  {
    path: "fat-freezing/ultrasound-cavitation",
    arTitle: "تجميد الدهون مع الألتراساوند كافيتيشن",
    en: {
      title: "Fat Freezing + Ultrasound Cavitation",
      description: "How ultrasound cavitation can be used as a supportive option alongside fat freezing when clinically suitable.",
      h1: "Fat Freezing with Ultrasound Cavitation",
      intro: [
        "Ultrasound cavitation is sometimes discussed as a supportive pathway after fat freezing in suitable cases.",
        "The aim is not to replace cryolipolysis, but to support contour strategy where a staged combined plan is clinically appropriate.",
        "Combination planning should always follow consultation findings and realistic timeline expectations."
      ],
      sections: [
        {
          title: "How these treatments differ",
          paragraphs: [
            "Fat freezing uses controlled cooling for localized fat reduction planning.",
            "Ultrasound cavitation uses a different mechanism and may be considered as a complementary modality."
          ]
        },
        {
          title: "When combination may be discussed",
          paragraphs: [
            "Combination planning is usually considered when contour goals require staged support over time.",
            "A clinician should define sequencing, review points, and expected progression clearly."
          ]
        },
        {
          title: "Consultation-first combined protocol",
          paragraphs: [
            "The combined approach should include treatment sequencing, cost transparency, and safety review.",
            "Outcomes vary and should be evaluated with structured follow-up milestones."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/ultrasound-cavitation", label: "Ultrasound Cavitation hub"},
        {href: "/fat-freezing/ultrasound-cavitation/how-it-enhances-results", label: "How it may enhance outcomes"},
        {href: "/fat-freezing/ultrasound-cavitation/combined-plan", label: "Combined plan details"},
        {href: "/book?mode=treatment&treatment=ultrasound-cavitation", label: "Book treatment"}
      ],
      ctaTitle: "Explore a combined contour pathway",
      ctaDescription: "Book consultation to discuss if a fat freezing + cavitation plan fits your goals."
    }
  },
  {
    path: "fat-freezing/ultrasound-cavitation/how-it-enhances-results",
    arTitle: "كيف يدعم الألتراساوند نتائج تجميد الدهون",
    en: {
      title: "How Ultrasound Cavitation May Enhance Fat Freezing Plans",
      description: "Clinical guidance on where cavitation may support fat-freezing contour pathways in selected cases.",
      h1: "How Cavitation Can Support Fat Freezing Planning",
      intro: [
        "In selected patient profiles, cavitation may be included after fat freezing as part of a broader contour management strategy.",
        "The objective is to support shape refinement and treatment continuity between review milestones.",
        "This approach requires clear sequencing and realistic communication."
      ],
      sections: [
        {
          title: "Role in staged treatment plans",
          paragraphs: [
            "Cavitation can be considered when the clinician identifies a benefit in phased contour support.",
            "The plan should outline session frequency and review checkpoints before commitment."
          ]
        },
        {
          title: "Expectation management",
          paragraphs: [
            "Combination plans are not shortcuts to guaranteed outcomes.",
            "Success is assessed through baseline comparison and clinical follow-up."
          ]
        },
        {
          title: "Safety and candidacy",
          paragraphs: [
            "Suitability for combined treatments is confirmed during consultation and may vary by area.",
            "Any protocol should include aftercare guidance and clear escalation instructions."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/fat-freezing/ultrasound-cavitation", label: "Parent combination page"},
        {href: "/ultrasound-cavitation/with-fat-freezing", label: "Ultrasound with fat freezing"},
        {href: "/fat-freezing/results-timeline", label: "Results timeline"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Need a staged protocol recommendation?",
      ctaDescription: "Book consultation to assess whether cavitation support makes sense for your contour plan."
    }
  },
  {
    path: "fat-freezing/ultrasound-cavitation/combined-plan",
    arTitle: "خطة الدمج بين تجميد الدهون والكافيتيشن",
    en: {
      title: "Combined Plan: Fat Freezing + Cavitation",
      description: "Combined-plan framework covering sequence, timeline, and pricing transparency.",
      h1: "Combined Plan: Fat Freezing and Cavitation",
      intro: [
        "A combined plan should define sequence, treatment frequency, and review windows before sessions begin.",
        "The value of combination treatment comes from structured planning, not from adding sessions without clear objectives.",
        "Each step should be tied to suitability and realistic progression."
      ],
      sections: [
        {
          title: "Phase-by-phase approach",
          paragraphs: [
            "Most combined plans start with consultation-led area prioritisation and baseline photography.",
            "Sessions are then scheduled in a sequence that supports measurable review milestones."
          ],
          bullets: ["Baseline review", "Session sequencing", "Progress checkpoints", "Plan adjustment if needed"]
        },
        {
          title: "Cost and package clarity",
          paragraphs: [
            "Combined plans should include transparent package logic and clear inclusions.",
            "Patients should understand what each phase is intended to achieve."
          ]
        },
        {
          title: "Decision points",
          paragraphs: [
            "Protocol decisions should be made at review points, not fixed blindly in advance.",
            "This protects both patient safety and treatment value."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/pricing", label: "Main pricing"},
        {href: "/ultrasound-cavitation/pricing", label: "Ultrasound pricing"},
        {href: "/fat-freezing/pricing", label: "Fat freezing pricing"},
        {href: "/book?mode=treatment&treatment=ultrasound-cavitation", label: "Book treatment"}
      ],
      ctaTitle: "Build your combined plan with a clinician",
      ctaDescription: "Book consultation for a structured and realistic contour protocol."
    }
  },
  {
    path: "fat-freezing/radiofrequency",
    arTitle: "تجميد الدهون مع الراديو فريكونسي",
    en: {
      title: "Fat Freezing + Radiofrequency",
      description: "How radiofrequency can support skin-tightening goals around fat-freezing plans in selected profiles.",
      h1: "Fat Freezing with Radiofrequency",
      intro: [
        "Radiofrequency is often discussed when patients are concerned about skin tightness while planning fat-freezing treatment.",
        "The two modalities have different objectives: cryolipolysis focuses on localized fat, while radiofrequency is used for skin-quality support.",
        "Combined planning should be clinical, staged, and transparent."
      ],
      sections: [
        {
          title: "Different goals, coordinated plan",
          paragraphs: [
            "Fat-freezing sessions and radiofrequency sessions are coordinated based on review milestones.",
            "This avoids overloading treatment and keeps response monitoring clear."
          ]
        },
        {
          title: "Who may benefit from combination",
          paragraphs: [
            "Patients with contour goals and skin-quality concerns may discuss RF support in consultation.",
            "Suitability and session sequencing are individualized."
          ]
        },
        {
          title: "Communication and expectations",
          paragraphs: [
            "No combined treatment should promise guaranteed outcomes.",
            "Results vary and should be reviewed over a structured timeline."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/radiofrequency", label: "Radiofrequency hub"},
        {href: "/fat-freezing/radiofrequency/combined-plan", label: "Combined plan"},
        {href: "/fat-freezing/radiofrequency/skin-tightening-vs-fat-reduction", label: "Skin tightening vs fat reduction"},
        {href: "/book?mode=treatment&treatment=radiofrequency", label: "Book treatment"}
      ],
      ctaTitle: "Discuss skin-tightening support with your contour plan",
      ctaDescription: "Book consultation for a medically guided fat-freezing + RF strategy."
    }
  },
  {
    path: "fat-freezing/radiofrequency/skin-tightening-vs-fat-reduction",
    arTitle: "شد البشرة مقابل تقليل الدهون: الفرق",
    en: {
      title: "Skin Tightening vs Fat Reduction: RF and Cryolipolysis",
      description: "Understand the difference between skin-tightening and fat-reduction goals for better treatment planning.",
      h1: "Skin Tightening vs Fat Reduction",
      intro: [
        "Patients often combine these terms, but skin tightening and fat reduction are not the same treatment objective.",
        "Cryolipolysis targets localized fat. Radiofrequency supports skin quality and tightening in selected treatment plans.",
        "A clear distinction helps build realistic, goal-based protocols."
      ],
      sections: [
        {
          title: "What cryolipolysis addresses",
          paragraphs: [
            "Fat freezing is used for stubborn fat pockets and contour changes in suitable areas.",
            "It is not designed as a skin-tightening procedure."
          ]
        },
        {
          title: "What radiofrequency addresses",
          paragraphs: [
            "RF is discussed for skin texture and tightening support in selected cases.",
            "Its role is complementary when consultation confirms benefit."
          ]
        },
        {
          title: "How to choose correctly",
          paragraphs: [
            "Your primary concern determines the treatment sequence and package choice.",
            "Consultation is essential to avoid mismatched expectations."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/fat-freezing/radiofrequency", label: "Fat Freezing + RF"},
        {href: "/radiofrequency/skin-tightening", label: "RF skin-tightening page"},
        {href: "/fat-freezing/how-it-works", label: "Fat freezing fundamentals"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Clarify your goal before booking",
      ctaDescription: "Book consultation to map whether fat reduction, skin tightening, or both are appropriate."
    }
  },
  {
    path: "fat-freezing/radiofrequency/combined-plan",
    arTitle: "خطة الدمج بين تجميد الدهون والراديو فريكونسي",
    en: {
      title: "Combined Plan: Fat Freezing + Radiofrequency",
      description: "Practical framework for combining cryolipolysis and RF with a consultation-first sequence.",
      h1: "Combined Plan: Fat Freezing and RF",
      intro: [
        "A combined plan should be structured around treatment objectives, response checkpoints, and realistic timelines.",
        "The sequence is usually decided in consultation after area assessment and discussion of expected progression.",
        "Transparent planning keeps both safety and value aligned."
      ],
      sections: [
        {
          title: "Designing the protocol",
          paragraphs: [
            "The clinician defines which modality starts first and when reviews occur.",
            "This avoids unnecessary sessions and improves decision quality."
          ],
          bullets: ["Goal mapping", "Treatment sequence", "Review checkpoints", "Adjustment strategy"]
        },
        {
          title: "Timeline expectations",
          paragraphs: [
            "Combined protocols still require gradual follow-up and cannot be judged instantly.",
            "Expectation management is critical to patient confidence and satisfaction."
          ]
        },
        {
          title: "Pricing and package scope",
          paragraphs: [
            "Package clarity should define which sessions are included and why.",
            "Patients should never be pushed into add-ons without clear clinical reasoning."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/radiofrequency/pricing", label: "RF pricing"},
        {href: "/fat-freezing/pricing", label: "Fat freezing pricing"},
        {href: "/pricing", label: "Master pricing page"},
        {href: "/book?mode=treatment&treatment=radiofrequency", label: "Book treatment"}
      ],
      ctaTitle: "Plan your combined RF + cryolipolysis pathway",
      ctaDescription: "Book consultation to build a realistic, staged protocol."
    }
  },
  {
    path: "ultrasound-cavitation",
    arTitle: "الألتراساوند كافيتيشن في دبي",
    en: {
      title: "Ultrasound Cavitation Dubai",
      description: "Standalone ultrasound cavitation page with suitability, pricing, timeline, and FAQ guidance.",
      h1: "Ultrasound Cavitation in Dubai",
      intro: [
        "Ultrasound cavitation is offered as a non-surgical body-contouring option and can be booked as a standalone treatment in suitable profiles.",
        "It may also be discussed as part of combined contour strategies where consultation indicates clinical value.",
        "Every plan should begin with suitability review and transparent timeline expectations."
      ],
      sections: [
        {
          title: "What ultrasound cavitation does",
          paragraphs: [
            "Cavitation is used for body-contouring support and should be planned around realistic goals.",
            "It is not a replacement for broad medical weight-loss treatment."
          ]
        },
        {
          title: "Session planning",
          paragraphs: [
            "Session count depends on area and response. Package planning should be review-based, not fixed by pressure.",
            "Many clinics offer both single-session and six-session pathways."
          ]
        },
        {
          title: "How this fits with fat freezing",
          paragraphs: [
            "Some patients discuss cavitation as a follow-up support path after fat freezing.",
            "The combined approach must be clinically justified and clearly sequenced."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/ultrasound-cavitation/how-it-works", label: "How cavitation works"},
        {href: "/ultrasound-cavitation/pricing", label: "Cavitation pricing"},
        {href: "/ultrasound-cavitation/with-fat-freezing", label: "With fat freezing"},
        {href: "/book?mode=treatment&treatment=ultrasound-cavitation", label: "Book treatment"}
      ],
      ctaTitle: "Book an ultrasound suitability consultation",
      ctaDescription: "Review area goals, package options, and realistic milestones before you start."
    }
  },
  {
    path: "ultrasound-cavitation/how-it-works",
    arTitle: "كيف يعمل الألتراساوند كافيتيشن",
    en: {
      title: "How Ultrasound Cavitation Works",
      description: "Clinical overview of cavitation mechanism, session flow, and realistic use cases.",
      h1: "How Ultrasound Cavitation Works",
      intro: [
        "Ultrasound cavitation uses a distinct non-surgical mechanism to support body contouring plans in selected areas.",
        "Treatment sessions are scheduled according to area needs and reviewed over time for realistic progression.",
        "A structured protocol is essential for safe and transparent planning."
      ],
      sections: [
        {
          title: "Consultation and area planning",
          paragraphs: [
            "Candidacy and area profile are reviewed before sessions are recommended.",
            "This ensures the treatment plan is aligned with practical goals and timeline."
          ]
        },
        {
          title: "Session experience",
          paragraphs: [
            "Most sessions are straightforward and designed for non-surgical contour support.",
            "The clinic should explain expected progression and post-session guidance clearly."
          ]
        },
        {
          title: "Follow-up strategy",
          paragraphs: [
            "Progress is assessed across defined review windows rather than immediate day-to-day comparison.",
            "Plan changes are made according to response, not assumptions."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/ultrasound-cavitation", label: "Ultrasound parent page"},
        {href: "/ultrasound-cavitation/results", label: "Results expectations"},
        {href: "/ultrasound-cavitation/pricing", label: "Pricing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Understand your cavitation session plan",
      ctaDescription: "Book consultation for transparent protocol and outcome guidance."
    }
  },
  {
    path: "ultrasound-cavitation/areas-treated",
    arTitle: "مناطق علاج الألتراساوند كافيتيشن",
    en: {
      title: "Ultrasound Cavitation Areas Treated",
      description: "Area-by-area guidance for cavitation planning and suitability in Dubai.",
      h1: "Areas Treated with Ultrasound Cavitation",
      intro: [
        "Ultrasound cavitation can be discussed for multiple body areas depending on contour goals and tissue profile.",
        "Area prioritisation is important for practical planning and cost control.",
        "Consultation determines where this modality is most appropriate."
      ],
      sections: [
        {
          title: "Common treatment zones",
          paragraphs: [
            "Patients often ask about abdomen, flanks, and thighs when planning cavitation.",
            "Area suitability and expected response vary across body zones."
          ],
          bullets: ["Abdomen", "Flanks", "Thighs", "Arms"]
        },
        {
          title: "How area affects package planning",
          paragraphs: [
            "Larger or multi-zone goals usually require staged plans and clear review points.",
            "The right strategy balances value, comfort, and progression tracking."
          ]
        },
        {
          title: "When to combine with other treatments",
          paragraphs: [
            "Some plans include fat freezing or RF depending on goal hierarchy.",
            "Combined plans should always be consultation-led."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/body-areas", label: "Body areas hub"},
        {href: "/ultrasound-cavitation/pricing", label: "Ultrasound pricing"},
        {href: "/ultrasound-cavitation/with-fat-freezing", label: "With fat freezing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Find the best area strategy for cavitation",
      ctaDescription: "Book consultation for area-level planning and realistic timelines."
    }
  },
  {
    path: "ultrasound-cavitation/results",
    arTitle: "نتائج الألتراساوند كافيتيشن",
    en: {
      title: "Ultrasound Cavitation Results Timeline",
      description: "Expected timeline and realistic outcome framework for cavitation treatment.",
      h1: "Ultrasound Cavitation Results",
      intro: [
        "Cavitation outcomes are evaluated over a planned timeline, not as immediate guaranteed change.",
        "The strongest progress tracking combines consistent photos, session notes, and clinician review.",
        "Results vary by area, baseline profile, and treatment adherence."
      ],
      sections: [
        {
          title: "Early phase expectations",
          paragraphs: [
            "Patients are advised to track progress over structured intervals rather than daily checks.",
            "This improves decision quality and reduces expectation mismatch."
          ]
        },
        {
          title: "Mid-plan review points",
          paragraphs: [
            "Clinicians assess visible contour progression and decide whether to maintain or adjust plan frequency.",
            "These checkpoints are essential for transparent treatment planning."
          ]
        },
        {
          title: "Longer-term planning",
          paragraphs: [
            "Some patients may move to maintenance planning depending on outcome and goals.",
            "A consultation-first clinic provides clear next-step options without pressure."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/results", label: "Main results page"},
        {href: "/ultrasound-cavitation/how-it-works", label: "How it works"},
        {href: "/ultrasound-cavitation/pricing", label: "Pricing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Get a realistic cavitation results roadmap",
      ctaDescription: "Book consultation for milestones and objective progress tracking."
    }
  },
  {
    path: "ultrasound-cavitation/pricing",
    arTitle: "أسعار الألتراساوند كافيتيشن",
    en: {
      title: "Ultrasound Cavitation Pricing Dubai",
      description: "Session pricing and package guidance for ultrasound cavitation in Dubai.",
      h1: "Ultrasound Cavitation Pricing",
      intro: [
        "Ultrasound cavitation is commonly offered from AED 450 per session, with package options for multi-session planning.",
        "Pricing transparency should explain what is included in each package and when a six-session pathway is appropriate.",
        "Consultation keeps package selection aligned with realistic goals."
      ],
      sections: [
        {
          title: "Single session vs package",
          paragraphs: [
            "Single sessions can suit trial planning, while package options are often chosen for staged contour goals.",
            "The right choice depends on area profile and expected timeline."
          ]
        },
        {
          title: "How to compare offers",
          paragraphs: [
            "Compare based on protocol quality, review process, and inclusion clarity.",
            "Lowest price alone is not the best clinical decision metric."
          ]
        },
        {
          title: "Booking pathway",
          paragraphs: [
            "You can request consultation mode first or book treatment mode directly from the booking page.",
            "All recommendations remain subject to suitability review."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/pricing", label: "Master pricing page"},
        {href: "/ultrasound-cavitation", label: "Ultrasound parent page"},
        {href: "/book?mode=treatment&treatment=ultrasound-cavitation", label: "Book treatment"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Review cavitation package options with clarity",
      ctaDescription: "Book consultation and choose the right package for your contour plan."
    }
  },
  {
    path: "ultrasound-cavitation/faq",
    arTitle: "الأسئلة الشائعة عن الألتراساوند كافيتيشن",
    en: {
      title: "Ultrasound Cavitation FAQ",
      description: "Frequently asked questions on cavitation suitability, timeline, and package planning.",
      h1: "Ultrasound Cavitation FAQ",
      intro: [
        "This FAQ answers the most common cavitation questions in a clinical, compliance-safe format.",
        "The focus is suitability, timeline, pricing transparency, and responsible expectation setting.",
        "For case-specific guidance, consultation remains essential."
      ],
      sections: [
        {
          title: "Suitability and planning",
          paragraphs: [
            "Not all body profiles should follow the same protocol. Consultation defines candidacy and sequence.",
            "Packages should match realistic goals and review milestones."
          ]
        },
        {
          title: "Comfort and routine",
          paragraphs: [
            "Most patients continue normal routine after sessions, depending on individual response.",
            "Any unusual symptoms should be reviewed directly with the clinic."
          ]
        },
        {
          title: "Costs and combined pathways",
          paragraphs: [
            "Cavitation may be standalone or part of combined contour planning with other modalities.",
            "Combined plans must always be consultation-led."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/faq", label: "Site-wide FAQ"},
        {href: "/ultrasound-cavitation/pricing", label: "Pricing"},
        {href: "/ultrasound-cavitation/with-fat-freezing", label: "With fat freezing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Need a direct answer for your case?",
      ctaDescription: "Book consultation for personalised cavitation guidance."
    }
  },
  {
    path: "ultrasound-cavitation/with-fat-freezing",
    arTitle: "الألتراساوند مع تجميد الدهون",
    en: {
      title: "Ultrasound Cavitation with Fat Freezing",
      description: "How cavitation may be integrated with fat-freezing plans while keeping realistic milestones.",
      h1: "Ultrasound Cavitation with Fat Freezing",
      intro: [
        "This page explains how cavitation can be paired with fat freezing in selected body contour plans.",
        "Combination planning should be staged, measurable, and clinically justified.",
        "The safest pathway starts with consultation and clear treatment sequencing."
      ],
      sections: [
        {
          title: "Why pair treatments",
          paragraphs: [
            "Different modalities can target different parts of the contouring objective.",
            "Pairing should only be used when it improves plan quality for the individual profile."
          ]
        },
        {
          title: "Sequencing",
          paragraphs: [
            "Treatment order and intervals matter for realistic monitoring and comfort.",
            "A clinician-led schedule helps avoid confusion and overtreatment."
          ]
        },
        {
          title: "Measurement and review",
          paragraphs: [
            "Progress should be reviewed with consistent criteria and time windows.",
            "Results vary and should not be framed as guaranteed."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/fat-freezing/ultrasound-cavitation", label: "Fat Freezing + Cavitation hub"},
        {href: "/fat-freezing/ultrasound-cavitation/combined-plan", label: "Combined plan details"},
        {href: "/ultrasound-cavitation", label: "Ultrasound parent"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Discuss if combined planning is right for you",
      ctaDescription: "Book consultation for treatment sequencing and suitability review."
    }
  },
  {
    path: "radiofrequency",
    arTitle: "علاج الراديو فريكونسي في دبي",
    en: {
      title: "Radiofrequency Tightening Dubai",
      description: "Standalone radiofrequency treatment page covering skin-tightening support, planning, and pricing.",
      h1: "Radiofrequency Tightening in Dubai",
      intro: [
        "Radiofrequency is used for skin-quality and tightening support in body-contouring pathways.",
        "It can be booked as a standalone treatment or considered in combination with fat freezing where suitable.",
        "Every plan should be consultation-led and framed with realistic expectations."
      ],
      sections: [
        {
          title: "What RF targets",
          paragraphs: [
            "RF treatment is typically discussed for skin texture and tightening support.",
            "It does not replace fat-reduction modalities when localized fat is the primary concern."
          ]
        },
        {
          title: "Session planning and comfort",
          paragraphs: [
            "Session frequency depends on goals and review findings.",
            "A structured plan improves consistency and expectation clarity."
          ]
        },
        {
          title: "How RF fits into contour plans",
          paragraphs: [
            "RF can be integrated into broader contour planning when clinical rationale is clear.",
            "Combined pathways should include transparent package and timeline guidance."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/radiofrequency/how-it-works", label: "How RF works"},
        {href: "/radiofrequency/pricing", label: "RF pricing"},
        {href: "/radiofrequency/with-fat-freezing", label: "RF with fat freezing"},
        {href: "/book?mode=treatment&treatment=radiofrequency", label: "Book treatment"}
      ],
      ctaTitle: "Book a consultation for RF suitability",
      ctaDescription: "Review whether standalone RF or a combined contour plan is more appropriate for your goals."
    }
  },
  {
    path: "radiofrequency/how-it-works",
    arTitle: "كيف يعمل الراديو فريكونسي",
    en: {
      title: "How Radiofrequency Works",
      description: "Clinical explanation of RF treatment mechanism, session planning, and practical expectations.",
      h1: "How Radiofrequency Works",
      intro: [
        "Radiofrequency treatment is planned to support skin tightening and contour refinement in selected cases.",
        "A consultation review determines candidacy, target zone, and session schedule.",
        "Treatment should always be discussed with realistic expectations and no guaranteed claims."
      ],
      sections: [
        {
          title: "Mechanism and treatment objective",
          paragraphs: [
            "RF uses controlled energy delivery to support skin-quality goals in body-contouring pathways.",
            "The objective is different from direct fat reduction methods."
          ]
        },
        {
          title: "Session process",
          paragraphs: [
            "Appointments are planned around area-specific objectives and review milestones.",
            "Post-session guidance should be simple, clear, and documented."
          ]
        },
        {
          title: "Timeline and review",
          paragraphs: [
            "Progress is evaluated over a sequence of sessions with clinical check-ins.",
            "Adjustments are made based on response."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/radiofrequency", label: "RF parent page"},
        {href: "/radiofrequency/skin-tightening", label: "Skin-tightening goals"},
        {href: "/radiofrequency/pricing", label: "Pricing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Need clarity on RF suitability?",
      ctaDescription: "Book consultation and get a realistic, area-specific RF plan."
    }
  },
  {
    path: "radiofrequency/skin-tightening",
    arTitle: "شد البشرة بالراديو فريكونسي",
    en: {
      title: "Radiofrequency for Skin Tightening",
      description: "Skin-tightening focus page for RF treatment planning and expectation management.",
      h1: "Radiofrequency for Skin Tightening",
      intro: [
        "RF is commonly selected when skin-tightening support is a central contouring goal.",
        "Planning should define where RF adds value and when fat-reduction modalities are more relevant.",
        "Consultation keeps treatment decisions aligned with your primary objective."
      ],
      sections: [
        {
          title: "When skin tightening is the priority",
          paragraphs: [
            "RF may be appropriate for patients focused on skin-quality and firmness support.",
            "The plan should include realistic timeline communication and review points."
          ]
        },
        {
          title: "How to combine with contour strategy",
          paragraphs: [
            "Some patients combine RF with other treatments in staged protocols.",
            "Combined planning should always be clinician-led and outcome-tracked."
          ]
        },
        {
          title: "Setting realistic expectations",
          paragraphs: [
            "No treatment should be sold with guaranteed claims.",
            "Patient confidence improves when clinics communicate uncertainty clearly."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/radiofrequency/body-contouring", label: "RF for body contouring"},
        {href: "/fat-freezing/radiofrequency", label: "RF with fat freezing"},
        {href: "/radiofrequency/pricing", label: "Pricing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Discuss RF as a skin-quality pathway",
      ctaDescription: "Book consultation for an objective skin-tightening treatment review."
    }
  },
  {
    path: "radiofrequency/body-contouring",
    arTitle: "الراديو فريكونسي لنحت القوام",
    en: {
      title: "Radiofrequency for Body Contouring",
      description: "RF body-contouring support page with planning guidance and practical treatment structure.",
      h1: "Radiofrequency for Body Contouring",
      intro: [
        "RF can support body-contouring plans where skin-quality goals are part of the overall objective.",
        "It should be positioned as a support modality and planned with transparent milestones.",
        "Consultation determines the right balance between RF and other treatment pathways."
      ],
      sections: [
        {
          title: "How RF fits contour goals",
          paragraphs: [
            "RF can be discussed for contour support where skin appearance is a concern.",
            "It is not a direct replacement for fat reduction treatment when localized fat is primary."
          ]
        },
        {
          title: "Clinical planning framework",
          paragraphs: [
            "Area prioritisation, session intervals, and progress tracking should be defined before treatment starts.",
            "This prevents unclear protocols and improves consistency."
          ]
        },
        {
          title: "When to review or adapt",
          paragraphs: [
            "Plans should be reviewed at fixed checkpoints and adapted based on response.",
            "A consultation-first clinic explains this process upfront."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/radiofrequency", label: "RF parent page"},
        {href: "/radiofrequency/skin-tightening", label: "Skin-tightening pathway"},
        {href: "/radiofrequency/with-fat-freezing", label: "With fat freezing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Build a contour plan around your real priorities",
      ctaDescription: "Book consultation for a clear and staged RF contour strategy."
    }
  },
  {
    path: "radiofrequency/pricing",
    arTitle: "أسعار الراديو فريكونسي",
    en: {
      title: "Radiofrequency Pricing Dubai",
      description: "Radiofrequency pricing guidance including single sessions and six-session offers.",
      h1: "Radiofrequency Pricing",
      intro: [
        "RF sessions are commonly offered from AED 450 per session, with six-session options available in many treatment plans.",
        "Transparent pricing should clarify package inclusions, review points, and expected sequencing.",
        "Consultation helps you choose between single-session and package options responsibly."
      ],
      sections: [
        {
          title: "Single session vs package planning",
          paragraphs: [
            "Single sessions can be useful for selective goals, while packages are often chosen for staged protocols.",
            "The right choice depends on area needs and objective timeline."
          ]
        },
        {
          title: "Price clarity",
          paragraphs: [
            "Compare offers based on clinical process and follow-up structure, not just headline discount.",
            "Clear communication protects patient trust."
          ]
        },
        {
          title: "Booking mode options",
          paragraphs: [
            "The booking flow supports both consultation mode and treatment mode for RF pathways.",
            "All treatment starts remain subject to suitability review."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/pricing", label: "Master pricing page"},
        {href: "/radiofrequency", label: "RF parent page"},
        {href: "/book?mode=treatment&treatment=radiofrequency", label: "Book treatment"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Compare RF options with transparent guidance",
      ctaDescription: "Book consultation to choose the best-fit RF package for your plan."
    }
  },
  {
    path: "radiofrequency/faq",
    arTitle: "الأسئلة الشائعة عن الراديو فريكونسي",
    en: {
      title: "Radiofrequency FAQ",
      description: "Frequently asked questions about RF suitability, pricing, and treatment planning.",
      h1: "Radiofrequency FAQ",
      intro: [
        "This RF FAQ covers common patient questions on candidacy, timeline, and package structure.",
        "Answers are designed to support informed planning and realistic expectations.",
        "Consultation remains necessary for case-specific decisions."
      ],
      sections: [
        {
          title: "Suitability",
          paragraphs: [
            "RF suitability depends on treatment goals, skin profile, and review findings.",
            "Consultation ensures protocol quality and safety alignment."
          ]
        },
        {
          title: "Timeline",
          paragraphs: [
            "Outcomes are reviewed over sessions and checkpoints, not guaranteed instantly.",
            "Consistent follow-up supports better decision-making."
          ]
        },
        {
          title: "Packages",
          paragraphs: [
            "Single and six-session options are available depending on plan structure.",
            "Clinics should explain package logic transparently."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/faq", label: "Site-wide FAQ"},
        {href: "/radiofrequency/pricing", label: "RF pricing"},
        {href: "/radiofrequency/with-fat-freezing", label: "RF with fat freezing"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Need personalised RF answers?",
      ctaDescription: "Book consultation to discuss your goals with a clinician."
    }
  },
  {
    path: "radiofrequency/with-fat-freezing",
    arTitle: "الراديو فريكونسي مع تجميد الدهون",
    en: {
      title: "Radiofrequency with Fat Freezing",
      description: "How RF may be integrated with fat-freezing plans for selected contour pathways.",
      h1: "Radiofrequency with Fat Freezing",
      intro: [
        "RF can be paired with fat freezing when treatment goals include both contour and skin-quality support.",
        "This combination should be staged and monitored through planned checkpoints.",
        "The treatment path must stay consultation-led and expectation-managed."
      ],
      sections: [
        {
          title: "Combined objective framework",
          paragraphs: [
            "Fat reduction and skin-quality goals are mapped separately, then sequenced into one plan.",
            "This prevents mixed expectations and improves protocol clarity."
          ]
        },
        {
          title: "Review timeline",
          paragraphs: [
            "Combination outcomes are reviewed across consistent time windows.",
            "Plan updates are response-driven and individualized."
          ]
        },
        {
          title: "Safety and communication",
          paragraphs: [
            "Patients should receive clear guidance on what to monitor and when to request review.",
            "Results vary and should always be communicated responsibly."
          ]
        }
      ],
      faq: COMMON_FAQ_EN,
      internalLinks: [
        {href: "/fat-freezing/radiofrequency", label: "Fat Freezing + RF hub"},
        {href: "/fat-freezing/radiofrequency/combined-plan", label: "Combined plan details"},
        {href: "/radiofrequency", label: "RF parent page"},
        {href: "/book", label: "Book consultation"}
      ],
      ctaTitle: "Plan your combined RF + fat-freezing strategy",
      ctaDescription: "Book consultation for sequencing and suitability review."
    }
  }
];

export const CLUSTER_PAGES: Record<ClusterPath, LocalizedClusterPage> = seeds.reduce((acc, seed) => {
  acc[seed.path] = {
    en: seed.en,
    ar: buildArabicVersion(seed.en, seed.arTitle)
  };
  return acc;
}, {} as Record<ClusterPath, LocalizedClusterPage>);

export const FAT_FREEZING_CHILDREN = [
  "how-it-works",
  "areas-treated",
  "results-timeline",
  "pricing",
  "safety-side-effects",
  "before-after",
  "faq",
  "consultation",
  "ultrasound-cavitation",
  "ultrasound-cavitation/how-it-enhances-results",
  "ultrasound-cavitation/combined-plan",
  "radiofrequency",
  "radiofrequency/skin-tightening-vs-fat-reduction",
  "radiofrequency/combined-plan"
] as const;

export const ULTRASOUND_CHILDREN = [
  "how-it-works",
  "areas-treated",
  "results",
  "pricing",
  "faq",
  "with-fat-freezing"
] as const;

export const RADIOFREQUENCY_CHILDREN = [
  "how-it-works",
  "skin-tightening",
  "body-contouring",
  "pricing",
  "faq",
  "with-fat-freezing"
] as const;

export function getClusterPage(path: ClusterPath, locale: Locale) {
  return CLUSTER_PAGES[path][locale];
}

export function isClusterPath(path: string): path is ClusterPath {
  return path in CLUSTER_PAGES;
}
