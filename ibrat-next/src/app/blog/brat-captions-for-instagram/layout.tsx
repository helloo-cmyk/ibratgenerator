import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Brat Captions for Instagram - 60+ Ideas [2026]",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-captions-for-instagram/",
  },
  description:
    "60+ brat captions for Instagram - curated for selfies, night-out shots, and full Charli XCX energy. All free to copy. Pair with a brat image and post now.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
