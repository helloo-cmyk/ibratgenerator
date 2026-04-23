import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "What Is a Brat Generator? Simple Explanation",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/what-is-brat-generator/",
  },
  description:
    "A simple explanation of the music-inspired text aesthetic, how the cultural trend started, and how you can create your own bold typographic graphics.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the green text aesthetic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a bold, minimalistic typographic style featuring low-resolution Arial-like text over a highly saturated lime green background, inspired by Charli XCX's 2024 album cover."
      }
    },
    {
      "@type": "Question",
      "name": "Why did the green text trend go viral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The aesthetic went viral because of its simplicity and raw, unpolished vibe. It allowed fans and brands to easily recreate the style with their own words, turning the album cover format into an internet-wide meme."
      }
    }
  ]
};

export default function WhatIsBratGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="CULTURE"
        title="What Is a Brat Generator? Simple Explanation"
        subtitle="Understanding the cultural graphic trend that took over social media."
        readTime="5 MIN READ"
        imageSrc="/examples/brat-maker-ex-4.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">

        <div className="prose-container">
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            At its core, the concept refers to any online platform that recreates the minimalist typographic style made famous by Charli XCX&apos;s 2024 album. The aesthetic is incredibly distinct: intentionally low-resolution, lowercase, sans-serif text placed aggressively over a stark neon green background. 
          </p>
          <p className="hp-body-text mb-10 text-[17px] sm:text-[18px]">
            When the album was released, the raw and seemingly "unpolished" design stood out in an internet landscape usually dominated by highly filtered imagery. Because the design was so simple, people immediately began replicating it to express their own thoughts, inside jokes, and cultural commentary.
          </p>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The trend shifted from music marketing into a broader internet phenomenon, prompting the need for web-based utilities that allowed anyone to generate the signature graphic without needing to use expensive editing software like Photoshop.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">How to Use a Brat Generator</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            Recreating the aesthetic is a matter of entering your desired text into a purpose-built web editor. Rather than manually sourcing the correct chaotic font and exact shade of lime green, you can automate the styling process.
          </p>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            To create your own iconic graphic right now, you can use our <Link href="/" className="hp-link text-[17px] sm:text-[18px]">free brat generator</Link>. It runs directly in your browser.
          </p>
          <p className="hp-body-text mb-4 text-[17px] sm:text-[18px]">
            Typically, the process involves three simple steps:
          </p>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
            <li><strong>Input text:</strong> Type your caption, phrase, or meme.</li>
            <li><strong>Adjust styling:</strong> While traditional graphics are green and black, many modern editors allow you to pivot to white, pink, or custom color combinations depending on the "mood" of your post.</li>
            <li><strong>Export:</strong> Download the final visual as a high resolution PNG file, preventing the text from succumbing to visual compression artifacts during sharing.</li>
          </ul>
          
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Why the Format Works for Social Media</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            The stylistic format exploded across TikTok, X (formerly Twitter), and Instagram primarily because it demands attention. The high-contrast color scheme stops the user from scrolling.
          </p>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            Furthermore, the minimalist nature of the image forces the viewer to focus entirely on the text itself. Whether the text is a sincere quote, a corporate brand hopping on a trend, or an ironic one-liner, the visual framing makes the message feel confident and unapologetic.
          </p>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            If you want to try it yourself, you can use the{" "}
            <Link href="/brat-text-generator" className="hp-link text-[17px] sm:text-[18px]">brat text tool</Link>{" "}
            to quickly create and download your design.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Try These Tools</h2>
          <p className="hp-body-text mb-4 text-[17px] sm:text-[18px]">
            If you want to go beyond basic text, here are a few useful tools:
          </p>
          <ul className="hp-body-text mb-16 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
            <li><Link href="/brat-maker" className="hp-link text-[17px] sm:text-[18px]">Brat Maker</Link> — create full images and memes</li>
            <li><Link href="/brat-font-generator" className="hp-link text-[17px] sm:text-[18px]">Brat Font Generator</Link> — control typography and spacing</li>
          </ul>
        </div>
      </article>

      {/* ── FAQ ── */}
      <div className="max-w-[720px] mx-auto px-4 mt-8">
        <div className="pt-10 border-t border-[var(--hp-border)]">
          <FAQAccordion
            title="Common Questions"
            intro="Understanding the aesthetic and graphic style."
            items={[
              { question: "What is the green text aesthetic?", answer: <p>It is a bold, minimalistic typographic style featuring low-resolution Arial-style text over a highly saturated lime green background.</p> },
              { question: "Why did the green text trend go viral?", answer: <p>The aesthetic went viral because of its simplicity and raw, unpolished vibe, which allowed internet users to easily turn it into an adaptable meme format.</p> },
              { question: "Do I need Photoshop to create this?", answer: <p>No. By taking advantage of specialized web editing utilities, anyone can type text into their browser and instantly export a finished PNG graphic.</p> }
            ]}
          />
        </div>
      </div>
    </main>
  );
}
