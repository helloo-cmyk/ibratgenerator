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
      "name": "What is brat text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brat text is the blurry, condensed text style from Charli XCX's 2024 album \"brat.\" It typically appears as short lowercase phrases on a colored background."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make brat text online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a free brat text generator to type your phrase, choose your background color, and download a PNG. No design skills needed."
      }
    },
    {
      "@type": "Question",
      "name": "What should I write in brat text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your name, a mood, a short lyric, a year, or a reaction phrase. Shorter is always better, with 1 to 4 words working best."
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
        title="What Is Brat Text? Aesthetic Explained"
        subtitle=""
        readTime="4 MIN READ"
        imageSrc="/blog-images/what-is-hero.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          <div className="bg-black text-white p-10 sm:p-16 mb-24 relative overflow-hidden group">
            <span className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Linguistic Analysis // VER 1.0</span>
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none uppercase">The Text</h2>
            <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-tight italic m-0">
              If you are wondering what brat text is, it is the defining visual trend of the year built entirely on typography. The brat text aesthetic strips away complex design elements to focus solely on bold, highly readable words against bright colors.
            </p>
          </div>

          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-[#89CC04] pl-10">
            This charli xcx brat text format became the default template for memes, reaction images, and profile pictures almost overnight.
          </p>

          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Archive</span>
            </div>
            <div className="flex-1 space-y-12">
              <div>
                <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-8 leading-none">What Is Brat Text?</h2>
                <p className="hp-body-text !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic m-0 border-l-4 border-black pl-8">
                  At its core, the brat text style is a combination of heavy lowercase sans-serif typography placed directly in the center of a neon green background. The layout is aggressively minimal, leaving huge amounts of empty space around the words. 
                </p>
                <p className="hp-body-text text-[17px] opacity-70 leading-relaxed mt-6">
                  To make it feel authentic, the text often has a slightly blurry, unpolished, or raw feel that mimics early internet graphics. You will rarely see punctuation or capital letters used in this specific format.
                </p>
              </div>

              <div className="bg-zinc-50 p-10 sm:p-16 border-2 border-black/5">
                <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-8 leading-none">Where Brat Text Comes From</h2>
                <p className="hp-body-text !opacity-100 text-[17px] leading-relaxed mb-6 italic">
                  The look originated directly from the cover art for the Charli XCX album released in 2024, sparking a massive interest in brat text history. 
                </p>
                <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">
                  Fans immediately took the charli xcx brat text format and began modifying it with their own words and jokes. The brat typography origin was simple, but it spread rapidly across TikTok and X (formerly Twitter) because it was incredibly easy to read on mobile screens. Within weeks, the brat text viral trend evolved from album promotion into a universal meme format.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Aesthetic</span>
            </div>
            <div className="flex-1 bg-black text-[#89CC04] p-10 sm:p-16 border-2 border-black/5">
              <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-8 leading-none">What Makes Brat Text Unique</h2>
              <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic mb-8">
                The brat text aesthetic succeeds because it operates as anti-design in a time when most graphics are overly polished. 
              </p>
              <p className="hp-body-text !text-white/60 text-[17px] opacity-70 leading-relaxed m-0 italic">
                The high contrast between the harsh black typography and the neon background demands immediate attention in a scrolling feed. This intentional rawness makes the images feel highly personal and chaotic, ensuring any brat text meme stands out.
              </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Brat Text Examples</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The most common brat text examples are single, punchy words like &quot;brat&quot;, &quot;apple&quot;, &quot;360&quot;, or &quot;bumpin&quot;. Users frequently type out short, sarcastic phrases like &quot;so confusing&quot; or &quot;completely exhausted&quot; to use as reaction images in group chats. Meme creators often place highly specific, unhinged captions into the format to contrast the clean design with messy thoughts. Brand parodies also use the exact layout to write their corporate slogans, knowing the visual alone is enough to get the joke across. You will see these brat text social media posts everywhere because the format works for almost any thought.
          </p>

          <h2 className="hp-display-heading mt-16 mb-12 !text-4xl text-left tracking-tighter uppercase">How to Create Brat Text</h2>
          
          <div className="space-y-12 mb-32">
            {[
              { step: "01", h: "Open the generator.", p: <>Use the free <Link href="/brat-text-generator" className="hp-link">brat text generator</Link> to automatically format your words without needing to download fonts.</> },
              { step: "02", h: "Type your phrase.", p: "Enter your text, pick a background color, and the tool will apply the correct lowercase style and blur effects instantly." },
              { step: "03", h: "Save your image.", p: "Hit the button for an immediate PNG download with no signup required." }
            ].map((item) => (
              <div key={item.step} className="flex gap-8 group">
                <span className="text-4xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">{item.step}</span>
                <div className="pt-1 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">{item.h}</h3>
                  <p className="text-[17px] opacity-70 leading-relaxed m-0">{item.p}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── NEW SECTION: Brat Text Ideas - What to Write ── */}
          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Text Ideas - What to Write</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70 italic border-l-4 border-black/5 pl-8">
            Not sure what to type? Here are five categories that consistently produce the best brat text results. Open the <Link href="/brat-text-generator" className="hp-link">brat text generator</Link> and try any of these.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-black border-4 border-black mb-32 overflow-hidden shadow-[20px_20px_0px_rgba(137,204,4,0.1)]">
            {[
              { category: "Your Name", p: "The simplest brat text idea is just your name in the style. It is classic, personal, and makes an instant profile picture.", color: "bg-[#89CC04]" },
              { category: "Mood", p: "One word like \"tired\" or \"whatever\" captures the whole vibe. The less effort it looks like, the more brat it is.", color: "bg-white" },
              { category: "Lyric", p: "Short Charli XCX lyric fragments work perfectly. Keep it to three to five words maximum for visual balance.", color: "bg-[#ff90e8]" },
              { category: "Date", p: "Numbers like \"summer 2026\" or \"365\" create minimal backgrounds that work as phone wallpapers.", color: "bg-[#89CC04]" },
              { category: "Reaction", p: "Phrases like \"not my problem\" turn brat text into instant reaction images for TikTok and Twitter.", color: "bg-white" }
            ].map((cat) => (
              <div key={cat.category} className={`${cat.color} p-8 group hover:bg-black transition-all cursor-crosshair`}>
                <h4 className="text-lg font-black italic tracking-tighter uppercase mb-4 group-hover:text-white leading-none">{cat.category}</h4>
                <p className="text-[12px] font-bold uppercase opacity-40 group-hover:text-[#89CC04] group-hover:opacity-100 m-0 leading-tight transition-colors">{cat.p}</p>
              </div>
            ))}
          </div>

          {/* ── FAQ ── */}
          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              { question: "What is brat text?", answer: <p>Brat text is the blurry, condensed text style from Charli XCX&apos;s 2024 album &quot;brat.&quot; It typically appears as short lowercase phrases on a colored background.</p> },
              { question: "How do I make brat text online?", answer: <p>Use a free brat text generator to type your phrase, choose your background color, and download a PNG. No design skills needed.</p> },
              { question: "What should I write in brat text?", answer: <p>Your name, a mood, a short lyric, a year, or a reaction phrase. Shorter is always better, with 1 to 4 words working best.</p> },
            ]}
          />

        </div>
      </article>

    </main>
  );
}
