import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";
import InteractiveCaptionGrid from "@/components/InteractiveCaptionGrid";

export const metadata: Metadata = {
  title: {
    absolute: "Brat Captions for Instagram (50+ Real Examples You Can Copy)",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-captions-for-instagram/",
  },
  description:
    "Get 50+ brat captions for Instagram you can copy, plus practical tips to write your own short, bold, and natural captions.",
};

export default function BratCaptionsForInstagramPage() {
  return (
    <main className="hp-root pb-24">
      <BlogHero 
        category="IDEAS & INSPO"
        title="Brat Captions for Instagram (50+ Real Examples You Can Copy)"
        subtitle=""
        readTime="5 MIN READ"
        imageSrc="/blog-images/captions-hero.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          <div className="bg-black text-white p-10 sm:p-16 mb-24 relative overflow-hidden group border-b-8 border-[#89CC04]">
            <span className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Social Command Center</span>
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">Find Your Statement</h2>
            <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-tight italic m-0">
              This guide provides over 50 ready-to-use brat captions for instagram that you can use directly on your next post. Beyond just giving you a brat captions copy paste list, you will also find practical tips for writing your own original phrases.
            </p>
          </div>

          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-10">
            Use these brat caption ideas to quickly find the right words without overthinking your post.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Simple Captions</h2>
          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Essentials</span>
            </div>
            <InteractiveCaptionGrid 
              captions={[
                "so what", "stay mad", "idc", "not impressed", "cool enough", 
                "say less", "no thanks", "try again", "already bored", "keep watching", 
                "still unbothered", "too real", "next question", "no comment", "move along"
              ]} 
              hoverBg="hover:bg-[#89CC04]"
              hoverText="hover:text-black"
            />
          </div>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Bold Captions</h2>
          <div className="flex gap-12 mb-4 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Attitude</span>
            </div>
            <InteractiveCaptionGrid 
              captions={[
                "not your type", "you wish", "watch me", "i said no", "deal with it", 
                "not sorry", "stay pressed", "i meant that", "main character", "not for everyone", 
                "know your place", "too busy winning", "out of reach", "you had a chance", "i do me"
              ]} 
              hoverBg="hover:bg-black"
              hoverText="hover:text-white"
            />
          </div>
          <p className="hp-body-text mt-8 mb-24 text-[16px] opacity-60 italic leading-relaxed">
            Do not stack an aggressive brat meme caption on top of an aggressive photo unless that intense tone is intentional.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Soft Captions</h2>
          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Minimal</span>
            </div>
            <InteractiveCaptionGrid 
              captions={[
                "just vibes", "low energy", "nothing serious", "it is what it is", "soft chaos", 
                "quiet today", "slow morning", "no pressure", "doing my best", "half awake", 
                "gentle mood", "taking my time"
              ]} 
              hoverBg="hover:bg-[#ff90e8]"
              hoverText="hover:text-white"
            />
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter">Pro Tip: Writing Original Captions</h2>
          <div className="bg-zinc-900 text-white p-10 sm:p-16 mb-24 relative overflow-hidden group border-2 border-white/10">
             <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[10px]">VER: 2026.05 // HACKER_MODE</div>
             <p className="hp-body-text !text-white !opacity-100 text-[18px] sm:text-[22px] font-medium leading-relaxed italic m-0 relative z-10">
               To write original brat captions or charli xcx captions, start with your actual reaction to the photo, cut it down to three words max, and drop any unnecessary explaining. Make sure the text is entirely lowercase so it matches the brat summer captions style. For example, instead of writing &quot;I am feeling so exhausted today and just want to sleep,&quot; you cut it down to simply &quot;completely exhausted&quot;. This method turns long thoughts into sharp brat quote captions, and can even be used to format your favorite brat lyric captions or brat song captions instantly.
             </p>
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter uppercase">Visual Captions</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70 border-l-2 border-black pl-8 italic">
            Instead of just writing text under a photo, you can type your caption directly into the <Link href="/brat-text-generator" className="hp-link">brat text generator</Link> to create an image. Export it as a PNG and post it as a standalone image or carousel opener. This is the fastest way to get authentic brat text for instagram without manually editing photos. For full meme layouts, you can also use the <Link href="/brat-maker" className="hp-link">brat maker</Link>.
          </p>

          <div className="py-24 sm:py-32 text-center border-t-2 border-black/5 mt-12">
            <h3 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Ready to post?</h3>
            <Link href="/" className="group inline-flex items-center text-2xl sm:text-5xl font-black italic uppercase tracking-tighter transition-all">
              <span className="relative">
                Open the Generator
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#89CC04] -z-10 group-hover:h-full transition-all duration-300 opacity-60"></div>
              </span>
              <svg className="ml-6 w-8 h-8 sm:w-12 sm:h-12 transform group-hover:translate-x-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="mt-12 text-lg opacity-40 font-medium italic tracking-widest uppercase">The original brat caption creator.</p>
          </div>

          {/* ── FAQ ── */}
          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              { 
                question: "What makes a good brat caption?", 
                answer: <p>A good caption is short, usually under three words, and sounds like something you would actually say in real life.</p> 
              },
              { 
                question: "Should brat captions be lowercase?", 
                answer: <p>Yes, keeping the text lowercase is a core part of the aesthetic because it feels casual and unfiltered.</p> 
              },
              {
                question: "Can I use these captions for TikTok too?",
                answer: <p>Yes, these short phrases work perfectly as text overlays on TikTok videos or inside the caption box.</p>
              },
              {
                question: "How do I make a brat text visual for my caption?",
                answer: <p>You can use a free brat generator to type your caption, select a background color, and download it as an image instantly.</p>
              }
            ]}
          />
        </div>
      </article>
    </main>
  );
}
