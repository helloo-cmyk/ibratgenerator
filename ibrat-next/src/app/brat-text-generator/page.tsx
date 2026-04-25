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
    absolute: "Brat Text Generator — Free Brat Style Text & PNG Download",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-text-generator/",
  },
  description:
    "Type your text in brat font style — bold, clean, no watermark. Download free PNG instantly. Works on mobile. No signup needed.",
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

      {/* ── FEATURES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Capabilities</span>
        <h2 className="hp-display-heading">Brat Text Generator Features</h2>
        <div className="max-w-3xl">
          <ul className="hp-body-text list-disc space-y-2 ml-5 mt-4">
            <li>Bold, clean brat-style typography with real-time preview.</li>
            <li>Simple controls for size, spacing, alignment, and color.</li>
            <li>Text-focused workflow with no clutter or setup required.</li>
            <li>Mobile-ready editing and fast in-browser performance.</li>
          </ul>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Getting started</span>
        <h2 className="hp-display-heading">How to Use a Brat Text Generator</h2>
        <div className="max-w-3xl">
          <ol className="hp-body-text list-decimal space-y-2 ml-5 mt-4">
            <li>Type your phrase in the editor.</li>
            <li>Choose color, size, and spacing.</li>
            <li>Adjust alignment for the look you want.</li>
            <li>Download your PNG instantly.</li>
          </ol>
        </div>
      </div>

      {/* ── SEO SUPPORT SECTIONS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Brat Text Generator on Photo</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Use the brat text generator to style words first, then place the look on photos for posts, covers, and stories.
            It works well for short captions, title overlays, and meme-style image edits.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Download Brat Text as PNG</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Export every design as a free PNG in high quality, ready for social media, profile graphics, or sharing.
            Downloads are instant and keep edges and letterforms sharp.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Free Brat Text Maker — No Watermark</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            This free brat text maker runs in your browser with no signup required.
            Create and download clean outputs without watermarks or hidden limits.
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

      <HomeScrollReveal />
    </main>
  );
}
