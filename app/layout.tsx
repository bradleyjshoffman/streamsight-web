import type { Metadata } from "next";
import { Chakra_Petch, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://streamsight.co"),
  title: {
    default: "Streamsight | Process Flow Visualization",
    template: "%s | Streamsight",
  },
  description:
    "Streamsight is an early-stage process flow visualization project for teams that need clearer operational context, interactive diagrams, and faster decisions.",
  keywords: [
    "process flow visualization",
    "workflow visualization",
    "operational context",
    "interactive flow diagrams",
    "systems visualization",
    "operations software",
  ],
  applicationName: "Streamsight",
  category: "software",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Streamsight | Process Flow Visualization",
    description:
      "An early-stage process flow visualization project focused on clearer operational systems, interactive diagrams, and faster decision-making.",
    type: "website",
    url: "https://streamsight.co",
    siteName: "Streamsight",
    images: [
      {
        url: "https://streamsight.co/og-image.png?v=2",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Streamsight process flow visualization preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${chakraPetch.variable}`}>
        <div className="site-frame">
          <header className="site-header">
            <Link className="brand-mark" href="/" aria-label="Streamsight home">
              <Image
                className="brand-badge"
                src="/icon.svg"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
              />
              <span className="brand-name">Streamsight</span>
            </Link>
            <nav className="site-nav" aria-label="Primary">
              <Link href="/about">About</Link>
              <Link href="/notes">Notes</Link>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <div className="footer-intro">
              <p className="footer-brand">Streamsight</p>
              <p className="footer-copy">
                Early-stage process flow visualization software for operational
                clarity.
              </p>
            </div>
            <div className="footer-links">
              <Link href="/about">About Streamsight</Link>
              <Link href="/notes">Streamsight Notes</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
