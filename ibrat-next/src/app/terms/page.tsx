import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Terms of Service | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/terms/",
  },
  description:
    "Terms of Service for Ibrat Generator. Read our rules for using the Brat-style text and image generator, including image ownership and usage rights.",
};

export default function TermsPage() {
  return (
    <main className="hp-root pb-32">
      {/* ── HEADER ── */}
      <section className="bg-white pt-32 pb-24 px-4 border-b-2 border-black/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Agreement</span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl sm:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
              Terms of Service
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <p className="text-[18px] sm:text-[22px] font-medium leading-tight italic border-l-4 border-[#89CC04] pl-10 max-w-2xl">
                Please read these Terms of Service carefully before using IbratGenerator.com. By accessing our tool, you agree to be bound by these terms.
              </p>
              <span className="inline-block bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest h-fit self-start sm:self-center">
                Effective Date: May 03, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-zinc-50/50 py-24 px-4 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Rules</span>
          </div>
          <div className="flex-1">
            <article className="max-w-3xl">
              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">1. Acceptance of Terms</h2>
                <p className="hp-body-text text-[18px] leading-relaxed">
                  By using Ibrat Generator ("the Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or tools.
                </p>
              </div>

              <div className="mb-20 bg-white p-10 border-2 border-[#89CC04] shadow-[20px_20px_0px_rgba(137,204,4,0.05)]">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">2. Non-Affiliation Disclaimer</h2>
                <p className="hp-body-text text-[18px] leading-relaxed m-0 font-bold italic">
                  Ibrat Generator is an independent creative tool. This website and its tools are NOT affiliated with, endorsed by, or associated with Charli XCX, Atlantic Records, or any official "Brat" branding or labels. We are a fan-inspired tool for creative expression.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">3. User Content & Ownership</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">
                  <strong>Ownership:</strong> Users retain full ownership of all images and text generated using Ibrat Generator. We do not claim any rights to the content you create.
                </p>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">
                  <strong>Usage Rights:</strong> Generated images may be used for both personal and commercial purposes. You are free to use your creations on social media, in projects, or for any other legal purpose.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">4. Prohibited Uses</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-4">You agree not to use the Service to:</p>
                <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
                  <li>Generate defamatory, harassing, threatening, or illegal content.</li>
                  <li>Create content that promotes hate speech or discrimination.</li>
                  <li>Impersonate any person or entity in a malicious manner.</li>
                  <li>Attempt to disrupt the Service or its servers.</li>
                </ul>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">5. Disclaimer of Warranties</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  The tool is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis without any warranties of any kind, whether express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">6. Limitation of Liability</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  In no event shall Ibrat Generator be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">7. Changes to Terms</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Service after changes are posted constitutes your acceptance of the new terms.
                </p>
              </div>

              <div className="pt-16 border-t-2 border-black/5">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6">8. Contact Information</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  If you have any questions about these Terms, please contact us at <strong>ibratgenerator@gmail.com</strong> or visit our{" "}
                  <Link href="/contact" className="hp-link">Contact Page</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
