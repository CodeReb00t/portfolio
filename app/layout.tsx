import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Terminal",
  description:
    "Interactive terminal-based portfolio showcasing development skills and projects",
  keywords: [
    "portfolio",
    "developer",
    "terminal",
    "programming",
    "web development",
  ],
  authors: [{ name: "Devansh Kumar Gupta" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}
