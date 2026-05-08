import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Disclaimer | Ibrat Generator",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://ibratgenerator.com/disclaimer/",
  },
  description:
    "The information and tools provided on IbratGenerator.com are intended for general, creative, and entertainment purposes only. By using this website, you acknowledge and agree to the terms of this Disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HEADER ── */}
      <section className="hp-hero px-4 pb-12 border-b border-[var(--hp-border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="hp-hero-heading mt-6 mb-4 mx-auto !text-4xl sm:!text-5xl lg:!text-6xl">
            Disclaimer
          </h1>
          <p className="inline-block bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] px-4 py-1.5 rounded-md text-[13px] font-bold text-[var(--hp-ink)] uppercase tracking-widest opacity-80 mb-6 drop-shadow-sm">
            Last updated: 17/11/2025
          </p>
          <p className="intro-text max-w-2xl mx-auto opacity-80">
            The information and tools provided on IbratGenerator.com are
            intended for general, creative, and entertainment purposes only. By
            using this website, you acknowledge and agree to the terms of this
            Disclaimer.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="px-4 pt-12 max-w-[800px] mx-auto">
        <div className="prose-container">
          <h2 className="hp-display-heading mb-6 !text-3xl">1. No Affiliation With Charli XCX</h2>
          <p className="hp-body-text mb-12">
            IbratGenerator.com is not affiliated with, endorsed by, or connected
            to Charli XCX, her management, record label, or any official brand
            or entity associated with her. All references are purely
            inspirational and used for creative purposes.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">2. No Guarantees</h2>
          <p className="hp-body-text mb-4">
            We offer a Brat-style text generator tool on an &quot;as-is&quot;
            basis. We do not guarantee:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li>Accuracy of generated content</li>
            <li>Performance of the tool</li>
            <li>Continuous availability</li>
            <li>Compatibility with all devices or browsers</li>
            <li>Perfect rendering of fonts, colors, or stickers</li>
          </ul>
          <p className="hp-body-text mb-12">You use the tool entirely at your own risk.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">3. Temporary Processing Only</h2>
          <p className="hp-body-text mb-4">
            All user input is processed temporarily for generating results. We do not:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li>Permanently store your text</li>
            <li>Save your generated outputs</li>
            <li>Use external APIs to process your data</li>
            <li>Track personal information</li>
          </ul>
          <p className="hp-body-text mb-12">Once your session ends, all inputs and outputs are automatically discarded.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">4. No Legal or Professional Advice</h2>
          <p className="hp-body-text mb-12">
            Content on this website is for creative and informational purposes
            only. Nothing on IbratGenerator.com should be taken as legal,
            professional, or official guidance.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">5. User Responsibility</h2>
          <p className="hp-body-text mb-4">By using this tool, you agree that:</p>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>You are responsible for your own output and how you use it</li>
            <li>You will not misuse the tool for illegal, harmful, or misleading purposes</li>
            <li>You will not falsely imply endorsement by Charli XCX or any third party</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">6. External Links</h2>
          <p className="hp-body-text mb-4">
            Our website may contain links to third-party websites. We are not responsible for:
          </p>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>Their content</li>
            <li>Their privacy practices</li>
            <li>Any damages or issues arising from visiting them</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">7. Limitation of Liability</h2>
          <p className="hp-body-text mb-4">
            IbratGenerator.com and its creators are not liable for any loss,
            damage, or consequence arising from:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li>Using the tool</li>
            <li>Errors in generated content</li>
            <li>Technical issues or downtime</li>
            <li>User misuse of generated materials</li>
          </ul>
          <p className="hp-body-text mb-12">All usage is strictly at your own risk.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">8. Contact</h2>
          <p className="hp-body-text mb-12">
            For questions or concerns, visit our <Link href="/contact-us" className="hp-link">Contact page</Link>.
          </p>
        </div>
      </article>

    </main>
  );
}
