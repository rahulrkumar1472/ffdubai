export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  localeName: string;
  dir: "ltr" | "rtl";
  brand: {
    name: string;
    tagline: string;
  };
  brandLockup: {
    brandName: string;
    brandDescriptor: string;
  };
  nav: {
    home: string;
    book: string;
    toggleLabel: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    trustPills: string[];
    typewriterLines: string[];
    priceChip: string;
    consultationBadge: string;
    sameDayLine: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whatIs: {
    title: string;
    intro: string;
    sections: Array<{
      title: string;
      text: string;
    }>;
    cta: string;
  };
  areas: {
    title: string;
    lead: string;
    cardCta: string;
    popularCaption: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  };
  results: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  whyChooseUs: {
    title: string;
    lead: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  bookingJourney: {
    title: string;
    lead: string;
    stepLabel: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
    note: string;
    cta: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    reassurance: string;
    primaryCta: string;
    secondaryCta: string;
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
  trust: {
    hours: string;
    address: string;
    reviews: string;
    instagram: string;
  };
};

const dictionary: Record<Locale, Dictionary> = {
  en: {
    localeName: "English",
    dir: "ltr",
    brand: {
      name: "FAT FREEZING",
      tagline: "Dubai’s Weight Loss Centre"
    },
    brandLockup: {
      brandName: "FAT FREEZING",
      brandDescriptor: "Dubai’s Weight Loss Centre"
    },
    nav: {
      home: "Home",
      book: "Book Free Consultation",
      toggleLabel: "Language"
    },
    hero: {
      eyebrow: "Doctor-led body contouring in Jumeirah, Dubai",
      heading: "Remove stubborn fat from just AED 489",
      subheading: "Doctor-led non-invasive fat freezing for targeted body sculpting with no downtime.",
      trustPills: ["DHA licensed doctor", "Same-day appointments", "No downtime", "No surgery"],
      typewriterLines: [
        "Clinically guided cryolipolysis protocol",
        "Targeted contouring for stubborn areas",
        "Medical consultation before every plan",
        "Safe non-surgical treatment pathway"
      ],
      priceChip: "From AED 489",
      consultationBadge: "Free 30-min consultation",
      sameDayLine: "Same-day treatment available (subject to medical suitability).",
      primaryCta: "Book Free Consultation",
      secondaryCta: "Chat on WhatsApp"
    },
    whatIs: {
      title: "What Is Fat Freezing?",
      intro:
        "Fat freezing, also known as cryolipolysis, is a medical aesthetic treatment used to reduce localised fat pockets that are difficult to shift with lifestyle changes alone. It is a contouring treatment designed for shape refinement, not a replacement for overall weight-loss care.",
      sections: [
        {
          title: "How it works",
          text:
            "A specialised applicator delivers controlled cooling to a selected treatment area. Fat cells are more sensitive to cold than surrounding structures, so the protocol is calibrated to target fat while preserving skin and tissue comfort. Following treatment, the body gradually clears affected fat cells through natural metabolic processes. Each session is doctor-led, and settings are adjusted according to area, tissue thickness, and treatment tolerance."
        },
        {
          title: "What it treats",
          text:
            "Cryolipolysis is typically used for stubborn, pinchable fat around the abdomen, love handles, thighs, upper arms, and under the chin. It is most appropriate for clients who want targeted contour improvements rather than dramatic scale changes. During consultation, suitability is reviewed based on anatomy, skin quality, and clinical history. Some clients respond with one treatment cycle, while others benefit from staged sessions to achieve balanced contour outcomes."
        },
        {
          title: "When you'll see results",
          text:
            "Visible change is usually gradual. Early improvements can appear within a few weeks, while clearer contour definition is commonly seen between weeks 6 and 12. Individual response depends on treatment area, baseline body profile, and adherence to aftercare guidance. A structured follow-up helps evaluate progress with realistic expectations. This consultation-first model prioritises safety, transparency, and medically responsible planning rather than exaggerated promises."
        }
      ],
      cta: "Book Free Consultation"
    },
    areas: {
      title: "Areas We Treat",
      lead: "Targeted spot reduction zones most commonly requested in our Dubai clinic.",
      cardCta: "Book consultation",
      popularCaption: "Most popular in Dubai: stomach + love handles.",
      items: [
        {
          name: "Arms",
          description: "Refine upper-arm fullness with targeted contour reduction."
        },
        {
          name: "Chin",
          description: "Improve jawline definition in selected under-chin areas."
        },
        {
          name: "Love Handles",
          description: "Shape side contours for a cleaner waistline profile."
        },
        {
          name: "Stomach",
          description: "Address lower-abdomen pockets resistant to exercise."
        },
        {
          name: "Thighs",
          description: "Support smoother lower-body proportion and contour."
        }
      ]
    },
    results: {
      title: "Real Patient Results",
      subtitle: "Before and after outcomes from clinic cases",
      disclaimer: "Results vary. A consultation is required to confirm suitability."
    },
    whyChooseUs: {
      title: "Why Patients Choose FAT FREEZING",
      lead: "A consultation-first model focused on safety, clarity, and premium clinical care.",
      items: [
        {
          title: "Doctor-led treatment",
          description: "Every plan starts with a DHA licensed assessment and clear suitability review."
        },
        {
          title: "Consultation-first approach",
          description: "We prioritise medical eligibility and realistic expectations before treatment starts."
        },
        {
          title: "Premium clinic setting",
          description: "Comfort-focused clinical environment in Jumeirah with discreet patient handling."
        },
        {
          title: "Transparent pricing",
          description: "Clear pricing communication from consultation to follow-up, with no hidden surprises."
        },
        {
          title: "No downtime pathway",
          description: "Most clients resume routine activities quickly based on doctor guidance."
        },
        {
          title: "Verified patient feedback",
          description: "Strong review history reflecting consistent care quality and communication."
        }
      ]
    },
    bookingJourney: {
      title: "How Booking Works",
      lead: "A simple 3-step consultation funnel designed for fast, medically safe decision-making.",
      stepLabel: "Step",
      steps: [
        {
          title: "Book your free consultation",
          description: "Choose a suitable date and time directly online in under a minute."
        },
        {
          title: "We assess suitability + target areas",
          description: "Your goals and treatment zones are reviewed by the medical team."
        },
        {
          title: "Same-day treatment available",
          description: "Treatment may proceed the same day when medically suitable."
        }
      ],
      note: "Slots daily 12:00–20:00 (Dubai).",
      cta: "Book Free Consultation"
    },
    finalCta: {
      title: "Start Your Fat Reduction Journey Today",
      subtitle: "Free consultation with a doctor-led treatment assessment.",
      reassurance: "Confidential, no obligation.",
      primaryCta: "Book Free Consultation",
      secondaryCta: "Chat on WhatsApp"
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
    brand: {
      name: "FAT FREEZING",
      tagline: "مركز دبي المتخصص لنحت وخسارة الوزن"
    },
    brandLockup: {
      brandName: "FAT FREEZING",
      brandDescriptor: "مركز دبي المتخصص لنحت وخسارة الوزن"
    },
    nav: {
      home: "الرئيسية",
      book: "احجز استشارة مجانية",
      toggleLabel: "اللغة"
    },
    hero: {
      eyebrow: "نحت الجسم بإشراف طبي في جميرا، دبي",
      heading: "تخلّص من الدهون العنيدة ابتداءً من 489 درهم",
      subheading: "تجميد دهون غير جراحي بإشراف طبيب مختص لنحت مناطق محددة دون فترة نقاهة.",
      trustPills: ["طبيب مرخص من DHA", "مواعيد في نفس اليوم", "بدون فترة نقاهة", "بدون جراحة"],
      typewriterLines: [
        "بروتوكول تجميد دهون بإشراف طبي",
        "تقنية دقيقة للمناطق العنيدة",
        "تقييم طبي واضح قبل أي جلسة",
        "خطة علاج آمنة بدون جراحة"
      ],
      priceChip: "ابتداءً من 489 درهم",
      consultationBadge: "استشارة مجانية 30 دقيقة",
      sameDayLine: "إمكانية العلاج في نفس اليوم (وفق الملاءمة الطبية).",
      primaryCta: "احجز استشارة مجانية",
      secondaryCta: "تواصل عبر واتساب"
    },
    whatIs: {
      title: "ما هو تجميد الدهون؟",
      intro:
        "تجميد الدهون أو الكرايو ليبوليسيس هو إجراء غير جراحي يهدف إلى تقليل الدهون الموضعية العنيدة التي لا تستجيب بسهولة للرياضة أو النظام الغذائي. العلاج مخصص لنحت القوام في مناطق محددة، وليس لإنقاص الوزن العام.",
      sections: [
        {
          title: "كيف يعمل العلاج",
          text:
            "يتم وضع جهاز تبريد طبي على المنطقة المستهدفة بدرجة حرارة مدروسة. الخلايا الدهنية تتأثر بالبرودة أكثر من الأنسجة المحيطة، لذلك يركز العلاج على الدهون مع الحفاظ على سلامة الجلد. بعد الجلسة، يبدأ الجسم بالتخلص تدريجياً من الخلايا المتأثرة عبر العمليات الحيوية الطبيعية. يتم ضبط الخطة وفق التقييم الطبي لكل حالة لضمان التوازن بين الأمان والنتيجة المتوقعة."
        },
        {
          title: "ما الذي يعالجه",
          text:
            "يُستخدم العلاج للدهون الموضعية في البطن، الخواصر، الفخذين، الذراعين، ومنطقة الذقن. وهو مناسب لمن يرغب بتحسين تفاصيل القوام وليس تغييرات وزن كبيرة. خلال الاستشارة نقيّم سماكة الدهون ومرونة الجلد والتاريخ الطبي، ثم نحدد عدد الجلسات الأنسب. بعض الحالات تستفيد من جلسة واحدة، بينما حالات أخرى تحتاج خطة تدريجية لتحقيق تناسق أفضل."
        },
        {
          title: "متى تظهر النتائج",
          text:
            "النتائج تظهر بشكل تدريجي، وقد تبدأ ملاحظات أولية خلال الأسابيع الأولى. في الغالب يصبح التحسن أوضح بين الأسبوع السادس والثاني عشر. سرعة الاستجابة تختلف بحسب طبيعة الجسم والمنطقة المعالجة والالتزام بالتعليمات بعد الجلسة. لهذا نعتمد متابعة طبية منظمة وتوقعات واقعية، حتى تتخذ قرارك بثقة ووضوح دون وعود مبالغ فيها."
        }
      ],
      cta: "احجز استشارة مجانية"
    },
    areas: {
      title: "المناطق التي نعالجها",
      lead: "مناطق موضعية يتم علاجها بدقة وفق تقييم طبي واضح لكل حالة.",
      cardCta: "احجز استشارة",
      popularCaption: "الأكثر طلباً في دبي: البطن + الخواصر.",
      items: [
        {
          name: "الذراعان",
          description: "تحسين شكل الذراع عبر تقليل التراكمات الموضعية بدقة."
        },
        {
          name: "الذقن",
          description: "تحديد أنعم لخط الفك وتقليل الامتلاء أسفل الذقن."
        },
        {
          name: "الخواصر",
          description: "نحت الجانبين لإبراز خصر أكثر تحديداً وتناسقاً."
        },
        {
          name: "البطن",
          description: "استهداف الدهون العنيدة في أسفل البطن بخطة طبية واضحة."
        },
        {
          name: "الفخذان",
          description: "تنسيق القوام السفلي وتحسين التناسق العام للجسم."
        }
      ]
    },
    results: {
      title: "نتائج حقيقية للمرضى",
      subtitle: "صور قبل وبعد من حالات تم تقييمها في العيادة",
      disclaimer: "النتائج تختلف حسب كل حالة. الاستشارة الطبية مطلوبة لتأكيد الملاءمة."
    },
    whyChooseUs: {
      title: "لماذا يختار المرضى FAT FREEZING",
      lead: "نهج علاجي يبدأ بالاستشارة ويضع الأمان والوضوح في مقدمة القرار الطبي.",
      items: [
        {
          title: "علاج بإشراف طبي",
          description: "كل خطة تبدأ بتقييم من طبيب مرخص من هيئة الصحة بدبي."
        },
        {
          title: "الاستشارة أولاً",
          description: "نؤكد الملاءمة الطبية والتوقعات الواقعية قبل بدء أي إجراء."
        },
        {
          title: "عيادة راقية في دبي",
          description: "بيئة علاجية مريحة وخصوصية عالية في موقع مميز بجميرا."
        },
        {
          title: "تسعير واضح",
          description: "شرح واضح للتكلفة من البداية وحتى المتابعة بدون مفاجآت."
        },
        {
          title: "مسار بدون نقاهة",
          description: "معظم الحالات تعود لنشاطها المعتاد سريعاً وفق التوجيه الطبي."
        },
        {
          title: "تقييمات موثقة",
          description: "آراء العملاء تعكس جودة الرعاية والوضوح في التعامل الطبي."
        }
      ]
    },
    bookingJourney: {
      title: "كيف تتم رحلة الحجز",
      lead: "خطوات واضحة وسريعة تساعدك على اتخاذ قرار علاجي مدروس بثقة.",
      stepLabel: "الخطوة",
      steps: [
        {
          title: "احجز استشارتك المجانية",
          description: "اختر التاريخ والوقت المناسبين بسهولة عبر نموذج الحجز."
        },
        {
          title: "تقييم الملاءمة والمناطق المستهدفة",
          description: "يتم تقييم الحالة والأهداف بدقة بواسطة الفريق الطبي."
        },
        {
          title: "إمكانية العلاج في نفس اليوم",
          description: "يمكن بدء الجلسة في نفس اليوم عند تأكيد الملاءمة الطبية."
        }
      ],
      note: "المواعيد يومياً من 12:00 إلى 20:00 (دبي).",
      cta: "احجز استشارة مجانية"
    },
    finalCta: {
      title: "ابدأ رحلتك لتقليل الدهون اليوم",
      subtitle: "استشارة مجانية مع تقييم علاجي بإشراف طبي.",
      reassurance: "سرية تامة، بدون التزام.",
      primaryCta: "احجز استشارة مجانية",
      secondaryCta: "تواصل عبر واتساب"
    },
    booking: {
      sectionTitle: "احجز استشارة مجانية",
      sectionSubtitle: "ابدأ بتقييم لمدة 30 دقيقة واختر موعداً مناسباً بين 12:00 و20:00.",
      title: "احجز استشارة مجانية",
      subtitle: "مواعيد استشارة 30 دقيقة متاحة يومياً من 12:00 إلى 20:00.",
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
      successMessage: "تم حفظ الحجز بنجاح. سيتواصل معك فريقنا قريباً.",
      whatsappCta: "أكمل عبر واتساب",
      required: "يرجى إكمال جميع الحقول المطلوبة.",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      invalidTime: "يرجى اختيار وقت بين 12:00 و20:00."
    },
    trust: {
      hours: "ساعات العمل يومياً: 12:00–20:00 (دبي)",
      address: "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates",
      reviews: "تقييمات Google",
      instagram: "Instagram: vivo_aesthetics_uae"
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
