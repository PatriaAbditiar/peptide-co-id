import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";
import { categories, peptides } from "@/lib/peptides";
import { stacks } from "@/lib/stacks";
import RegulatoryBadge from "@/components/RegulatoryBadge";
import { SITE_CONFIG } from "@/lib/config";

const stats = [
  { value: `${peptides.length}+`, label: "Panduan Peptida" },
  { value: `${categories.length}`, label: "Kategori" },
  { value: "100%", label: "Bahasa Indonesia" },
];

const popularPeptides = ["bpc-157", "tb-500", "ipamorelin", "semaglutide", "ghk-cu", "pt-141"];

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://peptide.co.id/#website",
      name: "Peptide.co.id",
      url: "https://peptide.co.id",
      description: "Pusat informasi peptida terlengkap di Indonesia — 40+ panduan peptida, kalkulator dosis, stack guide, dan direktori toko.",
      inLanguage: "id-ID",
      publisher: { "@id": "https://peptide.co.id/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://peptide.co.id/peptida?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://peptide.co.id/#organization",
      name: "Peptide.co.id",
      url: "https://peptide.co.id",
      logo: "https://peptide.co.id/og-image.png",
      description: "Pusat informasi peptida pertama dan terlengkap di Indonesia.",
      foundingDate: "2024",
      areaServed: { "@type": "Country", name: "Indonesia" },
      knowsLanguage: ["id", "en"],
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@peptide.co.id",
        contactType: "editorial",
        availableLanguage: ["Indonesian", "English"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://peptide.co.id/#webpage",
      url: "https://peptide.co.id",
      name: "Peptide.co.id — Pusat Informasi Peptida Indonesia",
      isPartOf: { "@id": "https://peptide.co.id/#website" },
      about: {
        "@type": "MedicalEntity",
        name: "Peptida Terapeutik dan Riset",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Masyarakat umum Indonesia, atlet, peneliti, fitness enthusiast",
        geographicArea: { "@type": "Country", name: "Indonesia" },
      },
      inLanguage: "id-ID",
      lastReviewed: "2024-01-15",
      specialty: { "@type": "MedicalSpecialty", name: "Endocrinology / Sports Medicine" },
    },
  ];

  const featured = peptides.filter((p) => popularPeptides.includes(p.slug));
  const fdaApproved = peptides.filter((p) => p.regulatoryStatus === "fda-approved");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-teal-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              {peptides.length}+ peptida terdokumentasi
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif text-white leading-[1.1]">
              Pusat Informasi<br />
              Peptida Terlengkap<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                di Indonesia
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              Panduan mendalam berbasis riset untuk {peptides.length}+ peptida — dari BPC-157 hingga Semaglutide. Direktori toko, panduan pemula, dan semua yang perlu Anda ketahui.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/peptida"
                className="px-6 py-3.5 bg-white text-slate-900 font-medium rounded-xl hover:shadow-xl hover:shadow-white/10 transition-all text-center"
              >
                Jelajahi Semua Peptida
              </Link>
              <Link
                href="/panduan/pemula"
                className="px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-center"
              >
                Panduan Pemula
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900">
            Jelajahi Berdasarkan Kategori
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Peptida diorganisir berdasarkan fungsi utamanya. Pilih kategori untuk mempelajari lebih lanjut.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const count = peptides.filter((p) => p.categorySlug === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/peptida?kategori=${cat.slug}`}
                className="group p-5 rounded-2xl border border-slate-200/80 bg-white card-hover"
              >
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{count} peptida</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Peptides */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900">
                Peptida Populer
              </h2>
              <p className="mt-2 text-slate-500">Yang paling banyak dicari di Indonesia</p>
            </div>
            <Link href="/peptida" className="hidden sm:flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 font-medium">
              Lihat semua
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/peptida/${p.slug}`}
                className="group p-6 rounded-2xl border border-slate-200/80 bg-white card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{p.icon}</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-500">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {p.tagline}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Baca selengkapnya
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/peptida" className="text-sm text-teal-600 font-medium">Lihat semua {peptides.length}+ peptida &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-xs text-cyan-700 mb-3">
            <span>⚡</span>Tools Gratis
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900">
            Tools &amp; Sumber Daya
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Kalkulator dosis, stack guide, dan glosarium — semua yang Anda butuhkan untuk navigasi dunia peptida.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/kalkulator" className="group p-6 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-cyan-50/50 to-white card-hover">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-2xl">
              🧮
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
              Kalkulator Reconstitusi
            </h3>
            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
              Hitung konsentrasi, volume per dosis, dan unit syringe (U-100) untuk peptida apapun.
            </p>
            <span className="mt-4 inline-flex items-center text-sm text-teal-600 font-medium">
              Buka kalkulator
              <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link href="/stacks" className="group p-6 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-purple-50/50 to-white card-hover">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl">
              🧬
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
              Stacks Peptida
            </h3>
            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
              {stacks.length} kombinasi populer — Wolverine Stack, Classic GH Stack, dan lainnya.
            </p>
            <span className="mt-4 inline-flex items-center text-sm text-teal-600 font-medium">
              Lihat stacks
              <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link href="/kamus" className="group p-6 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-blue-50/50 to-white card-hover">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl">
              📖
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
              Kamus Peptida
            </h3>
            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
              Glosarium 30+ istilah — GHRH, BAC water, U-100 syringe, IGF-1, dan lainnya dijelaskan.
            </p>
            <span className="mt-4 inline-flex items-center text-sm text-teal-600 font-medium">
              Buka kamus
              <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* FDA Approved Section */}
      <section className="bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 border-y border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Regulatory Approved</span>
          </div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900">
                Peptida yang Disetujui FDA
              </h2>
              <p className="mt-2 text-slate-500 max-w-2xl">
                {fdaApproved.length} peptida dengan persetujuan FDA penuh — telah melalui uji klinis dan memiliki data keamanan terdokumentasi.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fdaApproved.map((p) => (
              <Link
                key={p.slug}
                href={`/peptida/${p.slug}`}
                className="group relative p-6 rounded-2xl bg-white border border-emerald-100 card-hover overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{p.icon}</span>
                    <RegulatoryBadge status={p.regulatoryStatus} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">{p.tagline}</p>
                  {p.approvalNote && (
                    <p className="mt-3 text-xs text-emerald-700 leading-relaxed bg-emerald-50/50 rounded-lg p-2.5 border border-emerald-100/60">
                      {p.approvalNote}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 max-w-3xl mx-auto bg-white/60 border border-slate-200 rounded-xl p-4">
            <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Catatan:</strong> Persetujuan FDA bersifat spesifik per indikasi. Penggunaan untuk tujuan lain (off-label) tidak otomatis disetujui. Status di Indonesia diatur secara terpisah oleh BPOM — beberapa obat seperti Ozempic terdaftar, lainnya belum.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-10">
          Panduan &amp; Artikel
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/panduan/pemula" className="group p-6 rounded-2xl border border-slate-200/80 bg-white card-hover">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <span className="text-lg">📖</span>
            </div>
            <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">Panduan Pemula</h3>
            <p className="mt-2 text-sm text-slate-500">Apa itu peptida, bagaimana cara kerjanya, dan mengapa semakin populer di Indonesia.</p>
          </Link>
          <Link href="/panduan/recovery-olahraga" className="group p-6 rounded-2xl border border-slate-200/80 bg-white card-hover">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-lg">💪</span>
            </div>
            <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">Recovery Olahraga</h3>
            <p className="mt-2 text-sm text-slate-500">Peptida yang diteliti untuk pemulihan cedera dan performa atlet.</p>
          </Link>
          <Link href="/panduan/cara-beli" className="group p-6 rounded-2xl border border-slate-200/80 bg-white card-hover">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
              <span className="text-lg">🛒</span>
            </div>
            <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">Cara Beli di Indonesia</h3>
            <p className="mt-2 text-sm text-slate-500">Tips memilih vendor, verifikasi kualitas, dan menghindari produk palsu.</p>
          </Link>
        </div>
      </section>

      {/* Seller CTA */}
      {SITE_CONFIG.SHOW_SELLERS && (
        <section className="mx-4 sm:mx-6 lg:mx-8 mb-20">
          <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
            <div className="px-8 sm:px-12 py-12 sm:py-16">
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Cari Toko Peptida Terpercaya
              </h2>
              <p className="mt-3 text-slate-400 max-w-xl">
                Direktori toko peptida lokal dan internasional yang melayani pengiriman ke Indonesia. Terverifikasi dan terpercaya.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/toko-peptida" className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all text-center">
                  Lihat Direktori Toko
                </Link>
                <Link href="/panduan/cara-beli" className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700/50 transition-all text-center">
                  Panduan Cara Beli
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Email */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <EmailSignup />
      </section>
    </>
  );
}
