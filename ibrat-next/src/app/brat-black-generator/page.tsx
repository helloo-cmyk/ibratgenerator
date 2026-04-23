import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "Black Brat Generator – Create Dark Brat Text & Images Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-black-generator/",
  },
  description: "Create bold black brat text and images with high contrast style. Perfect for dark themes, memes, and strong visuals.",
};

export default function BratBlackGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Black Brat Generator</h1>
        <p className="intro-text">
          The brat generator black lets you create high-contrast brat text and graphics on black backgrounds. Use this brat black generator as a brat text generator black for social posts, memes, and dark aesthetic visuals—no design software needed.
        </p>
      </section>

      {/* ── GENERATOR APP ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-2 mb-16">
        <BratGeneratorLazy defaultBg="#0a0a0a" defaultFg="#ffffff" />
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
            <h2 className="hp-display-heading">What Is the Brat Generator Black</h2>
          </div>
          <div>
            <p className="hp-body-text">
              The brat generator black is a specialized tool for creating high-contrast brat text and graphics using black backgrounds. It lets you produce bold, minimal Brat-style visuals with strong contrast and clean typography—ideal for dark aesthetics and modern social content.
            </p>
            <p className="hp-body-text mt-4">
              This brat black generator lets you create black Brat text, dark meme captions, album-style visuals, profile graphics, and minimalist posts without design software. Type your text, customize the layout and dark themes, and download high-quality images instantly.
            </p>
            <p className="hp-body-text mt-4 font-medium">
              Whether you need a brat generator black background, a dark aesthetic caption, or a black-themed profile image, everything can be created inside this generator.
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
          <li><Link href="/brat-generator-white" className="hp-link">White Brat Generator</Link> — Clean, minimal visuals with a neutral palette.</li>
          <li><Link href="/brat-green-generator" className="hp-link">Green Brat Generator</Link> — The classic neon green brat aesthetic.</li>
          <li><Link href="/brat-text-generator" className="hp-link">Brat Text Generator</Link> — Quick text-only designs with fast PNG export.</li>
        </ul>
      </div>

      {/* ── TWO-COL: WHO USES IT ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col flex flex-col md:flex-row items-start gap-12 max-w-[1200px] mx-auto">
          <div className="flex-1">
             <span className="hp-eyebrow">Audience</span>
             <h2 className="hp-display-heading">Who Uses the Brat Generator Black</h2>
             <p className="hp-body-text mt-4">
               The black brat generator is ideal for creators who prefer darker visuals with strong contrast.
             </p>
             <p className="hp-body-text mt-4 font-medium">
               If you want something sharp, serious, and visually striking, this black version delivers.
             </p>
          </div>
          <div className="flex-1">
            <p className="hp-body-text mb-4 font-medium">It works perfectly for:</p>
            <div className="flex flex-wrap gap-2">
               {[
                 "Minimalist designs",
                 "High-contrast posts",
                 "Dark meme pages",
                 "Social media creators",
                 "Album-style visuals",
                 "Black-themed edits",
                 "Clean modern aesthetics"
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
        <h2 className="hp-display-heading">Features of the Brat Generator Black</h2>
        <div className="max-w-3xl mb-8">
          <p className="hp-body-text mt-4">
            The brat generator black offers customization of text, layout, and dark themes. Use it as a brat generator black background tool or a brat text generator black for captions, memes, and graphics.
          </p>
        </div>
        
        <div className="hp-features-grid mt-8">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">⬛</div>
            <h3>Deep Black Presets</h3>
            <p>The generator uses true black and near-black backgrounds to give your designs a clean, professional look with maximum contrast.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Clean Brat Typography</h3>
            <p>Text styling follows the Brat aesthetic bold, minimal, and easy to read. Light text on dark backgrounds ensures clarity.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✏️</div>
            <h3>Full Customization</h3>
            <p>Adjust font size, spacing, alignment, and placement to create everything from structured quotes to expressive memes.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📝</div>
            <h3>Black Text Generator</h3>
            <p>Design black Brat captions, dark meme text, album titles, minimalist quotes, and sleek profile name graphics.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🖼️</div>
            <h3>Background Image Upload</h3>
            <p>Upload your own images or textures to combine bold black Brat text with photos or creative personal visuals.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Multiple Aspect Ratios</h3>
            <p>Design for different platforms using 1:1 square, 9:16 vertical, 4:5 portrait, and 16:9 landscape aspect ratios.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✨</div>
            <h3>High-Quality Export</h3>
            <p>Download all designs as perfectly sharp, clean PNG files without any watermarks or compression loss.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-Friendly</h3>
            <p>The editor works smoothly on mobile devices, allowing full control directly from your phone on the go.</p>
          </div>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Guide</span>
        <h2 className="hp-display-heading">How to Use the Brat Generator Black</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Enter Your Text</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Type your caption, lyric, meme line, or bold quote into the editor.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Select Black Style</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Choose between solid black or near-black tones for better reading contrast.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Adjust Layout</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Resize and move text until the design feels balanced and visually strong.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Add a Background</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Use a pure solid black background or creatively upload an image layer.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">5</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Download Design</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Export your black Brat visual instantly as a sharp PNG. Ready in seconds.</p>
          </div>
        </div>
      </div>

      {/* ── WHY THIS TOOL IS BETTER ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why This Tool Is Better</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Many dark-themed generators simply invert colors without considering readability or layout. The brat generator black tool is built specifically around high-contrast design principles.
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>True black presets</li>
            <li>Clean typography</li>
            <li>High-resolution exports</li>
            <li>Unlimited free usage</li>
            <li>Mobile optimization</li>
            <li>No watermark and no account required</li>
          </ul>
          <p className="hp-body-text font-medium">You get professional results without complexity.</p>
        </div>
      </div>

      {/* ── EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Brat Generator Black Examples</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            With the brat generator black, users can create dark aesthetic brat graphics for a variety of uses:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Black Brat text graphics</li>
            <li>High-contrast memes</li>
            <li>Dark aesthetic captions</li>
            <li>Album-style visuals</li>
            <li>Profile graphics</li>
            <li>Minimalist posters</li>
            <li>Black-themed social posts</li>
          </ul>
          <p className="hp-body-text mt-4 font-medium">The tool works well for both simple text and expressive layouts.</p>
        </div>
      </div>

      {/* ── WHY BLACK BACKGROUND WORKS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why Black Background Works For Brat Typography</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Black backgrounds create maximum contrast with light text, making Brat-style typography sharper and more readable than on most other surfaces. When bold sans-serif letters sit on pure black, the edges appear crisper and the message lands with more impact. This high contrast is especially effective on mobile screens and social feeds, where viewers scroll quickly and clarity matters.
          </p>
          <p className="hp-body-text mt-4">
            Beyond readability, black conveys a distinct aesthetic. It feels serious, confident, and uncluttered—qualities that align with the Brat visual identity. Neon green on black pops even more than on white, and white or light gray text on black creates a sleek, modern look that works well for memes, captions, and profile graphics. The dark canvas also reduces visual noise, so the typography becomes the sole focus.
          </p>
          <p className="hp-body-text mt-4">
            Creators choose black backgrounds when they want their Brat edits to feel more dramatic or refined. The combination of minimal design and high contrast makes the content stand out in crowded feeds without relying on bright colors. Whether used for album-style titles, lyric overlays, or meme captions, black backgrounds give Brat typography a premium, editorial feel that many users prefer over lighter alternatives.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why Use the Black Brat Generator?</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Black brat visuals hit differently. While the original brat style is known for neon green, the black version creates a stronger, more dramatic look that stands out on dark interfaces. If you're posting on TikTok at night, creating edgy captions, or designing bold graphics, black brat text feels more intense and attention-grabbing.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">When Black Brat Works Best</h2>
        <div className="max-w-3xl">
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4">
            <li>Night-mode social media posts (TikTok, X, Instagram)</li>
            <li>Edgy meme captions with strong contrast</li>
            <li>Dark aesthetic profile pictures</li>
            <li>Minimal but bold statement graphics</li>
            <li>Album-style visuals with a serious tone</li>
          </ul>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">How to Get Better Results</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Keep your text short — ideally 1 to 4 words. Black brat designs work best when they stay minimal. Use high contrast colors like white or neon text on a pure black background. Avoid clutter. The power of this style comes from simplicity.
          </p>
          <p className="hp-body-text mt-4">
            For best quality, export your image at 2048px or higher. This keeps the text sharp across all platforms.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Try Other Styles</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            If you want something brighter, try the <Link href="/brat-green-generator/" className="hp-link">green brat generator</Link> for the classic look, or go back to the <Link href="/" className="hp-link">free brat generator</Link> to access all styles in one place.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Related Tools</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Depending on what you&apos;re designing, these other tools might be a good fit alongside the dark aesthetic.
          </p>
          <ul className="hp-body-text list-disc space-y-3 mt-4 ml-5">
            <li>
              Use the <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link> for captions and short phrases you can export quickly.
            </li>
            <li>
              Try the <Link href="/brat-maker/" className="hp-link">brat maker</Link> to build full images and meme-ready graphics.
            </li>
            <li>
              Switch to the <Link href="/brat-generator-white/" className="hp-link">white brat generator</Link> if you want the opposite — clean and minimal.
            </li>
          </ul>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Generator"
        items={[
          { question: "Is the Brat Generator Black free?", answer: <p>Yes. You can create unlimited black Brat visuals for free.</p> },
          { question: "Do I need an account?", answer: <p>No signup is required.</p> },
          { question: "What file format are designs saved in?", answer: <p>All exports are high-quality PNG files.</p> },
          { question: "Can I upload my own images?", answer: <p>Yes. You can upload any image as a background.</p> },
          { question: "Does the tool work on mobile?", answer: <p>Yes. It is fully optimized for mobile use.</p> },
          { question: "Can I use these designs commercially?", answer: <p>Yes. You can use your creations for personal or commercial purposes.</p> },
        ]}
      />

      {/* ── CONCLUSION ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Conclusion</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The brat generator black is the perfect tool for creating dark, clean, high-contrast Brat-style visuals. With bold typography, flexible layouts, and high-quality exports, it gives creators a modern way to explore the Brat aesthetic.
          </p>
          <p className="hp-body-text mt-4">
            If you want strong, minimalist black Brat designs without design software, this generator delivers exactly what you need.
          </p>
        </div>
      </div>
    </main>
  );
}
