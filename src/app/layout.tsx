import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Peptide.co.id — Pusat Informasi Peptida Indonesia",
    template: "%s | Peptide.co.id",
  },
  description:
    "Sumber informasi terpercaya tentang peptida di Indonesia. Panduan lengkap 26+ peptida, direktori toko, dan riset terbaru.",
  metadataBase: new URL("https://peptide.co.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://peptide.co.id",
    siteName: "Peptide.co.id",
    title: "Peptide.co.id — Pusat Informasi Peptida Indonesia",
    description:
      "Sumber informasi terpercaya tentang 26+ peptida di Indonesia. Panduan, riset, dan direktori toko peptida.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://peptide.co.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
