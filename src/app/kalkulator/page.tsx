import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ReconCalculator from "@/components/ReconCalculator";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Kalkulator Reconstitusi Peptida — BAC Water, Dosis & Unit Syringe",
  description:
    "Kalkulator reconstitusi peptida gratis dalam Bahasa Indonesia. Hitung konsentrasi, volume per dosis, dan unit syringe U-100 untuk BPC-157, TB-500, Semaglutide.",
  keywords: [
    "kalkulator reconstitusi peptida",
    "kalkulator dosis peptida Indonesia",
    "BAC water calculator",
    "U-100 syringe peptida",
    "konsentrasi peptida",
    "dosis BPC-157",
    "dosis Semaglutide",
    "cara hitung dosis peptida",
  ],
  alternates: {
    canonical: "https://peptide.co.id/kalkulator",
    languages: {
      id: "https://peptide.co.id/kalkulator",
      "id-ID": "https://peptide.co.id/kalkulator",
      "x-default": "https://peptide.co.id/kalkulator",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Kalkulator Reconstitusi Peptida Indonesia",
    description: "Hitung dosis peptida dengan akurat. BAC water, konsentrasi, dan unit syringe U-100.",
    url: "https://peptide.co.id/kalkulator",
    siteName: "Peptide.co.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Reconstitusi Peptida Indonesia",
    description: "Hitung dosis peptida dengan akurat. BAC water, konsentrasi, dan unit syringe U-100.",
  },
};

export default function KalkulatorPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Kalkulator Reconstitusi Peptida",
      url: "https://peptide.co.id/kalkulator",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      inLanguage: "id-ID",
      offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
      audience: {
        "@type": "Audience",
        geographicArea: { "@type": "Country", name: "Indonesia" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Cara Reconstitusi Peptida dengan Akurat",
      description:
        "Panduan langkah demi langkah untuk reconstitusi peptida lyophilized dengan BAC water dan menghitung dosis yang tepat menggunakan syringe U-100.",
      inLanguage: "id-ID",
      totalTime: "PT5M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "IDR", value: "0" },
      supply: [
        { "@type": "HowToSupply", name: "Vial peptida lyophilized" },
        { "@type": "HowToSupply", name: "Bacteriostatic water (BAC water)" },
        { "@type": "HowToSupply", name: "Syringe insulin U-100" },
      ],
      tool: [{ "@type": "HowToTool", name: "Kalkulator Reconstitusi Peptide.co.id" }],
      step: [
        {
          "@type": "HowToStep",
          name: "Masukkan ukuran vial",
          text: "Masukkan jumlah mg peptida total dalam vial Anda. Contoh: BPC-157 5 mg.",
          position: 1,
        },
        {
          "@type": "HowToStep",
          name: "Tambahkan volume BAC water",
          text: "Masukkan volume bacteriostatic water yang akan ditambahkan. Umumnya 2 mL untuk vial 5 mg.",
          position: 2,
        },
        {
          "@type": "HowToStep",
          name: "Set dosis target",
          text: "Masukkan berapa mg atau mcg per injeksi yang ingin diberikan.",
          position: 3,
        },
        {
          "@type": "HowToStep",
          name: "Tarik di syringe U-100",
          text: "Kalkulator akan menampilkan jumlah unit pada syringe U-100 yang harus ditarik untuk dosis tersebut.",
          position: 4,
        },
      ],
    },
  ];

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-br from-slate-50 to-cyan-50/30 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Kalkulator" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-xs text-cyan-700 mb-4">
            <span>🧮</span>Tool Gratis
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Kalkulator Reconstitusi Peptida
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Hitung konsentrasi, volume per dosis, dan unit syringe (U-100) untuk peptida apapun. Akurat, cepat, dan gratis.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ReconCalculator />

        {/* How it works */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">
            Cara Menggunakan Kalkulator
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "1", t: "Masukkan Ukuran Vial", d: "Total mg peptida dalam vial Anda. Misalnya: BPC-157 5mg." },
              { num: "2", t: "Tambahkan Volume BAC Water", d: "Volume bacteriostatic water yang akan ditambahkan. Umumnya 2 mL untuk vial 5 mg." },
              { num: "3", t: "Set Dosis Target", d: "Berapa mg atau mcg per injeksi. Sesuaikan dengan protokol penelitian Anda." },
            ].map((step) => (
              <div key={step.num} className="p-5 rounded-2xl bg-white border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold">
                  {step.num}
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">{step.t}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formula */}
        <section className="mt-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 p-6 sm:p-8">
          <h2 className="text-xl font-serif text-slate-900 mb-4">Rumus yang Digunakan</h2>
          <div className="space-y-3 font-mono text-sm">
            <div className="p-3 rounded-lg bg-white border border-slate-100">
              <span className="text-slate-500">Konsentrasi (mg/mL) = </span>
              <span className="text-teal-600 font-semibold">Vial (mg) ÷ BAC Water (mL)</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-100">
              <span className="text-slate-500">Volume per Dosis (mL) = </span>
              <span className="text-teal-600 font-semibold">Dosis (mg) ÷ Konsentrasi (mg/mL)</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-100">
              <span className="text-slate-500">Unit Syringe U-100 = </span>
              <span className="text-teal-600 font-semibold">Volume (mL) × 100</span>
            </div>
          </div>
        </section>

        {/* Important notes */}
        <section className="mt-8">
          <DisclaimerBanner />
          <div className="rounded-2xl bg-amber-50/60 border border-amber-100 p-5">
            <h3 className="font-semibold text-amber-900 mb-3">Tips Penting Sebelum Reconstitusi</h3>
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex gap-2"><span>•</span>Selalu gunakan <strong>bacteriostatic water</strong> (mengandung 0.9% benzyl alcohol), bukan air biasa</li>
              <li className="flex gap-2"><span>•</span>Tuangkan BAC water perlahan ke sisi vial — jangan langsung ke serbuk peptida</li>
              <li className="flex gap-2"><span>•</span>Putar vial perlahan (swirl), jangan dikocok keras</li>
              <li className="flex gap-2"><span>•</span>Setelah reconstitusi, simpan di kulkas (2-8°C) dan gunakan dalam 28-30 hari</li>
              <li className="flex gap-2"><span>•</span>Gunakan syringe insulin U-100 untuk akurasi maksimal</li>
              <li className="flex gap-2"><span>•</span>Jangan dibekukan setelah reconstitusi — peptida bisa terdegradasi</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">FAQ Reconstitusi</h2>
          <div className="space-y-3">
            {[
              { q: "Apa itu BAC water?", a: "Bacteriostatic water adalah air steril yang mengandung 0.9% benzyl alcohol sebagai pengawet. Benzyl alcohol mencegah pertumbuhan bakteri dalam vial selama penyimpanan multi-dose. Berbeda dengan sterile water (air steril biasa) yang tidak mengandung pengawet." },
              { q: "Berapa banyak BAC water yang harus ditambahkan?", a: "Tidak ada angka pasti — tergantung dosis dan kemudahan dosing. Umumnya 2 mL untuk vial 5 mg memberikan konsentrasi 2.5 mg/mL yang nyaman. Volume lebih besar = dosing lebih akurat tapi lebih banyak unit syringe." },
              { q: "Apa itu U-100 syringe?", a: "Syringe insulin standar yang punya skala 100 unit per 1 mL. Setiap unit = 0.01 mL. Format ini membuat dosing peptida lebih akurat dibanding syringe TB biasa." },
              { q: "Berapa lama peptida bertahan setelah reconstitusi?", a: "Umumnya 28-30 hari di kulkas (2-8°C) untuk sebagian besar peptida. BPC-157 dan TB-500 cukup stabil. Peptida sensitif seperti GHRP atau Sermorelin mungkin perlu digunakan lebih cepat." },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-white overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer text-sm font-medium text-slate-900 hover:bg-slate-50 list-none flex items-center justify-between">
                  {item.q}
                  <svg className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
