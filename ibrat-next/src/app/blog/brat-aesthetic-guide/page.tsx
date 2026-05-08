import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "Brat Aesthetic Guide — What It Is and How to Get the Look [2026]",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-aesthetic-guide/",
  },
  description:
    "The complete brat aesthetic guide — the colors, the fonts, the attitude. Learn what makes something \"brat\" and how to create your own brat images for free.",
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
        "text": "The primary brat color is #89CC04 — a yellow-green known as brat green. Black, white, and pink variants also exist within the aesthetic."
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
        "text": "Use a free brat generator — type a short phrase, choose your background color, and download a PNG. No design skills or software needed."
      }
    },
    {
      "@type": "Question",
      "name": "Is the brat aesthetic the same as brat summer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brat summer is the cultural moment — the attitude and the season. The brat aesthetic is the visual style. They come from the same source but brat aesthetic is broader and longer lasting."
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
        subtitle="The colors, the fonts, the attitude — and how to create your own brat images for free."
        readTime="6 MIN READ"
        publishDate="May 2026"
        imageSrc="/blog-images/aesthetic-hero-v2.png"
        imageAlt="Brat aesthetic visual example — neon green background with bold lowercase text"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">

          {/* ── INTRO ── */}
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The brat aesthetic is not a mood board. It is not carefully curated. It is intentionally imperfect, unapologetically loud, and completely unbothered. Charli XCX launched it with her 2024 album and it spread from TikTok to political campaigns in weeks. This guide breaks down exactly what the brat aesthetic is, what makes it work visually, and how to create your own brat images without any design skills.
          </p>

          {/* ── WHAT IS ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">What Is the Brat Aesthetic?</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The brat aesthetic originated from Charli XCX&apos;s 2024 album &quot;brat&quot; — a record that deliberately rejected polish in favor of chaos. The core idea is confidence without effort, attitude without apology. Visually, it is defined by brat green (#89CC04), blurry condensed text, lowercase everything, and aggressively minimal design. There are no gradients, no shadows, no filters. The attitude behind it matters just as much as the visuals: not trying too hard, being messy and proud of it, saying what you mean without softening it. This makes brat the opposite of aesthetics like &quot;clean girl&quot; or &quot;that girl,&quot; which center on control and polish. Brat is the rejection of that. Fans turned the album release into <Link href="/blog/brat-summer-meaning/" className="hp-link">brat summer</Link> — a cultural moment that pushed the look into the mainstream and kept it there.
          </p>

          {/* ── COLOR PALETTE ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">The Brat Color Palette</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            Color is the single most recognizable element of the brat aesthetic. The primary color is brat green — hex code #89CC04 — a sharp yellow-green that reads as neon, loud, and impossible to ignore. It is the defining visual marker. The secondary palette adds variety without losing identity: black (#0a0a0a) is the dark variant, sharper and more aggressive, built for OLED screens and night-mode feeds. White (#ffffff) is the clean variant, minimal and crisp. Pink (#ff90e8) is the softer option, more playful but still bold. Each color carries a different mood but the same attitude. For the complete hex reference, see the <Link href="/blog/brat-color-code/" className="hp-link">brat color codes</Link> guide, or try the <Link href="/brat-green-generator/" className="hp-link">brat green generator</Link> to create images in the original palette.
          </p>

          {/* ── FONT ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">The Brat Font — What Makes It Distinctive</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The typography is just as important as the color. Brat text uses a blurry, condensed, lowercase sans-serif style where the letters feel compressed and slightly out of focus. The blur is not a mistake — it is intentional. It gives the text a lo-fi, rushed quality that signals the image was made fast, not labored over. Charli XCX&apos;s team never released the exact font publicly, and that ambiguity is part of the appeal. The aesthetic works precisely because it looks slightly off, slightly unfinished. Short phrases carry the most impact — one to five words maximum. Anything longer breaks the visual balance and loses the punch. If you want to recreate the look with the right weight and spacing, the <Link href="/brat-font-generator/" className="hp-link">brat font generator</Link> handles it automatically.
          </p>

          {/* ── VS OTHER AESTHETICS ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Brat Aesthetic vs Other Aesthetics</h2>
          <p className="hp-body-text mb-8 text-[17px] sm:text-[18px]">
            Brat sits in a unique position in the aesthetic landscape. Here is how it compares to three popular styles.
          </p>

          <h3 className="text-[20px] sm:text-[22px] font-semibold mt-10 mb-3">Brat vs Clean Girl</h3>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            Clean girl is polished, minimal, and effortful — everything placed with precision. Brat is messy, loud, and effortless. They share a love of minimalism but deliver completely opposite energy. Clean girl whispers; brat shouts.
          </p>

          <h3 className="text-[20px] sm:text-[22px] font-semibold mt-10 mb-3">Brat vs Cottagecore</h3>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
            Cottagecore is soft, rural, warm-toned, and nostalgic. Brat is urban, neon, sharp-edged, and current. There is essentially no overlap — if cottagecore is a Sunday morning in the countryside, brat is a Tuesday night in the city.
          </p>

          <h3 className="text-[20px] sm:text-[22px] font-semibold mt-10 mb-3">Brat vs Y2K</h3>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            Y2K is nostalgic, maximalist, and sparkly — chrome, butterflies, low-rise everything. Brat is current, stripped back, and built on a single color. Both are bold but in completely different ways. Y2K adds; brat subtracts.
          </p>

          {/* ── HOW TO CREATE ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">How to Create Brat Aesthetic Images</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            You do not need Photoshop, Figma, or any design software. The brat look is intentionally simple — complexity kills it. Pick your background color: green for classic, black for sharp, pink for playful, white for clean. Type a short phrase — your name, a mood, one to four words. Keep the font size large and the letter spacing tight. Download as PNG and share directly. The entire process takes under thirty seconds. Use the <Link href="/" className="hp-link">brat generator</Link> for the full editor with all color presets, the <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link> for quick text-only exports, or the <Link href="/brat-black-generator/" className="hp-link">black brat generator</Link> for the dark variant. No accounts, no watermarks, no fees.
          </p>

          {/* ── WHAT TO WRITE ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">What to Write in a Brat Image</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The best brat text is short and unfiltered. Your name is the simplest option — just your name in the style, personal and immediate. A single emotion works perfectly: &quot;tired,&quot; &quot;whatever,&quot; &quot;unbothered.&quot; A year or date like &quot;summer 2026&quot; creates a clean wallpaper-ready image. Reactions are the most shareable format: &quot;not my problem&quot; or &quot;i said what i said&quot; turns a brat image into an instant reply for group chats and comment sections. Lyric fragments work too — keep them to three to five words maximum. The unspoken rule: lowercase always, punctuation is optional, and less is always more.
          </p>

          {/* ── STILL RELEVANT ── */}
          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Is the Brat Aesthetic Still Relevant in 2026?</h2>
          <p className="hp-body-text mb-16 text-[17px] sm:text-[18px]">
            The peak was mid-2024 — the album release, the Kamala moment, the TikTok explosion. In 2026, the brat aesthetic has moved from trend to permanent aesthetic category. Like Y2K before it, the style does not disappear once the hype cycle ends — it becomes a lasting option in the visual toolbox. New users discover it daily through TikTok recommendations and older viral content that keeps circulating. The tools exist, the community exists, and the format is still the fastest way to make a bold, recognizable image from scratch. An honest take: it is no longer the thing everyone is talking about, and that is fine. It does not need to be trending to be useful. The aesthetic earned its place and it is not going anywhere.
          </p>

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
                answer: <p>The primary brat color is #89CC04 — a yellow-green known as brat green. Black, white, and pink variants also exist within the aesthetic.</p>,
              },
              {
                question: "What font does the brat aesthetic use?",
                answer: <p>The brat aesthetic uses a blurry, condensed lowercase sans-serif style. The exact font was never officially released by Charli XCX&apos;s team.</p>,
              },
              {
                question: "How do I make a brat aesthetic image?",
                answer: <p>Use a free <Link href="/" className="hp-link">brat generator</Link> — type a short phrase, choose your background color, and download a PNG. No design skills or software needed.</p>,
              },
              {
                question: "Is the brat aesthetic the same as brat summer?",
                answer: <p>Brat summer is the cultural moment — the attitude and the season. The brat aesthetic is the visual style. They come from the same source but brat aesthetic is broader and longer lasting.</p>,
              },
            ]}
          />

        </div>
      </article>
    </main>
  );
}
