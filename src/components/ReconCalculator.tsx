"use client";

import { useState, useMemo } from "react";

const PRESETS = [
  { name: "BPC-157", vial: 5, water: 2, dose: 0.25 },
  { name: "TB-500", vial: 5, water: 2, dose: 2 },
  { name: "Ipamorelin", vial: 5, water: 2, dose: 0.3 },
  { name: "CJC-1295", vial: 5, water: 2, dose: 0.1 },
  { name: "Semaglutide", vial: 5, water: 2, dose: 0.25 },
  { name: "GHK-Cu", vial: 50, water: 5, dose: 1 },
];

export default function ReconCalculator() {
  const [vialMg, setVialMg] = useState(5);
  const [waterMl, setWaterMl] = useState(2);
  const [doseMg, setDoseMg] = useState(0.25);
  const [doseUnit, setDoseUnit] = useState<"mg" | "mcg">("mg");

  const doseInMg = doseUnit === "mcg" ? doseMg / 1000 : doseMg;

  const result = useMemo(() => {
    if (vialMg <= 0 || waterMl <= 0 || doseInMg <= 0) return null;
    const concentration = vialMg / waterMl; // mg/mL
    const volumePerDose = doseInMg / concentration; // mL
    const insulinUnits = volumePerDose * 100; // U-100 syringe = 100 units per mL
    const totalDoses = vialMg / doseInMg;
    return {
      concentration,
      volumePerDose,
      insulinUnits,
      totalDoses,
    };
  }, [vialMg, waterMl, doseInMg]);

  function applyPreset(p: typeof PRESETS[number]) {
    setVialMg(p.vial);
    setWaterMl(p.water);
    setDoseMg(p.dose);
    setDoseUnit("mg");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">Input</h2>
        <p className="text-sm text-slate-500 mb-5">Masukkan informasi vial peptida Anda</p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">
              Ukuran Vial (mg)
            </label>
            <p className="text-xs text-slate-400 mb-2">Total peptida dalam vial</p>
            <div className="relative">
              <input
                type="number"
                value={vialMg || ""}
                onChange={(e) => setVialMg(parseFloat(e.target.value) || 0)}
                step="0.5"
                min="0"
                className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">mg</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">
              Volume BAC Water (mL)
            </label>
            <p className="text-xs text-slate-400 mb-2">Bacteriostatic water yang ditambahkan</p>
            <div className="relative">
              <input
                type="number"
                value={waterMl || ""}
                onChange={(e) => setWaterMl(parseFloat(e.target.value) || 0)}
                step="0.5"
                min="0"
                className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">mL</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">
              Dosis per Injeksi
            </label>
            <p className="text-xs text-slate-400 mb-2">Jumlah peptida yang ingin diinjeksikan</p>
            <div className="flex gap-2">
              <input
                type="number"
                value={doseMg || ""}
                onChange={(e) => setDoseMg(parseFloat(e.target.value) || 0)}
                step={doseUnit === "mg" ? "0.05" : "50"}
                min="0"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="flex rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setDoseUnit("mg")}
                  className={`px-4 text-sm font-medium ${doseUnit === "mg" ? "bg-teal-600 text-white" : "bg-white text-slate-600"}`}
                >
                  mg
                </button>
                <button
                  type="button"
                  onClick={() => setDoseUnit("mcg")}
                  className={`px-4 text-sm font-medium ${doseUnit === "mcg" ? "bg-teal-600 text-white" : "bg-white text-slate-600"}`}
                >
                  mcg
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Presets */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
            Preset cepat
          </p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 hover:bg-teal-50 hover:text-teal-700 border border-slate-200 hover:border-teal-200 text-slate-600 transition-all"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 p-6 text-white">
        <h2 className="text-lg font-semibold mb-1">Hasil Kalkulasi</h2>
        <p className="text-sm text-teal-100 mb-5">Informasi yang Anda butuhkan untuk dosing</p>

        {result ? (
          <div className="space-y-3">
            <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/10">
              <p className="text-xs text-teal-100 uppercase tracking-wider">Konsentrasi</p>
              <p className="mt-1 text-3xl font-bold">
                {result.concentration.toFixed(2)}
                <span className="text-base font-normal text-teal-200 ml-1">mg/mL</span>
              </p>
            </div>

            <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/10">
              <p className="text-xs text-teal-100 uppercase tracking-wider">Volume per Injeksi</p>
              <p className="mt-1 text-3xl font-bold">
                {result.volumePerDose.toFixed(3)}
                <span className="text-base font-normal text-teal-200 ml-1">mL</span>
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border-2 border-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-teal-700 uppercase tracking-wider font-semibold">
                    Tarik di Syringe (U-100)
                  </p>
                  <p className="mt-1 text-3xl font-bold text-slate-900">
                    {result.insulinUnits.toFixed(0)}
                    <span className="text-base font-normal text-slate-500 ml-1">unit</span>
                  </p>
                </div>
                <div className="text-4xl">💉</div>
              </div>
              {/* Visual syringe */}
              <div className="mt-3 relative h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all"
                  style={{ width: `${Math.min(100, (result.insulinUnits / 100) * 100)}%` }}
                />
                {[25, 50, 75].map((tick) => (
                  <div
                    key={tick}
                    className="absolute top-0 h-full w-px bg-slate-300"
                    style={{ left: `${tick}%` }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
              </div>
            </div>

            <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/10">
              <p className="text-xs text-teal-100 uppercase tracking-wider">Total Dosis per Vial</p>
              <p className="mt-1 text-3xl font-bold">
                {Math.floor(result.totalDoses)}
                <span className="text-base font-normal text-teal-200 ml-1">dosis</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-teal-200 text-sm py-8 text-center">
            Masukkan nilai untuk melihat hasil kalkulasi
          </div>
        )}
      </div>
    </div>
  );
}
