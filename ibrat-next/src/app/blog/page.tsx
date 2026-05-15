import Link from "next/link";
import HomeScrollReveal from "@/components/HomeScrollReveal";
import BlogList from "@/components/BlogList";

export const metadata = {
  title: {
    absolute: "Brat Generator Blog - Trends, Aesthetics & How-Tos",
  },
  description: "Read the latest articles about the Brat aesthetic, Charli XCX trends, and how to create the best brat text memes online.",
  alternates: {
    canonical: "https://ibratgenerator.com/blog/",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="hp-root pb-24">
      
      {/* ── HERO ── */}
      <section className="bg-white pt-24 pb-16 px-4 border-b border-black/5">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter mb-4">
            The Blog
          </h1>
          <p className="text-lg opacity-60 max-w-xl font-medium leading-relaxed italic border-l-2 border-[#89CC04] pl-6">
            Insights, trends, and guides for the Brat aesthetic.
          </p>
        </div>
      </section>

      {/* ── ARTICLES GRID & SEARCH ── */}
      <BlogList />

      <HomeScrollReveal />
    </main>
  );
}
