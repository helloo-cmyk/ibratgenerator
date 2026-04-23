import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import ExampleGallery from "@/components/ExampleGallery";
import FAQAccordion from "@/components/FAQAccordion";
import HomeScrollReveal from "@/components/HomeScrollReveal";

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
    absolute: "Free Brat Generator – Create Brat Text, Images & Memes Instantly"
  },
  description: "Create brat text, memes, images, and album covers instantly using the free brat generator. No signup required: fast, simple, and easy to use.",
  alternates: {
    canonical: "https://ibratgenerator.com/",
  },
};

export default function Home() {
  return (
    <div className="hp-root">
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

      {/* ── HERO ── */}
      <section className="hp-hero">
        <h1 className="hp-hero-heading">Free Brat Generator</h1>
        <p className="hp-hero-sub">
          Type your text, pick your colors, and download a brat-style image in
          seconds. No signup, no watermark, completely free.
        </p>
      </section>

      {/* ── GENERATOR ── */}
      <div id="generator" className="hp-gen-section">
        <div className="hp-gen-card">
          <div className="hp-gen-label">
            <span className="hp-gen-dot" />
            Live Generator
          </div>
          <BratGeneratorLazy />
        </div>
      </div>

      {/* ── WHAT IS A BRAT GENERATOR ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <div className="hp-two-col">
          <div>
            <span className="hp-eyebrow">About</span>
            <h2 className="hp-display-heading">What Is a Brat Generator?</h2>
          </div>
          <div>
            <p className="hp-body-text">
              A brat generator turns your words into the bold, minimal aesthetic that took over social media: clean sans-serif text on a solid-color background. The style became iconic through Charli XCX and the broader brat culture movement, and this free brat generator lets you recreate it without any design software.
            </p>
            <p className="hp-body-text">
              You type a phrase, choose colors, adjust spacing, and download a finished image. The entire process takes seconds and works on any device. For text-only designs, try the <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link>. For image-based edits and photo overlays, use the <Link href="/brat-maker/" className="hp-link">brat maker</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Capabilities</span>
        <h2 className="hp-display-heading">Features</h2>
        <div className="hp-features-grid">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">⚡</div>
            <h3>Real-time editing</h3>
            <p>Every change renders instantly on the canvas</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🎨</div>
            <h3>Custom colors</h3>
            <p>Full hex color picker for text and background</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Multiple aspect ratios</h3>
            <p>1:1 for profiles, 4:5 for feeds, 9:16 for stories, 16:9 for banners</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🖼️</div>
            <h3>Stickers and emojis</h3>
            <p>Drag, resize, and rotate them directly on the canvas</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Font control</h3>
            <p>Adjust size, weight, spacing, and alignment</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-optimized</h3>
            <p>Works smoothly on phones, tablets, and desktops</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔓</div>
            <h3>No account needed</h3>
            <p>Open the page and start creating immediately</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">💾</div>
            <h3>High-res export</h3>
            <p>PNG at 1024, 1500, 2048, or 3000 px with no watermark</p>
          </div>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Getting started</span>
        <h2 className="hp-display-heading">How to Use the Free Brat Generator</h2>
        <div className="hp-steps-grid">
          <div className="hp-step-card">
            <span className="hp-step-num">1</span>
            <h3>Enter your text</h3>
            <p>Type your phrase, caption, or name in the editor. The canvas updates as you type.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">2</span>
            <h3>Customize the style</h3>
            <p>Open the Style tab to pick a font, set text and background colors, and adjust size and spacing.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">3</span>
            <h3>Add stickers</h3>
            <p>Switch to the Stickers tab to place emojis on the canvas. Drag, resize, and rotate them to fit your layout.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">4</span>
            <h3>Download your image</h3>
            <p>Click Download PNG, choose your resolution, and save. No watermark, no signup, no limits.</p>
          </div>
        </div>
      </div>

      {/* ── CREATE BRAT DESIGNS / TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">More tools</span>
        <h2 className="hp-display-heading">Create Brat Designs Instantly</h2>
        <p className="hp-body-text">
          Start with the main tools depending on what you want to create. If you want to create brat memes or viral posts, you can use the{" "}
          <Link href="/brat-summer-meme-generator" className="hp-link">meme creator</Link>. For album-style visuals, try the{" "}
          <Link href="/brat-album-cover-generator" className="hp-link">album cover generator</Link>.
        </p>
        <div className="hp-tools-grid">
          <Link href="/brat-text-generator/" className="hp-tool-link">
            Brat Text Generator <span className="hp-tool-arrow">→</span>
          </Link>
          <Link href="/brat-maker/" className="hp-tool-link">
            Brat Maker <span className="hp-tool-arrow">→</span>
          </Link>
          <Link href="/brat-font-generator/" className="hp-tool-link">
            Brat Font Generator <span className="hp-tool-arrow">→</span>
          </Link>
          <Link href="/brat-summer-meme-generator/" className="hp-tool-link">
            Brat Summer Meme Generator <span className="hp-tool-arrow">→</span>
          </Link>
          <Link href="/brat-album-cover-generator/" className="hp-tool-link">
            Brat Album Cover Generator <span className="hp-tool-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* ── COLOR STYLES ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Variants</span>
        <h2 className="hp-display-heading">Explore Color Styles</h2>
        <p className="hp-body-text">
          Try different variations of the brat aesthetic. If you want to generate bold visuals quickly, you can also use the{" "}
          <Link href="/brat-text-generator/" className="hp-link">text tool</Link> as a starting point before applying colors.
        </p>
        <div className="hp-colors-grid">
          <Link href="/brat-green-generator/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#CCFF00" }}>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>Green Brat Generator</h4>
              <p>classic neon style</p>
            </div>
          </Link>
          <Link href="/brat-generator-pink/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#ff69b4" }}>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>Pink Brat Generator</h4>
              <p>softer aesthetic</p>
            </div>
          </Link>
          <Link href="/brat-black-generator/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#111111" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>Black Brat Generator</h4>
              <p>high contrast dark style</p>
            </div>
          </Link>
          <Link href="/brat-generator-white/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#ffffff", borderBottom: "1px solid #e2e2da" }}>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>White Brat Generator</h4>
              <p>clean minimalist look</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ── LEARN / BLOG ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Resources</span>
        <h2 className="hp-display-heading">Learn How Brat Style Works</h2>
        <p className="hp-body-text">
          If you want to understand the design style before creating, start here. Once you understand the basics, you can use the{" "}
          <Link href="/brat-text-generator/" className="hp-link">text generator tool</Link> to create your own designs instantly.
        </p>
        <div className="hp-blog-links">
          <Link href="/blog/what-is-brat-font" className="hp-blog-link">
            what is the brat font: typography explained <span>→</span>
          </Link>
          <Link href="/blog/how-to-make-brat-text" className="hp-blog-link">
            how to make brat text: step-by-step guide <span>→</span>
          </Link>
        </div>
      </div>

      {/* ── EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered" id="examples">
        <span className="hp-eyebrow">Gallery</span>
        <h2 className="hp-display-heading">Examples</h2>
        <div className="hp-examples-wrap">
          <ExampleGallery />
        </div>
      </div>

      {/* ── BRIDGE ── */}
      <div className="hp-bridge">
        <div className="hp-bridge-inner">
          <p>
            The free brat generator is designed to make creating brat-style visuals simple and fast. Instead of switching between multiple tools, you can generate text, images, and memes all in one place.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="hp-faq-wrap">
        <FAQAccordion
          title="Frequently Asked Questions"
          intro="Common questions about this free brat generator."
          items={[
            {
              question: "Is this brat generator free?",
              answer: (
                <p>
                  Yes. Completely free: no signup, no watermarks, no download limits. Create as many images as you want at any resolution up to 3000 px.
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
      </div>

      {/* Scroll reveal script */}
      <HomeScrollReveal />
    </div>
  );
}
