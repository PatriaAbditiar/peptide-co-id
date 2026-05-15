import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Peptide.co.id — Pusat Informasi Peptida Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0d9488 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            peptide<span style={{ color: "#64748b" }}>.co.id</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#5eead4",
              fontSize: "18px",
              alignSelf: "flex-start",
            }}
          >
            • 40+ peptida terdokumentasi
          </div>
          <div
            style={{
              color: "white",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Pusat Informasi Peptida Terlengkap di Indonesia
          </div>
          <div
            style={{
              color: "#94a3b8",
              fontSize: "26px",
              maxWidth: "800px",
              marginTop: "8px",
            }}
          >
            Panduan, kalkulator, stack guide, dan direktori toko peptida —
            semua dalam Bahasa Indonesia.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
