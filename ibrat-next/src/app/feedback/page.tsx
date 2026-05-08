import type { Metadata } from "next";
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
    <main className="hp-root pb-24">
      {/* ── HEADER ── */}
      <section className="hp-hero px-4 pb-12 border-b border-[var(--hp-border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="hp-hero-heading mt-6 mb-4 mx-auto !text-4xl sm:!text-5xl lg:!text-6xl">
            Feedback
          </h1>
          <p className="intro-text max-w-2xl mx-auto opacity-80">
            Have feedback or suggestions? Let us know what we can improve or what you&apos;d like to see next.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="px-4 pt-12 max-w-[500px] mx-auto">
        <FeedbackForm />
      </article>
    </main>
  );
}
