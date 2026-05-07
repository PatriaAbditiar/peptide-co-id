import Link from "next/link";

export default function EditorialAttribution({ updated = "15 Januari 2024" }: { updated?: string }) {
  return (
    <div className="flex items-start gap-3 mt-8 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
        TE
      </div>
      <div className="text-xs">
        <p className="text-slate-700">
          Ditulis oleh <strong className="text-slate-900">Tim Editorial Peptide.co.id</strong>
        </p>
        <p className="mt-0.5 text-slate-500">
          Konten ditinjau berdasarkan literatur ilmiah terkini. Diperbarui: {updated}.
        </p>
        <p className="mt-1 text-slate-400">
          Punya saran atau koreksi?{" "}
          <a href="mailto:editorial@peptide.co.id" className="text-teal-600 hover:underline">
            Hubungi tim editorial
          </a>
          {" • "}
          <Link href="/tentang" className="text-teal-600 hover:underline">
            Pendekatan kami
          </Link>
        </p>
      </div>
    </div>
  );
}
