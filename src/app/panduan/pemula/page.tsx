import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import EmailSignup from "@/components/EmailSignup";
import { categories, peptides } from "@/lib/peptides";

export const metadata: Metadata = {
  title: "Panduan Pemula Peptida Indonesia — Apa Itu Peptida & Cara Mulai",
  description:
    "Panduan pemula peptida dalam Bahasa Indonesia: apa itu peptida, manfaat, jenis populer (BPC-157, Semaglutide), status legal BPOM, dan tips beli dengan aman.",
  keywords: [
    "panduan peptida pemula",
    "apa itu peptida",
    "peptida Indonesia",
    "cara mulai peptida",
    "jenis peptida",
    "peptida adalah",
    "manfaat peptida",
    "peptida BPOM",
    "peptida legal Indonesia",
  ],
  alternates: {
    canonical: "https://peptide.co.id/panduan/pemula",
    languages: {
      id: "https://peptide.co.id/panduan/pemula",
      "id-ID": "https://peptide.co.id/panduan/pemula",
      "x-default": "https://peptide.co.id/panduan/pemula",
    },
  },
  openGraph: {
    type: "article",
    locale: "id_ID",
    title: "Panduan Pemula Peptida Indonesia",
    description: "Apa itu peptida dan mengapa semakin populer di Indonesia? Mulai dari sini.",
    url: "https://peptide.co.id/panduan/pemula",
    siteName: "Peptide.co.id",
  },
};

const faqs = [
  { question: "Apakah peptida sama dengan steroid?", answer: "Tidak. Peptida adalah rantai pendek asam amino, sedangkan steroid anabolik adalah senyawa sintetis yang meniru testosteron. Mekanisme aksi, efek, dan profil risikonya sangat berbeda." },
  { question: "Apakah peptida legal di Indonesia?", answer: "Status hukum peptida di Indonesia berada di area abu-abu. Peptida tidak secara spesifik dilarang untuk kepemilikan pribadi, tetapi juga tidak disetujui sebagai obat oleh BPOM. Beberapa peptida termasuk dalam daftar zat terlarang WADA untuk atlet kompetitif." },
  { question: "Apakah peptida aman?", answer: "Keamanan peptida sangat tergantung jenis, sumber produk, dan cara penggunaan. Banyak peptida menunjukkan profil keamanan baik dalam penelitian praklinis, tetapi data klinis manusia masih terbatas. Risiko utama: kontaminasi produk dari sumber tidak terpercaya." },
  { question: "Bagaimana cara menyimpan peptida?", answer: "Serbuk lyophilized stabil di suhu ruangan jangka pendek, namun sebaiknya simpan di kulkas (2-8°C). Setelah direkonstitusi, simpan di kulkas dan gunakan dalam 2-4 minggu." },
  { question: "Dimana saya bisa membeli peptida di Indonesia?", answer: "Dari vendor internasional yang mengirim ke Indonesia atau supplier lokal. Kunci utama: vendor menyediakan CoA pihak ketiga dan memiliki reputasi baik. Lihat halaman Toko Peptida kami." },
];

export default function PanduanPemulaPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Panduan Pemula: Apa Itu Peptida dan Mengapa Orang Menggunakannya",
    datePublished: "2024-01-15", dateModified: "2024-01-15",
    author: { "@type": "Organization", name: "Peptide.co.id" },
    publisher: { "@type": "Organization", name: "Peptide.co.id", url: "https://peptide.co.id" },
    inLanguage: "id", mainEntityOfPage: "https://peptide.co.id/panduan/pemula",
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Panduan", href: "/panduan/pemula" }, { label: "Panduan Pemula" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs text-emerald-700 mb-4">
            <span>📖</span>
            Untuk Pemula
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Panduan Pemula: Apa Itu Peptida?
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Pemahaman dasar tentang peptida — apa itu, bagaimana cara kerjanya, dan mengapa semakin banyak orang di Indonesia tertarik.
          </p>
          <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
            <span>Diperbarui 15 Januari 2024</span>
            <span>•</span>
            <span>Bacaan ~8 menit</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclaimerBanner />

        <p className="text-lg text-slate-700 leading-relaxed">
          Jika Anda baru mendengar tentang peptida dan ingin memahami apa itu, mengapa semakin populer, dan bagaimana situasinya di Indonesia — panduan ini adalah tempat yang tepat untuk memulai.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Apa Itu Peptida?</h2>
          <p className="text-slate-600 leading-relaxed">
            Peptida adalah rantai pendek asam amino — bahan penyusun protein. Jika protein adalah sebuah kalimat, peptida adalah kata-katanya. Tubuh kita secara alami memproduksi berbagai peptida yang berperan dalam proses biologis penting seperti penyembuhan, pertumbuhan, dan regulasi hormon.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Peptida sintetis dibuat di laboratorium untuk mereplikasi atau memodifikasi peptida alami. Dengan menargetkan proses biologis tertentu, peptida sintetis diteliti untuk berbagai aplikasi dalam kesehatan, fitness, dan anti-aging.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Mengapa Orang Menggunakan Peptida?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "🩹", title: "Recovery & Penyembuhan", text: "BPC-157 dan TB-500 diteliti untuk mempercepat penyembuhan tendon, ligamen, dan otot. Populer di kalangan atlet." },
              { icon: "✨", title: "Anti-Aging & Wellness", text: "Ipamorelin, GHK-Cu, dan Epitalon diteliti untuk efek anti-penuaan: kualitas kulit, tidur, dan komposisi tubuh." },
              { icon: "⚖️", title: "Manajemen Berat Badan", text: "Semaglutide dan Tirzepatide menjadi terobosan dalam manajemen obesitas, dengan data klinis yang kuat." },
              { icon: "🧠", title: "Performa Kognitif", text: "Selank, Semax, dan Dihexa diteliti untuk peningkatan memori, fokus, dan neuroproteksi." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Kategori Peptida</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Peptida dapat dikelompokkan berdasarkan fungsi utamanya. Kami mendokumentasikan {peptides.length}+ peptida dalam {categories.length} kategori:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {categories.map((cat) => {
              const count = peptides.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <Link key={cat.slug} href={`/peptida?kategori=${cat.slug}`} className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-teal-300 hover:shadow-sm transition-all">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="mt-2 text-sm font-semibold text-slate-900">{cat.name}</h3>
                  <p className="mt-0.5 text-[11px] text-slate-400">{count} peptida</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Status Legal di Indonesia</h2>
          <p className="text-slate-600 leading-relaxed">
            Status hukum peptida di Indonesia berada di area abu-abu. Peptida tidak secara eksplisit dilarang untuk kepemilikan pribadi, tetapi juga tidak disetujui sebagai obat terapeutik oleh BPOM.
          </p>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li className="flex gap-2"><span className="text-slate-400">•</span>Peptida tidak terdaftar sebagai obat yang disetujui BPOM</li>
            <li className="flex gap-2"><span className="text-slate-400">•</span>Impor untuk penggunaan pribadi berada di area tidak diregulasi secara jelas</li>
            <li className="flex gap-2"><span className="text-slate-400">•</span>Beberapa peptida (TB-500, Ipamorelin, dll) dilarang oleh WADA untuk atlet kompetitif</li>
            <li className="flex gap-2"><span className="text-slate-400">•</span>Tidak ada sertifikasi kualitas resmi untuk produk peptida yang beredar</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Yang Harus Diperhatikan</h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "Sertifikat Analisis (CoA)", text: "Selalu minta dan periksa CoA pihak ketiga yang menunjukkan kemurnian dan identitas produk." },
              { num: "2", title: "Reputasi Vendor", text: "Pilih vendor dengan track record jelas, review pengguna, dan transparansi operasional." },
              { num: "3", title: "Harga Wajar", text: "Harga terlalu murah bisa indikasi kualitas buruk. Bandingkan harga antar vendor." },
              { num: "4", title: "Konsultasi Dokter", text: "Selalu konsultasikan dengan profesional kesehatan sebelum menggunakan peptida apapun." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{item.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="mt-14">
          <h2 className="text-xl font-serif text-slate-900 mb-4">Langkah Selanjutnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/peptida" className="p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-300 hover:shadow-md transition-all">
              <span className="text-2xl">📚</span>
              <h3 className="mt-3 font-semibold text-slate-900">Jelajahi Peptida</h3>
              <p className="mt-1 text-sm text-slate-500">Database lengkap {peptides.length}+ peptida</p>
            </Link>
            <Link href="/panduan/cara-beli" className="p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-300 hover:shadow-md transition-all">
              <span className="text-2xl">🛒</span>
              <h3 className="mt-3 font-semibold text-slate-900">Cara Beli</h3>
              <p className="mt-1 text-sm text-slate-500">Tips membeli dengan aman</p>
            </Link>
            <Link href="/toko-peptida" className="p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-300 hover:shadow-md transition-all">
              <span className="text-2xl">🏪</span>
              <h3 className="mt-3 font-semibold text-slate-900">Direktori Toko</h3>
              <p className="mt-1 text-sm text-slate-500">Supplier terpercaya</p>
            </Link>
          </div>
        </section>

        <section className="mt-14"><EmailSignup /></section>
      </div>
    </article>
  );
}
