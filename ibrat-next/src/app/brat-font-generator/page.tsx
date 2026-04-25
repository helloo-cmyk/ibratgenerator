import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";
import ExampleGallery from "@/components/ExampleGallery";
import HomeScrollReveal from "@/components/HomeScrollReveal";

export const metadata = {
  title: {
    absolute: "Brat Font Style Guide – Typography, Spacing & Visual Look",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-font-generator/",
  },
  description:
    "Explore brat font style, spacing, and visual appearance. Study the typography look and adjust layout details in one place.",
};

export default function BratFontGeneratorPage() {
  return (
    <div className="hp-root">

      {/* ── HERO ── */}
      <section className="hp-hero">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Font Generator</h1>
        <p className="hp-hero-sub">
          This page focuses on brat-style typography, including spacing, weight, and visual balance across different layouts.
        </p>
      </section>

      {/* ── GENERATOR ── */}
      <div className="hp-gen-section">
        <div className="hp-gen-card">
          <div className="hp-gen-label">
            <span className="hp-gen-dot" />
            Live Generator
          </div>
          <BratGeneratorLazy />
        </div>
      </div>

      <section className="text-center mb-10 -mt-2">
        <div className="hp-body-text mx-auto pb-4">
          Looking for all features? Try the <Link href="/" className="hp-link">free brat generator</Link> to create memes, images, and more in one place.
        </div>
      </section>

      {/* ── TWO-COL: OVERVIEW ── */}
      <div className="hp-page-section hp-page-section-bordered" id="overview">
        <div className="hp-two-col">
          <div>
            <span className="hp-eyebrow">Overview</span>
            <h2 className="hp-display-heading">What Is the Brat Font?</h2>
          </div>
          <div>
            <p className="hp-body-text">
              The brat font is not a single official typeface, but a style inspired by bold, clean, and minimal sans-serif typography. It focuses on strong letter spacing, simple alignment, and high contrast visuals that became popular with the brat aesthetic. If you want a deeper breakdown, you can read our guide on <Link href="/blog/what-is-brat-font" className="hp-link">what the brat font actually is</Link>.
            </p>
            <p className="hp-body-text mt-4">
              Want to create brat text? Use the <Link href="/brat-text-generator/" className="hp-link">Brat Text Generator</Link> →
            </p>
          </div>
        </div>
      </div>

      {/* ── FEATURES GRID ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Traits</span>
        <h2 className="hp-display-heading">Key Characteristics of Brat Typography</h2>
        <p className="hp-body-text mt-4">
          The brat font style is defined by a few consistent design principles that make it immediately recognizable:
        </p>
        <div className="hp-features-grid mt-6">
          <div className="hp-feature-card">
            <div className="hp-feature-icon" style={{fontSize: "1.4rem"}}>🏋️</div>
            <h3>Bold weight</h3>
            <p>heavy strokes that command attention</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon" style={{fontSize: "1.4rem"}}>🔤</div>
            <h3>Clean sans-serif forms</h3>
            <p>no serifs, no decorative strokes</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon" style={{fontSize: "1.4rem"}}>📏</div>
            <h3>Tight letter spacing</h3>
            <p>compact, intentional character gaps</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon" style={{fontSize: "1.4rem"}}>🌗</div>
            <h3>High contrast</h3>
            <p>dark text on bright backgrounds (or vice versa)</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon" style={{fontSize: "1.4rem"}}>✨</div>
            <h3>Minimal ornamentation</h3>
            <p>the text itself is the design</p>
          </div>
          <div className="hp-feature-card">
            <div className="hp-feature-icon" style={{fontSize: "1.4rem"}}>📐</div>
            <h3>Centered or deliberate layouts</h3>
            <p>strong compositional choices</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-[15px] leading-relaxed font-medium" style={{color: "var(--hp-ink)"}}>
            These elements work together to create the confident, stripped-down look that defines the Brat aesthetic. Use the controls below to study how spacing, weight, and alignment change the same typographic style.
          </p>
        </div>
      </div>

      {/* ── ALBUM STYLE ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Typeface Details</span>
        <h2 className="hp-display-heading">What Font Is Used In The Brat Album Style</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The Brat album style does not rely on a single named commercial font. Instead, it draws from a lineage of modern geometric sans-serif typefaces that prioritize clarity, weight, and minimal ornamentation. The visual identity comes from bold strokes, tight letter spacing, and generous use of uppercase or title case—all arranged in a way that feels both contemporary and deliberately stripped down.
          </p>
          <p className="hp-body-text mt-4">
            Designers and fans often compare the Brat aesthetic to fonts like Helvetica Neue Bold, Avenir Heavy, or Gotham—typefaces that share clean geometric forms and strong x-heights. The key is not letter-by-letter mimicry but the overall impression: heavy weight, minimal serifs, and a sense of confidence. The style works because it puts typography at the center of the design, with little or no decorative elements competing for attention.
          </p>
          <p className="hp-body-text mt-4">
            When people search for the brat font name, what font is brat charli xcx, or charli xcx brat font, they are usually trying to match the exact typography used in Brat-themed visuals and Charli XCX branding.
          </p>
          <p className="hp-body-text mt-4">
            Whether applied to album artwork, social media captions, or memes, the Brat typography style succeeds by being instantly legible and visually assertive. The design approach favors high contrast between text and background, centered or intentionally asymmetric layouts, and a confident use of negative space. Understanding these principles helps you recreate the Brat look even without access to the exact font files used in official branding.
          </p>
        </div>
      </div>

      {/* ── RELATED BRAT TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <h2 className="hp-display-heading">Related Brat Tools</h2>
        <p className="hp-body-text mt-4">
          If you want to explore more ways to shape brat-style visuals, these tools can support color direction and layout composition.
        </p>
        <p className="hp-body-text mt-4 font-medium">
          <Link href="/brat-black-generator/" className="hp-link">Black Brat Generator</Link> — Useful for high-contrast typography studies.
        </p>
      </div>

      {/* ── FONT STYLE REFERENCE ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <h2 className="hp-display-heading">How to Evaluate Brat Typography</h2>
        <p className="hp-body-text mt-4">
          Strong brat typography is less about a specific font file and more about visual decisions: weight, spacing, alignment, and contrast.
        </p>
        <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-4">
          <li><strong>Weight:</strong> use heavier strokes to keep the look assertive</li>
          <li><strong>Spacing:</strong> tighten or open letter spacing to shape tone</li>
          <li><strong>Alignment:</strong> center for symmetry or offset for tension</li>
          <li><strong>Contrast:</strong> pair bold type with a clean, flat background</li>
        </ul>
        <p className="hp-body-text mt-4">
          Keeping these four factors consistent preserves the brat aesthetic even when you change palette, format, or content length.
        </p>
      </div>

      {/* ── TWO-COL: WHO THIS TOOL IS FOR ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <div className="hp-two-col">
          <div>
             <span className="hp-eyebrow">Audience</span>
             <h2 className="hp-display-heading">Who This Tool Is For</h2>
             <p className="hp-body-text mt-4">
               The brat font generator is built for users who want to understand and recreate brat-style typography without design software.
             </p>
             <p className="hp-body-text mt-4">
               If you want to explore the typography behind the Brat aesthetic and create bold, minimal text designs, this tool gives you full control.
             </p>
          </div>
          <div>
            <p className="hp-body-text mb-4 font-medium">It is useful for:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Anyone researching what font is brat charli xcx",
                "Designers studying album-inspired typography",
                "Users looking for the brat charli xcx font style",
                "People recreating Brat-inspired typographic edits",
                "Content creators matching the brat font aesthetic"
              ].map(p => (
                <span key={p} className="px-3 py-1.5 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-md text-[13px] font-medium text-[var(--hp-ink)] shadow-sm transition-colors hover:border-[var(--hp-border-dark)]">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TYPOGRAPHY CONTROLS ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow">Parameters</span>
        <h2 className="hp-display-heading">Typography Controls</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brat-lime)] text-[var(--hp-ink)] text-[1.1rem] font-bold shadow-sm mb-5">Aa</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Font Size &amp; Weight</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Adjust the size and weight of your text to match different brat font styles — from compact captions to large album-style headings.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brat-lime)] text-[var(--hp-ink)] text-[1.2rem] font-bold shadow-sm mb-5">⇿</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Letter Spacing &amp; Alignment</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Fine-tune character spacing and text alignment. Tight spacing with centered alignment is the most recognizable brat font configuration.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brat-lime)] text-[var(--hp-ink)] text-[1.2rem] font-bold shadow-sm mb-5">↕</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Line Height</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Control line height for multi-line phrases. This affects how compact or spread out your typography appears — both are valid in the brat style.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--hp-border-dark)] hover:shadow-md">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brat-lime)] text-[var(--hp-ink)] text-xl shadow-sm mb-5">🎨</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Color System</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">
              Although neon green is the most iconic brat color, the font style works equally well in other palettes.
            </p>
          </div>
        </div>
      </div>

      {/* ── WHY THIS TOOL IS BETTER ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <h2 className="hp-display-heading">Why This Tool Is Better Than Downloading Fonts</h2>
        <p className="hp-body-text mt-4">
          Many users search for brat font download expecting a direct font file. However, installing fonts and manually adjusting layouts can be time-consuming and still may not match the brat aesthetic.
        </p>
        <p className="hp-body-text mt-4">This brat font generator simplifies the process by:</p>
        <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
          <li>Providing the correct typographic style without installation</li>
          <li>Offering spacing and alignment controls tuned for the brat look</li>
          <li>Exporting high-resolution results instantly</li>
          <li>Working in-browser on any device</li>
          <li>Recreating the brat charli xcx font style visually</li>
        </ul>
        <p className="hp-body-text mt-8">
          Instead of searching repeatedly for what is the brat font, you can generate the look immediately with accurate typographic defaults.
        </p>
      </div>

      {/* ── EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <h2 className="hp-display-heading">Brat Font Generator Examples</h2>
        <p className="hp-body-text mt-4">
          This page showcases a wide range of brat-inspired typographic looks. Typical examples include single words or short phrases in bold green on a bright background, or the same album-inspired style in pink, white, or black for contrast.
        </p>
        <p className="hp-body-text mt-4">
          Sample outputs might be minimalist one-line statements like "brat summer" or "hot girl music," album-style headings, or profile name graphics. You can adjust size, spacing, and alignment so each design matches the charli xcx brat font vibe while staying readable on social feeds and stories.
        </p>
        <p className="hp-body-text mt-4">
          All outputs are exported as high-quality PNGs with no watermark, so you can use them anywhere.
        </p>
        <div className="hp-examples-wrap mt-8">
          <ExampleGallery type="font" />
        </div>
      </div>

      {/* ── RELATED TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <h2 className="hp-display-heading">Related Tools</h2>
        <p className="hp-body-text mt-4">
          If you're working with brat-style typography, you may also want to explore other tools for creating full visuals.
        </p>
        <ul className="hp-body-text space-y-3 mt-6 ml-4">
          <li>Try the <Link href="/brat-maker/" className="hp-link">brat maker</Link> to generate images and meme-style graphics.</li>
          <li>Explore the <Link href="/brat-black-generator/" className="hp-link">black brat generator</Link> for high contrast designs.</li>
        </ul>
      </div>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Common questions about the brat font and this generator"
        items={[
          { question: "What is the brat font?", answer: <p>The brat font is not a single official typeface. It refers to the bold, minimal sans-serif typography style popularized by the Brat aesthetic — characterized by clean lines, tight spacing, and high contrast.</p> } ,
          { question: "What is the brat font name?", answer: <p>There is no single official brat font name. The style draws from geometric sans-serif typefaces like Helvetica Neue Bold, Avenir Heavy, and Gotham. This generator recreates the visual style without requiring any specific font file.</p> } ,
          { question: "Does this recreate the charli xcx brat font?", answer: <p>Yes. This tool recreates the bold, minimal typography associated with Charli XCX's Brat aesthetic, including spacing, weight, and alignment.</p> },
          { question: "Can I download a font file?", answer: <p>This tool does not provide font files. Instead, it generates brat-style typography directly in your browser and exports the result as a PNG image.</p> },
          { question: "Is the Brat Font Generator free?", answer: <p>Yes. You can create unlimited brat-style text for free with no signup required.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The generator is fully optimized for mobile devices and works in any browser.</p> },
          { question: "What controls matter most for this style?", answer: <p>Focus on weight, spacing, alignment, and contrast. Those four controls define the brat look more than any single typeface name.</p> } ,
        ]}
      />

      {/* ── CONCLUSION ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <h2 className="hp-display-heading">Conclusion</h2>
        <p className="hp-body-text mt-4">
          The brat font generator provides a detailed look at the typography behind the Brat aesthetic, along with a practical tool for recreating the style. Whether you are researching what font is brat, trying to identify the brat font name, or want to generate album-style typography, this page combines education and creation in one place.
        </p>
        <p className="hp-body-text mt-4">
          With typography controls, mobile-friendly editing, and high-quality PNG exports, you can create clean Brat-style typography in seconds without downloading any fonts or using design software.
        </p>
      </div>

      <div className="hp-page-section hp-page-section-bordered">
        <h2 className="hp-display-heading">Learn More About Brat Typography</h2>
        <p className="hp-body-text mt-4">
          If you want to understand the font style in more detail, read our{" "}
          <Link href="/blog/what-is-brat-font" className="hp-link">full breakdown of the brat font</Link>{" "}
          and how it is used.
        </p>
      </div>

      <HomeScrollReveal />
    </div>
  );
}
