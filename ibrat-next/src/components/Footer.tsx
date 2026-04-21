import Link from "next/link";
import Image from "next/image";

const toolLinks = [
  { href: "/brat-maker/", label: "brat maker" },
  { href: "/brat-text-generator/", label: "brat text generator" },
  { href: "/brat-name-generator", label: "Brat Name Generator" },
  { href: "/brat-font-generator/", label: "Brat Font Generator" },

  { href: "/brat-album-cover-generator/", label: "Brat Album Cover Generator" },
  { href: "/brat-green-generator/", label: "Brat Green Generator" },
  { href: "/brat-summer-meme-generator/", label: "Brat Summer Meme Generator" },
];

const styleLinks = [
  { href: "/brat-generator-pink/", label: "Pink Brat Generator" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-soft bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="ibrat logo" width={120} height={32} className="w-auto h-[32px]" />
            </Link>
            <p className="mt-4 text-sm text-foreground/70 max-w-xs leading-relaxed">
              Create brat-style text, images, and profile pictures for free. No signup required.
            </p>
          </div>

          {/* Tools column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/90">Tools</h3>
            <ul className="mt-4 space-y-3">
              {toolLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground hover:underline underline-offset-4 decoration-2 decoration-[#CCFF00]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Styles column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/90">Styles</h3>
            <ul className="mt-4 space-y-3">
              {styleLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground hover:underline underline-offset-4 decoration-2 decoration-[#CCFF00]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/90">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground hover:underline underline-offset-4 decoration-2 decoration-[#CCFF00]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-8 sm:flex-row">
          <p className="text-sm text-foreground/70">
            © {currentYear} Ibrat Generator. All rights reserved.
          </p>
          <Link
            href="/contact-us"
            className="text-sm text-foreground/80 font-medium transition-colors hover:text-foreground hover:underline underline-offset-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
