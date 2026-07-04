import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Stethoscope } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  PHONE,
  PHONE_TEL,
  SITE_URL,
} from "../lib/clinic-data";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "how-to-prevent-hair-fall",
    title: "How to Prevent Hair Fall: Expert Tips from a Dermatologist",
    excerpt:
      "Learn effective strategies to prevent hair fall and promote healthy hair growth. Expert advice from Dr. Raghavendhra, dermatologist in Armoor.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Hair Care",
    content: [
      "Hair fall is a common concern that affects millions of people. While losing 50-100 hairs per day is normal, excessive hair loss requires attention. Here are expert-recommended strategies to prevent hair fall.",
      "1. Maintain a Balanced Diet: Your hair needs adequate protein, iron, zinc, and vitamins (especially biotin and vitamin D). Include eggs, leafy greens, nuts, and fish in your diet.",
      "2. Avoid Harsh Treatments: Limit the use of chemical treatments, heat styling, and tight hairstyles that pull on your hair roots.",
      "3. Use Gentle Hair Products: Choose sulfate-free shampoos and conditioners suitable for your hair type. Avoid overwashing your hair.",
      "4. Manage Stress: Chronic stress can trigger hair loss. Practice relaxation techniques like meditation and yoga.",
      "5. Stay Hydrated: Drink plenty of water to keep your scalp and hair hydrated.",
      "6. Get Regular Check-ups: If you notice persistent hair fall, consult a dermatologist. Early intervention can prevent further loss.",
      "At Armoor Skin & Hair Clinic, we offer comprehensive hair loss evaluation and treatment. Book a consultation with Dr. Raghavendhra for personalised advice.",
    ],
  },
  {
    slug: "best-acne-treatments",
    title: "Best Acne Treatments: A Complete Guide to Clear Skin",
    excerpt:
      "Discover the most effective acne treatments available today. From topical medications to advanced procedures, find the right solution for your skin.",
    date: "June 2026",
    readTime: "6 min read",
    category: "Skin Care",
    content: [
      "Acne is one of the most common skin conditions, affecting people of all ages. The good news is that effective treatments are available for every type and severity of acne.",
      "Topical Treatments: Over-the-counter products containing benzoyl peroxide, salicylic acid, or retinoids can help mild acne. For moderate to severe acne, prescription topical medications are more effective.",
      "Oral Medications: Antibiotics, hormonal treatments (for women), and isotretinoin are powerful options for persistent or severe acne. These require a dermatologist's prescription and monitoring.",
      "Chemical Peels: Medical-grade chemical peels can reduce acne, unclog pores, and improve skin texture. They're performed in-clinic by our dermatologist.",
      "Laser and Light Therapy: Advanced treatments target acne-causing bacteria and reduce oil production. They're particularly effective for inflammatory acne.",
      "Lifestyle Modifications: A healthy diet, proper skincare routine, and stress management can significantly improve acne outcomes.",
      "For personalised acne treatment, visit Armoor Skin & Hair Clinic. Dr. Raghavendhra will create a customised plan for your skin type and concerns.",
    ],
  },
  {
    slug: "skin-care-during-summer",
    title: "Essential Skin Care Tips for Summer in Telangana",
    excerpt:
      "Protect your skin during the hot Telangana summer with these dermatologist-approved tips. Sun protection, hydration, and more.",
    date: "May 2026",
    readTime: "4 min read",
    category: "Skin Care",
    content: [
      "Summer in Telangana brings intense heat and humidity that can wreak havoc on your skin. Here's how to keep your skin healthy and glowing.",
      "Sun Protection is Non-Negotiable: Apply a broad-spectrum sunscreen with SPF 50+ every morning, and reapply every 4 hours. Use physical sunscreens containing zinc oxide or titanium dioxide for sensitive skin.",
      "Stay Hydrated: Drink at least 8-10 glasses of water daily. Use a lightweight, oil-free moisturiser to maintain skin hydration.",
      "Cleanse Gently: Wash your face twice daily with a gentle cleanser. Avoid harsh soaps that strip natural oils.",
      "Exfoliate Weekly: Use a gentle exfoliator once a week to remove dead skin cells and prevent clogged pores.",
      "Lightweight Products: Switch to gel-based or water-based skincare products. Avoid heavy creams and oil-based makeup.",
      "Protect Your Lips and Eyes: Use a lip balm with SPF and wear UV-protective sunglasses.",
      "Consult a dermatologist if you experience summer-related skin issues like heat rash, fungal infections, or sun allergies.",
    ],
  },
  {
    slug: "understanding-skin-allergies",
    title: "Understanding Skin Allergies: Causes, Symptoms, and Treatment",
    excerpt:
      "Comprehensive guide to skin allergies including contact dermatitis, hives, and allergic reactions. Learn how to identify triggers and find relief.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Skin Allergies",
    content: [
      "Skin allergies occur when your immune system reacts to substances that normally don't cause problems. They can range from mild irritation to severe reactions requiring medical attention.",
      "Common types of skin allergies include contact dermatitis (reaction to direct contact with an allergen), urticaria (hives), and angioedema (swelling of deeper skin layers).",
      "Common Triggers: Nickel in jewellery, fragrances in cosmetics, latex, poison ivy, certain medications, food allergies, insect stings, and environmental allergens like pollen.",
      "Symptoms: Redness, itching, swelling, hives, dry or cracked skin, burning sensation, and blisters in severe cases.",
      "Treatment Options: Antihistamines provide relief from itching and hives. Topical corticosteroids reduce inflammation. Avoiding identified triggers is the most effective prevention.",
      "When to See a Dermatologist: If your symptoms persist despite over-the-counter treatments, spread rapidly, or affect your daily life, consult a dermatologist.",
      "At Armoor Skin & Hair Clinic, we diagnose the root cause of your skin allergy and provide effective treatment plans.",
    ],
  },
  {
    slug: "dandruff-prevention-tips",
    title: "Dandruff Prevention: Tips for a Healthy Scalp",
    excerpt:
      "Effective tips to prevent dandruff and maintain a healthy scalp. Expert advice from Armoor's trusted dermatologist.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Hair Care",
    content: [
      "Dandruff affects nearly half the population at some point. While it's not serious, it can be embarrassing and uncomfortable. Here's how to prevent and manage it.",
      "Wash Your Hair Regularly: Use a gentle shampoo to remove excess oil and dead skin cells. For dandruff-prone scalps, washing every other day is recommended.",
      "Use Anti-Dandruff Shampoos: Look for shampoos containing ketoconazole, zinc pyrithione, selenium sulphide, or salicylic acid. Alternate with your regular shampoo.",
      "Avoid Scratching: Scratching can damage your scalp and worsen dandruff. Use gentle circular motions when washing.",
      "Manage Stress: Stress can trigger or worsen dandruff. Practice relaxation techniques.",
      "Healthy Diet: Include zinc, B vitamins, and omega-3 fatty acids in your diet. These nutrients support scalp health.",
      "Limit Styling Products: Hair gels, sprays, and waxes can build up on your scalp and worsen dandruff.",
      "If over-the-counter products don't help within 4 weeks, consult a dermatologist. You may need prescription-strength treatment.",
    ],
  },
  {
    slug: "signs-you-need-a-dermatologist",
    title: "5 Signs You Should Visit a Dermatologist",
    excerpt:
      "Wondering if it's time to see a dermatologist? Here are five signs that indicate you need professional skin care advice.",
    date: "February 2026",
    readTime: "4 min read",
    category: "General",
    content: [
      "Many people delay seeing a dermatologist, but early intervention can prevent minor issues from becoming serious problems. Here are five signs that it's time to book an appointment.",
      "1. Persistent Acne: If over-the-counter products haven't cleared your acne after 2-3 months, a dermatologist can provide prescription medications and advanced treatments like chemical peels.",
      "2. Changing Moles: Any mole that changes in size, shape, or colour, or becomes itchy or bleeds, needs immediate evaluation. Early detection of skin cancer is crucial.",
      "3. Chronic Skin Conditions: Conditions like eczema, psoriasis, and rosacea require professional management for effective symptom control.",
      "4. Unexplained Hair Loss: Losing more than 100 hairs daily or noticing bald patches warrants a dermatological evaluation to identify the cause.",
      "5. Skin Allergies or Rashes: Persistent or severe rashes need proper diagnosis to identify triggers and provide effective treatment.",
      "At Armoor Skin & Hair Clinic, Dr. Raghavendhra provides comprehensive dermatology care for all skin, hair, and nail concerns. Early consultation leads to better outcomes.",
    ],
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: `Dermatology Blog | Skin & Hair Care Tips | ${CLINIC_NAME} Armoor`,
      },
      {
        name: "description",
        content: `Expert dermatology and hair care articles from ${DOCTOR_NAME}, ${QUALIFICATION}. Tips on acne treatment, hair fall prevention, skin care, and more.`,
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: `Dermatology Blog | ${CLINIC_NAME}` },
      {
        property: "og:description",
        content: `Read expert articles on skin care, hair care, and dermatology treatments from ${DOCTOR_NAME}, consultant dermatologist in Armoor.`,
      },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { name: "twitter:title", content: `Dermatology Blog | ${CLINIC_NAME}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <BlogGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Skin & Hair Care Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Expert articles and tips from {DOCTOR_NAME}, {QUALIFICATION}. Stay informed about
          dermatology treatments, skin care, and hair health.
        </p>
      </div>
    </section>
  );
}

function BlogGrid() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                <span>Read more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-foreground">Stay Updated</h2>
        <p className="mt-4 text-muted-foreground">
          Get the latest dermatology tips and clinic updates delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const email = new FormData(form).get("email");
            if (email) {
              window.location.href = `https://wa.me/919603752752?text=${encodeURIComponent(`Hi, I want to subscribe to the newsletter. My email: ${email}`)}`;
            }
          }}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 sm:max-w-sm"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}


