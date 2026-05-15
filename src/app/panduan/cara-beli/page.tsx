import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Cara Beli Peptida Indonesia dengan Aman — Tips Memilih Vendor",
  description:
    "Panduan lengkap cara beli peptida di Indonesia 2024: pilih vendor terpercaya, periksa CoA & kemurnian, hindari produk palsu, dan pahami bea cukai.",
  keywords: [
    "cara beli peptida Indonesia",
    "tips beli peptida",
    "vendor peptida terpercaya",
    "CoA peptida",
    "bea cukai peptida Indonesia",
    "peptida palsu",
    "beli BPC-157 Indonesia",
    "harga peptida wajar",
  ],
  alternates: {
    canonical: "https://peptide.co.id/panduan/cara-beli",
    languages: {
      id: "https://peptide.co.id/panduan/cara-beli",
      "id-ID": "https://peptide.co.id/panduan/cara-beli",
      "x-default": "https://peptide.co.id/panduan/cara-beli",
    },
  },
  openGraph: {
    type: "article",
    locale: "id_ID",
    title: "Cara Beli Peptida Indonesia dengan Aman",
    description: "Tips memilih vendor, memeriksa kualitas, dan menghindari produk palsu.",
    url: "https://peptide.co.id/panduan/cara-beli",
    siteName: "Peptide.co.id",
  },
};

const faqs = [
  { question: "Apakah membeli peptida di Indonesia legal?", answer: "Peptida tidak secara eksplisit dilarang untuk kepemilikan pribadi di Indonesia. Namun, karena tidak terdaftar sebagai obat oleh BPOM, produk yang beredar tidak melalui pengawasan kualitas resmi. Konsultasikan profesional hukum jika perlu kepastian." },
  { question: "Bagaimana cara membaca CoA?", answer: "CoA yang baik mencantumkan: nama lab independen, tanggal pengujian, identitas peptida (mass spectrometry), kemurnian (HPLC, idealnya >98%), dan hasil pengujian endotoksin/sterilitas. Pastikan dari lab pihak ketiga, bukan produsen." },
  { question: "Berapa harga peptida yang wajar?", answer: "BPC-157 5mg dari vendor terpercaya berkisar USD 25-50. Harga jauh lebih murah bisa indikasi kualitas rendah. Selalu bandingkan harga dari beberapa vendor." },
  { question: "Apakah peptida bisa dikirim ke Indonesia?", answer: "Pengiriman dari vendor internasional umumnya memungkinkan, tetapi bisa terkena inspeksi bea cukai. Pilih vendor yang sudah berpengalaman mengirim ke Indonesia." },
  { question: "Bagaimana cara menyimpan peptida?", answer: "Serbuk lyophilized di kulkas (2-8°C) untuk jangka panjang. Setelah direkonstitusi, simpan di kulkas dan gunakan dalam 2-4 minggu. Hindari paparan cahaya matahari langsung. Jangan dibekukan setelah rekonstitusi." },
];

export default function CaraBeliPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Cara Beli Peptida di Indonesia dengan Aman",
    datePublished: "2024-01-15", dateModified: "2024-01-15",
    author: { "@type": "Organization", name: "Peptide.co.id" },
    publisher: { "@type": "Organization", name: "Peptide.co.id", url: "https://peptide.co.id" },
    inLanguage: "id", mainEntityOfPage: "https://peptide.co.id/panduan/cara-beli",
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Panduan", href: "/panduan/pemula" }, { label: "Cara Beli" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs text-amber-700 mb-4">
            <span>🛒</span>Panduan Pembelian
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Cara Beli Peptida<br />di Indonesia dengan Aman
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Membeli peptida di Indonesia memerlukan kehati-hatian ekstra. Panduan ini membantu Anda memilih vendor tepat, memverifikasi kualitas, dan menghindari risiko.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclaimerBanner />

        <section className="mt-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Langkah 1: Pilih Tipe Vendor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white">
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100">Internasional</span>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-500">✓</span>Lebih banyak pilihan produk</li>
                <li className="flex gap-2"><span className="text-emerald-500">✓</span>Sering punya CoA pihak ketiga</li>
                <li className="flex gap-2"><span className="text-emerald-500">✓</span>Reputasi global terverifikasi</li>
                <li className="flex gap-2"><span className="text-rose-400">✗</span>Pengiriman lebih lama</li>
                <li className="flex gap-2"><span className="text-rose-400">✗</span>Risiko bea cukai</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white">
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Lokal</span>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-500">✓</span>Pengiriman lebih cepat</li>
                <li className="flex gap-2"><span className="text-emerald-500">✓</span>Pembayaran Rupiah</li>
                <li className="flex gap-2"><span className="text-emerald-500">✓</span>Tanpa risiko bea cukai</li>
                <li className="flex gap-2"><span className="text-rose-400">✗</span>Pilihan terbatas</li>
                <li className="flex gap-2"><span className="text-rose-400">✗</span>Verifikasi kualitas lebih sulit</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Langkah 2: Verifikasi Kualitas</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Karena tidak ada regulasi resmi, tanggung jawab memverifikasi kualitas sepenuhnya pada pembeli. Checklist:
          </p>
          <div className="space-y-3">
            {[
              { t: "Sertifikat Analisis Pihak Ketiga", d: "CoA harus dari lab independen (bukan lab internal vendor). Periksa tanggal, batch number, dan metode (HPLC, Mass Spec)." },
              { t: "Kemurnian Minimal 98%", d: "Kemurnian HPLC idealnya >98%. Produk <95% mungkin mengandung kontaminan signifikan." },
              { t: "Reputasi & Review", d: "Cari review pengguna lain di forum, Reddit, komunitas fitness. Vendor lama umumnya lebih terpercaya." },
              { t: "Packaging Profesional", d: "Dikemas dalam vial tertutup rapat, label jelas mencantumkan nama peptida, jumlah, batch number." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-teal-50/60 to-cyan-50/30 border border-teal-100/60">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.t}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Red Flags: Yang Harus Dihindari</h2>
          <div className="space-y-2">
            {[
              "Vendor yang tidak menyediakan CoA",
              "Harga yang terlalu murah dibandingkan rata-rata pasar",
              "Klaim kesehatan berlebihan atau jaminan hasil",
              "Tidak ada informasi kontak atau alamat bisnis yang jelas",
              "Produk dalam bentuk cair 'ready to use' dari sumber tidak jelas",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-4 rounded-xl bg-rose-50/60 border border-rose-100">
                <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100/60 p-8">
            <h2 className="text-2xl font-serif text-teal-900">Siap Mencari Supplier?</h2>
            <p className="mt-2 text-sm text-teal-800">
              Kunjungi direktori toko peptida kami untuk menemukan supplier yang sudah kami kumpulkan informasinya.
            </p>
            <Link href="/toko-peptida" className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all">
              Lihat Direktori Toko Peptida
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="mt-14"><EmailSignup /></section>
      </div>
    </article>
  );
}
