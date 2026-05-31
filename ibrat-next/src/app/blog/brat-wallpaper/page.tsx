import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: "Brat Wallpaper - Make Your Own Free Brat Phone Wallpaper",
  description: "Make a custom brat wallpaper for your phone in seconds. Free brat wallpaper maker - type your text, pick your color, download PNG. No signup, no watermark.",
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-wallpaper/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I make a brat wallpaper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the free brat generator, type your text, set the aspect ratio to 9:16 for phone wallpaper, pick your background color, and download a PNG. The whole process takes under 60 seconds."
      }
    },
    {
      "@type": "Question",
      "name": "What size is a brat wallpaper for iPhone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "iPhone wallpapers are 1170x2532px for iPhone 12 and newer. Set your aspect ratio to 9:16 and resolution to 2048px or higher in the brat generator for a sharp result."
      }
    },
    {
      "@type": "Question",
      "name": "What is the brat wallpaper color?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official brat green is #89CC04. Black (#0a0a0a) and pink (#ff90e8) are also popular brat wallpaper colors. All three are available as presets."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a brat wallpaper on Android?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Download the PNG and set it as your home screen or lock screen wallpaper in your phone settings. Works on all Android devices."
      }
    },
    {
      "@type": "Question",
      "name": "Is the brat wallpaper maker free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Completely free - no watermark, no account, no limits. Download as many wallpapers as you want."
      }
    }
  ]
};

export default function BratWallpaperPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="TUTORIAL"
        title="Brat Wallpaper - Make Your Own Free Brat Phone Wallpaper"
        subtitle=""
        readTime="4 MIN READ"
        author="Ibrat Team"
        publishDate="May 2026"
        imageSrc="/blog-images/wallpaper-hero.svg"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          
          <p className="hp-body-text mb-16 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-10">
            Your lock screen and home screen are the first things you see every time you pick up your phone. A brat wallpaper makes that moment feel intentional - one word, your color, your aesthetic. No stock photos, no downloaded images from Pinterest, nothing that someone else made. This guide shows you exactly how to make your own brat wallpaper in under a minute, for free, on any device.
          </p>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">What Makes a Good Brat Wallpaper</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px] opacity-70 leading-relaxed">
            The key to a perfect wallpaper is a simple formula: solid color + short text. Stick to 1 to 4 words maximum - less is more. The text should be centered and large enough to read at a glance on your lock screen.
          </p>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px] opacity-70 leading-relaxed">
            High contrast is essential - your text must pop against the background color. Avoid all clutter: no stickers, no borders, no extra elements. Always use lowercase letters, as uppercase breaks the core aesthetic rules. The less designed it looks, the more accurate it is to the <Link href="/blog/brat-aesthetic-guide/" className="hp-link">brat aesthetic</Link>.
          </p>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">Best Brat Wallpaper Colors</h2>
          <div className="space-y-8 mb-16">
            <div className="bg-zinc-50 p-8 border-2 border-black/5">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">Brat Green Wallpaper (#89CC04)</h3>
              <p className="hp-body-text text-[16px] opacity-70 leading-relaxed m-0">
                The most recognizable brat color. It brings high energy and stands out on any device. Best text ideas: your name, "brat", "whatever", "2026". Works well on both dark and light mode UI. Use the <Link href="/brat-green-generator/" className="hp-link">brat green generator</Link>.
              </p>
            </div>
            
            <div className="bg-zinc-50 p-8 border-2 border-black/5">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">Black Brat Wallpaper (#0a0a0a)</h3>
              <p className="hp-body-text text-[16px] opacity-70 leading-relaxed m-0">
                Dark mode friendly - blends seamlessly with your phone UI. Best for a moody, edgy aesthetic. Best text ideas: "tired", "unbothered", "villain era", your name. This is especially dramatic on OLED lock screens. Use the <Link href="/brat-black-generator/" className="hp-link">black brat generator</Link>.
              </p>
            </div>
            
            <div className="bg-zinc-50 p-8 border-2 border-black/5">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">Pink Brat Wallpaper (#ff90e8)</h3>
              <p className="hp-body-text text-[16px] opacity-70 leading-relaxed m-0">
                A softer, more playful look that is extremely popular for home screens on iOS. Best text ideas: "girly", "not serious", your name, "pink". Try it in the <Link href="/brat-generator-pink/" className="hp-link">pink brat generator</Link>.
              </p>
            </div>
            
            <div className="bg-zinc-50 p-8 border-2 border-black/5">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">White Brat Wallpaper (#ffffff)</h3>
              <p className="hp-body-text text-[16px] opacity-70 leading-relaxed m-0">
                A clean and minimal look that is perfect for light mode phone UI. Best text ideas: "clean", "quiet", your name, "minimal". Try it out in the <Link href="/brat-generator-white/" className="hp-link">white brat generator</Link>.
              </p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">What to Write on Your Brat Wallpaper</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px] opacity-70 leading-relaxed">
            Your name is always a classic choice - it makes your device personal and recognizable every time you unlock it. You could also choose a single mood like "tired", "whatever", "unbothered", or "chaos". 
          </p>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px] opacity-70 leading-relaxed">
            Many people use a year like "2026", "forever", or "since 2024". A short reaction phrase also works perfectly: "not my problem" or "i said what i said". A lyric fragment is great, but remember to keep it to 3 words maximum. Finally, you can write absolutely nothing - just a blank solid color. This is arguably the most brat thing possible.
          </p>
          <p className="hp-body-text mb-16 text-[17px] sm:text-[18px] font-bold italic leading-relaxed">
            Keep it under 4 words. Your wallpaper is the last thing you see before you sleep and the first thing you see when you wake up. Make it count.
          </p>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">How to Make a Brat Wallpaper for Your Phone</h2>
          <div className="space-y-6 mb-8">
            {[
              { step: "1.", text: "Open the brat generator on your phone browser." },
              { step: "2.", text: "Type your text in the input field - keep it under 4 words." },
              { step: "3.", text: "Pick your background color - green, black, pink, or white." },
              { step: "4.", text: "Set aspect ratio to 9:16 - this is the phone wallpaper format." },
              { step: "5.", text: "Set resolution to 2048px for sharp quality on high-res screens." },
              { step: "6.", text: "Tap Save PNG to download." },
              { step: "7.", text: "Go to your phone Settings - Wallpaper - Choose a new wallpaper." },
              { step: "8.", text: "Select the downloaded PNG and set as lock screen, home screen, or both." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="text-[17px] sm:text-[18px] font-black">{item.step}</span>
                <p className="text-[17px] sm:text-[18px] opacity-70 m-0">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="hp-body-text mb-16 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic">
            The <Link href="/" className="hp-link">brat generator</Link> works in any mobile browser - no app download needed.
          </p>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">Lock Screen vs Home Screen - Which Looks Better</h2>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px] opacity-70 leading-relaxed">
            On the lock screen, your text is much more visible because there is less UI clutter covering it. On the home screen, app icons will cover parts of the wallpaper - it is best to keep your text centered in the bottom third if possible.
          </p>
          <p className="hp-body-text mb-6 text-[17px] sm:text-[18px] opacity-70 leading-relaxed">
            iOS crops differently than Android - center your text and keep margins generous to be safe. For both screens, you can use the same wallpaper for a consistent aesthetic or different colors for variety. To ensure safe margins, enable "show safe margins" in the brat generator to see where content is safe from cropping.
          </p>

          <h2 className="hp-display-heading mt-24 mb-16 !text-4xl text-left tracking-tighter">Brat Wallpaper Ideas by Vibe</h2>
          <ul className="space-y-6 mb-12 list-none p-0">
            <li className="text-[17px] sm:text-[18px] opacity-80 leading-relaxed"><strong className="font-bold">Main Character</strong> - #89CC04 background, your name centered, large font.</li>
            <li className="text-[17px] sm:text-[18px] opacity-80 leading-relaxed"><strong className="font-bold">Villain Era</strong> - black background, 'villain era' in white, slightly blurred for effect.</li>
            <li className="text-[17px] sm:text-[18px] opacity-80 leading-relaxed"><strong className="font-bold">Soft Life</strong> - pink background, 'soft' or your name, minimal spacing.</li>
            <li className="text-[17px] sm:text-[18px] opacity-80 leading-relaxed"><strong className="font-bold">Minimal</strong> - white background, single word, lots of breathing room.</li>
            <li className="text-[17px] sm:text-[18px] opacity-80 leading-relaxed"><strong className="font-bold">Chaotic Good</strong> - green background, 'chaos' or 'whatever', maximum font size.</li>
            <li className="text-[17px] sm:text-[18px] opacity-80 leading-relaxed"><strong className="font-bold">Year Wallpaper</strong> - black background, '2026' in white, full screen text.</li>
          </ul>
          <p className="hp-body-text mb-32 text-[17px] sm:text-[18px] font-bold italic leading-relaxed">
            None of these require design skills. Open the tool, type the text, set 9:16, download. Go to the <Link href="/brat-text-generator/" className="hp-link">brat text generator</Link>.
          </p>

          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              { question: "How do I make a brat wallpaper?", answer: <p>Open the free brat generator, type your text, set the aspect ratio to 9:16 for phone wallpaper, pick your background color, and download a PNG. The whole process takes under 60 seconds.</p> },
              { question: "What size is a brat wallpaper for iPhone?", answer: <p>iPhone wallpapers are 1170x2532px for iPhone 12 and newer. Set your aspect ratio to 9:16 and resolution to 2048px or higher in the brat generator for a sharp result.</p> },
              { question: "What is the brat wallpaper color?", answer: <p>The official brat green is #89CC04. Black (#0a0a0a) and pink (#ff90e8) are also popular brat wallpaper colors. All three are available as presets.</p> },
              { question: "Can I use a brat wallpaper on Android?", answer: <p>Yes. Download the PNG and set it as your home screen or lock screen wallpaper in your phone settings. Works on all Android devices.</p> },
              { question: "Is the brat wallpaper maker free?", answer: <p>Yes. Completely free - no watermark, no account, no limits. Download as many wallpapers as you want.</p> }
            ]}
          />

        </div>
      </article>
    </main>
  );
}
