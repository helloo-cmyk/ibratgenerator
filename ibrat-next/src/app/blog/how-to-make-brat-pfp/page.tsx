import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "How to Make a Brat PFP for TikTok, Instagram, and Discord",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/how-to-make-brat-pfp/",
  },
  description:
    "Learn how to make a brat PFP for TikTok, Instagram, and Discord. Use our free brat pfp maker to create the iconic neon green aesthetic in seconds.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the brat pfp maker free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our tool is 100% free for everyone to use. You can generate and download as many images as you want without paying a cent, watching intrusive ads, or creating an account.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a brat PFP as my profile picture commercially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tool is designed for personal use, fan expression, and creative experimentation. Since the style is inspired by modern popular culture, we recommend using it for your personal social media profiles and fan accounts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best brat PFP size for Discord?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discord recommends a minimum of 128x128px, but it is much better to upload a larger 1:1 image like 1024px or 1500px. Our brat maker provides high-resolution exports that fit perfectly.",
      },
    },
    {
      "@type": "Question",
      name: "Does the brat generator work on iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The tool is fully optimized for mobile browsers like Safari and Chrome. You can type, customize your colors, and save your PFP directly to your iPhone camera roll in seconds.",
      },
    },
  ],
};

export default function HowToMakeBratPfpPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="TUTORIAL"
        title="How to Make a Brat PFP for TikTok, Instagram, and Discord"
        subtitle="Learn how to create a custom brat-style profile picture for TikTok, Instagram, Discord, and X. Step-by-step guide using the free brat maker tool."
        readTime="7 MIN READ"
        author="ibratgenerator"
        publishDate="May 04, 2026"
        imageSrc="/blog-images/pfp-hero-v2.png"
        imageAlt="brat profile picture example, bold lowercase text on neon green background"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          
          <div className="border-b-4 border-black pb-16 mb-24 group">
            <h2 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">The Manual</h2>
            <p className="hp-body-text mb-8 text-[18px] sm:text-[20px] font-medium leading-relaxed italic">
              A brat PFP is a profile picture inspired by the iconic 2024 album cover style that took over the internet. It usually features bold, lowercase text on a bright neon green background, though other colors like pink and white are also popular. This look went viral on TikTok and Instagram because it is raw, messy, and unapologetically cool.
            </p>
            <p className="hp-body-text text-[17px] opacity-70 leading-relaxed italic">
              It represents a specific attitude of being authentic and a bit rebellious. Users love it because it shows off a &quot;brat&quot; personality without needing a professional camera or complex design skills. You can make your own using the <Link href="/brat-maker/" className="hp-link">brat maker</Link> to join the global trend instantly.
            </p>
          </div>

          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Dimensions</span>
            </div>
            <div className="flex-1 border-l-4 border-black pl-12 py-2">
              <h2 className="hp-display-heading mb-10 !text-3xl uppercase tracking-tighter">Platform Specs</h2>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-zinc-50 p-6 border border-black/5">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-1">TikTok</span>
                  <span className="text-xl font-bold italic tracking-tighter">200 x 200 PX</span>
                </div>
                <div className="bg-zinc-50 p-6 border border-black/5">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-1">Instagram</span>
                  <span className="text-xl font-bold italic tracking-tighter">110 x 110 PX</span>
                </div>
                <div className="bg-zinc-50 p-6 border border-black/5">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-1">Discord</span>
                  <span className="text-xl font-bold italic tracking-tighter">128 x 128 PX</span>
                </div>
                <div className="bg-zinc-50 p-6 border border-black/5">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-1">Twitter / X</span>
                  <span className="text-xl font-bold italic tracking-tighter">400 x 400 PX</span>
                </div>
              </div>
              <p className="hp-body-text text-[17px] opacity-70 leading-relaxed font-medium italic">
                While these sizes vary, we recommend using a 1:1 aspect ratio at 1500px for all platforms. This ensures your image stays high-quality and crisp when you upload it to any site. High resolution is key because it prevents blurriness on modern retina displays.
              </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl uppercase tracking-tighter">Five Steps to Brat</h2>
          
          <div className="space-y-12 mb-32">
            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">01</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Open Tool</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Launch the generator on your phone or computer browser at ibratgenerator.com.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">02</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Type Text</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Enter your name, a username, or a short vibe word into the text box. Keep it lowercase.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">03</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Set Color</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Choose your background color. The classic neon green is #C1FF00, but pink and black are also popular.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">04</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">Pick Ratio</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Set the aspect ratio to 1:1 to ensure it fits perfectly into social media profile circles.</p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 group">
              <span className="text-5xl sm:text-7xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-[#89CC04] transition-all duration-500">05</span>
              <div className="pt-2 border-l-2 border-black/5 pl-8 group-hover:border-[#89CC04] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2 text-[#89CC04]">Download PNG</h3>
                <p className="text-[17px] opacity-70 leading-relaxed m-0">Hit the download button to save your custom high-quality PNG file to your device instantly.</p>
              </div>
            </div>
          </div>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
            Using a dedicated <strong>brat pfp maker</strong> is the fastest way to get the signature "crushed" font look that defines the aesthetic. You don't need to learn Photoshop or wrestle with complex software settings. The tool handles the layout, spacing, and font weight for you so you can focus on finding the right words. Once downloaded, just upload the file to your profile settings on your favorite app and you are ready to go.
          </p>

          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl uppercase tracking-tighter">Color Selection</h2>
          <div className="flex gap-12 mb-32 group">
            <div className="w-12 flex-shrink-0 flex items-start pt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Palette</span>
            </div>
            <div className="flex-1 border-l-4 border-black pl-12 py-2">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div className="group/swatch">
                    <div className="h-32 bg-[#C1FF00] mb-4 border border-black/5 group-hover/swatch:h-40 transition-all"></div>
                    <h4 className="text-xl font-black italic tracking-tighter uppercase mb-1">Classic Neon</h4>
                    <p className="text-sm opacity-60 m-0">#C1FF00 - The Viral Standard</p>
                  </div>
                  <div className="group/swatch">
                    <div className="h-32 bg-[#FF90E8] mb-4 border border-black/5 group-hover/swatch:h-40 transition-all"></div>
                    <h4 className="text-xl font-black italic tracking-tighter uppercase mb-1">Coquette Brat</h4>
                    <p className="text-sm opacity-60 m-0">#FF90E8 - Playful & Aesthetic</p>
                  </div>
                  <div className="group/swatch">
                    <div className="h-32 bg-[#0A0A0A] mb-4 border border-black/5 group-hover/swatch:h-40 transition-all"></div>
                    <h4 className="text-xl font-black italic tracking-tighter uppercase mb-1">Dark Mode</h4>
                    <p className="text-sm opacity-60 m-0">#0A0A0A - Industrial Energy</p>
                  </div>
                  <div className="group/swatch">
                    <div className="h-32 bg-[#FFFFFF] mb-4 border border-black/10 group-hover/swatch:h-40 transition-all"></div>
                    <h4 className="text-xl font-black italic tracking-tighter uppercase mb-1">Minimalist</h4>
                    <p className="text-sm opacity-60 m-0">#FFFFFF - High Fashion Clean</p>
                  </div>
               </div>
               <p className="hp-body-text text-[17px] opacity-70 leading-relaxed font-medium italic">
                 Color choice is the most important part of the brat aesthetic. The classic choice is the famous neon green, which works best on TikTok and Instagram to grab immediate attention. However, the trend has evolved to include many other variations like coquette pink or high-fashion white.
               </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-32 mb-16 !text-4xl uppercase tracking-tighter">Idea Bank</h2>
          <div className="bg-zinc-50 p-12 mb-32 border-2 border-black/5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10 text-center">
              <div className="py-4 border-b-2 border-black/10 font-black italic tracking-tighter text-xl uppercase">Icon</div>
              <div className="py-4 border-b-2 border-black/10 font-black italic tracking-tighter text-xl uppercase">Messy</div>
              <div className="py-4 border-b-2 border-black/10 font-black italic tracking-tighter text-xl uppercase">Real</div>
              <div className="py-4 border-b-2 border-black/10 font-black italic tracking-tighter text-xl uppercase">360</div>
              <div className="py-4 border-b-2 border-black/10 font-black italic tracking-tighter text-xl uppercase">Apple</div>
              <div className="py-4 border-b-2 border-black/10 font-black italic tracking-tighter text-xl uppercase">So Julia</div>
            </div>
            <p className="hp-body-text text-[17px] opacity-70 leading-relaxed font-medium italic text-center">
              Not sure what text to use? The best profile pictures use short, punchy words that fit on one or two lines. Try your first name for a personal touch, or use a vibe word. Keep your text lowercase for the most authentic and &quot;raw&quot; style.
            </p>
          </div>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Frequently Asked Questions</h2>
          <FAQAccordion
            title=""
            intro=""
            items={[
              { 
                question: "Is the brat pfp maker free?", 
                answer: <p>Yes, our tool is 100% free for everyone to use. You can generate and download as many images as you want without paying a cent, watching intrusive ads, or creating an account. We believe that creative expression should be accessible to everyone who wants to join the trend.</p> 
              },
              { 
                question: "Can I use a brat PFP as my profile picture commercially?", 
                answer: <p>Our tool is designed for personal use, fan expression, and creative experimentation. Since the style is inspired by modern popular culture, we recommend using it for your personal social media profiles, fan accounts, and community groups. For commercial use, it is always best to consult with a legal professional regarding intellectual property.</p> 
              },
              {
                question: "What is the best brat PFP size for Discord?",
                answer: <p>Discord recommends a minimum of 128x128px, but it is much better to upload a larger 1:1 image like 1024px or 1500px. Our <Link href="/brat-maker/" className="hp-link">brat maker</Link> provides high-resolution exports that Discord will automatically scale down without losing clarity. This prevents your profile picture from looking pixelated when people view your full profile.</p>
              },
              {
                question: "Does the brat generator work on iPhone?",
                answer: <p>Absolutely. The tool is fully optimized for mobile browsers like Safari and Chrome. You can type, customize your colors, and save your PFP directly to your iPhone camera roll in seconds. It is the easiest way to update your look while you are on the go. Whether you are on Android or iOS, the experience is smooth and fast.</p>
              }
            ]}
          />

          <p className="hp-body-text mt-16 mb-12 text-[17px] sm:text-[18px] font-bold">
            Create your brat PFP now using the free <Link href="/brat-maker/" className="hp-link">brat maker</Link>, with no signup and no watermark.
          </p>

        </div>
      </article>

    </main>
  );
}
