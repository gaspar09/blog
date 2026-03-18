import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Gaspar | Blog",
  description: "Personal blog by Gaspar — writing about software, design, and the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
