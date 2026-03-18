import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gaspar",
  description: "Learn more about Gaspar — software developer and writer.",
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/gaspar09" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:gap-20">

          {/* Sidebar */}
          <aside className="mb-10 md:mb-0 md:w-32 shrink-0">
            <Link href="/" className="block mb-8 text-sm font-semibold tracking-tight text-[var(--foreground)]">
              gaspar
            </Link>
            <Nav />
          </aside>

          {/* Main content */}
          <main className="flex-1 max-w-xl">
            <div className="flex items-start gap-5 mb-10">
              <Image
                src="/avatar.jpg"
                alt="Gaspar's profile photo"
                width={64}
                height={64}
                className="rounded-full object-cover shrink-0"
              />
              <div>
                <h1 className="text-xl font-semibold text-[var(--foreground)] text-balance">
                  Gaspar
                </h1>
                <p className="text-sm text-[var(--muted)] mt-0.5">
                  Software Developer & Writer
                </p>
              </div>
            </div>

            <div className="space-y-5 text-[var(--foreground)] leading-relaxed">
              <p>
                {"I'm a software developer interested in building products on the web. My work lives at the intersection of clean engineering and thoughtful design."}
              </p>
              <p>
                {"I started this blog to share what I learn along the way — from specific technical topics to broader thoughts on software and craft. Writing helps me think, and I hope it's useful to others too."}
              </p>
              <p>
                {"When I'm not coding, I'm usually reading, exploring new tools, or working on side projects."}
              </p>
            </div>

            {/* Social links */}
            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
                Find me on
              </h2>
              <ul className="space-y-2">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent)] hover:underline underline-offset-4"
                    >
                      {label} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
