import type { Metadata } from "next";
import Link from "next/link";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = {
  title: {
    absolute: "Feedback | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/feedback/",
  },
  description:
    "Have feedback or suggestions? Let us know what we can improve or what you'd like to see next on Ibrat Generator.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function FeedbackPage() {
  return (
    <main className="hp-root pb-32">
      {/* ── HEADER ── */}
      <section className="bg-white pt-32 pb-24 px-4 border-b-2 border-black/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Vibe</span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl sm:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
              Feedback
            </h1>
            <p className="text-[18px] sm:text-[22px] font-medium leading-tight italic border-l-4 border-[#89CC04] pl-10 max-w-2xl">
              Have feedback or suggestions? Let us know what we can improve or what you&apos;d like to see next on Ibrat Generator.
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-zinc-50/50 py-24 px-4 overflow-hidden border-b border-black/5">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Thoughts</span>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-12 border-2 border-black shadow-[20px_20px_0px_rgba(0,0,0,0.03)]">
                  <FeedbackForm />
                </div>

                <div className="mt-16 bg-black text-white p-10">
                  <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6 text-[#89CC04]">Our Transparency Commitment</h2>
                  <p className="text-[17px] opacity-80 leading-relaxed mb-6">
                    Unlike large corporate platforms, Ibrat Generator is a community-first project. We believe in radical transparency when it comes to our development roadmap. When you submit feedback, you aren&apos;t just sending a message into a void; you are contributing to a living design system that prioritizes speed, accessibility, and aesthetic precision over profit.
                  </p>
                  <p className="text-[17px] opacity-80 leading-relaxed italic">
                    We aim to address critical bug reports within 72 hours and review all feature requests during our monthly planning sessions.
                  </p>
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-5 flex flex-col gap-12">
                <div>
                  <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-4 border-b-2 border-black inline-block">Comprehensive Guidelines</h2>
                  <p className="hp-body-text text-[17px] opacity-70 mb-6">
                    To help us evolve Ibrat Generator into the ultimate creative suite, we value specific and actionable input. Here is how you can help:
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[13px] font-black uppercase tracking-widest mb-2 opacity-100">Technical Diagnostics</h3>
                      <p className="text-[15px] opacity-60 leading-relaxed">
                        If you encounter a bug—especially with image rendering or download triggers—please specify if you are on iOS, Android, or Desktop. Mentioning your browser (Chrome, Safari, etc.) helps us replicate and squash bugs in minutes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[13px] font-black uppercase tracking-widest mb-2 opacity-100">Aesthetic Evolution</h3>
                      <p className="text-[15px] opacity-60 leading-relaxed">
                        The "Brat" look is about more than just a green square. If you feel our typography spacing, blur amounts, or font weights need adjustment to better match the authentic Charli XCX visual language, we want to hear your design critique.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[13px] font-black uppercase tracking-widest mb-2 opacity-100">Feature Requests</h3>
                      <p className="text-[15px] opacity-60 leading-relaxed">
                        Looking for new colorways like "Toxic Pink" or "Radioactive Yellow"? Or perhaps you need specific export formats for print? Let us know which tools would make your creative process more seamless.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#89CC04]/5 p-8 border-2 border-[#89CC04]/20">
                  <h2 className="text-xl font-black italic uppercase tracking-tighter mb-4">Privacy First</h2>
                  <p className="hp-body-text text-[15px] opacity-70 m-0">
                    Your privacy is non-negotiable. The information you provide in this form is used exclusively for improving the tool and responding to your inquiry. We never store your IP address or personal data longer than necessary to resolve your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL INFO SECTION ── */}
      <section className="bg-white py-32 px-4">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Manifesto</span>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9]">The Power of Fan-Driven Innovation</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-8 opacity-80">
                  Ibrat Generator was born out of a desire to make high-end design accessible. When "Brat Summer" took over the internet, we saw a gap: fans were forced to use overly complex software or pay for clunky apps just to participate in a cultural moment. We built this to be the antidote to that friction.
                </p>
                <p className="hp-body-text text-[18px] leading-relaxed mb-8 opacity-80">
                  But staying relevant requires constant iteration. We don&apos;t rely on automated algorithms to decide our next update; we rely on the emails and feedback forms sent by real people. Whether it&apos;s a request for more font options or a fix for a specific Android browser, your input is what keeps this platform as the #1 destination for Brat-style creativity.
                </p>
                <p className="hp-body-text text-[18px] leading-relaxed opacity-80 font-bold italic border-l-4 border-black pl-8">
                  "This tool belongs to the community as much as it belongs to the developers. Every click and every suggestion shapes our future."
                </p>
              </div>
              <div className="flex flex-col gap-12">
                <div className="bg-zinc-50 p-12 border-2 border-black/5">
                  <h3 className="text-2xl font-black italic uppercase mb-6 tracking-tight">How We Process Your Input</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <span className="font-black text-[#89CC04]">01</span>
                      <p className="text-[16px] opacity-70 m-0"><strong>Triage:</strong> We categorize feedback into bugs, features, and general praise or complaints.</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-black text-[#89CC04]">02</span>
                      <p className="text-[16px] opacity-70 m-0"><strong>Verification:</strong> Bug reports are tested across multiple physical devices and browser environments.</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-black text-[#89CC04]">03</span>
                      <p className="text-[16px] opacity-70 m-0"><strong>Implementation:</strong> Accepted features are added to our sprint cycle and deployed within weeks.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 text-white p-10 flex flex-col justify-center">
                  <h3 className="text-xl font-bold italic uppercase mb-4 tracking-tight text-[#89CC04]">Need Immediate Support?</h3>
                  <p className="text-[16px] opacity-60 mb-8">
                    If you are experiencing an urgent technical issue or have a business inquiry, please use our primary contact channel.
                  </p>
                  <Link href="/contact" className="w-fit bg-[#89CC04] text-black px-8 py-4 font-black uppercase italic tracking-tighter text-sm hover:bg-white transition-all">
                    Visit Contact Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
