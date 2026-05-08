import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "How to Make Brat Text – Step-by-Step",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/how-to-make-brat-text/",
  },
  description:
    "Learn how to make brat text step-by-step in under 30 seconds. Discover the best way to create brat text online for TikTok, Instagram, and more.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I make brat text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the brat text generator, type your phrase, adjust the font size, and download your PNG. No signup required."
      }
    },
    {
      "@type": "Question",
      "name": "What font is used in brat text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The brat aesthetic uses a blurry, condensed sans-serif style inspired by the Charli XCX album cover. The exact font is not publicly released."
      }
    },
    {
      "@type": "Question",
      "name": "Can I make brat text for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The brat text generator is completely free with no watermark and no account needed."
      }
    }
  ]
};

export default function HowToMakeBratTextPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogHero 
        category="TUTORIAL"
        title="How to Make Brat Text – Step-by-Step"
        subtitle=""
        readTime="3 MIN READ"
        imageSrc="/blog-images/how-to-hero.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            Learning how to make brat text is incredibly straightforward when you use the right tools. With a dedicated brat text generator, the entire process takes under 30 seconds from typing your phrase to saving the final image.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">How to Make Brat Text (Step-by-Step)</h2>
          <ul className="hp-body-text mb-12 list-none pl-0 space-y-6 text-[17px] sm:text-[18px]">
            <li>
              <strong>Type your phrase.</strong> Enter your words directly into the <Link href="/brat-text-generator" className="hp-link">brat text generator</Link>. Keep it short — one to three words work best for this layout.
            </li>
            <li>
              <strong>Choose your color theme.</strong> Neon green is the original standard, but black, white, and pink all work flawlessly. The background will automatically apply high contrast to your text.
            </li>
            <li>
              <strong>Click download.</strong> Hit the export button to save your file. The PNG exports instantly with no watermark and no account required.
            </li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Best Way to Create Brat Text Online</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            If you want to create brat text online, using an automated generator easily beats trying to do it manually in Photoshop or Canva. A specialized tool has the exact letter spacing, custom blur effect, and authentic background colors preset so you cannot mess it up. You can find the best tool for this exact purpose at the /brat-text-generator page.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Tips for Better Brat Text</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
            <li>Keep text lowercase.</li>
            <li>Use 1-3 words maximum.</li>
            <li>Square format (1:1) for Instagram, vertical (9:16) for TikTok.</li>
            <li>Export at 2048px for sharpness.</li>
            <li>Avoid busy backgrounds — solid color works best.</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Common Mistakes</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
            <li>Too many words (loses readability).</li>
            <li>Using wrong aspect ratio for the platform.</li>
            <li>Exporting at low resolution.</li>
            <li>Adding too many elements — brat style is about reduction.</li>
          </ul>

          {/* ── NEW SECTION: Why Brat Text Works on Social Media ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Why Brat Text Works on Social Media</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            Brat text dominates social feeds because of how aggressively it grabs attention. The high contrast between bold dark text and a bright neon green or black background makes every post pop instantly, even at thumbnail size. Short, punchy phrases of one to four words perform significantly better than longer sentences because they can be read in under a second while scrolling. TikTok, Twitter/X, and Instagram Stories are the primary platforms where brat text thrives — all three reward bold, eye-catching visuals that communicate a mood or reaction immediately. The lo-fi, slightly blurry aesthetic also feels far more authentic and personal than polished designs made with traditional tools. That rawness is part of what makes the format so shareable — people trust content that looks like it was made in five seconds over something that took an hour in a design suite. The brat format also works at every screen size, from a tiny comment reply to a full-screen story takeover. If you want to create your own, the <Link href="/brat-text-generator" className="hp-link">brat text generator</Link> handles the styling automatically so your output always looks right.
          </p>

          {/* ── NEW SECTION: Common Mistakes When Making Brat Text ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Common Mistakes When Making Brat Text</h2>
          <p className="hp-body-text mb-16 text-[17px] sm:text-[18px]">
            The most frequent mistake is cramming too many words into the image. Brat text works best with one to four words — anything longer dilutes the visual impact and makes the text harder to read at a glance. Another common error is choosing a font size that is too small. The entire point of the format is that the text fills the frame and demands attention, so going too small defeats the purpose entirely. Overloading the design with effects, borders, or extra graphic elements is equally counterproductive — the brat aesthetic is defined by its minimalism, so resist the urge to add more. Using the wrong aspect ratio for the platform is another easy mistake: a square crop works for Instagram posts, while TikTok needs 9:16 vertical. Finally, saving your image as a JPG instead of PNG introduces compression artifacts that muddy the sharp text edges and degrade the clean background color. Always export as PNG to preserve the crisp, high-contrast look that makes brat text instantly recognizable across every platform.
          </p>

          {/* ── FAQ ── */}
          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              { 
                question: "How do I make brat text?", 
                answer: <p>Open the brat text generator, type your phrase, adjust the font size, and download your PNG. No signup required.</p> 
              },
              { 
                question: "What font is used in brat text?", 
                answer: <p>The brat aesthetic uses a blurry, condensed sans-serif style inspired by the Charli XCX album cover. The exact font is not publicly released.</p> 
              },
              {
                question: "Can I make brat text for free?",
                answer: <p>Yes. The brat text generator is completely free with no watermark and no account needed.</p>
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
