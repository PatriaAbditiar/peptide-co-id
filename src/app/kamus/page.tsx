import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { glossaryTerms, getTermsByCategory } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Kamus Peptida Indonesia — 30+ Istilah & Singkatan Dijelaskan",
  description:
    "Kamus istilah peptida lengkap dalam Bahasa Indonesia. Definisi GHRH, GHS, IGF-1, BAC water, reconstitusi, U-100 syringe, WADA, BPOM, dan istilah peptida lainnya.",
  keywords: [
    "kamus peptida Indonesia",
    "istilah peptida",
    "glosarium peptida",
    "definisi GHRH",
    "apa itu BAC water",
    "U-100 syringe",
    "IGF-1 Indonesia",
    "reconstitusi peptida",
  ],
  alternates: {
    canonical: "https://peptide.co.id/kamus",
    languages: {
      id: "https://peptide.co.id/kamus",
      "id-ID": "https://peptide.co.id/kamus",
      "x-default": "https://peptide.co.id/kamus",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Kamus Peptida Indonesia — Glosarium Lengkap",
    description: "30+ istilah peptida dijelaskan dalam Bahasa Indonesia.",
    url: "https://peptide.co.id/kamus",
    siteName: "Peptide.co.id",
  },
};

const categoryColors: Record<string, string> = {
  "Anatomi": "bg-rose-50 text-rose-700 border-rose-100",
  "Farmakologi": "bg-purple-50 text-purple-700 border-purple-100",
  "Teknik": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "Hormon": "bg-amber-50 text-amber-700 border-amber-100",
  "Riset": "bg-blue-50 text-blue-700 border-blue-100",
  "Regulasi": "bg-emerald-50 text-emerald-700 border-emerald-100",
};

export default function KamusPage() {
  const grouped = getTermsByCategory();
  const categories = Object.keys(grouped).sort();
  const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Kamus Peptida Indonesia",
    url: "https://peptide.co.id/kamus",
    inLanguage: "id",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: "https://peptide.co.id/kamus",
    })),
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Kamus Peptida" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs text-blue-700 mb-4">
            <span>📖</span>Glosarium
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Kamus Peptida
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            {glossaryTerms.length} istilah dan singkatan peptida dijelaskan dalam Bahasa Indonesia. Dari GHRH hingga U-100 syringe.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:shadow-sm ${categoryColors[cat]}`}
            >
              {cat} ({grouped[cat].length})
            </a>
          ))}
        </div>

        {/* All terms — alphabetical */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-slate-900 mb-6">Semua Istilah (A-Z)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sortedTerms.map((t) => (
              <div key={t.term} className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-teal-300 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <h3 className="font-semibold text-slate-900">{t.term}</h3>
                    {t.alias && <p className="text-xs text-slate-400">{t.alias}</p>}
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border flex-shrink-0 ${categoryColors[t.category]}`}>
                    {t.category}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{t.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* By category */}
        {categories.map((cat) => (
          <section key={cat} id={cat.toLowerCase()} className="mt-12 scroll-mt-20">
            <h2 className="text-2xl font-serif text-slate-900 mb-1">{cat}</h2>
            <p className="text-sm text-slate-500 mb-6">{grouped[cat].length} istilah</p>
            <div className="space-y-3">
              {grouped[cat].map((t) => (
                <div key={t.term} className="p-4 rounded-xl border border-slate-200/80 bg-white">
                  <h3 className="font-semibold text-slate-900">{t.term}</h3>
                  {t.alias && <p className="text-xs text-slate-400 mb-1">{t.alias}</p>}
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{t.definition}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
