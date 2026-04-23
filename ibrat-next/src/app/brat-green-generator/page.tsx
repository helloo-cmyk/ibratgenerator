import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "Brat Green Generator – Create Green Brat Text & Images Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-green-generator/",
  },
  description: "Use the classic free green brat generator to create neon green brat text instantly. Get the iconic look with no signup required.",
};

export default function BratGreenGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Green Generator</h1>
        <p className="intro-text">
          The brat green generator recreates the iconic neon green Brat
          aesthetic and lets you generate green Brat text and graphics
          instantly. Use this green brat generator as a brat green text
          generator — no software to download, no signup required.
        </p>
      </section>

      {/* ── GENERATOR APP ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-2 mb-16">
        <BratGeneratorLazy defaultBg="#c1ff00" defaultFg="#0a0a0a" />
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
            <h2 className="hp-display-heading">What Is the Brat Green Generator</h2>
          </div>
          <div>
            <p className="hp-body-text">
              It is a dedicated tool built specifically
              for creating neon green Brat-style text, captions, memes, and
              image overlays. It focuses on the iconic bright green aesthetic
              that became instantly recognizable across social media.
            </p>
            <p className="hp-body-text mt-4">
              Instead of offering random color filters, this generator
              recreates the sharp, minimal, high-contrast look that defines
              the classic Brat visual style. The tool allows you to design
              green text graphics, profile visuals, meme layouts, and
              album-inspired typography in seconds.
            </p>
            <p className="hp-body-text mt-4">
              If you are searching for a green brat generator that produces
              clean, bright, and accurate neon tones, this tool is designed
              for that exact purpose.
            </p>
            <p className="hp-body-text mt-4 font-medium">
              Everything works directly inside your browser. No software.
              No downloads. No signup. Just type, customize, and export.
            </p>
          </div>
        </div>
      </div>

      {/* ── EXPLORE STYLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Explore More Color Styles</h2>
        <p className="hp-body-text mt-4">
          Want to try a different color theme? These generators use the same brat style with different palettes.
        </p>
        <ul className="hp-body-text space-y-3 mt-6 ml-4 list-disc">
          <li><Link href="/brat-generator-pink" className="hp-link">Pink Brat Generator</Link> — Softer tones with the same bold typography.</li>
          <li><Link href="/brat-black-generator" className="hp-link">Black Brat Generator</Link> — High-contrast dark visuals for a sharper look.</li>
          <li><Link href="/brat-text-generator" className="hp-link">Brat Text Generator</Link> — Quick text-only designs with fast PNG export.</li>
        </ul>
      </div>

      {/* ── TWO-COL: WHO USES IT ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col flex flex-col md:flex-row items-start gap-12 max-w-[1200px] mx-auto">
          <div className="flex-1">
             <span className="hp-eyebrow">Audience</span>
             <h2 className="hp-display-heading">Who This Tool Is For</h2>
             <p className="hp-body-text mt-4">
               This generator is made for creators who want the original neon green Brat look.
             </p>
             <p className="hp-body-text mt-4 font-medium">
               If you want your text to instantly stand out with a bright, high-contrast look, this generator provides a focused and clean solution.
             </p>
          </div>
          <div className="flex-1">
            <p className="hp-body-text mb-4 font-medium">It is especially useful for:</p>
            <div className="flex flex-wrap gap-2">
               {[
                 "Social media creators",
                 "Meme pages",
                 "Green Brat edits",
                 "Profile pictures",
                 "Lyric text graphics",
                 "Bold captions",
                 "Neon visuals"
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
        <h2 className="hp-display-heading">Features of the Brat Green Generator</h2>
        <div className="max-w-3xl mb-8">
          <p className="hp-body-text mt-4">
            With this brat generator green tool, you can create neon green Brat text graphics, meme captions, profile overlays, and aesthetic posts in seconds.
          </p>
        </div>
        
        <div className="hp-features-grid mt-8">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🟩</div>
            <h3>Authentic Neon Green</h3>
            <p>Uses carefully tuned neon green shades matching the well-known Brat aesthetic. Bright, sharp, and highly readable.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Clean Minimal Typography</h3>
            <p>The typography engine focuses on bold, minimal layouts with strong spacing and instantly recognizable clarity.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✏️</div>
            <h3>Full Customization</h3>
            <p>Adjust font size, line spacing, letter spacing, alignment, and position to build anything from quotes to memes.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🖼️</div>
            <h3>Green Text Overlay</h3>
            <p>Upload selfies, wallpapers, or aesthetic photos. Your neon green text will remain sharp and readable on top.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Multiple Aspect Ratios</h3>
            <p>Supports 1:1, 9:16, 4:5, and 16:9 canvas sizes making it versatile for Instagram, TikTok, and YouTube thumbnails.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✨</div>
            <h3>High-Quality Export</h3>
            <p>Every design downloads as a crisp PNG file with high resolution, no watermarks, and no compression loss.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-Optimized</h3>
            <p>The editor works smoothly on smartphones. Resize text, move elements, and export designs without performance issues.</p>
          </div>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Guide</span>
        <h2 className="hp-display-heading">How to Use the Brat Green Generator</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Enter Your Text</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Type your caption, meme line, lyric fragment, or bold one-word statement.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Apply Neon Green</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Select the default neon green preset or customize your shade dynamically.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Adjust Layout</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Resize text, change alignment, and reposition it for a clean centered layout or chaotic format.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Add Background</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Use a solid background for maximum contrast or upload your own expressive image layer.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">5</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Download Design</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Click download and receive a high-quality PNG file instantly. No signup required.</p>
          </div>
        </div>
      </div>

      {/* ── EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Brat Green Generator Examples</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The brat green generator lets you create neon green Brat graphics, captions, and text overlays for social posts, profile pictures, and memes. Try bold one-word statements, lyric-style edits, or meme captions over your own photos — all with the classic neon green look.
          </p>
        </div>
      </div>

      {/* ── WHY THIS TOOL IS BETTER ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why This Brat Green Generator Is Better</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Many tools claim to recreate the green Brat style but fail to get the color or typography right. They often use faded shades, poor contrast, or low-quality exports.
          </p>
          <p className="hp-body-text mt-4">This brat green generator avoids those problems. It provides:</p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Accurate neon green presets</li>
            <li>Balanced typography spacing</li>
            <li>High-resolution exports</li>
            <li>Unlimited free usage</li>
            <li>Smooth mobile editing and a clean interface</li>
            <li>No login required</li>
          </ul>
          <p className="hp-body-text font-medium">Instead of being a generic color editor, this tool is purpose-built for green Brat visuals.</p>
        </div>
      </div>

      {/* ── WHAT YOU CAN CREATE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">What You Can Create</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">Using this generator, you can design:</p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Neon green Brat text graphics</li>
            <li>Green meme captions</li>
            <li>Profile picture overlays</li>
            <li>Album-style headline text</li>
            <li>Minimalist green quotes</li>
            <li>Aesthetic green social posts</li>
            <li>Lyric-style edits and meme templates</li>
          </ul>
          <p className="hp-body-text font-medium">The tool supports both simple text-based visuals and more expressive layered designs.</p>
        </div>
      </div>

      {/* ── WHY NEON GREEN WORKS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why Neon Green Became The Brat Aesthetic</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Neon green emerged as the defining color of the Brat aesthetic through a combination of album artwork, tour visuals, and social media branding. The shade—bright, acidic, and impossible to ignore—quickly became a visual shorthand for the Brat era and its cultural moment. Unlike softer greens or muted tones, neon green demands attention and reads as bold, playful, and slightly rebellious.
          </p>
          <p className="hp-body-text mt-4">
            Culturally, the color connects to club and rave aesthetics, digital interfaces, and early 2000s nostalgia, which all feed into the Brat visual identity. On social media, neon green stands out in feeds dominated by warm filters and pastel palettes. When paired with bold typography and minimal design, it creates instant recognizability—a single glance is enough to associate the image with Brat-style content.
          </p>
          <p className="hp-body-text mt-4">
            Creators and fans adopted neon green not just because of its official use, but because it translates well across platforms: it remains vivid on phone screens, works in both light and dark contexts, and pairs easily with black, white, or simple backgrounds. The color has become inseparable from the Brat aesthetic, functioning as a visual badge that signals participation in a shared cultural language.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why the Green Brat Style Is the Original</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The green brat aesthetic is the version most people recognize instantly. It became popular during the Charli XCX brat era and quickly spread across TikTok, Instagram, and meme culture. If you want your design to look authentic, this is the style you should start with.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Where Green Brat Works Best</h2>
        <div className="max-w-3xl">
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4">
            <li>Classic brat memes and viral captions</li>
            <li>TikTok text overlays and edits</li>
            <li>Fan edits inspired by Charli XCX</li>
            <li>Profile pictures with recognizable style</li>
            <li>Bold one-word or short phrase graphics</li>
          </ul>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">How to Make It Look Authentic</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Keep your text lowercase and minimal. Most brat-style designs use short phrases — usually 1 to 3 words. The bright green background should stay clean, without too many extra elements.
          </p>
          <p className="hp-body-text mt-4">
            Use square format for Instagram or vertical format for TikTok. Export at 2048px or higher so your image stays sharp when uploaded.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Try Other Styles</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            If you want a darker version, try the <Link href="/brat-black-generator" className="hp-link">black brat generator</Link>. You can also go back to the <Link href="/" className="hp-link">free brat generator</Link> to access all styles and features in one place.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Related Tools</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            You can also try other tools and styles depending on what you need to create.
          </p>
          <ul className="hp-body-text list-disc space-y-3 mt-4 ml-5">
            <li>
              Use the <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link> for quick captions and text-only designs.
            </li>
            <li>
              Try the <Link href="/brat-maker/" className="hp-link">brat maker</Link> to create full images and meme layouts.
            </li>
            <li>
              Check out the <Link href="/brat-generator-pink/" className="hp-link">pink brat generator</Link> for a softer, more aesthetic variation.
            </li>
          </ul>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Generator"
        items={[
          { question: "Is the Brat Green Generator free?", answer: <p>Yes. You can create unlimited green Brat visuals without paying.</p> },
          { question: "Do I need an account?", answer: <p>No. The tool works instantly with no signup required.</p> },
          { question: "What file format is used?", answer: <p>All designs export as high-quality PNG files.</p> },
          { question: "Can I customize the green color?", answer: <p>Yes. You can overlay neon green Brat text on any uploaded photo or background.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The editor is fully optimized for smartphones.</p> },
          { question: "Can I upload my own images?", answer: <p>Yes. You can overlay neon green Brat text on any uploaded photo or background.</p> },
          { question: "Can I use the designs commercially?", answer: <p>Yes. You can use your generated visuals for personal or commercial purposes.</p> },
        ]}
      />

      {/* ── CONCLUSION ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Conclusion</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The brat green generator offers a precise and fast way to create neon green Brat-style visuals. With accurate color presets, clean typography, flexible layout controls, and high-quality PNG exports, it delivers the bold aesthetic many creators are looking for.
          </p>
          <p className="hp-body-text mt-4">
            If you want a focused tool that recreates the original neon green Brat style with clarity and precision, this generator provides everything you need in seconds.
          </p>
        </div>
      </div>
    </main>
  );
}
