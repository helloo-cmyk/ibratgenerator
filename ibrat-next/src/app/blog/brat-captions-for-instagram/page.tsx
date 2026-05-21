import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";
import InteractiveCaptionGrid from "@/components/InteractiveCaptionGrid";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Brat Captions for Instagram — 60+ Ideas [2026]",
  "description": "60+ brat captions for Instagram — curated for selfies, night-out shots, and full Charli XCX energy. All free to copy. Pair with a brat image and post now.",
  "author": {
    "@type": "Organization",
    "name": "ibratgenerator.com team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ibratgenerator.com"
  },
  "url": "https://ibratgenerator.com/blog/brat-captions-for-instagram/"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes a caption \"brat\" on Instagram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A brat caption is confident, blunt, and doesn't try to be likable. It's lowercase energy, zero over-explanation, and unapologetic phrasing. Think self-aware over polished."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use these captions on TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every caption here works for TikTok, Instagram, X, and Discord. The brat aesthetic crosses every platform — pair any of them with a lime green visual for the full effect."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best caption length for Instagram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under 15 words performs best for engagement on Instagram. The short captions section at the top of this list is the safest zone for reach and saves."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be a Charli XCX fan to use brat captions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Brat as an aesthetic has grown beyond the album. Confident, lowercase, unapologetic energy is the only entry requirement."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get the BRAT green look for my Instagram post?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to ibratgenerator.com, type your caption into the tool, and download the PNG. It gives you the lime green BRAT-style image instantly — free, no sign-up needed."
      }
    }
  ]
};

export default function BratCaptionsForInstagramPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogHero 
        category="IDEAS & INSPO"
        title="Brat Captions for Instagram"
        subtitle="Short, confident, and totally unapologetic — these brat Instagram captions are built for anyone posting on their own terms."
        readTime="5 MIN READ"
        publishDate="May 2026"
        imageSrc="/blog-images/captions-hero.png"
      />

      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">
          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-10">
            They pull from Charli XCX's BRAT aesthetic: lowercase font, blunt phrasing, and zero-apology energy. This list covers every type of brat captions for Instagram — selfies, brat summer shots, night-out photos, and more. Pick one and post it without second-guessing.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Short Brat Captions for Instagram</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            Sometimes one line hits harder than a paragraph. These short captions work for Instagram grids, Stories, and TikTok text overlays. Keep them lowercase — that's the whole point.
          </p>
          <div className="flex gap-12 mb-12 group">
            <InteractiveCaptionGrid 
              captions={[
                "not your soft girl era", "messy but make it fashion", "unbothered. always.",
                "i'm the main character", "rated me out of ten. got an eleven.", "loud by design",
                "this is just how i exist", "your loss, honestly", "the attitude came free",
                "not a phase", "too busy being iconic", "zero apologies, full send",
                "doing it my way, specifically"
              ]} 
              hoverBg="hover:bg-[#89CC04]"
              hoverText="hover:text-black"
            />
          </div>
          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-2 border-black/5 pl-8">
            Short lines work best with bold visuals. Pair them with a BRAT lime green background and blurry lowercase text. Instagram and TikTok will both clock the reference immediately.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Summer Captions for Instagram</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            Brat summer never really ended — it just became a permanent state of mind. These brat summer captions work any time you're feeling chaotic, confident, and done with being likable.
          </p>
          <div className="flex gap-12 mb-12 group">
            <InteractiveCaptionGrid 
              captions={[
                "it's giving brat summer and i won't apologize", "summer started when i walked in", 
                "hot, unhinged, having fun", "brat summer, perpetual edition", "the green era is every era",
                "chaos and sunshine", "tan lines and bad decisions", "i peaked and kept going",
                "summer never ended, actually", "no soft launches this season"
              ]} 
              hoverBg="hover:bg-black"
              hoverText="hover:text-[#89CC04]"
            />
          </div>
          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-2 border-black/5 pl-8">
            Post these to Instagram as a grid caption or TikTok text overlay. They also work as X bio lines or Discord status updates. The brat aesthetic travels well across every platform.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Charli XCX-Inspired Brat Captions</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            These lines capture the BRAT album's energy without lifting lyrics directly. They're self-aware, a little chaotic, and completely unbothered. Use them when the mood is earned.
          </p>
          <div className="flex gap-12 mb-12 group">
            <InteractiveCaptionGrid 
              captions={[
                "365, party mode", "i might be the problem, but at least i'm interesting", 
                "i'm your favorite reference, honestly", "brat and knowing it", "too iconic to be normal",
                "i said what i said", "chaotic but make it art", "everyone's watching, nobody's winning",
                "the main character, obviously", "i didn't come to be subtle"
              ]} 
              hoverBg="hover:bg-[#ff90e8]"
              hoverText="hover:text-black"
            />
          </div>
          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-2 border-black/5 pl-8">
            Charli XCX captions land differently when the visual matches the energy. Use the BRAT lime green, blurry lowercase font, and no-punctuation attitude to complete the look. Instagram recognizes the aesthetic before the caption even loads.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Aesthetic Captions for Selfies</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            Your selfie needs a caption that matches the energy — no explaining yourself, no softening the vibe. These brat aesthetic captions are written for solo shots, mirror pics, and anything where you're clearly the subject.
          </p>
          <div className="flex gap-12 mb-12 group">
            <InteractiveCaptionGrid 
              captions={[
                "shot by me, directed by me, starring me", "i woke up like this. intentionally.", 
                "the face that launched a thousand captions", "soft launch: me", 
                "camera roll when i'm the only one who matters", "born this era", 
                "my vibe is non-negotiable", "low effort, high result", 
                "arrived and everyone noticed", "not seeking approval"
              ]} 
              hoverBg="hover:bg-white border-2 border-black/5"
              hoverText="hover:text-black"
            />
          </div>
          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-2 border-black/5 pl-8">
            These brat quotes for Instagram work best as single-line captions with no hashtags. The confidence carries itself. Keep the post clean — one photo, one line, zero over-explanation.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Captions for Night-Out Photos</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            Night-out photos have their own energy. These lines match chaotic, fun, and slightly unhinged — built for Instagram grids, Discord server albums, and Stories worth screenshotting.
          </p>
          <div className="flex gap-12 mb-12 group">
            <InteractiveCaptionGrid 
              captions={[
                "we didn't go home early", "this is what happens when you don't cancel", 
                "the night wasn't even trying and still won", "bad decisions, great photos", 
                "we said one drink", "blurry photo, unforgettable night", 
                "if you weren't there you already missed it", "dancing like nobody's watching, because i don't care", 
                "the aftermath was worth it", "peak chaos, zero regrets"
              ]} 
              hoverBg="hover:bg-black"
              hoverText="hover:text-white"
            />
          </div>
          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-2 border-black/5 pl-8">
            Group shots, solo bathroom-mirror pics, or blurry action frames — any of these work. Post to Instagram before the night's over while the energy is still in the room.
          </p>

          <h2 className="hp-display-heading mt-32 mb-12 !text-4xl text-left tracking-tighter">How to Make Your Caption Look Brat</h2>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            A great caption works harder when the visual matches it. The BRAT aesthetic is specific: lime green background, lowercase blurry text, no polish, no perfection. You can recreate it for free using the brat text generator at ibratgenerator.com.
          </p>
          <p className="hp-body-text mb-12 text-[17px] sm:text-[18px] opacity-70">
            No design skills needed. No account required. No watermark on the download.
          </p>

          <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-6">Create the BRAT-Style Image</h3>
          <ol className="list-decimal list-inside space-y-4 mb-24 text-[17px] sm:text-[18px] opacity-70 font-medium">
            <li>Pick a caption from this list</li>
            <li>Go to ibratgenerator.com</li>
            <li>Type or paste your caption into the tool</li>
            <li>Download the PNG</li>
            <li>Post to Instagram, TikTok, or use it as a Story overlay</li>
          </ol>
          <p className="hp-body-text mb-24 text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-2 border-black/5 pl-8">
            The visual and the caption together hit harder than either one alone. That's the whole formula.
          </p>

          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              {
                question: "What makes a caption \"brat\" on Instagram?",
                answer: <p>A brat caption is confident, blunt, and doesn't try to be likable. It's lowercase energy, zero over-explanation, and unapologetic phrasing. Think self-aware over polished.</p>
              },
              {
                question: "Can I use these captions on TikTok?",
                answer: <p>Yes. Every caption here works for TikTok, Instagram, X, and Discord. The brat aesthetic crosses every platform — pair any of them with a lime green visual for the full effect.</p>
              },
              {
                question: "What's the best caption length for Instagram?",
                answer: <p>Under 15 words performs best for engagement on Instagram. The short captions section at the top of this list is the safest zone for reach and saves.</p>
              },
              {
                question: "Do I need to be a Charli XCX fan to use brat captions?",
                answer: <p>No. Brat as an aesthetic has grown beyond the album. Confident, lowercase, unapologetic energy is the only entry requirement.</p>
              },
              {
                question: "How do I get the BRAT green look for my Instagram post?",
                answer: <p>Go to ibratgenerator.com, type your caption into the tool, and download the PNG. It gives you the lime green BRAT-style image instantly — free, no sign-up needed.</p>
              }
            ]}
          />

          <div className="pt-16 pb-8 sm:pt-24 sm:pb-12 text-center border-t-2 border-black/5 mt-12">
            <p className="hp-body-text mb-0 text-[17px] sm:text-[18px] opacity-70">
              Ready to pair your caption with the full BRAT visual? Use the <Link href="/" className="hp-link">brat generator</Link> to turn any line from this list into a free, downloadable lime green image. Post it to Instagram or TikTok in under a minute — no design skills, no account, no watermark.
            </p>
          </div>

        </div>
      </article>
    </main>
  );
}
