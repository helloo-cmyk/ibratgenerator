import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "Free Brat Name Generator – Create Unique Brat Names Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-name-generator/",
  },
  description: "Use our free brat name generator to create unique brat names and text instantly. Generate your brat identity with no signup required.",
};

export default function BratNameGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HERO ── */}
      <section className="hp-hero px-4">
        <h1 className="hp-hero-heading mt-6 mb-3 mx-auto">Brat Name Generator</h1>
        <p className="intro-text">
          Create bold, Brat-inspired names for albums, profiles, and edits.
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
        <span className="hp-eyebrow">Overview</span>
        <h2 className="hp-display-heading">What This Tool Does</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The Brat Name Generator is a simple tool that helps you create
            unique, Brat-style names instantly. It&apos;s designed for
            users who want short, bold, aesthetic names inspired by the
            Brat era and Charli XCX&apos;s visual and musical identity.
          </p>
          <p className="hp-body-text mt-4">
            This tool generates names that work perfectly for album
            titles, usernames, profile names, playlists, edits, and
            creative projects. Instead of overthinking or manually
            brainstorming names, you can generate ideas in seconds and
            pick the one that fits your vibe.
          </p>
          <p className="hp-body-text mt-4 font-medium">Everything is instant. No signup, no limits, no distractions.</p>
        </div>
      </div>

      {/* ── RELATED TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Related Brat Tools</h2>
        <p className="hp-body-text mt-4">
          If you want to explore more ways to create brat-style designs, these tools can help depending on what you&apos;re trying to make.
        </p>
        <ul className="hp-body-text space-y-3 mt-6 ml-4 list-disc">
          <li>Use the <Link href="/brat-text-generator/" className="hp-link">Brat Text Generator</Link> — Best for quick text-only designs and fast PNG downloads.</li>
          <li>Try the <Link href="/brat-maker" className="hp-link">Brat Maker</Link> — Use this if you want to create images, memes, or layered designs.</li>
          <li>Explore the <Link href="/brat-font-generator" className="hp-link">Brat Font Generator</Link> — Ideal for adjusting typography, spacing, and font styling.</li>
        </ul>
      </div>

      {/* ── TWO-COL: WHO THIS TOOL IS FOR ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <div className="hp-two-col flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
             <span className="hp-eyebrow">Audience</span>
             <h2 className="hp-display-heading">Who This Tool Is For</h2>
             <p className="hp-body-text mt-4">
               The Brat Name Generator is made for anyone who needs creative naming ideas with a strong aesthetic edge.
             </p>
             <p className="hp-body-text mt-4">
               If you want names that feel modern, bold, and confident, this tool is built for you.
             </p>
          </div>
          <div className="flex-1">
            <p className="hp-body-text mb-4 font-medium">It is especially useful for:</p>
            <div className="flex flex-wrap gap-2">
               {[
                 "Fans of the Brat aesthetic",
                 "Charli XCX listeners",
                 "Musicians naming albums",
                 "Naming edits or series",
                 "Display names",
                 "Playlist creators",
                 "Meme pages",
                 "Designers"
               ].map(p => (
                 <span key={p} className="px-3 py-1.5 bg-[var(--hp-surface)] border border-[var(--hp-border)] rounded-md text-[13px] font-medium text-[var(--hp-ink)] shadow-sm transition-colors hover:border-[var(--hp-border-dark)]">{p}</span>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT MAKES A BRAT NAME ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Traits</span>
        <h2 className="hp-display-heading">What Makes a &quot;Brat&quot; Name</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Brat-style names usually share a few key traits:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Minimalist and stripped down</li>
            <li>Often entirely lowercase for a casual, chaotic vibe</li>
            <li>High contrast and bold phrasing</li>
            <li>Unapologetic and confident tone</li>
          </ul>
          <p className="hp-body-text mt-4">Examples of common Brat-style naming patterns include:</p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>One-word names</li>
            <li>Slightly chaotic phrases</li>
            <li>Confident statements</li>
            <li>Ironic or exaggerated tones</li>
            <li>Minimalist expressions</li>
          </ul>
          <p className="hp-body-text mt-6 font-medium">The generator is designed to follow these patterns naturally.</p>
        </div>
      </div>

      {/* ── FEATURES GRID ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Features</span>
        <h2 className="hp-display-heading">Main Features of the Generator</h2>
        <div className="hp-features-grid mt-8">
          
          <div className="hp-feature-card">
            <div className="hp-feature-icon">⚡</div>
            <h3>Instant Generation</h3>
            <p>Generate multiple Brat-style names instantly with one click. Each result is designed to feel aesthetic, modern, and usable.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">💿</div>
            <h3>Album-Ready Names</h3>
            <p>Creates names that work perfectly for album titles, EP names, playlist names, music projects, or fan-made releases.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📱</div>
            <h3>Profile &amp; Username Ideas</h3>
            <p>Find visually strong names for Instagram, TikTok, Discord, Twitter (X), or creative aliases.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">✨</div>
            <h3>Charli XCX–Inspired</h3>
            <p>The naming style is heavily inspired by the Brat era&apos;s tone — bold, playful, and unapologetic.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">🔓</div>
            <h3>Unlimited Free Use</h3>
            <p>Generate as many names as you want. There are no limits, no paywalls, and no locked features.</p>
          </div>

          <div className="hp-feature-card">
            <div className="hp-feature-icon">📐</div>
            <h3>Clean, Simple Interface</h3>
            <p>The tool focuses on one thing: generating names. No clutter, no unnecessary options — just fast results.</p>
          </div>
          
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <span className="hp-eyebrow">Guide</span>
        <h2 className="hp-display-heading">How to Use the Brat Name Generator</h2>
        <div className="hp-steps-grid mt-6">
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">1</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Open the Tool</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Load the generator page. No signup or account creation is required.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">2</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Generate Names</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Click the generate button to receive a list of aesthetic Brat-style names instantly.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">3</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Pick Your Favorite</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Scroll through the uniquely generated results and choose the name that fits your specific project.</p>
          </div>
          <div className="hp-step-card bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] transition-all duration-200">
            <span className="hp-step-num">4</span>
            <h3 className="text-[14px] sm:text-[15px] font-semibold mb-2">Use or Regenerate</h3>
            <p className="hp-body-text text-[13px] leading-relaxed opacity-90">Use the name directly or generate again for endless more ideas. The entire process takes seconds.</p>
          </div>
        </div>
      </div>

      {/* ── REAL WORLD USES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">How People Use Brat Names</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Because the names are short and expressive, they work across many platforms. Here are common real-world uses:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Naming a concept album</li>
            <li>Choosing a playlist title</li>
            <li>Branding a meme page</li>
            <li>Creating a stage name</li>
            <li>Naming a creative series</li>
            <li>Choosing an online alias</li>
            <li>Labeling visual edits</li>
          </ul>
        </div>
      </div>

      {/* ── WHY THIS TOOL IS BETTER ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Why This Tool Is Better</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            Most online name generators feel random, outdated, or generic. They often produce names that don&apos;t match modern internet aesthetics. The Brat Name Generator avoids that by focusing on authentic patterns:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Aesthetic naming patterns</li>
            <li>Modern, assertive tone</li>
            <li>Album-style structure</li>
            <li>Confidence and simplicity</li>
          </ul>
          <p className="hp-body-text mt-6 font-medium">You get names that actually feel usable — not filler.</p>
        </div>
      </div>

      {/* ── EXAMPLES ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Examples of Brat Name Styles</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The generator produces names that fall into styles such as:
          </p>
          <ul className="hp-body-text list-disc space-y-1 ml-5 mt-4 mb-6">
            <li>Minimalist single-word names</li>
            <li>Bold phrases and ironic titles</li>
            <li>Confident statements</li>
            <li>Playful and chaotic expressions</li>
            <li>Authentic album-style wording</li>
          </ul>
          <p className="hp-body-text mt-6">
            These styles are intentionally flexible so you can use them creatively across any format.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Generator"
        items={[
          { question: "Is the Brat Name Generator free?", answer: <p>Yes. You can generate unlimited names for free.</p> },
          { question: "Do I need to create an account?", answer: <p>No signup is required.</p> },
          { question: "Can I use these names commercially?", answer: <p>Yes. You can use generated names for personal or commercial projects.</p> },
          { question: "Are the names unique?", answer: <p>The generator creates a wide variety of names, but uniqueness depends on how and where you use them.</p> },
          { question: "Can I generate names for albums?", answer: <p>Yes. Many names are designed specifically to work as album or playlist titles.</p> },
          { question: "Does this tool copy existing names?", answer: <p>No. It generates original name combinations based on style patterns.</p> },
          { question: "Can I generate names multiple times?", answer: <p>Yes. You can generate as many lists as you want.</p> },
          { question: "Is this an official Charli XCX tool?", answer: <p>No. This is a fan-made generator inspired by the Brat aesthetic. It is not officially connected to Charli XCX.</p> },
        ]}
      />

      {/* ── CONCLUSION ── */}
      <div className="hp-page-section hp-page-section-bordered px-4">
        <h2 className="hp-display-heading">Conclusion</h2>
        <div className="max-w-3xl">
          <p className="hp-body-text mt-4">
            The Brat Name Generator gives you a fast, creative way to
            generate bold, Brat-inspired names for albums, profiles,
            playlists, and projects. With instant results, unlimited
            usage, and a clean aesthetic, it removes the frustration of
            naming and lets you focus on creating.
          </p>
          <p className="hp-body-text mt-4">
            If you want modern, confident names that fit the Brat vibe,
            this generator delivers exactly that.
          </p>
        </div>
      </div>
    </main>
  );
}
