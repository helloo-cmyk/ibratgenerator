import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata: Metadata = {
  title: "Brat Names List - Your Name in Brat Style [2026]",
  description: "See what your name looks like in brat style. Browse 100+ brat names with the blurry green aesthetic. Free brat name generator included. No signup needed.",
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-names-list/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Brat Names List - What Your Name Looks Like in Brat Style",
  "description": "See what your name looks like in brat style. Browse 100+ brat names with the blurry green aesthetic.",
  "author": {
    "@type": "Organization",
    "name": "iBrat Generator Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "iBrat Generator",
    "url": "https://ibratgenerator.com"
  },
  "datePublished": "2026-06-07",
  "dateModified": "2026-06-07",
  "url": "https://ibratgenerator.com/blog/brat-names-list/"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a brat name?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A brat name is any name rendered in the brat aesthetic style - lowercase Arial text with a Gaussian blur on a #8ACE00 green background. The style comes from Charli XCX's brat album cover design."
      }
    },
    {
      "@type": "Question",
      "name": "Can I generate my own brat name?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The free brat name generator on this site creates a downloadable PNG of any name in the brat aesthetic. No signup or account needed - type your name and download instantly."
      }
    },
    {
      "@type": "Question",
      "name": "What font does brat use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brat uses Arial - a standard system font available on every computer. The distinctive look comes from the blur effect applied on top of the font, not from a special typeface."
      }
    },
    {
      "@type": "Question",
      "name": "What is the brat color used for names?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The brat color is #8ACE00 - a yellow-green hex code. All official brat visuals use this exact shade as the background color."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use my brat name as a profile picture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Download the PNG from the brat name generator and set it directly as your profile picture on Instagram, TikTok, Discord, or any platform. The square format works on all of them."
      }
    }
  ]
};

export default function BratNamesListPage() {
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
        category="NAMES"
        title="Brat Names List - What Your Name Looks Like in Brat Style"
        subtitle="See what your name looks like in brat style. Browse 100+ brat names with the blurry green aesthetic."
        readTime="4 MIN READ"
        author="iBrat Generator Team"
        publishDate="June 07, 2026"
        imageSrc="/blog-images/brat-names-hero.svg" 
        imageAlt="brat names list visual example"
      />

      <article className="px-4 pt-12 max-w-[720px] mx-auto">
        <div className="prose-container">

          <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic border-l-4 border-black/5 pl-8 mb-12">
            The brat aesthetic is built on one thing: your name in blurry green Arial text on a neon background. This list shows 100+ popular names already rendered in brat typography style - so you can see exactly what yours looks like before generating it. Each name below follows the same visual rules as Charli XCX's original brat album: lowercase, blurred edges, #8ACE00 green. Use the free <Link href="/brat-name-generator/">brat name generator</Link> to create your own instantly.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">What Makes a Name "Brat Style"?</h2>
          <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic mb-12">
            A brat-style name uses three specific rules. First: always lowercase - no capitals, even for proper names. Second: the Arial font with intentional blur applied - this mimics a low-budget photocopy effect. Third: the text sits on the official brat green background, hex code #8ACE00. That combination is what makes any word instantly recognizable as part of the brat aesthetic. The blur is not an accident - Charli XCX's art director used it deliberately to create a cheap, underground zine quality. Any name follows these same three rules.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Names List - Girls</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            {["emily", "sophia", "olivia", "emma", "ava", "isabella", "mia", "charlotte", "amelia", "harper", "luna", "aria", "chloe", "layla", "penelope", "riley", "zoey", "nora", "lily", "eleanor", "hannah", "addison", "aubrey", "ellie", "stella", "natalie", "zoe", "leah", "hazel", "violet", "aurora", "savannah", "audrey", "brooklyn", "bella", "claire", "skylar", "lucy", "paisley", "everly"].map(name => (
              <p key={name} className="brat-name">{name}</p>
            ))}
          </div>
          <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic mb-12 border-l-4 border-[#8ACE00] pl-6">
            Don't see your name? The brat name generator works for any name - type it in and generate.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Names List - Boys</h2>
          <div className="flex flex-wrap gap-4 mb-12">
            {["liam", "noah", "oliver", "elijah", "james", "aiden", "lucas", "mason", "ethan", "logan", "jackson", "sebastian", "jack", "owen", "theodore", "henry", "leo", "daniel", "alexander", "william", "benjamin", "samuel", "ryan", "nathan", "luke", "caleb", "julian", "gabriel", "isaac", "adam"].map(name => (
              <p key={name} className="brat-name">{name}</p>
            ))}
          </div>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Names List - Aesthetic & Unique Names</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            {["luna", "sage", "river", "aurora", "eden", "nova", "reign", "winter", "rebel", "storm", "quinn", "raven", "vale", "blaze", "grey", "ash", "rain", "fox", "onyx", "zero"].map(name => (
              <p key={name} className="brat-name">{name}</p>
            ))}
          </div>
          <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic mb-12 border-l-4 border-[#8ACE00] pl-6">
            These names work especially well in this style because they are short, lowercase, and carry attitude. Try them in the <Link href="/">brat generator</Link> to see the full visual effect.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">How to Use Your Brat Name</h2>
          <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic mb-12">
            Your brat name works best as a profile picture, TikTok watermark, or Instagram story overlay. Download the PNG from the generator and set it as your profile picture - this is the most popular use. For TikTok, overlay your brat name in the corner of videos as a watermark. For Instagram stories, use it as a text sticker replacement. The transparent PNG format means it layers over any background. Keep the green background for maximum brat impact - removing it loses the aesthetic entirely.
          </p>

          <h2 className="hp-display-heading mt-24 mb-12 !text-4xl text-left tracking-tighter uppercase">Brat Typography - Why the Blur?</h2>
          <p className="hp-body-text text-[17px] sm:text-[18px] opacity-70 leading-relaxed italic mb-24">
            The blur in this typography is called a Gaussian blur - a standard photo editing effect applied at low intensity. Charli XCX's team applied it to the Arial font to mimic the look of a photocopied zine from the 1990s underground music scene. It makes high-resolution digital text look lo-fi and handmade. This is intentional anti-polish - brat's entire visual identity rejects the clean, perfect aesthetic of mainstream pop. The blur says the music is too good to need professional packaging.
          </p>

          <FAQAccordion
            title="Frequently Asked Questions"
            intro=""
            items={[
              {
                question: "What is a brat name?",
                answer: <p>A brat name is any name rendered in the brat aesthetic style - lowercase Arial text with a Gaussian blur on a #8ACE00 green background. The style comes from Charli XCX's brat album cover design.</p>
              },
              {
                question: "Can I generate my own brat name?",
                answer: <p>Yes. The free brat name generator on this site creates a downloadable PNG of any name in the brat aesthetic. No signup or account needed - type your name and download instantly.</p>
              },
              {
                question: "What font does brat use?",
                answer: <p>Brat uses Arial - a standard system font available on every computer. The distinctive look comes from the blur effect applied on top of the font, not from a special typeface.</p>
              },
              {
                question: "What is the brat color used for names?",
                answer: <p>The brat color is #8ACE00 - a yellow-green hex code. All official brat visuals use this exact shade as the background color.</p>
              },
              {
                question: "Can I use my brat name as a profile picture?",
                answer: <p>Yes. Download the PNG from the brat name generator and set it directly as your profile picture on Instagram, TikTok, Discord, or any platform. The square format works on all of them.</p>
              }
            ]}
          />

          <div className="mt-16 text-center border-t border-black/5 pt-12">
            <p className="hp-body-text text-[20px] font-medium italic mb-6">
              Ready to see your name in the brat aesthetic? Use the free <Link href="/brat-name-generator/">brat name generator</Link> - no signup, download PNG instantly.
            </p>
          </div>

          <p className="hp-body-text mt-16 text-[14px] text-zinc-500 italic">
            Written by iBrat Generator Team | Updated: June 2026
          </p>

        </div>
      </article>
    </main>
  );
}
