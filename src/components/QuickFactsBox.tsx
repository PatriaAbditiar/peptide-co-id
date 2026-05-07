import { QuickFacts } from "@/lib/peptides";
import { WadaBadge, BpomBadge } from "./StatusBadges";

export default function QuickFactsBox({ facts }: { facts: QuickFacts }) {
  const rows = [
    { label: "Berat Molekul", value: facts.molecularWeight, icon: "⚛️" },
    { label: "Waktu Paruh", value: facts.halfLife, icon: "⏱️" },
    { label: "Rute Administrasi", value: facts.route, icon: "💉" },
    { label: "Penyimpanan", value: facts.storage, icon: "❄️" },
  ];

  return (
    <aside className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
          Quick Facts
        </h2>
      </div>

      <div className="space-y-3">
        {rows.map((row) =>
          row.value ? (
            <div key={row.label} className="flex items-start gap-3">
              <span className="text-base flex-shrink-0">{row.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">{row.label}</div>
                <div className="text-sm text-slate-700 font-medium">{row.value}</div>
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200/80">
        <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-2">Status Regulasi</div>
        <div className="flex flex-wrap gap-1.5">
          <WadaBadge status={facts.wada} />
          <BpomBadge status={facts.bpom} />
        </div>
        {facts.bpomNote && (
          <p className="mt-2 text-xs text-slate-500 leading-relaxed">{facts.bpomNote}</p>
        )}
      </div>
    </aside>
  );
}
