import Link from "next/link";

export const metadata = {
  title: {
    absolute: "About Us | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/about-us/",
  },
  description:
    "Welcome to IbratGenerator.com — your go-to online tool for creating Brat-style text inspired by Charli XCX. Our mission is simple: to provide fans, content creators, and social media enthusiasts with a fun, creative, and easy-to-use platform.",
};

export default function AboutUsPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HEADER ── */}
      <section className="hp-hero px-4 pb-12 border-b border-[var(--hp-border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="hp-hero-heading mt-6 mb-4 mx-auto !text-4xl sm:!text-5xl lg:!text-6xl">
            About Ibrat Generator
          </h1>
          <p className="intro-text max-w-2xl mx-auto opacity-80">
            Welcome to IbratGenerator.com — your go-to online tool for creating
            Brat-style text inspired by Charli XCX.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="px-4 pt-12 max-w-[800px] mx-auto">
        <div className="prose-container">
          <p className="hp-body-text mb-6">
            Our mission is simple: to provide fans, content creators, and social media enthusiasts with a fun, creative, and easy-to-use platform to generate unique text designs in real time.
          </p>
          <p className="hp-body-text mb-12">
            Ibrat Generator is a free web-based tool that lets you create bold, minimal
            text graphics and memes in your browser. No downloads, no signup, and no
            design experience required. We built it because we wanted a simple way
            for everyone — from meme lovers to social media creators — to make
            eye-catching Brat-style visuals without opening complicated software.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Our Mission</h2>
          <p className="hp-body-text mb-6">
            Our goal is to make simple creative tools accessible for everyone. We believe
            that creating graphics and text art should not require expensive software,
            technical skills, or a steep learning curve. Whether you want to make a
            quick meme, a caption for Instagram, or a fun graphic for a project, you
            should be able to do it in minutes, not hours.
          </p>
          <p className="hp-body-text mb-12">
            We focus on one thing: giving you a fast, clear, and enjoyable way to
            create Brat-style text and graphics online. No login walls, no paywalls,
            and no clutter — just a straightforward tool that works when you need it.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">What You Can Create</h2>
          <p className="hp-body-text mb-4">
            The tool is built around the Brat aesthetic: bold typography, clean
            layouts, and high contrast. You can use it for a wide range of
            projects:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li>Brat-style text graphics for social posts and stories</li>
            <li>Memes and captions for Instagram, TikTok, or Twitter</li>
            <li>Album-style covers and playlist art</li>
            <li>Profile pictures and simple branding visuals</li>
            <li>Fun online graphics for presentations or personal projects</li>
          </ul>
          <p className="hp-body-text mb-12">
            Everything is created in your browser. You type your text, choose
            colors and fonts, add stickers if you like, and download a
            high-quality PNG. No account is required, and your designs are
            not stored on our servers.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Why We Built This Tool</h2>
          <p className="hp-body-text mb-6">
            Many people run into the same problem: they want to make a quick
            graphic or meme, but full-featured design software is overwhelming,
            and mobile apps often have limits or watermarks. We wanted to offer
            a middle path — a focused tool that does one thing well.
          </p>
          <p className="hp-body-text mb-6">
            Complicated design software can take hours to learn. With Ibrat
            Generator, you get a live canvas, simple controls, and instant
            export. You can adjust fonts, colors, and layout in real time
            and see the result immediately. That simplicity is intentional.
          </p>
          <p className="hp-body-text mb-12">
            We built this tool so that anyone — regardless of experience —
            could create polished Brat-style visuals without installing
            anything or watching tutorials. If you can type and click, you
            can use it.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Key Features</h2>
          <p className="hp-body-text mb-4">
            The generator is designed to be both powerful and easy to use. Here
            is what you can expect:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li><strong>No login required</strong> — start generating instantly.</li>
            <li><strong>Real-time results</strong> — see your text come alive as you type. A live canvas preview updates as you change text.</li>
            <li><strong>Customizable fonts</strong> — choose from several Brat-style fonts and adjust size, spacing, and alignment.</li>
            <li><strong>Color presets</strong> — switch between classic looks like neon green, black, pink, or white with one click.</li>
            <li><strong>Stickers and decorations</strong> — add emojis and stickers to your design, then drag, resize, and rotate them.</li>
            <li><strong>Instant PNG export</strong> — download your design in high resolution (up to 3000 px) with no watermark.</li>
            <li><strong>Custom ratios</strong> — square, 4:5 for Instagram, 9:16 for stories and reels, or 16:9 for wide formats.</li>
            <li><strong>Mobile-friendly design</strong> — the editor works perfectly on phones and tablets.</li>
          </ul>
          <p className="hp-body-text mb-12">
            We&apos;re committed to making your experience smooth, enjoyable,
            and fast. Everything you generate is processed temporarily,
            ensuring privacy while giving you full control over your designs.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Who Uses This Tool</h2>
          <p className="hp-body-text mb-4">
            Our platform is designed for anyone who loves creative expression.
            Typical users include:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li>Meme creators who want quick, clean text overlays</li>
            <li>Social media users making captions, stories, or feed posts</li>
            <li>Casual designers who prefer simplicity over complex software</li>
            <li>Students and educators putting together visuals for projects</li>
            <li>Charli XCX fans and anyone who likes the Brat aesthetic</li>
          </ul>
          <p className="hp-body-text mb-12">
            You don&apos;t need to be a designer to get good results. If you
            have an idea and a few minutes, you can create something that
            looks polished and shareable.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Commitment to Free Online Tools</h2>
          <p className="hp-body-text mb-6">
            We believe that basic creative tools should be free and accessible.
            Ibrat Generator is and will remain free to use. We don&apos;t ask
            for signup, we don&apos;t put watermarks on your downloads, and we
            don&apos;t hide features behind a paywall.
          </p>
          <p className="hp-body-text mb-6">
            Keeping the tool simple and free is a deliberate choice. Our
            priority is usability and clarity — not locking features away
            or pushing unnecessary upgrades. We want you to open the site,
            create what you need, and leave without friction.
          </p>
          <p className="hp-body-text mb-12">
            If that philosophy resonates with you, we hope you&apos;ll use the
            tool, share your creations, and tell us how we can improve. Your
            feedback helps us keep the tool useful for everyone.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Future Improvements</h2>
          <p className="hp-body-text mb-6">
            We are constantly looking for ways to make the generator better.
            Planned improvements include more font and style options, additional
            color themes, and refinements to the canvas and export experience.
            We also want to improve usability on mobile and make the interface
            even clearer for first-time users.
          </p>
          <p className="hp-body-text mb-6">
            We read feedback and bug reports carefully. If you have ideas for
            new features or run into issues, our contact page is the best place
            to reach us. Your input directly shapes what we build next.
          </p>
          <p className="hp-body-text mb-12">
            Join our community of creators and turn your ideas into stylish,
            Brat-inspired text content in seconds! Try the generator on the
            homepage — no signup required. We hope you enjoy using it as much
            as we enjoyed building it.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Start Creating</h2>
          <p className="hp-body-text mb-4">
            If you want to try the tools, you can start with the{" "}
            <Link href="/brat-maker" className="hp-link">image editor</Link>{" "}
            for full image creation, or use the{" "}
            <Link href="/brat-text-generator/" className="hp-link">text generator tool</Link>{" "}
            for quick text designs.
          </p>
          <p className="hp-body-text mb-12">
            You can also explore how the typography works using the{" "}
            <Link href="/brat-font-generator" className="hp-link">font styling tool</Link>.
          </p>
        </div>
      </article>

    </main>
  );
}
