import Link from "next/link";
import HomeScrollReveal from "@/components/HomeScrollReveal";
import BlogList from "@/components/BlogList";
import AdBanner from "@/components/AdBanner";

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

      {/* ── BLOG ADS ── */}
      <div className="w-full flex justify-center mt-8 mb-4 px-4">
        <AdBanner adKey="c08f3c01b8d75d9f5c29d292ee34c7e2" format="iframe" height={250} width={300} />
      </div>

      {/* ── ARTICLES GRID & SEARCH ── */}
      <BlogList />

      <HomeScrollReveal />
    </main>
  );
}
