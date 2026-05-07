import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { peptides } from "@/lib/peptides";

export const metadata: Metadata = {
  title: "Tentang Peptide.co.id",
  description: "Tentang Peptide.co.id — pusat informasi peptida pertama di Indonesia. Misi, visi, dan tim kami.",
  alternates: { canonical: "https://peptide.co.id/tentang" },
};

export default function TentangPage() {
  return (
    <article className="bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Tentang Kami" }]} />
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Tentang Peptide.co.id
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Pusat informasi peptida pertama dan terlengkap di Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Misi Kami</h2>
          <p className="text-slate-600 leading-relaxed">
            Peptide.co.id hadir untuk menyediakan informasi yang akurat, seimbang, dan mudah dipahami tentang peptida dalam Bahasa Indonesia. Kami membantu masyarakat Indonesia membuat keputusan yang terinformasi berdasarkan bukti ilmiah yang tersedia, dengan dokumentasi {peptides.length}+ peptida dalam panduan mendalam.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Mengapa Kami Ada</h2>
          <p className="text-slate-600 leading-relaxed">
            Minat terhadap peptida di Indonesia terus meningkat, namun informasi berkualitas dalam Bahasa Indonesia masih sangat terbatas. Banyak informasi yang beredar bersifat bias (dari penjual) atau tidak akurat. Kami percaya setiap orang berhak mendapatkan akses ke informasi kesehatan yang jujur dan transparan.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Pendekatan Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { t: "Berbasis Bukti", d: "Merujuk pada penelitian ilmiah, secara jelas membedakan data klinis, praklinis, dan anekdotal." },
              { t: "Seimbang", d: "Menyajikan manfaat potensial bersamaan dengan risiko dan keterbatasan. Tidak ada klaim keajaiban." },
              { t: "Transparan", d: "Mengungkapkan hubungan afiliasi dan tidak pernah merekomendasikan produk atau vendor secara eksplisit." },
              { t: "Lokal", d: "Konten dirancang khusus untuk konteks Indonesia — regulasi lokal, ketersediaan produk, pertimbangan budaya." },
            ].map((item) => (
              <div key={item.t} className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80">
                <h3 className="font-semibold text-slate-900">{item.t}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Disclaimer Penting</h2>
          <p className="text-slate-600 leading-relaxed">
            Peptide.co.id adalah platform informasi dan edukasi. Kami bukan penyedia layanan kesehatan dan tidak memberikan saran medis. Semua konten disajikan untuk tujuan informasi saja. Selalu konsultasikan dengan dokter atau profesional kesehatan yang berkualifikasi sebelum membuat keputusan terkait kesehatan.
          </p>
        </section>

        <section className="mt-12">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8">
            <h2 className="text-2xl font-serif text-white">Hubungi Kami</h2>
            <p className="mt-3 text-slate-400">
              Untuk pertanyaan, masukan, atau kerjasama:
            </p>
            <a href="mailto:info@peptide.co.id" className="mt-4 inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium">
              info@peptide.co.id
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
