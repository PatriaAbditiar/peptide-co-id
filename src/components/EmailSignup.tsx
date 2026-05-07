"use client";

import { useState } from "react";

export default function EmailSignup({ variant = "default" }: { variant?: "default" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  const isDark = variant === "dark";

  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${isDark ? "bg-slate-800/50 border border-slate-700/50" : "bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100"}`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? "bg-teal-500/20" : "bg-teal-100"}`}>
          <svg className={`w-5 h-5 ${isDark ? "text-teal-400" : "text-teal-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            Dapatkan Update Terbaru
          </h3>
          <p className={`mt-0.5 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Update riset peptida terbaru langsung ke inbox Anda. Gratis, tanpa spam.
          </p>
        </div>
      </div>

      {status === "success" ? (
        <div className="mt-4 flex items-center gap-2 p-3 bg-teal-500/10 rounded-xl">
          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm font-medium text-teal-600">Terima kasih! Email Anda telah terdaftar.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@email.com"
            required
            className={`flex-1 px-4 py-2.5 rounded-xl text-sm transition-all ${
              isDark
                ? "bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
            } focus:outline-none`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Daftar Gratis"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-red-500">Terjadi kesalahan. Silakan coba lagi.</p>
      )}
    </div>
  );
}
