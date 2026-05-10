import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the brat generator black background color?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The background is locked to #0a0a0a, which is a near-pure black. This matches the dark variant of the brat aesthetic. You cannot change it on this page; it is fixed by design.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make brat text on a black background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This tool is built specifically for that. Type your text, and it appears as white text on a black background automatically. Download your PNG when ready.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the black and green brat generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The green brat generator uses the official brat green (#89CC04) from Charli XCX's album. The black version uses #0a0a0a for a darker, higher-contrast look. Same tool, different locked colors.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change the text color on the black brat generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The background is locked to black but you can adjust text size and spacing. The default text color is white for maximum contrast, which is the standard black brat look.",
      },
    },
    {
      "@type": "Question",
      name: "Is the black brat generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Completely free, no watermark, no account needed. Download as many PNGs as you want.",
      },
    },
  ],
};

export const metadata = {
  title: {
    absolute: "Brat Generator Black - Free Black Brat Image Maker",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-black-generator/",
  },
  description:
    "Make a black brat generator image in seconds. Type your text, download a clean black background PNG, with no watermark or signup. Works on mobile.",
};

export default function BratBlackGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Generator Black</h1>
        <p className="intro-text">
          Type any text and create a sharp, high-contrast brat image on a locked black background. Download a clean PNG, which has no watermark and no signup.
        </p>
      </section>

      {/* ── GENERATOR APP ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-2 mb-16">
        <div style={{ minHeight: '520px', position: 'relative', width: '100%' }}>
          <BratGeneratorLazy
            mode="full"
            defaultBg="#0a0a0a"
            defaultFg="#ffffff"
            lockBg={true}
            hidePresets={true}
            defaultTab="text"
            defaultPlaceholder="dark brat"
          />
        </div>
      </div>

      {/* ── INTERNAL LINK ── */}
      <section className="-mt-4 mb-10 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-base" style={{color: "var(--hp-ink-soft)"}}>
          Looking for all features? Try the <Link href="/" className="hp-link font-semibold">free brat generator</Link> to create memes, images, and more in one place.
        </div>
      </section>

      {/* ── SECTION 1: INTRO PARAGRAPH ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="max-w-3xl">
          <p className="hp-body-text">
            The black brat aesthetic is darker, sharper, and hits harder than the original green. This black brat generator locks the background to deep black (#0a0a0a) and lets you type any text, such as your name, a mood, or a lyric. Download a clean PNG in seconds. No watermark. No signup. No color pickers to mess with, as it&apos;s locked to black because that&apos;s the whole point.
          </p>
        </div>
      </div>

      {/* ── SECTION 2: WHAT IS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col max-w-[1200px] mx-auto">
          <div>
            <span className="hp-eyebrow">Overview</span>
            <h2 className="hp-display-heading">What Is the Black Brat Generator?</h2>
          </div>
          <div>
            <p className="hp-body-text">
              It&apos;s the same brat generator you already know, but locked to a black background. Inspired by the dark variant aesthetics of Charli XCX&apos;s brat album, this version strips the color palette down to white text on black, providing a high contrast, clean, and minimal look. Whether you search for the black brat generator or the brat black generator, you land here. The background stays fixed at #0a0a0a so you can focus on the text, not the settings. No color picker, no distractions, just type and download.
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: FEATURES GRID ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Capabilities</span>
        <h2 className="hp-display-heading">Black Brat Generator Features</h2>
        <div className="max-w-3xl mb-8">
          <p className="hp-body-text mt-4">
            Everything you need to create dark brat visuals, nothing you don&apos;t.
          </p>
        </div>

        <div className="hp-features-grid mt-8">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">⬛</div>
            <h3>Locked Black Background</h3>
            <p>Deep #0a0a0a background, pure black, no color picker, no accidental changes.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>White Text by Default</h3>
            <p>High-contrast white foreground text. The classic black brat look, ready instantly.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✏️</div>
            <h3>Type Any Text</h3>
            <p>Your name, a lyric, a mood, a caption. Any phrase works on the black background.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📥</div>
            <h3>Download as PNG</h3>
            <p>Export a clean watermark-free PNG. Works for TikTok posts, Twitter headers, and wallpapers.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Works on Mobile</h3>
            <p>Full mobile support. Make your brat generator black background image from your phone.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔓</div>
            <h3>No Signup Required</h3>
            <p>Open the tool, type, download. Nothing to create, nothing to log in to.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🆓</div>
            <h3>Free Forever</h3>
            <p>The black brat generator is completely free. No premium tier, no hidden limits.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">👁️</div>
            <h3>Instant Preview</h3>
            <p>See your text live as you type. What you see is exactly what downloads.</p>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Guide</span>
        <h2 className="hp-display-heading">How to Use the Black Brat Generator</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Type Your Text</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Type your text in the input field above.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Adjust Styling</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Adjust font size or letter spacing if needed.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Preview</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Preview your black background brat image live.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Download</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Click Download to save your PNG.</p>
          </div>
        </div>
      </div>

      {/* ── SECTION 5: WHAT TO MAKE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">What to Make With a Black Brat Image</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            A black brat image works anywhere you need bold, minimal visuals. Create brat text generator black background posts for TikTok that stand out in dark-mode feeds. Build profile pictures and pfps with clean white or neon text on brat generator black background for a look that reads instantly at thumbnail size. Use them as Twitter or X headers, as the wide aspect ratio and high contrast make the text pop across the banner. Set one as your phone wallpaper for a locked-screen aesthetic that feels intentional. Or go the meme route: type a short phrase, export, and drop it into a group chat as a reaction image. The format is flexible enough for all of it.
          </p>
        </div>
      </div>

      {/* ── SECTION 6: FAQ ── */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Common questions about this black brat generator."
        items={[
          {
            question: "What is the brat generator black background color?",
            answer: <p>The background is locked to #0a0a0a, which is a near-pure black. This matches the dark variant of the brat aesthetic. You cannot change it on this page; it is fixed by design.</p>,
          },
          {
            question: "Can I make brat text on a black background?",
            answer: <p>Yes. This tool is built specifically for that. Type your text, and it appears as white text on a black background automatically. Download your PNG when ready.</p>,
          },
          {
            question: "What is the difference between the black and green brat generator?",
            answer: <p>The green brat generator uses the official brat green (#89CC04) from Charli XCX&apos;s album. The black version uses #0a0a0a for a darker, higher-contrast look. Same tool, different locked colors.</p>,
          },
          {
            question: "Can I change the text color on the black brat generator?",
            answer: <p>The background is locked to black but you can adjust text size and spacing. The default text color is white for maximum contrast, which is the standard black brat look.</p>,
          },
          {
            question: "Is the black brat generator free?",
            answer: <p>Yes. Completely free, no watermark, no account needed. Download as many PNGs as you want.</p>,
          },
        ]}
      />

      {/* ── SECTION 7: MORE BRAT GENERATORS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">More Brat Generators</h2>
        <div className="max-w-3xl">
          <ul className="hp-body-text space-y-3 mt-6 ml-4 list-disc">
            <li><Link href="/" className="hp-link">Brat Generator</Link>, the full editor with all colors and tools.</li>
            <li><Link href="/brat-text-generator/" className="hp-link">Brat Text Generator</Link>, fast text-only PNG export.</li>
            <li><Link href="/brat-generator-pink/" className="hp-link">Pink Brat Generator</Link>, soft pastel brat aesthetic.</li>
            <li><Link href="/brat-generator-white/" className="hp-link">White Brat Generator</Link>, clean minimalist brat layouts.</li>
            <li><Link href="/brat-green-generator/" className="hp-link">Brat Green Generator</Link>, original neon green brat look.</li>
            <li><Link href="/blog/brat-color-code/" className="hp-link">Brat Color Codes</Link>, hex values for every brat palette.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
