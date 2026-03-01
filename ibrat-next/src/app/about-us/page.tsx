export const metadata = {
  title: {
    absolute: "About Us | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/about-us/",
  },
  description:
    "Welcome to IbratGenerator.com — your go-to online tool for creating Brat-style text inspired by Charli XCX. Our mission is simple: to provide fans, content creators, and social media enthusiasts with a fun, creative, and easy-to-use platform to generate unique text designs in real time.",
};

export default function AboutUsPage() {
  return (
    <main className="space-y-10">
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-6 mb-3 mx-auto">About Us</h1>
            <p className="mb-5">
              Welcome to IbratGenerator.com — your go-to online tool for creating
              Brat-style text inspired by Charli XCX. Our mission is simple: to
              provide fans, content creators, and social media enthusiasts with a
              fun, creative, and easy-to-use platform to generate unique text
              designs in real time.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What We Offer</h2>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>No login required — start generating instantly.</li>
            <li>Real-time results — see your text come alive as you type.</li>
            <li>Custom Fonts &amp; Colors — personalize your text with multiple font options and color choices.</li>
            <li>Stickers &amp; Decorations — enhance your designs with fun stickers and graphic elements.</li>
            <li>Custom Ratios for Social Media — perfectly sized text for Instagram, TikTok, Twitter, and more.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Who Can Use Our Tool</h2>
          <p className="mb-4">
            Our platform is designed for anyone who loves creative expression:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Charli XCX fans</li>
            <li>Social media content creators</li>
            <li>Anyone looking to make visually striking text graphics</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Why Choose IbratGenerator.com</h2>
          <p className="mb-4">
            We&apos;re committed to making your experience smooth, enjoyable,
            and fast. Everything you generate is processed temporarily,
            ensuring privacy while giving you full control over your designs.
            Plus, all features are available instantly with no signup required.
          </p>
          <p>
            Join our community of creators and turn your ideas into stylish,
            Brat-inspired text content in seconds!
          </p>
        </div>
      </section>
    </main>
  );
}
