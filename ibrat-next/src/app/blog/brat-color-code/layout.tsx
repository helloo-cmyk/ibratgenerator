import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Brat Color Code - The Official Brat Green Hex Code (#89CC04)",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-color-code/",
  },
  description:
    "Discover the official brat color code (#89CC04). Get the exact hex, RGB, and HSL values for the iconic Charli XCX Brat green used on the 2024 album cover.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
