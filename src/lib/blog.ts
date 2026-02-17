import type {Locale} from "@/lib/i18n";

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
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
  faq: BlogFaq[];
  author: string;
};

type TopicSeed = {
  slug: string;
  title: string;
  arTitle: string;
  category: string;
  arCategory: string;
  metaDescription: string;
  summary: string;
  arSummary: string;
  tags: string[];
};

const TOPIC_SEEDS: TopicSeed[] = [
  {
    slug: "fat-freezing-cost-dubai-prices",
    title: "Fat Freezing Dubai Cost: Transparent Pricing Guide",
    arTitle: "تكلفة تجميد الدهون في دبي: دليل الأسعار",
    category: "Pricing",
    arCategory: "الأسعار",
    metaDescription: "Understand fat freezing package pricing in Dubai, what affects cost, and how consultation-first plans protect value.",
    summary: "A transparent breakdown of cryolipolysis pricing in Dubai, from starter options to advanced contour plans.",
    arSummary: "شرح واضح لأسعار تجميد الدهون في دبي من باقات البداية حتى الخطط المتقدمة.",
    tags: ["fat freezing dubai cost", "pricing", "cryolipolysis"]
  },
  {
    slug: "does-fat-freezing-work",
    title: "Does Fat Freezing Work? Clinical Expectations in Dubai",
    arTitle: "هل تجميد الدهون فعّال؟ توقعات طبية في دبي",
    category: "Education",
    arCategory: "تثقيف",
    metaDescription: "Learn how fat freezing works, who sees the best outcomes, and why consultation-led planning matters.",
    summary: "A medically grounded answer to whether fat freezing works, with practical guidance on suitability and timelines.",
    arSummary: "إجابة طبية واضحة حول فعالية تجميد الدهون مع توضيح معايير الملاءمة والجدول الزمني.",
    tags: ["does fat freezing work", "results", "dubai"]
  },
  {
    slug: "cryolipolysis-side-effects",
    title: "Cryolipolysis Side Effects: What Is Normal and What Needs Review",
    arTitle: "الآثار الجانبية للكرايو ليبوليسيس: ما هو طبيعي؟",
    category: "Safety",
    arCategory: "السلامة",
    metaDescription: "Review common side effects after cryolipolysis, recovery timelines, and when to contact your clinic.",
    summary: "A safety-first guide to common temporary effects and escalation steps after treatment.",
    arSummary: "دليل سلامة يوضح الأعراض المؤقتة الشائعة ومتى يجب التواصل مع العيادة.",
    tags: ["cryolipolysis side effects", "safety", "aftercare"]
  },
  {
    slug: "fat-freezing-vs-liposuction-dubai",
    title: "Fat Freezing vs Liposuction in Dubai: Which Path Fits Your Goals?",
    arTitle: "تجميد الدهون أم شفط الدهون في دبي؟",
    category: "Comparisons",
    arCategory: "مقارنات",
    metaDescription: "Compare non-surgical fat freezing with liposuction by downtime, scale of change, and suitability.",
    summary: "A balanced comparison between cryolipolysis and liposuction for Dubai patients planning body contouring.",
    arSummary: "مقارنة عملية بين تجميد الدهون وشفط الدهون من حيث التعافي والنتائج المتوقعة.",
    tags: ["fat freezing vs liposuction", "comparison", "dubai"]
  },
  {
    slug: "best-fat-reduction-treatment-dubai",
    title: "Best Fat Reduction Treatment in Dubai: How to Decide Safely",
    arTitle: "أفضل علاج لتقليل الدهون في دبي: كيف تختار بأمان",
    category: "Planning",
    arCategory: "التخطيط",
    metaDescription: "How to compare fat reduction options in Dubai using suitability, recovery profile, and expected outcomes.",
    summary: "A decision framework for choosing the most suitable fat reduction approach in Dubai clinics.",
    arSummary: "إطار قرار واضح لاختيار العلاج الأنسب لتقليل الدهون في عيادات دبي.",
    tags: ["best fat reduction treatment dubai", "planning", "body contouring"]
  },
  {
    slug: "is-fat-freezing-safe",
    title: "Is Fat Freezing Safe? Medical Screening and Risk Controls",
    arTitle: "هل تجميد الدهون آمن؟ الفحص الطبي وإدارة المخاطر",
    category: "Safety",
    arCategory: "السلامة",
    metaDescription: "A doctor-led safety overview for fat freezing, including screening, contraindications, and follow-up.",
    summary: "Safety explained in practical terms: screening, protocol quality, and realistic communication.",
    arSummary: "شرح مبسط لسلامة العلاج: الفحص المسبق، جودة البروتوكول، والمتابعة.",
    tags: ["is fat freezing safe", "medical safety", "dubai"]
  },
  {
    slug: "how-many-sessions-fat-freezing",
    title: "How Many Fat Freezing Sessions Are Usually Needed?",
    arTitle: "كم جلسة تجميد دهون تحتاج غالباً؟",
    category: "Planning",
    arCategory: "التخطيط",
    metaDescription: "Learn what determines session count for cryolipolysis and why one-size treatment plans are unreliable.",
    summary: "A consultation-first guide to session planning by area, baseline profile, and response timing.",
    arSummary: "دليل لتحديد عدد الجلسات وفق المنطقة وحالة الجسم واستجابة العلاج.",
    tags: ["how many sessions needed", "fat freezing", "consultation"]
  },
  {
    slug: "fat-freezing-results-timeline",
    title: "Fat Freezing Results Timeline: Day 0 to Week 12",
    arTitle: "الجدول الزمني لنتائج تجميد الدهون",
    category: "Results",
    arCategory: "النتائج",
    metaDescription: "A realistic week-by-week fat freezing results timeline with review milestones and expectation setting.",
    summary: "Understand what changes to expect across each stage after cryolipolysis treatment.",
    arSummary: "توقعات واقعية لما قد يتغير بعد العلاج من الأسبوع الأول حتى الأسبوع الثاني عشر.",
    tags: ["fat freezing results timeline", "results", "week by week"]
  },
  {
    slug: "fat-freezing-stomach-dubai",
    title: "Fat Freezing for Stomach Area in Dubai",
    arTitle: "تجميد دهون البطن في دبي",
    category: "Areas",
    arCategory: "المناطق",
    metaDescription: "Stomach fat freezing guide covering suitability, treatment flow, and realistic contour outcomes.",
    summary: "A focused clinical guide for abdominal cryolipolysis planning and timeline expectations.",
    arSummary: "دليل عملي لعلاج منطقة البطن يشمل الملاءمة وخطة الجلسات وتوقعات النتيجة.",
    tags: ["fat freezing stomach", "abdomen", "dubai"]
  },
  {
    slug: "fat-freezing-chin-dubai",
    title: "Fat Freezing for Chin Area in Dubai",
    arTitle: "تجميد دهون الذقن في دبي",
    category: "Areas",
    arCategory: "المناطق",
    metaDescription: "Under-chin fat freezing in Dubai: candidate profile, timeline, and combination planning for definition.",
    summary: "How under-chin cryolipolysis is assessed and where add-on tightening may help.",
    arSummary: "كيف يتم تقييم منطقة الذقن ومتى يمكن إضافة جلسات شد داعمة.",
    tags: ["fat freezing chin", "double chin", "contouring"]
  },
  {
    slug: "fat-freezing-arms-dubai",
    title: "Fat Freezing for Arms: Doctor-Led Planning",
    arTitle: "تجميد دهون الذراعين بإشراف طبي",
    category: "Areas",
    arCategory: "المناطق",
    metaDescription: "A practical guide for upper-arm fat freezing with candidacy, comfort, and review expectations.",
    summary: "Understand arm contour treatment planning with realistic outcome communication.",
    arSummary: "فهم خطة علاج الذراعين مع توقعات واقعية للنتائج والمتابعة.",
    tags: ["fat freezing arms", "upper arm contour", "dubai"]
  },
  {
    slug: "fat-freezing-thighs-dubai",
    title: "Fat Freezing for Thighs: What to Expect",
    arTitle: "تجميد دهون الفخذين: ماذا تتوقع؟",
    category: "Areas",
    arCategory: "المناطق",
    metaDescription: "Thigh fat freezing overview including treatment planning, timeline, and maintenance strategy.",
    summary: "Clinical guidance for thigh cryolipolysis across consultation, session planning, and review windows.",
    arSummary: "إرشادات طبية لعلاج الفخذين من الاستشارة وحتى مراجعة النتائج.",
    tags: ["fat freezing thighs", "thigh contour", "cryolipolysis"]
  },
  {
    slug: "fat-freezing-love-handles-dubai",
    title: "Fat Freezing for Love Handles in Dubai",
    arTitle: "تجميد دهون الخواصر في دبي",
    category: "Areas",
    arCategory: "المناطق",
    metaDescription: "Love handle fat freezing guide with symmetry planning and timeline milestones.",
    summary: "How side-waist contouring is planned with balanced bilateral treatment strategy.",
    arSummary: "شرح كيفية تخطيط علاج الخواصر لتحقيق تناسق واضح وآمن.",
    tags: ["fat freezing love handles", "waist contour", "dubai"]
  },
  {
    slug: "fat-freezing-aftercare-guide",
    title: "Fat Freezing Aftercare Guide: Practical Recovery Steps",
    arTitle: "دليل العناية بعد تجميد الدهون",
    category: "Aftercare",
    arCategory: "العناية",
    metaDescription: "Aftercare checklist for fat freezing with hydration, activity, and follow-up timing guidance.",
    summary: "A practical plan to support comfort and track progress properly after treatment.",
    arSummary: "خطة عملية لدعم الراحة ومتابعة التقدم بشكل صحيح بعد الجلسة.",
    tags: ["fat freezing aftercare", "recovery", "post treatment"]
  },
  {
    slug: "fat-freezing-before-and-after",
    title: "Fat Freezing Before and After: How to Evaluate Progress",
    arTitle: "قبل وبعد تجميد الدهون: كيف تقيم التقدم؟",
    category: "Results",
    arCategory: "النتائج",
    metaDescription: "How to assess before-and-after changes objectively using timelines, photos, and consultation reviews.",
    summary: "A framework for reading before-and-after progress without unrealistic expectations.",
    arSummary: "طريقة عملية لقراءة التغيرات قبل وبعد بشكل واقعي ودقيق.",
    tags: ["fat freezing before and after", "results", "progress tracking"]
  },
  {
    slug: "fat-freezing-technology-explained",
    title: "Fat Freezing Technology Explained for Patients",
    arTitle: "شرح تقنية تجميد الدهون للمراجعين",
    category: "Education",
    arCategory: "تثقيف",
    metaDescription: "Understand cryolipolysis technology, applicators, and why protocol precision matters.",
    summary: "A patient-friendly explanation of the devices and protocols behind modern fat freezing.",
    arSummary: "شرح مبسط للأجهزة والبروتوكولات المستخدمة في تجميد الدهون الحديث.",
    tags: ["fat freezing technology explained", "cryolipolysis technology", "medical devices"]
  },
  {
    slug: "fat-freezing-for-men",
    title: "Fat Freezing for Men in Dubai",
    arTitle: "تجميد الدهون للرجال في دبي",
    category: "Patient Profiles",
    arCategory: "فئات المراجعين",
    metaDescription: "Treatment planning considerations for male patients seeking non-surgical fat reduction.",
    summary: "How male body contour goals are assessed and planned in a doctor-led non-surgical pathway.",
    arSummary: "كيف يتم تقييم أهداف نحت القوام لدى الرجال ووضع خطة علاج مناسبة.",
    tags: ["fat freezing for men", "male contouring", "dubai clinic"]
  },
  {
    slug: "fat-freezing-for-women",
    title: "Fat Freezing for Women in Dubai",
    arTitle: "تجميد الدهون للنساء في دبي",
    category: "Patient Profiles",
    arCategory: "فئات المراجعين",
    metaDescription: "A doctor-led guide for women considering fat freezing for localized contour improvement.",
    summary: "Clinical planning points for women targeting stubborn fat areas with cryolipolysis.",
    arSummary: "نقاط تخطيط علاجية للنساء الراغبات في تحسين نحت مناطق محددة.",
    tags: ["fat freezing for women", "women contouring", "cryolipolysis"]
  },
  {
    slug: "fat-freezing-vs-cavitation-dubai",
    title: "Fat Freezing vs Cavitation in Dubai",
    arTitle: "تجميد الدهون أم الكافيتيشن في دبي؟",
    category: "Comparisons",
    arCategory: "مقارنات",
    metaDescription: "Compare cryolipolysis and ultrasound cavitation by mechanism, timeline, and patient suitability.",
    summary: "A practical comparison for patients deciding between fat freezing and cavitation pathways.",
    arSummary: "مقارنة واضحة بين تجميد الدهون والكافيتيشن من حيث الآلية والنتائج المتوقعة.",
    tags: ["fat freezing vs cavitation", "ultrasound cavitation", "comparison"]
  },
  {
    slug: "fat-freezing-myths",
    title: "Fat Freezing Myths: What Is True and What Is Marketing",
    arTitle: "خرافات تجميد الدهون: الحقيقة مقابل التسويق",
    category: "Education",
    arCategory: "تثقيف",
    metaDescription: "Debunk common myths around fat freezing results, safety, and session planning.",
    summary: "A myth-busting guide that separates evidence-based practice from exaggerated claims.",
    arSummary: "دليل لتصحيح المفاهيم الشائعة والتمييز بين الواقع والمبالغات التسويقية.",
    tags: ["fat freezing myths", "medical facts", "patient education"]
  },
  {
    slug: "fat-freezing-science",
    title: "Fat Freezing Science: The Biology Behind Cryolipolysis",
    arTitle: "علم تجميد الدهون: بيولوجيا الكرايو ليبوليسيس",
    category: "Science",
    arCategory: "العلوم",
    metaDescription: "Explore the science of controlled cooling, adipocyte response, and gradual body clearance timelines.",
    summary: "A science-first look at why fat cells respond to cooling and how outcomes develop over time.",
    arSummary: "نظرة علمية على استجابة الخلايا الدهنية للتبريد ولماذا تظهر النتائج تدريجياً.",
    tags: ["fat freezing science", "adipocyte", "cryolipolysis biology"]
  },
  {
    slug: "how-fat-cells-die",
    title: "How Fat Cells Die After Cryolipolysis",
    arTitle: "كيف تتأثر الخلايا الدهنية بعد الكرايو ليبوليسيس",
    category: "Science",
    arCategory: "العلوم",
    metaDescription: "A patient-friendly explanation of adipocyte response and clearance after controlled cooling.",
    summary: "Understanding the post-treatment biological process helps set realistic timeline expectations.",
    arSummary: "فهم العملية البيولوجية بعد الجلسة يساعد على ضبط التوقعات بشكل واقعي.",
    tags: ["how fat cells die", "cryolipolysis process", "science"]
  },
  {
    slug: "fat-freezing-metabolism",
    title: "Fat Freezing and Metabolism: What Is the Real Link?",
    arTitle: "تجميد الدهون والتمثيل الغذائي: ما العلاقة الحقيقية؟",
    category: "Education",
    arCategory: "تثقيف",
    metaDescription: "Clarify how cryolipolysis relates to metabolism and why it is not a substitute for medical weight management.",
    summary: "A clear explanation of what fat freezing changes and what it does not change metabolically.",
    arSummary: "توضيح ما الذي يغيره العلاج وما الذي لا يغيره من ناحية التمثيل الغذائي.",
    tags: ["fat freezing metabolism", "weight management", "body contouring"]
  },
  {
    slug: "body-contouring-dubai-guide",
    title: "Body Contouring Dubai Guide: Non-Surgical Pathways",
    arTitle: "دليل نحت القوام في دبي: خيارات غير جراحية",
    category: "Guides",
    arCategory: "الأدلة",
    metaDescription: "A complete guide to non-surgical body contouring in Dubai including fat freezing and add-on technologies.",
    summary: "A practical roadmap for comparing body contouring options in Dubai clinics.",
    arSummary: "خارطة طريق عملية لمقارنة خيارات نحت القوام غير الجراحي في دبي.",
    tags: ["body contouring dubai guide", "non-surgical", "fat reduction"]
  },
  {
    slug: "fat-freezing-clinic-near-me-dubai",
    title: "Fat Freezing Clinic Near Me in Dubai: What to Check",
    arTitle: "عيادة تجميد الدهون بالقرب مني في دبي: ماذا أتحقق؟",
    category: "Local Intent",
    arCategory: "بحث محلي",
    metaDescription: "Checklist for choosing a nearby Dubai fat freezing clinic with verified medical standards.",
    summary: "How to assess local clinic credibility, access convenience, and transparent treatment planning.",
    arSummary: "قائمة تحقق لاختيار عيادة قريبة موثوقة بمعايير طبية واضحة.",
    tags: ["fat freezing clinic near me", "dubai clinic", "local search"]
  },
  {
    slug: "fat-freezing-jumeirah",
    title: "Fat Freezing in Jumeirah: Local Patient Guide",
    arTitle: "تجميد الدهون في جميرا: دليل محلي",
    category: "Local Intent",
    arCategory: "بحث محلي",
    metaDescription: "Jumeirah-focused fat freezing guide with booking windows, consultation process, and map access.",
    summary: "A local guide for patients in and around Jumeirah planning cryolipolysis appointments.",
    arSummary: "دليل محلي لمرضى جميرا حول خطوات الحجز والاستشارة والعلاج.",
    tags: ["fat freezing jumeirah", "jumeirah clinic", "dubai"]
  },
  {
    slug: "fat-freezing-uae",
    title: "Fat Freezing UAE Guide: Standards, Pricing, and Planning",
    arTitle: "دليل تجميد الدهون في الإمارات: المعايير والأسعار",
    category: "Guides",
    arCategory: "الأدلة",
    metaDescription: "A UAE-focused guide to choosing safe fat freezing services with transparent pricing and realistic outcomes.",
    summary: "Understand how to evaluate cryolipolysis options across UAE clinics using practical criteria.",
    arSummary: "كيف تختار خدمة تجميد دهون آمنة وشفافة في الإمارات وفق معايير عملية.",
    tags: ["fat freezing uae", "uae clinic", "pricing"]
  },
  {
    slug: "fat-freezing-consultation-guide",
    title: "Fat Freezing Consultation Guide: What Happens First",
    arTitle: "دليل استشارة تجميد الدهون: ماذا يحدث أولاً؟",
    category: "Consultation",
    arCategory: "الاستشارة",
    metaDescription: "Know what to bring, what questions to ask, and how treatment suitability is confirmed in consultation.",
    summary: "A step-by-step guide to getting the most value from your first fat freezing consultation.",
    arSummary: "دليل خطوة بخطوة للاستفادة القصوى من أول استشارة لتجميد الدهون.",
    tags: ["fat freezing consultation guide", "consultation", "doctor led"]
  },
  {
    slug: "fat-freezing-preparation-tips",
    title: "Fat Freezing Preparation Tips Before Your Appointment",
    arTitle: "نصائح التحضير قبل جلسة تجميد الدهون",
    category: "Preparation",
    arCategory: "التحضير",
    metaDescription: "Preparation tips before fat freezing to improve appointment readiness and expectation clarity.",
    summary: "Simple preparation steps that support smooth appointments and better treatment planning decisions.",
    arSummary: "خطوات تحضيرية بسيطة تساعد على تجربة علاجية أكثر سلاسة ووضوحاً.",
    tags: ["fat freezing preparation tips", "pre treatment", "patient guide"]
  },
  {
    slug: "fat-freezing-long-term-results",
    title: "Fat Freezing Long-Term Results: Maintenance and Reality",
    arTitle: "نتائج تجميد الدهون على المدى الطويل",
    category: "Results",
    arCategory: "النتائج",
    metaDescription: "Long-term fat freezing outcomes, maintenance strategy, and factors that influence contour consistency.",
    summary: "A long-term perspective on maintaining contour changes after cryolipolysis.",
    arSummary: "نظرة طويلة المدى للحفاظ على النتائج بعد تجميد الدهون.",
    tags: ["fat freezing long term results", "maintenance", "results"]
  },
  {
    slug: "fat-freezing-dubai-how-it-works",
    title: "Fat Freezing in Dubai: How It Works",
    arTitle: "كيف يعمل تجميد الدهون في دبي؟",
    category: "Education",
    arCategory: "تثقيف",
    metaDescription: "A complete explanation of the cryolipolysis pathway from assessment to post-treatment timeline in Dubai.",
    summary: "Comprehensive overview of the full cryolipolysis journey in Dubai clinics.",
    arSummary: "شرح شامل لمسار العلاج من التقييم حتى متابعة النتائج في دبي.",
    tags: ["fat freezing dubai", "how it works", "cryolipolysis"]
  },
  {
    slug: "belly-fat-cryolipolysis-dubai",
    title: "Belly Fat Cryolipolysis in Dubai: Complete Guide",
    arTitle: "كرايو ليبوليسيس دهون البطن في دبي: دليل كامل",
    category: "Areas",
    arCategory: "المناطق",
    metaDescription: "Detailed belly-focused cryolipolysis guide for patients in Dubai.",
    summary: "A detailed local guide for abdominal contour planning with cryolipolysis.",
    arSummary: "دليل محلي مفصل لتخطيط علاج دهون البطن بالكرايو ليبوليسيس.",
    tags: ["belly fat cryolipolysis dubai", "stomach", "areas"]
  },
  {
    slug: "double-chin-fat-freezing-dubai",
    title: "Double Chin Fat Freezing in Dubai: Full Assessment Guide",
    arTitle: "تجميد دهون الذقن المزدوج في دبي: دليل التقييم",
    category: "Areas",
    arCategory: "المناطق",
    metaDescription: "Under-chin cryolipolysis in Dubai with candidacy factors and realistic planning timelines.",
    summary: "Everything patients should know before treating under-chin fullness with fat freezing.",
    arSummary: "كل ما تحتاج معرفته قبل علاج امتلاء ما تحت الذقن بتجميد الدهون.",
    tags: ["double chin fat freezing dubai", "chin", "areas"]
  }
];

const SECTION_FOCUSES = [
  "Clinical overview",
  "How treatment works",
  "Who is suitable",
  "Consultation and planning",
  "Session experience",
  "Recovery and aftercare",
  "Results timeline",
  "Pricing and value",
  "Safety and risk awareness",
  "Booking your next step"
] as const;

function formatDate(index: number) {
  const value = new Date(Date.UTC(2026, 0, 1 + index));
  return value.toISOString().slice(0, 10);
}

function paragraph(topic: string, focus: string, sectionIndex: number, paragraphIndex: number) {
  const angle = sectionIndex + 1;
  const variant = paragraphIndex + 1;

  return `In Dubai, ${topic.toLowerCase()} should be approached with a consultation-first framework that balances medical suitability, treatment goals, and realistic timelines. For ${focus.toLowerCase()}, a doctor-led review helps avoid rushed decisions and ensures each step is planned for safety, comfort, and practical outcomes. This is point ${variant} in section ${angle}, reinforcing evidence-based communication rather than guaranteed claims.`;
}

function buildLongSections(seed: TopicSeed): BlogSection[] {
  return SECTION_FOCUSES.map((heading, sectionIndex) => ({
    id: `section-${sectionIndex + 1}`,
    heading,
    paragraphs: [0, 1, 2, 3].map((paragraphIndex) => paragraph(seed.title, heading, sectionIndex, paragraphIndex))
  }));
}

function buildFaq(seed: TopicSeed): BlogFaq[] {
  return [
    {
      question: `Is ${seed.title.toLowerCase()} suitable for everyone?`,
      answer:
        "No. Suitability is confirmed through consultation, skin and fat assessment, and a review of goals and medical context."
    },
    {
      question: "How soon can I expect visible changes?",
      answer:
        "Most patients notice gradual change over several weeks, with clearer contour differences often reviewed between weeks 6 and 12."
    },
    {
      question: "Can I combine treatments with this plan?",
      answer:
        "Combination planning may be considered when clinically appropriate, especially when contour and skin-support goals are both relevant."
    },
    {
      question: "Do clinics guarantee exact outcomes?",
      answer:
        "No ethical medical clinic should guarantee exact outcomes. Results vary and should be discussed using realistic timelines and follow-up reviews."
    }
  ];
}

const EN_POSTS: Omit<BlogPost, "locale">[] = TOPIC_SEEDS.map((seed, index) => ({
  slug: seed.slug,
  title: seed.title,
  metaTitle: `${seed.title} | FAT FREEZING Dubai`,
  metaDescription: seed.metaDescription,
  publishedAt: formatDate(index),
  category: seed.category,
  tags: seed.tags,
  summary: seed.summary,
  sections: buildLongSections(seed),
  faq: buildFaq(seed),
  author: "FAT FREEZING Medical Editorial Team"
}));

const AR_POSTS: Omit<BlogPost, "locale">[] = TOPIC_SEEDS.map((seed, index) => ({
  slug: seed.slug,
  title: seed.arTitle,
  metaTitle: `${seed.arTitle} | FAT FREEZING دبي`,
  metaDescription: seed.arSummary,
  publishedAt: formatDate(index),
  category: seed.arCategory,
  tags: seed.tags,
  summary: seed.arSummary,
  sections: [
    {
      id: "section-1",
      heading: "ملخص طبي سريع",
      paragraphs: [
        `${seed.arSummary} نعتمد في العيادة نهجاً يبدأ بالتقييم الطبي لتحديد الملاءمة قبل أي خطة علاجية.`,
        "المحتوى العربي في هذه النسخة مُصمم للتصفح السريع، وسيتم توسيعه تدريجياً بمقالات تفصيلية إضافية."
      ]
    },
    {
      id: "section-2",
      heading: "الخطوة التالية",
      paragraphs: [
        "احجز استشارة مجانية لمراجعة المنطقة المستهدفة، ومناقشة الخيارات المتاحة وفق حالتك الطبية.",
        "نلتزم بلغة طبية واضحة وتوقعات واقعية، مع تسعير شفاف وخطة متابعة منظمة."
      ]
    }
  ],
  faq: [
    {
      question: "هل يناسب هذا العلاج جميع الحالات؟",
      answer: "لا، يتم تأكيد الملاءمة خلال الاستشارة الطبية وبعد تقييم الحالة بشكل فردي."
    },
    {
      question: "متى يمكن ملاحظة النتائج؟",
      answer: "عادةً تظهر النتائج تدريجياً، وتكون أوضح غالباً بين الأسبوع السادس والثاني عشر."
    }
  ],
  author: "فريق FAT FREEZING الطبي"
}));

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
  const text = [
    post.summary,
    ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...post.faq.flatMap((item) => [item.question, item.answer])
  ]
    .join(" ")
    .trim();

  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.round(words / 200));
}

export const BLOG_SLUGS = TOPIC_SEEDS.map((post) => post.slug);
