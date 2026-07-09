export interface Disease {
  id: number;
  name: string;
  slug: string;
  quote: string;
  description: string;
  symptoms: string[];
  category: "skin" | "hair";
  image: string;
  treatments: string[];
}

const IMAGE_MAP: Record<string, string> = {
  "Atopic Dermatitis": "/images/diseases/atopic-dermatitis.webp",
  "Back Acne": "/images/diseases/back-acne.webp",
  "Seborrheic Keratosis": "/images/diseases/seborrheic-keratosis.webp",
  Eczema: "/images/diseases/eczema.webp",
  Hyperpigmentation: "/images/diseases/hyperpigmentation.webp",
  "Nail Psoriasis": "/images/diseases/nail-psoriasis.webp",
  Psoriasis: "/images/diseases/psoriasis.webp",
  "Stevens-Johnson Syndrome": "/images/diseases/sjs-ten.webp",
  Vitiligo: "/images/diseases/vitiligo.webp",
  "Warts & Molluscum": "/images/diseases/warts-molluscum.webp",
};

function findImage(name: string): string {
  return IMAGE_MAP[name] || "/images/diseases/psoriasis.webp";
}

function treatmentList(name: string): string[] {
  const map: Record<string, string[]> = {
    "Atopic Dermatitis": [
      "Medical Management",
      "Moisturising Therapy",
      "Topical Steroids",
      "Antihistamines",
    ],
    "Back Acne": ["Topical Medications", "Oral Antibiotics", "Chemical Peels", "Laser Therapy"],
    "Seborrheic Keratosis": [
      "Dermatological Evaluation",
      "Cryotherapy",
      "Electrocautery",
      "Surgical Removal",
    ],
    Eczema: ["Medical Management", "Topical Steroids", "Moisturising Therapy", "Phototherapy"],
    Hyperpigmentation: [
      "Topical Lightening Agents",
      "Chemical Peels",
      "Laser Therapy",
      "Medical Management",
    ],
    "Nail Psoriasis": ["Topical Treatments", "Medical Management", "Phototherapy", "Nail Care"],
    Psoriasis: ["Medical Management", "Phototherapy", "Biologics", "Topical Steroids"],
    "Stevens-Johnson Syndrome": [
      "Immediate Hospitalisation",
      "Specialised Wound Care",
      "Medical Management",
    ],
    Vitiligo: ["Topical Immunomodulators", "Phototherapy", "Excimer Laser", "Medical Management"],
    "Warts & Molluscum": ["Cryotherapy", "Electrocautery", "Topical Treatments", "Laser Removal"],
  };
  return map[name] || ["Medical Management", "Dermatological Evaluation"];
}

export const skinDiseases: Disease[] = [
  {
    id: 1,
    name: "Atopic Dermatitis",
    slug: "atopic-dermatitis",
    quote: "Living with itchy, inflamed skin doesn't have to be permanent.",
    description:
      "Atopic Dermatitis, commonly called eczema, is a chronic skin condition that causes dry, itchy, red, and inflamed skin. It often affects children but can occur at any age. Proper treatment helps control flare-ups, relieve itching, and restore healthy skin.",
    symptoms: [
      "Severe itching",
      "Dry and rough skin",
      "Red inflamed patches",
      "Skin cracking",
      "Thickened skin after repeated scratching",
    ],
    category: "skin",
    image: findImage("Atopic Dermatitis"),
    treatments: treatmentList("Atopic Dermatitis"),
  },
  {
    id: 2,
    name: "Back Acne",
    slug: "back-acne",
    quote: "Clear skin starts with proper acne treatment.",
    description:
      "Back acne develops when hair follicles become clogged with oil, bacteria, and dead skin cells. Without treatment it may leave permanent scars. Early medical care helps prevent future breakouts and improves skin appearance.",
    symptoms: ["Pimples", "Painful cysts", "Blackheads", "Whiteheads", "Acne scars"],
    category: "skin",
    image: findImage("Back Acne"),
    treatments: treatmentList("Back Acne"),
  },
  {
    id: 3,
    name: "Seborrheic Keratosis",
    slug: "seborrheic-keratosis",
    quote: "Not every skin growth is dangerous — but every new growth deserves expert attention.",
    description:
      "Seborrheic Keratosis is a common, non-cancerous skin growth that usually appears with age. Although harmless, it may resemble skin cancer. A dermatologist can accurately diagnose and safely remove it if necessary.",
    symptoms: [
      "Brown or black growths",
      "Waxy appearance",
      "Rough texture",
      "Raised lesions",
      "Mild itching",
    ],
    category: "skin",
    image: findImage("Seborrheic Keratosis"),
    treatments: treatmentList("Seborrheic Keratosis"),
  },
  {
    id: 4,
    name: "Eczema",
    slug: "eczema",
    quote: "Comfort begins when irritated skin receives the care it deserves.",
    description:
      "Eczema is a skin condition that causes inflammation, dryness, redness, and intense itching. Triggers may include allergies, weather changes, soaps, or stress. Medical treatment helps reduce symptoms and prevents repeated flare-ups.",
    symptoms: ["Red patches", "Itchy skin", "Dryness", "Cracking", "Oozing skin"],
    category: "skin",
    image: findImage("Eczema"),
    treatments: treatmentList("Eczema"),
  },
  {
    id: 5,
    name: "Hyperpigmentation",
    slug: "hyperpigmentation",
    quote: "Even skin tone is possible with the right treatment plan.",
    description:
      "Hyperpigmentation causes dark patches due to excess melanin production. It can result from sun exposure, acne marks, hormonal changes, or skin injuries. Modern treatments help reduce pigmentation and improve skin tone.",
    symptoms: ["Dark patches", "Uneven complexion", "Post-acne marks", "Sun spots", "Melasma"],
    category: "skin",
    image: findImage("Hyperpigmentation"),
    treatments: treatmentList("Hyperpigmentation"),
  },
  {
    id: 6,
    name: "Nail Psoriasis",
    slug: "nail-psoriasis",
    quote: "Strong, healthy nails start with early treatment.",
    description:
      "Nail psoriasis affects the fingernails or toenails, causing pitting, discoloration, thickening, and nail separation. Early treatment helps improve nail appearance and prevent permanent damage.",
    symptoms: ["Nail pitting", "White patches", "Thick nails", "Nail lifting", "Crumbling nails"],
    category: "skin",
    image: findImage("Nail Psoriasis"),
    treatments: treatmentList("Nail Psoriasis"),
  },
  {
    id: 7,
    name: "Psoriasis",
    slug: "psoriasis",
    quote: "Psoriasis can be managed successfully — helping you live more comfortably every day.",
    description:
      "Psoriasis is a chronic autoimmune condition that causes thick, red, scaly skin patches. Although it cannot always be permanently cured, modern treatments effectively control symptoms, reduce flare-ups, and improve quality of life.",
    symptoms: ["Thick red plaques", "Silvery scales", "Dry cracked skin", "Itching", "Joint pain"],
    category: "skin",
    image: findImage("Psoriasis"),
    treatments: treatmentList("Psoriasis"),
  },
  {
    id: 8,
    name: "Stevens-Johnson Syndrome",
    slug: "stevens-johnson-syndrome",
    quote: "Prompt treatment makes a critical difference in severe skin reactions.",
    description:
      "Stevens-Johnson Syndrome is a rare but serious skin reaction, often triggered by medications or infections. It requires immediate medical attention. Early diagnosis and specialized treatment are essential for recovery.",
    symptoms: ["Fever", "Painful rash", "Skin peeling", "Mouth ulcers", "Eye irritation"],
    category: "skin",
    image: findImage("Stevens-Johnson Syndrome"),
    treatments: treatmentList("Stevens-Johnson Syndrome"),
  },
  {
    id: 9,
    name: "Vitiligo",
    slug: "vitiligo",
    quote: "Every skin tone deserves expert care and confidence.",
    description:
      "Vitiligo is a condition where skin loses its natural pigment, leading to white patches. Although not contagious, it can affect confidence. Modern dermatology treatments help restore pigmentation and slow disease progression.",
    symptoms: [
      "White patches",
      "Hair whitening",
      "Symmetrical pigment loss",
      "Gradual spread",
      "Sensitive skin",
    ],
    category: "skin",
    image: findImage("Vitiligo"),
    treatments: treatmentList("Vitiligo"),
  },
  {
    id: 10,
    name: "Warts & Molluscum",
    slug: "warts-molluscum",
    quote: "Safe treatment today helps prevent spreading tomorrow.",
    description:
      "Warts and Molluscum Contagiosum are viral skin infections that produce small bumps on the skin. While some disappear naturally, professional treatment provides faster clearance and reduces the risk of spreading.",
    symptoms: [
      "Small raised bumps",
      "Rough surface",
      "Skin-colored growths",
      "Mild discomfort",
      "Spread to nearby skin",
    ],
    category: "skin",
    image: findImage("Warts & Molluscum"),
    treatments: treatmentList("Warts & Molluscum"),
  },
];

export const hairDiseases: Disease[] = [
  {
    id: 11,
    name: "Hair Loss",
    slug: "hair-loss",
    quote: "Understanding the cause of hair loss is the first step toward effective treatment.",
    description:
      "Hair loss can result from genetics, hormonal changes, medical conditions, or stress. A thorough evaluation helps identify the underlying cause and guides personalized treatment for optimal hair regrowth.",
    symptoms: [
      "Gradual thinning",
      "Bald patches",
      "Excessive shedding",
      "Receding hairline",
      "Widening part",
    ],
    category: "hair",
    image: "/images/diseases/psoriasis.webp",
    treatments: [
      "Medical Management",
      "PRP Therapy",
      "Hair Transplant Evaluation",
      "Topical Solutions",
    ],
  },
  {
    id: 12,
    name: "Dandruff",
    slug: "dandruff",
    quote: "A healthy scalp is the foundation of healthy hair.",
    description:
      "Dandruff is a common scalp condition causing flaking and itching. It can result from dry skin, seborrheic dermatitis, or fungal overgrowth. Proper treatment controls flaking and soothes the scalp.",
    symptoms: ["White flakes", "Itchy scalp", "Dryness", "Redness", "Greasy patches"],
    category: "hair",
    image: "/images/diseases/psoriasis.webp",
    treatments: ["Medicated Shampoos", "Topical Treatments", "Medical Management", "Scalp Therapy"],
  },
];
