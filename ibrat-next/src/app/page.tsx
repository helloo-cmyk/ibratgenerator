import Script from "next/script";
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
        text: "Yes. Our brat generator is 100% free with no hidden fees, no signup, and no watermarks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I download brat images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can download high-quality PNG images instantly. Use the Download PNG button and choose resolution up to 3000 px. No login required and no watermark.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a brat profile picture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set the aspect ratio to square (1:1), type your name or phrase, choose colors and font, then click Download PNG. The result works as a profile picture on any platform.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make my own brat design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Use the generator to type your text, pick fonts and colors, add stickers, and download. You can fully customize and make your own brat design in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What format does the brat generator export?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brat generator exports PNG images. You can choose 1024, 1500, 2048, or 3000 px resolution.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The brat generator works on mobile and desktop. The editor is mobile friendly.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the Free Brat Generator",
  step: [
    { "@type": "HowToStep", name: "Enter text", text: "Type your text in the text area." },
    { "@type": "HowToStep", name: "Customize style", text: "Pick fonts, colors, and background in the Style tab." },
    { "@type": "HowToStep", name: "Add stickers", text: "Add stickers and emojis from the Stickers tab." },
    { "@type": "HowToStep", name: "Preview design", text: "Preview your design on the canvas." },
    { "@type": "HowToStep", name: "Download image", text: "Download your high-quality PNG image." },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ibratgenerator.com/" },
    { "@type": "ListItem", position: 2, name: "Brat Generator", item: "https://ibratgenerator.com/" },
  ],
};

export const metadata = {
  title: {
    absolute: "Brat Generator (Free) – Create Brat Text, Images & Memes",
  },
  description:
    "Create brat text, images, memes, and profile graphics instantly with this free brat generator. Download high-quality PNGs. No signup required.",
  alternates: {
    canonical: "https://ibratgenerator.com/",
  },
};

export default function Home() {
  return (
    <main className="space-y-10">
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* SECTION 1 — HERO */}
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 pt-6 pb-2 sm:pt-8 sm:pb-4 sm:px-6 text-base leading-relaxed text-foreground/90">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mt-0 mb-2 mx-auto">
              Free Brat Generator
            </h1>
            <p className="text-base sm:text-lg text-foreground/90 mb-0 max-w-xl mx-auto">
              This is an all-in-one brat generator that lets you create text, images, memes, and profile graphics from a single tool.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-2 sm:mt-4 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      {/* SECTION 2 — FEATURES */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Create Brat Text, Images, and Profile Pictures</h2>
            <p className="mb-4">
              Everything is handled in one place: turn your ideas into brat captions, meme-ready graphics, and profile-picture designs. Export each result as a high-quality PNG so you can share text, images, and memes right away.
            </p>
            <p className="mb-4">You can:</p>
            <ul className="list-inside list-disc space-y-1 mb-4">
              <li>Generate brat words and captions</li>
              <li>Create brat images and graphics</li>
              <li>Make brat profile pictures</li>
              <li>Download PNG graphics in high resolution</li>
              <li>Add stickers and emojis to your design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Use the Free Brat Generator</h2>
            <h3 className="text-xl font-semibold mt-6">Step 1 — Enter your text</h3>
            <p className="mb-4">
              Type your phrase or caption in the text area. The canvas updates in real time as you type.
            </p>
            <h3 className="text-xl font-semibold mt-6">Step 2 — Customize the brat style</h3>
            <p className="mb-4">
              Pick a font, background color, and text color in the Style tab. Adjust size and spacing to match the look you want.
            </p>
            <h3 className="text-xl font-semibold mt-6">Step 3 — Add stickers or adjust colors</h3>
            <p className="mb-4">
              Use the Stickers tab to add emojis or stickers. Drag, resize, and rotate them on the canvas. Tweak colors anytime in the Style tab.
            </p>
            <h3 className="text-xl font-semibold mt-6">Step 4 — Download your brat image</h3>
            <p className="mb-4">
              Click Download PNG to save your design. Choose resolution up to 3000 px. No watermark and no signup required.
            </p>
            <p className="mb-4">
              If you only need clean text-based designs without images or stickers, the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link> lets you create brat text PNG images quickly with a focused, text-only workflow.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — EXAMPLES */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Examples From Our Brat Generator</h2>
            <p className="mb-6">
              Sample outputs created with the tool. Each is exportable as a brat generator png. Try the generator above to create your own.
            </p>
            <ExampleGallery />
          </div>
        </div>
      </section>

      {/* SECTION 5 — USE CASES */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What You Can Create With This Brat Generator</h2>
            <p className="mb-4">
              Use this brat generator to create profile pictures, memes, and social media captions. For profile-ready graphics, try the <Link href="/brat-maker/" className="text-primary underline hover:no-underline">brat maker</Link>. For text-only PNG images, use the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link>. This tool is ideal for aesthetic graphics—bold text on solid or custom backgrounds for Instagram, TikTok, or any platform.
            </p>
            <p className="mb-4">Common uses include:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Brat profile pictures and avatars</li>
              <li>Memes and captions</li>
              <li>Social media posts and stories</li>
              <li>Aesthetic graphics and mood boards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY USE */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why Use Our Free Brat Generator</h2>
            <p className="mb-4">
              The tool is completely free with no hidden costs. You get an instant preview as you type and edit—no signup required. It runs in your browser and works on mobile and desktop. Export high quality brat generator png files at up to 3000 px with no watermark.
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>Completely free</li>
              <li>Instant preview</li>
              <li>No signup required</li>
              <li>Mobile friendly</li>
              <li>High quality PNG export</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Common questions about our free brat generator."
        items={[
          {
            question: "Is this brat generator free?",
            answer: (
              <p>
                Yes. Our brat generator is 100% free with no hidden fees, no signup, and no watermarks. Create and download as many images as you want.
              </p>
            ),
          },
          {
            question: "Can I download brat images?",
            answer: (
              <p>
                Yes. You can download high-quality PNG images instantly. Use the Download PNG button and choose resolution up to 3000 px. No login required and no watermark.
              </p>
            ),
          },
          {
            question: "How do I create a brat profile picture?",
            answer: (
              <p>
                Set the aspect ratio to square (1:1), type your name or phrase, choose colors and font, then click Download PNG. The result works as a profile picture on any platform.
              </p>
            ),
          },
          {
            question: "Can I make my own brat design?",
            answer: (
              <p>
                Yes. Use the generator above to type your text, pick fonts and colors, add stickers, and download. You can fully customize and make your own brat design in seconds.
              </p>
            ),
          },
          {
            question: "What format does the brat generator export?",
            answer: (
              <p>
                The brat generator exports PNG images. You can choose 1024, 1500, 2048, or 3000 px resolution. No other format is required for social media or profile pictures.
              </p>
            ),
          },
          {
            question: "Does it work on mobile devices?",
            answer: (
              <p>
                Yes. The brat generator works on mobile and desktop. The editor is mobile friendly so you can create from your phone or tablet.
              </p>
            ),
          },
        ]}
      />

      {/* SECTION 9 — CLOSING */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Start Creating Your Brat Design</h2>
            <p className="mb-4 mt-4">
              This <Link href="/" className="text-primary underline hover:no-underline">free brat generator</Link> is the fastest way to create brat-style visuals. Use the <Link href="/brat-maker/" className="text-primary underline hover:no-underline">brat maker</Link> for images, memes, and profile pictures. Try the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link> for text-only PNG designs. Or use the <Link href="/brat-creator/" className="text-primary underline hover:no-underline">brat creator</Link> for advanced editing with full customization.
            </p>
          </div>
        </div>
      </section>
      </main>
  );
}
