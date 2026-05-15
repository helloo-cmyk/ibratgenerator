import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Contact Us | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/contact/",
  },
  description:
    "We're always happy to hear from you! If you have any questions, concerns, or suggestions regarding IbratGenerator.com, please use the contact details below.",
};

export default function ContactPage() {
  return (
    <main className="hp-root pb-32">
      {/* ── HEADER ── */}
      <section className="bg-white pt-32 pb-24 px-4 border-b-2 border-black/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Connect</span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl sm:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
              Contact Ibrat Generator
            </h1>
            <p className="text-[18px] sm:text-[22px] font-medium leading-tight italic border-l-4 border-[#89CC04] pl-10 max-w-2xl">
              Have a question, feedback, or a technical issue? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-zinc-50/50 py-24 px-4 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Support</span>
          </div>
          <div className="flex-1">
            <article className="max-w-3xl">
              <div className="mb-20">
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  Whether you want to report a bug, suggest a new feature, or simply say hello, you can reach us using the information below. We read every message and do our best to reply within 24-48 hours.
                </p>

                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">How to Reach Us</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">
                  The best way to get in touch is via email. We prefer direct communication as it allows us to track your requests more efficiently.
                </p>
                <div className="bg-white p-12 border-2 border-black shadow-[20px_20px_0px_rgba(137,204,4,0.1)] group hover:shadow-[20px_20px_0px_rgba(137,204,4,0.2)] transition-all text-center">
                   <p className="text-[12px] font-black uppercase tracking-widest mb-4 opacity-40">Contact Email</p>
                   <a href="mailto:ibratgenerator@gmail.com" className="text-2xl sm:text-4xl font-black italic uppercase tracking-tighter text-[#89CC04] hover:underline transition-all break-all">
                     ibratgenerator@gmail.com
                   </a>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">Location</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  Ibrat Generator is operated and managed from the <strong>United States</strong>. We provide digital tools to a global community of creators and fans.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">Feedback and Suggestions</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-4">
                  Your feedback directly influences what we build next. If you have ideas for improving the tool, we want to know.
                </p>
                <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
                  <li><strong>New features:</strong> suggestions for fonts, export options, or layout tools.</li>
                  <li><strong>Bug reports:</strong> reporting technical issues with the canvas or downloads.</li>
                  <li><strong>Collaborations:</strong> business inquiries or partnership requests.</li>
                </ul>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">Privacy and Data</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  When you contact us, we use your email only to respond to your inquiry. We do not sell your contact details or use them for marketing purposes without your explicit consent. For more details, please read our{" "}
                  <Link href="/privacy-policy" className="hp-link">Privacy Policy</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
