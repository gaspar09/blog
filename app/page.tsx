import Link from "next/link";
import { Nav } from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaspar | Blog",
  description: "Personal blog by Gaspar — writing about software, design, and the web.",
};

export default function HomePage() {
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
            <p className="text-sm text-[var(--muted)]">No posts yet. Check back soon.</p>
          </main>
        </div>
      </div>
    </div>
  );
}
