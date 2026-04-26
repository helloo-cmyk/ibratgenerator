import Link from "next/link";
import Image from "next/image";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";
import HomeScrollReveal from "@/components/HomeScrollReveal";

const BRAT_TEXT_EXAMPLES = [
  { src: "/examples/brat-text-ex-2.png", phrase: "typography", alt: "brat text generator example showing bold sans-serif brat typography" },
  { src: "/examples/brat-text-ex-1.png", phrase: "clean text", alt: "brat text png example with clean minimal layout" },
  { src: "/examples/brat-text-ex-3.png", phrase: "bold look", alt: "brat text maker example with bold brat style text" },
  { src: "/examples/brat-text-ex-5.png", phrase: "pure vibe", alt: "brat text png free download example" },
  { src: "/examples/brat-text-ex-6.png", phrase: "minimalist", alt: "brat text generator example minimal brat aesthetic" },
  { src: "/examples/brat-text-ex-4.png", phrase: "no distractions", alt: "brat text download example high contrast" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Brat Text Generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unlimited use, no signup, no payment.",
      },
    },
    {
      "@type": "Question",
      name: "Do downloads have watermarks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Every brat text PNG exports clean with no watermark.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use emojis in the text?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Emojis and special characters render on the canvas and export in the PNG.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change the text color?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full hex color picker for both text and background.",
      },
    },
    {
      "@type": "Question",
      name: "Is it mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The editor works on phones and tablets with touch support on iOS and Android.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use generated text commercially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every image you create is yours to use for any purpose, including commercial projects.",
      },
    },
  ],
};

export const metadata = {
  title: {
    absolute: "Brat Text Generator — Free Bold Text PNG, No Watermark",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-text-generator/",
  },
  description:
    "Free brat text generator — create bold, clean brat-style text instantly. Download high-res PNG with no watermark. No signup. Works on mobile.",
};

export default function BratTextGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Text Generator</h1>
        <p className="intro-text">
          A free brat text generator focused on text styling. Create bold brat font text, adjust colors and spacing, and export as PNG. For full image editing with stickers and layers, use the{" "}
          <Link href="/brat-font-generator/" className="hp-link">brat font generator</Link> instead.
        </p>
      </section>

      {/* ── GENERATOR ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-2 mb-16">
        <BratGeneratorLazy />
      </div>

      {/* ── INTRO PARAGRAPH ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="max-w-3xl">
          <p className="hp-body-text">
            This tool creates brat text with clean sans-serif bold text on solid backgrounds. Style your brat style text, pick colors, and get a PNG download in seconds with no signup.
            If you need stickers, image uploads, or layered designs, the{" "}
            <Link href="/brat-maker/" className="hp-link">brat maker</Link> handles that.
            This page is built for text. Nothing else gets in the way.
          </p>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Capabilities</span>
        <h2 className="hp-display-heading">Brat Text Generator Features</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4 mb-6">
            Controls built for brat typography, nothing extra.
          </p>
          <div className="space-y-4">
            <p className="hp-body-text">
              <strong>Bold brat-style text.</strong> Real-time preview of sans-serif bold text on the canvas.
            </p>
            <p className="hp-body-text">
              <strong>Custom color picker.</strong> Full hex control for text and background colors.
            </p>
            <p className="hp-body-text">
              <strong>Photo overlay mode.</strong> Upload an image and place brat text on photo directly.
            </p>
            <p className="hp-body-text">
              <strong>PNG export.</strong> Download brat text as a sharp, high-resolution file.
            </p>
            <p className="hp-body-text">
              <strong>Mobile support.</strong> Works on phones and tablets with touch controls.
            </p>
            <p className="hp-body-text">
              <strong>No watermark.</strong> Every export is clean. No branding on your images.
            </p>
          </div>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Getting started</span>
        <h2 className="hp-display-heading">How to Use a Brat Text Generator</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card">
            <span className="hp-step-num">1</span>
            <h3>Type your text</h3>
            <p>Enter your phrase, name, or caption. The canvas renders it instantly in brat text font.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">2</span>
            <h3>Choose your style</h3>
            <p>Set colors, font size, spacing, and alignment to match the brat text aesthetic you want.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">3</span>
            <h3>Download PNG</h3>
            <p>Click Download PNG and pick a resolution. Your brat text download is instant, free, and watermark-free.</p>
          </div>
        </div>
      </div>

      {/* ── BRAT TEXT ON PHOTO ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Brat Text Generator on Photo</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Upload any image and place brat text on photo for profile pictures, story covers, or meme-style edits. The text stays sharp against the image because it renders as a canvas overlay, not a flat paste. This works well as a brat caption maker for social content where you need bold text over a background image.
          </p>
        </div>
      </div>

      {/* ── DOWNLOAD PNG ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Download Brat Text as PNG</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Every design exports as a brat text png at your chosen resolution: 1024, 1500, 2048, or 3000 px. No compression, no quality loss, no watermark. The download is instant and the file is ready to post, print, or share.
          </p>
        </div>
      </div>

      {/* ── FREE NO WATERMARK ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Free Brat Text Maker &mdash; No Watermark</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            This free brat text maker runs in your browser with no account required. Create and download brat text png free without watermarks, hidden limits, or paywalls.
          </p>
        </div>
      </div>

      {/* ── RELATED TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Related Tools</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            This brat text maker handles text-only designs. For other workflows, these tools may be a better fit.
          </p>
          <ul className="hp-body-text space-y-3 mt-6 ml-4 list-disc">
            <li>Use the <Link href="/" className="hp-link">brat generator</Link> for the full editor with all features in one place.</li>
            <li>Try the <Link href="/brat-font-generator/" className="hp-link">brat font generator</Link> to study brat text font name details and typography controls. Some users searching for a charli xcx text generator start here.</li>
            <li>Use the <Link href="/brat-maker/" className="hp-link">brat maker</Link> to build full images with stickers and image layers.</li>
            <li>Try the <Link href="/brat-black-generator/" className="hp-link">black brat generator</Link> for high-contrast dark brat text aesthetic designs.</li>
          </ul>
        </div>
      </div>

      {/* ── IMAGE EXAMPLES GALLERY ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Gallery</span>
        <h2 className="hp-display-heading">Brat Text Generator Examples</h2>
        <div className="max-w-[1200px] mx-auto">
          <p className="hp-body-text mt-4 mb-8 max-w-3xl">
            Real outputs from this brat text generator. Each shows the bold, minimal brat style text you can create. Type your own phrase above to get similar results.
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
        intro="Common questions about this brat text generator."
        items={[
          { question: "Is the Brat Text Generator free?", answer: <p>Yes. Unlimited use, no signup, no payment.</p> },
          { question: "Do downloads have watermarks?", answer: <p>No. Every brat text PNG exports clean with no watermark.</p> },
          { question: "Can I use emojis in the text?", answer: <p>Yes. Emojis and special characters render on the canvas and export in the PNG.</p> },
          { question: "Can I change the text color?", answer: <p>Yes. Full hex color picker for both text and background.</p> },
          { question: "Is it mobile-friendly?", answer: <p>Yes. The editor works on phones and tablets with touch support on iOS and Android.</p> },
          { question: "Can I use generated text commercially?", answer: <p>Yes. Every image you create is yours to use for any purpose, including commercial projects.</p> },
        ]}
      />

      <HomeScrollReveal />
    </main>
  );
}
