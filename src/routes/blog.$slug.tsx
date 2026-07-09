import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Phone, User } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  PHONE_TEL,
  SITE_URL,
  PHONE,
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
    excerpt: "Learn effective strategies to prevent hair fall and promote healthy hair growth.",
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
    excerpt: "Discover the most effective acne treatments available today.",
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
      "Protect your skin during the hot Telangana summer with these dermatologist-approved tips.",
    date: "May 2026",
    readTime: "4 min read",
    category: "Skin Care",
    content: [
      "Summer in Telangana brings intense heat and humidity that can wreak havoc on your skin. Here's how to keep your skin healthy and glowing.",
      "Sun Protection is Non-Negotiable: Apply a broad-spectrum sunscreen with SPF 50+ every morning, and reapply every 4 hours.",
      "Stay Hydrated: Drink at least 8-10 glasses of water daily. Use a lightweight, oil-free moisturiser to maintain skin hydration.",
      "Cleanse Gently: Wash your face twice daily with a gentle cleanser. Avoid harsh soaps that strip natural oils.",
      "Exfoliate Weekly: Use a gentle exfoliator once a week to remove dead skin cells and prevent clogged pores.",
      "Lightweight Products: Switch to gel-based or water-based skincare products. Avoid heavy creams and oil-based makeup.",
      "Consult a dermatologist if you experience summer-related skin issues like heat rash, fungal infections, or sun allergies.",
    ],
  },
  {
    slug: "understanding-skin-allergies",
    title: "Understanding Skin Allergies: Causes, Symptoms, and Treatment",
    excerpt:
      "Comprehensive guide to skin allergies including contact dermatitis, hives, and allergic reactions.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Skin Allergies",
    content: [
      "Skin allergies occur when your immune system reacts to substances that normally don't cause problems.",
      "Common types: contact dermatitis (reaction to direct contact with an allergen), urticaria (hives), and angioedema (swelling of deeper skin layers).",
      "Common Triggers: Nickel in jewellery, fragrances in cosmetics, latex, poison ivy, certain medications, food allergies, insect stings.",
      "Symptoms: Redness, itching, swelling, hives, dry or cracked skin, burning sensation, and blisters in severe cases.",
      "Treatment Options: Antihistamines provide relief from itching and hives. Topical corticosteroids reduce inflammation.",
      "When to See a Dermatologist: If your symptoms persist despite over-the-counter treatments or spread rapidly, consult a dermatologist.",
    ],
  },
  {
    slug: "dandruff-prevention-tips",
    title: "Dandruff Prevention: Tips for a Healthy Scalp",
    excerpt: "Effective tips to prevent dandruff and maintain a healthy scalp.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Hair Care",
    content: [
      "Dandruff affects nearly half the population. While it's not serious, it can be embarrassing and uncomfortable.",
      "Wash Your Hair Regularly: Use a gentle shampoo to remove excess oil and dead skin cells. For dandruff-prone scalps, washing every other day is recommended.",
      "Use Anti-Dandruff Shampoos: Look for shampoos containing ketoconazole, zinc pyrithione, selenium sulphide, or salicylic acid.",
      "Avoid Scratching: Scratching can damage your scalp and worsen dandruff. Use gentle circular motions when washing.",
      "Manage Stress: Stress can trigger or worsen dandruff. Practice relaxation techniques.",
      "Healthy Diet: Include zinc, B vitamins, and omega-3 fatty acids in your diet.",
      "If over-the-counter products don't help within 4 weeks, consult a dermatologist.",
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
      "Many people delay seeing a dermatologist, but early intervention can prevent minor issues from becoming serious problems.",
      "1. Persistent Acne: If over-the-counter products haven't cleared your acne after 2-3 months, a dermatologist can provide prescription medications.",
      "2. Changing Moles: Any mole that changes in size, shape, or colour needs immediate evaluation.",
      "3. Chronic Skin Conditions: Conditions like eczema, psoriasis, and rosacea require professional management.",
      "4. Unexplained Hair Loss: Losing more than 100 hairs daily or noticing bald patches warrants a dermatological evaluation.",
      "5. Skin Allergies or Rashes: Persistent or severe rashes need proper diagnosis to identify triggers.",
      "At Armoor Skin & Hair Clinic, Dr. Raghavendhra provides comprehensive dermatology care.",
    ],
  },
];

function findPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.post.title} | ${CLINIC_NAME} Blog` },
        { name: "description", content: loaderData.post.excerpt },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: loaderData.post.title },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:url", content: `${SITE_URL}/blog/${loaderData.post.slug}` },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: loaderData.post.title },
        { name: "twitter:description", content: loaderData.post.excerpt },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${loaderData.post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.post.title,
            description: loaderData.post.excerpt,
            author: {
              "@type": "Person",
              name: DOCTOR_NAME,
            },
            publisher: {
              "@type": "Organization",
              name: CLINIC_NAME,
            },
            datePublished: loaderData.post.date,
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-foreground">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          The blog article you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <article>
          <PostHeader post={post} />
          <PostContent post={post} />
        </article>
        <AuthorSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function PostHeader({ post }: { post: BlogPost }) {
  return (
    <div
      className="relative pt-28 pb-12 sm:pt-36 sm:pb-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-white/80">{post.excerpt}</p>
      </div>
    </div>
  );
}

function PostContent({ post }: { post: BlogPost }) {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuthorSection() {
  return (
    <section className="bg-secondary/40 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <User className="h-6 w-6" />
          </div>
          <div>
            <p className="font-display text-base font-bold text-foreground">
              Written by {DOCTOR_NAME}, {QUALIFICATION}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Consultant Dermatologist at {CLINIC_NAME}, Armoor. With years of experience in
              treating skin, hair, and nail conditions, Dr. Raghavendhra is dedicated to providing
              expert care and education to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16" style={{ background: "var(--gradient-navy)" }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white">
          Need personalised dermatology advice?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a consultation with {DOCTOR_NAME} at {CLINIC_NAME} in Armoor.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Book a Consultation
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
          >
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
