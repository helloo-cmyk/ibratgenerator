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
              Create brat text, images, memes, and album covers instantly — no signup needed.
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

      {/* INFORMATIONAL SECTIONS */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="max-w-none text-base leading-relaxed text-foreground/90 space-y-10">
            
            {/* What is a Brat Generator? */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">What is a Brat Generator?</h2>
              <p className="mb-4">
                A brat generator is an intuitive online tool that helps you recreate the bold, viral aesthetic made famous across social media. Characterized by striking lowercase typography set against vibrant, solid backgrounds, this minimalist format has quickly become a defining staple of modern digital pop culture.
              </p>
              <p className="mb-4">
                Our free platform eliminates the steep learning curve of traditional editing software. You don't have to worry about tweaking layout dimensions, downloading custom typefaces, or struggling with exports. Instead, type your phrase, tweak the colors, and instantly save a polished graphic.
              </p>
              <p>
                From utilizing our seamless <Link href="/brat-text-generator/" className="text-primary hover:underline font-medium">brat text generator</Link> for crisp typographic quotes, to using the advanced <Link href="/brat-maker/" className="text-primary hover:underline font-medium">brat maker</Link> for detailed meme building, this free brat generator empowers total creative control right inside your browser.
              </p>
            </div>

            {/* Create Brat Text, Images & Memes Instantly */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Create Brat Text, Images & Memes Instantly</h2>
              <p>
                Gone are the days of downloading heavy photo editors. With this platform, generating personalized images is incredibly fast. Overlay your funny quotes, design custom social media banners, or produce relatable memes in a matter of seconds. Every edit updates live on your screen, letting you perfectly craft your message before saving it.
              </p>
            </div>
            
            {/* Why This is the Best Free Brat Generator */}
            <div 
              style={{
                background: "#F3F2ED",
                borderRadius: "12px",
                padding: "32px"
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Why This is the Best Free Brat Generator</h2>
              <ul className="list-inside list-disc space-y-2">
                <li><strong>No Signup Needed:</strong> There are no paywalls or accounts required. Jump in immediately.</li>
                <li><strong>100% Free:</strong> A completely free experience without restricted premium features.</li>
                <li><strong>High Output Quality:</strong> Export crisp, uncompressed PNG files perfectly sized for TikTok, Instagram, and X.</li>
                <li><strong>Mobile Friendly:</strong> The editor works seamlessly across all your devices.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-6">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h3 className="text-xl font-semibold mb-6">Examples From Our Generator</h3>
            <ExampleGallery />
          </div>
        </div>
      </section>

      {/* 3. OTHER BRAT TOOLS */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-4">Try Other Brat Tools</h2>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg">
            <li><Link href="/brat-maker/" className="text-primary underline hover:no-underline font-medium">Brat Maker</Link></li>
            <li><Link href="/brat-text-generator/" className="text-primary underline hover:no-underline font-medium">Brat Text Generator</Link></li>
            <li><Link href="/brat-font-generator/" className="text-primary underline hover:no-underline font-medium">Brat Font Generator</Link></li>
          </ul>
        </div>
      </section>

      {/* 4. HOW TO USE */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Use the Free Brat Generator</h2>
            <h3 className="text-xl font-semibold mt-6">Step 1 — Enter your text</h3>
            <p className="mb-4">
              Type your phrase or caption in the text area. The canvas updates in real time.
            </p>
            <h3 className="text-xl font-semibold mt-6">Step 2 — Customize the style</h3>
            <p className="mb-4">
              Pick a font, background color, and text color in the Style tab. Adjust size and spacing.
            </p>
            <h3 className="text-xl font-semibold mt-6">Step 3 — Add stickers or adjust colors</h3>
            <p className="mb-4">
              Use the Stickers tab to add emojis. Drag, resize, and rotate them on the canvas.
            </p>
            <h3 className="text-xl font-semibold mt-6">Step 4 — Download your image</h3>
            <p className="mb-4">
              Click Download PNG to save your design. Choose resolution up to 3000 px. No watermark.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
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
    </main>
  );
}
