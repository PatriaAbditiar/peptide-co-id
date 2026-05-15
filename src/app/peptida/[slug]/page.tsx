import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import EmailSignup from "@/components/EmailSignup";
import { getPeptideBySlug, getAllSlugs, getPeptideBySlug as getP } from "@/lib/peptides";
import RegulatoryBadge from "@/components/RegulatoryBadge";
import QuickFactsBox from "@/components/QuickFactsBox";
import EditorialAttribution from "@/components/EditorialAttribution";
import ShareButtons from "@/components/ShareButtons";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const peptide = getPeptideBySlug(params.slug);
  if (!peptide) return { title: "Peptida tidak ditemukan" };

  // SEO-optimized title: short, keyword-rich, includes "Indonesia"
  const seoTitle = `${peptide.name} Indonesia — Panduan Lengkap, Manfaat & Cara Beli`;

  // SEO-optimized description: 150-155 chars with keywords + CTA
  const shortDesc = peptide.description.split(".")[0].trim();
  const seoDesc = `${peptide.name} Indonesia: ${shortDesc.slice(0, 100)}. Panduan manfaat, risiko, dosis, dan dimana beli di Indonesia.`.slice(0, 155);

  // Enriched keywords with Indonesian search intent
  const enrichedKeywords = [
    ...peptide.keywords,
    `${peptide.name} Indonesia`,
    `harga ${peptide.name}`,
    `beli ${peptide.name}`,
    `${peptide.name} BPOM`,
    `cara pakai ${peptide.name}`,
    `efek samping ${peptide.name}`,
    `${peptide.name} review`,
  ];

  const url = `https://peptide.co.id/peptida/${peptide.slug}`;

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: enrichedKeywords,
    alternates: {
      canonical: url,
      languages: { id: url, "id-ID": url, "x-default": url },
    },
    openGraph: {
      type: "article",
      locale: "id_ID",
      title: seoTitle,
      description: seoDesc,
      url,
      siteName: "Peptide.co.id",
      publishedTime: "2024-01-15T00:00:00.000Z",
      modifiedTime: "2024-01-15T00:00:00.000Z",
      authors: ["Tim Editorial Peptide.co.id"],
      section: peptide.category,
      tags: enrichedKeywords,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDesc,
    },
  };
}

export default function PeptidePage({ params }: { params: { slug: string } }) {
  const peptide = getPeptideBySlug(params.slug);
  if (!peptide) notFound();

  const related = peptide.relatedSlugs
    .map((slug) => getP(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const url = `https://peptide.co.id/peptida/${peptide.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: `${peptide.name} Indonesia — Panduan Lengkap`,
      description: peptide.description,
      datePublished: "2024-01-15",
      dateModified: "2024-01-15",
      author: {
        "@type": "Organization",
        name: "Tim Editorial Peptide.co.id",
        url: "https://peptide.co.id/tentang",
      },
      publisher: {
        "@type": "Organization",
        name: "Peptide.co.id",
        url: "https://peptide.co.id",
        logo: { "@type": "ImageObject", url: "https://peptide.co.id/og-image.png" },
      },
      inLanguage: "id-ID",
      mainEntityOfPage: url,
      url,
      audience: {
        "@type": "Audience",
        geographicArea: { "@type": "Country", name: "Indonesia" },
      },
      lastReviewed: "2024-01-15",
      about: {
        "@type": peptide.regulatoryStatus === "fda-approved" ? "Drug" : "MedicalEntity",
        name: peptide.name,
        description: peptide.tagline,
        ...(peptide.regulatoryStatus === "fda-approved" && {
          legalStatus: "FDA approved",
        }),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${peptide.name} Indonesia — Panduan Lengkap, Manfaat & Cara Beli`,
      description: peptide.description.slice(0, 200),
      datePublished: "2024-01-15",
      dateModified: "2024-01-15",
      author: { "@type": "Organization", name: "Tim Editorial Peptide.co.id" },
      publisher: {
        "@type": "Organization",
        name: "Peptide.co.id",
        url: "https://peptide.co.id",
        logo: { "@type": "ImageObject", url: "https://peptide.co.id/og-image.png" },
      },
      inLanguage: "id-ID",
      mainEntityOfPage: url,
      articleSection: peptide.category,
      keywords: peptide.keywords.join(", "),
    },
  ];

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50/30 border-b border-slate-100">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Breadcrumb items={[{ label: "Peptida", href: "/peptida" }, { label: peptide.name }]} />

          <div className="flex items-center flex-wrap gap-2 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl">
              {peptide.icon}
            </div>
            <Link
              href={`/peptida?kategori=${peptide.categorySlug}`}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 hover:border-teal-300 transition-colors"
            >
              {peptide.category}
            </Link>
            <RegulatoryBadge status={peptide.regulatoryStatus} size="md" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            {peptide.name}
          </h1>
          <p className="mt-3 text-xl text-slate-600">{peptide.tagline}</p>

          <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Diperbarui 15 Januari 2024
            </span>
            <span>•</span>
            <span>{peptide.faqs.length} FAQ</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclaimerBanner />

        {/* Description / Lead */}
        <p className="text-lg text-slate-700 leading-relaxed">{peptide.description}</p>

        <QuickFactsBox facts={peptide.quickFacts} />

        {peptide.approvalNote && (
          <div className={`mt-6 flex items-start gap-3 rounded-2xl p-5 border ${
            peptide.regulatoryStatus === "fda-approved"
              ? "bg-emerald-50/60 border-emerald-100"
              : peptide.regulatoryStatus === "approved-other-countries"
              ? "bg-blue-50/60 border-blue-100"
              : "bg-slate-50 border-slate-200"
          }`}>
            <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
              peptide.regulatoryStatus === "fda-approved" ? "text-emerald-600" :
              peptide.regulatoryStatus === "approved-other-countries" ? "text-blue-600" :
              "text-slate-500"
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Status Regulasi</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{peptide.approvalNote}</p>
            </div>
          </div>
        )}

        {/* What is it */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">
            Apa Itu {peptide.name}?
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">{peptide.sections.whatIsIt}</p>
        </section>

        {/* Benefits */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">
            Manfaat yang Dilaporkan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {peptide.sections.benefits.map((b, i) => (
              <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-teal-50/80 to-cyan-50/40 border border-teal-100/60">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{b.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{b.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risks */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">
            Risiko &amp; Pertimbangan
          </h2>
          <div className="rounded-2xl bg-rose-50/60 border border-rose-100 p-5">
            <ul className="space-y-3">
              {peptide.sections.risks.map((risk, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm leading-relaxed">{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Usage */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">
            Cara Penggunaan dalam Konteks Riset
          </h2>
          <p className="text-slate-600 leading-relaxed">{peptide.sections.usage}</p>
          <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-100">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-amber-900">
              <strong>Penting:</strong> Peptide.co.id tidak memberikan rekomendasi dosis. Selalu konsultasikan dengan profesional kesehatan.
            </p>
          </div>
        </section>

        {/* Buying Tips */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">
            Dimana Beli {peptide.name} di Indonesia
          </h2>
          <p className="text-slate-600 leading-relaxed">{peptide.sections.buyingTips}</p>
          <Link
            href="/toko-peptida"
            className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
          >
            Lihat Direktori Toko Peptida
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

        {/* FAQ */}
        <FAQSection faqs={peptide.faqs} />

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-serif text-slate-900 mb-4">Peptida Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/peptida/${p.slug}`}
                  className="p-4 rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-md transition-all bg-white"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base">{p.icon}</span>
                    <span className="text-[11px] font-medium text-slate-400">{p.category}</span>
                  </div>
                  <span className="font-semibold text-slate-900">{p.name}</span>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <ShareButtons url={`/peptida/${peptide.slug}`} title={`${peptide.name} Indonesia — Panduan Lengkap`} />

        {/* Email */}
        <section className="mt-14">
          <EmailSignup />
        </section>

        <EditorialAttribution />
      </div>
    </article>
  );
}
