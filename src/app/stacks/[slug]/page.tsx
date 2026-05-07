import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import EmailSignup from "@/components/EmailSignup";
import { getStackBySlug, getStackSlugs, stacks as allStacks } from "@/lib/stacks";
import { getPeptideBySlug } from "@/lib/peptides";

export async function generateStaticParams() {
  return getStackSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const stack = getStackBySlug(params.slug);
  if (!stack) return { title: "Stack tidak ditemukan" };
  return {
    title: `${stack.name} — ${stack.alias || stack.tagline}`,
    description: stack.description.slice(0, 160),
    alternates: { canonical: `https://peptide.co.id/stacks/${stack.slug}` },
    openGraph: {
      title: `${stack.name} — Panduan Lengkap`,
      description: stack.tagline,
      url: `https://peptide.co.id/stacks/${stack.slug}`,
    },
  };
}

export default function StackPage({ params }: { params: { slug: string } }) {
  const stack = getStackBySlug(params.slug);
  if (!stack) notFound();

  const peptidesInStack = stack.peptides
    .map((slug) => getPeptideBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const relatedStacks = allStacks
    .filter((s) => s.slug !== stack.slug && s.goalSlug === stack.goalSlug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${stack.name} — Panduan Stack Peptida`,
    description: stack.description,
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    author: { "@type": "Organization", name: "Peptide.co.id" },
    publisher: { "@type": "Organization", name: "Peptide.co.id", url: "https://peptide.co.id" },
    inLanguage: "id",
    mainEntityOfPage: `https://peptide.co.id/stacks/${stack.slug}`,
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50/30 border-b border-slate-100">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Breadcrumb items={[{ label: "Stacks", href: "/stacks" }, { label: stack.name }]} />

          <div className="flex items-center flex-wrap gap-2 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl">
              {stack.icon}
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">
              {stack.goal}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
              stack.difficulty === "Pemula" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
              stack.difficulty === "Menengah" ? "bg-amber-50 text-amber-700 border-amber-200" :
              "bg-rose-50 text-rose-700 border-rose-200"
            }`}>
              {stack.difficulty}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            {stack.name}
          </h1>
          {stack.alias && (
            <p className="mt-2 text-lg text-slate-500 font-mono">{stack.alias}</p>
          )}
          <p className="mt-3 text-xl text-slate-600">{stack.tagline}</p>

          <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
            <span>Durasi: <strong>{stack.duration}</strong></span>
            <span>•</span>
            <span>{stack.peptides.length} peptida</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclaimerBanner />

        <p className="text-lg text-slate-700 leading-relaxed">{stack.description}</p>

        {/* Peptides in stack */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Peptida dalam Stack Ini</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {peptidesInStack.map((p) => (
              <Link
                key={p.slug}
                href={`/peptida/${p.slug}`}
                className="group p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-teal-300 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{p.icon}</span>
                <h3 className="mt-3 font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">{p.name}</h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">{p.tagline}</p>
                <span className="mt-3 inline-flex items-center text-xs text-teal-600 font-medium">
                  Lihat detail
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why it works */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Mengapa Stack Ini Bekerja</h2>
          <div className="rounded-2xl bg-gradient-to-br from-teal-50/60 to-cyan-50/40 border border-teal-100/60 p-5">
            <p className="text-slate-700 leading-relaxed">{stack.whyItWorks}</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Manfaat Stack Ini</h2>
          <div className="space-y-2">
            {stack.benefits.map((b, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="w-6 h-6 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Considerations */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">Pertimbangan</h2>
          <div className="rounded-2xl bg-amber-50/60 border border-amber-100 p-5">
            <ul className="space-y-3">
              {stack.considerations.map((c, i) => (
                <li key={i} className="flex gap-3 text-slate-800">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Protocol Note */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Catatan Protokol</h2>
          <p className="text-slate-600 leading-relaxed">{stack.protocolNote}</p>
        </section>

        {/* FAQs */}
        <FAQSection faqs={stack.faqs} />

        {/* Related Stacks */}
        {relatedStacks.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-serif text-slate-900 mb-4">Stacks Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedStacks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/stacks/${s.slug}`}
                  className="p-4 rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-md transition-all bg-white"
                >
                  <span className="text-base">{s.icon}</span>
                  <h3 className="mt-2 font-semibold text-slate-900">{s.name}</h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">{s.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14"><EmailSignup /></section>
      </div>
    </article>
  );
}
