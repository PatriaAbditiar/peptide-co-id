import Link from "next/link";
import { categories } from "@/lib/peptides";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">
                peptide
                <span className="text-slate-500 font-normal">.co.id</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Pusat informasi peptida terlengkap di Indonesia. 40+ panduan peptida, riset terbaru{SITE_CONFIG.SHOW_SELLERS ? ", dan direktori toko" : ""}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">Kategori</h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/peptida?kategori=${cat.slug}`} className="text-sm hover:text-teal-400 transition-colors">
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">Tools &amp; Panduan</h3>
            <ul className="space-y-2.5">
              <li><Link href="/kalkulator" className="text-sm hover:text-teal-400 transition-colors">🧮 Kalkulator Reconstitusi</Link></li>
              <li><Link href="/stacks" className="text-sm hover:text-teal-400 transition-colors">🧬 Stacks Peptida</Link></li>
              <li><Link href="/kamus" className="text-sm hover:text-teal-400 transition-colors">📖 Kamus Istilah</Link></li>
              <li><Link href="/panduan/pemula" className="text-sm hover:text-teal-400 transition-colors">Panduan Pemula</Link></li>
              <li><Link href="/panduan/recovery-olahraga" className="text-sm hover:text-teal-400 transition-colors">Recovery Olahraga</Link></li>
              <li><Link href="/panduan/cara-beli" className="text-sm hover:text-teal-400 transition-colors">Cara Beli Peptida</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">Informasi</h3>
            <ul className="space-y-2.5">
              <li><Link href="/tentang" className="text-sm hover:text-teal-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/disclaimer" className="text-sm hover:text-teal-400 transition-colors">Disclaimer</Link></li>
              <li><Link href="/peptida" className="text-sm hover:text-teal-400 transition-colors">Semua Peptida</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Peptide.co.id — Semua konten hanya untuk tujuan informasi dan edukasi. Bukan saran medis.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/disclaimer" className="hover:text-slate-300">Disclaimer</Link>
            <Link href="/tentang" className="hover:text-slate-300">Tentang</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
