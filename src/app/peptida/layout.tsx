import type { Metadata } from "next";
import { peptides } from "@/lib/peptides";

export const metadata: Metadata = {
  title: `Daftar Lengkap ${peptides.length}+ Peptida Indonesia — Cari & Filter`,
  description: `Ensiklopedia ${peptides.length}+ peptida dalam Bahasa Indonesia. Cari BPC-157, TB-500, Semaglutide, Retatrutide, Ipamorelin, dan lainnya. Filter berdasarkan kategori dan status FDA.`,
  keywords: [
    "daftar peptida Indonesia",
    "jenis peptida",
    "peptida populer",
    "ensiklopedia peptida",
    "peptida FDA approved",
    "peptida recovery",
    "peptida anti-aging",
    "peptida weight loss",
    "BPC-157",
    "Semaglutide",
    "Retatrutide",
  ],
  alternates: {
    canonical: "https://peptide.co.id/peptida",
    languages: {
      id: "https://peptide.co.id/peptida",
      "id-ID": "https://peptide.co.id/peptida",
      "x-default": "https://peptide.co.id/peptida",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: `${peptides.length}+ Peptida Indonesia — Daftar Lengkap`,
    description: `Ensiklopedia peptida terlengkap di Indonesia. Filter berdasarkan kategori dan status FDA.`,
    url: "https://peptide.co.id/peptida",
    siteName: "Peptide.co.id",
  },
};

export default function PeptidaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
