import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Peptida untuk Recovery Olahraga: Panduan Lengkap Indonesia",
  description: "Panduan peptida untuk recovery olahraga dan pemulihan cedera di Indonesia. BPC-157, TB-500, dan peptida lainnya untuk atlet.",
  alternates: { canonical: "https://peptide.co.id/panduan/recovery-olahraga" },
};

const faqs = [
  { question: "Peptida mana yang terbaik untuk recovery cedera otot?", answer: "BPC-157 dan TB-500 paling banyak diteliti. BPC-157 fokus pada penyembuhan lokal (tendon dan ligamen), TB-500 memiliki efek sistemik yang luas. Banyak pengguna membahas kombinasi keduanya." },
  { question: "Apakah peptida recovery dilarang dalam kompetisi?", answer: "Ya, sebagian besar termasuk dalam daftar zat terlarang WADA. TB-500 secara eksplisit dilarang, BPC-157 di bawah kategori substansi terlarang. Atlet kompetitif harus menghindari." },
  { question: "Berapa lama recovery dengan peptida?", answer: "Bervariasi tergantung tingkat cedera dan jenis peptida. Perbaikan awal sering dilaporkan dalam 1-2 minggu, recovery signifikan dalam 4-8 minggu. Ini bukan data klinis." },
  { question: "Apakah peptida bisa menggantikan fisioterapi?", answer: "Tidak. Peptida bukan pengganti perawatan medis konvensional. Dalam riset, peptida dipandang sebagai suplemen potensial, bukan pengganti perawatan standar." },
];

const peptidesForRecovery = [
  { slug: "bpc-157", name: "BPC-157", subtitle: "Penyembuhan Lokal", desc: "Peptida recovery yang paling banyak dipelajari. Cocok untuk cedera tendon, tendinitis, masalah pencernaan terkait NSAID." },
  { slug: "tb-500", name: "TB-500", subtitle: "Recovery Sistemik", desc: "Sifat sistemik membuatnya menarik untuk cedera multiple. Cocok untuk cedera otot, strain, recovery pasca operasi." },
  { slug: "ipamorelin", name: "Ipamorelin + CJC-1295", subtitle: "Recovery via GH", desc: "Kombinasi yang merangsang pelepasan hormon pertumbuhan. Cocok untuk recovery umum, tidur, anti-aging." },
];

export default function RecoveryOlahragaPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Peptida untuk Recovery Olahraga: Panduan Lengkap Indonesia",
    datePublished: "2024-01-15", dateModified: "2024-01-15",
    author: { "@type": "Organization", name: "Peptide.co.id" },
    publisher: { "@type": "Organization", name: "Peptide.co.id", url: "https://peptide.co.id" },
    inLanguage: "id", mainEntityOfPage: "https://peptide.co.id/panduan/recovery-olahraga",
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Panduan", href: "/panduan/pemula" }, { label: "Recovery Olahraga" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs text-blue-700 mb-4">
            <span>💪</span>Untuk Atlet
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Peptida untuk Recovery Olahraga
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Bagaimana peptida diteliti dan digunakan untuk pemulihan cedera olahraga dan peningkatan performa.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclaimerBanner />

        <p className="text-lg text-slate-700 leading-relaxed">
          Cedera olahraga adalah realitas yang dihadapi atlet dan penggemar fitness di Indonesia. Dari tendinitis hingga strain otot, recovery bisa memakan waktu berminggu-minggu. Artikel ini membahas peran potensial peptida dalam mendukung pemulihan cedera berdasarkan penelitian yang tersedia.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Mengapa Atlet Tertarik dengan Peptida?</h2>
          <p className="text-slate-600 leading-relaxed">
            Komunitas fitness global, termasuk di Indonesia, semakin tertarik dengan peptida karena potensinya mempercepat proses penyembuhan alami tubuh. Berbeda dengan obat anti-inflamasi tradisional yang hanya mengurangi gejala, beberapa peptida diteliti untuk kemampuan mendukung perbaikan jaringan secara langsung pada level seluler.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Peptida Utama untuk Recovery</h2>
          <div className="space-y-4">
            {peptidesForRecovery.map((p) => (
              <Link key={p.slug} href={`/peptida/${p.slug}`} className="block p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-300 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-teal-600 uppercase tracking-wider">{p.subtitle}</span>
                    <h3 className="mt-1 text-xl font-serif text-slate-900 group-hover:text-teal-700 transition-colors">{p.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Pertimbangan untuk Atlet Indonesia</h2>
          <div className="rounded-2xl bg-amber-50/60 border border-amber-100 p-5">
            <ul className="space-y-3">
              {[
                { t: "WADA", d: "Sebagian besar peptida recovery termasuk daftar zat terlarang WADA. Atlet kompetitif harus menghindari." },
                { t: "Prioritaskan perawatan konvensional", d: "Peptida bukan pengganti fisioterapi, istirahat, atau perawatan medis." },
                { t: "Konsultasi dokter", d: "Sebelum menggunakan peptida apapun, konsultasikan dengan dokter olahraga atau ortopedi." },
                { t: "Kualitas produk", d: "Pastikan membeli dari sumber yang menyediakan sertifikat analisis pihak ketiga." },
              ].map((item) => (
                <li key={item.t} className="flex gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm text-amber-900"><strong>{item.t}:</strong> {item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="mt-14"><EmailSignup /></section>
      </div>
    </article>
  );
}
