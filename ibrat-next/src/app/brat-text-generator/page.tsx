import Link from "next/link";
import Image from "next/image";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

const BRAT_TEXT_EXAMPLES = [
  { src: "/examples/brat2.png", phrase: "stay toxic", alt: "brat text generator example stay toxic" },
  { src: "/examples/brat1.png", phrase: "brat summer", alt: "brat text png example brat summer" },
  { src: "/examples/brat3.png", phrase: "main character energy", alt: "brat text maker example main character energy" },
  { src: "/examples/brat5.png", phrase: "delulu mode activated", alt: "brat text png example delulu mode activated" },
  { src: "/examples/brat6.png", phrase: "hot girl music", alt: "brat text generator example hot girl music" },
  { src: "/examples/brat4.png", phrase: "chaotic good", alt: "brat text png example chaotic good" },
];

export const metadata = {
  title: {
    absolute: "Brat Text Generator – Create Brat Text PNG Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-text-generator/",
  },
  description: "Generate brat-style text and download PNG images instantly. Perfect for captions, memes, and aesthetic posts.",
};

export default function BratTextGeneratorPage() {
  return (
    <main className="space-y-10">

      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-6 mb-3 mx-auto">Brat Text Generator</h1>
            <p className="mb-5">
              This tool focuses on creating brat-style text and captions. If you want to adjust typography or font styling, use the <Link href="/brat-font-generator/" className="text-primary hover:underline">brat font generator</Link> instead.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      <section className="-mt-4 mb-10 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-base text-foreground/80">
          Looking for all features? Try the <Link href="/" className="text-primary underline hover:no-underline font-semibold">free brat generator</Link> to create memes, images, and more in one place.
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">What is Brat Text?</h2>
          <p className="mb-4">
            Brat text style is the minimalist typography tied to the Brat aesthetic—bold sans-serif type, clean spacing, and little or no decoration. It became iconic through the Charli XCX–inspired Brat era and is used for brat captions, album-style titles, and short statement one-liners that keep text front and center.
          </p>
          <p className="mb-4">
            The look is intentionally stripped-down: no script fonts, no heavy effects—just clear, confident letterforms that read well at any size. This brat text maker recreates that style so you can make brat captions, brat album text, and album-style typography that match the brat look without design software.
          </p>
          <p>
            Whether you want a single word or a short phrase, the brat text generator gives you the same bold, minimal brat text style in seconds, with control over color, size, and layout to export as a brat text png.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Related Brat Tools</h2>
          <p className="mb-4">
            If you want to explore more ways to create brat-style designs, these tools can help depending on what you&apos;re trying to make.
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li><Link href="/brat-maker" className="text-primary hover:underline">Brat Maker</Link> — Use this if you want to create images, memes, or layered designs.</li>
            <li><Link href="/brat-font-generator" className="text-primary hover:underline">Brat Font Generator</Link> — Ideal for adjusting typography, spacing, and font styling.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What This Tool Does</h2>
          <p className="mb-4">
            The Brat Text Maker is a fast and simple tool that lets you
            create Brat-style text images in seconds. It transforms your
            words into bold, clean, minimal typography inspired by the Brat
            aesthetic popularized by Charli XCX. You can use this tool to
            generate text-only Brat visuals for captions, album-style designs,
            and aesthetic social media posts.
          </p>
          <p className="mb-4">
            Instead of manually editing fonts or struggling with design
            software, this brat text maker does everything automatically. You
            type your text, choose a color style, adjust spacing and
            layout, and download a high-quality brat text png instantly.
          </p>
          <p>The tool works entirely online, updates in real time, and requires no signup.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Who This Tool Is For</h2>
          <p className="mb-4">
            This Brat Text Maker is made for anyone who wants clean
            Brat-style text without complexity.
          </p>
          <p className="mb-4">It&apos;s ideal for:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Fans of the Brat aesthetic</li>
            <li>Charli XCX listeners</li>
            <li>Caption creators</li>
            <li>Social media users creating captions or text posts</li>
            <li>Designers who want fast Brat typography</li>
            <li>People making album-style text graphics</li>
            <li>Users who want Brat text without photo editing</li>
            <li>Anyone looking for a simple text maker</li>
          </ul>
          <p>If your focus is text — not images or photo edits — this tool is built specifically for that purpose.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Main Features of the Brat Text Maker</h2>

          <h3 className="text-xl font-semibold mt-6">1. Clean Typography</h3>
          <p className="mb-4">
            The tool applies bold, minimal text styling that matches
            the Brat look. Characters are clean, evenly spaced, and
            visually balanced.
          </p>
          <p className="mb-4">You can create:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Brat-style captions</li>
            <li>Caption text</li>
            <li>Album-style titles</li>
            <li>Lyric text</li>
            <li>Minimalist quotes</li>
          </ul>
          <p className="mb-6">The result looks intentional, not generic.</p>

          <h3 className="text-xl font-semibold mt-6">2. Full Text Customization</h3>
          <p className="mb-4">You can adjust:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>font size</li>
            <li>alignment</li>
            <li>spacing</li>
            <li>line breaks</li>
            <li>position on canvas</li>
          </ul>
          <p className="mb-6">
            This allows you to create centered, structured text or more
            chaotic layouts depending on your style.
          </p>

          <h3 className="text-xl font-semibold mt-6">3. Color Controls</h3>
          <p className="mb-4">Choose from classic Brat colors such as:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>neon green</li>
            <li>black</li>
            <li>white</li>
            <li>pink</li>
          </ul>
          <p className="mb-6">You can also use custom hex colors to match your own aesthetic.</p>

          <h3 className="text-xl font-semibold mt-6">4. Text-Only Canvas</h3>
          <p className="mb-6">
            This tool focuses purely on text. No clutter, no distractions —
            just clean typography on a solid or simple background.
          </p>
          <p className="mb-6">It&apos;s perfect when you want minimal visuals with strong impact.</p>

          <h3 className="text-xl font-semibold mt-6">5. High-Quality PNG Export</h3>
          <p className="mb-6">
            Every design downloads as a sharp brat text png file. The output
            stays clean on all platforms, including Instagram, TikTok,
            Twitter (X), and Discord.
          </p>

          <h3 className="text-xl font-semibold mt-6">6. Mobile-Friendly Editing</h3>
          <p className="mb-6">
            The text maker allows you to place emojis anywhere on the canvas.
            You can edit easily from your phone.
          </p>

          <h3 className="text-xl font-semibold mt-6">7. Instant Rendering</h3>
          <p className="mb-6">
            All changes appear immediately. There&apos;s no loading time
            or waiting, making experimentation fast and easy.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How Brat Text Maker Works</h2>

          <h3 className="text-xl font-semibold mt-6">Step 1 — Enter Your Text</h3>
          <p className="mb-4">Type your caption, lyric, quote, or short statement into the editor.</p>
          <p className="mb-6">Popular examples include:</p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>minimalist captions</li>
            <li>sarcastic one-liners</li>
            <li>album-style text</li>
            <li>lyric fragments</li>
            <li>short statements</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Step 2 — Choose a Color Style</h3>
          <p className="mb-4">Pick your preferred color:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>green for classic Brat</li>
            <li>black or white for contrast</li>
            <li>pink for aesthetic edits</li>
            <li>custom color for personal style</li>
          </ul>
          <p className="mb-6">The preview updates instantly.</p>

          <h3 className="text-xl font-semibold mt-6">Step 3 — Adjust Layout</h3>
          <p className="mb-6">
            Change font size, spacing, alignment, and placement until
            your text looks exactly right.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 4 — Download Your Text Image</h3>
          <p>Once finished, download your brat text png. No watermark. No limits. No signup.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why Use the Brat Text Generator</h2>
          <p className="mb-4">
            Other tools try to do everything — image editing, collages, stickers — which makes them slow and cluttered. This brat text generator is built for one purpose: creating clean brat text png output, fast.
          </p>
          <p className="mb-4">Compared to general-purpose design apps, this brat text maker offers:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>typography-first design — no image editing clutter</li>
            <li>instant text-to-PNG conversion</li>
            <li>brat-accurate font and spacing defaults</li>
            <li>high-resolution output without quality loss</li>
            <li>zero signup — open and start typing</li>
            <li>mobile-optimized text editing</li>
          </ul>
          <p>If your goal is text, this is the faster, focused alternative to complex design software.</p>

          <h3 className="text-xl font-semibold mt-6">Examples of What You Can Create</h3>
          <p className="mb-4">Using this Brat Text Generator, you can make:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Brat caption text</li>
            <li>lyric-style visuals</li>
            <li>minimalist quotes</li>
            <li>album text designs</li>
            <li>aesthetic captions</li>
            <li>social media text posts</li>
            <li>name text graphics</li>
            <li>short statement images</li>
          </ul>
          <p className="mt-4">
            This tool works especially well when you want text to be the
            main focus.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Brat Text Generator Examples</h2>
          <p className="mb-6">
            The images below are example outputs created using this brat text generator. Each one shows the bold, minimal brat text style you can make with the tool—type your own phrase above to get similar results as a brat text png.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 list-none pl-0">
            {BRAT_TEXT_EXAMPLES.map(({ src, phrase, alt }) => (
              <li key={phrase} className="rounded-lg overflow-hidden bg-muted/30">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
                <p className="mt-2 text-sm font-medium text-foreground/90">{phrase}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Examples of Brat Text</h2>
          <p className="mb-6">
            Need inspiration? Here are popular examples of brat text you can create with this tool, grouped by category.
          </p>

          <h3 className="text-xl font-semibold mt-6">Captions</h3>
          <p className="mb-4">Short, punchy brat text captions that work perfectly for Instagram, TikTok, and Twitter posts.</p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>stay toxic</li>
            <li>it&apos;s giving main character</li>
            <li>delulu is the solulu</li>
            <li>that girl era</li>
            <li>unbothered</li>
            <li>no apologies</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Meme Text</h3>
          <p className="mb-4">Bold brat text meme lines that are made for sharing and going viral.</p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>no thoughts just vibes</li>
            <li>chaotic good</li>
            <li>I said what I said</li>
            <li>delulu mode activated</li>
            <li>touch grass bestie</li>
            <li>the audacity</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Album-Style Text</h3>
          <p className="mb-4">Longer phrases and lyric fragments styled as album-inspired typography.</p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>brat summer</li>
            <li>365 party girl</li>
            <li>I think about it all the time</li>
            <li>everything is romantic</li>
            <li>mean girls soundtrack</li>
            <li>talk talk featuring troye sivan</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Quotes</h3>
          <p className="mb-4">Minimalist brat text quotes that make clean, statement-style visuals.</p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>hot girl music</li>
            <li>be bold be brat</li>
            <li>not your type</li>
            <li>confidence looks good on you</li>
            <li>main character energy</li>
            <li>she just gets it</li>
          </ul>

          <p>
            Type any of these phrases into the brat text generator above to create your own brat text png instantly.
          </p>
        </div>
      </section>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Text Generator"
        items={[
          { question: "Is the Brat Text Generator free?", answer: <p>Yes. You can generate unlimited Brat-style text for free.</p> },
          { question: "Do I need to sign up?", answer: <p>No account is required.</p> },
          { question: "What file format does it export?", answer: <p>All text designs download as high-quality PNG files.</p> },
          { question: "Does the tool support emojis?", answer: <p>Yes. Emojis and special characters are fully supported.</p> },
          { question: "Can I use custom colors?", answer: <p>Yes. You can select any color, including custom hex codes.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The tool is fully optimized for mobile devices.</p> },
          { question: "Can I use the text commercially?", answer: <p>Yes. You can use your generated text for personal or commercial projects.</p> },
          { question: "Is this officially connected to Charli XCX?", answer: <p>No. This is a fan-made text tool inspired by the Brat aesthetic.</p> },
        ]}
      />

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Conclusion</h2>
          <p className="mb-4">
            The Brat Text Maker is the easiest way to create bold,
            clean Brat-style text images without design software. With
            simple controls, real-time editing, and high-quality PNG
            exports, it&apos;s perfect for captions, album-style text, and
            minimalist visuals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            If you want fast and accurate typography creation, this
            text maker delivers exactly what you need.
          </p>
        </div>
      </section>
    </main>
  );
}
