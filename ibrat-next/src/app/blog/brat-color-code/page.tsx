import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";
import CodeBlock from "@/components/CodeBlock";
import HexCopyBox from "@/components/HexCopyBox";
import InteractiveColorSpecGrid from "@/components/InteractiveColorSpecGrid";
import InteractivePalette from "@/components/InteractivePalette";

export const metadata: Metadata = {
  title: {
    absolute: "Brat Color Code - The Official Brat Green Hex Code (#89CC04)",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-color-code/",
  },
  description:
    "The definitive guide to the official Charli XCX Brat green. Get the hex, RGB, HSL, and CMYK values for the 2024 aesthetic.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the brat color code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brat color code is #89CC04. This is the official hex value from Charli XCX's Brat album cover, released June 2024. In RGB it is rgb(137, 204, 4) and in HSL it is hsl(80, 96%, 41%).",
      },
    },
    {
      "@type": "Question",
      name: "What is the RGB value of brat green?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The RGB value of brat green is rgb(137, 204, 4). This translates to 137 red, 204 green, and 4 blue. You can enter this directly into any design software that accepts RGB color input.",
      },
    },
    {
      "@type": "Question",
      name: "Is brat green the same as lime green?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brat green (#89CC04) and standard lime green (#32CD32) are both yellow-green shades but they are different colors. Brat green is more saturated and has a stronger yellow component, which gives it that sharp, high-energy look from the album cover.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the brat color code for free in commercial projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hex color codes are not copyrightable, so you are free to use #89CC04 in any personal or commercial project. Only specific artworks and logos are protected by copyright, not color values themselves.",
      },
    },
    {
      "@type": "Question",
      name: "What font does Charli XCX use with the brat green color?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brat album cover uses Arial in bold weight, set in lowercase with tight letter spacing. The combination of #89CC04 background and bold Arial text is what creates the complete brat visual identity.",
      },
    },
  ],
};

export default function BratColorCodePage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="DESIGN"
        title="Brat Color Code - The Official Brat Green Hex Code (#89CC04)"
        subtitle="The definitive guide to the official Charli XCX Brat green. Get the hex, RGB, HSL, and CMYK values for the 2024 aesthetic."
        readTime="8 MIN READ"
        author="ibratgenerator"
        publishDate="May 05, 2026"
        imageSrc="/blog-images/color-code-hero-v2.png"
        imageAlt="official brat color code #89CC04 visual example"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          
          <div className="bg-black text-white p-10 sm:p-16 mb-24 relative overflow-hidden group">
            <span className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Calibration Report</span>
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">The Spec</h2>
            <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-tight italic m-0">
              The official identity of brat summer. The brat color code is #89CC04, a bold, saturated yellow-green used on Charli XCX&apos;s Brat album cover. This specific shade has become a global cultural phenomenon, defining the visual style of an entire generation.
            </p>
          </div>

          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-[#89CC04] pl-10">
            Read about the full <Link href="/blog/brat-summer-meaning" className="hp-link">brat summer meaning</Link> here. This post contains the exact hex, RGB, and HSL values plus how to use them anywhere.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">The Official Swatch</h2>
          
          <div className="group relative mb-24">
            <div className="aspect-[21/9] bg-[#89CC04] w-full relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12vw] font-black italic tracking-tighter text-black opacity-5 select-none uppercase">brat green</span>
               </div>
               <div className="absolute bottom-8 left-8">
                  <span className="text-4xl sm:text-7xl font-black italic tracking-tighter text-black uppercase">#89CC04</span>
               </div>
            </div>

            <InteractiveColorSpecGrid 
              specs={[
                { label: "HEX", value: "#89CC04" },
                { label: "RGB", value: "137, 204, 4" },
                { label: "HSL", value: "80, 96%, 41%" },
                { label: "CMYK", value: "33, 0, 98, 20" }
              ]}
            />
          </div>

          <div className="space-y-8 mb-32">
            <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-8 m-0">
              This is the color Charli XCX used on the June 2024 Brat album cover. It became the defining visual of &quot;brat summer&quot; and spread across TikTok, Instagram, and fashion. It is the core of the entire movement.
            </p>
            <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-8 m-0">
              To use this exact color right now, open the <Link href="/brat-green-generator/" className="hp-link">brat green generator</Link>. This tool ensures you never have to guess which green is the right one. While some people use fan-created variations like #C1FF00 or #8ACE00, the official color remains the most authentic choice for any serious project.
            </p>
          </div>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter uppercase">Visual Identity</h2>
          
          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Analysis</span>
            </div>
            <div className="flex-1 bg-zinc-50 p-10 sm:p-16 border-2 border-black/5">
              <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-8 leading-none">Field Report</h2>
              <p className="hp-body-text !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic mb-8">
                Brat green is a saturated yellow-green that sits in a unique spot on the color wheel. 
              </p>
              <p className="hp-body-text text-[17px] opacity-70 leading-relaxed m-0">
                It is significantly brighter than a traditional olive but much darker and more grounded than a neon lime. The color provides exceptionally high contrast against black or white text, making it perfect for typography-heavy designs. It reads as &quot;loud&quot; and intentional, with nothing subtle about its presence in a layout. On screen, it appears almost fluorescent, especially on high-quality OLED displays. It is closer to a classic chartreuse than it is to a pure lime green. This specific intensity is why it works so well for the aesthetic.
              </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">The Phenomenon</h2>
          
          <div className="space-y-12 mb-32 max-w-[650px]">
            <div className="relative group">
               <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">01</span>
               <h3 className="text-3xl font-black italic tracking-tighter mb-4 leading-none uppercase">Pure Minimalism</h3>
               <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-[#89CC04] pl-6 py-1">
                 Charli XCX released Brat on June 7, 2024. The album cover was just the word &quot;brat&quot; in lowercase Arial on this green background. That extreme minimalism made the color itself the entire identity.
               </p>
            </div>
            <div className="relative group">
               <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">02</span>
               <h3 className="text-3xl font-black italic tracking-tighter mb-4 leading-none uppercase">Viral Adaptation</h3>
               <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-[#89CC04] pl-6 py-1">
                 Fans started recreating it immediately, replacing the word &quot;brat&quot; with their own names and phrases. It became a template for self-expression. It felt honest, DIY, and accessible.
               </p>
            </div>
            <div className="relative group">
               <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">03</span>
               <h3 className="text-3xl font-black italic tracking-tighter mb-4 leading-none uppercase">Political Legacy</h3>
               <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-[#89CC04] pl-6 py-1">
                 The trend even reached the highest levels of politics. The Kamala Harris presidential campaign adopted the aesthetic when Charli XCX posted &quot;kamala IS brat.&quot; This took the color into mainstream news coverage and cemented its legacy.
               </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">The Palette</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-b border-black/5 pb-8">
            While #89CC04 is THE brat color, the complete aesthetic also uses companion colors to create a full design system. Use these hex codes to keep your designs authentic.
          </p>

          <InteractivePalette 
            colors={[
              { type: "Primary", name: "brat green", hex: "#89CC04", bg: "bg-[#89CC04]", text: "text-black" },
              { type: "Soft", name: "brat pink", hex: "#FF90E8", bg: "bg-[#FF90E8]", text: "text-black" },
              { type: "Dark", name: "brat black", hex: "#0A0A0A", bg: "bg-[#0A0A0A]", text: "text-white" },
              { type: "Clean", name: "brat white", hex: "#FFFFFF", bg: "bg-white border-2 border-black/5", text: "text-black" }
            ]}
          />

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">Implementation</h2>
          <HexCopyBox />
          
          <div className="space-y-12 mb-32">
            <CodeBlock 
              title="CSS SPEC"
              code={`/* Official Brat Color System */
:root {
  --brat-green: #89CC04;
  --brat-pink: #FF90E8;
  --brat-black: #0A0A0A;
}`}
            />
          </div>

          <div className="py-24 sm:py-32 text-center border-t-2 border-black/5 mt-12">
            <h3 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Need the green?</h3>
            <Link href="/" className="group inline-flex items-center text-2xl sm:text-5xl font-black italic uppercase tracking-tighter transition-all">
              <span className="relative">
                Open the Generator
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#89CC04] -z-10 group-hover:h-full transition-all duration-300 opacity-60"></div>
              </span>
              <svg className="ml-6 w-8 h-8 sm:w-12 sm:h-12 transform group-hover:translate-x-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="mt-12 text-lg opacity-40 font-medium italic tracking-widest uppercase">The definitive #89CC04 guide.</p>
          </div>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Frequently Asked Questions</h2>
          <FAQAccordion
            title=""
            intro=""
            items={[
              { 
                question: "What is the brat color code?", 
                answer: <p>The brat color code is #89CC04. This is the official hex value from Charli XCX's Brat album cover, released June 2024. In RGB it is rgb(137, 204, 4) and in HSL it is hsl(80, 96%, 41%).</p> 
              },
              { 
                question: "What is the RGB value of brat green?", 
                answer: <p>The RGB value of brat green is rgb(137, 204, 4). This translates to 137 red, 204 green, and 4 blue. You can enter this directly into any design software that accepts RGB color input.</p> 
              },
              {
                question: "Is brat green the same as lime green?",
                answer: <p>Brat green (#89CC04) and standard lime green (#32CD32) are both yellow-green shades but they are different colors. Brat green is more saturated and has a stronger yellow component, which gives it that sharp, high-energy look from the album cover.</p>
              },
              {
                question: "Can I use the brat color code for free in commercial projects?",
                answer: <p>Yes. Hex color codes are not copyrightable, so you are free to use #89CC04 in any personal or commercial project. Only specific artworks and logos are protected by copyright, not color values themselves.</p>
              },
              {
                question: "What font does Charli XCX use with the brat green color?",
                answer: <p>The brat album cover uses Arial in bold weight, set in lowercase with tight letter spacing. The combination of #89CC04 background and bold Arial text is what creates the complete brat visual identity.</p>
              }
            ]}
          />

          <p className="hp-body-text mt-16 text-[14px] text-zinc-500 italic">
            Written by the ibratgenerator.com team | Updated: May 2026
          </p>

        </div>
      </article>

    </main>
  );
}
