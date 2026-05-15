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
    <main className="hp-root pb-32">
      {/* ── HEADER ── */}
      <section className="bg-white pt-32 pb-24 px-4 border-b-2 border-black/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Caution</span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl sm:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
              Disclaimer
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <p className="text-[18px] sm:text-[22px] font-medium leading-tight italic border-l-4 border-[#89CC04] pl-10 max-w-2xl">
                The information and tools provided on IbratGenerator.com are intended for general, creative, and entertainment purposes only. By using this website, you acknowledge and agree to the terms of this Disclaimer.
              </p>
              <span className="inline-block bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest h-fit self-start sm:self-center">
                Last updated: 17/11/2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-zinc-50/50 py-24 px-4 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Limits</span>
          </div>
          <div className="flex-1">
            <article className="max-w-3xl">
              <div className="mb-20 bg-white p-10 border-2 border-black shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">1. No Affiliation With Charli XCX</h2>
                <p className="hp-body-text text-[18px] leading-relaxed m-0">
                  IbratGenerator.com is not affiliated with, endorsed by, or connected to Charli XCX, her management, record label, or any official brand or entity associated with her. All references are purely inspirational and used for creative purposes.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">2. No Guarantees</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">
                  We offer a Brat-style text generator tool on an &quot;as-is&quot; basis. We do not guarantee:
                </p>
                <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
                  <li>Accuracy of generated content</li>
                  <li>Performance of the tool</li>
                  <li>Continuous availability</li>
                  <li>Compatibility with all devices or browsers</li>
                  <li>Perfect rendering of fonts, colors, or stickers</li>
                </ul>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">You use the tool entirely at your own risk.</p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">3. Temporary Processing Only</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-4">
                  All user input is processed temporarily for generating results. We do not:
                </p>
                <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
                  <li>Permanently store your text</li>
                  <li>Save your generated outputs</li>
                  <li>Use external APIs to process your data</li>
                  <li>Track personal information</li>
                </ul>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">Once your session ends, all inputs and outputs are automatically discarded.</p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">4. No Legal or Professional Advice</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  Content on this website is for creative and informational purposes only. Nothing on IbratGenerator.com should be taken as legal, professional, or official guidance.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">5. User Responsibility</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-4">By using this tool, you agree that:</p>
                <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
                  <li>You are responsible for your own output and how you use it</li>
                  <li>You will not misuse the tool for illegal, harmful, or misleading purposes</li>
                  <li>You will not falsely imply endorsement by Charli XCX or any third party</li>
                </ul>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">6. External Links</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-4">
                  Our website may contain links to third-party websites. We are not responsible for:
                </p>
                <ul className="hp-body-text mb-12 list-disc pl-6 space-y-3">
                  <li>Their content</li>
                  <li>Their privacy practices</li>
                  <li>Any damages or issues arising from visiting them</li>
                </ul>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">7. Limitation of Liability</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-4">
                  IbratGenerator.com and its creators are not liable for any loss, damage, or consequence arising from:
                </p>
                <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
                  <li>Using the tool</li>
                  <li>Errors in generated content</li>
                  <li>Technical issues or downtime</li>
                  <li>User misuse of generated materials</li>
                </ul>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">All usage is strictly at your own risk.</p>
              </div>

              <div className="pt-16 border-t-2 border-black/5">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6">8. Contact</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  For questions or concerns, visit our <Link href="/contact" className="hp-link">Contact page</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
