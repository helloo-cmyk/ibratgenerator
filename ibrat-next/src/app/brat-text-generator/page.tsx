import Link from "next/link";
import Image from "next/image";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";
import HomeScrollReveal from "@/components/HomeScrollReveal";

const BRAT_TEXT_EXAMPLES = [
  { src: "/examples/brat-text-ex-2.png", phrase: "typography", alt: "brat text generator example stay toxic" },
  { src: "/examples/brat-text-ex-1.png", phrase: "clean text", alt: "brat text png example brat summer" },
  { src: "/examples/brat-text-ex-3.png", phrase: "bold look", alt: "brat text maker example main character energy" },
  { src: "/examples/brat-text-ex-5.png", phrase: "pure vibe", alt: "brat text png example delulu mode activated" },
  { src: "/examples/brat-text-ex-6.png", phrase: "minimalist", alt: "brat text generator example hot girl music" },
  { src: "/examples/brat-text-ex-4.png", phrase: "no distractions", alt: "brat text png example chaotic good" },
];

export const metadata = {
  title: {
    absolute: "Brat Text Generator – Create Brat Text PNG Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-text-generator/",
  },
  description: "Generate brat-style text and download PNG images instantly. Perfect for captions, memes, and aesthetic posts.",
};

export default function BratTextGeneratorPage() {
  return (
    <main className="hp-root pb-24">

      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Text Generator</h1>
        <p className="intro-text">
          This tool focuses on creating brat-style text and captions. If you want to adjust typography or font styling, use the <Link href="/brat-font-generator/" className="hp-link">brat font generator</Link> instead.
        </p>
      </section>

      {/* ── GENERATOR ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-2 mb-16">
        <BratGeneratorLazy />
      </div>

      <section className="-mt-4 mb-10 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-base" style={{color: "var(--hp-ink-soft)"}}>
          Looking for all features? Try the <Link href="/" className="hp-link font-semibold">free brat generator</Link> to create memes, images, and more in one place.
        </div>
      </section>

      {/* ── TWO-COL: OVERVIEW ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col max-w-[1200px] mx-auto">
          <div>
            <span className="hp-eyebrow">Overview</span>
            <h2 className="hp-display-heading">What is Brat Text?</h2>
          </div>
          <div>
            <p className="hp-body-text">
              Brat text style is the minimalist typography tied to the Brat aesthetic: bold sans-serif type, clean spacing, and little or no decoration. It became iconic through the Charli XCX–inspired Brat era and is used for brat captions, album-style titles, and short statement one-liners that keep text front and center.
            </p>
            <p className="hp-body-text mt-4">
              The look is intentionally stripped-down: no script fonts, no heavy effects: just clear, confident letterforms that read well at any size. This brat text maker recreates that style so you can make brat captions, brat album text, and album-style typography that match the brat look without design software.
            </p>
            <p className="hp-body-text mt-4">
              Whether you want a single word or a short phrase, the brat text generator gives you the same bold, minimal brat text style in seconds, with control over color, size, and layout to export as a brat text png.
            </p>
          </div>
        </div>
      </div>

      {/* ── RELATED TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Related Brat Tools</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            If you want to explore more ways to create brat-style designs, these tools can help depending on what you&apos;re trying to make.
          </p>
          <ul className="hp-body-text space-y-3 mt-6 ml-4 list-disc">
            <li><Link href="/brat-maker" className="hp-link">Brat Maker</Link>: Use this if you want to create images, memes, or layered designs.</li>
            <li><Link href="/brat-font-generator" className="hp-link">Brat Font Generator</Link>: Ideal for adjusting typography, spacing, and font styling.</li>
          </ul>
        </div>
      </div>

      {/* ── TWO-COL: WHAT IT DOES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col max-w-[1200px] mx-auto">
          <div>
            <h2 className="hp-display-heading">What This Tool Does</h2>
          </div>
          <div>
            <p className="hp-body-text">
              The Brat Text Maker is a fast and simple tool that lets you
              create Brat-style text images in seconds. It transforms your
              words into bold, clean, minimal typography inspired by the Brat
              aesthetic popularized by Charli XCX. You can use this tool to
              generate text-only Brat visuals for captions, album-style designs,
              and aesthetic social media posts.
            </p>
            <p className="hp-body-text mt-4">
              Instead of manually editing fonts or struggling with design
              software, this brat text maker does everything automatically. You
              type your text, choose a color style, adjust spacing and
              layout, and download a high-quality brat text png instantly.
            </p>
            <p className="hp-body-text mt-4 font-medium">The tool works entirely online, updates in real time, and requires no signup.</p>
          </div>
        </div>
      </div>

      {/* ── TWO-COL: AUDIENCE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col max-w-[1200px] mx-auto">
          <div>
             <span className="hp-eyebrow">Audience</span>
             <h2 className="hp-display-heading">Who This Tool Is For</h2>
             <p className="hp-body-text mt-4">
               This Brat Text Maker is made for anyone who wants clean Brat-style text without complexity.
             </p>
             <p className="hp-body-text mt-4 font-medium">
               If your focus is text — not images or photo edits — this tool is built specifically for that purpose.
             </p>
          </div>
          <div>
            <p className="hp-body-text mb-4 font-medium">It&apos;s ideal for:</p>
            <div className="flex flex-wrap gap-2">
               {[
                 "Brat aesthetic fans",
                 "Caption creators",
                 "Social media users",
                 "Designers",
                 "Album graphic makers",
                 "Minimalist fans"
               ].map(p => (
                 <span key={p} className="px-3 py-1.5 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-md text-[13px] font-medium text-[var(--hp-ink)] shadow-sm transition-colors hover:border-[var(--hp-border-dark)]">{p}</span>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES GRID ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Capabilities</span>
        <h2 className="hp-display-heading">Main Features of the Brat Text Maker</h2>
        <div className="hp-features-grid mt-6">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">✨</div>
            <h3>Clean Typography</h3>
            <p>The tool applies bold, minimal text styling that matches the Brat look. Characters are clean, evenly spaced, and visually balanced for captions and minimalist quotes.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">⚙️</div>
            <h3>Full Customization</h3>
            <p>Adjust font size, alignment, spacing, line breaks, and position on canvas. Create centered, structured text or more chaotic layouts depending on your style.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🎨</div>
            <h3>Color Controls</h3>
            <p>Choose from classic Brat colors such as neon green, black, white, pink, or completely custom hex colors to match your own unique aesthetic.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Text-Only Canvas</h3>
            <p>This tool focuses purely on text. No clutter, no distractions: just clean typography perfectly balanced on a solid or simple background.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">💾</div>
            <h3>High-Quality PNG Export</h3>
            <p>Every design downloads as a sharp brat text png file. The output stays clean on all platforms, including Instagram, TikTok, Twitter (X), and Discord.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-Friendly Editing</h3>
            <p>The text maker allows you to place emojis anywhere on the canvas. You can edit easily from your phone without jumping through menus.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">⚡</div>
            <h3>Instant Rendering</h3>
            <p>All changes appear immediately. There&apos;s no loading time or waiting, making real-time experimentation fast and incredibly easy.</p>
          </div>
        </div>
      </div>

      {/* ── STEPS GRID ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Getting started</span>
        <h2 className="hp-display-heading">How Brat Text Maker Works</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Enter Your Text</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Type your caption, lyric, quote, or short statement into the editor.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Choose a Color</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Pick green for classic Brat, black/white for contrast, or a custom color.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Adjust Layout</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Change font size, spacing, alignment, and placement seamlessly.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Download Instantly</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Once finished, download your brat text png. No watermark. No limits.</p>
          </div>
        </div>
      </div>

      {/* ── WHY USE / EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why Use the Brat Text Generator</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-6">
            Other tools try to do everything (image editing, collages, stickers) which makes them slow and cluttered. This brat text generator is built for one purpose: creating clean brat text png output, fast.
          </p>
          <p className="hp-body-text mt-4">Compared to general-purpose design apps, this brat text maker offers:</p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-3 mb-6">
            <li>Typography-first design — no image editing clutter</li>
            <li>Instant text-to-PNG conversion</li>
            <li>Brat-accurate font and spacing defaults</li>
            <li>High-resolution output without quality loss</li>
            <li>Zero signup — open and start typing</li>
          </ul>
          <p className="hp-body-text font-medium">If your goal is text, this is the faster, focused alternative to complex design software.</p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Examples of What You Can Create</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">Using this Brat Text Generator, you can make:</p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-3 mb-4">
            <li>Brat caption text & lyric-style visuals</li>
            <li>Minimalist quotes & album text designs</li>
            <li>Aesthetic captions & social media text posts</li>
            <li>Name text graphics & short statement images</li>
          </ul>
          <p className="hp-body-text mt-4 font-medium">
            This tool works especially well when you want text to be the entirely main focus.
          </p>
        </div>
      </div>

      {/* ── IMAGE EXAMPLES GALLERY ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Gallery</span>
        <h2 className="hp-display-heading">Brat Text Generator Examples</h2>
        <div className="max-w-[1200px] mx-auto">
          <p className="hp-body-text mt-4 mb-8 max-w-3xl">
            The images below are example outputs created using this brat text generator. Each one shows the bold, minimal brat text style you can make with the tool: type your own phrase above to get similar results as a brat text png.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAT_TEXT_EXAMPLES.map(({ src, phrase, alt }) => (
              <div key={phrase} className="rounded-xl overflow-hidden bg-[var(--hp-surface)] shadow-sm border border-[var(--hp-border)]">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full h-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORIZED INSPIRATION EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Phrase Inspiration & Ideas</h2>
        <div className="max-w-[1200px] mx-auto">
          <p className="hp-body-text mt-4 mb-6 max-w-3xl">
            Need inspiration? Here are popular phrase ideas you can create with this tool, grouped by category.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[var(--hp-surface-warm)] p-6 rounded-xl border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">💬 Captions</h3>
              <p className="hp-body-text mb-4 text-sm opacity-90">Short, punchy brat text captions that work perfectly for Instagram, TikTok, and Twitter.</p>
              <div className="flex flex-wrap gap-2">
                {['stay toxic', "it's giving main character", 'delulu is the solulu', 'that girl era', 'unbothered'].map(p => (
                  <span key={p} className="px-3 py-1.5 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-md text-[13px] font-medium text-[var(--hp-ink)] shadow-sm">{p}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--hp-surface-warm)] p-6 rounded-xl border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">🔥 Meme Text</h3>
              <p className="hp-body-text mb-4 text-sm opacity-90">Bold brat text meme lines that are made for sharing and going viral.</p>
              <div className="flex flex-wrap gap-2">
                {['no thoughts just vibes', 'chaotic good', 'I said what I said', 'delulu mode activated', 'the audacity'].map(p => (
                  <span key={p} className="px-3 py-1.5 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-md text-[13px] font-medium text-[var(--hp-ink)] shadow-sm">{p}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--hp-surface-warm)] p-6 rounded-xl border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">🎧 Album-Style</h3>
              <p className="hp-body-text mb-4 text-sm opacity-90">Longer phrases and lyric fragments styled as album-inspired typography.</p>
              <div className="flex flex-wrap gap-2">
                {['brat summer', '365 party girl', 'I think about it all the time', 'everything is romantic'].map(p => (
                  <span key={p} className="px-3 py-1.5 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-md text-[13px] font-medium text-[var(--hp-ink)] shadow-sm">{p}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--hp-surface-warm)] p-6 rounded-xl border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">✨ Quotes</h3>
              <p className="hp-body-text mb-4 text-sm opacity-90">Minimalist brat text quotes that make clean, statement-style visuals.</p>
              <div className="flex flex-wrap gap-2">
                {['hot girl music', 'be bold be brat', 'not your type', 'confidence looks good on you'].map(p => (
                  <span key={p} className="px-3 py-1.5 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-md text-[13px] font-medium text-[var(--hp-ink)] shadow-sm">{p}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-xl text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-[14px] sm:text-[15px] font-medium text-[var(--hp-ink)] flex items-center justify-center gap-2">
              💡 Type any of these phrases into the brat text generator above to create your own brat text png instantly.
            </p>
          </div>
        </div>
      </div>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Text Generator"
        items={[
          { question: "Is the Brat Text Generator free?", answer: <p>Yes. You can generate unlimited Brat-style text for free.</p> },
          { question: "Do I need to sign up?", answer: <p>No account is required.</p> },
          { question: "What file format does it export?", answer: <p>All text designs download as high-quality PNG files.</p> },
          { question: "Does the tool support emojis?", answer: <p>Yes. Emojis and special characters are fully supported.</p> },
          { question: "Can I use custom colors?", answer: <p>Yes. You can select any color, including custom hex codes.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The tool is fully optimized for mobile devices.</p> },
          { question: "Can I use the text commercially?", answer: <p>Yes. You can use your generated text for personal or commercial projects.</p> },
          { question: "Is this officially connected to Charli XCX?", answer: <p>No. This is a fan-made text tool inspired by the Brat aesthetic.</p> },
        ]}
      />

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Conclusion</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The Brat Text Maker is the easiest way to create bold, clean Brat-style text images without design software. With simple controls, real-time editing, and high-quality PNG exports, it&apos;s perfect for captions, album-style text, and minimalist visuals.
          </p>
          <p className="hp-body-text mt-4">
            If you want fast and accurate typography creation, this text maker delivers exactly what you need.
          </p>
        </div>
      </div>

      <HomeScrollReveal />
    </main>
  );
}
