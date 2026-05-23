import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";
import InteractiveCaptionGrid from "@/components/InteractiveCaptionGrid";
import InteractivePalette from "@/components/InteractivePalette";

export const metadata = {
  title: "Brat Generator for TikTok - Make Brat Images Fast",
  description: "Make brat-style images for TikTok in seconds. Free brat generator - type your text, pick your color, download PNG. No signup, no watermark.",
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-generator-for-tiktok/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I make a brat image for TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the free brat generator, type your text, pick your background color, and download a PNG. The whole process takes under 60 seconds. No signup or app download needed."
      }
    },
    {
      "@type": "Question",
      "name": "What size should a brat image be for TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For TikTok profile pictures use 1:1 square format. For TikTok stories and videos use 9:16. The brat generator has both aspect ratio presets built in."
      }
    },
    {
      "@type": "Question",
      "name": "What is the brat color for TikTok posts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official brat green is #89CC04. It stands out on both light and dark TikTok feeds. Black (#0a0a0a) also works well for dark mode viewers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use brat images on TikTok for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The brat generator is completely free - no watermark, no account, no limits. Every image you download belongs to you."
      }
    },
    {
      "@type": "Question",
      "name": "What text works best for brat TikTok posts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short phrases work best - 1 to 4 words maximum. Your name, a mood, a reaction, or a lyric fragment. The less text the more brat it looks."
      }
    }
  ]
};

export default function BratGeneratorForTikTokPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="TUTORIAL"
        title="Brat Generator for TikTok - Make Brat Images Fast"
        subtitle=""
        readTime="5 MIN READ"
        publishDate="May 2026"
        imageSrc="/blog-images/tiktok-hero-v3.png"
      />

      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          
          <div className="bg-black text-white p-10 sm:p-16 mb-24 relative overflow-hidden group">
            <span className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">The Workflow</span>
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">Speed is Key</h2>
            <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-tight italic m-0">
              TikTok moves fast. A brat image that takes 10 minutes to make in design software is already old news by the time you post it. The brat generator lets you go from idea to PNG in under a minute.
            </p>
          </div>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter uppercase">Why TikTok and Brat Go Together</h2>
          <div className="flex gap-12 mb-20 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all">Culture</span>
            </div>
            <div className="flex-1 border-l-4 border-black pl-12 py-2 group-hover:border-[#89CC04] transition-colors">
              <p className="hp-body-text !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic m-0">
                TikTok culture rewards authenticity over polish. The <Link href="/blog/brat-aesthetic-guide/" className="hp-link">brat aesthetic</Link> is intentionally lo-fi, perfectly fitting the raw and unfiltered energy of the platform. A short block of text on a solid neon color naturally stops the scroll because it completely breaks away from hyper-edited video content. Gen Z recognizes the aesthetic instantly the moment it appears on their For You Page. When you want to make a statement that resonates with a highly online audience, this aesthetic is your best option.
              </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl text-left tracking-tighter uppercase">Best Brat Image Sizes for TikTok</h2>
          
          <div className="space-y-12 mb-32 max-w-[650px]">
            <div className="relative group">
               <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">01</span>
               <h3 className="text-3xl font-black italic tracking-tighter mb-2 leading-none uppercase">Profile Picture</h3>
               <span className="text-[12px] font-black uppercase tracking-[0.3em] mb-4 block text-[#89CC04]">1:1 Square</span>
               <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-black/10 pl-6 py-1 group-hover:border-[#89CC04] transition-colors">
                 Because profile pictures show up incredibly small in the comment section and on the sidebar of your videos, you must use a 1:1 square format and keep your text as large and readable as possible.
               </p>
            </div>
            
            <div className="relative group">
               <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">02</span>
               <h3 className="text-3xl font-black italic tracking-tighter mb-2 leading-none uppercase">Video Overlay</h3>
               <span className="text-[12px] font-black uppercase tracking-[0.3em] mb-4 block text-[#89CC04]">9:16 Vertical</span>
               <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-black/10 pl-6 py-1 group-hover:border-[#89CC04] transition-colors">
                 If you want to use a graphic as part of a video edit or as a transition slide, you need the vertical format to fill the entire screen of a modern smartphone without leaving awkward black bars.
               </p>
            </div>

            <div className="relative group">
               <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">03</span>
               <h3 className="text-3xl font-black italic tracking-tighter mb-2 leading-none uppercase">Story / Background</h3>
               <span className="text-[12px] font-black uppercase tracking-[0.3em] mb-4 block text-[#89CC04]">9:16 Vertical</span>
               <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-black/10 pl-6 py-1 group-hover:border-[#89CC04] transition-colors">
                 Stories are the perfect place for temporary updates. Using the vertical layout ensures your story looks natively created for the app and works perfectly as a standalone post on your feed.
               </p>
            </div>
          </div>

          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-10">
            Our free <Link href="/" className="hp-link">brat generator</Link> has both of these aspect ratio presets built right in, so you never have to guess the correct dimensions.
          </p>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">What to Write</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            You have a massive amount of creative freedom. A classic and highly effective choice is just your name. You could also express a relatable mood, or if you are making reaction content, phrases like &quot;not my problem&quot; hit incredibly hard. Keep it under 4 words. If it takes more than 2 seconds to read it is too long for TikTok.
          </p>
          
          <div className="flex gap-12 mb-32 group">
            <InteractiveCaptionGrid 
              captions={[
                "tired", "whatever", "unbothered",
                "not my problem", "i said what i said", "book girl",
                "gym rat", "that girl", "2026"
              ]} 
              hoverBg="hover:bg-black"
              hoverText="hover:text-white"
            />
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">TikTok Colors</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            The exact color you pick matters. The classic green is undeniably viral, while black offers high contrast for dark mode users, and pink provides a softer edge for lifestyle creators.
          </p>
          
          <div className="mb-32">
            <InteractivePalette 
              colors={[
                { type: "Classic", name: "brat green", hex: "#89CC04", bg: "bg-[#89CC04]", text: "text-black" },
                { type: "Dark Mode", name: "brat black", hex: "#0A0A0A", bg: "bg-black", text: "text-white" },
                { type: "Soft", name: "brat pink", hex: "#FF90E8", bg: "bg-[#FF90E8]", text: "text-black" }
              ]}
            />
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">Batch Creating</h2>
          <div className="bg-[#89CC04] p-10 sm:p-12 mb-24 border-2 border-black/5">
             <p className="hp-body-text !opacity-100 text-[18px] sm:text-[20px] font-medium leading-relaxed italic mb-8">
               If you want to grow your account fast, you need to batch create your content. 
             </p>
             <p className="hp-body-text !opacity-90 text-[17px] leading-relaxed m-0 text-black font-medium">
               Lock your preferred background color and canvas size in the tool so they stay perfectly identical. Then, change only the text between exports, downloading 5 to 10 different variants back to back. Once you have your folder of images, schedule them across the week to keep your feed active without daily effort. Do not change any settings between exports - visual consistency is the entire point.
             </p>
          </div>

          <div className="py-24 sm:py-32 text-center border-t-2 border-black/5 mt-12">
            <h3 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Ready to start?</h3>
            <Link href="/" className="group inline-flex items-center text-2xl sm:text-5xl font-black italic uppercase tracking-tighter transition-all">
              <span className="relative">
                Open the Generator
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#89CC04] -z-10 group-hover:h-full transition-all duration-300 opacity-60"></div>
              </span>
              <svg className="ml-6 w-8 h-8 sm:w-12 sm:h-12 transform group-hover:translate-x-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl text-left">Frequently Asked Questions</h2>
          <FAQAccordion
            title=""
            intro=""
            items={[
              { 
                question: "How do I make a brat image for TikTok?", 
                answer: <p>Open the free brat generator, type your text, pick your background color, and download a PNG. The whole process takes under 60 seconds. No signup or app download needed.</p> 
              },
              { 
                question: "What size should a brat image be for TikTok?", 
                answer: <p>For TikTok profile pictures use 1:1 square format. For TikTok stories and videos use 9:16. The brat generator has both aspect ratio presets built in.</p> 
              },
              { 
                question: "What is the brat color for TikTok posts?", 
                answer: <p>The official brat green is #89CC04. It stands out on both light and dark TikTok feeds. Black (#0a0a0a) also works well for dark mode viewers.</p> 
              },
              { 
                question: "Can I use brat images on TikTok for free?", 
                answer: <p>Yes. The brat generator is completely free - no watermark, no account, no limits. Every image you download belongs to you.</p> 
              },
              { 
                question: "What text works best for brat TikTok posts?", 
                answer: <p>Short phrases work best - 1 to 4 words maximum. Your name, a mood, a reaction, or a lyric fragment. The less text the more brat it looks.</p> 
              }
            ]}
          />

        </div>
      </article>
    </main>
  );
}
