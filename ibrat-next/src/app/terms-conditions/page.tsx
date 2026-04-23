import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Terms & Conditions | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/terms-conditions/",
  },
  description:
    "Welcome to IbratGenerator.com! By accessing or using our website and tool, you agree to comply with these Terms & Conditions. Please read them carefully before using our service.",
};

export default function TermsConditionsPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HEADER ── */}
      <section className="hp-hero px-4 pb-12 border-b border-[var(--hp-border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="hp-hero-heading mt-6 mb-4 mx-auto !text-4xl sm:!text-5xl lg:!text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="inline-block bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] px-4 py-1.5 rounded-md text-[13px] font-bold text-[var(--hp-ink)] uppercase tracking-widest opacity-80 mb-6 drop-shadow-sm">
            Last updated: 17/11/2025
          </p>
          <p className="intro-text max-w-2xl mx-auto opacity-80">
            Welcome to IbratGenerator.com! By accessing or using our website and
            tool, you agree to comply with these Terms &amp; Conditions. Please
            read them carefully before using our service.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="px-4 pt-12 max-w-[800px] mx-auto">
        <div className="prose-container">
          <h2 className="hp-display-heading mb-6 !text-3xl">1. Information We Collect</h2>
          <p className="hp-body-text mb-12">
            By using IbratGenerator.com, you acknowledge that you have read,
            understood, and agree to be bound by these Terms &amp; Conditions.
            If you do not agree, please do not use our website or tools.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">2. About the Tool</h2>
          <p className="hp-body-text mb-12">
            IbratGenerator.com is an online tool that allows users to generate
            Brat-style text inspired by Charli XCX. The tool is intended for
            creative, fun, and personal use only. We are not affiliated with,
            endorsed by, or connected to Charli XCX or any of her official brands.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">3. Changes to Terms</h2>
          <p className="hp-body-text mb-12">
            We may update these Terms &amp; Conditions at any time. Changes will
            be effective immediately upon posting on this page. It is your
            responsibility to review the Terms periodically.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">4. User Eligibility</h2>
          <p className="hp-body-text mb-12">
            You must be at least 13 years old to use this website. By using our
            service, you confirm that you are eligible to accept these Terms.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">5. Use of the Tool</h2>
          <p className="hp-body-text mb-4">
            The tool provides real-time generation of Brat-style text with
            options for fonts, colors, stickers, and social media ratios.
          </p>
          <p className="hp-body-text mb-4">
            All content is generated automatically and may contain errors or variations.
          </p>
          <p className="hp-body-text mb-12">We do not guarantee that outputs will be accurate, complete, or suitable for any specific purpose.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">6. Data Handling &amp; Privacy</h2>
          <p className="hp-body-text mb-4">All inputs you provide are processed temporarily.</p>
          <p className="hp-body-text mb-4">
            We do not store, save, or archive user inputs or generated content permanently.
          </p>
          <p className="hp-body-text mb-12">By using the tool, you consent to temporary processing for the purpose of generating outputs.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">7. User Responsibilities</h2>
          <p className="hp-body-text mb-4">You agree to use the tool responsibly and not to:</p>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>Upload illegal or harmful content</li>
            <li>Attempt to hack or misuse the system</li>
            <li>Claim affiliation with Charli XCX or misuse generated content commercially in misleading ways</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">8. Prohibited Activities</h2>
          <p className="hp-body-text mb-4">You may not:</p>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>Reverse engineer the tool</li>
            <li>Distribute the tool or its outputs for profit without permission</li>
            <li>Use the tool for spam, scams, or illegal activity</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">9. Technical Limitations &amp; Service Availability</h2>
          <p className="hp-body-text mb-12">
            We strive to maintain continuous service, but we do not guarantee
            uptime. The tool may be unavailable due to maintenance, technical
            issues, or server errors.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">10. Third-Party Integrations</h2>
          <p className="hp-body-text mb-12">
            This tool does not use third-party APIs. Any third-party content or
            links are independent, and we are not responsible for their services
            or policies.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">11. Rate Limits, Usage Caps &amp; Automation</h2>
          <p className="hp-body-text mb-12">
            Users may not attempt to overload, automate, or exploit the tool
            beyond normal usage limits. We reserve the right to restrict or
            suspend access in case of abuse.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">12. Premium Features / Payments</h2>
          <p className="hp-body-text mb-12">
            Currently, all features are free, and there are no paid services.
            Future paid features will be governed by separate Terms.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">13. Refund Policy</h2>
          <p className="hp-body-text mb-12">Not applicable at this time.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">14. Intellectual Property</h2>
          <p className="hp-body-text mb-4">
            All tool software, graphics, and code are the property of
            IbratGenerator.com.
          </p>
          <p className="hp-body-text mb-12">Generated outputs are for personal use. You may not claim ownership over the tool itself.</p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">15. No Guarantee of Output Accuracy</h2>
          <p className="hp-body-text mb-12">
            The outputs may not reflect exact expectations or be suitable for
            professional/commercial use. Use at your own risk.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">16. Limitation of Liability</h2>
          <p className="hp-body-text mb-4">
            By using this site, you agree that IbratGenerator.com and its
            creators are not liable for:
          </p>
          <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
            <li>Any direct or indirect damages</li>
            <li>Loss of profits or data</li>
            <li>Misuse of generated content</li>
          </ul>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">17. Termination of Access</h2>
          <p className="hp-body-text mb-12">
            We reserve the right to suspend or terminate access for violations
            of these Terms, misuse of the tool, or any behaviour deemed harmful.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">18. Governing Law &amp; Jurisdiction</h2>
          <p className="hp-body-text mb-12">
            These Terms are governed by general international digital-use
            principles. No specific country&apos;s law is guaranteed to apply,
            though we operate primarily online and globally.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">19. Contact Information</h2>
          <p className="hp-body-text mb-12">
            For questions or concerns, contact us at:{" "}
            <Link href="/contact-us" className="hp-link">
              Contact Page
            </Link>
          </p>
        </div>
      </article>

    </main>
  );
}
