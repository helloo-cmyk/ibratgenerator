import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Brat Captions for Instagram (50+ Real Examples You Can Copy)",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-captions-for-instagram/",
  },
  description:
    "Get 50+ brat captions for Instagram you can copy, plus practical tips to write your own short, bold, and natural captions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
