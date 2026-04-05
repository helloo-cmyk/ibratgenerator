import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "Brat Maker – Create Brat Images & Memes Instantly",
  },
  description: "Try our free brat maker to create brat images and memes instantly. Customize text and colors. No signup required.",
  alternates: {
    canonical: "https://ibratgenerator.com/brat-maker/",
  },
};

export default function BratMakerPage() {
  return (
    <main className="space-y-10">

      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">Brat Maker</h1>
            <p className="mt-4 text-base leading-relaxed text-foreground/90 text-center max-w-2xl mx-auto">
              Use this free brat maker to create brat images, memes, and profile pictures instantly. No signup required.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What is a Brat Meme?</h2>
          <p className="mb-4">
            A brat meme is a bold, minimal visual that combines short text with
            strong color contrast and clean composition. This brat maker is built for
            generating Brat-style meme visuals and share-ready graphics in
            seconds. Inspired by the bold, minimal look popularized by Charli
            XCX&apos;s Brat era, it helps you create clean, eye-catching images without
            needing any design experience.
          </p>
          <p className="mb-4">
            Instead of switching between apps, fonts, and editing software,
            everything works directly in your browser. You type your text,
            customize the layout, choose your colors, and download instantly.
          </p>
          <p className="mb-4">
            Whether you want to create a meme, design a post graphic, or build
            album-inspired visuals, this tool gives you full control in seconds.
          </p>
          <p>
            It works smoothly on desktop and mobile, updates in real time,
            and exports high-quality PNG files with no watermark.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Who the Brat Maker Is For</h2>
          <p className="mb-4">
            The brat maker is built for creators who want fast, clean,
            aesthetic visuals.
          </p>
          <p className="mb-4">It is perfect for:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Social media creators</li>
            <li>Meme pages</li>
            <li>Users creating a brat profile picture</li>
            <li>People designing Brat-style captions</li>
            <li>Anyone who wants to make brat memes and images quickly</li>
            <li>Users creating album-style text layouts</li>
            <li>People building aesthetic text-based edits</li>
            <li>Anyone looking for a free brat image maker</li>
          </ul>
          <p>
            If you want a tool that handles images, memes, and profile pictures in
            one place, this brat maker covers everything.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Core Features of the Brat Maker</h2>

          <h3 className="text-xl font-semibold mt-6">1. Bold Text on Images</h3>
          <p className="mb-4">
            Add bold, clean text directly onto your brat images. The brat maker gives you full control over how text appears on your designs:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Font size</li>
            <li>Letter spacing</li>
            <li>Line height</li>
            <li>Alignment</li>
            <li>Position</li>
            <li>Background color</li>
          </ul>
          <p className="mb-6">
            Place text over uploaded photos, solid backgrounds, or album-style layouts. The result is a finished image with integrated typography.
          </p>
          <p className="mb-6">
            For standalone text-only designs without images, use the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link> instead.
          </p>

          <h3 className="text-xl font-semibold mt-6">2. Brat Image Generator</h3>
          <p className="mb-4">
            The brat maker also works as a complete brat image generator.
            Upload your own photos and add Brat-style text on top to create
            profile pictures, meme images, aesthetic edits, and album-inspired
            visuals.
          </p>
          <p className="mb-4">Perfect for:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Profile pictures</li>
            <li>Aesthetic edits</li>
            <li>Meme images</li>
            <li>Social posts</li>
            <li>Album-inspired graphics</li>
          </ul>
          <p className="mb-6">
            You simply upload your image, place your text, adjust spacing,
            and download.
          </p>

          <h3 className="text-xl font-semibold mt-6">3. Brat Profile Picture Maker</h3>
          <p className="mb-4">
            Use this brat maker as a profile picture maker to create square
            profile graphics for social platforms.
          </p>
          <p className="mb-4">
            You can create a square 1:1 layout, type your name or phrase,
            adjust spacing, and export it instantly as a brat profile picture.
          </p>
          <p className="mb-4">This works perfectly for:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>TikTok</li>
            <li>Instagram</li>
            <li>Discord</li>
            <li>Twitter (X)</li>
            <li>WhatsApp</li>
          </ul>
          <p className="mb-6">
            Because the tool exports high-resolution PNG files, your
            profile image stays sharp and clean.
          </p>

          <h3 className="text-xl font-semibold mt-6">4. Brat Meme Creator</h3>
          <p className="mb-4">
            The brat maker also works as a brat meme creator. Create text-based
            memes or combine uploaded photos with bold captions to generate
            brat-style meme visuals.
          </p>
          <p className="mb-4">Create:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Sarcastic captions</li>
            <li>Chaotic jokes</li>
            <li>Minimal meme layouts</li>
            <li>Bold one-word statements</li>
          </ul>
          <p className="mb-6">Everything updates live so you can experiment freely.</p>

          <h3 className="text-xl font-semibold mt-6">5. Multiple Aspect Ratios</h3>
          <p className="mb-4">
            You can choose from multiple canvas sizes depending on your platform:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>16:9 – Landscape graphics</li>
            <li>4:5 – Portrait feed posts</li>
            <li>9:16 – TikTok &amp; Reels</li>
            <li>1:1 – Profile pictures &amp; Instagram posts</li>
          </ul>
          <p className="mb-6">This flexibility makes the tool suitable for all types of content.</p>

          <h3 className="text-xl font-semibold mt-6">6. Custom Color Themes</h3>
          <p className="mb-4">
            While green is popular, the brat maker lets you choose any
            color you want.
          </p>
          <p className="mb-4">You can create:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Green designs</li>
            <li>Pink edits</li>
            <li>Black minimalist visuals</li>
            <li>White clean layouts</li>
            <li>Custom hex color combinations</li>
          </ul>
          <p className="mb-6">
            This allows you to design visuals that match your brand or
            personal aesthetic.
          </p>

          <h3 className="text-xl font-semibold mt-6">7. High-Quality PNG Export</h3>
          <p className="mb-4">Every design downloads as a sharp PNG file.</p>
          <p className="mb-4">There is:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>No watermark</li>
            <li>No compression</li>
            <li>No account requirement</li>
            <li>No limit</li>
          </ul>
          <p className="mb-6">You get clean exports ready for social media or print.</p>

          <h3 className="text-xl font-semibold mt-6">8. Mobile-Optimized Editor</h3>
          <p className="mb-6">
            The tool works smoothly on smartphones. You can drag, resize,
            edit text, and download without issues.
          </p>
          <p>The interface feels simple and responsive, whether you are using a phone, tablet, or desktop.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Brat Creator Tool
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/90">
          This brat maker also works as a brat creator, allowing you to design custom brat-style images, memes, profile pictures, and text visuals in one place.
        </p>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Create Brat Images</h2>

          <h3 className="text-xl font-semibold mt-6">Step 1 - Add Your Text</h3>
          <p className="mb-4">
            Start by typing your caption, username, lyric, or meme line.
          </p>
          <p className="mb-6">You can:</p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>Make brat text</li>
            <li>Create album-style layouts</li>
            <li>Build short meme captions</li>
            <li>Write bold statements</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Step 2 — Customize the Style</h3>
          <p className="mb-4">Adjust:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Text size</li>
            <li>Alignment</li>
            <li>Spacing</li>
            <li>Color</li>
            <li>Background</li>
          </ul>
          <p className="mb-6">This gives you full creative control.</p>

          <h3 className="text-xl font-semibold mt-6">Step 3 - Upload an Image (Optional)</h3>
          <p className="mb-6">
            If you want to create a brat photo edit, upload any image.
            This allows the tool to function as a brat image maker for
            personalized designs.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 4 - Choose Aspect Ratio</h3>
          <p className="mb-6">Select the canvas size based on your platform.</p>

          <h3 className="text-xl font-semibold mt-6">Step 5 - Download</h3>
          <p className="mb-4">Click download and get your final PNG instantly. No signup. No watermark. No delay.</p>
          <p>
            If you want to skip image editing and just <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">create brat text png</Link> designs, the dedicated text tool handles that with a simpler, text-focused interface.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why This Brat Maker Is Better</h2>
          <p className="mb-4">Many online editors are:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Low quality</li>
            <li>Filled with ads</li>
            <li>Limited in features</li>
            <li>Locked behind paywalls</li>
          </ul>
          <p className="mb-4">This brat maker is built differently.</p>
          <p className="mb-4">It offers:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Clean interface</li>
            <li>Full customization</li>
            <li>Fast real-time editing</li>
            <li>High-resolution downloads</li>
            <li>Unlimited usage</li>
            <li>Mobile compatibility</li>
          </ul>
          <p>
            It combines text editing, image editing, meme creation, and
            profile design in one simple tool.
          </p>

          <h3 className="text-xl font-semibold mt-6">What You Can Create</h3>
          <p className="mb-4">Using this editor, you can design:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Brat-style text graphics</li>
            <li>Brat profile pictures</li>
            <li>Album-style text layouts</li>
            <li>Brat memes</li>
            <li>Text-based quotes</li>
            <li>Image-based edits</li>
            <li>Aesthetic captions</li>
            <li>Custom social graphics</li>
          </ul>
          <p>From simple text to full image edits, everything can be created in seconds.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Brat Maker Examples</h2>
          <p className="mb-4">
            With the brat maker you can create brat-style memes, profile graphics,
            captions, and aesthetic text posts. Generate bold one-word statements,
            album-inspired text layouts, sarcastic meme captions, or clean
            profile pictures—all in the minimal Brat aesthetic.
          </p>
          <p className="mt-6">
            If you want more advanced editing options and full design customization, try the <Link href="/brat-maker" className="text-primary underline hover:no-underline">Brat Creator</Link>.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <p>
            If you only need text-based brat designs, use the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link>.
          </p>
        </div>
      </section>

      <FAQAccordion
        title="Frequently Asked Questions"
        intro="Here are some common questions about the Brat Maker"
        items={[
          { question: "Is the Brat Maker free?", answer: <p>Yes. You can create unlimited designs without paying.</p> },
          { question: "Do I need to create an account?", answer: <p>No. The tool works instantly without signup.</p> },
          { question: "What file format is used?", answer: <p>All designs export as high-quality PNG files.</p> },
          { question: "Can I upload my own images?", answer: <p>Yes. You can upload any image and add Brat-style text.</p> },
          { question: "Does it work on mobile?", answer: <p>Yes. The editor is optimized for mobile devices.</p> },
          { question: "Can I use the designs commercially?", answer: <p>Yes. You can use your creations for personal or commercial use.</p> },
        ]}
      />

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <p>
            If you want to create all types of brat visuals, use the <Link href="/" className="text-primary underline hover:no-underline">free brat generator</Link>.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Conclusion</h2>
          <p className="mb-4">
            The brat maker is a complete online editor for creating
            Brat-style text, memes, profile pictures, and image-based
            graphics. It combines text editing, layout control, image
            upload, and high-quality export in one simple interface.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            Use our <a href="/" className="text-primary underline">free brat generator</a> to create brat-style images instantly.
          </p>
          <p className="mb-4">
            If you want a fast, flexible way to design Brat visuals
            without installing software, this tool gives you everything
            you need.
          </p>
          <p>
            No watermark. No signup. No limits. Just create and download instantly.
          </p>
        </div>
      </section>
    </main>
  );
}
