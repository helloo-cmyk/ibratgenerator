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
        text: "Yes. This free brat generator has no limits, no hidden fees, and no signup. Create and download as many images as you want at up to 3000 px.",
      },
    },
    {
      "@type": "Question",
      name: "Does it add a watermark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Every PNG you export is completely clean. No watermark, no branding, no fine print.",
      },
    },
    {
      "@type": "Question",
      name: "What file format does it export?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PNG. You pick the resolution (1024, 1500, 2048, or 3000 px). No compression, no quality loss.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The editor runs in your mobile browser with full touch support. Works on iPhone, Android, iPad, and tablets.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use it as a profile picture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Set the aspect ratio to 1:1, type your text, pick a color, and download. Works as a pfp on TikTok, Instagram, Discord, X, and WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the images commercially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every image you create belongs to you. Use it for merch, social media, videos, print, or any commercial project.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the Brat Generator - Step by Step",
  step: [
    { "@type": "HowToStep", name: "Type your text", text: "Open the tool and type any word or phrase. The canvas updates live as you type." },
    { "@type": "HowToStep", name: "Pick your colors", text: "Use the hex color pickers to set your background and text color. Try the classic brat green or go custom." },
    { "@type": "HowToStep", name: "Adjust the layout", text: "Change the font size, letter spacing, and aspect ratio. Add stickers or emojis if you want." },
    { "@type": "HowToStep", name: "Download your image", text: "Tap Download PNG and choose your resolution. The file saves instantly, no signup, no watermark." },
  ],
};



export const metadata = {
  title: {
    absolute: "Brat Generator - Free Brat Image & Text Maker [2026]"
  },
  description:
    "Recreate the Charli XCX album aesthetic with this free brat generator. Design custom text images and pfps for TikTok. Download your clean PNG.",
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


      {/* ── HERO ── */}
      <section className="hp-hero">
        <h1 className="hp-hero-heading">Brat Generator</h1>
        <p className="hp-hero-sub">
          Create brat-style images, memes, and profile pictures with this free brat image generator online. Type your text, pick colors, add stickers, and download a high-res PNG. No signup. No watermark. Inspired by the Charli XCX brat aesthetic.
        </p>
      </section>

      {/* ── GENERATOR ── */}
      <div id="generator" className="hp-gen-section">
        <div className="hp-gen-card">
          <div className="hp-gen-label">
            <span className="hp-gen-dot" />
            Live Generator
          </div>
          <div style={{ minHeight: '520px', position: 'relative', width: '100%' }}>
            <BratGeneratorLazy
              mode="full"
              defaultTab="text"
              defaultRatio="1:1"
              defaultPlaceholder="brat"
              hideSelfieMode={false}
              hidePresets={false}
              showRandomButton={false}
            />
          </div>
        </div>
      </div>

      {/* ── WHAT IS THE BRAT TREND ── */}
      <section className="bg-white py-24 px-4 overflow-hidden border-b-2 border-black/5">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-2">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Trends</span>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">What Is the<br />Brat Trend?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <p className="hp-body-text !text-[18px] sm:!text-[20px] font-medium leading-tight italic border-l-4 border-[#89CC04] pl-8 m-0">
                A brat image generator turns any word or phrase into bold, minimal text on a solid-color background. The style comes from{" "}
                <a href="https://en.wikipedia.org/wiki/Brat_(album)" target="_blank" rel="nofollow noopener" className="hp-link">Charli XCX&apos;s brat album</a>
                {" "}and features stretched lowercase type, saturated neon colors, and zero clutter.
              </p>
              <div className="space-y-6">
                <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">
                  People use it to make memes, profile pictures, stickers, and social posts. Curious about the deeper cultural impact? Read our full guide on the <Link href="/blog/brat-summer-meaning" className="hp-link">brat summer meaning</Link>. It runs entirely in your browser with no app to install.
                </p>
                <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0 italic font-bold">
                  To learn more about the culture and rules behind this viral look, read our complete <Link href="/blog/brat-aesthetic-guide/" className="hp-link">brat aesthetic guide</Link>. For sticker and layered image edits, try the <Link href="/brat-maker/" className="hp-link">brat maker</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT FONT IS THE BRAT ALBUM ── */}
      <section className="bg-zinc-50 py-24 px-4 overflow-hidden border-b-2 border-black/5">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-2">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Typography</span>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">What Font Is<br />the Brat Album?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <p className="hp-body-text !text-[18px] sm:!text-[20px] font-medium leading-tight italic border-l-4 border-black pl-8 m-0">
                The brat album cover uses a bold, lowercase sans-serif font. While there is no official downloadable file, it is typically recreated using Arial Bold or Helvetica Neue Bold with extremely tight letter spacing.
              </p>
              <div className="space-y-6">
                <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0 italic font-bold">
                  For the full color palette with hex codes, see our <Link href="/blog/brat-color-code/" className="hp-link">brat color code guide →</Link>
                </p>
                <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">
                   To study the typography rules in detail, check out the <Link href="/blog/what-is-brat-font/" className="hp-link">brat font guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <span className="hp-eyebrow !text-black/40">Capabilities</span>
        <h2 className="hp-display-heading !mb-16">Brat Image Generator Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
          {[
            { icon: "⚡", h: "Live preview", p: "Every keystroke updates the canvas instantly. No lag, no refresh button." },
            { icon: "🎨", h: "Full color control", p: "Pick any hex color for text and background. Go classic neon green or make it your own." },
            { icon: "📐", h: "Aspect ratio presets", p: "1:1 for pfps, 4:5 for Instagram, 9:16 for stories, 16:9 for banners." },
            { icon: "😎", h: "Stickers and emojis", p: "Drop emojis onto the canvas. Drag, resize, and rotate them freely." },
            { icon: "🔤", h: "Typography controls", p: "Adjust font size, weight, letter spacing, and text alignment." },
            { icon: "📱", h: "Works on mobile", p: "Full touch support on iPhone, Android, and tablets. No app needed." },
            { icon: "🔓", h: "No signup required", p: "Open the page and start creating. No email, no password, no paywall." },
            { icon: "💾", h: "High-res PNG export", p: "Download up to 3000 px. No watermark, no compression." }
          ].map((feat) => (
            <div key={feat.h} className="bg-white p-8 group hover:bg-[#89CC04]/5 transition-all duration-300 border-b-4 border-transparent hover:border-[#89CC04]">
              <div className="text-3xl mb-6 bg-zinc-50 w-14 h-14 flex items-center justify-center rounded-full group-hover:bg-[#89CC04] group-hover:scale-110 transition-all">
                {feat.icon}
              </div>
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-3">{feat.h}</h3>
              <p className="text-[15px] opacity-60 leading-relaxed m-0">{feat.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <section className="bg-white py-24 px-4 overflow-hidden border-b-2 border-black/5">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-2">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Manual</span>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-16 leading-none">How to Use the<br />Brat Creator</h2>
            <div className="space-y-12">
              {[
                { step: "01", h: "Type your text", p: "Open the tool above and type any word or phrase. The canvas renders it live in the brat style." },
                { step: "02", h: "Pick your colors", p: "Use the color pickers to set your background and text. Try neon green for the classic look, or enter any hex code." },
                { step: "03", h: "Adjust the layout", p: "Change font size, letter spacing, and aspect ratio. Drop stickers or emojis if you want extra detail." },
                { step: "04", h: "Download your image", p: "Tap Download PNG and pick a resolution. The file saves to your device instantly, no account needed." }
              ].map((item) => (
                <div key={item.step} className="flex gap-8 group/step">
                  <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover/step:opacity-100 group-hover/step:text-[#1A1A1A] transition-all duration-500">{item.step}</span>
                  <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover/step:border-[#89CC04] transition-colors">
                    <h3 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase mb-2 leading-none">{item.h}</h3>
                    <p className="text-[17px] opacity-70 leading-relaxed m-0 max-w-xl">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-16 text-[18px] font-medium leading-relaxed italic border-t-2 border-black/5 pt-12 max-w-3xl">
              Use it as a brat word generator to type any single word and download in seconds. The <Link href="/brat-name-generator/" className="hp-link">brat name generator</Link> lets you add names directly onto custom backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="bg-zinc-50 py-24 px-4 overflow-hidden border-b-2 border-black/5">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-2">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Targets</span>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Who Is This For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3 border-l-4 border-[#89CC04] pl-6">Social media users.</h3>
                  <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">Make brat-style profile pictures, story covers, and posts for TikTok, Instagram, X, and Discord. This brat pfp maker gives you a 1:1 export sized perfectly for avatars.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3 border-l-4 border-black pl-6">Meme creators.</h3>
                  <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">Turn any phrase into a bold brat photo with one click. The brat simulator feel of typing, seeing, and saving makes reaction images fast.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3 border-l-4 border-pink-400 pl-6">Charli XCX fans.</h3>
                  <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">Recreate the album cover look or remix it with your own words. Share your brat generator sticker edits on group chats and WhatsApp.</p>
                </div>
              </div>
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3 border-l-4 border-zinc-400 pl-6">Content creators.</h3>
                  <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">Use it as a brat photo maker to build thumbnails, overlays, and text graphics for YouTube, Reels, and TikTok without opening heavyweight design software.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3 border-l-4 border-black pl-6">Designers and marketers.</h3>
                  <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">
                    Quickly mock up brat-inspired visuals for campaigns, merch ideas, or client pitches. Export brat generator png files at print-ready resolution. Use the <Link href="/brat-album-cover-generator/" className="hp-link">brat album cover generator</Link> for full album art layouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY USE INSTEAD OF CANVA ── */}
      <div className="hp-page-section hp-page-section-bordered bg-zinc-50/50">
        <div className="max-w-[1200px] mx-auto">
          <span className="hp-eyebrow !text-black/40">Comparison</span>
          <h2 className="hp-display-heading !mb-16">Why Use a Brat Creator Instead of Canva or Photoshop?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="hp-body-text !text-[18px] sm:!text-[21px] font-medium leading-tight italic border-l-4 border-black pl-8">
                Canva and Photoshop are general-purpose tools. You open a blank canvas, search for fonts, and scroll through menus for one output.
              </p>
              <p className="hp-body-text text-[17px] opacity-60 leading-relaxed pl-9">
                That makes sense for a complex brand deck or a professional photo edit. <span className="font-bold text-black italic">It does not make sense for a brat meme.</span> Every second you spend in a menu is a second you aren&apos;t posting.
              </p>
            </div>
            
            <div className="bg-white p-10 border-2 border-black/5 shadow-[20px_20px_0px_rgba(0,0,0,0.03)] group hover:border-[#89CC04] transition-all">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8 group-hover:text-[#89CC04] transition-colors">The Brat Creator Edge:</h3>
              <ul className="space-y-5">
                {[
                  "No subscription. No 14-day trials.",
                  "Type text, pick a color, download.",
                  "Zero workflow. Instant high-res PNG.",
                  "Built specifically for the brat aesthetic."
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[16px] font-bold italic tracking-tight">
                    <span className="w-6 h-6 bg-[#89CC04] flex items-center justify-center text-[10px] rounded-full text-black not-italic">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-black/5">
                <p className="text-sm opacity-50 m-0">
                  For deeper typography work, try the <Link href="/brat-font-generator/" className="hp-link">brat font generator</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MORE TOOLS ── */}
      <div className="hp-page-section hp-page-section-bordered">
        <div className="max-w-[1200px] mx-auto">
          <span className="hp-eyebrow !text-black/40">More tools</span>
          <h2 className="hp-display-heading !mb-4">Explore All Brat Tools</h2>
          <p className="hp-body-text !mb-16 opacity-60">
            Each tool targets a specific workflow. Pick the one that fits what you need.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { h: "Brat Text Generator", p: "Focus on pure typography.", link: "/brat-text-generator/", color: "#89CC04" },
              { h: "Brat Name Generator", p: "Create custom identities.", link: "/brat-name-generator/", color: "#000000" },
              { h: "Brat Album Cover", p: "Full square art layouts.", link: "/brat-album-cover-generator/", color: "#ff90e8" }
            ].map((tool) => (
              <Link key={tool.h} href={tool.link} className="group block bg-white border-2 border-black/5 p-8 hover:border-black transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full transition-all group-hover:w-4" style={{ backgroundColor: tool.color }} />
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-black transition-colors">{tool.h}</h3>
                <p className="text-sm opacity-50 mb-8 uppercase font-bold tracking-widest">{tool.p}</p>
                <div className="flex items-center gap-2 font-black italic uppercase text-sm group-hover:gap-4 transition-all">
                  Try Tool <span className="text-xl">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── COLOR STYLES ── */}
      <section className="bg-zinc-50 py-24 px-4 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-2">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Archives</span>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Color Variants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { h: "Brat Green", p: "The classic neon look.", color: "#89CC04", link: "/brat-green-generator/" },
                { h: "Brat Pink", p: "Soft aesthetic variant.", color: "#ff90e8", link: "/brat-generator-pink/" },
                { h: "Brat Black", p: "Industrial dark mode.", color: "#111111", link: "/brat-black-generator/" },
                { h: "Brat White", p: "Minimalist fashion style.", color: "#ffffff", link: "/brat-generator-white/" }
              ].map((variant) => (
                <Link key={variant.h} href={variant.link} className="group/card block bg-white border-2 border-black/5 hover:border-black transition-all p-6">
                  <div className="aspect-square mb-6 flex items-center justify-center font-bold text-xl uppercase tracking-tighter shadow-inner" style={{ backgroundColor: variant.color, color: variant.color === "#111111" ? "#fff" : "#000" }}>
                    {variant.h.split(' ')[1]}
                  </div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-1">{variant.h}</h3>
                  <p className="text-[12px] opacity-50 m-0 uppercase font-bold tracking-widest">{variant.p}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      <section className="bg-white py-24 px-4 overflow-hidden border-b-2 border-black/5" id="examples">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-2">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Gallery</span>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Real Examples</h2>
            <p className="hp-body-text mb-12 text-[18px] sm:text-[20px] font-medium leading-relaxed italic border-l-4 border-[#89CC04] pl-10 max-w-2xl">
              Browse real outputs for layout, text, and color ideas. Use these as inspiration before exporting your own design.
            </p>
            <div className="mt-16">
              <ExampleGallery />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-zinc-50 py-24 px-4 overflow-hidden border-b-2 border-black/5">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-2">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Support</span>
          </div>
          <div className="flex-1">
            <FAQAccordion
              title="Frequently Asked Questions"
              intro="Quick answers about the official aesthetic generator."
              items={[
                {
                  question: "Is this brat generator free?",
                  answer: (
                    <p>
                      Yes. This free brat generator has no limits, no hidden fees, and no signup. Create and download as many images as you want at up to 3000 px resolution.
                    </p>
                  ),
                },
                {
                  question: "Does it add a watermark?",
                  answer: (
                    <p>
                      No. Every PNG you export is completely clean. No watermark, no branding, no fine print.
                    </p>
                  ),
                },
                {
                  question: "What file format does it export?",
                  answer: (
                    <p>
                      PNG. You pick the resolution, such as 1024, 1500, 2048, or 3000 px. No compression, no quality loss.
                    </p>
                  ),
                },
                {
                  question: "Does it work on mobile?",
                  answer: (
                    <p>
                      Yes. The editor runs in your mobile browser with full touch support. Works on iPhone, Android, iPad, and tablets. No app install needed.
                    </p>
                  ),
                },
                {
                  question: "Can I use it as a profile picture (pfp)?",
                  answer: (
                    <p>
                      Yes. Set the aspect ratio to 1:1, type your text, choose a color, and download. This brat generator online works as a pfp maker for TikTok, Instagram, Discord, X, and WhatsApp.
                    </p>
                  ),
                },
                {
                  question: "Can I use the images commercially?",
                  answer: (
                    <p>
                      Yes. Every image you create belongs to you. Use it for merch, social media, videos, print, or any commercial project. No attribution required.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Scroll reveal script */}
      <HomeScrollReveal />
    </div>
  );
}
