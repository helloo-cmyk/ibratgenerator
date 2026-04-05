import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "Free Brat Name Generator – Create Unique Brat Names Instantly",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-name-generator/",
  },
  description: "Use our free brat name generator to create unique brat names and text instantly. Generate your brat identity with no signup required.",
};

export default function BratNameGeneratorPage() {
  return (
    <main className="space-y-10">

      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-6 mb-3 mx-auto">Brat Name Generator</h1>
            <p className="mb-5">
              Create bold, Brat-inspired names for albums, profiles, and edits.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What This Tool Does</h2>
          <p className="mb-4">
            The Brat Name Generator is a simple tool that helps you create
            unique, Brat-style names instantly. It&apos;s designed for
            users who want short, bold, aesthetic names inspired by the
            Brat era and Charli XCX&apos;s visual and musical identity.
          </p>
          <p className="mb-4">
            This tool generates names that work perfectly for album
            titles, usernames, profile names, playlists, edits, and
            creative projects. Instead of overthinking or manually
            brainstorming names, you can generate ideas in seconds and
            pick the one that fits your vibe.
          </p>
          <p>Everything is instant. No signup, no limits, no distractions.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Who This Tool Is For</h2>
          <p className="mb-4">
            The Brat Name Generator is made for anyone who needs creative
            naming ideas with a strong aesthetic edge. It&apos;s especially
            useful for:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Fans of the Brat aesthetic</li>
            <li>Charli XCX listeners</li>
            <li>Musicians naming albums or tracks</li>
            <li>Creators naming edits or series</li>
            <li>People choosing usernames or display names</li>
            <li>Playlist creators</li>
            <li>Meme pages</li>
            <li>Designers working on Brat-style projects</li>
          </ul>
          <p>
            If you want names that feel modern, bold, and confident, this
            tool is built for you.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What Makes a &quot;Brat&quot; Name</h2>
          <p className="mb-4">
            Brat-style names usually share a few key traits:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Fans of the Brat aesthetic</li>
            <li>Charli XCX listeners</li>
            <li>Musicians naming albums or tracks</li>
            <li>Creators naming edits or series</li>
            <li>People choosing usernames or display names</li>
            <li>Playlist creators</li>
            <li>Meme pages</li>
            <li>Designers working on Brat-style projects</li>
          </ul>
          <p className="mb-4">Examples of common Brat-style naming patterns include:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>one-word names</li>
            <li>slightly chaotic phrases</li>
            <li>confident statements</li>
            <li>ironic or exaggerated tones</li>
            <li>minimalist expressions</li>
          </ul>
          <p>The generator is designed to follow these patterns naturally.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Main Features of the Brat Name Generator</h2>

          <h3 className="text-xl font-semibold mt-6">1. Instant Name Generation</h3>
          <p className="mb-6">
            Generate multiple Brat-style names instantly with one click.
            Each result is designed to feel aesthetic, modern, and usable.
          </p>

          <h3 className="text-xl font-semibold mt-6">2. Album-Ready Name Styles</h3>
          <p className="mb-4">
            The generator creates names that work well for:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>album titles</li>
            <li>EP names</li>
            <li>playlist names</li>
            <li>music projects</li>
            <li>fan-made releases</li>
          </ul>
          <p className="mb-6">
            These names are short, expressive, and visually strong.
          </p>

          <h3 className="text-xl font-semibold mt-6">3. Profile &amp; Username Ideas</h3>
          <p className="mb-4">You can also use the generated names for:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Instagram usernames</li>
            <li>TikTok display names</li>
            <li>Discord nicknames</li>
            <li>Twitter (X) profiles</li>
            <li>Creative aliases</li>
          </ul>
          <p className="mb-6">
            The names are designed to look good visually, not just sound good.
          </p>

          <h3 className="text-xl font-semibold mt-6">4. Charli XCX–Inspired Aesthetic</h3>
          <p className="mb-6">
            The naming style is inspired by the Brat era&apos;s tone —
            bold, confident, playful, and unapologetic. This makes the
            results feel authentic rather than generic.
          </p>

          <h3 className="text-xl font-semibold mt-6">5. Unlimited Free Use</h3>
          <p className="mb-6">
            You can generate as many names as you want. There are no
            limits, no paywalls, and no locked features.
          </p>

          <h3 className="text-xl font-semibold mt-6">6. Clean, Simple Interface</h3>
          <p className="mb-6">
            The tool focuses on one thing: generating names. No clutter,
            no unnecessary options — just fast results.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Use the Brat Name Generator</h2>

          <h3 className="text-xl font-semibold mt-6">Step 1 — Open the Tool</h3>
          <p className="mb-6">Load the generator page. No login is required.</p>

          <h3 className="text-xl font-semibold mt-6">Step 2 — Generate Names</h3>
          <p className="mb-6">
            Click the generate button to receive a list of Brat-style
            names instantly.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 3 — Pick Your Favorite</h3>
          <p className="mb-6">
            Scroll through the results and choose the name that fits
            your project, profile, or album.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 4 — Use or Regenerate</h3>
          <p>Use the name directly or generate again for more ideas. That&apos;s it. The entire process takes seconds.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How People Use Brat Names</h2>
          <p className="mb-4">
            Here are some common real-world uses for Brat-style names:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>naming a concept album</li>
            <li>choosing a playlist title</li>
            <li>branding a meme page</li>
            <li>creating a stage name</li>
            <li>naming a creative series</li>
            <li>choosing an online alias</li>
            <li>labeling visual edits</li>
          </ul>
          <p className="mt-4">
            Because the names are short and expressive, they work across
            many platforms.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why This Tool Is Better</h2>
          <p className="mb-4">
            Most online name generators feel random, outdated, or generic.
            They often produce names that don&apos;t match modern internet
            aesthetics.
          </p>
          <p className="mb-4">
            The Brat Name Generator avoids that by focusing on:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>aesthetic naming patterns</li>
            <li>modern tone</li>
            <li>album-style structure</li>
            <li>confidence and simplicity</li>
          </ul>
          <p>You get names that actually feel usable — not filler.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Examples of Brat Name Styles</h2>
          <p className="mb-4">
            The generator produces names that fall into styles such as:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>minimalist single-word names</li>
            <li>bold phrases</li>
            <li>ironic titles</li>
            <li>confident statements</li>
            <li>playful expressions</li>
            <li>album-style wording</li>
          </ul>
          <p className="mt-4">
            These styles are intentionally flexible so you can use them creatively.
          </p>
        </div>
      </section>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about our Brat Generator"
        items={[
          { question: "Is the Brat Name Generator free?", answer: <p>Yes. You can generate unlimited names for free.</p> },
          { question: "Do I need to create an account?", answer: <p>No signup is required.</p> },
          { question: "Can I use these names commercially?", answer: <p>Yes. You can use generated names for personal or commercial projects.</p> },
          { question: "Are the names unique?", answer: <p>The generator creates a wide variety of names, but uniqueness depends on how and where you use them.</p> },
          { question: "Can I generate names for albums?", answer: <p>Yes. Many names are designed specifically to work as album or playlist titles.</p> },
          { question: "Does this tool copy existing names?", answer: <p>No. It generates original name combinations based on style patterns.</p> },
          { question: "Can I generate names multiple times?", answer: <p>Yes. You can generate as many lists as you want.</p> },
          { question: "Is this an official Charli XCX tool?", answer: <p>No. This is a fan-made generator inspired by the Brat aesthetic. It is not officially connected to Charli XCX.</p> },
        ]}
      />

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Conclusion</h2>
          <p className="mb-4">
            The Brat Name Generator gives you a fast, creative way to
            generate bold, Brat-inspired names for albums, profiles,
            playlists, and projects. With instant results, unlimited
            usage, and a clean aesthetic, it removes the frustration of
            naming and lets you focus on creating.
          </p>
          <p>
            If you want modern, confident names that fit the Brat vibe,
            this generator delivers exactly that.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">Other Brat Generator Tools</h2>
          <p className="mb-4">
            Use the <Link href="/brat-maker/" className="text-primary underline hover:no-underline">brat maker</Link> to create custom brat-style visuals. Create brat graphics with the <Link href="/brat-maker/" className="text-primary underline hover:no-underline">Brat Creator</Link>, use the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link> to generate brat text, design with the <Link href="/brat-font-generator/" className="text-primary underline hover:no-underline">brat font tool</Link>, make cover art with the <Link href="/brat-album-cover-generator/" className="text-primary underline hover:no-underline">brat album maker</Link>, or try the <Link href="/brat-summer-meme-generator/" className="text-primary underline hover:no-underline">Brat Summer Meme Generator</Link> for memes.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <p>
            To generate brat text as PNG, use our <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text maker</Link>. For other brat visuals, try the <Link href="/" className="text-primary underline hover:no-underline">brat generator</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
