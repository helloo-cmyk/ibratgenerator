export const metadata = {
  title: {
    absolute: "Contact Us | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/contact-us/",
  },
  description:
    "We're always happy to hear from you! If you have any questions, concerns, or suggestions regarding IbratGenerator.com, please use the contact details below. Our team strives to respond to all inquiries within 24 hours.",
};

export default function ContactUsPage() {
  return (
    <main className="space-y-10">
      <section>
        <div className="text-center">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-6 mb-3 mx-auto">Contact Us</h1>
            <p className="mb-5">
              We&apos;re always happy to hear from you! If you have any questions,
              concerns, or suggestions regarding IbratGenerator.com, please use
              the contact details below. Our team strives to respond to all
              inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Contact Email</h2>
          <p>ibratgenerator@gmail.com</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Reasons to Contact Us</h2>
          <p className="mb-4">You can reach out for:</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Technical issues with the tool</li>
            <li>Copyright concerns or DMCA requests</li>
            <li>Feedback or suggestions to improve the site</li>
            <li>Business inquiries or collaborations</li>
            <li>Reporting bugs or errors</li>
            <li>Requests for content removal</li>
            <li>General questions about the website or tool</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base leading-relaxed text-foreground/90">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Important Notes</h2>
          <p className="mb-4">
            IbratGenerator.com is not affiliated with Charli XCX or any of her
            official brands, labels, or partners.
          </p>
          <p className="mb-4">
            All communications will be handled professionally, and your
            messages will be treated respectfully.
          </p>
          <p>
            We value your feedback and are committed to making your experience
            with IbratGenerator.com smooth and enjoyable. Reach out anytime, and
            we&apos;ll get back to you as quickly as possible.
          </p>
        </div>
      </section>
    </main>
  );
}
