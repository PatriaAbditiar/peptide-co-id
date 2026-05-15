import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { stacks } from "@/lib/stacks";

export const metadata: Metadata = {
  title: "Stacks Peptida Indonesia — Wolverine Stack, GH Stack & Lainnya",
  description:
    "Panduan stack peptida dalam Bahasa Indonesia. Wolverine Stack (BPC-157+TB-500), Classic GH Stack (CJC-1295+Ipamorelin), dan kombinasi populer lainnya.",
  keywords: [
    "stack peptida Indonesia",
    "kombinasi peptida",
    "Wolverine Stack",
    "Classic GH Stack",
    "BPC-157 TB-500 stack",
    "CJC-1295 Ipamorelin",
    "anti-aging stack",
    "fat loss stack",
    "kombinasi BPC-157",
  ],
  alternates: {
    canonical: "https://peptide.co.id/stacks",
    languages: {
      id: "https://peptide.co.id/stacks",
      "id-ID": "https://peptide.co.id/stacks",
      "x-default": "https://peptide.co.id/stacks",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Stacks Peptida Indonesia — Kombinasi Populer",
    description: "Panduan stack peptida Indonesia: Wolverine Stack, Classic GH Stack, dan lainnya.",
    url: "https://peptide.co.id/stacks",
    siteName: "Peptide.co.id",
  },
};

export default function StacksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Stacks Peptida Indonesia",
    url: "https://peptide.co.id/stacks",
    inLanguage: "id",
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Stacks" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs text-purple-700 mb-4">
            <span>🧬</span>Kombinasi Peptida
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Stacks Peptida Populer
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Kombinasi peptida yang paling sering didiskusikan dalam komunitas riset — diorganisir berdasarkan tujuan dengan penjelasan mekanisme dan pertimbangan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why stack section */}
        <section className="mb-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 p-6 sm:p-8">
          <h2 className="text-xl font-serif text-slate-900 mb-3">Apa Itu Stacking Peptida?</h2>
          <p className="text-slate-600 leading-relaxed">
            Stacking adalah praktik mengkombinasikan dua atau lebih peptida yang bekerja melalui mekanisme komplementer. Daripada hanya meningkatkan dosis satu peptida, stacking menargetkan jalur biologis berbeda untuk efek sinergis.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex gap-2 text-slate-600">
              <span className="text-teal-500">✓</span>
              <span>Mekanisme komplementer, bukan duplikatif</span>
            </div>
            <div className="flex gap-2 text-slate-600">
              <span className="text-teal-500">✓</span>
              <span>Mulai 1 peptida dulu, tambah satu per satu</span>
            </div>
            <div className="flex gap-2 text-slate-600">
              <span className="text-teal-500">✓</span>
              <span>Maksimal 2-3 peptida untuk pemula</span>
            </div>
          </div>
        </section>

        {/* Stacks grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {stacks.map((stack) => (
            <Link
              key={stack.slug}
              href={`/stacks/${stack.slug}`}
              className="group p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-2xl">{stack.icon}</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
                    {stack.goal}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                    stack.difficulty === "Pemula" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                    stack.difficulty === "Menengah" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                    "bg-rose-50 text-rose-700 border border-rose-100"
                  }`}>
                    {stack.difficulty}
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-serif text-slate-900 group-hover:text-teal-700 transition-colors">
                {stack.name}
              </h2>
              {stack.alias && (
                <p className="mt-1 text-sm text-slate-400 font-mono">{stack.alias}</p>
              )}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{stack.tagline}</p>

              <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {stack.duration}
                </span>
                <span>•</span>
                <span>{stack.peptides.length} peptida</span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-sm text-teal-600 font-medium">
                Lihat protokol
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Safety reminder */}
        <section className="mt-12 rounded-2xl bg-amber-50/60 border border-amber-100 p-6">
          <h3 className="font-semibold text-amber-900 mb-3">Pertimbangan Keamanan Penting</h3>
          <ul className="space-y-2 text-sm text-amber-900">
            <li className="flex gap-2"><span>•</span><strong>Mulai satu peptida dulu</strong> — tambahkan peptida berikutnya 1-2 minggu kemudian untuk mengidentifikasi reaksi individu</li>
            <li className="flex gap-2"><span>•</span><strong>2-3 peptida adalah maksimum praktis</strong> — lebih dari itu, atribusi efek menjadi mustahil</li>
            <li className="flex gap-2"><span>•</span><strong>Banyak protokol bersifat anekdotal</strong> — kebanyakan tidak melalui uji klinis ketat</li>
            <li className="flex gap-2"><span>•</span><strong>Konsultasikan dokter</strong> — terutama jika ada kondisi medis atau menggunakan obat lain</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
