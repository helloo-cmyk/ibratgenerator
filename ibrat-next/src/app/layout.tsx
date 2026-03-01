import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ibrat Generator",
    url: "https://ibratgenerator.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Brat Generator",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    url: "https://ibratgenerator.com",
    description:
      "Create brat-style text, images, memes, and profile pictures instantly with this free online generator.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibratgenerator.com"),
  title: {
    default: "Ibrat Generator",
    template: "%s | Ibrat Generator",
  },
  description: "Create Brat-style text, images, and graphics online. Free Brat generator for memes, captions, and social media.",
  openGraph: {
    siteName: "Ibrat Generator",
    title: "Ibrat Generator",
    description: "Create Brat-style text, images, and graphics online. Free Brat generator for memes, captions, and social media.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <Script
          id="schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1 px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
