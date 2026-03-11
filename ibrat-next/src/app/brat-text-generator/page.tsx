import Link from "next/link";
import Image from "next/image";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

const BRAT_TEXT_EXAMPLES = [
  { src: "/examples/brat2.png", phrase: "stay toxic", alt: "brat text generator example stay toxic" },
  { src: "/examples/brat1.png", phrase: "brat summer", alt: "brat text png example brat summer" },
  { src: "/examples/brat3.png", phrase: "main character energy", alt: "brat text generator example main character energy" },
  { src: "/examples/brat5.png", phrase: "delulu mode activated", alt: "brat text png example delulu mode activated" },
  { src: "/examples/brat6.png", phrase: "hot girl music", alt: "brat text generator example hot girl music" },
  { src: "/examples/brat4.png", phrase: "chaotic good", alt: "brat text png example chaotic good" },
];

export const metadata = {
  title: {
    absolute: "Brat Text Generator – Create Brat Text PNG Free Online",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-text-generator/",
  },
  description:
    "Free brat text generator and brat text maker. Create brat text PNG images with brat-style captions, meme text, and album-style typography. Charli XCX–inspired brat text generator free online—no signup.",
};

export default function BratTextGeneratorPage() {
  return (
    <main className="space-y-10">
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-6 mb-3 mx-auto">Brat Text Generator</h1>
            <p className="mb-5">
              Use this brat text generator to create bold Brat-style captions, meme text, and album-style typography in seconds. Simply type your text, customize the layout, and download a brat text PNG instantly. The tool works online, is completely free, and requires no signup.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">What Is Brat Text Style</h2>
          <p className="mb-4">
            Brat text style is the minimalist typography tied to the brat aesthetic—bold sans-serif type, clean spacing, and little or no decoration. It became widely recognized through the Charli XCX–inspired text style: album art, merch, and social visuals that put strong, simple text front and center. Use it for <strong>brat album text</strong>, <strong>brat captions</strong>, and meme-style phrases.
          </p>
          <p className="mb-4">
            The look is intentionally stripped-down: no script fonts, no heavy effects—just clear, confident letterforms that read well at any size. This brat text generator recreates that style so you can make brat captions, brat album text, and album-style typography that match the brat look without design software.
          </p>
          <p>
            Whether you want a single word or a short phrase, the generator gives you the same bold, minimal brat text style in seconds, with control over color, size, and layout.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What This Tool Does</h2>
          <p className="mb-4">
            The Brat Text Generator is a fast and simple tool that lets you
            create Brat-style text images in seconds. It transforms your
            words into bold, clean, minimal typography inspired by the Brat
            aesthetic popularized by Charli XCX. You can use this tool to
            generate text-only Brat visuals for memes, captions, album-style
            designs, and aesthetic social media posts.
          </p>
          <p className="mb-4">
            Instead of manually editing fonts or struggling with design
            software, this generator does everything automatically. You
            type your text, choose a color style, adjust spacing and
            layout, and download a high-quality image instantly.
          </p>
          <p>The tool works entirely online, updates in real time, and requires no signup.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Who This Tool Is For</h2>
          <p className="mb-4">
            This Brat Text Generator is made for anyone who wants clean
            Brat-style text without complexity.
          </p>
          <p className="mb-4">It&apos;s ideal for:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Fans of the Brat aesthetic</li>
            <li>Charli XCX listeners</li>
            <li>Meme creators</li>
            <li>Social media users creating captions or text posts</li>
            <li>Designers who want fast Brat typography</li>
            <li>People making album-style text graphics</li>
            <li>Users who want Brat text without photo editing</li>
            <li>Anyone looking for a simple text-based generator</li>
          </ul>
          <p>If your focus is text — not images or photo edits — this tool is built specifically for that purpose.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Main Features of the Brat Text Generator</h2>

          <h3 className="text-xl font-semibold mt-6">1. Clean Brat Typography</h3>
          <p className="mb-4">
            The generator applies bold, minimal text styling that matches
            the Brat look. Characters are clean, evenly spaced, and
            visually balanced.
          </p>
          <p className="mb-4">You can create:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Brat-style captions</li>
            <li>Meme text</li>
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
            Every text design downloads as a sharp PNG file. The output
            stays clean on all platforms, including Instagram, TikTok,
            Twitter (X), and Discord.
          </p>

          <h3 className="text-xl font-semibold mt-6">6. Mobile-Friendly Editing</h3>
          <p className="mb-6">
            The generator allows you to place emojis anywhere on the canvas.
            You can:
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
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Use the Brat Text Generator</h2>

          <h3 className="text-xl font-semibold mt-6">Step 1 — Enter Your Text</h3>
          <p className="mb-4">Type your caption, lyric, quote, or meme text into the editor.</p>
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
          <p>Once finished, download your Brat text as a PNG. No watermark. No limits. No signup.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why This Tool Is Better</h2>
          <p className="mb-4">
            Many online text generators produce low-quality or generic
            results. They often include watermarks, locked features, or
            blurry exports.
          </p>
          <p className="mb-4">The Brat Text Generator avoids these problems by offering:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>clean, Brat-inspired typography</li>
            <li>unlimited free usage</li>
            <li>no watermark</li>
            <li>high-resolution PNG output</li>
            <li>simple interface</li>
            <li>mobile compatibility</li>
            <li>instant updates</li>
          </ul>
          <p>It&apos;s designed to do one thing well — create Brat-style text — without unnecessary extras.</p>

          <h3 className="text-xl font-semibold mt-6">Examples of What You Can Create</h3>
          <p className="mb-4">Using this Brat Text Generator, you can make:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Brat meme text</li>
            <li>lyric-style visuals</li>
            <li>minimalist quotes</li>
            <li>album text designs</li>
            <li>aesthetic captions</li>
            <li>social media text posts</li>
            <li>profile name graphics</li>
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
            The images below are example outputs created using this brat text generator. Each one shows the bold, minimal brat text style you can make with the tool—type your own phrase above to get similar results.
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

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Generator"
        items={[
          { question: "Is the Brat Text Generator free?", answer: <p>Yes. You can generate unlimited Brat-style text for free.</p> },
          { question: "Do I need to sign up?", answer: <p>No account is required.</p> },
          { question: "What file format does it export?", answer: <p>All text designs download as high-quality PNG files.</p> },
          { question: "Does the tool support emojis?", answer: <p>Yes. Emojis and special characters are fully supported.</p> },
          { question: "Can I use custom colors?", answer: <p>Yes. You can select any color, including custom hex codes.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The tool is fully optimized for mobile devices.</p> },
          { question: "Can I use the text commercially?", answer: <p>Yes. You can use your generated text for personal or commercial projects.</p> },
          { question: "Is this an official Charli XCX tool?", answer: <p>No. This is a fan-made generator inspired by the Brat aesthetic. It is not officially connected to Charli XCX.</p> },
        ]}
      />

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Conclusion</h2>
          <p className="mb-4">
            The Brat Text Generator is the easiest way to create bold,
            clean Brat-style text images without design software. With
            simple controls, real-time editing, and high-quality PNG
            exports, it&apos;s perfect for memes, captions, album-style
            text, and minimalist visuals.
          </p>
          <p>
            If you want fast, free, and accurate Brat text creation, this
            generator delivers exactly what you need.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Other Brat Generator Tools</h2>
          <p className="mb-4">
            Try the <Link href="/brat-creator/" className="text-primary underline hover:no-underline">brat creator</Link> for full brat graphics, the <Link href="/brat-font-generator/" className="text-primary underline hover:no-underline">brat font generator</Link> for typography, the <Link href="/brat-album-cover-generator/" className="text-primary underline hover:no-underline">brat album cover generator</Link> for cover art, or the <Link href="/brat-summer-meme-generator/" className="text-primary underline hover:no-underline">brat summer meme generator</Link> for viral memes.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <p>
            If you want to create different styles of brat visuals, you can also try the <Link href="/" className="text-primary underline hover:no-underline">online brat generator</Link> which lets you generate brat text, memes, and graphics instantly.
          </p>
        </div>
      </section>
    </main>
  );
}
