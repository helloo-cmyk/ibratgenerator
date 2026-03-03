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
      name: "Is this brat generator completely free?",
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
        text: "Yes. You can download high-quality PNG images instantly. No login required.",
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
    {
      "@type": "Question",
      name: "What font does brat generator use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tool offers several brat-style fonts. You can choose from the font selector in the Text tab.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create brat memes for Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your text, pick a style, add stickers if you like, then download the image. Use the square or 4:5 ratio for Instagram.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add stickers to brat text?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Use the Stickers tab to add emojis and stickers to your brat text design. Drag, resize, and rotate them on the canvas.",
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
    absolute: "Free Brat Generator Online – Create Brat Text, Memes & Stickers",
  },
  description:
    "Create brat-style text, memes, and sticker graphics instantly with our free brat generator. Customize fonts, colors, and download high-quality images in seconds.",
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
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 pt-6 pb-2 sm:pt-8 sm:pb-4 sm:px-6 text-base leading-relaxed text-foreground/90">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mt-0 mb-2 mx-auto">
              Free Brat Generator
            </h1>
            <p className="text-base sm:text-lg text-foreground/90 mb-0 max-w-xl mx-auto">
              Create brat text, memes and sticker-style graphics online instantly. 100% free and mobile friendly.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-2 sm:mt-4 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What Is a Brat Generator?</h2>
            <p className="mb-4">
              A brat generator is an online tool that creates Charli XCX–inspired Brat-style text and images in your browser. You don&apos;t need design experience or editing software. Type your text, choose colors, adjust spacing, add stickers, and the free brat generator online instantly creates a clean Brat-style visual. The Brat look is bold, colorful, and minimal—perfect for memes, aesthetic edits, profile pictures, and brat captions for Instagram. Whether you need a brat text generator, brat meme generator, or brat sticker generator, you can create brat-style text online in seconds.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Create Brat Text & Memes in Seconds</h2>
            <p className="mb-4">
              Use our brat text generator to create brat meme generator–style graphics and brat sticker generator outputs without signing up. The brat image generator runs entirely in your browser: enter text, customize style, add stickers, and download brat text image files as high-quality PNGs. Create brat text online for social posts, profile pics, or brat png generator exports—all free and mobile friendly.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Features of Our Free Brat Generator</h2>

            <h3 className="text-xl font-semibold mt-6">Custom Fonts & Styling</h3>
            <p className="mb-4">
              Choose from multiple brat-style fonts and adjust size, weight, spacing, and alignment. The brat style text maker supports English, symbols, and emojis so you can match any aesthetic.
            </p>

            <h3 className="text-xl font-semibold mt-6">Sticker & Emoji Support</h3>
            <p className="mb-4">
              Add stickers and emojis to your design from the Stickers tab. Drag, resize, and rotate them on the canvas for a personalized brat sticker generator–style result.
            </p>

            <h3 className="text-xl font-semibold mt-6">Download PNG Instantly</h3>
            <p className="mb-4">
              Download brat text image files as PNG in one click. Export at 1000×1000, 1500×1500, or 2000×2000—no watermark, no signup. Perfect for download brat text image use on social media.
            </p>

            <h3 className="text-xl font-semibold mt-6">Mobile Friendly Editor</h3>
            <p className="mb-4">
              The free brat generator works on phones, tablets, and desktops. The editor is responsive so you can create brat text online from any device.
            </p>

            <h3 className="text-xl font-semibold mt-6">High Resolution Export</h3>
            <p className="mb-4">
              Get sharp, high-resolution PNGs suitable for Instagram, TikTok, and print. No quality loss—our brat generator online delivers professional results.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Use the Brat Generator</h2>
            <p className="mb-4">Using our free brat generator is simple:</p>
            <ol className="list-decimal list-inside space-y-3 mb-4">
              <li><strong>Enter text</strong> — Type your phrase in the text area.</li>
              <li><strong>Customize style</strong> — Pick fonts, colors, and background in the Style tab.</li>
              <li><strong>Add stickers</strong> — Use the Stickers tab to add emojis and stickers to the canvas.</li>
              <li><strong>Preview design</strong> — Check your layout on the live canvas.</li>
              <li><strong>Download image</strong> — Click Download PNG to save your high-quality image.</li>
            </ol>
            <p>No account needed. The brat generator online works instantly in your browser.</p>
          </div>
        </div>
      </section>

      <ExampleGallery />

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why Use Our Free Brat Generator?</h2>
            <p className="mb-4">
              Most brat generator online tools are limited, ad-heavy, or poor resolution. Ours is 100% free, no signup, no watermark. You get full customization, mobile support, high-resolution export, and stickers—so you can create brat text online and download brat text image files in seconds. It&apos;s the best free brat generator for memes, captions, and social graphics.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Who Uses Brat Generators?</h2>
            <p className="mb-4">Our free brat generator is used by:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>TikTok and Instagram creators</li>
              <li>Brat-style meme pages and fans</li>
              <li>Anyone creating brat captions for Instagram</li>
              <li>People who want a quick brat text generator or brat meme generator</li>
              <li>Designers needing a brat sticker generator or brat png generator</li>
            </ul>
            <p className="mt-4">The interface is simple and works on mobile and desktop.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-none text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Explore More Brat Generators</h2>
            <p className="mb-6">
              Try our other tools to create brat-style content:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 list-none pl-0">
              <li><Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link></li>
              <li><Link href="/brat-name-generator/" className="text-primary underline hover:no-underline">brat name generator</Link></li>
              <li><Link href="/brat-font-generator/" className="text-primary underline hover:no-underline">brat font generator</Link></li>
              <li><Link href="/brat-album-cover-generator/" className="text-primary underline hover:no-underline">brat album cover generator</Link></li>
              <li><Link href="/brat-summer-meme-generator/" className="text-primary underline hover:no-underline">brat meme generator</Link></li>
              <li><Link href="/brat-green-generator/" className="text-primary underline hover:no-underline">green brat generator</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Common questions about our free brat generator."
        items={[
          {
            question: "Is this brat generator completely free?",
            answer: (
              <p>
                Yes. Our brat generator is 100% free with no hidden fees, no signup, and no watermarks. Create and download as many brat text images as you want.
              </p>
            ),
          },
          {
            question: "Can I download brat images?",
            answer: (
              <p>
                Yes. You can download high-quality PNG images instantly. No login required. Use the Download PNG button to save your design.
              </p>
            ),
          },
          {
            question: "Does it work on mobile devices?",
            answer: (
              <p>
                Yes. The brat generator works on mobile and desktop. The editor is mobile friendly so you can create brat text online from your phone or tablet.
              </p>
            ),
          },
          {
            question: "What font does brat generator use?",
            answer: (
              <p>
                The tool offers several brat-style fonts. You can choose from the font selector in the Text tab to match the classic Brat look or try other styles.
              </p>
            ),
          },
          {
            question: "How do I create brat memes for Instagram?",
            answer: (
              <p>
                Enter your text, pick a style and colors, add stickers if you like, then download the image. Use the square or 4:5 aspect ratio for Instagram posts or stories.
              </p>
            ),
          },
          {
            question: "Can I add stickers to brat text?",
            answer: (
              <p>
                Yes. Use the Stickers tab to add emojis and stickers to your brat text design. You can drag, resize, and rotate them on the canvas.
              </p>
            ),
          },
        ]}
      />
      </main>
  );
}
