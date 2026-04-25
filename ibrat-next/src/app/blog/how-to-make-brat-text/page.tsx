import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BlogHero from "@/components/BlogHero";

export const metadata = {
  title: {
    absolute: "How to Make Brat Text – Step-by-Step Tutorial",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/how-to-make-brat-text/",
  },
  description:
    "Follow our simple 3-step guide to make your own Brat text graphics. Learn the best way to generate bold typography for social media.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I make Brat text for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can use an online Brat text generator to type your phrase and download the styled image instantly for free."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to install any software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you can create the graphics directly in your browser without any downloads or apps."
      }
    }
  ]
};

export default function HowToMakeBratTextPage() {
  return (
    <main className="hp-root pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogHero 
        category="TUTORIAL"
        title="How to Make Brat Text (Step-by-Step)"
        subtitle="The practical guide to creating viral-ready typographic graphics."
        readTime="3 MIN READ"
        imageSrc="/examples/brat-text-ex-1.png"
      />

      {/* ── ARTICLE BODY ── */}
      <article className="px-4 pt-12 max-w-[720px] mx-auto">

        <div className="prose-container">
          <p className="hp-body-text mb-10 text-[17px] sm:text-[18px]">
            Making your own Brat-style graphics is easy. Follow this practical guide to create bold, viral-ready text in seconds using our specialized tools.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">How to Make Brat Text (Step-by-Step)</h2>
          <div className="hp-body-text space-y-6 mb-12">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--hp-accent)] text-black flex items-center justify-center font-bold">1</span>
              <p className="text-[17px] sm:text-[18px]"><strong>Enter Your Text:</strong> Type your desired word or phrase into the editor box.</p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--hp-accent)] text-black flex items-center justify-center font-bold">2</span>
              <p className="text-[17px] sm:text-[18px]"><strong>Select Your Style:</strong> Choose from classic neon green, black, white, or pink aesthetic themes.</p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--hp-accent)] text-black flex items-center justify-center font-bold">3</span>
              <p className="text-[17px] sm:text-[18px]"><strong>Download:</strong> Click the download button to save your high-resolution PNG image instantly.</p>
            </div>
          </div>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Best Way to Create Brat Text Online</h2>
          <p className="hp-body-text mb-8 text-[17px] sm:text-[18px]">
            The most efficient way to achieve the look is by using a dedicated web tool. Instead of struggling with font files and complex image editors, our generator automates the spacing, blur, and color settings for you.
          </p>
          <p className="hp-body-text mb-12">
            <Link href="/brat-text-generator/" className="hp-link text-[18px] font-bold">
              Use this Brat Text Generator to create your text instantly →
            </Link>
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Tips for Better Brat Text</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
            <li>Keep it lowercase for the authentic &quot;anti-design&quot; look.</li>
            <li>Use short phrases (1-3 words) for maximum visual impact.</li>
            <li>Avoid cluttered backgrounds; stick to solid high-contrast colors.</li>
            <li>Experiment with line breaks if using more than one word.</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Common Mistakes</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
            <li>Writing too much text, which makes the final font size too small to read.</li>
            <li>Using low-contrast colors that blend into the background.</li>
            <li>Over-complicating the design with unnecessary icons or stickers.</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">FAQ</h2>
          <div className="mt-8">
            <FAQAccordion
              title="Quick Questions"
              intro="Actionable answers for fast creation."
              items={[
                { 
                  question: "Do I need to download an app?", 
                  answer: <p>No, the tool works directly in your mobile or desktop browser with no installation required.</p> 
                },
                { 
                  question: "Is the generator free to use?", 
                  answer: <p>Yes, you can create and download as many graphics as you like for free.</p> 
                },
                {
                  question: "Can I use the images on social media?",
                  answer: <p>Absolutely. The exported PNGs are optimized for Instagram, TikTok, and X.</p>
                }
              ]}
            />
          </div>
        </div>
      </article>

    </main>
  );
}
