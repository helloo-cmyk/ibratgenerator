import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";
import MoreBratGeneratorTools from "@/components/MoreBratGeneratorTools";

export const metadata = {
  title: {
    absolute: "Brat Creator – Full Design Tool for Custom Brat Graphics",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-creator/",
  },
  description:
    "The Brat Creator is a flexible design tool that lets you build custom brat-style graphics, layouts, and visual edits. A full creative control brat design creator. No signup, no watermark.",
};

export default function BratCreatorPage() {
  return (
    <main className="space-y-10">
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-6 mb-3 mx-auto">Brat Creator</h1>
            <p className="mb-5">
              The Brat Creator is a flexible design tool that lets you build custom brat-style graphics, layouts, and visual edits.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What Is the Brat Creator</h2>
          <p className="mb-4">
            The Brat Creator is a flexible design tool designed to help
            you build custom brat-style graphics with full creative control. As a
            brat design creator, it lets you design
            text-based graphics, image edits, profile visuals, album-style
            layouts, and aesthetic posts — all with advanced editing options.
          </p>
          <p className="mb-4">
            It combines the most useful Brat creation features into one
            place. You can type text, customize fonts, adjust colors,
            upload images, change layouts, and export high-quality designs
            without needing professional design software.
          </p>
          <p>Everything works in real time. There&apos;s no signup, no watermark, and no learning curve.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Who Uses the Brat Creator</h2>
          <p className="mb-4">
            This tool is built for users who want full creative
            freedom while staying inside the Brat aesthetic. It&apos;s ideal for:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Fans of the Brat era</li>
            <li>Charli XCX listeners</li>
            <li>Social media creators</li>
            <li>Meme page owners</li>
            <li>Designers creating quick Brat-style visuals</li>
            <li>Users making profile images or headers</li>
            <li>People working on creative or fan projects</li>
            <li>Anyone who wants one tool instead of multiple generators</li>
          </ul>
          <p>
            If you want to create more than just text or memes, this creator
            gives you everything in one place.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What You Can Create with the Brat Creator</h2>
          <p className="mb-4">
            The Brat Creator is intentionally broad. You can use it to create brat graphics including:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Brat-style text graphics</li>
            <li>Image-based Brat edits</li>
            <li>Profile pictures</li>
            <li>Album-style visual layouts</li>
            <li>Meme-style images</li>
            <li>Quote posts</li>
            <li>Social media graphics</li>
            <li>Aesthetic posters</li>
            <li>Concept visuals</li>
          </ul>
          <p className="mb-4">
            This makes it ideal for creators who don&apos;t want to switch
            between different tools. For focused workflows, try our{" "}
            <Link href="/brat-text-generator/" className="text-foreground underline hover:no-underline">brat text generator</Link>
            ,{" "}
            <Link href="/brat-album-cover-generator/" className="text-foreground underline hover:no-underline">brat album cover generator</Link>
            ,{" "}
            <Link href="/brat-summer-meme-generator/" className="text-foreground underline hover:no-underline">brat summer meme generator</Link>
            , or{" "}
            <Link href="/brat-black-generator/" className="text-foreground underline hover:no-underline">brat black generator</Link>.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Features of the Brat Creator</h2>

          <h3 className="text-xl font-semibold mt-6">1. Create Custom Brat Graphics</h3>
          <p className="mb-6">
            Use the Brat Creator to create brat graphics freely. Combine text and images, upload photos, add
            Brat-style text on top, and position everything exactly how you want.
          </p>

          <h3 className="text-xl font-semibold mt-6">2. Design Brat Layouts</h3>
          <p className="mb-6">
            The text styling follows the clean, bold Brat aesthetic. You can
            adjust size, spacing, alignment, and placement to design brat layouts
            in both minimalist and expressive styles.
          </p>

          <h3 className="text-xl font-semibold mt-6">3. Advanced Visual Editing</h3>
          <p className="mb-6">
            Choose from Brat-inspired colors like green, black, white, and
            pink — or use your own custom hex colors. Upload images, textures,
            or backgrounds for advanced visual editing.
          </p>

          <h3 className="text-xl font-semibold mt-6">4. Full Creative Control</h3>
          <p className="mb-6">
            Design visuals for different platforms by choosing from multiple
            canvas sizes, including square, vertical, and landscape formats.
            The brat creator gives you full creative control over every detail.
          </p>

          <h3 className="text-xl font-semibold mt-6">5. Background Upload Support</h3>
          <p className="mb-6">
            Upload your own images, textures, or backgrounds to build custom
            Brat visuals instead of using plain colors.
          </p>

          <h3 className="text-xl font-semibold mt-6">6. High-Quality Export</h3>
          <p className="mb-6">
            Download your designs as clean, high-resolution PNG files.
            There&apos;s no watermark, and quality stays consistent across devices.
          </p>

          <h3 className="text-xl font-semibold mt-6">7. Mobile-Friendly Interface</h3>
          <p className="mb-6">
            The creator works smoothly on mobile devices, allowing you to
            create and export visuals directly from your phone.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Use the Brat Creator</h2>

          <h3 className="text-xl font-semibold mt-6">Step 1 — Choose Your Canvas</h3>
          <p className="mb-6">
            Select the canvas size that fits your project, such as square for
            posts or vertical for stories.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 2 — Add Your Text</h3>
          <p className="mb-6">
            Type your caption, lyric, name, or phrase. Adjust typography until
            it matches your desired Brat style.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 3 — Upload Images (Optional)</h3>
          <p className="mb-6">
            Upload photos or textures to use as a background or visual element.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 4 — Customize Colors and Layout</h3>
          <p className="mb-6">
            Choose colors, move elements around the canvas, and adjust spacing
            until everything looks balanced.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 5 — Download Your Design</h3>
          <p>Export your Brat-style visual as a PNG. No signup required.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why This Tool Is Better</h2>
          <p className="mb-4">
            Many online creators are either too limited or too complicated.
            This brat creator strikes the right balance by offering flexibility
            without overwhelming the user.
          </p>
          <p className="mb-4">It stands out because it offers:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>all-in-one Brat creation</li>
            <li>no watermark</li>
            <li>unlimited free use</li>
            <li>clean, modern interface</li>
            <li>mobile optimization</li>
            <li>real-time editing</li>
            <li>high-quality exports</li>
          </ul>
          <p>You get creative control without unnecessary complexity.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Brat Creator Examples</h2>
          <p className="mb-4">With this Brat Creator you can create brat graphics — from simple text overlays to full album-style visuals. The layout supports:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Brat-themed social posts</li>
            <li>Album-style visuals</li>
            <li>Brat meme images</li>
            <li>Profile graphics</li>
            <li>Text-heavy designs</li>
            <li>Minimalist layouts</li>
            <li>Expressive edits</li>
            <li>Creative fan art</li>
          </ul>
          <p className="mb-0">It adapts to your style — minimal or bold.</p>
          <p className="mt-6">
            If you just want to generate quick captions or memes, use the <Link href="/brat-maker" className="text-primary underline hover:no-underline">Brat Maker</Link>.
          </p>
        </div>
      </section>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about the Brat Creator"
        items={[
          { question: "Is the Brat Creator free to use?", answer: <p>Yes. You can create unlimited visuals for free.</p> },
          { question: "Do I need to create an account?", answer: <p>No. The tool works instantly without signup.</p> },
          { question: "What file format are designs saved in?", answer: <p>All designs export as high-quality PNG files.</p> },
          { question: "Can I use my own images?", answer: <p>Yes. You can upload any image as part of your design.</p> },
          { question: "Does the creator work on mobile?", answer: <p>Yes. The interface is fully mobile-friendly.</p> },
          { question: "Can I use my designs commercially?", answer: <p>Yes. You can use your creations for personal or commercial purposes.</p> },
        ]}
      />

      <MoreBratGeneratorTools />

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Conclusion</h2>
          <p className="mb-4">
            The Brat Creator is a powerful, easy-to-use tool for creating
            Brat-style visuals without design software. With flexible
            editing, clean typography, and high-quality exports, it&apos;s
            ideal for creators who want one tool to handle all their
            Brat-inspired designs.
          </p>
          <p>
            If you want creative freedom with a simple workflow, this brat creator delivers everything you need.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <p>
            If you want to create different styles of brat visuals, you can also try the <Link href="/" className="text-primary underline hover:no-underline">brat generator</Link> which lets you generate brat text, memes, and graphics instantly.
          </p>
        </div>
      </section>
    </main>
  );
}
