export interface TreatmentData {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  intro: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
}

export const treatments: TreatmentData[] = [
  {
    slug: "acne-treatment",
    title: "Acne Treatment in Armoor",
    shortTitle: "Acne Treatment",
    metaDescription:
      "Effective acne and pimple treatment in Armoor by Dr. Raghavendhra MD, DVL. Advanced therapies for acne scars, cystic acne, and hormonal breakouts. Book a consultation today.",
    intro:
      "Acne is one of the most common skin conditions affecting people of all ages. At Armoor Skin & Hair Clinic, we provide comprehensive acne treatment tailored to your skin type and severity — from mild breakouts to severe cystic acne and acne scars.",
    symptoms: [
      "Whiteheads and blackheads (comedones)",
      "Papules — small red, tender bumps",
      "Pustules — pimples with pus at the tip",
      "Nodules — large, painful lumps beneath the skin",
      "Cystic lesions — deep, pus-filled lumps",
      "Post-acne dark spots and scars",
    ],
    causes: [
      "Excess sebum (oil) production",
      "Clogged hair follicles by dead skin cells",
      "Bacterial overgrowth (Cutibacterium acnes)",
      "Hormonal fluctuations during adolescence, menstruation, or pregnancy",
      "Stress and lifestyle factors",
      "Certain medications and cosmetic products",
    ],
    treatments: [
      "Personalised topical and oral medications",
      "Chemical peels for active acne and pigmentation",
      "Acne scar management with microneedling and laser therapy",
      "Dietary and lifestyle guidance",
      "Regular follow-ups for long-term skin health",
    ],
    whyUs: [
      "Expert dermatologist with advanced training in acne management",
      "Customised treatment plans for every skin type",
      "Modern therapeutic approaches including chemical peels and laser",
      "Compassionate care in a comfortable clinic environment",
      "Affordable consultation in Armoor",
    ],
    faqs: [
      {
        q: "How long does acne treatment take to show results?",
        a: "Most patients notice improvement within 4–6 weeks of consistent treatment. Complete clearance may take 3–6 months depending on severity.",
      },
      {
        q: "Can acne scars be removed completely?",
        a: "While complete removal may not always be possible, modern treatments like microneedling, chemical peels, and laser therapy can significantly reduce the appearance of acne scars.",
      },
      {
        q: "Is acne treatment painful?",
        a: "Most treatments are painless or cause minimal discomfort. Chemical peels may cause a mild tingling sensation, and microneedling is performed under numbing cream for your comfort.",
      },
    ],
  },
  {
    slug: "hair-loss-treatment",
    title: "Hair Loss Treatment in Armoor",
    shortTitle: "Hair Loss Treatment",
    metaDescription:
      "Advanced hair fall treatment in Armoor by Dr. Raghavendhra MD, DVL. Evidence-based solutions for pattern baldness, alopecia, and thinning hair. Book your consultation.",
    intro:
      "Hair loss can be distressing, but effective solutions are available. At Armoor Skin & Hair Clinic, we diagnose the root cause of your hair fall and offer evidence-based treatments to promote hair growth and prevent further loss.",
    symptoms: [
      "Gradual thinning on the crown or top of the scalp",
      "Sudden patchy hair loss (alopecia areata)",
      "Excessive shedding during washing or brushing",
      "Receding hairline in men",
      "Widening part line in women",
      "Itchy or flaky scalp accompanying hair fall",
    ],
    causes: [
      "Genetic predisposition (androgenetic alopecia)",
      "Hormonal changes (pregnancy, thyroid disorders, menopause)",
      "Nutritional deficiencies (iron, vitamin D, biotin, zinc)",
      "Stress and lifestyle factors",
      "Scalp conditions like dandruff and psoriasis",
      "Certain medications and medical treatments",
    ],
    treatments: [
      "Comprehensive hair and scalp evaluation",
      "Topical and oral medications for hair regrowth",
      "Nutritional supplementation and dietary guidance",
      "Platelet-rich plasma (PRP) therapy for hair stimulation",
      "Management of underlying scalp conditions",
    ],
    whyUs: [
      "Expert diagnosis by a qualified dermatologist",
      "Evidence-based treatment protocols",
      "Personalised approach for different types of hair loss",
      "Combination therapies for optimal results",
      "Trusted by thousands of patients in Armoor and Nizamabad",
    ],
    faqs: [
      {
        q: "Can hair fall be stopped completely?",
        a: "In most cases, hair fall can be significantly reduced and managed with proper treatment. Early intervention leads to better outcomes.",
      },
      {
        q: "Is PRP treatment effective for hair loss?",
        a: "Yes, PRP (Platelet-Rich Plasma) therapy has shown excellent results for androgenetic alopecia by stimulating hair follicles and promoting natural growth.",
      },
      {
        q: "How many sessions are needed for hair loss treatment?",
        a: "The number of sessions depends on the severity and type of hair loss. Most patients require 4–6 sessions spaced 4–6 weeks apart for optimal results.",
      },
    ],
  },
  {
    slug: "psoriasis-treatment",
    title: "Psoriasis Treatment in Armoor",
    shortTitle: "Psoriasis Treatment",
    metaDescription:
      "Expert psoriasis treatment in Armoor by Dr. Raghavendhra MD, DVL. Manage plaque psoriasis, scalp psoriasis, and nail psoriasis with modern dermatological care.",
    intro:
      "Psoriasis is a chronic autoimmune condition that causes rapid skin cell buildup, resulting in thick, red, scaly patches. At our clinic, we offer comprehensive management strategies to reduce flare-ups and improve quality of life.",
    symptoms: [
      "Thick, red patches of skin covered with silvery-white scales",
      "Dry, cracked skin that may bleed",
      "Itching, burning, or soreness",
      "Thickened, pitted, or ridged nails",
      "Scalp psoriasis with dandruff-like scaling",
      "Joint pain and stiffness in some cases (psoriatic arthritis)",
    ],
    causes: [
      "Autoimmune response where skin cells multiply too rapidly",
      "Genetic predisposition",
      "Triggers include stress, infections, injury to skin, and certain medications",
      "Weather changes, especially cold and dry conditions",
      "Smoking and alcohol consumption",
    ],
    treatments: [
      "Topical treatments including corticosteroids and vitamin D analogues",
      "Phototherapy (light therapy) for moderate to severe cases",
      "Systemic medications for advanced psoriasis",
      "Scalp psoriasis management",
      "Lifestyle modifications to reduce triggers",
      "Long-term maintenance and flare-up prevention plans",
    ],
    whyUs: [
      "Specialised care for chronic skin conditions like psoriasis",
      "Access to phototherapy and advanced medications",
      "Individualised treatment plans based on severity",
      "Focus on improving quality of life and reducing flare-ups",
      "Conveniently located in Armoor for easy follow-ups",
    ],
    faqs: [
      {
        q: "Is psoriasis contagious?",
        a: "No, psoriasis is not contagious. It is an autoimmune condition and cannot be transmitted through touch or close contact.",
      },
      {
        q: "Can psoriasis be cured completely?",
        a: "While there is no permanent cure, psoriasis can be effectively managed with proper treatment, allowing most patients to achieve clear or nearly clear skin.",
      },
      {
        q: "Is phototherapy safe for psoriasis?",
        a: "Yes, phototherapy under medical supervision is a safe and effective treatment for moderate to severe psoriasis. Our dermatologist determines the appropriate type and dosage.",
      },
    ],
  },
  {
    slug: "vitiligo-treatment",
    title: "Vitiligo Treatment in Armoor",
    shortTitle: "Vitiligo Treatment",
    metaDescription:
      "Vitiligo treatment in Armoor by Dr. Raghavendhra MD, DVL. Medical and surgical options for repigmentation including topical therapies, phototherapy, and more.",
    intro:
      "Vitiligo is a condition where the skin loses its pigment cells, resulting in white patches. At Armoor Skin & Hair Clinic, we offer both medical and surgical treatment options to help restore skin colour and boost confidence.",
    symptoms: [
      "White patches on the skin, often starting on hands, feet, face, or genitals",
      "Premature whitening of hair on the scalp, eyebrows, or eyelashes",
      "Patches are usually painless but may be sensitive to sun",
      "Patches may spread slowly over time",
      "Symmetrical or localised distribution of white patches",
    ],
    causes: [
      "Autoimmune destruction of melanocytes (pigment-producing cells)",
      "Genetic factors — family history increases risk",
      "Oxidative stress and environmental triggers",
      "May be associated with other autoimmune conditions",
    ],
    treatments: [
      "Topical corticosteroids and calcineurin inhibitors",
      "Phototherapy (narrowband UVB and excimer laser)",
      "Oral medications and antioxidants",
      "Surgical options including skin grafting for stable vitiligo",
      "Camouflage therapy and sun protection guidance",
    ],
    whyUs: [
      "Comprehensive vitiligo care from diagnosis to treatment",
      "Access to phototherapy and advanced medical therapies",
      "Personalised treatment duration and follow-up schedule",
      "Sensitive and supportive approach to patient concerns",
      "Affordable care in Armoor and surrounding areas",
    ],
    faqs: [
      {
        q: "Can vitiligo be treated?",
        a: "Yes, vitiligo is treatable. While results vary, many patients achieve significant repigmentation with consistent treatment over several months.",
      },
      {
        q: "How long does vitiligo treatment take?",
        a: "Vitiligo treatment is gradual. Repigmentation typically begins after 3–6 months of regular treatment, and full results may take 12–18 months.",
      },
      {
        q: "Is vitiligo treatment safe?",
        a: "Yes, all our treatments are safe and administered under medical supervision. We use FDA-approved therapies and monitor progress regularly.",
      },
    ],
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation Treatment in Armoor",
    shortTitle: "Pigmentation Treatment",
    metaDescription:
      "Effective pigmentation treatment in Armoor by Dr. Raghavendhra MD, DVL. Solutions for melasma, dark spots, sun damage, and uneven skin tone. Book a consultation.",
    intro:
      "Pigmentation disorders like melasma, dark spots, and uneven skin tone can affect your confidence. Our clinic offers advanced treatments to lighten pigmentation and restore a clear, even complexion.",
    symptoms: [
      "Dark patches on the face, especially cheeks, forehead, and upper lip",
      "Sun spots or age spots on sun-exposed areas",
      "Post-inflammatory hyperpigmentation after acne or injury",
      "Uneven skin tone and texture",
      "Dark circles and periorbital hyperpigmentation",
    ],
    causes: [
      "Sun exposure and UV damage",
      "Hormonal changes (melasma during pregnancy or with oral contraceptives)",
      "Post-inflammatory response (after acne, eczema, or injury)",
      "Genetic predisposition",
      "Certain medications and cosmetic products",
    ],
    treatments: [
      "Medical-grade chemical peels for pigmentation",
      "Topical depigmenting agents (hydroquinone, kojic acid, vitamin C)",
      "Oral antioxidants and skin brightening supplements",
      "Laser therapy for stubborn pigmentation",
      "Sun protection counselling and medical-grade sunscreens",
      "Maintenance and prevention plans",
    ],
    whyUs: [
      "Advanced pigmentation management with modern therapies",
      "Customised treatment protocols for different pigmentation types",
      "Access to chemical peels, laser, and topical combinations",
      "Focus on both treatment and long-term prevention",
      "Trusted dermatology care in Armoor",
    ],
    faqs: [
      {
        q: "How many sessions are needed for pigmentation treatment?",
        a: "Most patients require 4–6 sessions of chemical peels or laser therapy spaced 3–4 weeks apart. Topical treatments show results in 8–12 weeks.",
      },
      {
        q: "Is pigmentation treatment permanent?",
        a: "Results are long-lasting with proper maintenance including sun protection and skincare. Some conditions like melasma may require periodic touch-ups.",
      },
      {
        q: "Can chemical peels treat melasma?",
        a: "Yes, chemical peels are very effective for melasma when performed by an experienced dermatologist as part of a comprehensive treatment plan.",
      },
    ],
  },
  {
    slug: "eczema-treatment",
    title: "Eczema Treatment in Armoor",
    shortTitle: "Eczema Treatment",
    metaDescription:
      "Expert eczema and dermatitis treatment in Armoor by Dr. Raghavendhra MD, DVL. Relief from itchy, inflamed skin with personalised care plans.",
    intro:
      "Eczema (atopic dermatitis) causes dry, itchy, and inflamed skin that can significantly impact daily life. Our dermatologist provides comprehensive eczema care to soothe symptoms, prevent flare-ups, and improve skin barrier function.",
    symptoms: [
      "Intense itching, especially at night",
      "Dry, scaly, or cracked skin",
      "Red to brownish-grey patches, especially on hands, feet, ankles, wrists, neck, and face",
      "Small, raised bumps that may leak fluid and crust",
      "Thickened, leathery skin from chronic scratching",
      "Raw, sensitive, swollen skin from scratching",
    ],
    causes: [
      "Genetic factors affecting skin barrier function",
      "Immune system overreaction to triggers",
      "Environmental triggers (pollen, dust mites, pet dander)",
      "Irritants (soaps, detergents, fragrances)",
      "Stress and emotional factors",
      "Climate changes — cold, dry weather worsens symptoms",
    ],
    treatments: [
      "Moisturisation and skin barrier repair",
      "Topical corticosteroids and non-steroidal anti-inflammatories",
      "Antihistamines for itch relief",
      "Identification and avoidance of trigger factors",
      "Wet wrap therapy for severe flare-ups",
      "Long-term maintenance with gentle skincare routine",
    ],
    whyUs: [
      "Expert management of chronic eczema and dermatitis",
      "Patient education on trigger avoidance and skincare",
      "Personalised treatment plans for all age groups",
      "Gentle paediatric dermatology for children with eczema",
      "Conveniently located in Armoor",
    ],
    faqs: [
      {
        q: "Can eczema be cured?",
        a: "While eczema has no permanent cure, it can be effectively managed with proper treatment and skincare, allowing most patients to live comfortably.",
      },
      {
        q: "What triggers eczema flare-ups?",
        a: "Common triggers include dry skin, irritants (soaps, detergents), allergens (dust, pollen), stress, sweating, and climate changes.",
      },
      {
        q: "Is eczema treatment safe for children?",
        a: "Yes, we provide gentle, child-safe treatments for paediatric eczema. Our dermatologist specialises in skin care for infants and children.",
      },
    ],
  },
  {
    slug: "skin-allergy-treatment",
    title: "Skin Allergy Treatment in Armoor",
    shortTitle: "Skin Allergy Treatment",
    metaDescription:
      "Skin allergy treatment in Armoor by Dr. Raghavendhra MD, DVL. Relief from hives, contact dermatitis, rashes, and allergic skin reactions. Book your appointment.",
    intro:
      "Skin allergies can cause uncomfortable rashes, hives, and swelling. At Armoor Skin & Hair Clinic, we diagnose the underlying cause of your allergic reactions and provide effective relief and prevention strategies.",
    symptoms: [
      "Red, itchy rash or hives (urticaria) on the skin",
      "Swelling of the face, lips, or eyelids (angioedema)",
      "Burning or stinging sensation on the skin",
      "Dry, cracked, or peeling skin after exposure",
      "Blisters or oozing in severe contact dermatitis",
      "Chronic itching without visible rash in some cases",
    ],
    causes: [
      "Contact allergens (nickel, latex, fragrances, cosmetics)",
      "Food allergies triggering skin reactions",
      "Medication reactions",
      "Insect bites and stings",
      "Seasonal allergens (pollen, mould)",
      "Stress-induced urticaria",
    ],
    treatments: [
      "Identification of allergens through clinical history",
      "Antihistamines and anti-allergy medications",
      "Topical corticosteroids for inflamed skin",
      "Avoidance strategies and patient education",
      "Management of chronic urticaria",
      "Emergency action plans for severe reactions",
    ],
    whyUs: [
      "Thorough evaluation of allergic skin conditions",
      "Effective medication management for acute and chronic allergies",
      "Patient education on trigger avoidance",
      "Compassionate care for sensitive skin",
      "Located in Armoor for easy access",
    ],
    faqs: [
      {
        q: "How are skin allergies diagnosed?",
        a: "Skin allergies are diagnosed through clinical examination and detailed history. Patch testing may be recommended for contact dermatitis.",
      },
      {
        q: "Can skin allergies be cured?",
        a: "Many skin allergies can be effectively managed by identifying and avoiding triggers, with medications to control symptoms during flare-ups.",
      },
      {
        q: "How quickly do allergy treatments work?",
        a: "Antihistamines provide relief within 30–60 minutes. Topical treatments for contact dermatitis show improvement within a few days.",
      },
    ],
  },
  {
    slug: "fungal-infection-treatment",
    title: "Fungal Infection Treatment in Armoor",
    shortTitle: "Fungal Infection Treatment",
    metaDescription:
      "Fungal infection treatment in Armoor by Dr. Raghavendhra MD, DVL. Effective solutions for ringworm, athlete's foot, candidiasis, and other fungal skin conditions.",
    intro:
      "Fungal skin infections are common in warm and humid climates like Armoor. Our clinic provides accurate diagnosis and effective treatment for all types of fungal infections affecting the skin, nails, and scalp.",
    symptoms: [
      "Red, itchy, ring-shaped rashes (ringworm/ tinea)",
      "Scaly, peeling skin between the toes (athlete's foot)",
      "White or yellow discolouration of nails (nail fungus)",
      "Itchy, flaky scalp with patches of hair loss",
      "Moist, red areas in skin folds (intertrigo)",
      "White discharge and itching in genital areas (candidiasis)",
    ],
    causes: [
      "Dermatophyte fungi that thrive in warm, moist environments",
      "Poor hygiene or sharing towels, clothing, or footwear",
      "Excessive sweating and humidity",
      "Weakened immune system",
      "Diabetes and other metabolic conditions",
      "Close contact with infected individuals or pets",
    ],
    treatments: [
      "Topical antifungal creams, powders, and sprays",
      "Oral antifungal medications for widespread or resistant infections",
      "Scalp and nail fungus treatment protocols",
      "Prevention advice and hygiene guidance",
      "Management of underlying conditions contributing to infections",
    ],
    whyUs: [
      "Accurate diagnosis through clinical examination and investigations",
      "Effective treatment with modern antifungal therapies",
      "Personalised treatment duration based on infection type",
      "Preventive education to reduce recurrence",
      "Trusted dermatology care in Armoor and Nizamabad",
    ],
    faqs: [
      {
        q: "How long does fungal infection treatment take?",
        a: "Skin fungal infections typically resolve in 2–4 weeks with treatment. Nail fungus may require 3–6 months of oral medication for complete clearance.",
      },
      {
        q: "Can fungal infections come back?",
        a: "Yes, recurrence is possible, especially if hygiene measures are not maintained. Following prevention advice can significantly reduce the risk.",
      },
      {
        q: "Are oral antifungal medications safe?",
        a: "Yes, when prescribed and monitored by a dermatologist, oral antifungals are safe and effective. Regular monitoring may be required for prolonged courses.",
      },
    ],
  },
  {
    slug: "dandruff-treatment",
    title: "Dandruff Treatment in Armoor",
    shortTitle: "Dandruff Treatment",
    metaDescription:
      "Effective dandruff and scalp treatment in Armoor by Dr. Raghavendhra MD, DVL. Relief from flaking, itching, and scalp irritation. Book an appointment today.",
    intro:
      "Dandruff is a common scalp condition that causes flaking and itching. At Armoor Skin & Hair Clinic, we treat the root cause of dandruff — whether it's dry skin, seborrheic dermatitis, or fungal overgrowth — for lasting relief.",
    symptoms: [
      "White or yellow flakes on the scalp, hair, and shoulders",
      "Itchy scalp",
      "Red, greasy patches on the scalp (seborrheic dermatitis)",
      "Dry or oily scalp",
      "Flaking that worsens in cold or dry weather",
      "Mild hair fall associated with scalp inflammation",
    ],
    causes: [
      "Overgrowth of Malassezia yeast on the scalp",
      "Excess oil production (sebum)",
      "Dry skin",
      "Seborrheic dermatitis — a chronic inflammatory condition",
      "Infrequent shampooing",
      "Sensitivity to hair care products",
    ],
    treatments: [
      "Medicated anti-dandruff shampoos (ketoconazole, zinc pyrithione, selenium sulphide)",
      "Scalp treatments and lotions",
      "Management of seborrheic dermatitis",
      "Hair care routine guidance",
      "Treatment of associated conditions like scalp psoriasis",
    ],
    whyUs: [
      "Proper diagnosis of the underlying cause of dandruff",
      "Prescription-grade medicated shampoos and treatments",
      "Guidance on long-term scalp health maintenance",
      "Care for related conditions like seborrheic dermatitis",
      "Affordable consultation in Armoor",
    ],
    faqs: [
      {
        q: "Can dandruff be cured permanently?",
        a: "While dandruff may recur, it can be effectively controlled with proper treatment and a regular scalp care routine.",
      },
      {
        q: "Is dandruff contagious?",
        a: "No, dandruff is not contagious. It is a scalp condition caused by yeast overgrowth, dry skin, or seborrheic dermatitis.",
      },
      {
        q: "How often should I use medicated shampoo?",
        a: "Frequency depends on the severity. Typically 2–3 times per week initially, reducing to once weekly for maintenance as symptoms improve.",
      },
    ],
  },
  {
    slug: "nail-disorders",
    title: "Nail Disorders Treatment in Armoor",
    shortTitle: "Nail Disorders Treatment",
    metaDescription:
      "Nail disorder treatment in Armoor by Dr. Raghavendhra MD, DVL. Expert care for fungal nails, ingrown nails, brittle nails, and other nail conditions.",
    intro:
      "Nail disorders can be painful, unsightly, and indicate underlying health issues. Our dermatologist diagnoses and treats all types of nail conditions, from fungal infections to ingrown nails and psoriatic nail changes.",
    symptoms: [
      "Thickened, discoloured (yellow/brown) nails (fungal infection)",
      "Brittle, splitting, or peeling nails",
      "Pitted or ridged nail surface (psoriatic nails)",
      "Pain, redness, or swelling around the nail (ingrown nail)",
      "White spots or streaks on nails",
      "Nail separation from the nail bed",
    ],
    causes: [
      "Fungal infections (onychomycosis)",
      "Psoriasis affecting the nails",
      "Trauma or injury to the nail",
      "Nutritional deficiencies",
      "Bacterial infections (paronychia)",
      "Underlying medical conditions (thyroid disorders, anaemia)",
    ],
    treatments: [
      "Oral and topical antifungal medications for nail fungus",
      "Nail care and hygiene guidance",
      "Treatment of ingrown nails and paronychia",
      "Management of psoriatic nail changes",
      "Nutritional counselling for healthy nail growth",
    ],
    whyUs: [
      "Comprehensive nail disorder diagnosis and treatment",
      "Effective management of fungal nail infections",
      "Personalised care for chronic nail conditions",
      "Gentle treatment approaches for sensitive patients",
      "Trusted dermatology care in Armoor",
    ],
    faqs: [
      {
        q: "How long does nail fungus treatment take?",
        a: "Nail fungus treatment takes 3–6 months for fingernails and 6–12 months for toenails, as nails grow slowly and medication needs time to work.",
      },
      {
        q: "Can brittle nails be treated?",
        a: "Yes, brittle nails can be improved by identifying the underlying cause, nutritional supplementation, and proper nail care routines.",
      },
      {
        q: "Do I need to see a dermatologist for nail problems?",
        a: "Yes, a dermatologist can accurately diagnose nail conditions and provide effective treatment that your general physician may not offer.",
      },
    ],
  },
  {
    slug: "wart-removal",
    title: "Wart Removal in Armoor",
    shortTitle: "Wart Removal",
    metaDescription:
      "Safe and effective wart removal in Armoor by Dr. Raghavendhra MD, DVL. Treatments for common warts, plantar warts, and genital warts. Book your appointment.",
    intro:
      "Warts are caused by the human papillomavirus (HPV) and can appear anywhere on the body. At Armoor Skin & Hair Clinic, we offer safe, effective wart removal treatments with minimal discomfort.",
    symptoms: [
      "Small, rough, flesh-coloured or grey bumps on the skin",
      "Plantar warts on the soles — painful when walking",
      "Flat warts on the face or hands — smooth, flat-topped bumps",
      "Filiform warts — long, narrow growths on face or neck",
      "Clusters of warts that may spread",
      "Black dots (clotted blood vessels) inside the wart",
    ],
    causes: [
      "Human papillomavirus (HPV) infection",
      "Direct skin-to-skin contact with an infected person",
      "Contact with contaminated surfaces (public pools, gyms)",
      "Minor cuts or breaks in the skin facilitate entry",
      "Weakened immune system increases susceptibility",
    ],
    treatments: [
      "Cryotherapy (freezing with liquid nitrogen)",
      "Electrocautery and curettage for stubborn warts",
      "Chemical cautery with trichloroacetic acid",
      "Topical medications and immunotherapy",
      "Laser treatment for resistant warts",
      "Prevention advice to reduce spread",
    ],
    whyUs: [
      "Quick and effective wart removal in the clinic",
      "Minimal discomfort with modern techniques",
      "Treatment for all types of warts including plantar and genital",
      "Preventive guidance to avoid recurrence and spread",
      "Affordable dermatology care in Armoor",
    ],
    faqs: [
      {
        q: "Is wart removal painful?",
        a: "Cryotherapy and cautery may cause mild discomfort during the procedure, but it is brief and well-tolerated by most patients.",
      },
      {
        q: "Do warts come back after removal?",
        a: "There is a small chance of recurrence as warts are caused by a virus. Multiple sessions may be needed for complete clearance.",
      },
      {
        q: "How many sessions are needed for wart removal?",
        a: "Most warts resolve in 1–3 sessions. Plantar warts and large warts may require additional treatments.",
      },
    ],
  },
  {
    slug: "mole-removal",
    title: "Mole Removal in Armoor",
    shortTitle: "Mole Removal",
    metaDescription:
      "Safe mole removal in Armoor by Dr. Raghavendhra MD, DVL. Medical and cosmetic mole evaluation and removal with precision care. Book a consultation.",
    intro:
      "Moles are common skin growths, but some may require removal for medical or cosmetic reasons. At Armoor Skin & Hair Clinic, we perform mole evaluation and removal with precision and care.",
    symptoms: [
      "Brown, black, or flesh-coloured spots or growths on the skin",
      "Raised or flat moles anywhere on the body",
      "Moles that change in size, shape, or colour (requires urgent evaluation)",
      "Itching, bleeding, or crusting moles",
      "Moles that rub against clothing or jewellery causing irritation",
      "Atypical moles with irregular borders or multiple colours",
    ],
    causes: [
      "Clusters of melanocytes (pigment-producing cells)",
      "Genetic factors — family history of moles",
      "Sun exposure and UV damage",
      "Hormonal changes during puberty or pregnancy",
    ],
    treatments: [
      "Clinical and dermoscopic evaluation of all moles",
      "Shave excision for raised moles",
      "Surgical excision with sutures for deeper moles",
      "Histopathological examination of removed tissue when indicated",
      "ABCDE mole check for skin cancer screening",
    ],
    whyUs: [
      "Thorough mole evaluation using dermoscopy",
      "Safe removal techniques with minimal scarring",
      "Histopathology for suspicious moles",
      "Cosmetic mole removal for improved appearance",
      "Trusted dermatology care in Armoor",
    ],
    faqs: [
      {
        q: "Is mole removal safe?",
        a: "Yes, mole removal is a safe procedure when performed by a qualified dermatologist. We follow strict sterilisation protocols.",
      },
      {
        q: "Will mole removal leave a scar?",
        a: "Most mole removals leave minimal scarring that fades over time. Our techniques are designed to minimise visible marks.",
      },
      {
        q: "When should I get a mole checked?",
        a: "You should get any mole checked if it changes in size, shape, or colour, becomes itchy or bleeds, or if you have a family history of skin cancer.",
      },
    ],
  },
];

export const treatmentSlugs = treatments.map((t) => t.slug);
