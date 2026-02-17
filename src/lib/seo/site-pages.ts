export type FaqItem = {
  question: string;
  answer: string;
};

export type SectionBlock = {
  id?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoPageData = {
  title: string;
  description: string;
  h1: string;
  intro: string[];
  sections: SectionBlock[];
  faq: FaqItem[];
  internalLinks: Array<{href: string; label: string}>;
  ctaTitle: string;
  ctaDescription: string;
};

export const TRUST_ITEMS = [
  "Doctor-led planning",
  "From AED 489",
  "No surgery or downtime",
  "Dubai-focused care"
] as const;

export const CORE_PAGES: Record<string, SeoPageData> = {
  "fat-freezing": {
    title: "Fat Freezing Dubai | Cryolipolysis Treatment",
    description:
      "Comprehensive fat freezing guidance in Dubai covering consultation, treatment process, suitability, side effects, pricing, and realistic results.",
    h1: "Fat Freezing Dubai (Cryolipolysis)",
    intro: [
      "Fat freezing is a non-surgical cryolipolysis treatment designed for people who want to reduce specific pockets of stubborn fat without surgery. At our Dubai clinic, every plan starts with a consultation so the treatment can be aligned with your body area, skin condition, and practical goals.",
      "The treatment does not replace medical weight management. Instead, it is used for contour refinement in selected zones such as the abdomen, flanks, upper arms, thighs, and under-chin region. This distinction is important because it sets realistic expectations and helps patients understand where cryolipolysis fits within a broader wellness plan.",
      "From a safety perspective, suitability and contraindications are reviewed before any session. You should never be promised guaranteed outcomes, specific inch loss, or immediate dramatic change. Results usually evolve over several weeks and vary by baseline profile, treatment zone, and follow-up care."
    ],
    sections: [
      {
        id: "what-is-fat-freezing",
        title: "What fat freezing is and how it works",
        paragraphs: [
          "Cryolipolysis applies controlled cooling to selected fat tissue. Fat cells are more cold-sensitive than nearby structures, so the protocol is designed to target fat while protecting surrounding tissue. Over time, the body naturally processes treated fat cells through normal pathways.",
          "During consultation, the clinician reviews whether the area is suitable, whether a single cycle may be enough, or whether staged sessions are more appropriate. This planning stage helps avoid overtreatment and supports realistic expectations."
        ]
      },
      {
        id: "how-it-works",
        title: "Treatment process and session flow",
        paragraphs: [
          "A standard appointment usually includes area assessment, applicator selection, treatment delivery, and post-session guidance. Most people can return to routine activity the same day, which is why the method is often chosen by working professionals in Dubai.",
          "Sensitivity, firmness, or temporary numbness may occur after treatment and should be discussed before booking. A structured follow-up timeline is important to review progress and decide whether additional sessions are medically appropriate."
        ],
        bullets: [
          "Consultation-led area assessment",
          "Applicator and cycle planning",
          "Post-treatment guidance and review",
          "Results vary by individual response"
        ]
      },
      {
        id: "results",
        title: "Results timeline and practical expectations",
        paragraphs: [
          "Early changes can appear in the first few weeks, with clearer contour changes often reviewed between weeks six and twelve. The timeline is gradual by design, so progress should be measured with consistent photography and clinical check-ins rather than day-to-day assumptions.",
          "People with localised, pinchable fat and stable routines often see the most meaningful contour benefit. If you have broader weight concerns, your clinician may recommend combining contour treatment with medical lifestyle support rather than relying on cryolipolysis alone."
        ]
      },
      {
        id: "pricing",
        title: "Sessions, applicators, and price structure",
        paragraphs: [
          "The starting anchor is from AED 489. Final pricing varies with area size, number of cycles, and whether treatment is staged over multiple visits. Transparent planning should explain what is included and why a particular package is recommended.",
          "Good clinics describe price drivers clearly instead of using vague promises. This allows patients to compare value based on suitability, protocol quality, and follow-up process rather than headline numbers alone."
        ]
      }
    ],
    faq: [
      {
        question: "Is fat freezing the same as weight-loss treatment?",
        answer:
          "No. Fat freezing is intended for local contouring rather than overall weight-loss management."
      },
      {
        question: "How soon are results visible?",
        answer:
          "Changes are gradual. Many patients notice early change within weeks, with clearer contour improvement often assessed by week 6 to 12."
      },
      {
        question: "Can everyone do cryolipolysis?",
        answer:
          "No. Suitability should always be confirmed in a consultation, including a review of contraindications and treatment goals."
      }
    ],
    internalLinks: [
      {href: "/pricing", label: "Fat Freezing Prices in Dubai"},
      {href: "/results", label: "Results and timeline guidance"},
      {href: "/book", label: "Book Free Consultation"},
      {href: "/body-areas", label: "Areas we treat"}
    ],
    ctaTitle: "Book your doctor-led fat freezing consultation",
    ctaDescription:
      "Get a suitability check, treatment planning guidance, and transparent pricing before you commit to a session."
  },
  cryolipolysis: {
    title: "Cryolipolysis Dubai | Scientific Treatment Overview",
    description:
      "Scientific cryolipolysis guide for Dubai patients covering mechanism, treatment comfort, side effects, aftercare, and realistic outcomes.",
    h1: "Cryolipolysis in Dubai: Scientific Guide",
    intro: [
      "Cryolipolysis is the medical term for fat freezing. This page focuses on the science and treatment mechanics so patients can understand what the method can and cannot do. The process uses controlled cooling, not heat, and is planned for local contour adjustment rather than broad weight reduction.",
      "A consultation-led approach is critical because treatment settings depend on area thickness, tissue profile, and patient goals. Reliable clinics avoid one-size-fits-all packages and explain why cycle counts differ between body regions.",
      "If you are researching treatment quality, ask how suitability is determined, how outcomes are reviewed, and how side effects are handled. Transparent medical communication is more valuable than over-promising marketing language."
    ],
    sections: [
      {
        title: "Biology of fat cell response",
        paragraphs: [
          "Fat cells are more cold-sensitive than many nearby tissues, which allows selective targeting when protocols are applied correctly. After treatment, the body gradually clears affected fat cells through normal metabolic processes.",
          "This biological pathway explains why visible change is not immediate. Gradual progression is expected and should be measured over structured review periods."
        ]
      },
      {
        title: "Comfort, side effects, and aftercare",
        paragraphs: [
          "Common short-term effects can include temporary sensitivity, numbness, firmness, or mild tenderness in treated areas. These effects are usually discussed before treatment so patients can plan confidently.",
          "Aftercare guidance usually includes hydration, routine movement, and scheduled follow-up. If symptoms persist beyond expected windows, patients should contact the clinic for clinical review."
        ]
      },
      {
        title: "Who this treatment is best suited for",
        paragraphs: [
          "Cryolipolysis generally suits adults seeking local contour refinement in specific zones. It is not ideal for people expecting major weight reduction from one treatment modality.",
          "A balanced plan considers your baseline profile, practical timeline, and whether combined supportive treatments are medically justified."
        ]
      }
    ],
    faq: [
      {question: "Is cryolipolysis different from fat freezing?", answer: "No. Cryolipolysis is the clinical term for fat freezing."},
      {
        question: "How many sessions are usually needed?",
        answer:
          "Session count depends on area and goals. It is determined after consultation and follow-up review, not by fixed promises."
      },
      {
        question: "Can side effects happen?",
        answer: "Yes. Temporary effects are possible, which is why consultation, consent, and aftercare guidance are important."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Fat Freezing treatment overview"},
      {href: "/results", label: "Expected results timeline"},
      {href: "/pricing", label: "Price and package transparency"},
      {href: "/book", label: "Book consultation"}
    ],
    ctaTitle: "Need a clear clinical explanation before booking?",
    ctaDescription: "Book a consultation to review suitability, timeline, and a practical treatment roadmap."
  },
  "coolsculpting-alternative": {
    title: "CoolSculpting Alternative Dubai | Cryolipolysis Options",
    description:
      "Learn how non-brand cryolipolysis fat freezing options in Dubai compare, including suitability, pricing, and treatment planning.",
    h1: "CoolSculpting Alternative in Dubai",
    intro: [
      "Some patients search for CoolSculpting by brand name. CoolSculpting® is a trademarked product line. Our clinic provides cryolipolysis fat freezing treatment and consultation-led planning based on your goals and suitability.",
      "When evaluating alternatives, the key factors are clinical assessment quality, protocol planning, practitioner standards, and transparent follow-up. Brand language alone does not replace medical suitability review.",
      "The safest way to compare options is to ask clear questions about expected timeline, side effects, package structure, and what happens if more than one session is recommended."
    ],
    sections: [
      {
        title: "How to compare treatment options responsibly",
        paragraphs: [
          "Focus on consultation standards, not just promotional wording. A treatment decision should include contraindication checks, area-specific planning, and realistic communication about results.",
          "You should also compare practical logistics: appointment windows, review process, and whether post-treatment support is clearly defined."
        ]
      },
      {
        title: "Pricing and expectation clarity",
        paragraphs: [
          "Price anchors can vary by area and cycle count. An offer from AED 489 can be a useful entry point, but your final recommendation should match the area profile and treatment objective.",
          "Avoid any provider that guarantees outcomes or uses pressure-led claims. Reliable clinics explain uncertainty openly and include 'results vary' language."
        ]
      }
    ],
    faq: [
      {
        question: "Are you affiliated with CoolSculpting brand?",
        answer:
          "No. CoolSculpting® is a trademark. We provide cryolipolysis fat freezing treatment with consultation-led planning."
      },
      {
        question: "Can I still achieve contour changes without brand-specific treatment?",
        answer:
          "Patients may achieve contour improvement with cryolipolysis when medically suitable and treated under structured protocols."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Primary fat freezing page"},
      {href: "/cryolipolysis", label: "Cryolipolysis science overview"},
      {href: "/pricing", label: "Transparent pricing"},
      {href: "/book", label: "Book consultation"}
    ],
    ctaTitle: "Compare options with a clinician, not marketing claims",
    ctaDescription: "Discuss your area goals and suitability before choosing any cryolipolysis pathway."
  },
  "body-areas": {
    title: "Fat Freezing Areas We Treat in Dubai",
    description:
      "Explore common treatment zones for fat freezing in Dubai, including stomach, flanks, arms, thighs, and under-chin areas.",
    h1: "Body Areas Treated with Fat Freezing",
    intro: [
      "Body area planning is one of the most important parts of cryolipolysis treatment. Different areas respond differently, and each zone may require a different session strategy.",
      "Common requests include lower abdomen, love handles, upper arms, thighs, and submental fullness under the chin. Suitability depends on local fat profile, skin quality, and realistic treatment targets.",
      "During consultation, treatment zones are prioritised based on achievable contour impact, comfort, and timeline expectations."
    ],
    sections: [
      {
        title: "Most commonly requested zones",
        paragraphs: [
          "Abdomen and flanks are frequently requested because subtle contour changes can significantly improve clothing fit and silhouette. Upper arm and thigh planning can also support proportion goals when localised fat pockets are present.",
          "Under-chin treatment is considered separately because tissue profile and skin support requirements differ from larger body zones."
        ],
        bullets: [
          "Stomach and lower abdomen",
          "Love handles / flank area",
          "Upper arms",
          "Outer and inner thighs",
          "Under-chin region"
        ]
      },
      {
        title: "How area selection influences price and timeline",
        paragraphs: [
          "Area size and cycle count directly influence planning and price. Smaller local areas may have shorter planning windows, while multi-zone goals are usually staged across reviews.",
          "This is why transparent consultations matter: they align budget, timeline, and treatment suitability before any commitment."
        ]
      }
    ],
    faq: [
      {question: "Can multiple areas be treated?", answer: "In suitable cases, yes. The exact plan is determined during consultation."},
      {
        question: "Do all areas need the same number of sessions?",
        answer: "No. Area response and treatment goals differ, so session planning is personalised."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Fat Freezing overview"},
      {href: "/pricing", label: "See pricing factors"},
      {href: "/results", label: "Review results timeline"},
      {href: "/book", label: "Book consultation"}
    ],
    ctaTitle: "Not sure which area to prioritise first?",
    ctaDescription: "Book a consultation and get a practical area-by-area treatment plan."
  },
  pricing: {
    title: "Fat Freezing Prices in Dubai | From AED 489",
    description:
      "Fat freezing prices in Dubai from AED 489 with transparent explanation of area size, applicator count, and session planning.",
    h1: "Fat Freezing Prices in Dubai",
    intro: [
      "Pricing should be clear before treatment starts. Our price anchor begins from AED 489, with final recommendations based on treatment area, cycle count, and whether staged sessions are required.",
      "Rather than selling one-size bundles, consultation-first planning helps match treatment scope to your actual contour goals. This improves value and avoids unnecessary sessions.",
      "If you are comparing clinics, ask for a breakdown of what drives cost and what review points are included. Transparent pricing is as important as the treatment itself."
    ],
    sections: [
      {
        title: "What affects fat freezing price",
        paragraphs: [
          "Main cost drivers include area size, number of cycles or applicators, and whether treatment is delivered in one appointment or staged across follow-ups.",
          "Supportive modalities such as cavitation or radiofrequency may be discussed where clinically relevant, but they should be recommended based on suitability, not upsell pressure."
        ]
      },
      {
        title: "How to compare package value",
        paragraphs: [
          "A lower headline price is not always better if planning quality is weak. Value should include screening standards, realistic timelines, and proper follow-up guidance.",
          "Choose a clinic that explains inclusions and exclusions clearly and avoids guaranteed-result language."
        ]
      }
    ],
    faq: [
      {
        question: "What is the starting fat freezing price?",
        answer: "Current entry pricing starts from AED 489, subject to consultation and area suitability."
      },
      {
        question: "Can I get an exact quote online?",
        answer:
          "A precise quote usually needs clinical assessment because area profile and cycle count determine final planning."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Treatment details"},
      {href: "/results", label: "Expected timeline"},
      {href: "/book", label: "Book consultation"},
      {href: "/faq", label: "Pricing FAQs"}
    ],
    ctaTitle: "Need a transparent plan before you book?",
    ctaDescription: "Request a consultation to review suitability, cycles, and package options with clear expectations."
  },
  results: {
    title: "Fat Freezing Results in Dubai | What to Expect",
    description:
      "Understand realistic fat freezing results, week-by-week timeline, and how to evaluate before/after progress responsibly.",
    h1: "Fat Freezing Results: Realistic Timeline",
    intro: [
      "Fat freezing outcomes are gradual. Most patients should expect a staged timeline rather than immediate dramatic change. This is normal and should be discussed before treatment starts.",
      "Clear progress tracking matters. Use consistent photos, consistent posture, and planned review windows. Day-to-day comparison can be misleading and increase anxiety unnecessarily.",
      "Most importantly, results vary by baseline profile, treatment zone, and adherence to aftercare guidance. Ethical clinics communicate uncertainty openly."
    ],
    sections: [
      {
        title: "Week-by-week expectations",
        paragraphs: [
          "In the first days, temporary sensitivity or numbness can occur. Early visible changes may appear in weeks two to four depending on the area and individual response.",
          "Clearer contour changes are often reviewed from week six onward, with many assessments around week twelve before deciding on additional sessions."
        ]
      },
      {
        title: "Who usually sees the best outcomes",
        paragraphs: [
          "People with localised, pinchable fat and stable habits often respond best for contour goals. Cryolipolysis is not a replacement for medical obesity management.",
          "A consultation-led plan helps identify whether fat freezing alone is suitable or whether a broader approach is required."
        ]
      }
    ],
    faq: [
      {
        question: "How long until I see final results?",
        answer: "Visible progress is gradual, with clearer changes commonly assessed around 6 to 12 weeks."
      },
      {
        question: "Are results guaranteed?",
        answer: "No. Results vary by individual and treatment suitability."
      }
    ],
    internalLinks: [
      {href: "/before-after", label: "Before & After guidance"},
      {href: "/fat-freezing", label: "Fat Freezing treatment"},
      {href: "/pricing", label: "Price information"},
      {href: "/book", label: "Book consultation"}
    ],
    ctaTitle: "Discuss expected outcomes for your target area",
    ctaDescription: "Book a consultation for realistic timeline guidance and suitability review."
  },
  "before-after": {
    title: "Fat Freezing Before and After Dubai",
    description:
      "Guidance on reading before-and-after fat freezing progress, with realistic expectations and consultation-first planning.",
    h1: "Before and After Guidance",
    intro: [
      "Before-and-after images can be useful when interpreted correctly. Lighting, posture, camera distance, and timing all influence how results appear.",
      "At this stage, we are adding approved case imagery gradually. We only publish compliant visual material with proper review standards, and we avoid exaggerated image claims.",
      "If you want case-relevant guidance now, book a consultation and ask for realistic examples aligned with your treatment area and profile."
    ],
    sections: [
      {
        title: "How to assess progress fairly",
        paragraphs: [
          "Use consistent photo conditions and compare at fixed intervals rather than daily. This reduces bias and helps both patient and clinician make better decisions.",
          "Always interpret visual changes alongside clinical review and treatment notes."
        ]
      }
    ],
    faq: [
      {question: "Why are there limited gallery images?", answer: "Only compliant, approved case visuals are published."},
      {
        question: "Can I still evaluate likely outcomes?",
        answer: "Yes. Consultation can provide case-relevant expectation guidance based on your area and profile."
      }
    ],
    internalLinks: [
      {href: "/results", label: "Results timeline"},
      {href: "/fat-freezing", label: "Treatment overview"},
      {href: "/book", label: "Book consultation"}
    ],
    ctaTitle: "Need outcome guidance for your own profile?",
    ctaDescription: "Book a consultation to review realistic expectations and treatment suitability."
  },
  about: {
    title: "About FAT FREEZING Dubai",
    description:
      "Learn about FAT FREEZING clinic standards, consultation-first approach, and non-surgical body contouring philosophy in Dubai.",
    h1: "About FAT FREEZING",
    intro: [
      "FAT FREEZING is focused on consultation-led cryolipolysis care in Dubai with transparent pricing and realistic treatment communication.",
      "Our approach emphasises suitability screening, clear treatment planning, and follow-up rather than pressure-led package sales. Every contour goal should be matched to practical timelines and responsible expectations.",
      "We keep communication clinical, calm, and transparent because treatment decisions should be based on suitability and patient understanding."
    ],
    sections: [
      {
        title: "Clinic standards and planning philosophy",
        paragraphs: [
          "We prioritise consultation quality, protocol consistency, and practical aftercare guidance. This supports informed decisions and safer treatment planning.",
          "Patients receive clear explanations of what cryolipolysis can and cannot deliver, including the fact that results vary."
        ]
      }
    ],
    faq: [
      {question: "Do you offer same-day appointments?", answer: "When slots are available, same-day booking may be possible."},
      {
        question: "Do you guarantee specific measurements?",
        answer: "No. Ethical treatment communication avoids guaranteed outcomes."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Fat Freezing"},
      {href: "/pricing", label: "Pricing"},
      {href: "/contact", label: "Contact"},
      {href: "/book", label: "Book"}
    ],
    ctaTitle: "Ready to discuss your contour goals?",
    ctaDescription: "Book a consultation and receive a clinically guided treatment plan."
  },
  faq: {
    title: "Fat Freezing FAQ Dubai",
    description:
      "Comprehensive FAQ for fat freezing in Dubai covering treatment process, safety, timeline, pricing, and booking questions.",
    h1: "Fat Freezing FAQ",
    intro: [
      "This FAQ page answers common questions about treatment suitability, expected timelines, safety considerations, and price planning. The goal is to help you make informed decisions before booking.",
      "For personal recommendations, always use a consultation. Online information is educational and cannot replace a direct assessment of your area and profile."
    ],
    sections: [
      {
        title: "Treatment and safety",
        paragraphs: [
          "Cryolipolysis is non-surgical and designed for local contouring. Temporary tenderness or numbness can occur, so aftercare guidance is important.",
          "Suitability is case-specific and should be confirmed by a clinician before treatment."
        ]
      },
      {
        title: "Pricing and booking",
        paragraphs: [
          "Pricing starts from AED 489, with final recommendations based on area profile and treatment scope. Booking can start with a free consultation to review options.",
          "Same-day availability depends on the clinic schedule and confirmed suitability."
        ]
      }
    ],
    faq: [
      {
        question: "Is fat freezing painful?",
        answer: "Most patients describe temporary cold and pressure sensations that settle during treatment."
      },
      {
        question: "How many sessions do I need?",
        answer: "Session count depends on area and goals and is determined through consultation and follow-up."
      },
      {
        question: "Can I book treatment directly?",
        answer: "Yes, but clinical suitability still needs to be confirmed at appointment."
      },
      {
        question: "Are there side effects?",
        answer: "Temporary effects are possible. Your clinician will review expected aftercare and warning signs."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Treatment overview"},
      {href: "/pricing", label: "Pricing"},
      {href: "/results", label: "Results"},
      {href: "/book", label: "Book consultation"}
    ],
    ctaTitle: "Still have questions about suitability?",
    ctaDescription: "Book a consultation and get answers specific to your treatment area and goals."
  },
  contact: {
    title: "Contact FAT FREEZING Dubai",
    description:
      "Contact and booking information for FAT FREEZING in Dubai, including address details, service hours, and enquiry options.",
    h1: "Contact FAT FREEZING Dubai",
    intro: [
      "Use this page to reach our team for consultation booking, treatment enquiries, or planning questions. We support online booking and WhatsApp communication for fast coordination.",
      "If you are comparing treatment pathways, share your target area and timeline so the clinic team can route you to the right consultation format.",
      "Appointments are generally offered daily from 12:00 to 20:00, subject to slot availability."
    ],
    sections: [
      {
        title: "How to contact us",
        paragraphs: [
          "Address: Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates.",
          "You can book online, send a WhatsApp enquiry, or call directly for scheduling support."
        ]
      },
      {
        title: "What to include in your enquiry",
        paragraphs: [
          "To speed up planning, include your target area, preferred appointment window, and whether you want consultation-first or treatment-first booking.",
          "The clinical team can then guide you to the most suitable route."
        ]
      }
    ],
    faq: [
      {question: "Do you offer WhatsApp booking support?", answer: "Yes. WhatsApp is available for quick enquiry and appointment coordination."},
      {
        question: "Can I visit without appointment?",
        answer: "Booking in advance is recommended to secure consultation time and avoid waiting."
      }
    ],
    internalLinks: [
      {href: "/book", label: "Book now"},
      {href: "/locations", label: "Locations"},
      {href: "/pricing", label: "Pricing"}
    ],
    ctaTitle: "Ready to speak with the clinic team?",
    ctaDescription: "Choose your preferred channel and secure your consultation slot."
  },
  locations: {
    title: "Fat Freezing Locations in Dubai",
    description:
      "Explore FAT FREEZING service locations in Dubai including Jumeirah-focused consultation and treatment access.",
    h1: "Locations We Serve",
    intro: [
      "Our core service focus is Dubai with appointment planning built around local access and practical travel times. This locations hub helps you find the page nearest your area.",
      "Each location page includes treatment availability context, links to core service pages, and booking options."
    ],
    sections: [
      {
        title: "Dubai service pages",
        paragraphs: [
          "If you are searching for fat freezing near your neighborhood, start with the relevant location page and then book consultation for suitability review.",
          "Location pages are designed to support near-me intent with practical details and direct booking routes."
        ],
        bullets: ["Dubai", "Jumeirah"]
      }
    ],
    faq: [
      {
        question: "Do you serve patients outside Jumeirah?",
        answer: "Yes. Patients across Dubai can book consultation and treatment subject to scheduling."
      }
    ],
    internalLinks: [
      {href: "/locations/dubai", label: "Fat Freezing near Dubai"},
      {href: "/locations/jumeirah", label: "Fat Freezing near Jumeirah"},
      {href: "/book", label: "Book consultation"}
    ],
    ctaTitle: "Find the nearest booking route",
    ctaDescription: "Choose your location page and book the most convenient consultation slot."
  },
  "locations-dubai": {
    title: "Fat Freezing Near Dubai",
    description:
      "Dubai location page for fat freezing and cryolipolysis services with consultation-first booking and clear internal links.",
    h1: "Fat Freezing Near Dubai",
    intro: [
      "If you are based in Dubai and looking for fat freezing treatment, consultation-first planning helps identify whether your target area is suitable and what timeline is realistic.",
      "We support Dubai patients with transparent pricing, clear scheduling windows, and direct booking access."
    ],
    sections: [
      {
        title: "Service availability in Dubai",
        paragraphs: [
          "Consultations and treatment appointments are scheduled daily, with same-day availability depending on live slot capacity.",
          "The clinic team can help you choose between consultation-only and treatment booking routes."
        ]
      },
      {
        title: "Useful links for Dubai patients",
        paragraphs: [
          "Start with treatment overview and pricing pages to understand scope, then book consultation for area-specific planning.",
          "This structured path improves decision quality and reduces booking friction."
        ]
      }
    ],
    faq: [
      {
        question: "Can Dubai patients book online directly?",
        answer: "Yes. Online booking is available for consultation and treatment routes."
      }
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Fat Freezing"},
      {href: "/pricing", label: "Pricing"},
      {href: "/book", label: "Book"}
    ],
    ctaTitle: "Book your Dubai consultation",
    ctaDescription: "Choose a time slot and receive suitability-focused treatment planning."
  },
  "locations-jumeirah": {
    title: "Fat Freezing Near Jumeirah",
    description:
      "Jumeirah location page for cryolipolysis and fat freezing appointments with direct booking and pricing links.",
    h1: "Fat Freezing Near Jumeirah",
    intro: [
      "Patients in Jumeirah often choose consultation-first fat freezing planning for convenience and treatment clarity. This page provides direct links to treatment details, pricing, and booking.",
      "You can start with a free consultation to confirm suitability before deciding on package scope."
    ],
    sections: [
      {
        title: "Jumeirah-focused booking path",
        paragraphs: [
          "Use the booking page to select consultation or treatment mode. The team will review target area suitability and timeline at appointment.",
          "Location convenience is important, but treatment quality and planning standards remain the primary priority."
        ]
      }
    ],
    faq: [
      {
        question: "Is same-day booking available for Jumeirah clients?",
        answer: "Same-day availability depends on current slots and confirmed suitability."
      }
    ],
    internalLinks: [
      {href: "/locations", label: "All locations"},
      {href: "/pricing", label: "Pricing"},
      {href: "/book", label: "Book"}
    ],
    ctaTitle: "Secure your nearest appointment",
    ctaDescription: "Book a consultation slot convenient for Jumeirah-based schedules."
  },
  treatments: {
    title: "Treatments | Fat Freezing and Body Contouring Dubai",
    description: "Treatment hub for fat freezing, cryolipolysis, body-area planning, pricing, and booking routes in Dubai.",
    h1: "Treatments Hub",
    intro: [
      "This hub is designed to help you navigate the full treatment pathway: what fat freezing is, how cryolipolysis works, which body areas are commonly treated, and how pricing is structured.",
      "Each treatment page includes consultation-first guidance, realistic timeline language, and clear links to book.",
      "Start with the main fat freezing page, then use supporting pages for deeper research before consultation."
    ],
    sections: [
      {
        title: "Start here",
        paragraphs: [
          "For broad treatment overview, use the Fat Freezing page. For technical explanation, use Cryolipolysis page. For standalone add-on pathways, review Ultrasound Cavitation and Radiofrequency pages.",
          "This structure is built to reduce confusion and help patients make confident, informed decisions."
        ],
        bullets: ["Fat Freezing", "Cryolipolysis", "Ultrasound Cavitation", "Radiofrequency", "Body Areas"]
      }
    ],
    faq: [
      {question: "Which page should I read first?", answer: "Most patients start with the Fat Freezing overview and then review pricing and booking."}
    ],
    internalLinks: [
      {href: "/fat-freezing", label: "Fat Freezing"},
      {href: "/cryolipolysis", label: "Cryolipolysis"},
      {href: "/ultrasound-cavitation", label: "Ultrasound Cavitation"},
      {href: "/radiofrequency", label: "Radiofrequency"},
      {href: "/coolsculpting-alternative", label: "CoolSculpting Alternative"},
      {href: "/body-areas", label: "Areas We Treat"}
    ],
    ctaTitle: "Move from research to consultation",
    ctaDescription: "Choose your treatment path and book a consultation slot that suits your schedule."
  }
};
