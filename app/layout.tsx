import type { Metadata } from "next";
import { Chakra_Petch, Space_Grotesk } from "next/font/google";
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
  title: "Streamsight | Coming Soon",
  description:
    "Streamsight is launching soon. Interactive flow visualization software for faster operational decisions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Streamsight | Coming Soon",
    description:
      "Streamsight is launching soon. Interactive flow visualization software for faster operational decisions.",
    type: "website",
    url: "https://streamsight.co",
    images: [
      {
        url: "https://streamsight.co/og-image.png?v=2",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Streamsight coming soon preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamsight | Coming Soon",
    description:
      "Interactive flow visualization software for faster operational decisions.",
    images: ["https://streamsight.co/og-image.png?v=2"],
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
        {children}
      </body>
    </html>
  );
}
