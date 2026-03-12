import Link from "next/link";
import BratGeneratorLazy from "@/components/BratGeneratorLazy";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute: "Brat Maker – Create Brat Text, Memes & Profile Pictures",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/brat-maker/",
  },
  description:
    "This brat maker lets you create bold brat-style text, memes, and captions instantly. Use it as a brat text maker and brat meme maker—no design software needed. Free brat image maker, brat photo maker, and brat profile maker.",
};

export default function BratMakerPage() {
  return (
    <main className="space-y-10">
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-6 mb-3 mx-auto">Brat Maker</h1>
            <p className="mb-5">
              The brat maker lets you create brat-style captions, profile pictures, memes, and album-style text instantly. Use the brat maker to design bold visuals with no design software—just type, customize, and download.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8 mb-8 sm:mb-12">
        <BratGeneratorLazy />
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What Is a Brat Maker</h2>
          <p className="mb-4">
            The brat maker is a quick and simple online tool designed for
            creating Brat-style text, captions, memes, and profile graphics in
            seconds. Inspired by the bold minimal aesthetic popularized
            by Charli XCX&apos;s Brat era, this fast editor helps you design clean,
            eye-catching visuals without needing any design experience.
          </p>
          <p className="mb-4">
            Instead of switching between apps, fonts, and editing software,
            everything works directly in your browser. You type your text,
            customize the layout, choose your colors, and download instantly.
          </p>
          <p className="mb-4">
            Whether you want to make brat text, create a meme, design a
            profile picture, or build album-style typography, this tool
            gives you full control in seconds.
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
            <li>Anyone who wants to make brat text quickly</li>
            <li>Users creating album-style typography</li>
            <li>People building aesthetic text-based edits</li>
            <li>Anyone looking for a free brat image maker</li>
          </ul>
          <p>
            If you want a tool that handles text, photos, and layouts in
            one place, this editor covers everything.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Core Features of the Brat Maker</h2>

          <h3 className="text-xl font-semibold mt-6">1. Brat Text Maker</h3>
          <p className="mb-4">
            At its core, this brat maker works as a powerful brat text maker.
            You can make brat text and create bold, minimal typography with full control over:
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
            It also works as a brat album text maker for creating large,
            centered, album-style typography inspired by modern minimal
            layouts.
          </p>
          <p className="mb-6">
            You can build clean captions, bold headers, meme text, or
            expressive quotes.
          </p>

          <h3 className="text-xl font-semibold mt-6">2. Brat Photo &amp; Image Editing</h3>
          <p className="mb-4">
            The brat maker also functions as a complete brat photo maker and
            brat image maker. Upload your own photos and add Brat-style text
            on top to generate profile pictures, memes, aesthetic edits, and
            album-inspired visuals.
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
            Use this brat maker as a brat profile maker to create square
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

          <h3 className="text-xl font-semibold mt-6">4. Brat Meme Maker</h3>
          <p className="mb-4">
            The brat maker also works as a brat meme maker. Create text-based
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

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">How to Use the Brat Maker</h2>

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
          <p>Click download and get your final PNG instantly. No signup. No watermark. No delay.</p>
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
            If you want more advanced editing options and full design customization, try the <Link href="/brat-creator" className="text-primary underline hover:no-underline">Brat Creator</Link>.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <p>
            Use the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text generator</Link> to generate brat text as PNG, or the <Link href="/" className="text-primary underline hover:no-underline">free brat generator</Link> for memes and full graphics.
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
            Use the <Link href="/brat-text-generator/" className="text-primary underline hover:no-underline">brat text maker</Link> for text-only brat graphics, or the <Link href="/" className="text-primary underline hover:no-underline">free brat generator</Link> for full designs.
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
