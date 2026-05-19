import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "What Is a Brat Generator? Simple Explanation",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/what-is-brat-generator/",
  },
  description:
    "A brat generator is a free online tool to make Charli XCX-style images. Type text, pick colors, download PNG — no Photoshop, no signup needed.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a brat generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A brat generator is a free online tool that lets you create images in the style of Charli XCX's brat album, featuring blurry text on a colored background. Type your text and download a PNG in seconds."
      }
    },
    {
      "@type": "Question",
      "name": "Is the brat generator free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. No signup, no watermark, completely free."
      }
    },
    {
      "@type": "Question",
      "name": "What can I make with a brat generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Profile pictures, TikTok posts, Twitter headers, phone wallpapers, and reaction memes in the brat aesthetic."
      }
    }
  ]
};

export default function WhatIsBratGeneratorPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="CULTURE"
        title="What Is a Brat Generator? Simple Explanation"
        subtitle=""
        readTime="4 MIN READ"
        imageSrc="/blog-images/generator-hero-v2.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          <div className="bg-black text-white p-10 sm:p-16 mb-24 relative overflow-hidden group">
            <span className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Engineering Report // VER 2.0</span>
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">The Generator</h2>
            <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-tight italic m-0">
              <span className="font-bold not-italic">A brat generator is more than just a tool.</span> It is an online tool built specifically to recreate the heavy, minimal typography style that took over the internet.
            </p>
          </div>

          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-10">
            Instead of using complex design software to manually set up neon green backgrounds and crush letter spacing, you use a charli xcx brat generator to do it instantly. These tools operate as a brat text tool online, completely free and running directly in your browser without requiring you to make an account or download any apps.
          </p>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">How to Use a Brat Generator</h2>
             <div className="space-y-12 mb-32">
            {[
              { step: "01", h: "Type your text.", p: <>Enter the phrase you want into the <Link href="/" className="hp-link">brat generator tool</Link> and watch the layout update automatically. The live preview updates as you type, perfectly compressing the letter spacing to match the viral aesthetic.</> },
              { step: "02", h: "Choose your style.", p: "Select from classic green, stark white, black, or hot pink backgrounds to match your mood. Each color is calibrated to match the specific hex codes and blurry text effects of the original trend." },
              { step: "03", h: "Download PNG.", p: "Click the export button to save your high-resolution image immediately. No watermarks, no signups, and completely free. Your image is ready to upload directly to your feed or story in seconds." }
            ].map((item) => (
              <div key={item.step} className="flex gap-8 group">
                <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">{item.step}</span>
                <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                  <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">{item.h}</h3>
                  <p className="text-[17px] opacity-70 leading-relaxed m-0">{item.p}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter">What Can You Make?</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-4 border-black mb-32 overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
            {[
              { category: "Viral Memes", p: "People use a brat generator online to create a massive variety of digital content. As a dedicated brat meme generator, creators build highly shareable reaction images using short, sarcastic phrases.", color: "bg-[#89CC04]" },
              { category: "Platform Content", p: "Influencers turn their random thoughts and Instagram captions into bold visuals that stand out in a feed. You will also see these graphics constantly used as TikTok thumbnails or YouTube chapter markers.", color: "bg-white" },
              { category: "Playlist Art", p: "Musicians and playlist curators use the charli xcx meme tool to quickly generate striking album covers and playlist thumbnails for Spotify and Apple Music.", color: "bg-[#ff90e8]" }
            ].map((cat) => (
              <div key={cat.category} className={`${cat.color} p-10 group hover:bg-black transition-all cursor-crosshair`}>
                <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-4 group-hover:text-white">{cat.category}</h4>
                <p className="text-[14px] font-bold uppercase opacity-40 group-hover:text-[#89CC04] group-hover:opacity-100 m-0 leading-relaxed transition-colors">{cat.p}</p>
              </div>
            ))}
          </div>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Why the Format Works for Social Media</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The visual format dominates social media because the extreme high contrast stops users from scrolling past. The minimal design strips away all distractions, forcing the viewer to focus entirely on the text you wrote. Whether your followers use light mode or dark mode, the aggressive neon green and black layout cuts through the surrounding interface. Because the style is instantly recognizable, you don&apos;t need any additional context for the post to make sense. The format also translates perfectly across platforms: the same image works on a TikTok vertical feed, a Twitter timeline, and an Instagram story without any resizing or cropping.
          </p>

          {/* ── NEW SECTION: Brat Generator vs Canva - Which Is Faster? ── */}
          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter">Brat Generator vs Canva</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70 leading-relaxed">
            If you have ever tried to recreate the brat look in a general-purpose design tool, you know the process involves creating an account, browsing through templates, manually adjusting fonts and colors, repositioning elements, and then exporting. That workflow can easily take five to ten minutes even if you know exactly what you want. A <Link href="/" className="hp-link">brat generator</Link> eliminates all of that.
          </p>

          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Versus</span>
            </div>
            <div className="flex-1 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black border-2 border-black overflow-hidden">
                <div className="bg-white p-10 group hover:bg-[#89CC04] transition-colors">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">The Generator</h3>
                  <p className="text-[14px] opacity-70 leading-relaxed m-0 italic group-hover:text-black">
                    Under thirty seconds with zero setup. Design platforms do not have the brat blur effect, the exact condensed letter spacing, or the preset neon background colors built in. For an authentic brat image you can download in seconds, the generator is the right tool for the job.
                  </p>
                </div>
                <div className="bg-white p-10 group hover:bg-black transition-colors">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-white">General Tools</h3>
                  <p className="text-[14px] opacity-70 leading-relaxed m-0 italic group-hover:text-white/60">
                    General-purpose design tools are clearly better when you need complex layouts with multiple layers, custom illustrations, or brand templates. But for one quick aesthetic image in the brat style, you end up approximating the look manually and it never feels quite right.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-24 sm:py-32 text-center border-t-2 border-black/5 mt-12">
            <h3 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Try the Tool</h3>
            <Link href="/" className="group inline-flex items-center text-2xl sm:text-5xl font-black italic uppercase tracking-tighter transition-all">
              <span className="relative">
                Open the Generator
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#89CC04] -z-10 group-hover:h-full transition-all duration-300 opacity-60"></div>
              </span>
              <svg className="ml-6 w-8 h-8 sm:w-12 sm:h-12 transform group-hover:translate-x-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="mt-12 text-lg opacity-40 font-medium italic tracking-widest uppercase">The original brat aesthetic maker.</p>
          </div>

          {/* ── FAQ ── */}
          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              { question: "What is a brat generator?", answer: <p>A brat generator is a free online tool that lets you create images in the style of Charli XCX&apos;s brat album, featuring blurry text on a colored background. Type your text and download a PNG in seconds.</p> },
              { question: "Is the brat generator free?", answer: <p>Yes. No signup, no watermark, completely free.</p> },
              { question: "What can I make with a brat generator?", answer: <p>Profile pictures, TikTok posts, Twitter headers, phone wallpapers, and reaction memes in the brat aesthetic.</p> },
            ]}
          />

        </div>
      </article>

    </main>
  );
}
