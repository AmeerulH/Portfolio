import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Catalogue-sheet OG card: warm grey ground, ink type, one orange mark. */
export function ogCard({ eyebrow, title, line }: { eyebrow: string; title: string; line?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#EDEBE6", color: "#1E1E1E", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, letterSpacing: 3, textTransform: "uppercase", color: "#5A5A56" }}>
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#E2461E" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, maxWidth: 1000 }}>{title}</div>
          {line && <div style={{ fontSize: 34, color: "#5A5A56", maxWidth: 900, lineHeight: 1.3 }}>{line}</div>}
        </div>
        <div style={{ fontSize: 26, color: "#5A5A56" }}>Ameerul Hady</div>
      </div>
    ),
    ogSize,
  );
}
