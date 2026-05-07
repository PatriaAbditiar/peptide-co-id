"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { categories, peptides } from "@/lib/peptides";
import Breadcrumb from "@/components/Breadcrumb";
import RegulatoryBadge from "@/components/RegulatoryBadge";

export default function PeptidaPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");
  const [fdaOnly, setFdaOnly] = useState(false);

  const filtered = useMemo(() => {
    return peptides.filter((p) => {
      const matchCategory = activeCategory === "semua" || p.categorySlug === activeCategory;
      const matchFDA = !fdaOnly || p.regulatoryStatus === "fda-approved";
      const matchSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.tagline.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch && matchFDA;
    });
  }, [search, activeCategory, fdaOnly]);

  const fdaCount = peptides.filter((p) => p.regulatoryStatus === "fda-approved").length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Semua Peptida" }]} />

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif text-slate-900">
          Ensiklopedia Peptida
        </h1>
        <p className="mt-2 text-slate-500 max-w-2xl">
          Database lengkap {peptides.length}+ peptida dengan panduan mendalam dalam Bahasa Indonesia. Cari berdasarkan nama atau filter berdasarkan kategori.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari peptida... (contoh: BPC-157, semaglutide, recovery)"
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition-all"
        />
      </div>

      {/* FDA Quick Filter */}
      <div className="mb-3">
        <button
          onClick={() => setFdaOnly(!fdaOnly)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            fdaOnly
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
              : "bg-white border border-emerald-200 text-emerald-700 hover:border-emerald-300"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          {fdaOnly ? "Tampilkan semua" : `Hanya yang Disetujui FDA (${fdaCount})`}
        </button>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("semua")}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeCategory === "semua"
              ? "bg-slate-900 text-white shadow-md"
              : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
          }`}
        >
          Semua ({peptides.length})
        </button>
        {categories.map((cat) => {
          const count = peptides.filter((p) => p.categorySlug === cat.slug).length;
          return (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.slug
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {cat.icon} {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-400">Tidak ada peptida yang sesuai dengan pencarian Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/peptida/${p.slug}`}
              className="group p-5 rounded-2xl border border-slate-200/80 bg-white card-hover"
            >
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <span className="text-lg">{p.icon}</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-500">
                  {p.category}
                </span>
                {p.regulatoryStatus === "fda-approved" && (
                  <RegulatoryBadge status={p.regulatoryStatus} />
                )}
              </div>
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                {p.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed line-clamp-2">
                {p.tagline}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs text-teal-600 font-medium">
                Baca panduan
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
