import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SellerFilter from "@/components/SellerFilter";
import sellersData from "../../../data/sellers.json";
import { Seller } from "@/lib/types";

export const metadata: Metadata = {
  title: "Toko Peptida Indonesia — Direktori Supplier Terpercaya",
  description:
    "Direktori toko peptida terpercaya di Indonesia. Daftar supplier lokal dan internasional yang melayani pengiriman peptida ke Indonesia.",
  alternates: { canonical: "https://peptide.co.id/toko-peptida" },
  openGraph: {
    title: "Toko Peptida Indonesia — Direktori Supplier Terpercaya",
    description: "Daftar supplier peptida lokal dan internasional untuk Indonesia.",
    url: "https://peptide.co.id/toko-peptida",
  },
};

export default function TokoPeptidaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Toko Peptida Indonesia — Direktori Supplier Terpercaya",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    author: { "@type": "Organization", name: "Peptide.co.id" },
    publisher: { "@type": "Organization", name: "Peptide.co.id", url: "https://peptide.co.id" },
    inLanguage: "id",
    mainEntityOfPage: "https://peptide.co.id/toko-peptida",
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Toko Peptida" }]} />
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-900">
            Direktori Toko Peptida
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Supplier peptida lokal dan internasional yang melayani pengiriman ke Indonesia. Gunakan filter untuk menemukan toko sesuai kebutuhan.
          </p>
          <div className="mt-5 flex items-start gap-3 bg-amber-50/80 border border-amber-200/60 rounded-xl px-4 py-3 max-w-2xl">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-amber-800 leading-relaxed">
              Peptide.co.id tidak mendukung atau menjamin kualitas produk dari toko manapun. Lakukan riset mandiri sebelum pembelian.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SellerFilter sellers={sellersData.sellers as Seller[]} />

        <section className="mt-16 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 px-8 sm:px-12 py-12">
          <h2 className="text-2xl font-serif text-white">Daftarkan Toko Anda</h2>
          <p className="mt-3 text-slate-400 max-w-xl">
            Apakah Anda supplier peptida yang melayani pasar Indonesia? Daftarkan toko Anda di direktori kami untuk menjangkau lebih banyak pelanggan.
          </p>
          <a
            href="mailto:info@peptide.co.id?subject=Pendaftaran Toko Peptida"
            className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
          >
            Hubungi Kami
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
