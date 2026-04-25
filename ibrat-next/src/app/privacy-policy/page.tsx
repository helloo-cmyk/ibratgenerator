import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Privacy Policy | Ibrat Generator",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://ibratgenerator.com/privacy-policy/",
  },
  description:
    "At IbratGenerator.com, we value your privacy and are committed to protecting the information you provide while using our Brat-style text generator tool. Please read this Privacy Policy to understand how your data is handled.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HEADER ── */}
      <section className="hp-hero px-4 pb-12 border-b border-[var(--hp-border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="hp-hero-heading mt-6 mb-4 mx-auto !text-4xl sm:!text-5xl lg:!text-6xl">
            Privacy Policy
          </h1>
          <p className="inline-block bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] px-4 py-1.5 rounded-md text-[13px] font-bold text-[var(--hp-ink)] uppercase tracking-widest opacity-80 mb-6 drop-shadow-sm">
            Last updated: 17/11/2025
          </p>
          <p className="intro-text max-w-2xl mx-auto opacity-80">
            At IbratGenerator.com, we value your privacy and are committed to
            protecting the information you provide while using our Brat-style
            text generator tool. Please read this Privacy Policy to understand
            how your data is handled.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="px-4 pt-12 max-w-[800px] mx-auto">
        <div className="prose-container">
          <h2 className="hp-display-heading mb-6 !text-3xl">1. Information We Collect</h2>
          <p className="hp-body-text mb-4">
            <strong>User Inputs:</strong> Text and content you enter into the tool are processed
            temporarily to generate your Brat-style outputs.
          </p>
          <p className="hp-body-text mb-4">
            <strong>Automatic Data:</strong> We may collect non-identifying technical data such
            as browser type, device type, and session information for
            analytics and tool performance monitoring.
          </p>
          <p className="hp-body-text mb-12">
            <strong>No Personal Tracking:</strong> We do not require users to log in, provide
            personal accounts, or submit payment details.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">2. How We Use Your Information</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>To generate the Brat-style text outputs you request.</li>
            <li>To monitor and improve tool performance, functionality, and user experience.</li>
            <li>To respond to user feedback or technical issues via the Contact Us page.</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">3. Temporary Storage</h2>
          <p className="hp-body-text mb-4">
            All user inputs are processed temporarily and not permanently stored.
          </p>
          <p className="hp-body-text mb-12">
            Once the tool session ends, your input and generated content are
            discarded automatically.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">4. Third-Party Services</h2>
          <p className="hp-body-text mb-4">This tool does not rely on any external APIs.</p>
          <p className="hp-body-text mb-12">
            We may include links to external websites; we are not responsible
            for their privacy practices.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">5. Cookies &amp; Analytics</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>No tracking or marketing cookies are used.</li>
            <li>We may use minimal cookies or session storage for technical purposes such as maintaining tool functionality</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">6. Children&apos;s Privacy</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>No tracking or marketing cookies are used.</li>
            <li>We may use minimal cookies or session storage for technical purposes such as maintaining tool functionality.</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">7. User Rights</h2>
          <p className="hp-body-text mb-4">You can stop using the tool at any time.</p>
          <p className="hp-body-text mb-12">
            All data entered is temporary, so you can generate content without
            leaving permanent records.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">8. Security</h2>
          <p className="hp-body-text mb-4">You can stop using the tool at any time.</p>
          <p className="hp-body-text mb-12">
            All data entered is temporary, so you can generate content without
            leaving permanent records.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">9. International Access</h2>
          <p className="hp-body-text mb-4">
            The tool is accessible globally. By using it, you agree that your
            data may be temporarily processed in the servers of our operational
            location.
          </p>
          <p className="hp-body-text mb-12">We comply with general digital-use best practices.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">10. Disclaimer</h2>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>
              For questions or concerns, contact us at{" "}
              <Link href="/contact-us" className="hp-link">
                Contact Page
              </Link>
              .
            </li>
            <li>Using IbratGenerator.com constitutes acceptance of our policies.</li>
            <li>This Privacy Policy is provided for informational purposes.</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
