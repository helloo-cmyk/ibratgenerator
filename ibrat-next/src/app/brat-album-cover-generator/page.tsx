import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "Brat Album Cover Generator – Create Brat Album Covers Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-album-cover-generator/",
  },
  description: "Use this free brat album cover generator to create custom brat cover art instantly. Fast, easy, and no signup required.",
};

export default function BratAlbumCoverGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Album Cover Generator</h1>
        <p className="intro-text">
          Use this brat album cover generator and maker to make your own brat album cover in seconds. Create Brat-style album covers instantly — no design software needed.
        </p>
      </section>

      {/* ── GENERATOR APP ── */}
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
            <h2 className="hp-display-heading">What Is a Brat Album Cover Generator</h2>
          </div>
          <div>
            <p className="hp-body-text">
              The Brat Album Cover Generator is a dedicated tool that lets you
              design Brat-inspired album covers in seconds. It&apos;s built for
              users who want to recreate the bold, minimal, high-contrast visual
              style associated with the Brat aesthetic — without needing advanced
              design software or editing skills.
            </p>
            <p className="hp-body-text mt-4">
              This tool allows you to combine clean typography, bold colors,
              custom backgrounds, and album-style layouts into a single square or
              landscape design that looks ready for streaming platforms, mock
              albums, playlists, or creative projects. Whether you&apos;re
              experimenting with music visuals, making concept art, or creating
              social media graphics, this generator gives you full control over
              the final look.
            </p>
            <p className="hp-body-text mt-4 font-medium">Everything updates in real time. You type, adjust, preview, and download — all from one simple interface.</p>
          </div>
        </div>
      </div>

      {/* ── RELATED TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Related Brat Tools</h2>
        <p className="hp-body-text mt-4">
          If you want to explore more ways to create brat-style designs, these tools can help depending on what you&apos;re trying to make.
        </p>
        <ul className="hp-body-text space-y-3 mt-6 ml-4 list-disc">
          <li>Try the <Link href="/brat-text-generator" className="hp-link">Brat Text Generator</Link> — Best for quick text-only designs and fast PNG downloads.</li>
          <li>Explore the <Link href="/brat-maker" className="hp-link">Brat Maker</Link> — Use this if you want to create images, memes, or layered designs.</li>
          <li>Use the <Link href="/brat-font-generator" className="hp-link">Brat Font Generator</Link> — Ideal for adjusting typography, spacing, and font styling.</li>
        </ul>
      </div>

      {/* ── TWO-COL: WHO THIS TOOL IS FOR ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
             <span className="hp-eyebrow">Audience</span>
             <h2 className="hp-display-heading">Who Uses the Generator</h2>
             <p className="hp-body-text mt-4">
               The Brat Album Cover Generator is made for creators who want fast, clean, and expressive album-style visuals.
             </p>
             <p className="hp-body-text mt-4">
               If you want album cover visuals that feel bold, modern, and instantly recognizable, this tool is built for you without needing Photoshop.
             </p>
          </div>
          <div className="flex-1">
            <p className="hp-body-text mb-4 font-medium">It works incredibly well for:</p>
            <div className="flex flex-wrap gap-2">
               {[
                 "Independent musicians & producers",
                 "Brat concept albums",
                 "Graphic designers",
                 "Playlist creators",
                 "Social media creators",
                 "Parody covers",
                 "Creative students"
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
        <h2 className="hp-display-heading">Main Features</h2>
        <div className="max-w-3xl mb-8">
          <p className="hp-body-text mt-4">
            This cover generator lets you customize everything: text, background images, and layout. Choose from presets or design from scratch — all updates happen in real time.
          </p>
        </div>
        
        <div className="hp-features-grid mt-8">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">💿</div>
            <h3>Album-Style Presets</h3>
            <p>Layouts designed specifically for album covers. Easily switch between balanced, professional-looking formats for square art.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Brat-Inspired Typography</h3>
            <p>Create clean, bold text for album titles, track-lists, or artist names. Adjust size, alignment, spacing, and positioning.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🖼️</div>
            <h3>Custom Backgrounds</h3>
            <p>Upload your own photos, abstract art, or textures to create a unique cover while keeping text perfectly readable.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🎨</div>
            <h3>Color Themes</h3>
            <p>Choose from classic Brat colors (neon green, black, white, pink) or use your own custom hex codes to match your vision.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">💾</div>
            <h3>High-Res Export</h3>
            <p>Export all covers as high-quality PNGs with zero quality loss, perfect for digital releases, Spotify, or posters.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Multiple Ratios</h3>
            <p>Beyond the standard 1:1 square, the tool supports 4:5 for feeds and 16:9 for banners or youtube thumbnails.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">⚡</div>
            <h3>Real-Time Editing</h3>
            <p>Every change updates instantly. There is no waiting, loading, or preview delay — just fast, enjoyable editing.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-Friendly</h3>
            <p>Create full album covers directly from your phone. Positioning and exporting work perfectly on small screens.</p>
          </div>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Guide</span>
        <h2 className="hp-display-heading">How to Use the Brat Album Cover Generator</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Choose Your Canvas</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Start by selecting your preferred canvas size. For album covers, the 1:1 square format works best.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Add Your Album Text</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Type in your album title, artist name, or concept text. Use minimal wording or bold statements.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Upload a Background</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Add an image or choose a solid color background. Adjust brightness to keep text readable.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Customize Typography</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Resize text, change alignment, adjust spacing, and move elements until everything looks balanced.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">5</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Apply Color Styling</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Choose a Brat-inspired color theme or use an entirely custom neon color palette.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">6</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Download Cover</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Download your design as a high-quality PNG. No watermark, no account required.</p>
          </div>
        </div>
      </div>

      {/* ── WHY THIS TOOL IS BETTER ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why This Tool Is Better</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Many online album cover tools are either too complex or too limited. They often include watermarks, low-resolution exports, or locked features. This Brat Album Cover Generator stands out because it offers:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>No signup and no watermarks</li>
            <li>Unlimited free usage with high-resolution exports</li>
            <li>Clean Brat-inspired layout presets</li>
            <li>Fast, real-time editing performance</li>
          </ul>
          <p className="hp-body-text font-medium">It&apos;s designed specifically for album-style visuals — not generic graphics.</p>
        </div>
      </div>

      {/* ── EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Examples of What You Can Create</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Use this tool to make brat album cover art or custom visuals including:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Original Fan-made concept albums</li>
            <li>Playlist cover art & Parody designs</li>
            <li>Music-related social posts</li>
            <li>Creative typography covers</li>
            <li>Aesthetic music thumbnails</li>
          </ul>
        </div>
      </div>

      {/* ── CHARLI XCX STYLE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Create Charli XCX Style Covers</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Fans of Charli XCX&apos;s Brat era can use this tool to recreate that bold, minimal, high-contrast aesthetic. As an album cover generator, it lets you craft cover art in the exact same visual language — neon greens, clean typography, and striking layouts — without any design experience.
          </p>
          <p className="hp-body-text mt-4">
            Whether you&apos;re making fan art, playlist covers, or original music visuals, you get full control over text, colors, backgrounds, and layout. 
          </p>
        </div>
      </div>

      {/* ── HOW DESIGNS WORK ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">How Brat Cover Designs Work</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Brat-inspired album covers share a clear design language: minimal, bold, and type-driven. Layouts tend to favor a single focal point—usually the album title or artist name—placed centrally or in a deliberate off-center position. Backgrounds are often flat color blocks rather than busy imagery, keeping all aesthetic attention tightly fixed on the primary typography.
          </p>
          <p className="hp-body-text mt-4">
            Typography placement follows strict hierarchy. The main title appears in large, heavy sans-serif letters with generous or tight spacing. The approach borrows significantly from Swiss design and modernist posters: clarity over decoration, and strong visual contrast. Color choices are intentional—neon green signals the classic Brat identity, while black and white add pure drama and unapologetic simplicity.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Generator"
        items={[
          { question: "Is the Brat Album Cover Generator free?", answer: <p>Yes. You can create and download unlimited album covers for free.</p> },
          { question: "Do I need to create an account?", answer: <p>No. The tool works instantly without signup.</p> },
          { question: "What file format are album covers saved in?", answer: <p>All designs export as high-quality PNG files.</p> },
          { question: "Can I use my own images?", answer: <p>Yes. You can upload any image as a background.</p> },
          { question: "Does the tool add a watermark?", answer: <p>No. All downloads are completely watermark-free.</p> },
          { question: "Can I use the album covers commercially?", answer: <p>Yes. You are free to use your designs for personal or commercial projects.</p> },
          { question: "Does it support high-resolution or 4K output?", answer: <p>Yes. The generator produces clean, high-resolution images suitable for large displays.</p> },
          { question: "Can I use this tool on mobile?", answer: <p>Yes. The interface is fully optimized for mobile devices.</p> },
        ]}
      />

      {/* ── CONCLUSION ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Conclusion</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The Brat Album Cover Generator gives you a fast and flexible way to
            create Brat-inspired album covers with professional results. With
            clean typography, bold color options, custom backgrounds, and
            high-quality exports, it&apos;s ideal for musicians, designers, and
            creators who want album-style visuals without the complexity of
            traditional design tools.
          </p>
          <p className="hp-body-text mt-4">
            If you want to create striking Brat album covers quickly and
            freely, this generator delivers everything you need in one simple tool.
          </p>
        </div>
      </div>
    </main>
  );
}
