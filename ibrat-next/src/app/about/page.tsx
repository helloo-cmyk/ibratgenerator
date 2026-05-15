import Link from "next/link";

export const metadata = {
  title: {
    absolute: "About Us | Ibrat Generator",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/about/",
  },
  description:
    "Learn about the story behind Ibrat Generator, why we built the ultimate Brat-style text maker, and our mission to provide free creative tools for fans and creators.",
};

export default function AboutPage() {
  return (
    <main className="hp-root pb-32">
      {/* ── HEADER ── */}
      <section className="bg-white pt-32 pb-24 px-4 border-b-2 border-black/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Identity</span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl sm:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
              About Ibrat Generator
            </h1>
            <p className="text-[18px] sm:text-[22px] font-medium leading-tight italic border-l-4 border-[#89CC04] pl-10 max-w-2xl">
              The story behind the web&apos;s favorite Brat-style creative tool.
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-zinc-50/50 py-24 px-4 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex gap-12 group">
          <div className="w-12 flex-shrink-0 flex items-start pt-4">
            <span className="text-[12px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-all">Manifesto</span>
          </div>
          <div className="flex-1">
            <article className="max-w-3xl">
              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">Meet the Creator</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">
                  Hi, I&apos;m the founder of <strong>Ibrat Generator</strong>. I&apos;m a web developer and digital designer based in the <strong>United States</strong> with a passion for building focused, high-speed creative tools that solve specific problems for the community.
                </p>
              </div>
              
              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">Why I Built This Tool</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">
                  The idea for ibratgenerator.com came during the peak of "Brat Summer." I noticed that while everyone wanted to recreate the iconic Charli XCX album aesthetic, most people were struggling with complex design software like Photoshop or paying for mobile apps just to add some text to a green square.
                </p>
                <p className="hp-body-text text-[18px] leading-relaxed mb-6">
                  I wanted to build a "one-click" solution: a tool that was entirely free, required no signup, and worked perfectly on a mobile browser. I spent a few weeks perfecting the typography rules, the specific stretched-text look, and the color hex codes to ensure that anyone, regardless of their design skill, could create an authentic Brat visual in seconds.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-black inline-block">What We Do</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-8">
                  Ibrat Generator is a dedicated creative suite for fans, content creators, and social media enthusiasts. We provide:
                </p>
                <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3">
                  <li><strong>Brat Text Generator:</strong> The fastest way to turn words into aesthetic images.</li>
                  <li><strong>Brat PFP Maker:</strong> Specifically sized 1:1 exports for TikTok and Instagram avatars.</li>
                  <li><strong>Brat Maker:</strong> A more advanced tool for layering stickers and custom layouts.</li>
                </ul>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b-4 border-[#89CC04] inline-block">Our Location & Operations</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  Everything on this site is built to be fast and privacy-friendly. We don&apos;t store your images on our servers, and we don&apos;t hide features behind paywalls. Our mission is to keep creative expression accessible to everyone.
                </p>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  We are a small, independent team operating out of the <strong>United States</strong>. Building tools for a global audience allows us to stay connected with the latest digital trends while maintaining a lean, user-focused approach to development.
                </p>
              </div>

              <div className="pt-16 border-t-2 border-black/5">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6">Get In Touch</h2>
                <p className="hp-body-text text-[18px] leading-relaxed mb-12">
                  I love hearing from users! Whether you have a feature suggestion, found a bug, or just want to show off what you created, feel free to reach out. You can email us directly at <strong>ibratgenerator@gmail.com</strong> or use our{" "}
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
