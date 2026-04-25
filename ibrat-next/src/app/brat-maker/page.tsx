import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";
import HomeScrollReveal from "@/components/HomeScrollReveal";
import ExampleGallery from "@/components/ExampleGallery";

export const metadata = {
  title: {
    absolute: "Brat Maker – Create Brat Images & Memes Instantly",
  },
  description: "Try our free brat maker to create brat images and memes instantly. Customize text and colors. No signup required.",
  alternates: {
    canonical: "https://ibratgenerator.com/brat-maker/",
  },
};

export default function BratMakerPage() {
  return (
    <main className="hp-root pb-24">

      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Maker</h1>
        <p className="intro-text">
          A complete editing suite to craft bold typography images, viral memes, and aesthetic profile pictures. Start creating instantly without needing to create an account.
        </p>
      </section>

      {/* ── GENERATOR ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-2 mb-16">
        <BratGeneratorLazy />
      </div>

      {/* ── INTERNAL LINK ── */}
      <section className="-mt-4 mb-10 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-base" style={{color: "var(--hp-ink-soft)"}}>
          Looking for all features? Try the <Link href="/" className="hp-link font-semibold">free brat generator</Link> to create memes, images, and more in one place.
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col max-w-[1200px] mx-auto">
          <div>
            <span className="hp-eyebrow">Overview</span>
            <h2 className="hp-display-heading">What is a Brat Meme?</h2>
          </div>
          <div>
            <p className="hp-body-text">
              A brat meme is a bold, minimal visual that combines short text with
              strong color contrast and clean composition. This brat maker is built for
              generating Brat-style meme visuals and share-ready graphics in
              seconds. Inspired by the bold, minimal look popularized by Charli
              XCX&apos;s Brat era, it helps you create clean, eye-catching images without
              needing any design experience.
            </p>
            <p className="hp-body-text mt-4">
              Instead of switching between apps, fonts, and editing software,
              everything works directly in your browser. You type your text,
              customize the layout, choose your colors, and download instantly.
            </p>
            <p className="hp-body-text mt-4 font-medium">
              Whether you want to create a meme, design a post graphic, or build
              album-inspired visuals, this tool gives you full control in seconds.
            </p>
            <p className="hp-body-text mt-4">
              It works smoothly on desktop and mobile, updates in real time,
              and exports high-quality PNG files with no watermark.
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
            <li><Link href="/brat-text-generator" className="hp-link">Brat Text Generator</Link>: Best for quick text-only designs and fast PNG downloads.</li>
            <li><Link href="/brat-font-generator" className="hp-link">Brat Font Generator</Link>: Ideal for adjusting typography, spacing, and font styling.</li>
          </ul>
        </div>
      </div>

      {/* ── AUDIENCE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col flex flex-col md:flex-row items-start gap-12 max-w-[1200px] mx-auto">
          <div className="flex-1">
             <span className="hp-eyebrow">Audience</span>
             <h2 className="hp-display-heading">Who the Brat Maker Is For</h2>
             <p className="hp-body-text mt-4">
               The brat maker is built for creators who want fast, clean, aesthetic visuals. If you want a tool that handles images, memes, and profile pictures in one place, this brat maker covers everything.
             </p>
          </div>
          <div className="flex-1">
            <p className="hp-body-text mb-4 font-medium">It is perfect for:</p>
            <div className="flex flex-wrap gap-2">
               {[
                 "Social media creators",
                 "Meme pages",
                 "Profile picture makers",
                 "Brat-style captions",
                 "Aesthetic edits",
                 "Image creation fans"
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
        <h2 className="hp-display-heading">Core Features of the Brat Maker</h2>
        
        <div className="hp-features-grid mt-8">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Bold Text on Images</h3>
            <p>Add bold text directly onto your images with full control over font size, letter spacing, line height, alignment, background color, and position.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🖼️</div>
            <h3>Brat Image Maker</h3>
            <p>Upload your own photos and add Brat-style text on top to create profile pictures, meme images, aesthetic edits, and album-inspired visuals instantly.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">👤</div>
            <h3>Profile Maker</h3>
            <p>Create a 1:1 layout, type your phrase, adjust spacing, and export it instantly. Works perfectly as a profile picture for TikTok, Instagram, Discord, and X.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">😂</div>
            <h3>Brat Meme Creator</h3>
            <p>Create text-based memes or combine uploaded photos with bold captions to generate humorous, chaotic, or sarcastic brat-style meme visuals.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Multiple Ratios</h3>
            <p>Choose from multiple canvas sizes depending on your platform: 16:9 for landscape, 4:5 for portraits, 9:16 for TikTok/Reels, and 1:1 format.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🎨</div>
            <h3>Custom Themes</h3>
            <p>While green is popular, you can choose any custom hex color. Create pink edits, black minimalist visuals, clean white layouts, and more.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">💾</div>
            <h3>High-Quality Export</h3>
            <p>Every design downloads as a sharp PNG file with no watermark, no compression, no account requirement, and absolutely no export limits.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-Optimized</h3>
            <p>Works smoothly on smartphones, tablets, and desktops. You can drag, resize, edit text, and download your graphics seamlessly anywhere.</p>
          </div>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Brat Creator Tool</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            This brat maker also works as a brat creator, allowing you to design custom brat-style images, memes, profile pictures, and text visuals in one intuitive place.
          </p>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Getting started</span>
        <h2 className="hp-display-heading">How to Create Brat Images</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Add Your Text</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Start by typing your caption, username, lyric, or meme line. You can make brat text or bold statements.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Customize the Style</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Adjust text size, alignment, spacing, color, and background to match your vision for full control.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Images & Layout</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Upload an image to serve as a custom background. Then select the optimal canvas aspect ratio.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Download Instantly</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Click download and get your final PNG instantly. No signup. No watermark. No delay.</p>
          </div>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why This Brat Maker Is Better</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">Many online editors are low quality, filled with ads, limited in features, or locked behind paywalls.</p>
          <p className="hp-body-text mt-4">This brat maker is built differently. It offers:</p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-3 mb-4">
            <li>Clean interface with full customization</li>
            <li>Fast real-time editing and mobile compatibility</li>
            <li>High-resolution downloads and unlimited usage</li>
          </ul>
          <p className="hp-body-text mt-4 font-medium">
            It combines text editing, image editing, meme creation, and profile design in one simple tool. From simple text to full image edits, everything can be created in seconds.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Gallery</span>
        <h2 className="hp-display-heading">Brat Maker Examples</h2>
        <div className="max-w-[1200px] mx-auto">
          <p className="hp-body-text mt-4 max-w-3xl">
            With the brat maker you can create brat-style memes, profile graphics, captions, and aesthetic text posts. Generate bold one-word statements, album-inspired text layouts, sarcastic meme captions, or clean profile pictures: all in the minimal Brat aesthetic.
          </p>
          <div className="hp-examples-wrap mt-8">
            <ExampleGallery type="maker" />
          </div>
        </div>
      </div>

      {/* ── BRAT MEME EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Memes</span>
        <h2 className="hp-display-heading">Brat Meme Examples</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Brat memes are bold, minimal text visuals that turn short phrases, sarcastic captions, and inside jokes into shareable graphics. Using the signature Brat typography on vivid backgrounds, they became a staple of social media humor — especially during the &quot;brat summer&quot; trend of 2024 inspired by Charli XCX&apos;s album era.
          </p>
          <p className="hp-body-text mt-4">
            While brat summer as a seasonal trend has passed, the meme format lives on. People still use the style for funny one-liners, relatable quotes, friendship moments, and chaotic group chat energy. Here are some ideas you can create with this brat maker:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Summer-themed memes with neon green backgrounds</li>
            <li>Funny captions and sarcastic one-liners</li>
            <li>TikTok and Reels video overlays</li>
            <li>Vacation and beach-day inside jokes</li>
            <li>Brat-style quotes and friendship moments</li>
            <li>Chaotic meme edits with bold typography</li>
          </ul>
          <p className="hp-body-text font-medium">
            Whether you&apos;re keeping the brat summer spirit alive or creating fresh meme content year-round, this maker gives you everything you need to design and download instantly.
          </p>
        </div>
      </div>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about the Brat Maker"
        items={[
          { question: "Is the Brat Maker free?", answer: <p>Yes. You can create unlimited designs without paying.</p> },
          { question: "Do I need to create an account?", answer: <p>No. The tool works instantly without signup.</p> },
          { question: "What file format is used?", answer: <p>All designs export as high-quality PNG files.</p> },
          { question: "Can I upload my own images?", answer: <p>Yes. You can upload any image and add Brat-style text.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The editor is optimized for mobile devices.</p> },
          { question: "Can I use the designs commercially?", answer: <p>Yes. You can use your creations for personal or commercial use.</p> },
        ]}
      />

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Conclusion</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The brat maker is a complete online editor for creating Brat-style text, memes, profile pictures, and image-based graphics. It combines text editing, layout control, image upload, and high-quality export in one simple interface.
          </p>
          <p className="hp-body-text mt-4">
            If you want a fast, flexible way to design Brat visuals without installing software, this tool gives you everything you need.
          </p>
          <p className="hp-body-text mt-6 font-medium text-[var(--hp-ink)]">
            No watermark. No signup. No limits. Just create and download instantly.
          </p>
        </div>
      </div>

      <HomeScrollReveal />
    </main>
  );
}
