import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "How to Make Brat Text - Step-by-Step",
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
        title="How to Make Brat Text - Step-by-Step"
        subtitle=""
        readTime="3 MIN READ"
        imageSrc="/blog-images/how-to-hero.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          <div className="bg-black text-white p-10 sm:p-16 mb-24 relative overflow-hidden group">
            <span className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Factory Manual</span>
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">The Setup</h2>
            <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-tight italic m-0">
              Learning how to make brat text is incredibly straightforward when you use the right tools. With a dedicated brat text generator, the entire process takes under 30 seconds from typing your phrase to saving the final image.
            </p>
          </div>

          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl uppercase tracking-tighter">How to Make Brat Text (Step-by-Step)</h2>
          
          <div className="space-y-12 mb-32">
            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">01</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Type Phrase</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Enter your words directly into the <Link href="/brat-text-generator" className="hp-link">brat text generator</Link>. Keep it short, with one to three words working best for this layout.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">02</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Color Theme</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Neon green is the original standard, but black, white, and pink all work flawlessly. The background will automatically apply high contrast to your text.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">03</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2 text-[#89CC04]">Download</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Hit the export button to save your file. The PNG exports instantly with no watermark and no account required.</p>
              </div>
            </div>
          </div>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Best Way to Create Brat Text Online</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            If you want to create brat text online, using an automated generator easily beats trying to do it manually in Photoshop or Canva. A specialized tool has the exact letter spacing, custom blur effect, and authentic background colors preset so you cannot mess it up. You can find the best tool for this exact purpose at the /brat-text-generator page.
          </p>

          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl uppercase tracking-tighter text-center">Tips for Better Brat Text & Common Mistakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-4 border-black mb-32 overflow-hidden">
            <div className="bg-[#89CC04] p-12 group transition-all">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-8">The Do&apos;s</h3>
              <ul className="hp-body-text list-none pl-0 space-y-4 text-[16px] font-bold italic uppercase tracking-tight text-black/80">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black rounded-full"></span> Keep text lowercase.</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black rounded-full"></span> Use 1-3 words maximum.</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black rounded-full"></span> Square format (1:1) for Instagram.</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black rounded-full"></span> Export at 2048px for sharpness.</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black rounded-full"></span> Stick to solid color backgrounds.</li>
              </ul>
            </div>

            <div className="bg-white p-12 group transition-all">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-8">The Don&apos;ts</h3>
              <ul className="hp-body-text list-none pl-0 space-y-4 text-[16px] font-bold italic uppercase tracking-tight opacity-60">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black/20 rounded-full"></span> Too many words (cluttered).</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black/20 rounded-full"></span> Wrong aspect ratio for platform.</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black/20 rounded-full"></span> Exporting at low resolution.</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black/20 rounded-full"></span> Adding too many elements.</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-black/20 rounded-full"></span> Forgetting it&apos;s about reduction.</li>
              </ul>
            </div>
          </div>

          {/* ── NEW SECTION: Why Brat Text Works on Social Media ── */}
          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Analysis</span>
            </div>
            <div className="flex-1 bg-zinc-50 p-10 sm:p-16 border-2 border-black/5">
              <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-8 leading-none">Why Brat Text Works on Social Media</h2>
              <p className="hp-body-text mb-8 text-[18px] font-medium italic">
                Brat text dominates social feeds because of how aggressively it grabs attention. 
              </p>
              <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">
                The high contrast between bold dark text and a bright neon green or black background makes every post pop instantly, even at thumbnail size. Short, punchy phrases of one to four words perform significantly better than longer sentences because they can be read in under a second while scrolling. TikTok, Twitter/X, and Instagram Stories are the primary platforms where brat text thrives, as all three reward bold, eye-catching visuals that communicate a mood or reaction immediately. The lo-fi, slightly blurry aesthetic also feels far more authentic and personal than polished designs made with traditional tools. That rawness is part of what makes the format so shareable, as people trust content that looks like it was made in five seconds over something that took an hour in a design suite. The brat format also works at every screen size, from a tiny comment reply to a full-screen story takeover. If you want to create your own, the <Link href="/brat-text-generator" className="hp-link">brat text generator</Link> handles the styling automatically so your output always looks right.
              </p>
            </div>
          </div>

          {/* ── NEW SECTION: Common Mistakes When Making Brat Text ── */}
          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Common Errors</span>
            </div>
            <div className="flex-1 bg-zinc-50 p-10 sm:p-16 border-2 border-black/5">
              <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-8 leading-none">Common Mistakes When Making Brat Text</h2>
              <p className="hp-body-text mb-8 text-[18px] font-medium italic">
                The most frequent mistake is cramming too many words into the image. 
              </p>
              <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">
                Brat text works best with one to four words, as anything longer dilutes the visual impact and makes the text harder to read at a glance. Another common error is choosing a font size that is too small. The entire point of the format is that the text fills the frame and demands attention, so going too small defeats the purpose entirely. Overloading the design with effects, borders, or extra graphic elements is equally counterproductive, since the brat aesthetic is defined by its minimalism, so resist the urge to add more. Using the wrong aspect ratio for the platform is another easy mistake: a square crop works for Instagram posts, while TikTok needs 9:16 vertical. Finally, saving your image as a JPG instead of PNG introduces compression artifacts that muddy the sharp text edges and degrade the clean background color. Always export as PNG to preserve the crisp, high-contrast look that makes brat text instantly recognizable across every platform.
              </p>
            </div>
          </div>

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
