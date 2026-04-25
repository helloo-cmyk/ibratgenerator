import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "What Is Brat Text? Aesthetic Explained",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/what-is-brat-text/",
  },
  description:
    "Learn about the iconic Brat text aesthetic, its origins, and why it became a viral sensation. Discover how to create your own bold graphics.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What font is used for Brat text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The aesthetic uses a bold sans-serif font similar to Arial or Helvetica, often with tight letter spacing and a low-resolution effect."
      }
    },
    {
      "@type": "Question",
      "name": "Is Brat text always green?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The iconic look is neon green with black text, but variations in pink, white, and black are also popular."
      }
    }
  ]
};

export default function WhatIsBratTextPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="AESTHETICS"
        title="What Is Brat Text? The Viral Trend Explained"
        subtitle="Exploring the minimalist typography that defined a cultural era."
        readTime="4 MIN READ"
        imageSrc="/examples/brat-text-ex-1.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">

        <div className="prose-container">
          <p className="hp-body-text mb-10 text-[17px] sm:text-[18px]">
            Brat text is the minimalist, bold typographic style inspired by Charli XCX&apos;s 2024 album cover. 
            It features lowercase sans-serif text on a bright neon green background.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">What Is Brat Text?</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            Brat text is defined by its extreme simplicity. It uses a clean, heavy font—similar to Arial—with tight letter spacing and a slightly blurry, low-resolution feel that mimics early internet graphics.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Where Brat Text Comes From</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            The aesthetic originated with the cover art for Charli XCX&apos;s album *Brat*. The design&apos;s raw, &quot;anti-design&quot; approach challenged polished social media standards and immediately went viral across TikTok, X, and Instagram.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">What Makes Brat Text Unique</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            The combination of high-contrast neon green and unpretentious typography makes it stand out. It feels personal, immediate, and unapologetically bold, stripping away distractions to focus purely on the message.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Examples of Brat Text</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            Common examples include single words like &quot;brat,&quot; &quot;apple,&quot; or &quot;360,&quot; as well as viral memes and brand parodies that use the signature green and black format to make a statement.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">How to Create Brat Text</h2>
          <p className="hp-body-text mb-8 text-[17px] sm:text-[18px]">
            You can easily generate your own graphics using specialized online tools that handle the styling, colors, and layout for you automatically.
          </p>
          <p className="hp-body-text mb-12">
            <Link href="/brat-text-generator/" className="hp-link text-[18px] font-bold">
              Create your own brat text using the Brat Text Generator →
            </Link>
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">FAQ</h2>
          <div className="mt-8">
            <FAQAccordion
              title="Common Questions"
              intro="Everything you need to know about the text style."
              items={[
                { 
                  question: "Is brat text always green?", 
                  answer: <p>While the classic look is neon green, fans often use white, pink, and black variations to match different moods.</p> 
                },
                { 
                  question: "What font is used?", 
                  answer: <p>It is a heavy sans-serif typeface similar to Arial or Helvetica, styled with custom spacing.</p> 
                },
                {
                  question: "Why is the text blurry?",
                  answer: <p>The low-resolution effect is intentional, designed to give the graphic a raw, DIY, and unpolished feel.</p>
                }
              ]}
            />
          </div>
        </div>
      </article>

    </main>
  );
}
