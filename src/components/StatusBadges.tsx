import { WadaStatus, BpomStatus } from "@/lib/peptides";

const wadaConfig: Record<WadaStatus, { label: string; classes: string; icon: string }> = {
  prohibited: {
    label: "WADA: Terlarang",
    classes: "bg-rose-50 text-rose-700 border-rose-200",
    icon: "✕",
  },
  monitored: {
    label: "WADA: Dipantau",
    classes: "bg-amber-50 text-amber-700 border-amber-200",
    icon: "⊙",
  },
  permitted: {
    label: "WADA: Diizinkan",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "✓",
  },
  unclear: {
    label: "WADA: Status tidak jelas",
    classes: "bg-slate-50 text-slate-600 border-slate-200",
    icon: "?",
  },
};

const bpomConfig: Record<BpomStatus, { label: string; classes: string; icon: string }> = {
  registered: {
    label: "BPOM: Terdaftar",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "✓",
  },
  "not-registered": {
    label: "BPOM: Tidak terdaftar",
    classes: "bg-slate-50 text-slate-600 border-slate-200",
    icon: "○",
  },
  unclear: {
    label: "BPOM: Status tidak jelas",
    classes: "bg-slate-50 text-slate-600 border-slate-200",
    icon: "?",
  },
};

export function WadaBadge({ status, size = "sm" }: { status: WadaStatus; size?: "sm" | "md" }) {
  const c = wadaConfig[status];
  const padding = size === "md" ? "px-3 py-1" : "px-2 py-0.5";
  const text = size === "md" ? "text-xs" : "text-[11px]";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full ${padding} ${text} font-medium border ${c.classes}`}>
      <span className="text-[10px]">{c.icon}</span>
      {c.label}
    </span>
  );
}

export function BpomBadge({ status, size = "sm" }: { status: BpomStatus; size?: "sm" | "md" }) {
  const c = bpomConfig[status];
  const padding = size === "md" ? "px-3 py-1" : "px-2 py-0.5";
  const text = size === "md" ? "text-xs" : "text-[11px]";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full ${padding} ${text} font-medium border ${c.classes}`}>
      <span className="text-[10px]">{c.icon}</span>
      {c.label}
    </span>
  );
}
