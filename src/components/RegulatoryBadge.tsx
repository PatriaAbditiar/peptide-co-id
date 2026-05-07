import { RegulatoryStatus } from "@/lib/peptides";

const config: Record<RegulatoryStatus, { label: string; classes: string; icon: string }> = {
  "fda-approved": {
    label: "Disetujui FDA",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "✓",
  },
  "fda-approved-other-indication": {
    label: "FDA (off-label)",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "✓",
  },
  "approved-other-countries": {
    label: "Disetujui di negara lain",
    classes: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "○",
  },
  "research-only": {
    label: "Hanya untuk riset",
    classes: "bg-slate-50 text-slate-600 border-slate-200",
    icon: "◇",
  },
};

export default function RegulatoryBadge({
  status,
  size = "sm",
}: {
  status: RegulatoryStatus;
  size?: "sm" | "md";
}) {
  const c = config[status];
  const padding = size === "md" ? "px-3 py-1" : "px-2 py-0.5";
  const text = size === "md" ? "text-xs" : "text-[11px]";

  return (
    <span className={`inline-flex items-center gap-1 rounded-full ${padding} ${text} font-medium border ${c.classes}`}>
      <span className="text-[10px]">{c.icon}</span>
      {c.label}
    </span>
  );
}
