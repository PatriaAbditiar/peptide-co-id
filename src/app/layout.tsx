import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://peptide.co.id";
const SITE_NAME = "Peptide.co.id";
const DEFAULT_TITLE = "Peptide.co.id — Pusat Informasi Peptida Terlengkap di Indonesia";
const DEFAULT_DESC = "Panduan lengkap 40+ peptida dalam Bahasa Indonesia: BPC-157, TB-500, Semaglutide, Retatrutide, dan lainnya. Direktori toko, kalkulator dosis, dan stack guide.";

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Peptide.co.id",
  },
  description: DEFAULT_DESC,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: "Tim Editorial Peptide.co.id" }],
  generator: "Next.js",
  keywords: [
    "peptida Indonesia",
    "BPC-157 Indonesia",
    "TB-500 Indonesia",
    "Semaglutide Indonesia",
    "Retatrutide Indonesia",
    "Ozempic Indonesia",
    "Ipamorelin",
    "CJC-1295",
    "GHK-Cu",
    "peptida recovery",
    "growth hormone peptida",
    "peptida anti-aging",
    "beli peptida Indonesia",
    "harga peptida",
    "toko peptida",
    "cara beli peptida",
    "kalkulator reconstitusi peptida",
    "BAC water",
    "panduan peptida",
    "GLP-1 Indonesia",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Tim Editorial Peptide.co.id",
  publisher: "Peptide.co.id",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peptide.co.id — Pusat Informasi Peptida Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      id: SITE_URL,
      "id-ID": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  category: "health",
  classification: "Informational / Educational",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" dir="ltr">
      <head>
        <link rel="alternate" hrefLang="id" href={SITE_URL} />
        <link rel="alternate" hrefLang="id-ID" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      </head>
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
