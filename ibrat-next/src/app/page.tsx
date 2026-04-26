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
        text: "Yes. Completely free with no download limits. Create unlimited images up to 3000 px.",
      },
    },
    {
      "@type": "Question",
      name: "Does it have watermarks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Every export is clean and watermark-free.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use it on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The editor works on phones and tablets with full touch support on iOS and Android.",
      },
    },
    {
      "@type": "Question",
      name: "What file format does it download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PNG at your chosen resolution. No compression, no quality loss.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make a profile picture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set the aspect ratio to 1:1, type your name, choose colors and font, then download. Works on TikTok, Instagram, Discord, and X.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use it commercially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every image you create is yours to use however you want, including commercial projects.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the Free Brat Generator",
  step: [
    { "@type": "HowToStep", name: "Enter your text", text: "Type your phrase, caption, or name. The canvas updates as you type." },
    { "@type": "HowToStep", name: "Customize the style", text: "Pick a font, set text and background colors, and adjust size and spacing." },
    { "@type": "HowToStep", name: "Add stickers", text: "Place emojis on the canvas. Drag, resize, and rotate to fit your layout." },
    { "@type": "HowToStep", name: "Download your image", text: "Click Download PNG and choose your resolution. No watermark, no signup, no limits." },
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
    absolute: "Brat Generator — Free Online Brat Text, Memes & Image Maker"
  },
  description:
    "Free brat generator — create brat text, memes, stickers & images online. No signup. No watermark. Works on mobile. Download PNG instantly.",
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
        <h1 className="hp-hero-heading">Brat Generator</h1>
        <p className="hp-hero-sub">
          Create bold brat-style visuals, memes, and album covers with this free brat generator. Type your brat text, pick colors and fonts, then download your image. No signup, no watermark.
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
            <p className="hp-display-heading">What Is a Brat Generator?</p>
          </div>
          <div>
            <p className="hp-body-text">
              This tool turns your words into brat style text on a solid-color background: clean brat font, bold contrast, and minimal layout inspired by the{" "}
              <a href="https://en.wikipedia.org/wiki/Brat_(album)" target="_blank" rel="nofollow noopener" className="hp-link">Charli XCX brat</a>{" "}
              aesthetic. Type a phrase, adjust spacing, choose your colors, and get a PNG download in seconds. For text-focused work, try the{" "}
              <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link>, or use the{" "}
              <Link href="/brat-maker/" className="hp-link">brat maker</Link> for stickers and layered edits.
            </p>
          </div>
        </div>
        <p className="hp-body-text mt-8 max-w-3xl">
          Looking for font controls? <Link href="/brat-font-generator/" className="hp-link">Try the Brat Font Generator</Link> →
        </p>
      </div>

      {/* ── FEATURES ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Capabilities</span>
        <h2 className="hp-display-heading">Brat Generator Features That Matter</h2>
        <p className="hp-body-text">
          Skip complex editors. These controls do what brat-style design actually needs.
        </p>
        <div className="hp-features-grid">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">⚡</div>
            <h3>Real-time editing</h3>
            <p>Every change renders instantly on the canvas.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🎨</div>
            <h3>Custom colors</h3>
            <p>Full hex picker for text and background.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Multiple aspect ratios</h3>
            <p>1:1 for profiles, 4:5 for feeds, 9:16 for stories, 16:9 for banners.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🖼️</div>
            <h3>Stickers and emojis</h3>
            <p>Drag, resize, and rotate them on the canvas.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Font control</h3>
            <p>Adjust size, weight, spacing, and alignment.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-optimized</h3>
            <p>Works on phones, tablets, and desktops.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔓</div>
            <h3>No account needed</h3>
            <p>Open the page and start creating.</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon">💾</div>
            <h3>High-res export</h3>
            <p>PNG up to 3000 px, no watermark.</p>
          </div>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Getting started</span>
        <h2 className="hp-display-heading">How to Use a Brat Generator (Step-by-Step)</h2>
        <div className="hp-steps-grid">
          <div className="hp-step-card">
            <span className="hp-step-num">1</span>
            <h3>Enter your text</h3>
            <p>Type your phrase, caption, or name. The canvas updates as you type.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">2</span>
            <h3>Customize the style</h3>
            <p>Pick a font, set text and background colors, and adjust size and spacing.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">3</span>
            <h3>Add stickers</h3>
            <p>Place emojis on the canvas. Drag, resize, and rotate to fit your layout.</p>
          </div>
          <div className="hp-step-card">
            <span className="hp-step-num">4</span>
            <h3>Download your image</h3>
            <p>Click Download PNG and choose your resolution. No watermark, no signup, no limits.</p>
          </div>
        </div>
      </div>

      {/* ── CREATE BRAT DESIGNS / TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">More tools</span>
        <h2 className="hp-display-heading">Create Memes, Covers, and Brat-Style Visuals in One Tool</h2>
        <p className="hp-body-text">
          This tool is a brat meme generator, brat image maker, and{" "}
          <Link href="/brat-album-cover-generator/" className="hp-link">album cover generator</Link> in one.
          Pick from different{" "}
          <Link href="/brat-font-generator/" className="hp-link">brat font styles</Link>, add stickers, and build complete brat album cover layouts without switching tools.
          Every export is a high-res PNG ready for social feeds, stories, and profiles.
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
          <Link href="/brat-name-generator/" className="hp-tool-link">
            Brat Name Generator <span className="hp-tool-arrow">→</span>
          </Link>
          <Link href="/brat-album-cover-generator/" className="hp-tool-link">
            Brat Album Cover Generator <span className="hp-tool-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* ── COLOR STYLES ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Variants</span>
        <h2 className="hp-display-heading">Brat Generator Color Styles (Green, Pink, Black &amp; More)</h2>
        <p className="hp-body-text">
          Switch between signature brat palettes for posts, profiles, or campaigns.
        </p>
        <div className="hp-colors-grid">
          <Link href="/brat-green-generator/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#CCFF00" }}>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>Green Brat Tool</h4>
              <p>Classic neon green text from brat summer.</p>
            </div>
          </Link>
          <Link href="/brat-generator-pink/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#ff69b4" }}>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>Pink Brat Creator</h4>
              <p>Softer, warmer brat aesthetic tone.</p>
            </div>
          </Link>
          <Link href="/brat-black-generator/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#111111" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>Black Generator Tool</h4>
              <p>High contrast dark style.</p>
            </div>
          </Link>
          <Link href="/brat-generator-white/" className="hp-color-card">
            <div className="hp-color-swatch" style={{ background: "#ffffff", borderBottom: "1px solid #e2e2da" }}>
              <span style={{ color: "rgba(0,0,0,0.45)" }}>brat</span>
            </div>
            <div className="hp-color-label">
              <h4>White Brat Look</h4>
              <p>Clean minimalist approach.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ── LEARN / BLOG ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Resources</span>
        <h2 className="hp-display-heading">Why Use a Brat Generator Instead of Design Apps</h2>
        <p className="hp-body-text">
          Design apps like Canva require you to find a template, adjust layers, resize text boxes, and fight menus before you get one output. This tool skips that. Type text, pick a color, download. The controls are built for brat visuals specifically, so there is nothing to configure that does not belong. No subscription, no project files, no learning curve.
        </p>
        <div className="hp-blog-links">
          <Link href="/blog/what-is-brat-font" className="hp-blog-link">
            what is the brat font: typography explained <span>→</span>
          </Link>
          <Link href="/blog/how-to-make-brat-text" className="hp-blog-link">
            how to make brat-style graphics: step-by-step <span>→</span>
          </Link>
        </div>
      </div>

      {/* ── EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered" id="examples">
        <span className="hp-eyebrow">Gallery</span>
        <h2 className="hp-display-heading">Brat Generator Examples (Real Outputs)</h2>
        <p className="hp-body-text">
          Browse real outputs from this brat creator for layout, text, and color ideas.
          Use these as quick inspiration before exporting your own design.
        </p>
        <div className="hp-examples-wrap">
          <ExampleGallery />
        </div>
      </div>

      {/* ── BRIDGE ── */}
      <div className="hp-bridge">
        <div className="hp-bridge-inner">
          <p>
            This brat generator makes bold visuals fast. Create images, memes, and brat style text in one place.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="hp-faq-wrap">
        <FAQAccordion
          title="Frequently Asked Questions"
          intro="Common questions about this brat generator."
          items={[
            {
              question: "Is this brat generator free?",
              answer: (
                <p>
                  Yes. Completely free with no download limits. Create unlimited images up to 3000 px.
                </p>
              ),
            },
            {
              question: "Does it have watermarks?",
              answer: (
                <p>
                  No. Every export is clean and watermark-free.
                </p>
              ),
            },
            {
              question: "Can I use it on mobile?",
              answer: (
                <p>
                  Yes. The editor works on phones and tablets with full touch support on iOS and Android.
                </p>
              ),
            },
            {
              question: "What file format does it download?",
              answer: (
                <p>
                  PNG at your chosen resolution. No compression, no quality loss.
                </p>
              ),
            },
            {
              question: "Can I make a profile picture?",
              answer: (
                <p>
                  Set the aspect ratio to 1:1, type your name, choose colors and font, then download. Works on TikTok, Instagram, Discord, X, and WhatsApp.
                </p>
              ),
            },
            {
              question: "Can I use it commercially?",
              answer: (
                <p>
                  Yes. Every image you create is yours to use however you want, including commercial projects.
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
