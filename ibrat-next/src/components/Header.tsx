"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/brat-maker", label: "Brat Maker" },
  { href: "/brat-text-generator", label: "Brat Text" },
  { href: "/brat-name-generator", label: "Brat Name" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="mx-auto flex max-w-6xl justify-between items-center px-4 sm:px-6 py-4 sm:py-5">
        <Link href="/" className="flex items-center flex-shrink-0">
        <Image src="/logo.png" alt="Ibrat Generator" width={120} height={44} className="h-11 w-auto" priority />
      </Link>
      <nav
        className="flex items-center"
        aria-label="Main navigation"
      >
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8 sm:gap-y-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="border-b border-black/5">
                <Link
                  href={href}
                  className={`flex min-h-[44px] items-center py-3 text-base font-medium sm:text-sm transition-all duration-200 ease-in-out hover:opacity-70 ${
                    isActive
                      ? "font-semibold underline underline-offset-4 text-foreground"
                      : "no-underline text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
    </header>
  );
}
