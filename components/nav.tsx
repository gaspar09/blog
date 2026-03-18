"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "about" },
  { href: "/", label: "posts" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-6 md:flex-col md:gap-4" aria-label="Main navigation">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm tracking-wide transition-colors ${
            pathname === href
              ? "text-[var(--foreground)] font-medium"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
