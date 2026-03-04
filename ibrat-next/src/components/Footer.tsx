import Link from "next/link";

const toolLinks = [
  { href: "/brat-maker", label: "Brat Maker" },
  { href: "/brat-text-generator", label: "Brat Text Generator" },
  { href: "/brat-name-generator", label: "Brat Name Generator" },
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold text-foreground">Ibrat Generator</span>
            </Link>
            <p className="mt-3 text-sm text-foreground/70 max-w-xs">
              Create brat-style text, images, and profile pictures for free. No signup required.
            </p>
          </div>

          {/* Tools column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Tools</h3>
            <ul className="mt-4 space-y-3">
              {toolLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground hover:underline underline-offset-2"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground hover:underline underline-offset-2"
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
