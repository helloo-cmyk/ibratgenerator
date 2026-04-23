export const metadata = {
  title: {
    absolute: "Contact Us | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/contact-us/",
  },
  description:
    "We're always happy to hear from you! If you have any questions, concerns, or suggestions regarding IbratGenerator.com, please use the contact details below.",
};

export default function ContactUsPage() {
  return (
    <main className="hp-root pb-24">
      {/* ── HEADER ── */}
      <section className="hp-hero px-4 pb-12 border-b border-[var(--hp-border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="hp-hero-heading mt-6 mb-4 mx-auto !text-4xl sm:!text-5xl lg:!text-6xl">
            Contact Ibrat Generator
          </h1>
          <p className="intro-text max-w-2xl mx-auto opacity-80">
            We&apos;re always happy to hear from you! If you have any questions, concerns, or suggestions, please use the contact details below.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="px-4 pt-12 max-w-[800px] mx-auto">
        <div className="prose-container">
          <p className="hp-body-text mb-6">
            Whether you want to report a bug, suggest a new feature, ask a
            question, or simply say hello — you can reach us using the
            information on this page. We read every message and do our best
            to reply quickly and helpfully.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">How to Reach Us</h2>
          <p className="hp-body-text mb-4">
            The best way to get in touch is by email. You can send your message
            to the address below. We do not use a contact form on the site;
            email gives you a direct way to write to us and keep a record of
            your message.
          </p>
          
          <div className="bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] rounded-xl p-6 my-8 text-center max-w-sm mx-auto">
            <p className="text-[13px] font-bold tracking-widest uppercase mb-2 opacity-60">Contact Email</p>
            <a href="mailto:ibratgenerator@gmail.com" className="text-[18px] sm:text-[20px] font-semibold text-[var(--hp-primary)] hover:underline">
              ibratgenerator@gmail.com
            </a>
          </div>

          <p className="hp-body-text mb-6">
            We aim to respond to all inquiries within 24 to 48 hours on
            business days. If you don&apos;t hear back within a few days,
            please check your spam folder or try sending again. We do not
            ignore messages; sometimes emails get filtered or delayed.
          </p>
          <p className="hp-body-text mb-12">
            For urgent technical issues or reports of broken functionality,
            including "Report Technical Issues" or "Bug report"
            in your subject line can help us prioritize your message.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Feedback and Suggestions</h2>
          <p className="hp-body-text mb-4">
            We love hearing how people use the generator and what they wish it
            could do. Your feedback directly influences what we build next. If
            you have ideas for improving the tool, we want to know.
          </p>
          <p className="hp-body-text mb-4">
            You can reach out with suggestions for:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li><strong>New features</strong> — such as additional fonts, export options, or layout tools</li>
            <li><strong>Generator improvements</strong> — ways to make the canvas, stickers, or colors easier or more flexible</li>
            <li><strong>Style requests</strong> — new color themes, presets, or visual styles you&apos;d like to see</li>
          </ul>
          <p className="hp-body-text mb-12">
            There is no guarantee we can implement every idea, but we read all
            suggestions and often use them when planning updates. Even small
            ideas can lead to meaningful changes.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Report Technical Issues</h2>
          <p className="hp-body-text mb-4">
            If something isn&apos;t working correctly — for example, the
            canvas not updating, download failing, or buttons not responding —
            we want to fix it. Reporting bugs helps us improve the tool for
            everyone.
          </p>
          <p className="hp-body-text mb-4">
            When you contact us about a technical issue, please include as
            much detail as you can. Useful information includes:
          </p>
          <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
            <li><strong>Device</strong> — whether you&apos;re on a phone, tablet, or computer</li>
            <li><strong>Browser</strong> — for example Chrome, Safari, Firefox, or Edge</li>
            <li><strong>Steps that caused the issue</strong> — what you clicked before the problem appeared</li>
            <li><strong>What you expected</strong> vs. what actually happened</li>
          </ul>
          <p className="hp-body-text mb-12">
            You can also mention whether the issue happens every time or only
            sometimes. The more context we have, the faster we can track down
            and fix the problem.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Business & Collaboration Inquiries</h2>
          <p className="hp-body-text mb-6">
            If you represent a brand, publication, or creative project and are
            interested in working with us — for example, a partnership,
            collaboration, or sponsored feature — we are open to hearing from
            you. Send us an email with a brief description of your project and
            what you have in mind.
          </p>
          <p className="hp-body-text mb-6">
            We also welcome inquiries from content creators who want to
            collaborate or feature the tool. Please use the contact email
            above and give us a bit of context so we can respond appropriately.
          </p>
          <p className="hp-body-text mb-12">
            We cannot guarantee a positive response to every request, but we
            read and consider all serious inquiries. Allow a few days for a
            reply on business-related messages.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">User Support</h2>
          <p className="hp-body-text mb-6">
            Our goal is to help you use the generator without hassle. If you
            run into a problem — whether it&apos;s a bug, a confusing part of
            the interface, or a question about how something works — we want to
            help you resolve it quickly.
          </p>
          <p className="hp-body-text mb-6">
            We don&apos;t offer live chat or phone support; email is our main
            channel. That said, we do our best to answer clearly and point you
            in the right direction. If we can fix an issue on our side, we
            will. If the solution is a setting or a different browser, we&apos;ll
            explain that too.
          </p>
          <p className="hp-body-text mb-12">
            You can reach out for: technical issues with the tool, copyright
            concerns or DMCA requests, feedback or suggestions to improve the
            site, business inquiries or collaborations, reporting bugs or
            errors, requests for content removal, or general questions about
            the website or tool. We value your feedback and are committed to
            making your experience with IbratGenerator.com smooth and
            enjoyable.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Privacy and Respect</h2>
          <p className="hp-body-text mb-6">
            We take your messages and personal information seriously. When you
            contact us, we use your email and the content of your message only
            to respond and, where relevant, to improve the site. We do not
            sell your contact details or share them with third parties for
            marketing. We do not add you to mailing lists unless you explicitly
            ask to be included.
          </p>
          <p className="hp-body-text mb-6">
            IbratGenerator.com is not affiliated with Charli XCX or any of her
            official brands, labels, or partners. All communications will be
            handled professionally, and your messages will be treated
            respectfully.
          </p>
          <p className="hp-body-text mb-12">
            If you have concerns about how we handle data, you can read our
            Privacy Policy for full details. If you have a specific question
            about your message or data, mention it in your email and we&apos;ll
            address it.
          </p>

          <h2 className="hp-display-heading mt-16 mb-6 !text-3xl">Thank You</h2>
          <p className="hp-body-text mb-6">
            Thank you for using Ibrat Generator. Whether you&apos;re here to
            report an issue, suggest an improvement, or just say hi — we&apos;re
            glad you reached out. Reach out anytime, and we&apos;ll get back to
            you as quickly as possible.
          </p>
        </div>
      </article>

    </main>
  );
}
