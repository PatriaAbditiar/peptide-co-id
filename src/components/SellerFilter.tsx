"use client";

import { useState } from "react";
import SellerCard from "./SellerCard";
import { Seller } from "@/lib/types";

const PEPTIDE_OPTIONS = ["BPC-157", "TB-500", "Ipamorelin", "CJC-1295", "Semaglutide", "GHK-Cu"];

export default function SellerFilter({ sellers }: { sellers: Seller[] }) {
  const [typeFilter, setTypeFilter] = useState<"semua" | "lokal" | "internasional">("semua");
  const [peptideFilter, setPeptideFilter] = useState<string>("semua");

  const filtered = sellers.filter((seller) => {
    if (typeFilter !== "semua" && seller.type !== typeFilter) return false;
    if (peptideFilter !== "semua" && !seller.products.includes(peptideFilter)) return false;
    return true;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {(["semua", "lokal", "internasional"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              typeFilter === t
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            {t === "semua" ? "Semua" : t === "lokal" ? "Lokal" : "Internasional"}
          </button>
        ))}

        <div className="flex-1" />

        <select
          value={peptideFilter}
          onChange={(e) => setPeptideFilter(e.target.value)}
          className="px-4 py-2 border border-slate-200 rounded-xl text-sm bg-white text-slate-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
        >
          <option value="semua">Semua peptida</option>
          {PEPTIDE_OPTIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-400">Tidak ada toko yang sesuai dengan filter Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      )}
    </div>
  );
}
