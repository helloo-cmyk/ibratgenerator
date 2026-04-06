import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import ExampleGallery from "@/components/ExampleGallery";
import FAQAccordion from "@/components/FAQAccordion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this brat generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This brat generator is completely free. No signup, no watermarks, no download limits.",
      },
    },
    {
      "@type": "Question",
      name: "Can I download brat images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Click Download PNG and choose a resolution up to 3000 px. Every export is watermark-free.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make a brat profile picture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set the aspect ratio to 1:1, type your name or phrase, pick colors and font, then download. Works on TikTok, Instagram, Discord, and X.",
      },
    },
    {
      "@type": "Question",
      name: "What format does the brat generator export?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PNG at 1024, 1500, 2048, or 3000 px. No compression, no quality loss.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The editor is fully optimized for phones and tablets.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from Canva or Photoshop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This tool is purpose-built for the brat aesthetic. No templates to search, no menus to learn, no subscription.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the Free Brat Generator",
  step: [
    { "@type": "HowToStep", name: "Enter text", text: "Type your text in the editor." },
    { "@type": "HowToStep", name: "Customize style", text: "Pick fonts, colors, and background." },
    { "@type": "HowToStep", name: "Add stickers", text: "Drag emojis and stickers onto the canvas." },
    { "@type": "HowToStep", name: "Download", text: "Export as a high-quality PNG image." },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Free Brat Generator", item: "https://ibratgenerator.com/" },
  ],
};

export const metadata = {
  title: {
    absolute: "Free Brat Generator – Create Brat Text, Images & Memes Online"
  },
  description: "Use this free brat generator to create brat text, images, and memes instantly. No signup required.",
  alternates: {
    canonical: "https://ibratgenerator.com/",
  },
};

export default function Home() {
  return (
    <main className="space-y-10" style={{ background: "#FAFAF7" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO & GENERATOR */}
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 pt-4 pb-2 sm:pt-6 sm:pb-4 sm:px-6 text-base leading-relaxed text-foreground/90">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mt-0 mb-4 mx-auto">Free Brat Generator</h1>
            <p className="text-base sm:text-lg text-foreground/90 mb-6 max-w-xl mx-auto">
              Type your text, pick your colors, and download a brat-style image in seconds. No signup, no watermark, completely free.
            </p>
          </div>
        </div>

        <div 
          className="mb-8 sm:mb-12"
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #E8E6E0",
            overflow: "hidden",
            boxShadow: "none"
          }}
        >
          <BratGeneratorLazy />
        </div>
      </section>

      {/* WHAT IS A BRAT GENERATOR */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="max-w-none text-base leading-relaxed text-foreground/90 space-y-10">

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">What Is a Brat Generator?</h2>
              <p className="mb-4">
                A brat generator turns your words into the bold, minimal aesthetic that took over social media — clean sans-serif text on a solid-color background. The style became iconic through Charli XCX and the broader brat culture movement, and this free brat generator lets you recreate it without any design software.
              </p>
              <p>
                You type a phrase, choose colors, adjust spacing, and download a finished image. The entire process takes seconds and works on any device. For text-only designs, try the <Link href="/brat-text-generator/" className="text-primary hover:underline font-medium">brat text generator</Link>. For image-based edits and photo overlays, use the <Link href="/brat-maker/" className="text-primary hover:underline font-medium">brat maker</Link>.
              </p>
            </div>

            {/* FEATURES */}
            <div 
              style={{
                background: "#F3F2ED",
                borderRadius: "12px",
                padding: "32px"
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Features</h2>
              <ul className="list-inside list-disc space-y-2">
                <li><strong>Real-time editing</strong> — every change renders instantly on the canvas</li>
                <li><strong>Custom colors</strong> — full hex color picker for text and background</li>
                <li><strong>Multiple aspect ratios</strong> — 1:1 for profiles, 4:5 for feeds, 9:16 for stories, 16:9 for banners</li>
                <li><strong>Stickers and emojis</strong> — drag, resize, and rotate them directly on the canvas</li>
                <li><strong>High-res export</strong> — PNG at 1024, 1500, 2048, or 3000 px with no watermark</li>
                <li><strong>Font control</strong> — adjust size, weight, spacing, and alignment</li>
                <li><strong>Mobile-optimized</strong> — works smoothly on phones, tablets, and desktops</li>
                <li><strong>No account needed</strong> — open the page and start creating immediately</li>
              </ul>
            </div>

            {/* HOW TO USE */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">How to Use the Free Brat Generator</h2>
              <h3 className="text-xl font-semibold mt-6">1. Enter your text</h3>
              <p className="mb-4">
                Type your phrase, caption, or name in the editor. The canvas updates as you type.
              </p>
              <h3 className="text-xl font-semibold mt-6">2. Customize the style</h3>
              <p className="mb-4">
                Open the Style tab to pick a font, set text and background colors, and adjust size and spacing.
              </p>
              <h3 className="text-xl font-semibold mt-6">3. Add stickers</h3>
              <p className="mb-4">
                Switch to the Stickers tab to place emojis on the canvas. Drag, resize, and rotate them to fit your layout.
              </p>
              <h3 className="text-xl font-semibold mt-6">4. Download your image</h3>
              <p>
                Click Download PNG, choose your resolution, and save. No watermark, no signup, no limits.
              </p>
            </div>

            {/* WHAT YOU CAN CREATE */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">What You Can Create</h2>
              <ul className="list-inside list-disc space-y-2">
                <li><strong>Brat text images</strong> — minimal quotes and captions on solid backgrounds</li>
                <li><strong>Memes</strong> — viral one-liners in the brat style. See the <Link href="/brat-summer-meme-generator/" className="text-primary hover:underline font-medium">brat summer meme generator</Link> for trending formats.</li>
                <li><strong>Profile pictures</strong> — square graphics with your name, sized for TikTok, Instagram, Discord, and X</li>
                <li><strong>Album covers</strong> — Charli XCX–inspired artwork via the <Link href="/brat-album-cover-generator/" className="text-primary hover:underline font-medium">brat album cover generator</Link></li>
                <li><strong>Social media graphics</strong> — posts, stories, and banners across every standard ratio</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-6">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-6">Examples</h2>
            <ExampleGallery />
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Common questions about this free brat generator."
        items={[
          {
            question: "Is this brat generator free?",
            answer: (
              <p>
                Yes. Completely free — no signup, no watermarks, no download limits. Create as many images as you want at any resolution up to 3000 px.
              </p>
            ),
          },
          {
            question: "Can I download brat images?",
            answer: (
              <p>
                Yes. Click Download PNG and pick from four resolutions: 1024, 1500, 2048, or 3000 px. Every export is watermark-free.
              </p>
            ),
          },
          {
            question: "How do I make a brat profile picture?",
            answer: (
              <p>
                Set the aspect ratio to 1:1, type your name or phrase, choose your colors and font, then click Download PNG. The result works as a profile picture on TikTok, Instagram, Discord, X, and WhatsApp.
              </p>
            ),
          },
          {
            question: "What format does the brat generator export?",
            answer: (
              <p>
                PNG images at your chosen resolution. PNG preserves quality without compression artifacts, making it the best format for social media and print.
              </p>
            ),
          },
          {
            question: "Does it work on mobile?",
            answer: (
              <p>
                Yes. The editor adapts to smaller screens and supports touch interactions for dragging stickers, adjusting text, and exporting images on iOS and Android.
              </p>
            ),
          },
          {
            question: "How is this different from Canva or Photoshop?",
            answer: (
              <p>
                This tool is built specifically for the brat aesthetic. No templates, no menus, no subscription. You open the page, type your text, and download a finished image in seconds.
              </p>
            ),
          },
        ]}
      />
    </main>
  );
}
