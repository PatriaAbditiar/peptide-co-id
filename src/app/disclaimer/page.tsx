import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer — Peptide.co.id",
  description: "Disclaimer dan syarat penggunaan Peptide.co.id.",
  alternates: { canonical: "https://peptide.co.id/disclaimer" },
};

const sections = [
  { t: "Informasi Umum", d: "Seluruh konten yang tersedia di Peptide.co.id (selanjutnya 'Situs') disediakan semata-mata untuk tujuan informasi dan edukasi. Informasi di Situs ini tidak dimaksudkan sebagai pengganti saran medis profesional, diagnosis, atau pengobatan." },
  { t: "Bukan Saran Medis", d: "Konten di Situs ini tidak boleh dianggap sebagai saran medis. Kami bukan dokter, apoteker, atau penyedia layanan kesehatan. Selalu konsultasikan dengan dokter atau profesional kesehatan yang berkualifikasi sebelum memulai, mengubah, atau menghentikan pengobatan atau suplemen apapun." },
  { t: "Keterbatasan Penelitian", d: "Banyak informasi tentang peptida di Situs ini didasarkan pada penelitian praklinis (studi laboratorium dan hewan). Hasil dari studi praklinis tidak selalu dapat diterjemahkan ke manusia. Uji klinis pada manusia untuk sebagian besar peptida masih sangat terbatas atau belum ada." },
  { t: "Status Regulasi", d: "Peptida yang dibahas di Situs ini umumnya tidak disetujui oleh BPOM Indonesia atau FDA untuk penggunaan terapeutik. Status hukum dan regulasi peptida dapat berubah dan bervariasi di setiap yurisdiksi. Pengguna bertanggung jawab untuk memahami dan mematuhi hukum yang berlaku." },
  { t: "Direktori Toko", d: "Pencantuman toko dalam direktori kami bukan merupakan rekomendasi, endorsement, atau jaminan kualitas produk. Kami tidak bertanggung jawab atas transaksi antara pengguna dan toko yang terdaftar." },
  { t: "Tautan Afiliasi", d: "Beberapa tautan di Situs ini mungkin merupakan tautan afiliasi. Kami dapat menerima komisi kecil tanpa biaya tambahan untuk Anda. Tautan afiliasi tidak mempengaruhi konten editorial kami." },
  { t: "Batasan Tanggung Jawab", d: "Peptide.co.id, pemilik, kontributor, dan afiliasinya tidak bertanggung jawab atas kerugian atau kerusakan apapun yang timbul dari penggunaan informasi di Situs ini. Penggunaan Situs sepenuhnya merupakan risiko pengguna." },
  { t: "Perubahan Disclaimer", d: "Kami berhak mengubah disclaimer ini kapan saja tanpa pemberitahuan sebelumnya. Perubahan berlaku segera setelah dipublikasikan di Situs." },
];

export default function DisclaimerPage() {
  return (
    <article className="bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Disclaimer" }]} />
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">Disclaimer</h1>
          <p className="mt-3 text-slate-500">Terakhir diperbarui: 15 Januari 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.t}>
              <h2 className="text-xl font-serif text-slate-900 mb-3">{s.t}</h2>
              <p className="text-slate-600 leading-relaxed">{s.d}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
