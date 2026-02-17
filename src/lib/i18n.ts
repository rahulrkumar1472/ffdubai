export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  localeName: string;
  dir: "ltr" | "rtl";
  banner: {
    text: string;
  };
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
    treatments: string;
    fatFreezing: string;
    ultrasound: string;
    radiofrequency: string;
    pricing: string;
    results: string;
    faq: string;
    contact: string;
    book: string;
    languageLabel: string;
    mobileMenu: string;
    closeMenu: string;
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
    bookTreatmentCta: string;
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
    comingSoonTitle: string;
    comingSoonText: string;
    comingSoonCta: string;
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
    tertiaryCta: string;
  };
  innerPage: {
    backToHome: string;
    primaryCta: string;
    secondaryCta: string;
  };
  booking: {
    pageTitle: string;
    pageSubtitle: string;
    sectionTitle: string;
    sectionSubtitle: string;
    modeLabel: string;
    modes: {
      consultation: string;
      treatment: string;
    };
    treatmentLabel: string;
    areaLabel: string;
    areaPlaceholder: string;
    areaOptions: string[];
    step1: string;
    step2: string;
    step3: string;
    date: string;
    time: string;
    next: string;
    back: string;
    submit: string;
    submitting: string;
    name: string;
    phone: string;
    email: string;
    summaryTitle: string;
    summaryDate: string;
    summaryMode: string;
    summaryTreatment: string;
    summaryArea: string;
    noArea: string;
    duration: string;
    successTitle: string;
    successMessage: string;
    successReference: string;
    whatsappCta: string;
    calendarCta: string;
    customerEmailSent: string;
    emailPending: string;
    required: string;
    invalidEmail: string;
    invalidTime: string;
    pastTime: string;
    missingTreatment: string;
    sideTitle: string;
    sidePoints: string[];
    treatmentOptions: Array<{
      value: string;
      label: string;
      hint: string;
    }>;
  };
  pages: {
    fatFreezing: {
      title: string;
      lead: string;
      intro: string[];
      highlights: string[];
      packages: Array<{
        name: string;
        standardPrice: string;
        promoPrice: string;
        bestFor: string;
        badge?: string;
      }>;
      disclaimer: string;
    };
    ultrasound: {
      title: string;
      lead: string;
      intro: string[];
      price: string;
      offer: string;
      sections: Array<{
        title: string;
        text: string;
      }>;
      disclaimer: string;
    };
    radiofrequency: {
      title: string;
      lead: string;
      intro: string[];
      price: string;
      offer: string;
      sections: Array<{
        title: string;
        text: string;
      }>;
      disclaimer: string;
    };
    pricing: {
      title: string;
      lead: string;
      packagesTitle: string;
      packagesLead: string;
      comparisonTitle: string;
      rows: Array<{
        label: string;
        starter: string;
        popular: string;
        transformation: string;
      }>;
      addonsTitle: string;
      addons: Array<{
        name: string;
        standardPrice: string;
        promoPrice: string;
        offer: string;
      }>;
      disclaimer: string;
    };
    results: {
      title: string;
      lead: string;
      subLead: string;
      emptyTitle: string;
      emptyText: string;
    };
    faq: {
      title: string;
      lead: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    contact: {
      title: string;
      lead: string;
      addressLabel: string;
      hoursLabel: string;
      mapLabel: string;
      mapUrl: string;
      whatsappLabel: string;
      reviewsLabel: string;
      instagramLabel: string;
    };
  };
  trust: {
    hours: string;
    address: string;
    reviews: string;
    instagram: string;
    disclaimer: string;
  };
  breadcrumbs: {
    home: string;
  };
};

const dictionary: Record<Locale, Dictionary> = {
  en: {
    localeName: "English",
    dir: "ltr",
    banner: {
      text: "Ramadan Mubarak 🌙 | Special promotional pricing (limited time)"
    },
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
      treatments: "Treatments",
      fatFreezing: "Fat Freezing",
      ultrasound: "Ultrasound Cavitation",
      radiofrequency: "Radiofrequency",
      pricing: "Pricing",
      results: "Results",
      faq: "FAQ",
      contact: "Contact",
      book: "Book Free Consultation",
      languageLabel: "Language",
      mobileMenu: "Menu",
      closeMenu: "Close"
    },
    hero: {
      eyebrow: "Doctor-led body contouring in Jumeirah, Dubai",
      heading: "Remove stubborn fat from just AED 489",
      subheading: "Doctor-led non-invasive cryolipolysis for targeted sculpting with no surgery and no downtime.",
      trustPills: ["DHA licensed doctor", "Same-day appointments", "No downtime", "No surgery"],
      typewriterLines: [
        "Permanent fat reduction for selected stubborn pockets",
        "Clinically proven technology with doctor-led planning",
        "Target stomach, love handles, arms, and chin",
        "Free 30-min consultation before treatment"
      ],
      priceChip: "From AED 489",
      consultationBadge: "Free 30-min consultation",
      sameDayLine: "Same-day treatment available (subject to medical suitability).",
      primaryCta: "Book Free Consultation",
      secondaryCta: "Chat on WhatsApp",
      bookTreatmentCta: "Book Treatment"
    },
    whatIs: {
      title: "What Is Fat Freezing?",
      intro:
        "Fat freezing, also known as cryolipolysis, is a non-surgical body contouring treatment designed for localized fat pockets that remain despite healthy routines. It is not a weight-loss program and should be planned as a targeted shaping treatment.",
      sections: [
        {
          title: "How it works",
          text:
            "Controlled cooling is applied to selected areas through a medical applicator. Fat cells are more sensitive to cold than surrounding tissue, so the protocol is calibrated to reduce fat while preserving comfort and skin integrity. Over the following weeks, the body naturally clears treated fat cells through normal metabolic pathways."
        },
        {
          title: "What it treats",
          text:
            "Cryolipolysis is commonly used for pinchable fat around the stomach, love handles, arms, thighs, and under the chin. Patients seeking contour refinement usually benefit most. Your doctor-led consultation confirms suitability, expected response, and whether one or more sessions may be advised."
        },
        {
          title: "When you'll see results",
          text:
            "Results usually develop gradually. Early change may appear in 2-4 weeks, with clearer contour differences more visible between 6 and 12 weeks. Individual outcomes depend on treatment area, baseline profile, and aftercare compliance. This is why we use consultation-first planning and realistic timelines."
        }
      ],
      cta: "Book Free Consultation"
    },
    areas: {
      title: "Areas We Treat",
      lead: "Targeted contouring for the most common stubborn fat zones in Dubai.",
      cardCta: "Book consultation",
      popularCaption: "Most popular in Dubai: stomach + love handles.",
      items: [
        {name: "Arms", description: "Refine upper-arm fullness with focused contour reduction."},
        {name: "Chin", description: "Improve jawline definition in selected under-chin areas."},
        {name: "Love Handles", description: "Shape side contours for a cleaner waistline profile."},
        {name: "Stomach", description: "Address lower-abdomen pockets resistant to exercise."},
        {name: "Thighs", description: "Support smoother lower-body proportion and contour."}
      ]
    },
    results: {
      title: "Real Patient Results",
      subtitle: "Before-and-after outcomes from approved clinic cases",
      disclaimer: "Results vary. A consultation is required to confirm suitability.",
      comingSoonTitle: "Results gallery coming soon",
      comingSoonText:
        "We publish only approved clinical outcomes. Book a consultation to review the most suitable treatment path and realistic timeline.",
      comingSoonCta: "Book Free Consultation"
    },
    whyChooseUs: {
      title: "Why Patients Choose FAT FREEZING",
      lead: "Consultation-first treatment planning with premium clinical care in Dubai.",
      items: [
        {
          title: "Doctor-led treatment",
          description: "Every plan begins with DHA licensed suitability screening."
        },
        {
          title: "Medical-grade technology",
          description: "Protocols are calibrated for safe and consistent body contouring."
        },
        {
          title: "Transparent pricing",
          description: "Starter to transformation packages are presented clearly upfront."
        },
        {
          title: "No-surgery pathway",
          description: "Non-invasive treatment designed for routine-friendly recovery."
        },
        {
          title: "Verified clinic trust",
          description: "Strong reviews and repeat referrals from Dubai-based patients."
        },
        {
          title: "Flexible same-day slots",
          description: "Daily 12:00-20:00 scheduling with consultation-first triage."
        }
      ]
    },
    bookingJourney: {
      title: "How Booking Works",
      lead: "A simple 3-step funnel built for fast decisions and clear expectations.",
      stepLabel: "Step",
      steps: [
        {title: "Book your free consultation", description: "Choose a suitable date and time slot in under a minute."},
        {title: "Doctor suitability assessment", description: "Target zones and options are reviewed with medical guidance."},
        {title: "Book treatment if suitable", description: "Same-day treatment may be available after assessment."}
      ],
      note: "Slots daily 12:00-20:00 (Dubai).",
      cta: "Book Free Consultation"
    },
    finalCta: {
      title: "Start Your Fat Reduction Journey Today",
      subtitle: "From AED 489 with transparent package options up to AED 1,599.",
      reassurance: "No obligation. Confidential. Doctor-led assessment.",
      primaryCta: "Book Free Consultation",
      secondaryCta: "Book Treatment",
      tertiaryCta: "Chat on WhatsApp"
    },
    innerPage: {
      backToHome: "Back to Home",
      primaryCta: "Book Free Consultation",
      secondaryCta: "Book Treatment"
    },
    booking: {
      pageTitle: "Book Consultation or Treatment",
      pageSubtitle: "Choose your slot first, then complete your details and confirm in one flow.",
      sectionTitle: "Book Your Appointment",
      sectionSubtitle: "Consultation and treatment slots are 60 minutes, available daily from 12:00 to 20:00.",
      modeLabel: "Booking type",
      modes: {
        consultation: "Free Consultation",
        treatment: "Book Treatment"
      },
      treatmentLabel: "Treatment selection",
      areaLabel: "Area of concern (optional)",
      areaPlaceholder: "Select area",
      areaOptions: ["Stomach", "Love Handles", "Arms", "Chin", "Thighs", "Back"],
      step1: "Step 1: Choose date & time",
      step2: "Step 2: Your details",
      step3: "Step 3: Confirm and submit",
      date: "Preferred date",
      time: "Preferred time",
      next: "Continue",
      back: "Back",
      submit: "Confirm Booking",
      submitting: "Submitting...",
      name: "Full name",
      phone: "Mobile number",
      email: "Email",
      summaryTitle: "Booking summary",
      summaryDate: "Date & time",
      summaryMode: "Booking type",
      summaryTreatment: "Treatment",
      summaryArea: "Area",
      noArea: "Not specified",
      duration: "Duration: 60 minutes",
      successTitle: "Booking confirmed",
      successMessage: "Your request has been received. A confirmation copy has been sent when email is configured.",
      successReference: "Reference",
      whatsappCta: "Continue on WhatsApp",
      calendarCta: "Add to calendar (.ics)",
      customerEmailSent: "Email confirmation sent.",
      emailPending: "Email is not configured yet; clinic team will still contact you.",
      required: "Please complete all required fields.",
      invalidEmail: "Please enter a valid email address.",
      invalidTime: "Please choose a valid slot between 12:00 and 20:00.",
      pastTime: "Please choose a future time slot.",
      missingTreatment: "Please select a treatment option.",
      sideTitle: "What happens next",
      sidePoints: [
        "Our coordinator reviews your slot request and confirms availability.",
        "Doctor-led suitability is checked before treatment recommendation.",
        "If medically suitable, treatment can be arranged the same day.",
        "You can speed up communication via WhatsApp at any time."
      ],
      treatmentOptions: [
        {value: "fat-freezing-starter", label: "Fat Freezing Starter", hint: "AED 489"},
        {value: "fat-freezing-popular", label: "Fat Freezing Most Popular", hint: "AED 999"},
        {value: "fat-freezing-transformation", label: "Fat Freezing Transformation", hint: "AED 1,599"},
        {value: "ultrasound-cavitation", label: "Ultrasound Cavitation", hint: "AED 450/session"},
        {value: "radiofrequency", label: "Radiofrequency", hint: "AED 450/session"}
      ]
    },
    pages: {
      fatFreezing: {
        title: "Fat Freezing (Cryolipolysis)",
        lead: "Doctor-led cryolipolysis in Dubai with transparent package options from AED 489.",
        intro: [
          "Our fat freezing pathway is designed for patients who want targeted contour improvement without surgery.",
          "Each plan is tailored after consultation, based on body profile, area thickness, and realistic treatment goals."
        ],
        highlights: [
          "From AED 489 starter access",
          "Most popular package at AED 999",
          "Transformation package capped at AED 1,599",
          "No surgery, no injections, no downtime"
        ],
        packages: [
          {name: "Starter", standardPrice: "AED 699", promoPrice: "AED 489", bestFor: "First-time trial for one focused area"},
          {
            name: "Most Popular",
            standardPrice: "AED 1,299",
            promoPrice: "AED 999",
            bestFor: "Balanced contouring for two or more priority zones",
            badge: "Most popular"
          },
          {
            name: "Transformation",
            standardPrice: "AED 1,999",
            promoPrice: "AED 1,599",
            bestFor: "Comprehensive shape plan with staged sessions"
          }
        ],
        disclaimer: "Applicator count and protocol are finalized after doctor consultation. Results vary by individual."
      },
      ultrasound: {
        title: "Ultrasound Cavitation",
        lead: "A non-invasive body contouring add-on designed to support stubborn fat management.",
        intro: [
          "Ultrasound cavitation is often used as part of combined body shaping plans.",
          "It can be recommended after assessment when goals and tissue profile suggest benefit."
        ],
        price: "AED 450 per session",
        offer: "6-session offer: AED 2,199 (instead of AED 2,700)",
        sections: [
          {
            title: "Who it suits",
            text: "Patients wanting progressive contouring support in addition to healthy routine management."
          },
          {
            title: "What to expect",
            text: "Comfort-focused session planning with staged review and realistic timeline advice."
          }
        ],
        disclaimer: "Suitability depends on assessment and treatment goals."
      },
      radiofrequency: {
        title: "Radiofrequency Skin Tightening",
        lead: "Skin-firming support frequently combined with contouring plans for texture and tone.",
        intro: [
          "Radiofrequency sessions are used to improve firmness appearance in selected treatment zones.",
          "It is commonly combined with body contouring for patients concerned about skin laxity."
        ],
        price: "AED 450 per session",
        offer: "6-session offer: AED 2,199 (instead of AED 2,700)",
        sections: [
          {
            title: "Why it is combined",
            text: "RF can complement contouring plans where skin support is a priority."
          },
          {
            title: "Safety and planning",
            text: "Session count and frequency are tailored after doctor review and skin assessment."
          }
        ],
        disclaimer: "Individual response varies; treatment decisions remain consultation-led."
      },
      pricing: {
        title: "Pricing & Packages",
        lead: "Transparent pricing from AED 489 with clear package positioning up to AED 1,599.",
        packagesTitle: "Fat Freezing package ladder",
        packagesLead: "Select the package that matches your contouring goals and treatment scope.",
        comparisonTitle: "Package comparison",
        rows: [
          {label: "Price", starter: "AED 489", popular: "AED 999", transformation: "AED 1,599"},
          {
            label: "Best for",
            starter: "Single-area starter",
            popular: "Multi-area contour plan",
            transformation: "Comprehensive transformation"
          },
          {
            label: "Consultation",
            starter: "Included",
            popular: "Included",
            transformation: "Included"
          }
        ],
        addonsTitle: "Add-on treatments",
        addons: [
          {
            name: "Ultrasound Cavitation",
            standardPrice: "AED 500/session",
            promoPrice: "AED 450/session",
            offer: "6 sessions for AED 2,199"
          },
          {
            name: "Radiofrequency",
            standardPrice: "AED 500/session",
            promoPrice: "AED 450/session",
            offer: "6 sessions for AED 2,199"
          }
        ],
        disclaimer: "Final recommendation and total plan cost depend on medical suitability and treatment scope."
      },
      results: {
        title: "Patient Results",
        lead: "Case-based before-and-after examples reviewed in a consultation-first framework.",
        subLead: "Only approved visuals are shown. Outcomes vary by baseline profile and treatment plan.",
        emptyTitle: "Case studies coming soon",
        emptyText: "We can review relevant examples during consultation while the public gallery is updated."
      },
      faq: {
        title: "Frequently Asked Questions",
        lead: "Clear answers to common treatment, pricing, and suitability questions.",
        items: [
          {
            question: "Is fat freezing a weight-loss treatment?",
            answer:
              "No. It is designed for localized contouring of stubborn fat pockets. It does not replace medical weight-loss programs."
          },
          {
            question: "How much does fat freezing cost?",
            answer: "Starter access begins at AED 489, with packages up to AED 1,599 depending on treatment scope."
          },
          {
            question: "Is there downtime?",
            answer: "Most patients return to routine activity quickly. Your doctor provides tailored post-session guidance."
          },
          {
            question: "Can I book treatment directly?",
            answer:
              "Yes. You can choose treatment booking directly, but final suitability remains doctor-led at your appointment."
          },
          {
            question: "How many sessions are needed?",
            answer: "Some patients are suitable for one session, while others benefit from staged plans for balanced outcomes."
          },
          {
            question: "Do you offer cavitation and RF packages?",
            answer: "Yes. Both are AED 450/session with 6-session promotional offers."
          },
          {
            question: "Are results guaranteed?",
            answer: "No treatment can guarantee outcomes. Results vary by individual response and adherence to guidance."
          },
          {
            question: "Where is the clinic located?",
            answer: "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates."
          }
        ]
      },
      contact: {
        title: "Contact & Location",
        lead: "Visit our clinic in Jumeirah or speak with our team on WhatsApp for quick coordination.",
        addressLabel: "Clinic address",
        hoursLabel: "Opening hours",
        mapLabel: "Open map",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Jumeira+St+-+Jumeirah+-+Jumeirah+1+-+Dubai+-+United+Arab+Emirates",
        whatsappLabel: "WhatsApp: +971521231743",
        reviewsLabel: "Google Reviews",
        instagramLabel: "Instagram: vivo_aesthetics_uae"
      }
    },
    trust: {
      hours: "Open daily: 12:00-20:00 (Dubai)",
      address: "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates",
      reviews: "Google Reviews",
      instagram: "Instagram: vivo_aesthetics_uae",
      disclaimer: "Disclaimer: Information is for education only. Treatment suitability is confirmed during consultation."
    },
    breadcrumbs: {
      home: "Home"
    }
  },
  ar: {
    localeName: "العربية",
    dir: "rtl",
    banner: {
      text: "رمضان مبارك 🌙 | أسعار ترويجية خاصة لفترة محدودة"
    },
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
      treatments: "العلاجات",
      fatFreezing: "تجميد الدهون",
      ultrasound: "الألتراساوند كافيتيشن",
      radiofrequency: "التردد الحراري",
      pricing: "الأسعار",
      results: "النتائج",
      faq: "الأسئلة الشائعة",
      contact: "التواصل والموقع",
      book: "احجز استشارة مجانية",
      languageLabel: "اللغة",
      mobileMenu: "القائمة",
      closeMenu: "إغلاق"
    },
    hero: {
      eyebrow: "نحت الجسم بإشراف طبي في جميرا، دبي",
      heading: "تخلّص من الدهون العنيدة ابتداءً من 489 درهم",
      subheading: "علاج كرايو ليبوليسيس غير جراحي بإشراف طبي لنحت المناطق المستهدفة بدون جراحة وبدون فترة نقاهة.",
      trustPills: ["طبيب مرخص من DHA", "مواعيد في نفس اليوم", "بدون نقاهة", "بدون جراحة"],
      typewriterLines: [
        "تقليل دائم للدهون الموضعية المناسبة للعلاج",
        "تقنية مثبتة سريرياً مع خطة علاج بإشراف طبي",
        "استهداف دقيق للبطن والخواصر والذراعين والذقن",
        "استشارة مجانية لمدة 30 دقيقة قبل بدء العلاج"
      ],
      priceChip: "ابتداءً من 489 درهم",
      consultationBadge: "استشارة مجانية لمدة 30 دقيقة",
      sameDayLine: "إمكانية بدء العلاج في نفس اليوم عند تأكيد الملاءمة الطبية.",
      primaryCta: "احجز استشارة مجانية",
      secondaryCta: "تواصل عبر واتساب",
      bookTreatmentCta: "احجز جلسة علاج"
    },
    whatIs: {
      title: "ما هو تجميد الدهون؟",
      intro:
        "تجميد الدهون (الكرايو ليبوليسيس) إجراء تجميلي طبي غير جراحي يستهدف الدهون الموضعية العنيدة التي لا تستجيب بسهولة للنظام الغذائي أو الرياضة. الهدف هو نحت القوام وتحسين التناسق، وليس علاج السمنة العامة.",
      sections: [
        {
          title: "كيف يعمل العلاج",
          text:
            "يُطبَّق تبريد مضبوط على المنطقة المستهدفة عبر جهاز طبي مخصص. الخلايا الدهنية أكثر حساسية للبرودة من الأنسجة المحيطة، لذلك يركّز البروتوكول على الدهون مع الحفاظ على راحة الجلد. بعد الجلسة، يتخلص الجسم تدريجياً من الخلايا المتأثرة ضمن عملياته الطبيعية."
        },
        {
          title: "ما الذي يعالجه",
          text:
            "يُستخدم العلاج عادةً لمناطق مثل البطن والخواصر والذراعين والفخذين وتحت الذقن. الأنسب غالباً هم الأشخاص الذين يريدون تحسين شكل مناطق محددة، وليس خفض وزن عام. خلال الاستشارة يتم تقييم الملاءمة وعدد الجلسات المتوقع لكل حالة."
        },
        {
          title: "متى تظهر النتائج",
          text:
            "النتائج تظهر بشكل تدريجي. قد تلاحظ فرقاً أولياً خلال 2-4 أسابيع، بينما تتضح الملامح أكثر بين الأسبوع 6 و12. الاستجابة تختلف من شخص لآخر بحسب المنطقة وطبيعة الجسم والالتزام بالتعليمات بعد الجلسة."
        }
      ],
      cta: "احجز استشارة مجانية"
    },
    areas: {
      title: "المناطق التي نعالجها",
      lead: "نستهدف أكثر مناطق الدهون الموضعية شيوعاً بخطة دقيقة في دبي.",
      cardCta: "احجز استشارة",
      popularCaption: "الأكثر طلباً في دبي: البطن + الخواصر.",
      items: [
        {name: "الذراعان", description: "تحسين تناسق الذراع عبر تقليل الامتلاء الموضعي."},
        {name: "الذقن", description: "تعزيز تحديد خط الفك في الحالات المناسبة."},
        {name: "الخواصر", description: "نحت الجانبين لإبراز خصر أكثر توازناً."},
        {name: "البطن", description: "استهداف دهون أسفل البطن المقاومة للرياضة."},
        {name: "الفخذان", description: "تحسين التناسق العام للجزء السفلي من الجسم."}
      ]
    },
    results: {
      title: "نتائج حقيقية للمرضى",
      subtitle: "صور قبل وبعد لحالات معتمدة ضمن معايير العيادة",
      disclaimer: "النتائج تختلف من حالة لأخرى، ويجب إجراء استشارة لتأكيد الملاءمة.",
      comingSoonTitle: "معرض النتائج قيد التحديث",
      comingSoonText: "نعرض فقط الحالات المعتمدة. يمكنك مراجعة أمثلة مناسبة خلال الاستشارة.",
      comingSoonCta: "احجز استشارة مجانية"
    },
    whyChooseUs: {
      title: "لماذا يختار المرضى FAT FREEZING",
      lead: "نهج علاجي يبدأ بالاستشارة ويعتمد على الشفافية الطبية والرعاية الراقية.",
      items: [
        {
          title: "علاج بإشراف طبي",
          description: "كل خطة تبدأ بتقييم ملاءمة من طبيب مرخص من هيئة الصحة بدبي."
        },
        {
          title: "تقنيات طبية معتمدة",
          description: "بروتوكولات مدروسة للسلامة وجودة النتائج في نحت القوام."
        },
        {
          title: "تسعير واضح",
          description: "باقات واضحة من البداية حتى خطة التحول الكاملة."
        },
        {
          title: "بدون جراحة",
          description: "مسار غير جراحي يساعد على العودة السريعة للروتين اليومي."
        },
        {
          title: "ثقة المرضى",
          description: "تقييمات موثقة وتجارب متكررة تعكس جودة الخدمة."
        },
        {
          title: "مواعيد يومية مرنة",
          description: "الحجز متاح يومياً من 12:00 إلى 20:00 وفق توفر المواعيد."
        }
      ]
    },
    bookingJourney: {
      title: "كيف تتم رحلة الحجز",
      lead: "ثلاث خطوات واضحة وسريعة لاتخاذ قرار علاجي مناسب.",
      stepLabel: "الخطوة",
      steps: [
        {title: "احجز الاستشارة المجانية", description: "اختر الموعد المناسب خلال أقل من دقيقة."},
        {title: "تقييم الملاءمة الطبية", description: "نراجع المناطق المستهدفة وخيارات العلاج المناسبة."},
        {title: "حجز جلسة العلاج", description: "يمكن بدء العلاج في نفس اليوم عند توفر الملاءمة."}
      ],
      note: "المواعيد يومياً من 12:00 إلى 20:00 (دبي).",
      cta: "احجز استشارة مجانية"
    },
    finalCta: {
      title: "ابدأ رحلتك لنحت القوام اليوم",
      subtitle: "باقات واضحة تبدأ من 489 درهم وتصل حتى 1,599 درهم.",
      reassurance: "بدون التزام. سرية تامة. تقييم بإشراف طبي.",
      primaryCta: "احجز استشارة مجانية",
      secondaryCta: "احجز جلسة علاج",
      tertiaryCta: "تواصل عبر واتساب"
    },
    innerPage: {
      backToHome: "العودة للرئيسية",
      primaryCta: "احجز استشارة مجانية",
      secondaryCta: "احجز جلسة علاج"
    },
    booking: {
      pageTitle: "احجز استشارة أو جلسة علاج",
      pageSubtitle: "اختر الموعد أولاً ثم أكمل بياناتك وأكد الحجز في خطوات واضحة.",
      sectionTitle: "احجز موعدك",
      sectionSubtitle: "مدة كل موعد 60 دقيقة، يومياً من 12:00 إلى 20:00.",
      modeLabel: "نوع الحجز",
      modes: {
        consultation: "استشارة مجانية",
        treatment: "حجز جلسة علاج"
      },
      treatmentLabel: "اختيار العلاج",
      areaLabel: "المنطقة المستهدفة (اختياري)",
      areaPlaceholder: "اختر المنطقة",
      areaOptions: ["البطن", "الخواصر", "الذراعان", "الذقن", "الفخذان", "الظهر"],
      step1: "الخطوة 1: اختر التاريخ والوقت",
      step2: "الخطوة 2: أدخل بياناتك",
      step3: "الخطوة 3: راجع وأكد الحجز",
      date: "التاريخ المفضل",
      time: "الوقت المفضل",
      next: "متابعة",
      back: "رجوع",
      submit: "تأكيد الحجز",
      submitting: "جارٍ الإرسال...",
      name: "الاسم الكامل",
      phone: "رقم الجوال",
      email: "البريد الإلكتروني",
      summaryTitle: "ملخص الحجز",
      summaryDate: "التاريخ والوقت",
      summaryMode: "نوع الحجز",
      summaryTreatment: "العلاج",
      summaryArea: "المنطقة",
      noArea: "غير محدد",
      duration: "المدة: 60 دقيقة",
      successTitle: "تم تأكيد الحجز",
      successMessage: "تم استلام طلبك. سيتم إرسال نسخة تأكيد عبر البريد عند تفعيل الإعدادات.",
      successReference: "الرقم المرجعي",
      whatsappCta: "المتابعة عبر واتساب",
      calendarCta: "إضافة للتقويم (.ics)",
      customerEmailSent: "تم إرسال رسالة التأكيد.",
      emailPending: "البريد غير مفعّل حالياً، وسيتواصل معك فريق العيادة مباشرة.",
      required: "يرجى استكمال جميع الحقول المطلوبة.",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      invalidTime: "يرجى اختيار موعد صحيح بين 12:00 و20:00.",
      pastTime: "يرجى اختيار وقت لاحق غير منتهي.",
      missingTreatment: "يرجى اختيار نوع العلاج.",
      sideTitle: "ماذا يحدث بعد الحجز؟",
      sidePoints: [
        "يقوم فريقنا بتأكيد الموعد خلال وقت قصير.",
        "تتم مراجعة الملاءمة الطبية والمناطق المستهدفة.",
        "عند الملاءمة يمكن ترتيب الجلسة في نفس اليوم.",
        "يمكنك تسريع التواصل عبر واتساب في أي وقت."
      ],
      treatmentOptions: [
        {value: "fat-freezing-starter", label: "تجميد الدهون - باقة البداية", hint: "489 درهم"},
        {value: "fat-freezing-popular", label: "تجميد الدهون - الأكثر طلباً", hint: "999 درهم"},
        {value: "fat-freezing-transformation", label: "تجميد الدهون - باقة التحول", hint: "1,599 درهم"},
        {value: "ultrasound-cavitation", label: "ألتراساوند كافيتيشن", hint: "450 درهم/جلسة"},
        {value: "radiofrequency", label: "التردد الحراري", hint: "450 درهم/جلسة"}
      ]
    },
    pages: {
      fatFreezing: {
        title: "تجميد الدهون (كرايو ليبوليسيس)",
        lead: "علاج تجميد الدهون في دبي بإشراف طبي وباقات واضحة تبدأ من 489 درهم.",
        intro: [
          "خطة التجميد لدينا مناسبة لمن يرغب في نحت مناطق محددة بدون جراحة.",
          "يتم تخصيص الخطة بعد الاستشارة وفق طبيعة الجسم وسمك المنطقة والتوقعات الواقعية."
        ],
        highlights: [
          "بداية من 489 درهم",
          "الباقة الأكثر طلباً 999 درهم",
          "الحد الأعلى لباقة التحول 1,599 درهم",
          "بدون جراحة وبدون تعطيل للروتين"
        ],
        packages: [
          {
            name: "باقة البداية",
            standardPrice: "699 درهم",
            promoPrice: "489 درهم",
            bestFor: "مناسبة لتجربة أولى لمنطقة مركزة"
          },
          {
            name: "الأكثر طلباً",
            standardPrice: "1,299 درهم",
            promoPrice: "999 درهم",
            bestFor: "نحت متوازن لأكثر من منطقة",
            badge: "الأكثر طلباً"
          },
          {
            name: "باقة التحول",
            standardPrice: "1,999 درهم",
            promoPrice: "1,599 درهم",
            bestFor: "خطة شاملة على مراحل"
          }
        ],
        disclaimer: "عدد التطبيقات والبروتوكول النهائي يحددان بعد الاستشارة. النتائج تختلف حسب الحالة."
      },
      ultrasound: {
        title: "الألتراساوند كافيتيشن",
        lead: "علاج غير جراحي داعم لنحت القوام وتقليل الدهون الموضعية.",
        intro: [
          "يُستخدم غالباً كجزء من خطة نحت متكاملة بعد التقييم الطبي.",
          "يساعد في دعم النتائج التدريجية للحالات المناسبة."
        ],
        price: "450 درهم للجلسة",
        offer: "عرض 6 جلسات: 2,199 درهم بدلاً من 2,700",
        sections: [
          {
            title: "لمن يناسب",
            text: "مناسب لمن يرغب في دعم تدريجي لنحت الجسم ضمن خطة واقعية."
          },
          {
            title: "ماذا تتوقع",
            text: "جلسات مريحة مع متابعة طبية وتقييم مستمر لتطور الاستجابة."
          }
        ],
        disclaimer: "تحديد الملاءمة وعدد الجلسات يتم بعد التقييم الطبي."
      },
      radiofrequency: {
        title: "شد البشرة بالتردد الحراري",
        lead: "خيار داعم لتحسين مظهر الشد والمرونة خاصة مع خطط نحت القوام.",
        intro: [
          "يُستخدم التردد الحراري لتحسين مظهر البشرة في المناطق المناسبة.",
          "يُدمج عادةً مع خطط النحت للحالات التي تهتم بتماسك الجلد."
        ],
        price: "450 درهم للجلسة",
        offer: "عرض 6 جلسات: 2,199 درهم بدلاً من 2,700",
        sections: [
          {
            title: "لماذا يُدمج مع النحت",
            text: "يساعد في دعم مظهر تماسك البشرة عند الحاجة مع خطة نحت متكاملة."
          },
          {
            title: "التخطيط الآمن",
            text: "عدد الجلسات والتكرار يحددان وفق تقييم الطبيب ونوعية البشرة."
          }
        ],
        disclaimer: "النتائج فردية وتختلف حسب الحالة والاستجابة."
      },
      pricing: {
        title: "الأسعار والباقات",
        lead: "تسعير شفاف يبدأ من 489 درهم ويصل حتى 1,599 درهم.",
        packagesTitle: "سلم باقات تجميد الدهون",
        packagesLead: "اختر الباقة المناسبة لهدفك بعد تقييم الحالة.",
        comparisonTitle: "مقارنة الباقات",
        rows: [
          {label: "السعر", starter: "489 درهم", popular: "999 درهم", transformation: "1,599 درهم"},
          {
            label: "الأفضل لـ",
            starter: "بداية لمنطقة واحدة",
            popular: "خطة متعددة المناطق",
            transformation: "خطة تحول شاملة"
          },
          {label: "الاستشارة", starter: "مشمولة", popular: "مشمولة", transformation: "مشمولة"}
        ],
        addonsTitle: "العلاجات الإضافية",
        addons: [
          {
            name: "الألتراساوند كافيتيشن",
            standardPrice: "500 درهم/جلسة",
            promoPrice: "450 درهم/جلسة",
            offer: "6 جلسات مقابل 2,199 درهم"
          },
          {
            name: "التردد الحراري",
            standardPrice: "500 درهم/جلسة",
            promoPrice: "450 درهم/جلسة",
            offer: "6 جلسات مقابل 2,199 درهم"
          }
        ],
        disclaimer: "الخطة النهائية والتكلفة الإجمالية تعتمدان على الملاءمة الطبية ونطاق العلاج."
      },
      results: {
        title: "نتائج المرضى",
        lead: "عرض حالات قبل وبعد ضمن إطار علاجي مسؤول وبإشراف طبي.",
        subLead: "نعرض فقط الحالات المعتمدة. الاستجابة تختلف حسب طبيعة الجسم والخطة العلاجية.",
        emptyTitle: "دراسات الحالات قيد الإضافة",
        emptyText: "يمكن مراجعة أمثلة مناسبة لحالتك خلال الاستشارة حتى تحديث المعرض العام."
      },
      faq: {
        title: "الأسئلة الشائعة",
        lead: "إجابات مختصرة وواضحة عن العلاج والأسعار والملاءمة.",
        items: [
          {
            question: "هل تجميد الدهون علاج لإنقاص الوزن؟",
            answer: "لا، هو مخصص لنحت الدهون الموضعية وليس بديلاً عن برامج إنقاص الوزن العامة."
          },
          {
            question: "كم تبدأ الأسعار؟",
            answer: "تبدأ من 489 درهم، وتصل الباقات حتى 1,599 درهم حسب نطاق الخطة."
          },
          {
            question: "هل يحتاج العلاج فترة نقاهة؟",
            answer: "غالباً يمكن العودة للروتين سريعاً حسب تقييم الطبيب للحالة."
          },
          {
            question: "هل يمكن حجز جلسة علاج مباشرة؟",
            answer: "نعم، مع بقاء قرار الملاءمة الطبية ضمن تقييم العيادة في الموعد."
          },
          {
            question: "كم عدد الجلسات المطلوبة؟",
            answer: "يختلف العدد حسب المنطقة والاستجابة؛ بعض الحالات تكفيها جلسة وأخرى تحتاج خطة تدريجية."
          },
          {
            question: "هل توجد عروض للكافيتيشن والتردد الحراري؟",
            answer: "نعم، كلاهما 450 درهم للجلسة مع عرض 6 جلسات ترويجي."
          },
          {
            question: "هل النتائج مضمونة؟",
            answer: "لا يوجد علاج يضمن نفس النتيجة للجميع، فالاستجابة تختلف من حالة لأخرى."
          },
          {
            question: "أين موقع العيادة؟",
            answer: "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates."
          }
        ]
      },
      contact: {
        title: "التواصل والموقع",
        lead: "زورونا في جميرا أو تواصلوا معنا عبر واتساب للتنسيق السريع.",
        addressLabel: "عنوان العيادة",
        hoursLabel: "ساعات العمل",
        mapLabel: "فتح الخريطة",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Jumeira+St+-+Jumeirah+-+Jumeirah+1+-+Dubai+-+United+Arab+Emirates",
        whatsappLabel: "واتساب: +971521231743",
        reviewsLabel: "تقييمات Google",
        instagramLabel: "Instagram: vivo_aesthetics_uae"
      }
    },
    trust: {
      hours: "ساعات العمل يومياً: 12:00-20:00 (دبي)",
      address: "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates",
      reviews: "تقييمات Google",
      instagram: "Instagram: vivo_aesthetics_uae",
      disclaimer: "تنبيه: المعلومات للتثقيف فقط، وتحديد ملاءمة العلاج يتم بعد الاستشارة الطبية."
    },
    breadcrumbs: {
      home: "الرئيسية"
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
