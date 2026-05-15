import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "Brat Aesthetic Guide - What It Is and How to Get the Look [2026]",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-aesthetic-guide/",
  },
  description:
    "The complete brat aesthetic guide, featuring the colors, the fonts, and the attitude. Learn what makes something \"brat\" and how to create your own brat images for free.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the brat aesthetic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The brat aesthetic is a visual and attitude style from Charli XCX's 2024 album. It is defined by brat green (#89CC04), blurry lowercase text, short phrases, and a confident, unbothered attitude."
      }
    },
    {
      "@type": "Question",
      "name": "What color is the brat aesthetic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The primary brat color is #89CC04, a yellow-green known as brat green. Black, white, and pink variants also exist within the aesthetic."
      }
    },
    {
      "@type": "Question",
      "name": "What font does the brat aesthetic use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The brat aesthetic uses a blurry, condensed lowercase sans-serif style. The exact font was never officially released by Charli XCX's team."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make a brat aesthetic image?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a free brat generator to type a short phrase, choose your background color, and download a PNG. No design skills or software needed."
      }
    },
    {
      "@type": "Question",
      "name": "Is the brat aesthetic the same as brat summer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brat summer is the cultural moment, encompassing the attitude and the season. The brat aesthetic is the visual style. They come from the same source but brat aesthetic is broader and longer lasting."
      }
    }
  ]
};

export default function BratAestheticGuidePage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogHero
        category="AESTHETICS"
        title="Brat Aesthetic Guide"
        subtitle="The colors, the fonts, and the attitude, and how to create your own brat images for free."
        readTime="6 MIN READ"
        publishDate="May 2026"
        imageSrc="/blog-images/aesthetic-hero-v2.png"
        imageAlt="Brat aesthetic visual example, neon green background with bold lowercase text"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">

          {/* ── INTRO ── */}
          <div className="bg-black text-white p-10 sm:p-16 mb-24 relative overflow-hidden group">
            <span className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">The Manifesto</span>
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">Not a Mood Board</h2>
            <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-tight italic m-0">
              The brat aesthetic is not a mood board. It is not carefully curated. It is intentionally imperfect, unapologetically loud, and completely unbothered. 
            </p>
          </div>

          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-10">
            Charli XCX launched it with her 2024 album and it spread from TikTok to political campaigns in weeks. This guide breaks down exactly what the brat aesthetic is, what makes it work visually, and how to create your own brat images without any design skills.
          </p>

          {/* ── WHAT IS ── */}
          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">What Is the Brat Aesthetic?</h2>
          
          <div className="flex gap-12 mb-20 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all">Definition</span>
            </div>
            <div className="flex-1 border-l-4 border-black pl-12 py-2 group-hover:border-[#89CC04] transition-colors">
              <p className="hp-body-text !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic m-0">
                The brat aesthetic originated from Charli XCX&apos;s 2024 album &quot;brat&quot;, a record that deliberately rejected polish in favor of chaos. The core idea is confidence without effort, attitude without apology. Visually, it is defined by brat green (#89CC04), blurry condensed text, lowercase everything, and aggressively minimal design. There are no gradients, no shadows, no filters. The attitude behind it matters just as much as the visuals: not trying too hard, being messy and proud of it, saying what you mean without softening it. This makes brat the opposite of aesthetics like &quot;clean girl&quot; or &quot;that girl,&quot; which center on control and polish. Brat is the rejection of that. Fans turned the album release into <Link href="/blog/brat-summer-meaning/" className="hp-link">brat summer</Link>, a cultural moment that pushed the look into the mainstream and kept it there.
              </p>
            </div>
          </div>

          {/* ── COLOR PALETTE ── */}
          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter">The Brat Color Palette</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            Color is the single most recognizable element of the brat aesthetic. The primary color is brat green, with hex code #89CC04, a sharp yellow-green that reads as neon, loud, and impossible to ignore.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-24">
            {[
              { name: "Green", hex: "#89CC04", bg: "bg-[#89CC04]", text: "text-black" },
              { name: "Black", hex: "#0A0A0A", bg: "bg-black", text: "text-[#89CC04]" },
              { name: "White", hex: "#FFFFFF", bg: "bg-white border-2 border-black/5", text: "text-black" },
              { name: "Pink", hex: "#FF90E8", bg: "bg-[#FF90E8]", text: "text-black" }
            ].map((color) => (
              <div key={color.hex} className="group cursor-crosshair">
                <div className={`aspect-[3/4] ${color.bg} mb-6 transition-all group-hover:-translate-y-2 group-hover:rotate-1 flex flex-col justify-end p-6 overflow-hidden relative`}>
                   <span className={`text-[40px] font-black italic tracking-tighter uppercase leading-none opacity-10 absolute -top-2 -left-2 ${color.text}`}>{color.name}</span>
                   <span className={`text-[10px] font-black uppercase tracking-widest ${color.text}`}>{color.hex}</span>
                </div>
                <span className="font-black italic uppercase text-lg block leading-none">{color.name}</span>
              </div>
            ))}
          </div>

          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-2 border-black/5 pl-8">
            The secondary palette adds variety without losing identity: black (#0a0a0a) is the dark variant, sharper and more aggressive, built for OLED screens and night-mode feeds. White (#ffffff) is the clean variant, minimal and crisp. Pink (#ff90e8) is the softer option, more playful but still bold. Each color carries a different mood but the same attitude. For the complete hex reference, see the <Link href="/blog/brat-color-code/" className="hp-link">brat color codes</Link> guide, or try the <Link href="/brat-green-generator/" className="hp-link">brat green generator</Link> to create images in the original palette.
          </p>

          {/* ── FONT ── */}
          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">The Brat Font</h2>
          
          <div className="flex gap-12 mb-20 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 group-hover:text-black transition-all">Typography</span>
            </div>
            <div className="flex-1 border-l-4 border-black pl-12 py-2 group-hover:border-black transition-colors">
              <p className="hp-body-text !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic m-0">
                The typography is just as important as the color. Brat text uses a blurry, condensed, lowercase sans-serif style where the letters feel compressed and slightly out of focus. The blur is not a mistake, as it is intentional. It gives the text a lo-fi, rushed quality that signals the image was made fast, not labored over. Charli XCX&apos;s team never released the exact font publicly, and that ambiguity is part of the appeal. The aesthetic works precisely because it looks slightly off, slightly unfinished. Short phrases carry the most impact, with one to five words maximum. Anything longer breaks the visual balance and loses the punch. If you want to recreate the look with the right weight and spacing, the <Link href="/brat-font-generator/" className="hp-link">brat font generator</Link> handles it automatically.
              </p>
            </div>
          </div>

          {/* ── VS OTHER AESTHETICS ── */}
          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter">Brat Aesthetic vs Others</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            Brat sits in a unique position in the aesthetic landscape. Here is how it compares to three popular styles.
          </p>

          <div className="space-y-4 mb-32">
            {[
              { title: "Brat vs Clean Girl", energy: "messy vs polished", color: "bg-[#89CC04]", desc: "Clean girl is polished, minimal, and effortful, with everything placed with precision. Brat is messy, loud, and effortless. They share a love of minimalism but deliver completely opposite energy. Clean girl whispers; brat shouts." },
              { title: "Brat vs Cottagecore", energy: "urban vs rural", color: "bg-[#ff90e8]", desc: "Cottagecore is soft, rural, warm-toned, and nostalgic. Brat is urban, neon, sharp-edged, and current. There is essentially no overlap. If cottagecore is a Sunday morning in the countryside, brat is a Tuesday night in the city." },
              { title: "Brat vs Y2K", energy: "minimal vs maximal", color: "bg-black text-white", desc: "Y2K is nostalgic, maximalist, and sparkly, featuring chrome, butterflies, and low-rise everything. Brat is current, stripped back, and built on a single color. Both are bold but in completely different ways. Y2K adds; brat subtracts." }
            ].map((vs) => (
              <div key={vs.title} className="group border-2 border-black p-8 sm:p-12 hover:bg-zinc-50 transition-all flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2 block">{vs.energy}</span>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{vs.title}</h3>
                  <p className="text-[17px] opacity-70 leading-relaxed m-0 italic">{vs.desc}</p>
                </div>
                <div className={`w-24 h-24 ${vs.color} flex-shrink-0 border-2 border-black rotate-3 group-hover:rotate-6 transition-transform`}></div>
              </div>
            ))}
          </div>

          {/* ── HOW TO CREATE ── */}
          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter">How to Get the Look</h2>
          
          <div className="space-y-12 mb-32">
            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">01</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Pick your color</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Green for classic, black for sharp, pink for playful, white for clean. You do not need Photoshop, Figma, or any design software. The brat look is intentionally simple: complexity kills it.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">02</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Type your phrase</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Type a short phrase, such as your name, a mood, or one to four words. Keep the font size large and the letter spacing tight for that authentic lo-fi energy.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">03</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2 text-[#89CC04]">Export &amp; Share</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Download as PNG and share directly. The entire process takes under thirty seconds. Use the <Link href="/" className="hp-link">brat generator</Link>, the <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link>, or the <Link href="/brat-black-generator/" className="hp-link">black brat generator</Link>.</p>
              </div>
            </div>
          </div>

          {/* ── WHAT TO WRITE ── */}
          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl text-left tracking-tighter">What to Write</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-4 border-black mb-12 overflow-hidden">
            {[
              { category: "Basics", items: [{ h: "your name", p: "The simplest option. Personal and immediate." }, { h: "summer 2026", p: "Clean, wallpaper-ready date formats." }], color: "bg-[#89CC04]" },
              { category: "Emotions", items: [{ h: "whatever", p: "The ultimate unbothered classic." }, { h: "tired", p: "Pure unfiltered emotion." }], color: "bg-white" },
              { category: "Reactions", items: [{ h: "not my problem", p: "Perfect for group chat replies." }, { h: "i said what i said", p: "No debate, no apologies." }], color: "bg-[#ff90e8]" }
            ].map((cat) => (
              <div key={cat.category} className={`${cat.color} p-10 group hover:bg-black transition-all cursor-crosshair`}>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 block group-hover:text-white transition-colors">{cat.category}</span>
                <div className="space-y-8">
                  {cat.items.map((item) => (
                    <div key={item.h}>
                      <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1 group-hover:text-white transition-colors">{item.h}</h4>
                      <p className="text-xs font-bold uppercase opacity-40 group-hover:text-[#89CC04] group-hover:opacity-100 m-0 transition-all">{item.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="hp-body-text mb-24 text-[17px] opacity-70 leading-relaxed italic border-b border-black/5 pb-12">
            The unspoken rule: lowercase always, punctuation is optional, and less is always more. Lyric fragments work too, so keep them to three to five words maximum to maintain the punch.
          </p>

          {/* ── STILL RELEVANT ── */}
          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl text-left tracking-tighter">Is it Still Relevant?</h2>
          
          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all">Verdict</span>
            </div>
            <div className="flex-1 border-l-4 border-black pl-12 py-2 group-hover:border-[#89CC04] transition-colors">
              <p className="hp-body-text !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic m-0">
                The peak was mid-2024, featuring the album release, the Kamala moment, and the TikTok explosion. In 2026, the brat aesthetic has moved from trend to permanent aesthetic category. Like Y2K before it, the style does not disappear once the hype cycle ends, it becomes a lasting option in the visual toolbox. New users discover it daily through TikTok recommendations and older viral content that keeps circulating. The tools exist, the community exists, and the format is still the fastest way to make a bold, recognizable image from scratch. An honest take: it is no longer the thing everyone is talking about, and that is fine. It does not need to be trending to be useful. The aesthetic earned its place and it is not going anywhere.
              </p>
            </div>
          </div>

          <div className="py-24 sm:py-32 text-center border-t-2 border-black/5 mt-12">
            <h3 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Ready to start?</h3>
            <Link href="/" className="group inline-flex items-center text-2xl sm:text-5xl font-black italic uppercase tracking-tighter transition-all">
              <span className="relative">
                Open the Generator
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#89CC04] -z-10 group-hover:h-full transition-all duration-300 opacity-60"></div>
              </span>
              <svg className="ml-6 w-8 h-8 sm:w-12 sm:h-12 transform group-hover:translate-x-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="mt-12 text-lg opacity-40 font-medium italic tracking-widest uppercase">The original brat aesthetic guide.</p>
          </div>

          {/* ── FAQ ── */}
          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              {
                question: "What is the brat aesthetic?",
                answer: <p>The brat aesthetic is a visual and attitude style from Charli XCX&apos;s 2024 album. It is defined by brat green (#89CC04), blurry lowercase text, short phrases, and a confident, unbothered attitude.</p>,
              },
              {
                question: "What color is the brat aesthetic?",
                answer: <p>The primary brat color is #89CC04, a yellow-green known as brat green. Black, white, and pink variants also exist within the aesthetic.</p>,
              },
              {
                question: "What font does the brat aesthetic use?",
                answer: <p>The brat aesthetic uses a blurry, condensed lowercase sans-serif style. The exact font was never officially released by Charli XCX&apos;s team.</p>,
              },
              {
                question: "How do I make a brat aesthetic image?",
                answer: <p>Use a free <Link href="/" className="hp-link">brat generator</Link> to type a short phrase, choose your background color, and download a PNG. No design skills or software needed.</p>,
              },
              {
                question: "Is the brat aesthetic the same as brat summer?",
                answer: <p>Brat summer is the cultural moment, representing the attitude and the season. The brat aesthetic is the visual style. They come from the same source but brat aesthetic is broader and longer lasting.</p>,
              },
            ]}
          />

        </div>
      </article>
    </main>
  );
}
