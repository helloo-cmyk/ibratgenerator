import Link from "next/link";
import Image from "next/image";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

const WHITE_BRAT_EXAMPLES = [
  { src: "/examples/brat1.png", phrase: "minimal brat", alt: "white brat generator example minimalist text" },
  { src: "/examples/brat2.png", phrase: "stay calm", alt: "brat generator white text example stay calm" },
  { src: "/examples/brat3.png", phrase: "white aesthetic", alt: "white brat generator example white aesthetic" },
  { src: "/examples/brat4.png", phrase: "soft chaos", alt: "brat generator white text example soft chaos" },
  { src: "/examples/brat5.png", phrase: "clean energy", alt: "white brat generator example clean energy" },
  { src: "/examples/brat6.png", phrase: "neutral mood", alt: "brat generator white text example neutral mood" },
];

export const metadata = {
  title: {
    absolute: "White Brat Generator – Create White Brat Text & Images Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-generator-white/",
  },
  description: "Use our free white brat generator to create clean white brat text instantly. Perfect for aesthetic memes. No signup required.",
};

export default function BratGeneratorWhitePage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">White Brat Generator</h1>
        <p className="intro-text">
          Use this brat generator white to create clean, minimalist Brat-style captions, meme text, and typography instantly. The white brat generator lets you design subtle Brat visuals with balanced spacing and modern layouts. Type your text, customize the style, and download your design in seconds.
        </p>
      </section>

      {/* ── GENERATOR APP ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-2 mb-16">
        <BratGeneratorLazy defaultBg="#ffffff" defaultFg="#0a0a0a" />
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
            <h2 className="hp-display-heading">What This Tool Does</h2>
          </div>
          <div>
            <p className="hp-body-text">
              The Brat White Generator is a minimalist tool designed for
              creating clean, white Brat-style text and visuals. Unlike
              bold neon or dark styles, this generator focuses on
              simplicity, clarity, and balance. It&apos;s built for users
              who want a softer, more neutral Brat aesthetic that works
              across modern layouts and platforms.
            </p>
            <p className="hp-body-text mt-4">
              With this tool, you can generate white Brat text, minimalist
              captions, clean meme visuals, album-style typography, and
              subtle graphic posts without using design software.
              Everything happens in real time — you type, adjust, preview,
              and download instantly.
            </p>
            <p className="hp-body-text mt-4 font-medium">
              The result is clean, modern, and highly readable Brat-style content.
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
          <li><Link href="/brat-black-generator" className="hp-link">Black Brat Generator</Link> — High-contrast dark visuals for a sharper look.</li>
          <li><Link href="/brat-generator-pink" className="hp-link">Pink Brat Generator</Link> — Softer tones with the same bold typography.</li>
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
               The Brat White Generator is ideal for creators who prefer clean and understated visuals.
             </p>
             <p className="hp-body-text mt-4 font-medium">
               If green feels too loud and black feels too dark, white is the perfect middle ground.
             </p>
          </div>
          <div className="flex-1">
            <p className="hp-body-text mb-4 font-medium">It works especially well for:</p>
            <div className="flex flex-wrap gap-2">
               {[
                 "Minimalist design lovers",
                 "Aesthetic creators",
                 "Neutral palette designers",
                 "Subtle Brat visuals",
                 "Profile graphics",
                 "Album-style layouts",
                 "Soft typography fans"
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
        <h2 className="hp-display-heading">Main Features of the Brat White Generator</h2>
        
        <div className="hp-features-grid mt-8">
          <div className="hp-feature-card">
            <div className="hp-feature-icon">🤍</div>
            <h3>Clean White Presets</h3>
            <p>The generator uses pure white and soft off-white backgrounds to keep designs minimal, modern, and easily readable.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔤</div>
            <h3>Minimal Typography</h3>
            <p>Follows the Brat aesthetic in a softer way: bold yet clean, evenly spaced, highly readable, and perfectly neutral.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✏️</div>
            <h3>Full Customization</h3>
            <p>Adjust the square ratio, type your name, define letter spacing, apply stickers, and tweak colors with ultimate precision.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">💭</div>
            <h3>White Text Mode</h3>
            <p>Optimized to create white Brat captions, minimalist meme text, pristine album titles, and clean lyric typography.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🖼️</div>
            <h3>Background Uploads</h3>
            <p>If you prefer more creativity, upload custom aesthetic images or cool textures and confidently layer white Brat text on top.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Multiple Aspect Ratios</h3>
            <p>Design visuals for any platform using 1:1 square, 9:16 vertical, 4:5 portrait, and crisp 16:9 landscape aspect ratios.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✨</div>
            <h3>High-Quality Export</h3>
            <p>All designs instantaneously export as sharp, high-resolution PNG files. Zero watermarks. Zero quality compression loss.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Mobile-Friendly</h3>
            <p>The editor operates seamlessly on mobile phones, empowering you to create and download visuals directly on the go.</p>
          </div>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Guide</span>
        <h2 className="hp-display-heading">How to Use the Brat White Generator</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Enter Your Text</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Type your subtle statement, clean caption, aesthetic wording, or minimalist lyric.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Apply White Style</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Choose pure white or an off-white background depending on how soft you want it.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Adjust Layout</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Resize proportions and carefully position text until it is perfectly clean and balanced.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Add Background</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Upload an image layer if you desire layering, or keep it beautifully pure white.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">5</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Download Visual</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Export your white Brat design as a sharp PNG. No signup. No limits. No watermark.</p>
          </div>
        </div>
      </div>

      {/* ── WHY THIS TOOL IS BETTER ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why This Tool Is Better</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Most generators treat white backgrounds as an afterthought. This tool is built specifically for clean, minimalist Brat visuals.
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>True white design focus with clean typography</li>
            <li>High-resolution exports with no watermark output</li>
            <li>Unlimited free usage and seamless mobile optimization</li>
            <li>No account required, ever</li>
          </ul>
          <p className="hp-body-text font-medium">It prioritizes clarity and design quality.</p>
        </div>
      </div>

      {/* ── EXAMPLES TEXT ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Examples of What You Can Create</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">With the Brat White Generator, you can design:</p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>White Brat text graphics & minimalist meme captions</li>
            <li>Clean lyric visuals & album-style text layouts</li>
            <li>Profile name images & neutral aesthetic posts</li>
            <li>Modern typography graphics & subtle Brat edits</li>
          </ul>
          <p className="hp-body-text font-medium">These visuals work well across modern platforms and clean design feeds.</p>
        </div>
      </div>

      {/* ── EXAMPLES GALLERY Grid ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Gallery</span>
        <h2 className="hp-display-heading">White Brat Generator Examples</h2>
        <div className="max-w-4xl">
          <p className="hp-body-text mt-4 mb-8">
            The images below are example outputs created with this tool. Each shows the clean, minimal white brat style you can make—type your own text above to get similar results.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 list-none pl-0">
            {WHITE_BRAT_EXAMPLES.map(({ src, phrase, alt }) => (
              <li key={phrase} className="rounded-xl overflow-hidden bg-[var(--hp-surface)] shadow-sm border border-[var(--hp-border)]">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
                <div className="p-3">
                  <p className="text-[13px] font-medium text-[var(--hp-ink)] capitalize">{phrase}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why White Brat Feels Clean and Minimal</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            White brat visuals are all about simplicity. Unlike bold green or dark black styles, white creates a clean and neutral look that works across different platforms. It feels less aggressive and more refined, which makes it perfect for minimal designs and personal branding.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">When to Use White Brat</h2>
        <div className="max-w-3xl">
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4">
            <li>Minimalist Instagram profiles and posts</li>
            <li>Clean captions for light-themed content</li>
            <li>Personal branding visuals</li>
            <li>Website graphics and headers</li>
            <li>Subtle meme formats without strong colors</li>
          </ul>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">How to Get the Best Result</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Use a pure white or slightly off-white background with dark text for clear contrast. Keep spacing balanced — white designs need more breathing room to look good. Avoid adding too many elements, as the strength of this style comes from its simplicity.
          </p>
          <p className="hp-body-text mt-4">
            Export your design at 2048px or higher to maintain sharpness across all devices.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Try Other Styles</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            If you want stronger contrast, try the <Link href="/brat-black-generator/" className="hp-link">black brat generator</Link>. For a softer aesthetic look, use the <Link href="/brat-generator-pink/" className="hp-link">pink brat generator</Link>. You can also go back to the <Link href="/" className="hp-link">free brat generator</Link> to access all styles in one place.
          </p>
        </div>
      </div>

      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Related Tools</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Want to explore other directions? These tools let you create different types of brat content.
          </p>
          <ul className="hp-body-text list-disc space-y-3 mt-4 ml-5">
            <li>
              Use the <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link> for quick captions and text-only exports.
            </li>
            <li>
              Try the <Link href="/brat-maker/" className="hp-link">brat maker</Link> to design full images and meme-style visuals.
            </li>
            <li>
              For a bolder look, switch to the <Link href="/brat-black-generator/" className="hp-link">black brat generator</Link> for high contrast designs.
            </li>
          </ul>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Generator"
        items={[
          { question: "Is the Brat White Generator free?", answer: <p>Yes. You can create unlimited white Brat visuals for free.</p> },
          { question: "Do I need an account?", answer: <p>No signup is required.</p> },
          { question: "What file format are designs saved in?", answer: <p>All exports are high-quality PNG files.</p> },
          { question: "Can I upload my own images?", answer: <p>Yes. You can use your own backgrounds if you want layered designs.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The editor is fully optimized for mobile devices.</p> },
          { question: "Can I use the designs commercially?", answer: <p>Yes. You can use your creations for personal or commercial purposes.</p> },
        ]}
      />

      {/* ── CONCLUSION ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Conclusion</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The Brat White Generator is the ideal tool for creating clean, minimalist Brat-style text and visuals. With subtle typography, flexible layouts, and high-quality exports, it&apos;s perfect for creators who want a softer and more modern Brat aesthetic.
          </p>
          <p className="hp-body-text mt-4">
            If you&apos;re looking for simple, elegant Brat designs without distractions, this generator delivers exactly what you need.
          </p>
        </div>
      </div>
    </main>
  );
}
