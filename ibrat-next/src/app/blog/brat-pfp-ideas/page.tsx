import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: "Brat PFP Ideas - Best Brat Profile Pictures for 2026",
  description: "The best brat pfp ideas for TikTok, Instagram, and Twitter. Make your own custom brat profile picture free - no design skills needed.",
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-pfp-ideas/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a brat pfp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A brat pfp is a profile picture made in the brat aesthetic - short lowercase text on a solid color background, inspired by Charli XCX's 2024 album. Common colors are brat green, black, pink, and white."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make a brat pfp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a free brat pfp maker - type your text, choose your background color, and download a square PNG. No design skills or software needed."
      }
    },
    {
      "@type": "Question",
      "name": "What should I write on my brat pfp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your name, a single mood word, a year, or a short reaction phrase. Keep it under 4 words. Lowercase always. Less is more."
      }
    },
    {
      "@type": "Question",
      "name": "What size should a brat pfp be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Square format works for all platforms. 1024x1024px is the minimum recommended size for clean quality. The brat generator exports at high resolution automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Which color is best for a brat pfp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brat green (#89CC04) is the most recognizable. Black is the most dramatic. Pink is the most playful. White is the most minimal. Pick based on your vibe."
      }
    }
  ]
};

export default function BratPfpIdeasPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogHero
        category="IDEAS"
        title="Brat PFP Ideas - Best Brat Profile Pictures for 2026"
        subtitle="The best brat pfp ideas for TikTok, Instagram, and Twitter. Make your own custom brat pfp free."
        readTime="8 MIN READ"
        publishDate="May 2026"
        imageSrc="/blog-images/pfp-ideas-hero.png"
        imageAlt="Brat pfp ideas example, green and black profile pictures with lowercase text"
      />

      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          <p className="hp-body-text mb-16 text-[18px] sm:text-[20px] leading-relaxed italic border-b border-black/5 pb-12">
            <span className="font-bold not-italic">Your profile picture is the first thing people see.</span> A brat pfp says everything without saying anything - confident, unbothered, and effortlessly cool. Whether you want the classic brat green, sharp black, playful pink, or clean white, the formula is always the same: short text, your specific aesthetic, and you are done.
          </p>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">What Makes a Good Brat PFP?</h2>
          
          <div className="space-y-16 mb-20 max-w-[600px] mx-auto">
            {/* Rule 1 */}
            <div className="relative group">
              <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">01</span>
              <h3 className="text-3xl sm:text-4xl font-black italic tracking-tighter mb-4 leading-none uppercase">Short text only.</h3>
              <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-[#89CC04] pl-6 py-1">
                One word is perfect. Two is okay. Four is the limit. If they have to read it, you have already lost the moment.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="relative group">
              <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">02</span>
              <h3 className="text-3xl sm:text-4xl font-black italic tracking-tighter mb-4 leading-none uppercase">Lowercase mandatory.</h3>
              <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-[#89CC04] pl-6 py-1">
                Capitalization feels like effort. Effort is not brat. Keep every single character in lower case for that unbothered energy.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="relative group">
              <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">03</span>
              <h3 className="text-3xl sm:text-4xl font-black italic tracking-tighter mb-4 leading-none uppercase">Zero designed.</h3>
              <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-[#89CC04] pl-6 py-1">
                No gradients. No drop shadows. No patterns. It should look like you made it in 5 seconds while walking to a club.
              </p>
            </div>

            {/* Rule 4 */}
            <div className="relative group">
              <span className="absolute -left-12 top-0 text-5xl font-serif italic opacity-10 group-hover:opacity-20 transition-opacity">04</span>
              <h3 className="text-3xl sm:text-4xl font-black italic tracking-tighter mb-4 leading-none uppercase">High contrast.</h3>
              <p className="text-[17px] opacity-70 leading-relaxed border-l-2 border-[#89CC04] pl-6 py-1">
                The color must be loud and the text must be clear. Black on green is the gold standard for a reason.
              </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-24 mb-6 !text-4xl text-left tracking-tighter">Brat PFP Ideas by Color</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            The best way to choose your color is to see how it looks as a circular pfp. Here is the 2026 color guide for your next profile refresh.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {/* Green Mockup */}
            <div className="text-center group">
              <div className="aspect-square rounded-full mb-4 flex items-center justify-center font-bold text-2xl shadow-inner border-2 border-transparent group-hover:border-[var(--hp-accent)] transition-all duration-300 transform group-hover:scale-105" style={{ backgroundColor: '#89CC04', color: '#000', fontFamily: 'Arial, sans-serif' }}>
                me
              </div>
              <span className="font-bold block text-sm uppercase tracking-widest">Green</span>
              <span className="text-[11px] opacity-60 font-mono">#89CC04</span>
              <p className="text-[12px] mt-2 opacity-80 leading-relaxed italic">&quot;classic brat summer vibe&quot;</p>
            </div>

            {/* Black Mockup */}
            <div className="text-center group">
              <div className="aspect-square rounded-full mb-4 flex items-center justify-center font-bold text-2xl shadow-inner border-2 border-transparent group-hover:border-[var(--hp-ink)] transition-all duration-300 transform group-hover:scale-105" style={{ backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
                mood
              </div>
              <span className="font-bold block text-sm uppercase tracking-widest">Black</span>
              <span className="text-[11px] opacity-60 font-mono">#0A0A0A</span>
              <p className="text-[12px] mt-2 opacity-80 leading-relaxed italic">&quot;moody &amp; industrial energy&quot;</p>
            </div>

            {/* Pink Mockup */}
            <div className="text-center group">
              <div className="aspect-square rounded-full mb-4 flex items-center justify-center font-bold text-2xl shadow-inner border-2 border-transparent group-hover:border-[#ff90e8] transition-all duration-300 transform group-hover:scale-105" style={{ backgroundColor: '#ff90e8', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
                pink
              </div>
              <span className="font-bold block text-sm uppercase tracking-widest">Pink</span>
              <span className="text-[11px] opacity-60 font-mono">#FF90E8</span>
              <p className="text-[12px] mt-2 opacity-80 leading-relaxed italic">&quot;soft girl meets brat attitude&quot;</p>
            </div>

            {/* White Mockup */}
            <div className="text-center group">
              <div className="aspect-square rounded-full mb-4 flex items-center justify-center font-bold text-2xl shadow-inner border border-gray-100 group-hover:border-gray-300 transition-all duration-300 transform group-hover:scale-105" style={{ backgroundColor: '#ffffff', color: '#000', fontFamily: 'Arial, sans-serif' }}>
                clean
              </div>
              <span className="font-bold block text-sm uppercase tracking-widest">White</span>
              <span className="text-[11px] opacity-60 font-mono">#FFFFFF</span>
              <p className="text-[12px] mt-2 opacity-80 leading-relaxed italic">&quot;clean girl but make it brat&quot;</p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter">Quick Recommendation Guide</h2>
          <div className="mb-24 border-t-4 border-black">
            {/* Row 1 */}
            <div className="py-12 border-b-2 border-black flex flex-col md:flex-row md:items-center gap-6 group transition-all hover:bg-[#89CC04]/5">
              <span className="text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">01</span>
              <div>
                <h4 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-2">The Viral Look</h4>
                <p className="text-[17px] opacity-70 m-0 italic">Best for TikTok avatars. <Link href="/brat-green-generator/" className="hp-link">Go Green</Link>.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="py-12 border-b-2 border-black flex flex-col md:flex-row md:items-center gap-6 group transition-all hover:bg-black/5">
              <span className="text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-black transition-all duration-500">02</span>
              <div>
                <h4 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-2">The Moody Edge</h4>
                <p className="text-[17px] opacity-70 m-0 italic">Best for Discord &amp; X. <Link href="/brat-black-generator/" className="hp-link">Go Black</Link>.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="py-12 border-b-2 border-black flex flex-col md:flex-row md:items-center gap-6 group transition-all hover:bg-[#ff90e8]/5">
              <span className="text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#ff90e8] transition-all duration-500">03</span>
              <div>
                <h4 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-2">The Aesthetic Soul</h4>
                <p className="text-[17px] opacity-70 m-0 italic">Best for Instagram stories. <Link href="/brat-generator-pink/" className="hp-link">Go Pink</Link>.</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="py-12 border-b-2 border-black flex flex-col md:flex-row md:items-center gap-6 group transition-all hover:bg-gray-100">
              <span className="text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-gray-400 transition-all duration-500">04</span>
              <div>
                <h4 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-2">The High Fashion</h4>
                <p className="text-[17px] opacity-70 m-0 italic">Best for minimalists. <Link href="/brat-generator-white/" className="hp-link">Go White</Link>.</p>
              </div>
            </div>
          </div>

          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl text-left tracking-tighter">Brat Text Idea Bank</h2>
          
          <div className="space-y-20 mb-32 max-w-[700px] mx-auto">
            {/* Category: Identities */}
            <div className="flex gap-12 group">
              <div className="w-6 flex-shrink-0 flex items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180 opacity-30 group-hover:opacity-100 transition-opacity">Identities</span>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-l-2 border-black/5 group-hover:border-[#89CC04] pl-10 transition-colors">
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">your name</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">personal branding</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">brat</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">the original vibe</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">main character</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">spotlight energy</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">villain era</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">zero apologies</p>
                </div>
              </div>
            </div>

            {/* Category: Reactions */}
            <div className="flex gap-12 group">
              <div className="w-6 flex-shrink-0 flex items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180 opacity-30 group-hover:opacity-100 transition-opacity">Reactions</span>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-l-2 border-black/5 group-hover:border-black pl-10 transition-colors">
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">whatever</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">the unbothered classic</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">not my problem</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">complete detachment</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">bye</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">instant exit</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">i said what i said</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">no debate</p>
                </div>
              </div>
            </div>

            {/* Category: Abstract */}
            <div className="flex gap-12 group">
              <div className="w-6 flex-shrink-0 flex items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180 opacity-30 group-hover:opacity-100 transition-opacity">Abstract</span>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-l-2 border-black/5 group-hover:border-[#ff90e8] pl-10 transition-colors">
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">365</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">all day everyday</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">2026</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">future classic</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">chaotic</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">pure energy</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-1">forever</h4>
                  <p className="text-xs opacity-50 m-0 uppercase tracking-widest">timeless aesthetic</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-24 sm:py-32 text-center border-t-2 border-black/5 mt-12">
            <h3 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none">Ready to create?</h3>
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

          <h2 className="hp-display-heading mt-32 mb-20 !text-4xl text-left tracking-tighter">Brat PFP for Every Platform</h2>
          
          <div className="space-y-16 mb-32 max-w-[650px] mx-auto">
            {/* TikTok Row */}
            <div className="flex flex-col sm:flex-row items-center gap-10 group">
              <div className="w-32 h-32 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-2xl shadow-inner group-hover:scale-105 transition-transform duration-500" style={{ backgroundColor: '#89CC04', color: '#000' }}>
                brat
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-3">TikTok</h3>
                <p className="text-[16px] opacity-70 leading-relaxed m-0 border-l-4 border-[#89CC04] pl-6 py-1">
                  Use square high-res exports. Green or black backgrounds pop best in TikTok&apos;s interface. Keep text to one word for maximum visibility in tiny comment circles.
                </p>
              </div>
            </div>

            {/* Instagram Row */}
            <div className="flex flex-col sm:flex-row items-center gap-10 group">
              <div className="w-32 h-32 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-2xl shadow-inner group-hover:scale-105 transition-transform duration-500" style={{ backgroundColor: '#ff90e8', color: '#fff' }}>
                aesthetic
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-3">Instagram</h3>
                <p className="text-[16px] opacity-70 leading-relaxed m-0 border-l-4 border-[#ff90e8] pl-6 py-1">
                  Center your text perfectly. Instagram&apos;s circle crop is tight, so avoid placing text near the corners. Pink and white work perfectly for an aesthetic grid.
                </p>
              </div>
            </div>

            {/* Twitter / X Row */}
            <div className="flex flex-col sm:flex-row items-center gap-10 group">
              <div className="w-32 h-32 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-2xl shadow-inner group-hover:scale-105 transition-transform duration-500" style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
                mood
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-3">Twitter / X</h3>
                <p className="text-[16px] opacity-70 leading-relaxed m-0 border-l-4 border-black pl-6 py-1">
                  Black brat pfps are the gold standard for X. The high-contrast look stands out in the fast timeline. Keep it minimal and bold for the best result.
                </p>
              </div>
            </div>
          </div>

          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              {
                question: "What is a brat pfp?",
                answer: <p>A brat pfp is a profile picture made in the brat aesthetic - short lowercase text on a solid color background, inspired by Charli XCX's 2024 album. Common colors are brat green, black, pink, and white.</p>,
              },
              {
                question: "How do I make a brat pfp?",
                answer: <p>Use a free <Link href="/" className="hp-link">brat generator</Link> - type your text, choose your background color, and download a square PNG. No design skills or software needed.</p>,
              },
              {
                question: "What should I write on my brat pfp?",
                answer: <p>Your name, a single mood word, a year, or a short reaction phrase. Keep it under 4 words. Lowercase always. Less is more.</p>,
              },
              {
                question: "What size should a brat pfp be?",
                answer: <p>Square format works for all platforms. 1024x1024px is the minimum recommended size for clean quality. The <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link> exports at high resolution automatically.</p>,
              },
              {
                question: "Which color is best for a brat pfp?",
                answer: <p>Brat green (#89CC04) is the most recognizable. Black is the most dramatic. Pink is the most playful. White is the most minimal. Pick based on your vibe.</p>,
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
