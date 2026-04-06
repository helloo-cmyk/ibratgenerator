import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "What Is a Brat Generator? Simple Explanation",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/",
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
    <main className="space-y-10 mb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-0 mb-3 mx-auto">What Is a Brat Generator? Simple Explanation</h1>
            <p className="mb-5">
              Understanding the cultural graphic trend that took over social media.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION — What Is It */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-2 sm:px-6 sm:py-6 text-base leading-relaxed text-foreground/90">
          <p className="mb-4">
            At its core, the concept refers to any online platform that recreates the minimalist typographic style made famous by Charli XCX's 2024 album. The aesthetic is incredibly distinct: intentionally low-resolution, lowercase, sans-serif text placed aggressively over a stark neon green background. 
          </p>
          <p className="mb-4">
            When the album was released, the raw and seemingly "unpolished" design stood out in an internet landscape usually dominated by highly filtered imagery. Because the design was so simple, people immediately began replicating it to express their own thoughts, inside jokes, and cultural commentary.
          </p>
          <p>
            The trend shifted from music marketing into a broader internet phenomenon, prompting the need for web-based utilities that allowed anyone to generate the signature graphic without needing to use expensive editing software like Photoshop.
          </p>
        </div>
      </section>

      {/* SECTION — How to Use */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">How to Use a Brat Generator</h2>
          <p className="mb-4">
            Recreating the aesthetic is a matter of entering your desired text into a purpose-built web editor. Rather than manually sourcing the correct chaotic font and exact shade of lime green, you can automate the styling process.
          </p>
          <p className="mb-4">
            To create your own iconic graphic right now, you can use our <Link href="/" className="text-primary hover:underline font-semibold">free brat generator</Link>. It runs directly in your browser.
          </p>
          <p className="mb-4">
            Typically, the process involves three simple steps:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li><strong>Input text:</strong> Type your caption, phrase, or meme.</li>
            <li><strong>Adjust styling:</strong> While traditional graphics are green and black, many modern editors allow you to pivot to white, pink, or custom color combinations depending on the "mood" of your post.</li>
            <li><strong>Export:</strong> Download the final visual as a high resolution PNG file, preventing the text from succumbing to visual compression artifacts during sharing.</li>
          </ul>
        </div>
      </section>

      {/* SECTION — Why the format works */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Why the Format Works for Social Media</h2>
          <p className="mb-4">
            The stylistic format exploded across TikTok, X (formerly Twitter), and Instagram primarily because it demands attention. The high-contrast color scheme stops the user from scrolling.
          </p>
          <p className="mb-4">
            Furthermore, the minimalist nature of the image forces the viewer to focus entirely on the text itself. Whether the text is a sincere quote, a corporate brand hopping on a trend, or an ironic one-liner, the visual framing makes the message feel confident and unapologetic.
          </p>
        </div>
      </section>

      {/* SECTION — FAQ */}
      <FAQAccordion
        title="Common Questions"
        intro="Understanding the aesthetic and graphic style."
        items={[
          { question: "What is the green text aesthetic?", answer: <p>It is a bold, minimalistic typographic style featuring low-resolution Arial-style text over a highly saturated lime green background.</p> },
          { question: "Why did the green text trend go viral?", answer: <p>The aesthetic went viral because of its simplicity and raw, unpolished vibe, which allowed internet users to easily turn it into an adaptable meme format.</p> },
          { question: "Do I need Photoshop to create this?", answer: <p>No. By taking advantage of specialized web editing utilities, anyone can type text into their browser and instantly export a finished PNG graphic.</p> }
        ]}
      />
    </main>
  );
}
