export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

type FaqItem = {
  question: string;
  answer: string;
};

type Dictionary = {
  localeName: string;
  dir: "ltr" | "rtl";
  nav: {
    home: string;
    book: string;
    toggleLabel: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    trustLine: string;
  };
  highlights: {
    title: string;
    items: string[];
  };
  offers: {
    title: string;
    subtitle: string;
  };
  whatIs: {
    title: string;
    body: string;
  };
  howItWorks: {
    title: string;
    steps: Array<{title: string; description: string}>;
  };
  areas: {
    title: string;
    items: Array<{name: string}>;
  };
  timeline: {
    title: string;
    points: Array<{label: string; description: string}>;
  };
  booking: {
    sectionTitle: string;
    sectionSubtitle: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    next: string;
    back: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    whatsappCta: string;
    required: string;
    invalidEmail: string;
    invalidTime: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  trust: {
    hours: string;
    address: string;
    reviews: string;
    instagram: string;
  };
};

const enWhatIs = `Fat freezing, medically known as cryolipolysis, is a non-invasive treatment designed for targeted spot reduction in areas that tend to hold stubborn fat despite healthy eating and exercise. During treatment, a specialised applicator delivers controlled cooling to the selected area. Fat cells are more sensitive to cold than surrounding tissue, so the cooling process is planned to focus on those cells while protecting the skin and nearby structures. Over the following weeks, your body naturally processes and clears the affected fat cells through normal metabolic pathways.

It is important to understand that cryolipolysis is not a weight-loss treatment. It is a body contouring option for localised pockets such as the stomach, love handles, arms, chin, and thighs. Most clients start to notice progressive changes between weeks 6 and 12, with the pace depending on body composition, treatment area, and lifestyle consistency. Some people are suitable for one session, while others may need two sessions on the same area for a stronger contour result.

At our Jumeirah clinic in Dubai, every plan is led by a specialised DHA doctor (in-house trained) and begins with a free 30-minute consultation. We assess your target area, discuss realistic expectations, and explain what timeline is medically reasonable for your case. We do not guarantee outcomes, but we focus on clear treatment planning, safe protocols, and measurable follow-up so you can make an informed decision with confidence.

For best decision-making, we also explain who is less suitable for treatment and when another approach should be considered first. This medically responsible process helps clients avoid unrealistic expectations and choose timing that fits their body profile, schedule, and comfort level. The goal is a safe, structured contouring plan with transparent advice at every step.`;

const arWhatIs = `تجميد الدهون، أو الكرايو ليبوليسيس، هو إجراء غير جراحي مصمم لتقليل الدهون الموضعية في المناطق العنيدة التي لا تستجيب بسهولة للنظام الغذائي والرياضة. أثناء الجلسة يتم وضع جهاز تبريد مخصص على المنطقة المستهدفة، ويعمل التبريد المحكوم على التأثير في الخلايا الدهنية بشكل انتقائي مع الحفاظ على الجلد والأنسجة المحيطة. بعد الجلسة يبدأ الجسم بشكل طبيعي بالتخلص التدريجي من الخلايا المتأثرة عبر العمليات الحيوية المعتادة خلال الأسابيع التالية.

من المهم توضيح أن هذا العلاج ليس وسيلة لإنقاص الوزن العام، بل خيار لنحت مناطق محددة مثل البطن، الجوانب (الخواصر)، الذراعين، الذقن، والفخذين. غالبًا يبدأ ظهور الفرق بشكل تدريجي ما بين الأسبوع السادس والثاني عشر، وتختلف سرعة الاستجابة حسب طبيعة الجسم والمنطقة المعالجة والالتزام بنمط حياة متوازن. في بعض الحالات تكفي جلسة واحدة، وفي حالات أخرى قد نوصي بجلسة ثانية لنفس المنطقة للحصول على نتيجة أوضح.

في عيادتنا في جميرا بدبي، تتم الخطة العلاجية بإشراف طبيب متخصص مرخص من هيئة الصحة بدبي (بتدريب داخلي)، وتبدأ باستشارة مجانية لمدة 30 دقيقة. خلال الاستشارة نقيّم المنطقة المستهدفة، ونضع توقعات واقعية، ونشرح الجدول الزمني المناسب طبيًا لحالتك. نحن لا نقدم وعودًا مبالغًا فيها، لكننا نركز على بروتوكول آمن، وتخطيط واضح، ومتابعة دقيقة تساعدك على اتخاذ قرار واثق ومبني على معلومات صحيحة.

كما نوضح خلال التقييم من هم الأشخاص الذين قد يحتاجون إلى تأجيل العلاج أو اختيار خطة مختلفة أولًا، حتى تكون النتيجة أكثر أمانًا وواقعية. هذا الأسلوب الطبي المنظم يقلل القرارات المتسرعة، ويمنحك فهمًا واضحًا لما يمكن تحقيقه فعليًا، ومتى تظهر النتائج، وما هي أفضل خطوة تالية لحالتك. كما نتابع التحسن بصور مقارنة واضحة لضمان تقييم موضوعي ودقيق.`;

const dictionary: Record<Locale, Dictionary> = {
  en: {
    localeName: "English",
    dir: "ltr",
    nav: {
      home: "Home",
      book: "Book Free Consultation",
      toggleLabel: "Language"
    },
    hero: {
      eyebrow: "Premium Medical Aesthetics in Jumeirah, Dubai",
      heading: "Remove stubborn pockets of fat from just AED 489",
      subheading: "Non-invasive Fat Freezing (Cryolipolysis) for targeted sculpting — doctor-led, no downtime.",
      primaryCta: "Book FREE Consultation",
      secondaryCta: "Chat on WhatsApp",
      trustLine: "DHA-doctor led • Same-day slots • No downtime"
    },
    highlights: {
      title: "Why clients choose us",
      items: [
        "DHA-licensed doctor led",
        "Same-day treatments available",
        "Non-invasive, no downtime",
        "From AED 489"
      ]
    },
    offers: {
      title: "Offers on now — book your FREE consultation today",
      subtitle: "Limited same-day slots • From AED 489"
    },
    whatIs: {
      title: "What is Fat Freezing?",
      body: enWhatIs
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "1) Consultation",
          description:
            "Your goals, treatment area, and suitability are reviewed with our DHA-doctor led team before any treatment starts."
        },
        {
          title: "2) Applicator placement",
          description:
            "A specialised applicator is positioned on the target area to deliver controlled cooling where it is needed most."
        },
        {
          title: "3) Cooling cycle",
          description:
            "The cryolipolysis cycle runs under monitored settings designed to support comfort and safe treatment delivery."
        },
        {
          title: "4) Post-care guidance",
          description:
            "You receive clear aftercare advice and realistic milestones for tracking your progress after treatment."
        },
        {
          title: "5) Results over weeks",
          description:
            "The body naturally clears affected fat cells over time, with visible contour changes usually building across 6–12 weeks."
        }
      ]
    },
    areas: {
      title: "Areas We Treat",
      items: [
        {name: "Stomach"},
        {name: "Love handles"},
        {name: "Arms"},
        {name: "Chin"},
        {name: "Thighs"}
      ]
    },
    timeline: {
      title: "Results Timeline",
      points: [
        {
          label: "Day 0",
          description: "Treatment day completed with personalised aftercare guidance and next-step planning."
        },
        {
          label: "Week 2–4",
          description: "Early gradual changes may begin depending on area, metabolism, and lifestyle consistency."
        },
        {
          label: "Week 6–12",
          description: "Most clients see clearer contour improvement during this period; a second session may be advised if needed."
        }
      ]
    },
    booking: {
      sectionTitle: "Book FREE Consultation",
      sectionSubtitle: "Start with a 30-minute assessment and choose a suitable slot between 12:00 and 20:00.",
      title: "Book Free Consultation",
      subtitle: "30-min consultation slots available daily between 12:00 and 20:00.",
      step1: "Step 1: Your details",
      step2: "Step 2: Date & time",
      name: "Full name",
      phone: "Phone number",
      email: "Email",
      date: "Preferred date",
      time: "Preferred time",
      next: "Continue",
      back: "Back",
      submit: "Submit Booking",
      successTitle: "Booking received",
      successMessage: "We have saved your booking. Our team will contact you shortly.",
      whatsappCta: "Continue on WhatsApp",
      required: "Please complete all required fields.",
      invalidEmail: "Please enter a valid email address.",
      invalidTime: "Please select a time between 12:00 and 20:00."
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is fat freezing painful?",
          answer:
            "Most people describe the treatment as tolerable with temporary cold and pressure sensations at the start of the cycle."
        },
        {
          question: "Is this treatment for weight loss?",
          answer:
            "No. Fat freezing is designed for spot reduction of localised fat pockets, not for overall weight-loss management."
        },
        {
          question: "When will I see results?",
          answer:
            "Results are gradual. Early changes may appear in a few weeks, with clearer contour outcomes usually around weeks 6–12."
        },
        {
          question: "How many sessions do I need?",
          answer:
            "Some clients need one session, while others benefit from two sessions depending on the area and treatment goal."
        },
        {
          question: "Is there downtime after treatment?",
          answer:
            "It is non-invasive and most clients return to normal activities the same day, based on doctor guidance."
        },
        {
          question: "Who decides if I am suitable?",
          answer:
            "Suitability is assessed during your free consultation by our DHA-doctor led medical team."
        },
        {
          question: "Can I treat more than one area?",
          answer:
            "Yes, depending on your assessment. Our team recommends a safe sequence based on your goals and timeline."
        },
        {
          question: "Will I need maintenance later?",
          answer:
            "Some clients choose maintenance sessions over time. Frequency depends on lifestyle and individual response."
        }
      ]
    },
    finalCta: {
      title: "Ready to start your contour plan?",
      subtitle: "Book your FREE consultation today. Limited same-day slots are available.",
      button: "Book FREE Consultation"
    },
    trust: {
      hours: "Open daily: 12:00–20:00 (Dubai)",
      address: "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates",
      reviews: "Google Reviews",
      instagram: "Instagram: vivo_aesthetics_uae"
    }
  },
  ar: {
    localeName: "العربية",
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      book: "احجز استشارة مجانية",
      toggleLabel: "اللغة"
    },
    hero: {
      eyebrow: "عيادة طبية تجميلية راقية في جميرا، دبي",
      heading: "تخلّص من الدهون العنيدة ابتداءً من 489 درهم",
      subheading: "تجميد الدهون غير الجراحي (Cryolipolysis) لتقليل الدهون الموضعية في جميرا، دبي.",
      primaryCta: "احجز استشارة مجانية",
      secondaryCta: "تواصل عبر واتساب",
      trustLine: "إشراف طبيب DHA • مواعيد نفس اليوم • بدون فترة نقاهة"
    },
    highlights: {
      title: "لماذا يختارنا العملاء",
      items: [
        "خطة علاج بإشراف طبيب مرخص من DHA",
        "توفر جلسات وعلاجات في نفس اليوم",
        "إجراء غير جراحي وبدون فترة نقاهة",
        "تبدأ الأسعار من 489 درهم"
      ]
    },
    offers: {
      title: "العروض متاحة الآن — احجز استشارتك المجانية اليوم",
      subtitle: "مواعيد نفس اليوم محدودة • ابتداءً من 489 درهم"
    },
    whatIs: {
      title: "ما هو تجميد الدهون؟",
      body: arWhatIs
    },
    howItWorks: {
      title: "كيف يعمل العلاج",
      steps: [
        {
          title: "1) الاستشارة",
          description: "نراجع أهدافك والمنطقة المستهدفة ومدى ملاءمتك للعلاج قبل بدء أي جلسة."
        },
        {
          title: "2) تثبيت الجهاز",
          description: "يتم وضع جهاز مخصص على المنطقة المطلوبة لتطبيق تبريد علاجي دقيق."
        },
        {
          title: "3) دورة التبريد",
          description: "تتم الجلسة بإعدادات مراقبة طبيًا لضمان راحة العميل وتطبيق آمن."
        },
        {
          title: "4) تعليمات ما بعد الجلسة",
          description: "نقدم لك تعليمات واضحة بعد الجلسة مع نقاط متابعة واقعية لمراقبة التحسن."
        },
        {
          title: "5) تطور النتائج",
          description: "يتخلص الجسم تدريجيًا من الخلايا الدهنية خلال الأسابيع التالية، وتظهر النتائج غالبًا خلال 6–12 أسبوعًا."
        }
      ]
    },
    areas: {
      title: "المناطق التي نعالجها",
      items: [
        {name: "البطن"},
        {name: "الخواصر"},
        {name: "الذراعان"},
        {name: "الذقن"},
        {name: "الفخذان"}
      ]
    },
    timeline: {
      title: "الجدول الزمني للنتائج",
      points: [
        {
          label: "اليوم 0",
          description: "تتم الجلسة مع توضيح تعليمات ما بعد العلاج وخطة المتابعة."
        },
        {
          label: "الأسبوع 2–4",
          description: "قد تبدأ ملاحظات أولية تدريجية حسب المنطقة وطبيعة الجسم ونمط الحياة."
        },
        {
          label: "الأسبوع 6–12",
          description: "غالبًا تظهر النتائج بشكل أوضح خلال هذه الفترة، وقد ننصح بجلسة ثانية عند الحاجة."
        }
      ]
    },
    booking: {
      sectionTitle: "احجز استشارة مجانية",
      sectionSubtitle: "ابدأ بتقييم لمدة 30 دقيقة واختر موعدًا مناسبًا بين 12:00 و20:00.",
      title: "احجز استشارة مجانية",
      subtitle: "مواعيد استشارة 30 دقيقة متاحة يوميًا من 12:00 إلى 20:00.",
      step1: "الخطوة 1: بياناتك",
      step2: "الخطوة 2: التاريخ والوقت",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      date: "التاريخ المفضل",
      time: "الوقت المفضل",
      next: "متابعة",
      back: "رجوع",
      submit: "إرسال الحجز",
      successTitle: "تم استلام الحجز",
      successMessage: "تم حفظ الحجز بنجاح. سيتواصل معك فريقنا قريبًا.",
      whatsappCta: "أكمل عبر واتساب",
      required: "يرجى إكمال جميع الحقول المطلوبة.",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      invalidTime: "يرجى اختيار وقت بين 12:00 و20:00."
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "هل تجميد الدهون مؤلم؟",
          answer: "غالبًا يكون الإجراء محتملًا مع إحساس مؤقت بالبرودة والشد في بداية الجلسة."
        },
        {
          question: "هل هذا العلاج لإنقاص الوزن؟",
          answer: "لا، العلاج مخصص لتقليل الدهون الموضعية في مناطق محددة وليس لخسارة الوزن العام."
        },
        {
          question: "متى تظهر النتائج؟",
          answer: "النتائج تدريجية، وقد تبدأ ملاحظات أولية خلال أسابيع مع وضوح أكبر بين 6 و12 أسبوعًا."
        },
        {
          question: "كم جلسة أحتاج؟",
          answer: "يعتمد ذلك على المنطقة والهدف. بعض الحالات تحتاج جلسة واحدة وأخرى قد تستفيد من جلستين."
        },
        {
          question: "هل توجد فترة نقاهة؟",
          answer: "العلاج غير جراحي، ومعظم العملاء يعودون لنشاطهم اليومي في نفس اليوم حسب التوجيه الطبي."
        },
        {
          question: "من يحدد ملاءمتي للعلاج؟",
          answer: "يتم تقييم الملاءمة خلال الاستشارة المجانية بواسطة فريق طبي بإشراف طبيب DHA."
        },
        {
          question: "هل يمكن علاج أكثر من منطقة؟",
          answer: "نعم، حسب التقييم الطبي. نحدد ترتيبًا آمنًا للجلسات وفق هدفك والزمن المناسب لحالتك."
        },
        {
          question: "هل أحتاج جلسات دعم لاحقًا؟",
          answer: "بعض العملاء يفضلون جلسات دعم مستقبلًا، ويعتمد ذلك على نمط الحياة واستجابة الجسم."
        }
      ]
    },
    finalCta: {
      title: "جاهز لبدء خطة نحت الجسم؟",
      subtitle: "احجز استشارتك المجانية الآن. مواعيد نفس اليوم محدودة.",
      button: "احجز استشارة مجانية"
    },
    trust: {
      hours: "ساعات العمل يوميًا: 12:00–20:00 (دبي)",
      address: "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates",
      reviews: "تقييمات Google",
      instagram: "Instagram: vivo_aesthetics_uae"
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
